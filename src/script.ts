import {
  nvmToJSON,
  nvm500ToJSON,
  jsonToNVM500,
  jsonToNVM,
} from "@zwave-js/nvmedit";
import { isZWaveError, ZWaveErrorCodes } from "@zwave-js/core/error";


const txtNVMType = document.getElementById("nvm_type") as HTMLInputElement;
const jsonEditor = document.getElementById("json") as HTMLTextAreaElement;
const txtProtocolVersion = document.getElementById(
  "protocol_version"
) as HTMLInputElement;

const lblErrorMessage = document.getElementById(
  "error-message"
) as HTMLDivElement;

const btnLoad = document.getElementById("btnLoad") as HTMLButtonElement;
const fileInput = document.getElementById("file") as HTMLInputElement;

const btnSave = document.getElementById("btnSave") as HTMLButtonElement;

btnLoad.onclick = () => fileInput.click();

fileInput.addEventListener("change", function (event) {
  const file = (event.target as HTMLInputElement).files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const content = e.target.result as ArrayBuffer;
      parseNVM(new Uint8Array(content));
    };
    reader.readAsArrayBuffer(file);
  }
});

async function parseNVM(buffer: Uint8Array) {
  let json: any;
  let type: string;
  try {
    // Check if this is a 700 series NVM
    json = await nvmToJSON(buffer);
    type = "700/800 series";
  } catch (e) {
    if (isZWaveError(e) && e.code === ZWaveErrorCodes.NVM_InvalidFormat) {
      // not 700 series, maybe 500 series?
      try {
        json = await nvm500ToJSON(buffer);
        type = "500 series";
      } catch (e) {
        if (isZWaveError(e) && e.code === ZWaveErrorCodes.NVM_InvalidFormat) {
          lblErrorMessage.innerText = e.message;
          return;
        }

        lblErrorMessage.innerText = e.message;
        return;
      }
    } else if (
      isZWaveError(e) &&
      e.code === ZWaveErrorCodes.NVM_NotSupported &&
      typeof e.context === "object" &&
      e.context &&
      "protocolFileFormat" in e.context &&
      typeof e.context.protocolFileFormat === "number"
    ) {
      // 700 series format NVM with unsupported protocol file format
      lblErrorMessage.innerText =
        "Unsupported protocol file format: " + e.context.protocolFileFormat;
      return;
    } else {
      lblErrorMessage.innerText = e.message;
      return;
    }
  }

  // Success!
  lblErrorMessage.innerText = "";
  txtNVMType.value = type;
  txtProtocolVersion.value = json.controller.protocolVersion;
  jsonEditor.value = JSON.stringify(json, null, 2);
}

async function saveNVM() {
  const protocolVersion = txtProtocolVersion.value;
  const versionIs500 = /^\d\.\d+$/.test(protocolVersion);

  // Parse the JSON
  let json: any;
  try {
    json = JSON.parse(jsonEditor.value);
  } catch (e) {
    lblErrorMessage.innerText = "Failed to parse JSON: " + e.message;
    return;
  }

  const jsonIs500 = json.format === 500;
  if (versionIs500 && !jsonIs500) {
    lblErrorMessage.innerText = `ERROR: Protocol version ${protocolVersion} looks like a 500-series version, but the JSON file does not belong to a 500-series NVM!
Convert it first using the 700to500 command.`;
    return;
  } else if (jsonIs500 && !versionIs500) {
    lblErrorMessage.innerText = `ERROR: Protocol version ${protocolVersion} looks like a 700-series version, but the JSON file belong to a 500-series NVM!
Convert it first using the 500to700 command.`;
    return;
  }

  if (!json.meta || typeof json.meta !== "object") {
    lblErrorMessage.innerText = `ERROR: The JSON file does not contain the meta section, which is required for the conversion to a binary NVM!
Create a backup of the target stick, use the nvm2json command to convert it to JSON and copy the meta section from there.`;
    return;
  }

  lblErrorMessage.innerText = "";

  const nvm = versionIs500
    ? await jsonToNVM500(json, protocolVersion)
    : await jsonToNVM(json, protocolVersion);

  // Offer the converted NVM for download
  const blob = new Blob([nvm], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nvm_${protocolVersion}.bin`;
  a.click();
  URL.revokeObjectURL(url);
}

btnSave.onclick = saveNVM;
