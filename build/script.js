var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/reflect-metadata/Reflect.js
var require_Reflect = __commonJS({
  "node_modules/reflect-metadata/Reflect.js"() {
    var Reflect2;
    (function(Reflect3) {
      (function(factory) {
        var root = typeof globalThis === "object" ? globalThis : typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
        var exporter = makeExporter(Reflect3);
        if (typeof root.Reflect !== "undefined") {
          exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter, root);
        if (typeof root.Reflect === "undefined") {
          root.Reflect = Reflect3;
        }
        function makeExporter(target, previous) {
          return function(key, value) {
            Object.defineProperty(target, key, { configurable: true, writable: true, value });
            if (previous)
              previous(key, value);
          };
        }
        function functionThis() {
          try {
            return Function("return this;")();
          } catch (_) {
          }
        }
        function indirectEvalThis() {
          try {
            return (void 0, eval)("(function() { return this; })()");
          } catch (_) {
          }
        }
        function sloppyModeThis() {
          return functionThis() || indirectEvalThis();
        }
      })(function(exporter, root) {
        var hasOwn = Object.prototype.hasOwnProperty;
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function";
        var supportsProto = { __proto__: [] } instanceof Array;
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
          // create an object in dictionary mode (a.k.a. "slow" mode in v8)
          create: supportsCreate ? function() {
            return MakeDictionary(/* @__PURE__ */ Object.create(null));
          } : supportsProto ? function() {
            return MakeDictionary({ __proto__: null });
          } : function() {
            return MakeDictionary({});
          },
          has: downLevel ? function(map, key) {
            return hasOwn.call(map, key);
          } : function(map, key) {
            return key in map;
          },
          get: downLevel ? function(map, key) {
            return hasOwn.call(map, key) ? map[key] : void 0;
          } : function(map, key) {
            return map[key];
          }
        };
        var functionPrototype = Object.getPrototypeOf(Function);
        var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
        var metadataRegistry = GetOrCreateMetadataRegistry();
        var metadataProvider = CreateMetadataProvider(metadataRegistry);
        function decorate(decorators, target, propertyKey, attributes) {
          if (!IsUndefined(propertyKey)) {
            if (!IsArray(decorators))
              throw new TypeError();
            if (!IsObject(target))
              throw new TypeError();
            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
              throw new TypeError();
            if (IsNull(attributes))
              attributes = void 0;
            propertyKey = ToPropertyKey(propertyKey);
            return DecorateProperty(decorators, target, propertyKey, attributes);
          } else {
            if (!IsArray(decorators))
              throw new TypeError();
            if (!IsConstructor(target))
              throw new TypeError();
            return DecorateConstructor(decorators, target);
          }
        }
        exporter("decorate", decorate);
        function metadata(metadataKey, metadataValue) {
          function decorator(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
              throw new TypeError();
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          return decorator;
        }
        exporter("metadata", metadata);
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        function hasMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        function hasOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        function getMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        function getOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        function getMetadataKeys(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        function getOwnMetadataKeys(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        function deleteMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          var provider = GetMetadataProvider(
            target,
            propertyKey,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return false;
          return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsConstructor(decorated))
                throw new TypeError();
              target = decorated;
            }
          }
          return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsObject(decorated))
                throw new TypeError();
              descriptor = decorated;
            }
          }
          return descriptor;
        }
        function OrdinaryHasMetadata(MetadataKey, O, P) {
          var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn2)
            return true;
          var parent = OrdinaryGetPrototypeOf(O);
          if (!IsNull(parent))
            return OrdinaryHasMetadata(MetadataKey, parent, P);
          return false;
        }
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return false;
          return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
        }
        function OrdinaryGetMetadata(MetadataKey, O, P) {
          var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn2)
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
          var parent = OrdinaryGetPrototypeOf(O);
          if (!IsNull(parent))
            return OrdinaryGetMetadata(MetadataKey, parent, P);
          return void 0;
        }
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return;
          return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            true
          );
          provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
        }
        function OrdinaryMetadataKeys(O, P) {
          var ownKeys = OrdinaryOwnMetadataKeys(O, P);
          var parent = OrdinaryGetPrototypeOf(O);
          if (parent === null)
            return ownKeys;
          var parentKeys = OrdinaryMetadataKeys(parent, P);
          if (parentKeys.length <= 0)
            return ownKeys;
          if (ownKeys.length <= 0)
            return parentKeys;
          var set = new _Set();
          var keys = [];
          for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          return keys;
        }
        function OrdinaryOwnMetadataKeys(O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*create*/
            false
          );
          if (!provider) {
            return [];
          }
          return provider.OrdinaryOwnMetadataKeys(O, P);
        }
        function Type(x) {
          if (x === null)
            return 1;
          switch (typeof x) {
            case "undefined":
              return 0;
            case "boolean":
              return 2;
            case "string":
              return 3;
            case "symbol":
              return 4;
            case "number":
              return 5;
            case "object":
              return x === null ? 1 : 6;
            default:
              return 6;
          }
        }
        function IsUndefined(x) {
          return x === void 0;
        }
        function IsNull(x) {
          return x === null;
        }
        function IsSymbol(x) {
          return typeof x === "symbol";
        }
        function IsObject(x) {
          return typeof x === "object" ? x !== null : typeof x === "function";
        }
        function ToPrimitive(input, PreferredType) {
          switch (Type(input)) {
            case 0:
              return input;
            case 1:
              return input;
            case 2:
              return input;
            case 3:
              return input;
            case 4:
              return input;
            case 5:
              return input;
          }
          var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
          var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
          if (exoticToPrim !== void 0) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result))
              throw new TypeError();
            return result;
          }
          return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        function OrdinaryToPrimitive(O, hint) {
          if (hint === "string") {
            var toString_1 = O.toString;
            if (IsCallable(toString_1)) {
              var result = toString_1.call(O);
              if (!IsObject(result))
                return result;
            }
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O);
              if (!IsObject(result))
                return result;
            }
          } else {
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O);
              if (!IsObject(result))
                return result;
            }
            var toString_2 = O.toString;
            if (IsCallable(toString_2)) {
              var result = toString_2.call(O);
              if (!IsObject(result))
                return result;
            }
          }
          throw new TypeError();
        }
        function ToBoolean(argument) {
          return !!argument;
        }
        function ToString(argument) {
          return "" + argument;
        }
        function ToPropertyKey(argument) {
          var key = ToPrimitive(
            argument,
            3
            /* String */
          );
          if (IsSymbol(key))
            return key;
          return ToString(key);
        }
        function IsArray(argument) {
          return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
        }
        function IsCallable(argument) {
          return typeof argument === "function";
        }
        function IsConstructor(argument) {
          return typeof argument === "function";
        }
        function IsPropertyKey(argument) {
          switch (Type(argument)) {
            case 3:
              return true;
            case 4:
              return true;
            default:
              return false;
          }
        }
        function SameValueZero(x, y) {
          return x === y || x !== x && y !== y;
        }
        function GetMethod(V, P) {
          var func = V[P];
          if (func === void 0 || func === null)
            return void 0;
          if (!IsCallable(func))
            throw new TypeError();
          return func;
        }
        function GetIterator(obj) {
          var method = GetMethod(obj, iteratorSymbol);
          if (!IsCallable(method))
            throw new TypeError();
          var iterator = method.call(obj);
          if (!IsObject(iterator))
            throw new TypeError();
          return iterator;
        }
        function IteratorValue(iterResult) {
          return iterResult.value;
        }
        function IteratorStep(iterator) {
          var result = iterator.next();
          return result.done ? false : result;
        }
        function IteratorClose(iterator) {
          var f = iterator["return"];
          if (f)
            f.call(iterator);
        }
        function OrdinaryGetPrototypeOf(O) {
          var proto = Object.getPrototypeOf(O);
          if (typeof O !== "function" || O === functionPrototype)
            return proto;
          if (proto !== functionPrototype)
            return proto;
          var prototype = O.prototype;
          var prototypeProto = prototype && Object.getPrototypeOf(prototype);
          if (prototypeProto == null || prototypeProto === Object.prototype)
            return proto;
          var constructor = prototypeProto.constructor;
          if (typeof constructor !== "function")
            return proto;
          if (constructor === O)
            return proto;
          return constructor;
        }
        function CreateMetadataRegistry() {
          var fallback;
          if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
            fallback = CreateFallbackProvider(root.Reflect);
          }
          var first;
          var second;
          var rest;
          var targetProviderMap = new _WeakMap();
          var registry = {
            registerProvider,
            getProvider,
            setProvider
          };
          return registry;
          function registerProvider(provider) {
            if (!Object.isExtensible(registry)) {
              throw new Error("Cannot add provider to a frozen registry.");
            }
            switch (true) {
              case fallback === provider:
                break;
              case IsUndefined(first):
                first = provider;
                break;
              case first === provider:
                break;
              case IsUndefined(second):
                second = provider;
                break;
              case second === provider:
                break;
              default:
                if (rest === void 0)
                  rest = new _Set();
                rest.add(provider);
                break;
            }
          }
          function getProviderNoCache(O, P) {
            if (!IsUndefined(first)) {
              if (first.isProviderFor(O, P))
                return first;
              if (!IsUndefined(second)) {
                if (second.isProviderFor(O, P))
                  return first;
                if (!IsUndefined(rest)) {
                  var iterator = GetIterator(rest);
                  while (true) {
                    var next = IteratorStep(iterator);
                    if (!next) {
                      return void 0;
                    }
                    var provider = IteratorValue(next);
                    if (provider.isProviderFor(O, P)) {
                      IteratorClose(iterator);
                      return provider;
                    }
                  }
                }
              }
            }
            if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
              return fallback;
            }
            return void 0;
          }
          function getProvider(O, P) {
            var providerMap = targetProviderMap.get(O);
            var provider;
            if (!IsUndefined(providerMap)) {
              provider = providerMap.get(P);
            }
            if (!IsUndefined(provider)) {
              return provider;
            }
            provider = getProviderNoCache(O, P);
            if (!IsUndefined(provider)) {
              if (IsUndefined(providerMap)) {
                providerMap = new _Map();
                targetProviderMap.set(O, providerMap);
              }
              providerMap.set(P, provider);
            }
            return provider;
          }
          function hasProvider(provider) {
            if (IsUndefined(provider))
              throw new TypeError();
            return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
          }
          function setProvider(O, P, provider) {
            if (!hasProvider(provider)) {
              throw new Error("Metadata provider not registered.");
            }
            var existingProvider = getProvider(O, P);
            if (existingProvider !== provider) {
              if (!IsUndefined(existingProvider)) {
                return false;
              }
              var providerMap = targetProviderMap.get(O);
              if (IsUndefined(providerMap)) {
                providerMap = new _Map();
                targetProviderMap.set(O, providerMap);
              }
              providerMap.set(P, provider);
            }
            return true;
          }
        }
        function GetOrCreateMetadataRegistry() {
          var metadataRegistry2;
          if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
            metadataRegistry2 = root.Reflect[registrySymbol];
          }
          if (IsUndefined(metadataRegistry2)) {
            metadataRegistry2 = CreateMetadataRegistry();
          }
          if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
            Object.defineProperty(root.Reflect, registrySymbol, {
              enumerable: false,
              configurable: false,
              writable: false,
              value: metadataRegistry2
            });
          }
          return metadataRegistry2;
        }
        function CreateMetadataProvider(registry) {
          var metadata2 = new _WeakMap();
          var provider = {
            isProviderFor: function(O, P) {
              var targetMetadata = metadata2.get(O);
              if (IsUndefined(targetMetadata))
                return false;
              return targetMetadata.has(P);
            },
            OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
            OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
            OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
            OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
            OrdinaryDeleteMetadata
          };
          metadataRegistry.registerProvider(provider);
          return provider;
          function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = metadata2.get(O);
            var createdTargetMetadata = false;
            if (IsUndefined(targetMetadata)) {
              if (!Create)
                return void 0;
              targetMetadata = new _Map();
              metadata2.set(O, targetMetadata);
              createdTargetMetadata = true;
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
              if (!Create)
                return void 0;
              metadataMap = new _Map();
              targetMetadata.set(P, metadataMap);
              if (!registry.setProvider(O, P, provider)) {
                targetMetadata.delete(P);
                if (createdTargetMetadata) {
                  metadata2.delete(O);
                }
                throw new Error("Wrong provider for target.");
              }
            }
            return metadataMap;
          }
          function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return false;
            return ToBoolean(metadataMap.has(MetadataKey));
          }
          function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return void 0;
            return metadataMap.get(MetadataKey);
          }
          function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              true
            );
            metadataMap.set(MetadataKey, MetadataValue);
          }
          function OrdinaryOwnMetadataKeys2(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
              var next = IteratorStep(iterator);
              if (!next) {
                keys.length = k;
                return keys;
              }
              var nextValue = IteratorValue(next);
              try {
                keys[k] = nextValue;
              } catch (e) {
                try {
                  IteratorClose(iterator);
                } finally {
                  throw e;
                }
              }
              k++;
            }
          }
          function OrdinaryDeleteMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return false;
            if (!metadataMap.delete(MetadataKey))
              return false;
            if (metadataMap.size === 0) {
              var targetMetadata = metadata2.get(O);
              if (!IsUndefined(targetMetadata)) {
                targetMetadata.delete(P);
                if (targetMetadata.size === 0) {
                  metadata2.delete(targetMetadata);
                }
              }
            }
            return true;
          }
        }
        function CreateFallbackProvider(reflect) {
          var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
          var metadataOwner = new _WeakMap();
          var provider = {
            isProviderFor: function(O, P) {
              var metadataPropertySet = metadataOwner.get(O);
              if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
                return true;
              }
              if (getOwnMetadataKeys2(O, P).length) {
                if (IsUndefined(metadataPropertySet)) {
                  metadataPropertySet = new _Set();
                  metadataOwner.set(O, metadataPropertySet);
                }
                metadataPropertySet.add(P);
                return true;
              }
              return false;
            },
            OrdinaryDefineOwnMetadata: defineMetadata2,
            OrdinaryHasOwnMetadata: hasOwnMetadata2,
            OrdinaryGetOwnMetadata: getOwnMetadata2,
            OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
            OrdinaryDeleteMetadata: deleteMetadata2
          };
          return provider;
        }
        function GetMetadataProvider(O, P, Create) {
          var registeredProvider = metadataRegistry.getProvider(O, P);
          if (!IsUndefined(registeredProvider)) {
            return registeredProvider;
          }
          if (Create) {
            if (metadataRegistry.setProvider(O, P, metadataProvider)) {
              return metadataProvider;
            }
            throw new Error("Illegal state.");
          }
          return void 0;
        }
        function CreateMapPolyfill() {
          var cacheSentinel = {};
          var arraySentinel = [];
          var MapIterator = (
            /** @class */
            function() {
              function MapIterator2(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
              }
              MapIterator2.prototype["@@iterator"] = function() {
                return this;
              };
              MapIterator2.prototype[iteratorSymbol] = function() {
                return this;
              };
              MapIterator2.prototype.next = function() {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                  var result = this._selector(this._keys[index], this._values[index]);
                  if (index + 1 >= this._keys.length) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  } else {
                    this._index++;
                  }
                  return { value: result, done: false };
                }
                return { value: void 0, done: true };
              };
              MapIterator2.prototype.throw = function(error) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                throw error;
              };
              MapIterator2.prototype.return = function(value) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                return { value, done: true };
              };
              return MapIterator2;
            }()
          );
          var Map2 = (
            /** @class */
            function() {
              function Map3() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              Object.defineProperty(Map3.prototype, "size", {
                get: function() {
                  return this._keys.length;
                },
                enumerable: true,
                configurable: true
              });
              Map3.prototype.has = function(key) {
                return this._find(
                  key,
                  /*insert*/
                  false
                ) >= 0;
              };
              Map3.prototype.get = function(key) {
                var index = this._find(
                  key,
                  /*insert*/
                  false
                );
                return index >= 0 ? this._values[index] : void 0;
              };
              Map3.prototype.set = function(key, value) {
                var index = this._find(
                  key,
                  /*insert*/
                  true
                );
                this._values[index] = value;
                return this;
              };
              Map3.prototype.delete = function(key) {
                var index = this._find(
                  key,
                  /*insert*/
                  false
                );
                if (index >= 0) {
                  var size = this._keys.length;
                  for (var i = index + 1; i < size; i++) {
                    this._keys[i - 1] = this._keys[i];
                    this._values[i - 1] = this._values[i];
                  }
                  this._keys.length--;
                  this._values.length--;
                  if (SameValueZero(key, this._cacheKey)) {
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                  }
                  return true;
                }
                return false;
              };
              Map3.prototype.clear = function() {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              };
              Map3.prototype.keys = function() {
                return new MapIterator(this._keys, this._values, getKey);
              };
              Map3.prototype.values = function() {
                return new MapIterator(this._keys, this._values, getValue);
              };
              Map3.prototype.entries = function() {
                return new MapIterator(this._keys, this._values, getEntry);
              };
              Map3.prototype["@@iterator"] = function() {
                return this.entries();
              };
              Map3.prototype[iteratorSymbol] = function() {
                return this.entries();
              };
              Map3.prototype._find = function(key, insert) {
                if (!SameValueZero(this._cacheKey, key)) {
                  this._cacheIndex = -1;
                  for (var i = 0; i < this._keys.length; i++) {
                    if (SameValueZero(this._keys[i], key)) {
                      this._cacheIndex = i;
                      break;
                    }
                  }
                }
                if (this._cacheIndex < 0 && insert) {
                  this._cacheIndex = this._keys.length;
                  this._keys.push(key);
                  this._values.push(void 0);
                }
                return this._cacheIndex;
              };
              return Map3;
            }()
          );
          return Map2;
          function getKey(key, _) {
            return key;
          }
          function getValue(_, value) {
            return value;
          }
          function getEntry(key, value) {
            return [key, value];
          }
        }
        function CreateSetPolyfill() {
          var Set2 = (
            /** @class */
            function() {
              function Set3() {
                this._map = new _Map();
              }
              Object.defineProperty(Set3.prototype, "size", {
                get: function() {
                  return this._map.size;
                },
                enumerable: true,
                configurable: true
              });
              Set3.prototype.has = function(value) {
                return this._map.has(value);
              };
              Set3.prototype.add = function(value) {
                return this._map.set(value, value), this;
              };
              Set3.prototype.delete = function(value) {
                return this._map.delete(value);
              };
              Set3.prototype.clear = function() {
                this._map.clear();
              };
              Set3.prototype.keys = function() {
                return this._map.keys();
              };
              Set3.prototype.values = function() {
                return this._map.keys();
              };
              Set3.prototype.entries = function() {
                return this._map.entries();
              };
              Set3.prototype["@@iterator"] = function() {
                return this.keys();
              };
              Set3.prototype[iteratorSymbol] = function() {
                return this.keys();
              };
              return Set3;
            }()
          );
          return Set2;
        }
        function CreateWeakMapPolyfill() {
          var UUID_SIZE = 16;
          var keys = HashMap.create();
          var rootKey = CreateUniqueKey();
          return (
            /** @class */
            function() {
              function WeakMap2() {
                this._key = CreateUniqueKey();
              }
              WeakMap2.prototype.has = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? HashMap.has(table, this._key) : false;
              };
              WeakMap2.prototype.get = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? HashMap.get(table, this._key) : void 0;
              };
              WeakMap2.prototype.set = function(target, value) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  true
                );
                table[this._key] = value;
                return this;
              };
              WeakMap2.prototype.delete = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? delete table[this._key] : false;
              };
              WeakMap2.prototype.clear = function() {
                this._key = CreateUniqueKey();
              };
              return WeakMap2;
            }()
          );
          function CreateUniqueKey() {
            var key;
            do
              key = "@@WeakMap@@" + CreateUUID();
            while (HashMap.has(keys, key));
            keys[key] = true;
            return key;
          }
          function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
              if (!create)
                return void 0;
              Object.defineProperty(target, rootKey, { value: HashMap.create() });
            }
            return target[rootKey];
          }
          function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i)
              buffer[i] = Math.random() * 255 | 0;
            return buffer;
          }
          function GenRandomBytes(size) {
            if (typeof Uint8Array === "function") {
              var array = new Uint8Array(size);
              if (typeof crypto !== "undefined") {
                crypto.getRandomValues(array);
              } else if (typeof msCrypto !== "undefined") {
                msCrypto.getRandomValues(array);
              } else {
                FillRandomBytes(array, size);
              }
              return array;
            }
            return FillRandomBytes(new Array(size), size);
          }
          function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            data[6] = data[6] & 79 | 64;
            data[8] = data[8] & 191 | 128;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
              var byte = data[offset];
              if (offset === 4 || offset === 6 || offset === 8)
                result += "-";
              if (byte < 16)
                result += "0";
              result += byte.toString(16).toLowerCase();
            }
            return result;
          }
        }
        function MakeDictionary(obj) {
          obj.__ = void 0;
          delete obj.__;
          return obj;
        }
      });
    })(Reflect2 || (Reflect2 = {}));
  }
});

// node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/semver/internal/debug.js"(exports, module) {
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module.exports = debug;
  }
});

// node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "node_modules/semver/internal/constants.js"(exports, module) {
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/semver/internal/re.js"(exports, module) {
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports = module.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/semver/internal/parse-options.js"(exports, module) {
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module.exports = parseOptions;
  }
});

// node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/semver/internal/identifiers.js"(exports, module) {
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/semver/classes/semver.js"(exports, module) {
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("build compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (!identifier && identifierBase === false) {
              throw new Error("invalid increment argument: identifier is empty");
            }
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module.exports = SemVer;
  }
});

// node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/semver/functions/compare.js"(exports, module) {
    var SemVer = require_semver();
    var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module.exports = compare;
  }
});

// node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/semver/functions/gte.js"(exports, module) {
    var compare = require_compare();
    var gte = (a, b, loose) => compare(a, b, loose) >= 0;
    module.exports = gte;
  }
});

// node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/semver/functions/lt.js"(exports, module) {
    var compare = require_compare();
    var lt = (a, b, loose) => compare(a, b, loose) < 0;
    module.exports = lt;
  }
});

// node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/semver/functions/lte.js"(exports, module) {
    var compare = require_compare();
    var lte = (a, b, loose) => compare(a, b, loose) <= 0;
    module.exports = lte;
  }
});

// node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/semver/functions/parse.js"(exports, module) {
    var SemVer = require_semver();
    var parse = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module.exports = parse;
  }
});

// node_modules/@zwave-js/nvmedit/build/esm/index_browser.js
var import_reflect_metadata3 = __toESM(require_Reflect(), 1);

// node_modules/@zwave-js/core/build/esm/error/ZWaveError.js
var ZWaveErrorCodes;
(function(ZWaveErrorCodes2) {
  ZWaveErrorCodes2[ZWaveErrorCodes2["PacketFormat_Truncated"] = 0] = "PacketFormat_Truncated";
  ZWaveErrorCodes2[ZWaveErrorCodes2["PacketFormat_Invalid"] = 1] = "PacketFormat_Invalid";
  ZWaveErrorCodes2[ZWaveErrorCodes2["PacketFormat_Checksum"] = 2] = "PacketFormat_Checksum";
  ZWaveErrorCodes2[ZWaveErrorCodes2["PacketFormat_InvalidPayload"] = 3] = "PacketFormat_InvalidPayload";
  ZWaveErrorCodes2[ZWaveErrorCodes2["PacketFormat_DecryptionFailed"] = 4] = "PacketFormat_DecryptionFailed";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Driver_Failed"] = 100] = "Driver_Failed";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Driver_Reset"] = 101] = "Driver_Reset";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Driver_Destroyed"] = 102] = "Driver_Destroyed";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Driver_NotReady"] = 103] = "Driver_NotReady";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Driver_InvalidDataReceived"] = 104] = "Driver_InvalidDataReceived";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Driver_NotSupported"] = 105] = "Driver_NotSupported";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Driver_NoPriority"] = 106] = "Driver_NoPriority";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Driver_InvalidCache"] = 107] = "Driver_InvalidCache";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Driver_InvalidOptions"] = 108] = "Driver_InvalidOptions";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Driver_NoSecurity"] = 109] = "Driver_NoSecurity";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Driver_NoErrorHandler"] = 110] = "Driver_NoErrorHandler";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Driver_FeatureDisabled"] = 111] = "Driver_FeatureDisabled";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Driver_TaskRemoved"] = 112] = "Driver_TaskRemoved";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_Timeout"] = 200] = "Controller_Timeout";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_NodeTimeout"] = 201] = "Controller_NodeTimeout";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_MessageDropped"] = 202] = "Controller_MessageDropped";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_ResponseNOK"] = 203] = "Controller_ResponseNOK";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_CallbackNOK"] = 204] = "Controller_CallbackNOK";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_Jammed"] = 205] = "Controller_Jammed";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_Reset"] = 206] = "Controller_Reset";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_InclusionFailed"] = 207] = "Controller_InclusionFailed";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_ExclusionFailed"] = 208] = "Controller_ExclusionFailed";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_NotSupported"] = 209] = "Controller_NotSupported";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_InterviewRestarted"] = 210] = "Controller_InterviewRestarted";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_NodeNotFound"] = 211] = "Controller_NodeNotFound";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_EndpointNotFound"] = 212] = "Controller_EndpointNotFound";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_NodeRemoved"] = 213] = "Controller_NodeRemoved";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_NodeInsecureCommunication"] = 214] = "Controller_NodeInsecureCommunication";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_MessageExpired"] = 215] = "Controller_MessageExpired";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_CommandError"] = 216] = "Controller_CommandError";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_MessageTooLarge"] = 217] = "Controller_MessageTooLarge";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Controller_NotSupportedForLongRange"] = 218] = "Controller_NotSupportedForLongRange";
  ZWaveErrorCodes2[ZWaveErrorCodes2["FWUpdateService_MissingInformation"] = 260] = "FWUpdateService_MissingInformation";
  ZWaveErrorCodes2[ZWaveErrorCodes2["FWUpdateService_RequestError"] = 261] = "FWUpdateService_RequestError";
  ZWaveErrorCodes2[ZWaveErrorCodes2["FWUpdateService_IntegrityCheckFailed"] = 262] = "FWUpdateService_IntegrityCheckFailed";
  ZWaveErrorCodes2[ZWaveErrorCodes2["FWUpdateService_DeviceMismatch"] = 263] = "FWUpdateService_DeviceMismatch";
  ZWaveErrorCodes2[ZWaveErrorCodes2["NVM_NotSupported"] = 280] = "NVM_NotSupported";
  ZWaveErrorCodes2[ZWaveErrorCodes2["NVM_InvalidJSON"] = 281] = "NVM_InvalidJSON";
  ZWaveErrorCodes2[ZWaveErrorCodes2["NVM_ObjectNotFound"] = 282] = "NVM_ObjectNotFound";
  ZWaveErrorCodes2[ZWaveErrorCodes2["NVM_InvalidFormat"] = 283] = "NVM_InvalidFormat";
  ZWaveErrorCodes2[ZWaveErrorCodes2["NVM_NoSpace"] = 284] = "NVM_NoSpace";
  ZWaveErrorCodes2[ZWaveErrorCodes2["NVM_NotOpen"] = 285] = "NVM_NotOpen";
  ZWaveErrorCodes2[ZWaveErrorCodes2["CC_Invalid"] = 300] = "CC_Invalid";
  ZWaveErrorCodes2[ZWaveErrorCodes2["CC_NoNodeID"] = 301] = "CC_NoNodeID";
  ZWaveErrorCodes2[ZWaveErrorCodes2["CC_NotSupported"] = 302] = "CC_NotSupported";
  ZWaveErrorCodes2[ZWaveErrorCodes2["CC_NotImplemented"] = 303] = "CC_NotImplemented";
  ZWaveErrorCodes2[ZWaveErrorCodes2["CC_NoAPI"] = 304] = "CC_NoAPI";
  ZWaveErrorCodes2[ZWaveErrorCodes2["CC_OperationFailed"] = 305] = "CC_OperationFailed";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Deserialization_NotImplemented"] = 320] = "Deserialization_NotImplemented";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Arithmetic"] = 321] = "Arithmetic";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Argument_Invalid"] = 322] = "Argument_Invalid";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Config_Invalid"] = 340] = "Config_Invalid";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Config_NotFound"] = 341] = "Config_NotFound";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Config_CircularImport"] = 342] = "Config_CircularImport";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Config_Update_RegistryError"] = 343] = "Config_Update_RegistryError";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Config_Update_PackageManagerNotFound"] = 344] = "Config_Update_PackageManagerNotFound";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Config_Update_InstallFailed"] = 345] = "Config_Update_InstallFailed";
  ZWaveErrorCodes2[ZWaveErrorCodes2["RemoveFailedNode_Failed"] = 360] = "RemoveFailedNode_Failed";
  ZWaveErrorCodes2[ZWaveErrorCodes2["RemoveFailedNode_NodeOK"] = 361] = "RemoveFailedNode_NodeOK";
  ZWaveErrorCodes2[ZWaveErrorCodes2["ReplaceFailedNode_Failed"] = 362] = "ReplaceFailedNode_Failed";
  ZWaveErrorCodes2[ZWaveErrorCodes2["ReplaceFailedNode_NodeOK"] = 363] = "ReplaceFailedNode_NodeOK";
  ZWaveErrorCodes2[ZWaveErrorCodes2["OTW_Update_Busy"] = 380] = "OTW_Update_Busy";
  ZWaveErrorCodes2[ZWaveErrorCodes2["HealthCheck_Busy"] = 400] = "HealthCheck_Busy";
  ZWaveErrorCodes2[ZWaveErrorCodes2["LinkReliabilityCheck_Busy"] = 401] = "LinkReliabilityCheck_Busy";
  ZWaveErrorCodes2[ZWaveErrorCodes2["ConfigurationCC_FirstParameterNumber"] = 1e3] = "ConfigurationCC_FirstParameterNumber";
  ZWaveErrorCodes2[ZWaveErrorCodes2["ConfigurationCC_NoLegacyScanOnNewDevices"] = 1001] = "ConfigurationCC_NoLegacyScanOnNewDevices";
  ZWaveErrorCodes2[ZWaveErrorCodes2["ConfigurationCC_NoResetToDefaultOnLegacyDevices"] = 1002] = "ConfigurationCC_NoResetToDefaultOnLegacyDevices";
  ZWaveErrorCodes2[ZWaveErrorCodes2["SupervisionCC_CommandFailed"] = 1100] = "SupervisionCC_CommandFailed";
  ZWaveErrorCodes2[ZWaveErrorCodes2["ManufacturerProprietaryCC_NoManufacturerId"] = 1200] = "ManufacturerProprietaryCC_NoManufacturerId";
  ZWaveErrorCodes2[ZWaveErrorCodes2["AssociationCC_InvalidGroup"] = 1300] = "AssociationCC_InvalidGroup";
  ZWaveErrorCodes2[ZWaveErrorCodes2["AssociationCC_NotAllowed"] = 1301] = "AssociationCC_NotAllowed";
  ZWaveErrorCodes2[ZWaveErrorCodes2["SecurityCC_NoNonce"] = 1400] = "SecurityCC_NoNonce";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Security2CC_NoSPAN"] = 1401] = "Security2CC_NoSPAN";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Security2CC_NotInitialized"] = 1402] = "Security2CC_NotInitialized";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Security2CC_NotSecure"] = 1403] = "Security2CC_NotSecure";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Security2CC_MissingExtension"] = 1404] = "Security2CC_MissingExtension";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Security2CC_CannotDecode"] = 1405] = "Security2CC_CannotDecode";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Security2CC_InvalidQRCode"] = 1406] = "Security2CC_InvalidQRCode";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Security2CC_NoMPAN"] = 1407] = "Security2CC_NoMPAN";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Security2CC_CannotDecodeMulticast"] = 1408] = "Security2CC_CannotDecodeMulticast";
  ZWaveErrorCodes2[ZWaveErrorCodes2["FirmwareUpdateCC_Busy"] = 1500] = "FirmwareUpdateCC_Busy";
  ZWaveErrorCodes2[ZWaveErrorCodes2["FirmwareUpdateCC_NotUpgradable"] = 1501] = "FirmwareUpdateCC_NotUpgradable";
  ZWaveErrorCodes2[ZWaveErrorCodes2["FirmwareUpdateCC_TargetNotFound"] = 1502] = "FirmwareUpdateCC_TargetNotFound";
  ZWaveErrorCodes2[ZWaveErrorCodes2["FirmwareUpdateCC_FailedToStart"] = 1503] = "FirmwareUpdateCC_FailedToStart";
  ZWaveErrorCodes2[ZWaveErrorCodes2["FirmwareUpdateCC_FailedToAbort"] = 1504] = "FirmwareUpdateCC_FailedToAbort";
  ZWaveErrorCodes2[ZWaveErrorCodes2["FirmwareUpdateCC_Timeout"] = 1505] = "FirmwareUpdateCC_Timeout";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Invalid_Firmware_File"] = 1506] = "Invalid_Firmware_File";
  ZWaveErrorCodes2[ZWaveErrorCodes2["Unsupported_Firmware_Format"] = 1507] = "Unsupported_Firmware_Format";
  ZWaveErrorCodes2[ZWaveErrorCodes2["FirmwareUpdateCC_NetworkBusy"] = 1508] = "FirmwareUpdateCC_NetworkBusy";
  ZWaveErrorCodes2[ZWaveErrorCodes2["PowerlevelCC_UnsupportedTestNode"] = 1600] = "PowerlevelCC_UnsupportedTestNode";
})(ZWaveErrorCodes || (ZWaveErrorCodes = {}));
function getErrorSuffix(code) {
  return `ZW${code.toString().padStart(4, "0")}`;
}
function appendErrorSuffix(message, code) {
  const suffix = ` (${getErrorSuffix(code)})`;
  if (!message.endsWith(suffix))
    message += suffix;
  return message;
}
var ZWaveError = class _ZWaveError extends Error {
  message;
  code;
  context;
  transactionSource;
  constructor(message, code, context, transactionSource) {
    super();
    this.message = message;
    this.code = code;
    this.context = context;
    this.transactionSource = transactionSource;
    this.message = appendErrorSuffix(message, code);
    Object.setPrototypeOf(this, _ZWaveError.prototype);
    Object.getPrototypeOf(this).name = "ZWaveError";
    if (typeof transactionSource === "string") {
      this.stack = `ZWaveError: ${this.message}
${transactionSource}`;
    }
  }
};
function isZWaveError(e) {
  return e instanceof Error && Object.getPrototypeOf(e).name === "ZWaveError";
}

// node_modules/@zwave-js/shared/build/esm/uint8array-extras.js
var uint8ArrayStringified = "[object Uint8Array]";
var arrayBufferStringified = "[object ArrayBuffer]";
function isType(value, typeConstructor, typeStringified) {
  if (!value) {
    return false;
  }
  if (value.constructor === typeConstructor) {
    return true;
  }
  return Object.prototype.toString.call(value) === typeStringified;
}
function isUint8Array(value) {
  return isType(value, Uint8Array, uint8ArrayStringified);
}
function isArrayBuffer(value) {
  return isType(value, ArrayBuffer, arrayBufferStringified);
}
function isArrayLike(value) {
  return typeof value === "object" && value !== null && "length" in value && typeof value.length === "number";
}
function isUint8ArrayOrArrayBuffer(value) {
  return isUint8Array(value) || isArrayBuffer(value);
}
function assertUint8Array(value) {
  if (!isUint8Array(value)) {
    throw new TypeError(`Expected \`Uint8Array\`, got \`${typeof value}\``);
  }
}
function assertUint8ArrayOrArrayBuffer(value) {
  if (!isUint8ArrayOrArrayBuffer(value)) {
    throw new TypeError(`Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof value}\``);
  }
}
function concatUint8Arrays(arrays, totalLength) {
  if (arrays.length === 0) {
    return new Uint8Array(0);
  }
  totalLength ??= arrays.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
  const returnValue = new Uint8Array(totalLength);
  let offset = 0;
  for (let array of arrays) {
    if (isUint8Array(array)) {
      if (offset + array.length > totalLength) {
        array = array.subarray(0, totalLength - offset);
      }
    } else if (isArrayLike(array)) {
      if (offset + array.length > totalLength) {
        array = Uint8Array.from(array).subarray(0, totalLength - offset);
      }
    } else {
      throw new TypeError(`Expected \`Uint8Array\` or a numeric array, got \`${typeof array}\``);
    }
    returnValue.set(array, offset);
    offset += array.length;
    if (offset >= totalLength)
      break;
  }
  return returnValue;
}
function areUint8ArraysEqual(a, b) {
  assertUint8Array(a);
  assertUint8Array(b);
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let index = 0; index < a.length; index++) {
    if (a[index] !== b[index]) {
      return false;
    }
  }
  return true;
}
var cachedDecoders = {
  utf8: new globalThis.TextDecoder("utf8")
};
function uint8ArrayToString(array, encoding = "utf8") {
  assertUint8ArrayOrArrayBuffer(array);
  cachedDecoders[encoding] ??= new globalThis.TextDecoder(encoding);
  return cachedDecoders[encoding].decode(array);
}
function assertString(value) {
  if (typeof value !== "string") {
    throw new TypeError(`Expected \`string\`, got \`${typeof value}\``);
  }
}
var cachedEncoder = new globalThis.TextEncoder();
function stringToUint8Array(string) {
  assertString(string);
  return cachedEncoder.encode(string);
}
function base64ToBase64Url(base64) {
  return base64.replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
var MAX_BLOCK_SIZE = 65535;
function uint8ArrayToBase64(array, options) {
  assertUint8Array(array);
  const { urlSafe = false } = options ?? {};
  let base64;
  if (array.length < MAX_BLOCK_SIZE) {
    base64 = globalThis.btoa(String.fromCodePoint.apply(null, array));
  } else {
    base64 = "";
    for (const value of array) {
      base64 += String.fromCodePoint(value);
    }
    base64 = globalThis.btoa(base64);
  }
  return urlSafe ? base64ToBase64Url(base64) : base64;
}
var byteToHexLookupTable = Array.from({ length: 256 }, (_, index) => index.toString(16).padStart(2, "0"));
function uint8ArrayToHex(array) {
  assertUint8Array(array);
  let hexString = "";
  for (let index = 0; index < array.length; index++) {
    hexString += byteToHexLookupTable[array[index]];
  }
  return hexString;
}
var hexToDecimalLookupTable = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
};
function hexToUint8Array(hexString) {
  assertString(hexString);
  if (hexString.length % 2 !== 0) {
    throw new Error("Invalid Hex string length.");
  }
  const resultLength = hexString.length / 2;
  const bytes = new Uint8Array(resultLength);
  for (let index = 0; index < resultLength; index++) {
    const highNibble = hexToDecimalLookupTable[hexString[index * 2]];
    const lowNibble = hexToDecimalLookupTable[hexString[index * 2 + 1]];
    if (highNibble === void 0 || lowNibble === void 0) {
      throw new Error(`Invalid Hex character encountered at position ${index * 2}`);
    }
    bytes[index] = highNibble << 4 | lowNibble;
  }
  return bytes;
}
function indexOf(array, value) {
  const arrayLength = array.length;
  const valueLength = value.length;
  if (valueLength === 0) {
    return -1;
  }
  if (valueLength > arrayLength) {
    return -1;
  }
  const validOffsetLength = arrayLength - valueLength;
  for (let index = 0; index <= validOffsetLength; index++) {
    let isMatch = true;
    for (let index2 = 0; index2 < valueLength; index2++) {
      if (array[index + index2] !== value[index2]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      return index;
    }
  }
  return -1;
}
function includes(array, value) {
  return indexOf(array, value) !== -1;
}

// node_modules/@zwave-js/shared/build/esm/Bytes.js
var Bytes = class _Bytes extends Uint8Array {
  /** Returns `true` if both `buf` and `other` have exactly the same bytes,`false` otherwise. Equivalent to `buf.compare(otherBuffer) === 0`. */
  equals(other) {
    return areUint8ArraysEqual(this, other);
  }
  /**
      Convert a value to a `Buffer` without copying its data.
  
      This can be useful for converting a Node.js `Buffer` to a portable `Buffer` instance. The Node.js `Buffer` is already an `Uint8Array` subclass, but [it alters some behavior](https://sindresorhus.com/blog/goodbye-nodejs-buffer), so it can be useful to cast it to a pure `Uint8Array` or portable `Buffer` before returning it.
  
      Tip: If you want a copy, just call `.slice()` on the return value.
      */
  static view(value) {
    if (value instanceof ArrayBuffer) {
      return new this(value);
    }
    if (ArrayBuffer.isView(value)) {
      return new this(value.buffer, value.byteOffset, value.byteLength);
    }
    throw new TypeError(`Unsupported value, got \`${typeof value}\`.`);
  }
  static from(data, encodingOrMapfn, thisArg) {
    if (typeof data === "string") {
      const encoding = encodingOrMapfn;
      switch (encoding) {
        case "ascii":
        case "utf-8":
        case "utf8":
        case void 0:
          return _Bytes.view(stringToUint8Array(data));
        case "hex":
          return _Bytes.view(hexToUint8Array(data));
      }
      throw new Error(`Unsupported encoding: ${encoding}`);
    } else if (isUint8ArrayOrArrayBuffer(data)) {
      return new _Bytes(data);
    } else if ("length" in data) {
      return _Bytes.view(super.from(data));
    } else {
      return _Bytes.view(super.from(data, encodingOrMapfn, thisArg));
    }
  }
  /**
   * Allocates a new `Buffer` of `size` bytes. If `fill` is `undefined`, the`Buffer` will be zero-filled.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.alloc(5);
   *
   * console.log(buf);
   * // Prints: <Buffer 00 00 00 00 00>
   * ```
   *
   * If `size` is larger than {@link constants.MAX_LENGTH} or smaller than 0, `ERR_OUT_OF_RANGE` is thrown.
   *
   * If `fill` is specified, the allocated `Buffer` will be initialized by calling `buf.fill(fill)`.
   *
   * A `TypeError` will be thrown if `size` is not a number.
   * @since v5.10.0
   * @param size The desired length of the new `Buffer`.
   * @param [fill=0] A value to pre-fill the new `Buffer` with.
   * @param [encoding='utf8'] If `fill` is a string, this is its encoding.
   */
  static alloc(size, fill) {
    const ret = new _Bytes(size);
    if (fill !== void 0) {
      ret.fill(fill);
    }
    return ret;
  }
  toString(encoding = "utf8") {
    switch (encoding) {
      case "hex":
        return uint8ArrayToHex(this);
      case "base64":
        return uint8ArrayToBase64(this);
      case "base64url":
        return uint8ArrayToBase64(this, { urlSafe: true });
      default:
        return uint8ArrayToString(this, encoding);
    }
  }
  subarray(start, end) {
    return _Bytes.view(super.subarray(start, end));
  }
  /**
   * Equivalent to `buf.indexOf() !== -1`.
   *
   * @since v5.3.0
   * @param value What to search for.
   * @param [byteOffset=0] Where to begin searching in `buf`. If negative, then offset is calculated from the end of `buf`.
   * @param [encoding='utf8'] If `value` is a string, this is its encoding.
   * @return `true` if `value` was found in `buf`, `false` otherwise.
   */
  includes(value, byteOffset = 0) {
    if (typeof value === "number") {
      return super.includes(value, byteOffset);
    } else if (byteOffset) {
      return includes(this.subarray(byteOffset), value);
    } else {
      return includes(this, value);
    }
  }
  // /**
  //  * Returns `true` if `obj` is a `Buffer`, `false` otherwise.
  //  *
  //  * ```js
  //  * import { Buffer } from 'node:buffer';
  //  *
  //  * Buffer.isBuffer(Buffer.alloc(10)); // true
  //  * Buffer.isBuffer(Buffer.from('foo')); // true
  //  * Buffer.isBuffer('a string'); // false
  //  * Buffer.isBuffer([]); // false
  //  * Buffer.isBuffer(new Uint8Array(1024)); // false
  //  * ```
  //  * @since v0.1.101
  //  */
  // public static isBuffer(obj: any): obj is Buffer {
  // 	return obj && obj instanceof Buffer;
  // }
  /**
   * Returns a new `Buffer` which is the result of concatenating all the `Buffer` instances in the `list` together.
   *
   * If the list has no items, or if the `totalLength` is 0, then a new zero-length `Buffer` is returned.
   *
   * If `totalLength` is not provided, it is calculated from the `Buffer` instances
   * in `list` by adding their lengths.
   *
   * If `totalLength` is provided, it is coerced to an unsigned integer. If the
   * combined length of the `Buffer`s in `list` exceeds `totalLength`, the result is
   * truncated to `totalLength`.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * // Create a single `Buffer` from a list of three `Buffer` instances.
   *
   * const buf1 = Buffer.alloc(10);
   * const buf2 = Buffer.alloc(14);
   * const buf3 = Buffer.alloc(18);
   * const totalLength = buf1.length + buf2.length + buf3.length;
   *
   * console.log(totalLength);
   * // Prints: 42
   *
   * const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);
   *
   * console.log(bufA);
   * // Prints: <Buffer 00 00 00 00 ...>
   * console.log(bufA.length);
   * // Prints: 42
   * ```
   *
   * `Buffer.concat()` may also use the internal `Buffer` pool like `new Buffer()` does.
   * @since v0.7.11
   * @param list List of `Buffer` or {@link Uint8Array} instances to concatenate.
   * @param totalLength Total length of the `Buffer` instances in `list` when concatenated.
   */
  static concat(list, totalLength) {
    return _Bytes.view(concatUint8Arrays(list, totalLength));
  }
  getDataView() {
    return new DataView(this.buffer, this.byteOffset, this.byteLength);
  }
  /**
   * Writes `value` to `buf` at the specified `offset` as big-endian.
   *
   * `value` is interpreted and written as a two's complement signed integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(8);
   *
   * buf.writeBigInt64BE(0x0102030405060708n, 0);
   *
   * console.log(buf);
   * // Prints: <Buffer 01 02 03 04 05 06 07 08>
   * ```
   * @since v12.0.0, v10.20.0
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`.
   * @return `offset` plus the number of bytes written.
   */
  writeBigInt64BE(value, offset = 0) {
    const view = this.getDataView();
    view.setBigInt64(offset, value, false);
    return offset + 8;
  }
  /**
   * Writes `value` to `buf` at the specified `offset` as little-endian.
   *
   * `value` is interpreted and written as a two's complement signed integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(8);
   *
   * buf.writeBigInt64LE(0x0102030405060708n, 0);
   *
   * console.log(buf);
   * // Prints: <Buffer 08 07 06 05 04 03 02 01>
   * ```
   * @since v12.0.0, v10.20.0
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`.
   * @return `offset` plus the number of bytes written.
   */
  writeBigInt64LE(value, offset = 0) {
    const view = this.getDataView();
    view.setBigInt64(offset, value, true);
    return offset + 8;
  }
  /**
   * Writes `value` to `buf` at the specified `offset` as big-endian.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(8);
   *
   * buf.writeBigUInt64BE(0xdecafafecacefaden, 0);
   *
   * console.log(buf);
   * // Prints: <Buffer de ca fa fe ca ce fa de>
   * ```
   * @since v12.0.0, v10.20.0
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`.
   * @return `offset` plus the number of bytes written.
   */
  writeBigUInt64BE(value, offset = 0) {
    const view = this.getDataView();
    view.setBigUint64(offset, value, false);
    return offset + 8;
  }
  /**
   * Writes `value` to `buf` at the specified `offset` as little-endian
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(8);
   *
   * buf.writeBigUInt64LE(0xdecafafecacefaden, 0);
   *
   * console.log(buf);
   * // Prints: <Buffer de fa ce ca fe fa ca de>
   * ```
   *
   * @since v12.0.0, v10.20.0
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`.
   * @return `offset` plus the number of bytes written.
   */
  writeBigUInt64LE(value, offset = 0) {
    const view = this.getDataView();
    view.setBigUint64(offset, value, true);
    return offset + 8;
  }
  /**
   * Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as little-endian. Supports up to 48 bits of accuracy. Behavior is undefined
   * when `value` is anything other than an unsigned integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(6);
   *
   * buf.writeUIntLE(0x1234567890ab, 0, 6);
   *
   * console.log(buf);
   * // Prints: <Buffer ab 90 78 56 34 12>
   * ```
   * @since v0.5.5
   * @param value Number to be written to `buf`.
   * @param offset Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`.
   * @param byteLength Number of bytes to write. Must satisfy `0 < byteLength <= 6`.
   * @return `offset` plus the number of bytes written.
   */
  writeUIntLE(value, offset, byteLength) {
    switch (byteLength) {
      case 1:
        return this.writeUInt8(value, offset);
      case 2:
        return this.writeUInt16LE(value, offset);
      case 3: {
        let ret = this.writeUInt16LE(value & 65535, offset);
        ret = this.writeUInt8(value >>> 16, ret);
        return ret;
      }
      case 4:
        return this.writeUInt32LE(value, offset);
      // Numbers > 32 bit need to be converted to BigInt for the bitwise operations to work
      case 5: {
        const big = BigInt(value);
        const low = Number(big & 0xffffffffn);
        const high = Number(big >> 32n);
        let ret = this.writeUInt32LE(low, offset);
        ret = this.writeUInt8(high, ret);
        return ret;
      }
      case 6: {
        const big = BigInt(value);
        const low = Number(big & 0xffffffffn);
        const high = Number(big >> 32n);
        let ret = this.writeUInt32LE(low, offset);
        ret = this.writeUInt16LE(high, ret);
        return ret;
      }
      default:
        throw new RangeError(`The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received ${byteLength}`);
    }
  }
  /**
   * Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as big-endian. Supports up to 48 bits of accuracy. Behavior is undefined
   * when `value` is anything other than an unsigned integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(6);
   *
   * buf.writeUIntBE(0x1234567890ab, 0, 6);
   *
   * console.log(buf);
   * // Prints: <Buffer 12 34 56 78 90 ab>
   * ```
   * @since v0.5.5
   * @param value Number to be written to `buf`.
   * @param offset Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`.
   * @param byteLength Number of bytes to write. Must satisfy `0 < byteLength <= 6`.
   * @return `offset` plus the number of bytes written.
   */
  writeUIntBE(value, offset, byteLength) {
    switch (byteLength) {
      case 1:
        return this.writeUInt8(value, offset);
      case 2:
        return this.writeUInt16BE(value, offset);
      case 3: {
        let ret = this.writeUInt16BE(value >> 8, offset);
        ret = this.writeUInt8(value & 255, ret);
        return ret;
      }
      case 4:
        return this.writeUInt32BE(value, offset);
      // Numbers > 32 bit need to be converted to BigInt for the bitwise operations to work
      case 5: {
        const big = BigInt(value);
        const high = Number(big >> 8n);
        const low = Number(big & 0xffn);
        let ret = this.writeUInt32BE(high, offset);
        ret = this.writeUInt8(low, ret);
        return ret;
      }
      case 6: {
        const big = BigInt(value);
        const high = Number(big >> 16n);
        const low = Number(big & 0xffffn);
        let ret = this.writeUInt32BE(high, offset);
        ret = this.writeUInt16BE(low, ret);
        return ret;
      }
      default:
        throw new RangeError(`The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received ${byteLength}`);
    }
  }
  /**
   * Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as little-endian. Supports up to 48 bits of accuracy. Behavior is undefined
   * when `value` is anything other than a signed integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(6);
   *
   * buf.writeIntLE(0x1234567890ab, 0, 6);
   *
   * console.log(buf);
   * // Prints: <Buffer ab 90 78 56 34 12>
   * ```
   * @since v0.11.15
   * @param value Number to be written to `buf`.
   * @param offset Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`.
   * @param byteLength Number of bytes to write. Must satisfy `0 < byteLength <= 6`.
   * @return `offset` plus the number of bytes written.
   */
  writeIntLE(value, offset, byteLength) {
    switch (byteLength) {
      case 1:
        return this.writeInt8(value, offset);
      case 2:
        return this.writeInt16LE(value, offset);
      case 3: {
        let ret = this.writeInt16LE(value & 65535, offset);
        ret = this.writeInt8(value >> 16, ret);
        return ret;
      }
      case 4:
        return this.writeInt32LE(value, offset);
      case 5:
      case 6:
        throw new RangeError(`writeIntLE is currently not implemented for byteLength ${byteLength}`);
      default:
        throw new RangeError(`The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received ${byteLength}`);
    }
  }
  /**
   * Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as big-endian. Supports up to 48 bits of accuracy. Behavior is undefined when`value` is anything other than a
   * signed integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(6);
   *
   * buf.writeIntBE(0x1234567890ab, 0, 6);
   *
   * console.log(buf);
   * // Prints: <Buffer 12 34 56 78 90 ab>
   * ```
   * @since v0.11.15
   * @param value Number to be written to `buf`.
   * @param offset Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`.
   * @param byteLength Number of bytes to write. Must satisfy `0 < byteLength <= 6`.
   * @return `offset` plus the number of bytes written.
   */
  writeIntBE(value, offset, byteLength) {
    switch (byteLength) {
      case 1:
        return this.writeInt8(value, offset);
      case 2:
        return this.writeInt16BE(value, offset);
      case 3: {
        let ret = this.writeInt8(value >> 16, offset);
        ret = this.writeInt16BE(value & 65535, ret);
        return ret;
      }
      case 4:
        return this.writeInt32BE(value, offset);
      case 5:
      case 6:
        throw new RangeError(`writeIntBE is currently not implemented for byteLength ${byteLength}`);
      default:
        throw new RangeError(`The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received ${byteLength}`);
    }
  }
  /**
   * Writes `value` to `buf` at the specified `offset`. `value` must be a
   * valid unsigned 8-bit integer. Behavior is undefined when `value` is anything
   * other than an unsigned 8-bit integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(4);
   *
   * buf.writeUInt8(0x3, 0);
   * buf.writeUInt8(0x4, 1);
   * buf.writeUInt8(0x23, 2);
   * buf.writeUInt8(0x42, 3);
   *
   * console.log(buf);
   * // Prints: <Buffer 03 04 23 42>
   * ```
   * @since v0.5.0
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 1`.
   * @return `offset` plus the number of bytes written.
   */
  writeUInt8(value, offset = 0) {
    const view = this.getDataView();
    view.setUint8(offset, value);
    return offset + 1;
  }
  /**
   * Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a valid unsigned 16-bit integer. Behavior is undefined when `value` is
   * anything other than an unsigned 16-bit integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(4);
   *
   * buf.writeUInt16LE(0xdead, 0);
   * buf.writeUInt16LE(0xbeef, 2);
   *
   * console.log(buf);
   * // Prints: <Buffer ad de ef be>
   * ```
   * @since v0.5.5
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`.
   * @return `offset` plus the number of bytes written.
   */
  writeUInt16LE(value, offset = 0) {
    const view = this.getDataView();
    view.setUint16(offset, value, true);
    return offset + 2;
  }
  /**
   * Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a valid unsigned 16-bit integer. Behavior is undefined when `value`is anything other than an
   * unsigned 16-bit integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(4);
   *
   * buf.writeUInt16BE(0xdead, 0);
   * buf.writeUInt16BE(0xbeef, 2);
   *
   * console.log(buf);
   * // Prints: <Buffer de ad be ef>
   * ```
   * @since v0.5.5
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`.
   * @return `offset` plus the number of bytes written.
   */
  writeUInt16BE(value, offset = 0) {
    const view = this.getDataView();
    view.setUint16(offset, value, false);
    return offset + 2;
  }
  /**
   * Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a valid unsigned 32-bit integer. Behavior is undefined when `value` is
   * anything other than an unsigned 32-bit integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(4);
   *
   * buf.writeUInt32LE(0xfeedface, 0);
   *
   * console.log(buf);
   * // Prints: <Buffer ce fa ed fe>
   * ```
   * @since v0.5.5
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`.
   * @return `offset` plus the number of bytes written.
   */
  writeUInt32LE(value, offset = 0) {
    const view = this.getDataView();
    view.setUint32(offset, value, true);
    return offset + 4;
  }
  /**
   * Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a valid unsigned 32-bit integer. Behavior is undefined when `value`is anything other than an
   * unsigned 32-bit integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(4);
   *
   * buf.writeUInt32BE(0xfeedface, 0);
   *
   * console.log(buf);
   * // Prints: <Buffer fe ed fa ce>
   * ```
   * @since v0.5.5
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`.
   * @return `offset` plus the number of bytes written.
   */
  writeUInt32BE(value, offset = 0) {
    const view = this.getDataView();
    view.setUint32(offset, value, false);
    return offset + 4;
  }
  /**
   * Writes `value` to `buf` at the specified `offset`. `value` must be a valid
   * signed 8-bit integer. Behavior is undefined when `value` is anything other than
   * a signed 8-bit integer.
   *
   * `value` is interpreted and written as a two's complement signed integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(2);
   *
   * buf.writeInt8(2, 0);
   * buf.writeInt8(-2, 1);
   *
   * console.log(buf);
   * // Prints: <Buffer 02 fe>
   * ```
   * @since v0.5.0
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 1`.
   * @return `offset` plus the number of bytes written.
   */
  writeInt8(value, offset = 0) {
    const view = this.getDataView();
    view.setInt8(offset, value);
    return offset + 1;
  }
  /**
   * Writes `value` to `buf` at the specified `offset` as little-endian.  The `value`must be a valid signed 16-bit integer. Behavior is undefined when `value` is
   * anything other than a signed 16-bit integer.
   *
   * The `value` is interpreted and written as a two's complement signed integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(2);
   *
   * buf.writeInt16LE(0x0304, 0);
   *
   * console.log(buf);
   * // Prints: <Buffer 04 03>
   * ```
   * @since v0.5.5
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`.
   * @return `offset` plus the number of bytes written.
   */
  writeInt16LE(value, offset = 0) {
    const view = this.getDataView();
    view.setInt16(offset, value, true);
    return offset + 2;
  }
  /**
   * Writes `value` to `buf` at the specified `offset` as big-endian.  The `value`must be a valid signed 16-bit integer. Behavior is undefined when `value` is
   * anything other than a signed 16-bit integer.
   *
   * The `value` is interpreted and written as a two's complement signed integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(2);
   *
   * buf.writeInt16BE(0x0102, 0);
   *
   * console.log(buf);
   * // Prints: <Buffer 01 02>
   * ```
   * @since v0.5.5
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`.
   * @return `offset` plus the number of bytes written.
   */
  writeInt16BE(value, offset = 0) {
    const view = this.getDataView();
    view.setInt16(offset, value, false);
    return offset + 2;
  }
  /**
   * Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a valid signed 32-bit integer. Behavior is undefined when `value` is
   * anything other than a signed 32-bit integer.
   *
   * The `value` is interpreted and written as a two's complement signed integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(4);
   *
   * buf.writeInt32LE(0x05060708, 0);
   *
   * console.log(buf);
   * // Prints: <Buffer 08 07 06 05>
   * ```
   * @since v0.5.5
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`.
   * @return `offset` plus the number of bytes written.
   */
  writeInt32LE(value, offset = 0) {
    const view = this.getDataView();
    view.setInt32(offset, value, true);
    return offset + 4;
  }
  /**
   * Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a valid signed 32-bit integer. Behavior is undefined when `value` is
   * anything other than a signed 32-bit integer.
   *
   * The `value` is interpreted and written as a two's complement signed integer.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = new Buffer(4);
   *
   * buf.writeInt32BE(0x01020304, 0);
   *
   * console.log(buf);
   * // Prints: <Buffer 01 02 03 04>
   * ```
   * @since v0.5.5
   * @param value Number to be written to `buf`.
   * @param [offset=0] Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`.
   * @return `offset` plus the number of bytes written.
   */
  writeInt32BE(value, offset = 0) {
    const view = this.getDataView();
    view.setInt32(offset, value, false);
    return offset + 4;
  }
  /**
   * Reads an unsigned, big-endian 64-bit integer from `buf` at the specified`offset`.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff]);
   *
   * console.log(buf.readBigUInt64BE(0));
   * // Prints: 4294967295n
   * ```
   * @since v12.0.0, v10.20.0
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`.
   */
  readBigUInt64BE(offset = 0) {
    const view = this.getDataView();
    return view.getBigUint64(offset, false);
  }
  /**
   * Reads an unsigned, little-endian 64-bit integer from `buf` at the specified`offset`.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff]);
   *
   * console.log(buf.readBigUInt64LE(0));
   * // Prints: 18446744069414584320n
   * ```
   * @since v12.0.0, v10.20.0
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`.
   */
  readBigUInt64LE(offset = 0) {
    const view = this.getDataView();
    return view.getBigUint64(offset, true);
  }
  /**
   * Reads a signed, big-endian 64-bit integer from `buf` at the specified `offset`.
   *
   * Integers read from a `Buffer` are interpreted as two's complement signed
   * values.
   * @since v12.0.0, v10.20.0
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`.
   */
  readBigInt64BE(offset = 0) {
    const view = this.getDataView();
    return view.getBigInt64(offset, false);
  }
  /**
   * Reads a signed, little-endian 64-bit integer from `buf` at the specified`offset`.
   *
   * Integers read from a `Buffer` are interpreted as two's complement signed
   * values.
   * @since v12.0.0, v10.20.0
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`.
   */
  readBigInt64LE(offset = 0) {
    const view = this.getDataView();
    return view.getBigInt64(offset, true);
  }
  /**
   * Reads `byteLength` number of bytes from `buf` at the specified `offset` and interprets the result as an unsigned, little-endian integer supporting
   * up to 48 bits of accuracy.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);
   *
   * console.log(buf.readUIntLE(0, 6).toString(16));
   * // Prints: ab9078563412
   * ```
   * @since v0.11.15
   * @param offset Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`.
   * @param byteLength Number of bytes to read. Must satisfy `0 < byteLength <= 6`.
   */
  readUIntLE(offset, byteLength) {
    switch (byteLength) {
      case 1:
        return this.readUInt8(offset);
      case 2:
        return this.readUInt16LE(offset);
      case 3: {
        let ret = this.readUInt16LE(offset);
        ret |= this.readUInt8(offset + 2) << 16;
        return ret;
      }
      case 4:
        return this.readUInt32LE(offset);
      // Numbers > 32 bit need to be converted to BigInt for the bitwise operations to work
      case 5: {
        let ret = BigInt(this.readUInt32LE(offset));
        ret |= BigInt(this.readUInt8(offset + 4)) << 32n;
        return Number(ret);
      }
      case 6: {
        let ret = BigInt(this.readUInt32LE(offset));
        ret |= BigInt(this.readUInt16LE(offset + 4)) << 32n;
        return Number(ret);
      }
      default:
        throw new RangeError(`The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received ${byteLength}`);
    }
  }
  /**
   * Reads `byteLength` number of bytes from `buf` at the specified `offset` and interprets the result as an unsigned big-endian integer supporting
   * up to 48 bits of accuracy.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);
   *
   * console.log(buf.readUIntBE(0, 6).toString(16));
   * // Prints: 1234567890ab
   * console.log(buf.readUIntBE(1, 6).toString(16));
   * // Throws ERR_OUT_OF_RANGE.
   * ```
   * @since v0.11.15
   * @param offset Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`.
   * @param byteLength Number of bytes to read. Must satisfy `0 < byteLength <= 6`.
   */
  readUIntBE(offset, byteLength) {
    switch (byteLength) {
      case 1:
        return this.readUInt8(offset);
      case 2:
        return this.readUInt16BE(offset);
      case 3: {
        let ret = this.readUInt8(offset) << 16;
        ret |= this.readUInt16BE(offset + 1);
        return ret;
      }
      case 4:
        return this.readUInt32BE(offset);
      // Numbers > 32 bit need to be converted to BigInt for the bitwise operations to work
      case 5: {
        let ret = BigInt(this.readUInt32BE(offset)) << 32n;
        ret |= BigInt(this.readUInt8(offset + 4));
        return Number(ret);
      }
      case 6: {
        let ret = BigInt(this.readUInt32BE(offset)) << 32n;
        ret |= BigInt(this.readUInt16BE(offset + 4));
        return Number(ret);
      }
      default:
        throw new RangeError(`The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received ${byteLength}`);
    }
  }
  /**
   * Reads `byteLength` number of bytes from `buf` at the specified `offset` and interprets the result as a little-endian, two's complement signed value
   * supporting up to 48 bits of accuracy.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);
   *
   * console.log(buf.readIntLE(0, 6).toString(16));
   * // Prints: -546f87a9cbee
   * ```
   * @since v0.11.15
   * @param offset Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`.
   * @param byteLength Number of bytes to read. Must satisfy `0 < byteLength <= 6`.
   */
  readIntLE(offset, byteLength) {
    switch (byteLength) {
      case 1:
        return this.readInt8(offset);
      case 2:
        return this.readInt16LE(offset);
      case 3: {
        let ret = this.readUInt16LE(offset);
        ret |= this.readInt8(offset + 2) << 16;
        return ret;
      }
      case 4:
        return this.readInt32LE(offset);
      case 5:
      case 6:
        throw new RangeError(`readIntLE is currently not implemented for byteLength ${byteLength}`);
      default:
        throw new RangeError(`The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received ${byteLength}`);
    }
  }
  /**
   * Reads `byteLength` number of bytes from `buf` at the specified `offset` and interprets the result as a big-endian, two's complement signed value
   * supporting up to 48 bits of accuracy.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);
   *
   * console.log(buf.readIntBE(0, 6).toString(16));
   * // Prints: 1234567890ab
   * console.log(buf.readIntBE(1, 6).toString(16));
   * // Throws ERR_OUT_OF_RANGE.
   * console.log(buf.readIntBE(1, 0).toString(16));
   * // Throws ERR_OUT_OF_RANGE.
   * ```
   * @since v0.11.15
   * @param offset Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`.
   * @param byteLength Number of bytes to read. Must satisfy `0 < byteLength <= 6`.
   */
  readIntBE(offset, byteLength) {
    switch (byteLength) {
      case 1:
        return this.readInt8(offset);
      case 2:
        return this.readInt16BE(offset);
      case 3: {
        let ret = this.readInt8(offset) << 16;
        ret |= this.readUInt16BE(offset + 1);
        return ret;
      }
      case 4:
        return this.readInt32BE(offset);
      case 5:
      case 6:
        throw new RangeError(`readIntBE is currently not implemented for byteLength ${byteLength}`);
      default:
        throw new RangeError(`The value of "byteLength" is out of range. It must be >= 1 and <= 6. Received ${byteLength}`);
    }
  }
  /**
   * Reads an unsigned 8-bit integer from `buf` at the specified `offset`.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([1, -2]);
   *
   * console.log(buf.readUInt8(0));
   * // Prints: 1
   * console.log(buf.readUInt8(1));
   * // Prints: 254
   * console.log(buf.readUInt8(2));
   * // Throws ERR_OUT_OF_RANGE.
   * ```
   * @since v0.5.0
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 1`.
   */
  readUInt8(offset = 0) {
    const view = this.getDataView();
    return view.getUint8(offset);
  }
  /**
   * Reads an unsigned, little-endian 16-bit integer from `buf` at the specified`offset`.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0x12, 0x34, 0x56]);
   *
   * console.log(buf.readUInt16LE(0).toString(16));
   * // Prints: 3412
   * console.log(buf.readUInt16LE(1).toString(16));
   * // Prints: 5634
   * console.log(buf.readUInt16LE(2).toString(16));
   * // Throws ERR_OUT_OF_RANGE.
   * ```
   * @since v0.5.5
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`.
   */
  readUInt16LE(offset = 0) {
    const view = this.getDataView();
    return view.getUint16(offset, true);
  }
  /**
   * Reads an unsigned, big-endian 16-bit integer from `buf` at the specified`offset`.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0x12, 0x34, 0x56]);
   *
   * console.log(buf.readUInt16BE(0).toString(16));
   * // Prints: 1234
   * console.log(buf.readUInt16BE(1).toString(16));
   * // Prints: 3456
   * ```
   * @since v0.5.5
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`.
   */
  readUInt16BE(offset = 0) {
    const view = this.getDataView();
    return view.getUint16(offset, false);
  }
  /**
   * Reads an unsigned, little-endian 32-bit integer from `buf` at the specified`offset`.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0x12, 0x34, 0x56, 0x78]);
   *
   * console.log(buf.readUInt32LE(0).toString(16));
   * // Prints: 78563412
   * console.log(buf.readUInt32LE(1).toString(16));
   * // Throws ERR_OUT_OF_RANGE.
   * ```
   * @since v0.5.5
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`.
   */
  readUInt32LE(offset = 0) {
    const view = this.getDataView();
    return view.getUint32(offset, true);
  }
  /**
   * Reads an unsigned, big-endian 32-bit integer from `buf` at the specified`offset`.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0x12, 0x34, 0x56, 0x78]);
   *
   * console.log(buf.readUInt32BE(0).toString(16));
   * // Prints: 12345678
   * ```
   * @since v0.5.5
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`.
   */
  readUInt32BE(offset = 0) {
    const view = this.getDataView();
    return view.getUint32(offset, false);
  }
  /**
   * Reads a signed 8-bit integer from `buf` at the specified `offset`.
   *
   * Integers read from a `Buffer` are interpreted as two's complement signed values.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([-1, 5]);
   *
   * console.log(buf.readInt8(0));
   * // Prints: -1
   * console.log(buf.readInt8(1));
   * // Prints: 5
   * console.log(buf.readInt8(2));
   * // Throws ERR_OUT_OF_RANGE.
   * ```
   * @since v0.5.0
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 1`.
   */
  readInt8(offset = 0) {
    const view = this.getDataView();
    return view.getInt8(offset);
  }
  /**
   * Reads a signed, little-endian 16-bit integer from `buf` at the specified`offset`.
   *
   * Integers read from a `Buffer` are interpreted as two's complement signed values.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0, 5]);
   *
   * console.log(buf.readInt16LE(0));
   * // Prints: 1280
   * console.log(buf.readInt16LE(1));
   * // Throws ERR_OUT_OF_RANGE.
   * ```
   * @since v0.5.5
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`.
   */
  readInt16LE(offset = 0) {
    const view = this.getDataView();
    return view.getInt16(offset, true);
  }
  /**
   * Reads a signed, big-endian 16-bit integer from `buf` at the specified `offset`.
   *
   * Integers read from a `Buffer` are interpreted as two's complement signed values.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0, 5]);
   *
   * console.log(buf.readInt16BE(0));
   * // Prints: 5
   * ```
   * @since v0.5.5
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`.
   */
  readInt16BE(offset = 0) {
    const view = this.getDataView();
    return view.getInt16(offset, false);
  }
  /**
   * Reads a signed, little-endian 32-bit integer from `buf` at the specified`offset`.
   *
   * Integers read from a `Buffer` are interpreted as two's complement signed values.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0, 0, 0, 5]);
   *
   * console.log(buf.readInt32LE(0));
   * // Prints: 83886080
   * console.log(buf.readInt32LE(1));
   * // Throws ERR_OUT_OF_RANGE.
   * ```
   * @since v0.5.5
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`.
   */
  readInt32LE(offset = 0) {
    const view = this.getDataView();
    return view.getInt32(offset, true);
  }
  /**
   * Reads a signed, big-endian 32-bit integer from `buf` at the specified `offset`.
   *
   * Integers read from a `Buffer` are interpreted as two's complement signed values.
   *
   * ```js
   * import { Buffer } from 'node:buffer';
   *
   * const buf = Buffer.from([0, 0, 0, 5]);
   *
   * console.log(buf.readInt32BE(0));
   * // Prints: 5
   * ```
   * @since v0.5.5
   * @param [offset=0] Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`.
   */
  readInt32BE(offset = 0) {
    const view = this.getDataView();
    return view.getInt32(offset, false);
  }
};

// node_modules/@zwave-js/shared/build/esm/strings.js
function cpp2js(str) {
  const nullIndex = str.indexOf("\0");
  if (nullIndex === -1)
    return str;
  return str.slice(0, nullIndex);
}
function num2hex(val, uppercase = false) {
  if (val == null)
    return "undefined";
  let ret = val.toString(16);
  if (uppercase)
    ret = ret.toUpperCase();
  if (ret.length % 2 !== 0)
    ret = "0" + ret;
  return "0x" + ret;
}
function buffer2hex(buffer, uppercase = false) {
  if (buffer.length === 0)
    return "(empty)";
  let ret = uint8ArrayToHex(buffer);
  if (uppercase)
    ret = ret.toUpperCase();
  return "0x" + ret;
}

// node_modules/alcalzone-shared/build/esm/typeguards/index.js
function isObject(it) {
  return Object.prototype.toString.call(it) === "[object Object]";
}
function isArray(it) {
  if (Array.isArray != null)
    return Array.isArray(it);
  return Object.prototype.toString.call(it) === "[object Array]";
}

// node_modules/@zwave-js/shared/build/esm/utils.js
function pick(obj, keys) {
  const ret = {};
  for (const key of keys) {
    if (key in obj)
      ret[key] = obj[key];
  }
  return ret;
}
function getEnumMemberName(enumeration, value) {
  return enumeration[value] || `unknown (${num2hex(value)})`;
}
function cloneDeep(source) {
  if (isArray(source)) {
    return source.map((i) => cloneDeep(i));
  } else if (isObject(source)) {
    const target = {};
    for (const [key, value] of Object.entries(source)) {
      target[key] = cloneDeep(value);
    }
    return target;
  } else {
    return source;
  }
}
function sum(values) {
  return values.reduce((acc, cur) => acc + cur, 0);
}

// node_modules/@zwave-js/core/build/esm/definitions/CommandClasses.js
var CommandClasses;
(function(CommandClasses2) {
  CommandClasses2[CommandClasses2["Alarm Sensor"] = 156] = "Alarm Sensor";
  CommandClasses2[CommandClasses2["Alarm Silence"] = 157] = "Alarm Silence";
  CommandClasses2[CommandClasses2["All Switch"] = 39] = "All Switch";
  CommandClasses2[CommandClasses2["Anti-Theft"] = 93] = "Anti-Theft";
  CommandClasses2[CommandClasses2["Anti-Theft Unlock"] = 126] = "Anti-Theft Unlock";
  CommandClasses2[CommandClasses2["Application Capability"] = 87] = "Application Capability";
  CommandClasses2[CommandClasses2["Application Status"] = 34] = "Application Status";
  CommandClasses2[CommandClasses2["Association"] = 133] = "Association";
  CommandClasses2[CommandClasses2["Association Command Configuration"] = 155] = "Association Command Configuration";
  CommandClasses2[CommandClasses2["Association Group Information"] = 89] = "Association Group Information";
  CommandClasses2[CommandClasses2["Authentication"] = 161] = "Authentication";
  CommandClasses2[CommandClasses2["Authentication Media Write"] = 162] = "Authentication Media Write";
  CommandClasses2[CommandClasses2["Barrier Operator"] = 102] = "Barrier Operator";
  CommandClasses2[CommandClasses2["Basic"] = 32] = "Basic";
  CommandClasses2[CommandClasses2["Basic Tariff Information"] = 54] = "Basic Tariff Information";
  CommandClasses2[CommandClasses2["Basic Window Covering"] = 80] = "Basic Window Covering";
  CommandClasses2[CommandClasses2["Battery"] = 128] = "Battery";
  CommandClasses2[CommandClasses2["Binary Sensor"] = 48] = "Binary Sensor";
  CommandClasses2[CommandClasses2["Binary Switch"] = 37] = "Binary Switch";
  CommandClasses2[CommandClasses2["Binary Toggle Switch"] = 40] = "Binary Toggle Switch";
  CommandClasses2[CommandClasses2["Central Scene"] = 91] = "Central Scene";
  CommandClasses2[CommandClasses2["Climate Control Schedule"] = 70] = "Climate Control Schedule";
  CommandClasses2[CommandClasses2["Clock"] = 129] = "Clock";
  CommandClasses2[CommandClasses2["Color Switch"] = 51] = "Color Switch";
  CommandClasses2[CommandClasses2["Configuration"] = 112] = "Configuration";
  CommandClasses2[CommandClasses2["Controller Replication"] = 33] = "Controller Replication";
  CommandClasses2[CommandClasses2["CRC-16 Encapsulation"] = 86] = "CRC-16 Encapsulation";
  CommandClasses2[CommandClasses2["Demand Control Plan Configuration"] = 58] = "Demand Control Plan Configuration";
  CommandClasses2[CommandClasses2["Demand Control Plan Monitor"] = 59] = "Demand Control Plan Monitor";
  CommandClasses2[CommandClasses2["Device Reset Locally"] = 90] = "Device Reset Locally";
  CommandClasses2[CommandClasses2["Door Lock"] = 98] = "Door Lock";
  CommandClasses2[CommandClasses2["Door Lock Logging"] = 76] = "Door Lock Logging";
  CommandClasses2[CommandClasses2["Energy Production"] = 144] = "Energy Production";
  CommandClasses2[CommandClasses2["Entry Control"] = 111] = "Entry Control";
  CommandClasses2[CommandClasses2["Firmware Update Meta Data"] = 122] = "Firmware Update Meta Data";
  CommandClasses2[CommandClasses2["Generic Schedule"] = 163] = "Generic Schedule";
  CommandClasses2[CommandClasses2["Geographic Location"] = 140] = "Geographic Location";
  CommandClasses2[CommandClasses2["Grouping Name"] = 123] = "Grouping Name";
  CommandClasses2[CommandClasses2["Hail"] = 130] = "Hail";
  CommandClasses2[CommandClasses2["HRV Control"] = 57] = "HRV Control";
  CommandClasses2[CommandClasses2["HRV Status"] = 55] = "HRV Status";
  CommandClasses2[CommandClasses2["Humidity Control Mode"] = 109] = "Humidity Control Mode";
  CommandClasses2[CommandClasses2["Humidity Control Operating State"] = 110] = "Humidity Control Operating State";
  CommandClasses2[CommandClasses2["Humidity Control Setpoint"] = 100] = "Humidity Control Setpoint";
  CommandClasses2[CommandClasses2["Inclusion Controller"] = 116] = "Inclusion Controller";
  CommandClasses2[CommandClasses2["Indicator"] = 135] = "Indicator";
  CommandClasses2[CommandClasses2["IP Association"] = 92] = "IP Association";
  CommandClasses2[CommandClasses2["IP Configuration"] = 154] = "IP Configuration";
  CommandClasses2[CommandClasses2["IR Repeater"] = 160] = "IR Repeater";
  CommandClasses2[CommandClasses2["Irrigation"] = 107] = "Irrigation";
  CommandClasses2[CommandClasses2["Language"] = 137] = "Language";
  CommandClasses2[CommandClasses2["Lock"] = 118] = "Lock";
  CommandClasses2[CommandClasses2["Mailbox"] = 105] = "Mailbox";
  CommandClasses2[CommandClasses2["Manufacturer Proprietary"] = 145] = "Manufacturer Proprietary";
  CommandClasses2[CommandClasses2["Manufacturer Specific"] = 114] = "Manufacturer Specific";
  CommandClasses2[CommandClasses2["Meter"] = 50] = "Meter";
  CommandClasses2[CommandClasses2["Meter Table Configuration"] = 60] = "Meter Table Configuration";
  CommandClasses2[CommandClasses2["Meter Table Monitor"] = 61] = "Meter Table Monitor";
  CommandClasses2[CommandClasses2["Meter Table Push Configuration"] = 62] = "Meter Table Push Configuration";
  CommandClasses2[CommandClasses2["Move To Position Window Covering"] = 81] = "Move To Position Window Covering";
  CommandClasses2[CommandClasses2["Multi Channel"] = 96] = "Multi Channel";
  CommandClasses2[CommandClasses2["Multi Channel Association"] = 142] = "Multi Channel Association";
  CommandClasses2[CommandClasses2["Multi Command"] = 143] = "Multi Command";
  CommandClasses2[CommandClasses2["Multilevel Sensor"] = 49] = "Multilevel Sensor";
  CommandClasses2[CommandClasses2["Multilevel Switch"] = 38] = "Multilevel Switch";
  CommandClasses2[CommandClasses2["Multilevel Toggle Switch"] = 41] = "Multilevel Toggle Switch";
  CommandClasses2[CommandClasses2["Network Management Basic Node"] = 77] = "Network Management Basic Node";
  CommandClasses2[CommandClasses2["Network Management Inclusion"] = 52] = "Network Management Inclusion";
  CommandClasses2[CommandClasses2["Network Management Installation and Maintenance"] = 103] = "Network Management Installation and Maintenance";
  CommandClasses2[CommandClasses2["Network Management Primary"] = 84] = "Network Management Primary";
  CommandClasses2[CommandClasses2["Network Management Proxy"] = 82] = "Network Management Proxy";
  CommandClasses2[CommandClasses2["No Operation"] = 0] = "No Operation";
  CommandClasses2[CommandClasses2["Node Naming and Location"] = 119] = "Node Naming and Location";
  CommandClasses2[CommandClasses2["Node Provisioning"] = 120] = "Node Provisioning";
  CommandClasses2[CommandClasses2["Notification"] = 113] = "Notification";
  CommandClasses2[CommandClasses2["Powerlevel"] = 115] = "Powerlevel";
  CommandClasses2[CommandClasses2["Prepayment"] = 63] = "Prepayment";
  CommandClasses2[CommandClasses2["Prepayment Encapsulation"] = 65] = "Prepayment Encapsulation";
  CommandClasses2[CommandClasses2["Proprietary"] = 136] = "Proprietary";
  CommandClasses2[CommandClasses2["Protection"] = 117] = "Protection";
  CommandClasses2[CommandClasses2["Pulse Meter"] = 53] = "Pulse Meter";
  CommandClasses2[CommandClasses2["Rate Table Configuration"] = 72] = "Rate Table Configuration";
  CommandClasses2[CommandClasses2["Rate Table Monitor"] = 73] = "Rate Table Monitor";
  CommandClasses2[CommandClasses2["Remote Association Activation"] = 124] = "Remote Association Activation";
  CommandClasses2[CommandClasses2["Remote Association Configuration"] = 125] = "Remote Association Configuration";
  CommandClasses2[CommandClasses2["Scene Activation"] = 43] = "Scene Activation";
  CommandClasses2[CommandClasses2["Scene Actuator Configuration"] = 44] = "Scene Actuator Configuration";
  CommandClasses2[CommandClasses2["Scene Controller Configuration"] = 45] = "Scene Controller Configuration";
  CommandClasses2[CommandClasses2["Schedule"] = 83] = "Schedule";
  CommandClasses2[CommandClasses2["Schedule Entry Lock"] = 78] = "Schedule Entry Lock";
  CommandClasses2[CommandClasses2["Screen Attributes"] = 147] = "Screen Attributes";
  CommandClasses2[CommandClasses2["Screen Meta Data"] = 146] = "Screen Meta Data";
  CommandClasses2[CommandClasses2["Security"] = 152] = "Security";
  CommandClasses2[CommandClasses2["Security 2"] = 159] = "Security 2";
  CommandClasses2[CommandClasses2["Security Mark"] = 61696] = "Security Mark";
  CommandClasses2[CommandClasses2["Sensor Configuration"] = 158] = "Sensor Configuration";
  CommandClasses2[CommandClasses2["Simple AV Control"] = 148] = "Simple AV Control";
  CommandClasses2[CommandClasses2["Sound Switch"] = 121] = "Sound Switch";
  CommandClasses2[CommandClasses2["Supervision"] = 108] = "Supervision";
  CommandClasses2[CommandClasses2["Support/Control Mark"] = 239] = "Support/Control Mark";
  CommandClasses2[CommandClasses2["Tariff Table Configuration"] = 74] = "Tariff Table Configuration";
  CommandClasses2[CommandClasses2["Tariff Table Monitor"] = 75] = "Tariff Table Monitor";
  CommandClasses2[CommandClasses2["Thermostat Fan Mode"] = 68] = "Thermostat Fan Mode";
  CommandClasses2[CommandClasses2["Thermostat Fan State"] = 69] = "Thermostat Fan State";
  CommandClasses2[CommandClasses2["Thermostat Mode"] = 64] = "Thermostat Mode";
  CommandClasses2[CommandClasses2["Thermostat Operating State"] = 66] = "Thermostat Operating State";
  CommandClasses2[CommandClasses2["Thermostat Setback"] = 71] = "Thermostat Setback";
  CommandClasses2[CommandClasses2["Thermostat Setpoint"] = 67] = "Thermostat Setpoint";
  CommandClasses2[CommandClasses2["Time"] = 138] = "Time";
  CommandClasses2[CommandClasses2["Time Parameters"] = 139] = "Time Parameters";
  CommandClasses2[CommandClasses2["Transport Service"] = 85] = "Transport Service";
  CommandClasses2[CommandClasses2["User Code"] = 99] = "User Code";
  CommandClasses2[CommandClasses2["User Credential"] = 131] = "User Credential";
  CommandClasses2[CommandClasses2["Version"] = 134] = "Version";
  CommandClasses2[CommandClasses2["Wake Up"] = 132] = "Wake Up";
  CommandClasses2[CommandClasses2["Window Covering"] = 106] = "Window Covering";
  CommandClasses2[CommandClasses2["Z-Wave Plus Info"] = 94] = "Z-Wave Plus Info";
  CommandClasses2[CommandClasses2["Z/IP"] = 35] = "Z/IP";
  CommandClasses2[CommandClasses2["Z/IP 6LoWPAN"] = 79] = "Z/IP 6LoWPAN";
  CommandClasses2[CommandClasses2["Z/IP Gateway"] = 95] = "Z/IP Gateway";
  CommandClasses2[CommandClasses2["Z/IP Naming and Location"] = 104] = "Z/IP Naming and Location";
  CommandClasses2[CommandClasses2["Z/IP ND"] = 88] = "Z/IP ND";
  CommandClasses2[CommandClasses2["Z/IP Portal"] = 97] = "Z/IP Portal";
  CommandClasses2[CommandClasses2["Z-Wave Protocol"] = 1] = "Z-Wave Protocol";
  CommandClasses2[CommandClasses2["Z-Wave Long Range"] = 4] = "Z-Wave Long Range";
})(CommandClasses || (CommandClasses = {}));
var allCCs = Object.freeze(Object.keys(CommandClasses).filter((key) => /^\d+$/.test(key)).map((key) => parseInt(key)).filter((key) => key >= 0 && key !== CommandClasses["Z-Wave Protocol"]));
var actuatorCCs = [
  CommandClasses["Barrier Operator"],
  CommandClasses["Binary Switch"],
  CommandClasses["Color Switch"],
  CommandClasses["Door Lock"],
  CommandClasses["Multilevel Switch"],
  CommandClasses["Simple AV Control"],
  CommandClasses["Sound Switch"],
  CommandClasses["Thermostat Setpoint"],
  CommandClasses["Thermostat Mode"],
  CommandClasses["Window Covering"]
];
var actuatorCCsAsSet = new Set(actuatorCCs);
var sensorCCs = [
  CommandClasses["Alarm Sensor"],
  CommandClasses.Battery,
  CommandClasses["Binary Sensor"],
  CommandClasses["Energy Production"],
  CommandClasses.Meter,
  CommandClasses["Multilevel Sensor"],
  CommandClasses.Notification,
  // For pull nodes
  CommandClasses["Pulse Meter"]
];
var sensorCCsAsSet = new Set(sensorCCs);
var applicationCCs = [
  CommandClasses["Alarm Sensor"],
  CommandClasses["Alarm Silence"],
  CommandClasses["All Switch"],
  CommandClasses["Anti-Theft"],
  CommandClasses["Barrier Operator"],
  CommandClasses.Basic,
  CommandClasses["Basic Tariff Information"],
  CommandClasses["Basic Window Covering"],
  CommandClasses["Binary Sensor"],
  CommandClasses["Binary Switch"],
  CommandClasses["Binary Toggle Switch"],
  CommandClasses["Climate Control Schedule"],
  CommandClasses["Central Scene"],
  CommandClasses.Clock,
  CommandClasses["Color Switch"],
  CommandClasses.Configuration,
  CommandClasses["Controller Replication"],
  CommandClasses["Demand Control Plan Configuration"],
  CommandClasses["Demand Control Plan Monitor"],
  CommandClasses["Door Lock"],
  CommandClasses["Door Lock Logging"],
  CommandClasses["Energy Production"],
  CommandClasses["Entry Control"],
  CommandClasses["Generic Schedule"],
  CommandClasses["Geographic Location"],
  CommandClasses["HRV Status"],
  CommandClasses["HRV Control"],
  CommandClasses["Humidity Control Mode"],
  CommandClasses["Humidity Control Operating State"],
  CommandClasses["Humidity Control Setpoint"],
  CommandClasses["IR Repeater"],
  CommandClasses.Irrigation,
  CommandClasses.Language,
  CommandClasses.Lock,
  CommandClasses["Manufacturer Proprietary"],
  CommandClasses.Meter,
  CommandClasses["Meter Table Configuration"],
  CommandClasses["Meter Table Monitor"],
  CommandClasses["Meter Table Push Configuration"],
  CommandClasses["Move To Position Window Covering"],
  CommandClasses["Multilevel Sensor"],
  CommandClasses["Multilevel Switch"],
  CommandClasses["Multilevel Toggle Switch"],
  CommandClasses.Notification,
  CommandClasses.Prepayment,
  CommandClasses["Prepayment Encapsulation"],
  CommandClasses.Proprietary,
  CommandClasses.Protection,
  CommandClasses["Pulse Meter"],
  CommandClasses["Rate Table Configuration"],
  CommandClasses["Rate Table Monitor"],
  CommandClasses["Scene Activation"],
  CommandClasses["Scene Actuator Configuration"],
  CommandClasses["Scene Controller Configuration"],
  CommandClasses.Schedule,
  CommandClasses["Schedule Entry Lock"],
  CommandClasses["Screen Attributes"],
  CommandClasses["Screen Meta Data"],
  CommandClasses["Sensor Configuration"],
  CommandClasses["Simple AV Control"],
  CommandClasses["Sound Switch"],
  CommandClasses["Tariff Table Configuration"],
  CommandClasses["Tariff Table Monitor"],
  CommandClasses["Thermostat Fan Mode"],
  CommandClasses["Thermostat Fan State"],
  CommandClasses["Thermostat Mode"],
  CommandClasses["Thermostat Operating State"],
  CommandClasses["Thermostat Setback"],
  CommandClasses["Thermostat Setpoint"],
  CommandClasses["User Code"],
  CommandClasses["User Credential"],
  CommandClasses["Window Covering"]
];
var applicationCCsAsSet = new Set(applicationCCs);
var encapsulationCCs = [
  CommandClasses["CRC-16 Encapsulation"],
  CommandClasses["Multi Channel"],
  CommandClasses["Multi Command"],
  CommandClasses.Security,
  CommandClasses["Security 2"],
  CommandClasses.Supervision,
  CommandClasses["Transport Service"]
];
var encapsulationCCsAsSet = new Set(encapsulationCCs);
var managementCCs = [
  CommandClasses["Application Capability"],
  CommandClasses["Application Status"],
  CommandClasses.Association,
  CommandClasses["Association Command Configuration"],
  CommandClasses["Association Group Information"],
  // Battery is in the Management CC specs, but we consider it a Sensor CC
  CommandClasses["Device Reset Locally"],
  CommandClasses["Firmware Update Meta Data"],
  CommandClasses["Grouping Name"],
  CommandClasses.Hail,
  CommandClasses.Indicator,
  CommandClasses["IP Association"],
  CommandClasses["Manufacturer Specific"],
  CommandClasses["Multi Channel Association"],
  CommandClasses["Node Naming and Location"],
  CommandClasses["Remote Association Activation"],
  CommandClasses["Remote Association Configuration"],
  CommandClasses.Time,
  CommandClasses["Time Parameters"],
  CommandClasses.Version,
  CommandClasses["Wake Up"],
  CommandClasses["Z/IP Naming and Location"],
  CommandClasses["Z-Wave Plus Info"]
];
var managementCCsAsSet = new Set(managementCCs);
var nonApplicationCCs = Object.freeze(allCCs.filter((cc) => !applicationCCs.includes(cc)));

// node_modules/@zwave-js/core/build/esm/definitions/consts.js
var MAX_NODES = 232;
var MAX_NODES_LR = 4e3;
var NUM_NODEMASK_BYTES = MAX_NODES / 8;
var NUM_LR_NODES_PER_SEGMENT = 128;
var NUM_LR_NODEMASK_SEGMENT_BYTES = NUM_LR_NODES_PER_SEGMENT / 8;

// node_modules/@zwave-js/core/build/esm/definitions/NodeID.js
var NodeIDType;
(function(NodeIDType2) {
  NodeIDType2[NodeIDType2["Short"] = 1] = "Short";
  NodeIDType2[NodeIDType2["Long"] = 2] = "Long";
})(NodeIDType || (NodeIDType = {}));
var NODE_ID_MAX = MAX_NODES;

// node_modules/@zwave-js/core/build/esm/util/misc.js
function stripUndefined(obj) {
  const ret = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== void 0)
      ret[key] = value;
  }
  return ret;
}
function validatePayloadInternal(reason, ...assertions) {
  if (!assertions.every(Boolean)) {
    throw new ZWaveError("The message payload is invalid!", ZWaveErrorCodes.PacketFormat_InvalidPayload, reason);
  }
}
var validatePayload = validatePayloadInternal.bind(void 0, void 0);
validatePayload.withReason = (reason) => validatePayloadInternal.bind(void 0, reason);
validatePayload.fail = (reason) => validatePayload.withReason(reason)(false);

// node_modules/@zwave-js/core/build/esm/definitions/NodeInfo.js
function isExtendedCCId(ccId) {
  return ccId >= 241;
}
function parseCCId(payload, offset = 0) {
  const isExtended = isExtendedCCId(payload[offset]);
  validatePayload(payload.length >= offset + (isExtended ? 2 : 1));
  const view = Bytes.view(payload);
  if (isExtended) {
    return { ccId: view.readUInt16BE(offset), bytesRead: 2 };
  } else {
    return { ccId: view.readUInt8(offset), bytesRead: 1 };
  }
}
function encodeCCId(ccId, payload, offset = 0) {
  if (isExtendedCCId(ccId)) {
    payload.writeUInt16BE(ccId, offset);
    return 2;
  } else {
    payload.writeUInt8(ccId, offset);
    return 1;
  }
}
function parseCCList(payload) {
  const ret = {
    supportedCCs: [],
    controlledCCs: []
  };
  let offset = 0;
  let isAfterMark = false;
  while (offset < payload.length) {
    const { ccId: cc, bytesRead } = parseCCId(payload, offset);
    offset += bytesRead;
    if (cc === CommandClasses["Support/Control Mark"]) {
      isAfterMark = true;
      continue;
    }
    (isAfterMark ? ret.controlledCCs : ret.supportedCCs).push(cc);
  }
  return ret;
}
function encodeCCList(supportedCCs, controlledCCs) {
  const bufferLength = sum(supportedCCs.map((cc) => isExtendedCCId(cc) ? 2 : 1)) + (controlledCCs.length > 0 ? 1 : 0) + sum(controlledCCs.map((cc) => isExtendedCCId(cc) ? 2 : 1));
  const ret = new Bytes(bufferLength);
  let offset = 0;
  for (const cc of supportedCCs) {
    offset += encodeCCId(cc, ret, offset);
  }
  if (controlledCCs.length > 0) {
    ret[offset++] = CommandClasses["Support/Control Mark"];
    for (const cc of controlledCCs) {
      offset += encodeCCId(cc, ret, offset);
    }
  }
  return ret;
}
var NodeType;
(function(NodeType2) {
  NodeType2[NodeType2["Controller"] = 0] = "Controller";
  NodeType2[NodeType2["End Node"] = 1] = "End Node";
})(NodeType || (NodeType = {}));
function parseNodeProtocolInfo(buffer, offset, isLongRange = false) {
  validatePayload(buffer.length >= offset + 3);
  const isListening = !!(buffer[offset] & 128);
  const isRouting = !!(buffer[offset] & 64);
  const supportedDataRates = [];
  const speed = buffer[offset] & 24;
  const speedExt = buffer[offset + 2] & 7;
  if (isLongRange) {
    if (speedExt & 2) {
      supportedDataRates.push(1e5);
    }
  } else {
    if (speed & 16) {
      supportedDataRates.push(4e4);
    }
    if (speed & 8) {
      supportedDataRates.push(9600);
    }
    if (speedExt & 1) {
      supportedDataRates.push(1e5);
    }
    if (supportedDataRates.length === 0) {
      supportedDataRates.push(9600);
    }
  }
  const protocolVersion = buffer[offset] & 7;
  const capability = buffer[offset + 1];
  const optionalFunctionality = !!(capability & 128);
  let isFrequentListening;
  switch (capability & 96) {
    case 64:
      isFrequentListening = "1000ms";
      break;
    case 32:
      isFrequentListening = "250ms";
      break;
    default:
      isFrequentListening = false;
  }
  const supportsBeaming = !!(capability & 16);
  let nodeType;
  switch (capability & 10) {
    case 2:
      nodeType = NodeType.Controller;
      break;
    case 8:
    // Routing end node
    default:
      nodeType = NodeType["End Node"];
      break;
  }
  const hasSpecificDeviceClass = !!(capability & 4);
  const supportsSecurity = !!(capability & 1);
  return {
    isListening,
    isFrequentListening,
    isRouting,
    supportedDataRates,
    protocolVersion,
    optionalFunctionality,
    nodeType,
    supportsSecurity,
    supportsBeaming,
    hasSpecificDeviceClass
  };
}
function encodeNodeProtocolInfo(info, isLongRange = false) {
  const ret = Bytes.alloc(3, 0);
  if (info.isListening)
    ret[0] |= 128;
  if (info.isRouting)
    ret[0] |= 64;
  if (isLongRange) {
    if (info.supportedDataRates.includes(1e5))
      ret[2] |= 2;
  } else {
    if (info.supportedDataRates.includes(4e4))
      ret[0] |= 16;
    if (info.supportedDataRates.includes(9600))
      ret[0] |= 8;
    if (info.supportedDataRates.includes(1e5))
      ret[2] |= 1;
  }
  ret[0] |= info.protocolVersion & 7;
  if (info.optionalFunctionality)
    ret[1] |= 128;
  if (info.isFrequentListening === "1000ms")
    ret[1] |= 64;
  else if (info.isFrequentListening === "250ms")
    ret[1] |= 32;
  if (info.supportsBeaming)
    ret[1] |= 16;
  if (info.supportsSecurity)
    ret[1] |= 1;
  if (info.nodeType === NodeType["End Node"])
    ret[1] |= 8;
  else
    ret[1] |= 2;
  if (info.hasSpecificDeviceClass)
    ret[1] |= 4;
  return ret;
}

// node_modules/@zwave-js/core/build/esm/definitions/Protocol.js
var Protocols;
(function(Protocols2) {
  Protocols2[Protocols2["ZWave"] = 0] = "ZWave";
  Protocols2[Protocols2["ZWaveLongRange"] = 1] = "ZWaveLongRange";
})(Protocols || (Protocols = {}));
var ZWaveDataRate;
(function(ZWaveDataRate2) {
  ZWaveDataRate2[ZWaveDataRate2["9k6"] = 1] = "9k6";
  ZWaveDataRate2[ZWaveDataRate2["40k"] = 2] = "40k";
  ZWaveDataRate2[ZWaveDataRate2["100k"] = 3] = "100k";
})(ZWaveDataRate || (ZWaveDataRate = {}));
var ProtocolDataRate;
(function(ProtocolDataRate2) {
  ProtocolDataRate2[ProtocolDataRate2["ZWave_9k6"] = 1] = "ZWave_9k6";
  ProtocolDataRate2[ProtocolDataRate2["ZWave_40k"] = 2] = "ZWave_40k";
  ProtocolDataRate2[ProtocolDataRate2["ZWave_100k"] = 3] = "ZWave_100k";
  ProtocolDataRate2[ProtocolDataRate2["LongRange_100k"] = 4] = "LongRange_100k";
})(ProtocolDataRate || (ProtocolDataRate = {}));
var RouteProtocolDataRate;
(function(RouteProtocolDataRate2) {
  RouteProtocolDataRate2[RouteProtocolDataRate2["Unspecified"] = 0] = "Unspecified";
  RouteProtocolDataRate2[RouteProtocolDataRate2["ZWave_9k6"] = 1] = "ZWave_9k6";
  RouteProtocolDataRate2[RouteProtocolDataRate2["ZWave_40k"] = 2] = "ZWave_40k";
  RouteProtocolDataRate2[RouteProtocolDataRate2["ZWave_100k"] = 3] = "ZWave_100k";
  RouteProtocolDataRate2[RouteProtocolDataRate2["LongRange_100k"] = 4] = "LongRange_100k";
})(RouteProtocolDataRate || (RouteProtocolDataRate = {}));
var ZnifferProtocolDataRate;
(function(ZnifferProtocolDataRate2) {
  ZnifferProtocolDataRate2[ZnifferProtocolDataRate2["ZWave_9k6"] = 0] = "ZWave_9k6";
  ZnifferProtocolDataRate2[ZnifferProtocolDataRate2["ZWave_40k"] = 1] = "ZWave_40k";
  ZnifferProtocolDataRate2[ZnifferProtocolDataRate2["ZWave_100k"] = 2] = "ZWave_100k";
  ZnifferProtocolDataRate2[ZnifferProtocolDataRate2["LongRange_100k"] = 3] = "LongRange_100k";
})(ZnifferProtocolDataRate || (ZnifferProtocolDataRate = {}));
var protocolDataRateMask = 7;
var ProtocolType;
(function(ProtocolType2) {
  ProtocolType2[ProtocolType2["Z-Wave"] = 0] = "Z-Wave";
  ProtocolType2[ProtocolType2["Z-Wave AV"] = 1] = "Z-Wave AV";
  ProtocolType2[ProtocolType2["Z-Wave for IP"] = 2] = "Z-Wave for IP";
})(ProtocolType || (ProtocolType = {}));
var LongRangeChannel;
(function(LongRangeChannel2) {
  LongRangeChannel2[LongRangeChannel2["Unsupported"] = 0] = "Unsupported";
  LongRangeChannel2[LongRangeChannel2["A"] = 1] = "A";
  LongRangeChannel2[LongRangeChannel2["B"] = 2] = "B";
  LongRangeChannel2[LongRangeChannel2["Auto"] = 255] = "Auto";
})(LongRangeChannel || (LongRangeChannel = {}));
var ProtocolVersion;
(function(ProtocolVersion2) {
  ProtocolVersion2[ProtocolVersion2["unknown"] = 0] = "unknown";
  ProtocolVersion2[ProtocolVersion2["2.0"] = 1] = "2.0";
  ProtocolVersion2[ProtocolVersion2["4.2x / 5.0x"] = 2] = "4.2x / 5.0x";
  ProtocolVersion2[ProtocolVersion2["4.5x / 6.0x"] = 3] = "4.5x / 6.0x";
})(ProtocolVersion || (ProtocolVersion = {}));

// node_modules/@zwave-js/core/build/esm/definitions/RFRegion.js
var RFRegion;
(function(RFRegion2) {
  RFRegion2[RFRegion2["Europe"] = 0] = "Europe";
  RFRegion2[RFRegion2["USA"] = 1] = "USA";
  RFRegion2[RFRegion2["Australia/New Zealand"] = 2] = "Australia/New Zealand";
  RFRegion2[RFRegion2["Hong Kong"] = 3] = "Hong Kong";
  RFRegion2[RFRegion2["India"] = 5] = "India";
  RFRegion2[RFRegion2["Israel"] = 6] = "Israel";
  RFRegion2[RFRegion2["Russia"] = 7] = "Russia";
  RFRegion2[RFRegion2["China"] = 8] = "China";
  RFRegion2[RFRegion2["USA (Long Range)"] = 9] = "USA (Long Range)";
  RFRegion2[RFRegion2["Europe (Long Range)"] = 11] = "Europe (Long Range)";
  RFRegion2[RFRegion2["Japan"] = 32] = "Japan";
  RFRegion2[RFRegion2["Korea"] = 33] = "Korea";
  RFRegion2[RFRegion2["Unknown"] = 254] = "Unknown";
  RFRegion2[RFRegion2["Default (EU)"] = 255] = "Default (EU)";
})(RFRegion || (RFRegion = {}));
var ZnifferRegion;
(function(ZnifferRegion2) {
  ZnifferRegion2[ZnifferRegion2["Europe"] = 0] = "Europe";
  ZnifferRegion2[ZnifferRegion2["USA"] = 1] = "USA";
  ZnifferRegion2[ZnifferRegion2["Australia/New Zealand"] = 2] = "Australia/New Zealand";
  ZnifferRegion2[ZnifferRegion2["Hong Kong"] = 3] = "Hong Kong";
  ZnifferRegion2[ZnifferRegion2["India"] = 5] = "India";
  ZnifferRegion2[ZnifferRegion2["Israel"] = 6] = "Israel";
  ZnifferRegion2[ZnifferRegion2["Russia"] = 7] = "Russia";
  ZnifferRegion2[ZnifferRegion2["China"] = 8] = "China";
  ZnifferRegion2[ZnifferRegion2["USA (Long Range)"] = 9] = "USA (Long Range)";
  ZnifferRegion2[ZnifferRegion2["USA (Long Range, backup)"] = 10] = "USA (Long Range, backup)";
  ZnifferRegion2[ZnifferRegion2["Europe (Long Range)"] = 11] = "Europe (Long Range)";
  ZnifferRegion2[ZnifferRegion2["Japan"] = 32] = "Japan";
  ZnifferRegion2[ZnifferRegion2["Korea"] = 33] = "Korea";
  ZnifferRegion2[ZnifferRegion2["USA (Long Range, end device)"] = 48] = "USA (Long Range, end device)";
  ZnifferRegion2[ZnifferRegion2["Unknown"] = 254] = "Unknown";
  ZnifferRegion2[ZnifferRegion2["Default (EU)"] = 255] = "Default (EU)";
})(ZnifferRegion || (ZnifferRegion = {}));
var ZnifferRegionLegacy;
(function(ZnifferRegionLegacy2) {
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["EU"] = 0] = "EU";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["US"] = 1] = "US";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["ANZ"] = 2] = "ANZ";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["HK"] = 3] = "HK";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["MY"] = 8] = "MY";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["IN"] = 9] = "IN";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["JP"] = 10] = "JP";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["RU"] = 26] = "RU";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["IL"] = 27] = "IL";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["KR"] = 28] = "KR";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["CN"] = 29] = "CN";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["TF_866"] = 4] = "TF_866";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["TF_870"] = 5] = "TF_870";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["TF_906"] = 6] = "TF_906";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["TF_910"] = 7] = "TF_910";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["TF_878"] = 11] = "TF_878";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["TF_882"] = 12] = "TF_882";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["TF_886"] = 13] = "TF_886";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["TF_932_3CH"] = 14] = "TF_932_3CH";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["TF_940_3CH"] = 15] = "TF_940_3CH";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["TF_835_3CH"] = 24] = "TF_835_3CH";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["TF_840_3CH"] = 16] = "TF_840_3CH";
  ZnifferRegionLegacy2[ZnifferRegionLegacy2["TF_850_3CH"] = 17] = "TF_850_3CH";
})(ZnifferRegionLegacy || (ZnifferRegionLegacy = {}));

// node_modules/@zwave-js/core/build/esm/definitions/Route.js
var RouteKind;
(function(RouteKind2) {
  RouteKind2[RouteKind2["None"] = 0] = "None";
  RouteKind2[RouteKind2["LWR"] = 1] = "LWR";
  RouteKind2[RouteKind2["NLWR"] = 2] = "NLWR";
  RouteKind2[RouteKind2["Application"] = 16] = "Application";
})(RouteKind || (RouteKind = {}));
var EMPTY_ROUTE = {
  repeaters: [],
  routeSpeed: ZWaveDataRate["9k6"]
};
var MAX_REPEATERS = 4;

// node_modules/@zwave-js/core/build/esm/values/Primitive.js
var IntegerLimits = Object.freeze({
  UInt8: Object.freeze({ min: 0, max: 255 }),
  UInt16: Object.freeze({ min: 0, max: 65535 }),
  UInt24: Object.freeze({ min: 0, max: 16777215 }),
  UInt32: Object.freeze({ min: 0, max: 4294967295 }),
  Int8: Object.freeze({ min: -128, max: 127 }),
  Int16: Object.freeze({ min: -32768, max: 32767 }),
  Int24: Object.freeze({ min: -8388608, max: 8388607 }),
  Int32: Object.freeze({ min: -2147483648, max: 2147483647 })
});
function parseBitMask(mask, startValue = 1, numBits = mask.length * 8) {
  const ret = [];
  for (let index = 0; index < numBits; index++) {
    const byteNum = index >>> 3;
    const bitNum = index % 8;
    if ((mask[byteNum] & 2 ** bitNum) !== 0) {
      ret.push(index + startValue);
    }
  }
  return ret;
}
function encodeBitMask(values, maxValue = Math.max(...values), startValue = 1) {
  if (!Number.isFinite(maxValue))
    return Bytes.from([0]);
  const numBytes = Math.ceil((maxValue - startValue + 1) / 8);
  const ret = new Bytes(numBytes).fill(0);
  for (let val = startValue; val <= maxValue; val++) {
    if (!values.includes(val))
      continue;
    const byteNum = val - startValue >>> 3;
    const bitNum = (val - startValue) % 8;
    ret[byteNum] |= 2 ** bitNum;
  }
  return ret;
}

// node_modules/@zwave-js/nvmedit/build/esm/convert.js
var import_gte2 = __toESM(require_gte(), 1);
var import_lt2 = __toESM(require_lt(), 1);
var import_lte = __toESM(require_lte(), 1);
var import_parse = __toESM(require_parse(), 1);

// node_modules/@zwave-js/nvmedit/build/esm/consts.js
var SUC_UPDATE_NODEPARM_MAX = 20;
var SUC_UPDATE_ENTRY_SIZE = 2 + SUC_UPDATE_NODEPARM_MAX;
var SUC_MAX_UPDATES = 64;
var MAX_PROTOCOL_FILE_FORMAT = 5;

// node_modules/@zwave-js/nvmedit/build/esm/lib/common/definitions.js
var NVMAccess;
(function(NVMAccess2) {
  NVMAccess2[NVMAccess2["None"] = 0] = "None";
  NVMAccess2[NVMAccess2["Read"] = 1] = "Read";
  NVMAccess2[NVMAccess2["Write"] = 2] = "Write";
  NVMAccess2[NVMAccess2["ReadWrite"] = 3] = "ReadWrite";
})(NVMAccess || (NVMAccess = {}));

// node_modules/@zwave-js/nvmedit/build/esm/lib/common/utils.js
async function nvmReadUInt32LE(io, position) {
  const { buffer } = await io.read(position, 4);
  const bytes = Bytes.view(buffer);
  return bytes.readUInt32LE(0);
}
async function nvmReadUInt16BE(io, position) {
  const { buffer } = await io.read(position, 2);
  const bytes = Bytes.view(buffer);
  return bytes.readUInt16BE(0);
}
async function nvmWriteBuffer(io, position, buffer) {
  const chunkSize = await io.determineChunkSize();
  let offset = 0;
  while (offset < buffer.length) {
    const chunk = buffer.subarray(offset, offset + chunkSize);
    const { bytesWritten } = await io.write(position + offset, chunk);
    offset += bytesWritten;
  }
}
async function nvmReadBuffer(io, position, length) {
  const ret = new Uint8Array(length);
  const chunkSize = await io.determineChunkSize();
  let offset = 0;
  while (offset < length) {
    const { buffer, endOfFile } = await io.read(position + offset, Math.min(chunkSize, length - offset));
    ret.set(buffer, offset);
    offset += buffer.length;
    if (endOfFile)
      break;
  }
  return ret.subarray(0, offset);
}

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/consts.js
var ZWAVE_APPLICATION_NVM_SIZE = 12288;
var ZWAVE_PROTOCOL_NVM_SIZE = 49152 - ZWAVE_APPLICATION_NVM_SIZE;
var ZWAVE_SHARED_NVM_SIZE = 40960;
var NVM3_WORD_SIZE = 4;
var NVM3_MIN_PAGE_SIZE = 512;
var NVM3_PAGE_HEADER_SIZE = 20;
var NVM3_PAGE_COUNTER_SIZE = 27;
var NVM3_PAGE_COUNTER_MASK = (1 << NVM3_PAGE_COUNTER_SIZE) - 1;
var NVM3_PAGE_MAGIC = 45722;
var FLASH_MAX_PAGE_SIZE_700 = 2048;
var FLASH_MAX_PAGE_SIZE_800 = 8192;
var PageStatus;
(function(PageStatus2) {
  PageStatus2[PageStatus2["OK"] = 4294967295] = "OK";
  PageStatus2[PageStatus2["OK_ErasePending"] = 4294944165] = "OK_ErasePending";
  PageStatus2[PageStatus2["Bad"] = 65535] = "Bad";
  PageStatus2[PageStatus2["Bad_ErasePending"] = 42405] = "Bad_ErasePending";
})(PageStatus || (PageStatus = {}));
var PageWriteSize;
(function(PageWriteSize2) {
  PageWriteSize2[PageWriteSize2["WRITE_SIZE_32"] = 0] = "WRITE_SIZE_32";
  PageWriteSize2[PageWriteSize2["WRITE_SIZE_16"] = 1] = "WRITE_SIZE_16";
})(PageWriteSize || (PageWriteSize = {}));
var NVM3_OBJ_KEY_SHIFT = 7;
var NVM3_OBJ_KEY_SIZE = 20;
var NVM3_OBJ_KEY_MASK = (1 << NVM3_OBJ_KEY_SIZE) - 1;
var NVM3_OBJ_TYPE_MASK = 127;
var NVM3_OBJ_LARGE_LEN_SIZE = 26;
var NVM3_OBJ_LARGE_LEN_MASK = (1 << NVM3_OBJ_LARGE_LEN_SIZE) - 1;
var NVM3_OBJ_FRAGTYPE_SHIFT = 27;
var NVM3_OBJ_FRAGTYPE_MASK = 3;
var NVM3_CODE_SMALL_SHIFT = 27;
var NVM3_CODE_LARGE_SHIFT = 26;
var NVM3_OBJ_HEADER_SIZE_SMALL = 4;
var NVM3_OBJ_HEADER_SIZE_LARGE = 8;
var NVM3_MAX_OBJ_SIZE_SMALL = 120;
var NVM3_COUNTER_SIZE = 204;
var ObjectType;
(function(ObjectType2) {
  ObjectType2[ObjectType2["DataLarge"] = 0] = "DataLarge";
  ObjectType2[ObjectType2["CounterLarge"] = 1] = "CounterLarge";
  ObjectType2[ObjectType2["CounterSmall"] = 2] = "CounterSmall";
  ObjectType2[ObjectType2["Deleted"] = 3] = "Deleted";
  ObjectType2[ObjectType2["DataSmall"] = 7] = "DataSmall";
})(ObjectType || (ObjectType = {}));
var FragmentType;
(function(FragmentType2) {
  FragmentType2[FragmentType2["None"] = 0] = "None";
  FragmentType2[FragmentType2["First"] = 1] = "First";
  FragmentType2[FragmentType2["Next"] = 2] = "Next";
  FragmentType2[FragmentType2["Last"] = 3] = "Last";
})(FragmentType || (FragmentType = {}));

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/files/index.js
var import_reflect_metadata2 = __toESM(require_Reflect(), 1);

// node_modules/@zwave-js/core/build/esm/reflection/decorators.js
var import_reflect_metadata = __toESM(require_Reflect(), 1);
function createReflectionDecorator({
  name,
  valueFromArgs,
  // getConstructorLookupTarget,
  constructorLookupKey
}) {
  const key = Symbol.for(`METADATA_${name}`);
  const mapKey = Symbol.for(`METADATA_MAP_${name}`);
  const lookupTarget = /* @__PURE__ */ Object.create(null);
  const grp = {
    decorator: (...args) => {
      const value = valueFromArgs(...args);
      function body(target, _context) {
        Reflect.defineMetadata(key, value, target);
        if (constructorLookupKey === false)
          return;
        const reverseLookupKey = constructorLookupKey?.(target, ...args) ?? String(value);
        const map = Reflect.getMetadata(mapKey, lookupTarget) || /* @__PURE__ */ new Map();
        map.set(reverseLookupKey, target);
        Reflect.defineMetadata(mapKey, map, lookupTarget);
      }
      Object.defineProperty(body, "name", {
        value: "decoratorBody_" + name
      });
      return body;
    },
    lookupValue: (target) => {
      return Reflect.getMetadata(key, target.constructor);
    },
    lookupValueStatic: (constr) => {
      return Reflect.getMetadata(key, constr);
    },
    lookupConstructorByValue: (value) => {
      if (constructorLookupKey === false) {
        throw new Error("Constructor lookup is disabled for this decorator!");
      } else if (constructorLookupKey) {
        throw new Error("Cannot lookup constructor by value when constructorLookupKey is used");
      } else {
        return grp.lookupConstructorByKey(String(value));
      }
    },
    lookupConstructorByKey: (key2) => {
      if (constructorLookupKey === false) {
        throw new Error("Constructor lookup is disabled for this decorator!");
      }
      const map = Reflect.getMetadata(mapKey, lookupTarget);
      return map?.get(key2);
    }
  };
  for (const property of [
    "decorator",
    "lookupValue",
    "lookupValueStatic",
    "lookupConstructorByValue",
    "lookupConstructorByKey"
  ]) {
    grp[property] = Object.defineProperty(grp[property], "name", {
      value: `${property}_${name}`
    });
  }
  return grp;
}
function createSimpleReflectionDecorator({ name }) {
  const decorator = createReflectionDecorator({
    name,
    valueFromArgs: (arg) => arg
  });
  const ret = {
    decorator: decorator.decorator,
    lookupValue: decorator.lookupValue,
    lookupValueStatic: decorator.lookupValueStatic,
    lookupConstructor: decorator.lookupConstructorByValue
  };
  return ret;
}

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/files/NVMFile.js
function gotDeserializationOptions(options) {
  return "data" in options && isUint8Array(options.data);
}
var NVMFile = class {
  constructor(options) {
    this.fileVersion = options.fileVersion;
    if (gotDeserializationOptions(options)) {
      this.fileId = options.fileId;
      this.payload = options.data;
    } else {
      const fileId = options.fileId ?? getNVMFileID(this);
      if (typeof fileId === "number") {
        this.fileId = fileId;
      }
      this.payload = new Bytes();
    }
  }
  payload;
  fileId = 0;
  fileVersion;
  /**
   * Creates an instance of the NVM file that is contained in the given NVM object
   */
  static from(fileId, data, fileVersion) {
    const Constructor = getNVMFileConstructor(fileId);
    return new Constructor({
      fileId,
      fileVersion,
      data
    });
  }
  /**
   * Serializes this NVMFile into an NVM Object
   */
  serialize() {
    if (!this.fileId) {
      throw new Error("The NVM file ID must be set before serializing");
    }
    return {
      key: this.fileId,
      data: this.payload,
      // We only support large and small data objects for now
      type: this.payload.length <= NVM3_MAX_OBJ_SIZE_SMALL ? ObjectType.DataSmall : ObjectType.DataLarge,
      // By default output unfragmented objects, they will be split later
      fragmentType: FragmentType.None
    };
  }
  toJSON() {
    return {
      "file ID": `0x${this.fileId.toString(16)} (${this.constructor.name})`
    };
  }
};
var METADATA_nvmFileID = Symbol("nvmFileID");
var METADATA_nvmFileIDMap = Symbol("nvmFileIDMap");
function nvmFileID(id) {
  return (messageClass) => {
    Reflect.defineMetadata(METADATA_nvmFileID, id, messageClass);
    const map = Reflect.getMetadata(METADATA_nvmFileIDMap, NVMFile) || /* @__PURE__ */ new Map();
    map.set(id, messageClass);
    Reflect.defineMetadata(METADATA_nvmFileIDMap, map, NVMFile);
  };
}
function getNVMFileID(id) {
  const constr = id.constructor;
  const ret = id instanceof NVMFile ? Reflect.getMetadata(METADATA_nvmFileID, constr) : void 0;
  if (ret == void 0) {
    throw new ZWaveError(`No NVM file ID defined for ${constr.name}!`, ZWaveErrorCodes.CC_Invalid);
  }
  return ret;
}
function getNVMFileConstructor(id) {
  const map = Reflect.getMetadata(METADATA_nvmFileIDMap, NVMFile);
  if (map != void 0) {
    if (map.has(id))
      return map.get(id);
    for (const [key, value] of map.entries()) {
      if (typeof key === "function" && key(id))
        return value;
    }
  }
}
var nvmSectionDecorator = createSimpleReflectionDecorator({
  name: "nvmSection"
});
var nvmSection = nvmSectionDecorator.decorator;
var getNVMSection = nvmSectionDecorator.lookupValue;
var getNVMSectionStatic = nvmSectionDecorator.lookupValueStatic;
function getNVMSectionByFileID(fileId) {
  const File = getNVMFileConstructor(fileId);
  let ret;
  if (File) {
    ret = getNVMSectionStatic(File);
  }
  if (ret)
    return ret;
  throw new ZWaveError(`NVM section for file with ID ${num2hex(fileId)} could not be determined`, ZWaveErrorCodes.Argument_Invalid);
}

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/files/ApplicationCCsFile.js
var __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var MAX_CCs = 35;
var ApplicationCCsFileID = 103;
var ApplicationCCsFile = (() => {
  let _classDecorators = [nvmFileID(ApplicationCCsFileID), nvmSection("application")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var ApplicationCCsFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ApplicationCCsFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (gotDeserializationOptions(options)) {
        let offset = 0;
        let numCCs = this.payload[offset];
        this.includedInsecurely = [
          ...this.payload.subarray(offset + 1, offset + 1 + numCCs)
        ];
        offset += MAX_CCs;
        numCCs = this.payload[offset];
        this.includedSecurelyInsecureCCs = [
          ...this.payload.subarray(offset + 1, offset + 1 + numCCs)
        ];
        offset += MAX_CCs;
        numCCs = this.payload[offset];
        this.includedSecurelySecureCCs = [
          ...this.payload.subarray(offset + 1, offset + 1 + numCCs)
        ];
      } else {
        this.includedInsecurely = options.includedInsecurely;
        this.includedSecurelyInsecureCCs = options.includedSecurelyInsecureCCs;
        this.includedSecurelySecureCCs = options.includedSecurelySecureCCs;
      }
    }
    includedInsecurely;
    includedSecurelyInsecureCCs;
    includedSecurelySecureCCs;
    serialize() {
      this.payload = new Bytes((1 + MAX_CCs) * 3);
      let offset = 0;
      for (const array of [
        this.includedInsecurely,
        this.includedSecurelyInsecureCCs,
        this.includedSecurelySecureCCs
      ]) {
        this.payload[offset] = array.length;
        this.payload.set(array, offset + 1);
        offset += 1 + MAX_CCs;
      }
      return super.serialize();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toJSON() {
      return {
        ...super.toJSON(),
        "included insecurely": this.includedInsecurely.map((cc) => CommandClasses[cc]).join(", "),
        "included securely (insecure)": this.includedSecurelyInsecureCCs.map((cc) => CommandClasses[cc]).join(", "),
        "included securely (secure)": this.includedSecurelySecureCCs.map((cc) => CommandClasses[cc]).join(", ")
      };
    }
  };
  return ApplicationCCsFile2 = _classThis;
})();

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/files/ApplicationDataFile.js
var __esDecorate2 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers2 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var ApplicationDataFileID = 200;
var ApplicationDataFile = (() => {
  let _classDecorators = [nvmFileID(ApplicationDataFileID), nvmSection("application")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var ApplicationDataFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate2(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ApplicationDataFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers2(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (!gotDeserializationOptions(options)) {
        this.payload = options.applicationData;
      }
    }
    // Just binary data
    get applicationData() {
      return this.payload;
    }
    set applicationData(value) {
      this.payload = value;
    }
  };
  return ApplicationDataFile2 = _classThis;
})();

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/files/ApplicationNameFile.js
var __esDecorate3 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers3 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var ApplicationNameFileID = 266252;
var ApplicationNameFile = (() => {
  let _classDecorators = [nvmFileID(ApplicationNameFileID), nvmSection("application")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var ApplicationNameFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate3(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ApplicationNameFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers3(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (gotDeserializationOptions(options)) {
        this.name = cpp2js(this.payload.toString("utf8"));
      } else {
        this.name = options.name;
      }
    }
    name;
    serialize() {
      const nameAsString = Bytes.from(this.name, "utf8");
      this.payload = new Bytes(30).fill(0);
      this.payload.set(nameAsString.subarray(0, this.payload.length), 0);
      return super.serialize();
    }
  };
  return ApplicationNameFile2 = _classThis;
})();

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/files/ApplicationRFConfigFile.js
var import_gte = __toESM(require_gte(), 1);
var import_lt = __toESM(require_lt(), 1);
var __esDecorate4 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers4 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var ApplicationRFConfigFileID = 104;
var ApplicationRFConfigFile = (() => {
  let _classDecorators = [nvmFileID(ApplicationRFConfigFileID), nvmSection("application")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var ApplicationRFConfigFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate4(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ApplicationRFConfigFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers4(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (gotDeserializationOptions(options)) {
        if (this.payload.length === 3 || this.payload.length === 6) {
          this.rfRegion = this.payload[0];
          this.txPower = this.payload.readInt8(1) / 10;
          this.measured0dBm = this.payload.readInt8(2) / 10;
          if (this.payload.length === 6) {
            this.enablePTI = this.payload[3];
            this.maxTXPower = this.payload.readInt16LE(4) / 10;
          }
        } else if (this.payload.length === 8) {
          this.rfRegion = this.payload[0];
          this.txPower = this.payload.readInt16LE(1) / 10;
          this.measured0dBm = this.payload.readInt16LE(3) / 10;
          this.enablePTI = this.payload[5];
          this.maxTXPower = this.payload.readInt16LE(6) / 10;
        } else if (this.payload.length === 9) {
          this.rfRegion = this.payload[0];
          this.txPower = this.payload.readInt16LE(1) / 10;
          this.measured0dBm = this.payload.readInt16LE(3) / 10;
          this.enablePTI = this.payload[5];
          this.maxTXPower = this.payload.readInt16LE(6) / 10;
          this.nodeIdType = this.payload[8];
        } else {
          throw new ZWaveError(`ApplicationRFConfigFile has unsupported length ${this.payload.length}`, ZWaveErrorCodes.NVM_NotSupported);
        }
      } else {
        this.rfRegion = options.rfRegion;
        this.txPower = options.txPower;
        this.measured0dBm = options.measured0dBm;
        this.enablePTI = options.enablePTI;
        this.maxTXPower = options.maxTXPower;
        this.nodeIdType = options.nodeIdType;
      }
    }
    rfRegion;
    txPower;
    measured0dBm;
    enablePTI;
    maxTXPower;
    nodeIdType;
    serialize() {
      if ((0, import_lt.default)(this.fileVersion, "7.18.1")) {
        this.payload = new Bytes((0, import_gte.default)(this.fileVersion, "7.15.3") ? 6 : 3).fill(0);
        this.payload[0] = this.rfRegion;
        this.payload.writeIntLE(this.txPower * 10, 1, 1);
        this.payload.writeIntLE(this.measured0dBm * 10, 2, 1);
        if ((0, import_gte.default)(this.fileVersion, "7.15.3")) {
          this.payload[3] = this.enablePTI ?? 0;
          this.payload.writeInt16LE((this.maxTXPower ?? 0) * 10, 4);
        }
      } else if ((0, import_lt.default)(this.fileVersion, "7.21.0")) {
        this.payload = new Bytes(8).fill(0);
        this.payload[0] = this.rfRegion;
        this.payload.writeInt16LE(this.txPower * 10, 1);
        this.payload.writeInt16LE(this.measured0dBm * 10, 3);
        this.payload[5] = this.enablePTI ?? 0;
        this.payload.writeInt16LE((this.maxTXPower ?? 0) * 10, 6);
      } else {
        this.payload = new Bytes(9).fill(0);
        this.payload[0] = this.rfRegion;
        this.payload.writeInt16LE(this.txPower * 10, 1);
        this.payload.writeInt16LE(this.measured0dBm * 10, 3);
        this.payload[5] = this.enablePTI ?? 0;
        this.payload.writeInt16LE((this.maxTXPower ?? 0) * 10, 6);
        this.payload[8] = this.nodeIdType ?? NodeIDType.Short;
      }
      return super.serialize();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toJSON() {
      const ret = {
        ...super.toJSON(),
        "RF Region": getEnumMemberName(RFRegion, this.rfRegion),
        "TX Power": `${this.txPower.toFixed(1)} dBm`,
        "Power @ 0dBm": `${this.measured0dBm.toFixed(1)} dBm`
      };
      if (this.enablePTI != void 0) {
        ret["enable PTI"] = this.enablePTI;
      }
      if (this.maxTXPower != void 0) {
        ret["max TX power"] = `${this.maxTXPower.toFixed(1)} dBm`;
      }
      if (this.nodeIdType != void 0) {
        ret["node ID type"] = getEnumMemberName(NodeIDType, this.nodeIdType);
      }
      return ret;
    }
  };
  return ApplicationRFConfigFile2 = _classThis;
})();

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/files/ApplicationTypeFile.js
var __esDecorate5 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers5 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var ApplicationTypeFileID = 102;
var ApplicationTypeFile = (() => {
  let _classDecorators = [nvmFileID(ApplicationTypeFileID), nvmSection("application")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var ApplicationTypeFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate5(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ApplicationTypeFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers5(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (gotDeserializationOptions(options)) {
        this.isListening = !!(this.payload[0] & 1);
        this.optionalFunctionality = !!(this.payload[0] & 2);
        this.genericDeviceClass = this.payload[1];
        this.specificDeviceClass = this.payload[2];
      } else {
        this.isListening = options.isListening;
        this.optionalFunctionality = options.optionalFunctionality;
        this.genericDeviceClass = options.genericDeviceClass;
        this.specificDeviceClass = options.specificDeviceClass;
      }
    }
    isListening;
    optionalFunctionality;
    genericDeviceClass;
    specificDeviceClass;
    serialize() {
      this.payload = Bytes.from([
        (this.isListening ? 1 : 0) | (this.optionalFunctionality ? 2 : 0),
        this.genericDeviceClass,
        this.specificDeviceClass
      ]);
      return super.serialize();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toJSON() {
      return {
        ...super.toJSON(),
        listening: this.isListening,
        "opt. functionality": this.optionalFunctionality,
        genericDeviceClass: this.genericDeviceClass,
        specificDeviceClass: this.specificDeviceClass
      };
    }
  };
  return ApplicationTypeFile2 = _classThis;
})();

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/files/ControllerInfoFile.js
var __esDecorate6 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers6 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var ControllerInfoFileID = 327684;
var ControllerInfoFile = (() => {
  let _classDecorators = [nvmFileID(ControllerInfoFileID), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var ControllerInfoFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate6(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ControllerInfoFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers6(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (gotDeserializationOptions(options)) {
        this.homeId = this.payload.subarray(0, 4);
        if (this.payload.length === 13) {
          this.nodeId = this.payload[4];
          this.lastNodeId = this.payload[5];
          this.staticControllerNodeId = this.payload[6];
          this.sucLastIndex = this.payload[7];
          this.controllerConfiguration = this.payload[8];
          this.sucAwarenessPushNeeded = this.payload[9];
          this.maxNodeId = this.payload[10];
          this.reservedId = this.payload[11];
          this.systemState = this.payload[12];
        } else if (this.payload.length === 22) {
          this.nodeId = this.payload.readUInt16LE(4);
          this.staticControllerNodeId = this.payload.readUInt16LE(6);
          this.lastNodeIdLR = this.payload.readUInt16LE(8);
          this.lastNodeId = this.payload[10];
          this.sucLastIndex = this.payload[11];
          this.maxNodeIdLR = this.payload.readUInt16LE(12);
          this.maxNodeId = this.payload[14];
          this.controllerConfiguration = this.payload[15];
          this.reservedIdLR = this.payload.readUInt16LE(16);
          this.reservedId = this.payload[18];
          this.systemState = this.payload[19];
          this.primaryLongRangeChannelId = this.payload[20];
          this.dcdcConfig = this.payload[21];
        } else {
          throw new ZWaveError(`Unsupported payload length`, ZWaveErrorCodes.NVM_InvalidFormat);
        }
      } else {
        this.homeId = Bytes.view(options.homeId);
        this.nodeId = options.nodeId;
        this.lastNodeId = options.lastNodeId;
        this.staticControllerNodeId = options.staticControllerNodeId;
        this.sucLastIndex = options.sucLastIndex;
        this.controllerConfiguration = options.controllerConfiguration;
        this.maxNodeId = options.maxNodeId;
        this.reservedId = options.reservedId;
        this.systemState = options.systemState;
        if ("lastNodeIdLR" in options) {
          this.lastNodeIdLR = options.lastNodeIdLR;
          this.maxNodeIdLR = options.maxNodeIdLR;
          this.reservedIdLR = options.reservedIdLR;
          this.primaryLongRangeChannelId = options.primaryLongRangeChannelId;
          this.dcdcConfig = options.dcdcConfig;
        } else {
          this.sucAwarenessPushNeeded = options.sucAwarenessPushNeeded;
        }
      }
    }
    homeId;
    nodeId;
    lastNodeId;
    staticControllerNodeId;
    sucLastIndex;
    controllerConfiguration;
    // TODO: Figure out what this is
    sucAwarenessPushNeeded;
    maxNodeId;
    reservedId;
    systemState;
    lastNodeIdLR;
    maxNodeIdLR;
    reservedIdLR;
    primaryLongRangeChannelId;
    dcdcConfig;
    serialize() {
      if (this.lastNodeIdLR != void 0) {
        this.payload = new Bytes(22);
        this.payload.set(this.homeId, 0);
        this.payload.writeUInt16LE(this.nodeId, 4);
        this.payload.writeUInt16LE(this.staticControllerNodeId, 6);
        this.payload.writeUInt16LE(this.lastNodeIdLR, 8);
        this.payload[10] = this.lastNodeId;
        this.payload[11] = this.sucLastIndex;
        this.payload.writeUInt16LE(this.maxNodeIdLR, 12);
        this.payload[14] = this.maxNodeId;
        this.payload[15] = this.controllerConfiguration;
        this.payload.writeUInt16LE(this.reservedIdLR, 16);
        this.payload[18] = this.reservedId;
        this.payload[19] = this.systemState;
        this.payload[20] = this.primaryLongRangeChannelId;
        this.payload[21] = this.dcdcConfig;
      } else {
        this.payload = Bytes.concat([
          this.homeId,
          Bytes.from([
            this.nodeId,
            this.lastNodeId,
            this.staticControllerNodeId,
            this.sucLastIndex,
            this.controllerConfiguration,
            this.sucAwarenessPushNeeded ?? 0,
            this.maxNodeId,
            this.reservedId,
            this.systemState
          ])
        ]);
      }
      return super.serialize();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toJSON() {
      return stripUndefined({
        ...super.toJSON(),
        homeId: buffer2hex(this.homeId),
        nodeId: this.nodeId,
        lastNodeId: this.lastNodeId,
        staticControllerNodeId: this.staticControllerNodeId,
        sucLastIndex: this.sucLastIndex,
        controllerConfiguration: this.controllerConfiguration,
        sucAwarenessPushNeeded: this.sucAwarenessPushNeeded,
        maxNodeId: this.maxNodeId,
        reservedId: this.reservedId,
        systemState: this.systemState,
        lastNodeIdLR: this.lastNodeIdLR,
        maxNodeIdLR: this.maxNodeIdLR,
        reservedIdLR: this.reservedIdLR,
        primaryLongRangeChannelId: this.primaryLongRangeChannelId,
        dcdcConfig: this.dcdcConfig
      });
    }
  };
  return ControllerInfoFile2 = _classThis;
})();

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/files/NodeInfoFiles.js
var __esDecorate7 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers7 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var NODEINFOS_PER_FILE_V1 = 4;
var LR_NODEINFOS_PER_FILE_V5 = 50;
var NODEINFO_SIZE = 1 + 5 + NUM_NODEMASK_BYTES;
var LR_NODEINFO_SIZE = 3;
var EMPTY_NODEINFO_FILL = 255;
var emptyNodeInfo = new Uint8Array(NODEINFO_SIZE).fill(EMPTY_NODEINFO_FILL);
function parseNodeInfo(nodeId, buffer, offset) {
  const { hasSpecificDeviceClass, ...protocolInfo } = parseNodeProtocolInfo(buffer, offset);
  const genericDeviceClass = buffer[offset + 3];
  const specificDeviceClass = hasSpecificDeviceClass ? buffer[offset + 4] : null;
  const neighbors = parseBitMask(buffer.subarray(offset + 5, offset + 5 + NUM_NODEMASK_BYTES));
  const sucUpdateIndex = buffer[offset + 5 + NUM_NODEMASK_BYTES];
  return {
    nodeId,
    ...protocolInfo,
    genericDeviceClass,
    specificDeviceClass,
    neighbors,
    sucUpdateIndex
  };
}
function encodeNodeInfo(nodeInfo) {
  const ret = new Bytes(NODEINFO_SIZE);
  const hasSpecificDeviceClass = nodeInfo.specificDeviceClass != null;
  const protocolInfo = {
    ...pick(nodeInfo, [
      "isListening",
      "isFrequentListening",
      "isRouting",
      "supportedDataRates",
      "protocolVersion",
      "optionalFunctionality",
      "nodeType",
      "supportsSecurity",
      "supportsBeaming"
    ]),
    hasSpecificDeviceClass
  };
  ret.set(encodeNodeProtocolInfo(protocolInfo), 0);
  ret[3] = nodeInfo.genericDeviceClass;
  if (hasSpecificDeviceClass)
    ret[4] = nodeInfo.specificDeviceClass;
  ret.set(encodeBitMask(nodeInfo.neighbors, MAX_NODES), 5);
  ret[5 + NUM_NODEMASK_BYTES] = nodeInfo.sucUpdateIndex;
  return ret;
}
function parseLRNodeInfo(nodeId, buffer, offset) {
  const capability = buffer[offset];
  const isRouting = !!(capability & 1);
  const isListening = !!(capability & 2);
  const hasSpecificDeviceClass = !!(capability & 4);
  const supportsBeaming = !!(capability & 8);
  const optionalFunctionality = !!(capability & 16);
  let isFrequentListening;
  switch (capability & 96) {
    case 64:
      isFrequentListening = "1000ms";
      break;
    case 32:
      isFrequentListening = "250ms";
      break;
    default:
      isFrequentListening = false;
  }
  const nodeType = NodeType["End Node"];
  const supportsSecurity = true;
  const protocolVersion = 3;
  const supportedDataRates = [1e5];
  return {
    nodeId,
    isRouting,
    isListening,
    supportsBeaming,
    isFrequentListening,
    optionalFunctionality,
    nodeType,
    supportsSecurity,
    protocolVersion,
    supportedDataRates,
    genericDeviceClass: buffer[offset + 1],
    specificDeviceClass: hasSpecificDeviceClass ? buffer[offset + 2] : null
  };
}
function encodeLRNodeInfo(nodeInfo) {
  const ret = new Bytes(LR_NODEINFO_SIZE);
  let capability = 0;
  if (nodeInfo.isRouting)
    capability |= 1;
  if (nodeInfo.isListening)
    capability |= 2;
  if (nodeInfo.specificDeviceClass != null)
    capability |= 4;
  if (nodeInfo.supportsBeaming)
    capability |= 8;
  if (nodeInfo.optionalFunctionality)
    capability |= 16;
  if (nodeInfo.isFrequentListening === "1000ms") {
    capability |= 64;
  } else if (nodeInfo.isFrequentListening === "250ms") {
    capability |= 32;
  }
  ret[0] = capability;
  ret[1] = nodeInfo.genericDeviceClass;
  ret[2] = nodeInfo.specificDeviceClass ?? 0;
  return ret;
}
var NodeInfoFileV0IDBase = 327936;
function nodeIdToNodeInfoFileIDV0(nodeId) {
  return NodeInfoFileV0IDBase + nodeId - 1;
}
var NodeInfoFileV0 = (() => {
  let _classDecorators = [nvmFileID((id) => id >= NodeInfoFileV0IDBase && id < NodeInfoFileV0IDBase + MAX_NODES), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var NodeInfoFileV02 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate7(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      NodeInfoFileV02 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers7(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (gotDeserializationOptions(options)) {
        this.nodeInfo = parseNodeInfo(this.fileId - NodeInfoFileV0IDBase + 1, this.payload, 0);
      } else {
        this.nodeInfo = options.nodeInfo;
      }
    }
    nodeInfo;
    serialize() {
      this.fileId = nodeIdToNodeInfoFileIDV0(this.nodeInfo.nodeId);
      this.payload = encodeNodeInfo(this.nodeInfo);
      return super.serialize();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toJSON() {
      return {
        ...super.toJSON(),
        nodeInfo: this.nodeInfo
      };
    }
  };
  return NodeInfoFileV02 = _classThis;
})();
var NodeInfoFileV1IDBase = 328192;
function nodeIdToNodeInfoFileIDV1(nodeId) {
  return NodeInfoFileV1IDBase + Math.floor((nodeId - 1) / NODEINFOS_PER_FILE_V1);
}
var NodeInfoFileV1 = (() => {
  let _classDecorators = [nvmFileID((id) => id >= NodeInfoFileV1IDBase && id < NodeInfoFileV1IDBase + MAX_NODES / NODEINFOS_PER_FILE_V1), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var NodeInfoFileV12 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate7(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      NodeInfoFileV12 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers7(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (gotDeserializationOptions(options)) {
        this.nodeInfos = [];
        for (let i = 0; i < NODEINFOS_PER_FILE_V1; i++) {
          const nodeId = (this.fileId - NodeInfoFileV1IDBase) * NODEINFOS_PER_FILE_V1 + 1 + i;
          const offset = i * NODEINFO_SIZE;
          const entry = this.payload.subarray(offset, offset + NODEINFO_SIZE);
          if (entry.equals(emptyNodeInfo))
            continue;
          const nodeInfo = parseNodeInfo(nodeId, entry, 0);
          this.nodeInfos.push(nodeInfo);
        }
      } else {
        this.nodeInfos = options.nodeInfos;
      }
    }
    nodeInfos;
    serialize() {
      this.nodeInfos.sort((a, b) => a.nodeId - b.nodeId);
      const minNodeId = this.nodeInfos[0].nodeId;
      this.fileId = nodeIdToNodeInfoFileIDV1(minNodeId);
      this.payload = new Bytes(NODEINFO_SIZE * NODEINFOS_PER_FILE_V1).fill(EMPTY_NODEINFO_FILL);
      const minFileNodeId = Math.floor((minNodeId - 1) / NODEINFOS_PER_FILE_V1) * NODEINFOS_PER_FILE_V1 + 1;
      for (const nodeInfo of this.nodeInfos) {
        const offset = (nodeInfo.nodeId - minFileNodeId) * NODEINFO_SIZE;
        this.payload.set(encodeNodeInfo(nodeInfo), offset);
      }
      return super.serialize();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toJSON() {
      return {
        ...super.toJSON(),
        "node infos": this.nodeInfos
      };
    }
  };
  return NodeInfoFileV12 = _classThis;
})();
var LRNodeInfoFileV5IDBase = 329728;
function nodeIdToLRNodeInfoFileIDV5(nodeId) {
  return LRNodeInfoFileV5IDBase + Math.floor((nodeId - 256) / LR_NODEINFOS_PER_FILE_V5);
}
var LRNodeInfoFileV5 = (() => {
  let _classDecorators = [nvmFileID((id) => id >= LRNodeInfoFileV5IDBase && id < LRNodeInfoFileV5IDBase + MAX_NODES_LR / LR_NODEINFOS_PER_FILE_V5), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var LRNodeInfoFileV52 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate7(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      LRNodeInfoFileV52 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers7(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (gotDeserializationOptions(options)) {
        this.nodeInfos = [];
        for (let i = 0; i < LR_NODEINFOS_PER_FILE_V5; i++) {
          const nodeId = (this.fileId - LRNodeInfoFileV5IDBase) * LR_NODEINFOS_PER_FILE_V5 + 256 + i;
          const offset = i * LR_NODEINFO_SIZE;
          const entry = this.payload.subarray(offset, offset + LR_NODEINFO_SIZE);
          if (entry.equals(emptyNodeInfo))
            continue;
          const nodeInfo = parseLRNodeInfo(nodeId, entry, 0);
          this.nodeInfos.push(nodeInfo);
        }
      } else {
        this.nodeInfos = options.nodeInfos;
      }
    }
    nodeInfos;
    serialize() {
      this.nodeInfos.sort((a, b) => a.nodeId - b.nodeId);
      const minNodeId = this.nodeInfos[0].nodeId;
      this.fileId = nodeIdToLRNodeInfoFileIDV5(minNodeId);
      this.payload = new Bytes(LR_NODEINFO_SIZE * LR_NODEINFOS_PER_FILE_V5).fill(EMPTY_NODEINFO_FILL);
      const minFileNodeId = Math.floor((minNodeId - 256) / LR_NODEINFOS_PER_FILE_V5) * LR_NODEINFOS_PER_FILE_V5 + 256;
      for (const nodeInfo of this.nodeInfos) {
        const offset = (nodeInfo.nodeId - minFileNodeId) * LR_NODEINFO_SIZE;
        this.payload.set(encodeLRNodeInfo(nodeInfo), offset);
      }
      return super.serialize();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toJSON() {
      return {
        ...super.toJSON(),
        "node infos": this.nodeInfos
      };
    }
  };
  return LRNodeInfoFileV52 = _classThis;
})();

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/files/ProtocolNodeMaskFiles.js
var __esDecorate8 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers8 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var ProtocolNodeMaskFile = class extends NVMFile {
  constructor(options) {
    super(options);
    if (gotDeserializationOptions(options)) {
      this.nodeIdSet = new Set(parseBitMask(this.payload));
    } else {
      this.nodeIdSet = new Set(options.nodeIds);
    }
  }
  nodeIdSet;
  get nodeIds() {
    return [...this.nodeIdSet];
  }
  set nodeIds(value) {
    this.nodeIdSet = new Set(value);
  }
  serialize() {
    this.payload = encodeBitMask([...this.nodeIdSet], NODE_ID_MAX);
    return super.serialize();
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  toJSON() {
    return {
      ...super.toJSON(),
      "node IDs": [...this.nodeIdSet].join(", ")
    };
  }
};
var ProtocolPreferredRepeatersFileID = 327682;
var ProtocolPreferredRepeatersFile = (() => {
  let _classDecorators = [nvmFileID(ProtocolPreferredRepeatersFileID), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = ProtocolNodeMaskFile;
  var ProtocolPreferredRepeatersFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate8(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ProtocolPreferredRepeatersFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers8(_classThis, _classExtraInitializers);
    }
  };
  return ProtocolPreferredRepeatersFile2 = _classThis;
})();
var ProtocolNodeListFileID = 327685;
var ProtocolNodeListFile = (() => {
  let _classDecorators = [nvmFileID(ProtocolNodeListFileID), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = ProtocolNodeMaskFile;
  var ProtocolNodeListFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate8(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ProtocolNodeListFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers8(_classThis, _classExtraInitializers);
    }
  };
  return ProtocolNodeListFile2 = _classThis;
})();
var ProtocolAppRouteLockNodeMaskFileID = 327686;
var ProtocolAppRouteLockNodeMaskFile = (() => {
  let _classDecorators = [nvmFileID(ProtocolAppRouteLockNodeMaskFileID), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = ProtocolNodeMaskFile;
  var ProtocolAppRouteLockNodeMaskFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate8(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ProtocolAppRouteLockNodeMaskFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers8(_classThis, _classExtraInitializers);
    }
  };
  return ProtocolAppRouteLockNodeMaskFile2 = _classThis;
})();
var ProtocolRouteSlaveSUCNodeMaskFileID = 327687;
var ProtocolRouteSlaveSUCNodeMaskFile = (() => {
  let _classDecorators = [nvmFileID(ProtocolRouteSlaveSUCNodeMaskFileID), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = ProtocolNodeMaskFile;
  var ProtocolRouteSlaveSUCNodeMaskFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate8(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ProtocolRouteSlaveSUCNodeMaskFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers8(_classThis, _classExtraInitializers);
    }
  };
  return ProtocolRouteSlaveSUCNodeMaskFile2 = _classThis;
})();
var ProtocolSUCPendingUpdateNodeMaskFileID = 327688;
var ProtocolSUCPendingUpdateNodeMaskFile = (() => {
  let _classDecorators = [nvmFileID(ProtocolSUCPendingUpdateNodeMaskFileID), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = ProtocolNodeMaskFile;
  var ProtocolSUCPendingUpdateNodeMaskFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate8(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ProtocolSUCPendingUpdateNodeMaskFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers8(_classThis, _classExtraInitializers);
    }
  };
  return ProtocolSUCPendingUpdateNodeMaskFile2 = _classThis;
})();
var ProtocolVirtualNodeMaskFileID = 327689;
var ProtocolVirtualNodeMaskFile = (() => {
  let _classDecorators = [nvmFileID(ProtocolVirtualNodeMaskFileID), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = ProtocolNodeMaskFile;
  var ProtocolVirtualNodeMaskFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate8(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ProtocolVirtualNodeMaskFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers8(_classThis, _classExtraInitializers);
    }
  };
  return ProtocolVirtualNodeMaskFile2 = _classThis;
})();
var ProtocolPendingDiscoveryNodeMaskFileID = 327690;
var ProtocolPendingDiscoveryNodeMaskFile = (() => {
  let _classDecorators = [nvmFileID(ProtocolPendingDiscoveryNodeMaskFileID), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = ProtocolNodeMaskFile;
  var ProtocolPendingDiscoveryNodeMaskFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate8(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ProtocolPendingDiscoveryNodeMaskFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers8(_classThis, _classExtraInitializers);
    }
  };
  return ProtocolPendingDiscoveryNodeMaskFile2 = _classThis;
})();
var ProtocolRouteCacheExistsNodeMaskFileID = 327691;
var ProtocolRouteCacheExistsNodeMaskFile = (() => {
  let _classDecorators = [nvmFileID(ProtocolRouteCacheExistsNodeMaskFileID), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = ProtocolNodeMaskFile;
  var ProtocolRouteCacheExistsNodeMaskFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate8(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ProtocolRouteCacheExistsNodeMaskFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers8(_classThis, _classExtraInitializers);
    }
  };
  return ProtocolRouteCacheExistsNodeMaskFile2 = _classThis;
})();
var ProtocolLRNodeListFileID = 327692;
var ProtocolLRNodeListFile = (() => {
  let _classDecorators = [nvmFileID(ProtocolLRNodeListFileID), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var ProtocolLRNodeListFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate8(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ProtocolLRNodeListFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers8(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (gotDeserializationOptions(options)) {
        this.nodeIdSet = new Set(parseBitMask(this.payload, 256));
      } else {
        this.nodeIdSet = new Set(options.nodeIds);
      }
    }
    nodeIdSet;
    get nodeIds() {
      return [...this.nodeIdSet];
    }
    set nodeIds(value) {
      this.nodeIdSet = new Set(value);
    }
    serialize() {
      this.payload = encodeBitMask([...this.nodeIdSet], 1279, 256);
      return super.serialize();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toJSON() {
      return {
        ...super.toJSON(),
        "node IDs": [...this.nodeIdSet].join(", ")
      };
    }
  };
  return ProtocolLRNodeListFile2 = _classThis;
})();

// node_modules/@zwave-js/nvmedit/build/esm/lib/common/routeCache.js
var ROUTE_SIZE = MAX_REPEATERS + 1;
var ROUTECACHE_SIZE = 2 * ROUTE_SIZE;
var EMPTY_ROUTECACHE_FILL = 255;
var emptyRouteCache = new Uint8Array(ROUTECACHE_SIZE).fill(EMPTY_ROUTECACHE_FILL);
var Beaming;
(function(Beaming2) {
  Beaming2[Beaming2["1000ms"] = 64] = "1000ms";
  Beaming2[Beaming2["250ms"] = 32] = "250ms";
})(Beaming || (Beaming = {}));
function parseRoute(buffer, offset) {
  const routeConf = buffer[offset + MAX_REPEATERS];
  const ret = {
    beaming: Beaming[routeConf & 96] ?? false,
    protocolRate: routeConf & protocolDataRateMask,
    repeaterNodeIDs: [
      ...buffer.subarray(offset, offset + MAX_REPEATERS)
    ].filter((id) => id !== 0)
  };
  if (ret.repeaterNodeIDs[0] === 254)
    delete ret.repeaterNodeIDs;
  return ret;
}
function encodeRoute(route) {
  const ret = new Bytes(ROUTE_SIZE).fill(0);
  if (route) {
    if (route.repeaterNodeIDs) {
      for (let i = 0; i < MAX_REPEATERS && i < route.repeaterNodeIDs.length; i++) {
        ret[i] = route.repeaterNodeIDs[i];
      }
    } else {
      ret[0] = 254;
    }
    let routeConf = 0;
    if (route.beaming)
      routeConf |= Beaming[route.beaming] ?? 0;
    routeConf |= route.protocolRate & protocolDataRateMask;
    ret[ROUTE_SIZE - 1] = routeConf;
  }
  return ret;
}
function getEmptyRoute() {
  return {
    beaming: false,
    protocolRate: RouteProtocolDataRate.ZWave_40k,
    repeaterNodeIDs: void 0
  };
}

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/files/RouteCacheFiles.js
var __esDecorate9 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers9 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var ROUTECACHES_PER_FILE_V1 = 8;
var RouteCacheFileV0IDBase = 328704;
function nodeIdToRouteCacheFileIDV0(nodeId) {
  return RouteCacheFileV0IDBase + nodeId - 1;
}
var RouteCacheFileV0 = (() => {
  let _classDecorators = [nvmFileID((id) => id >= RouteCacheFileV0IDBase && id < RouteCacheFileV0IDBase + MAX_NODES), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var RouteCacheFileV02 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate9(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      RouteCacheFileV02 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers9(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (gotDeserializationOptions(options)) {
        const nodeId = this.fileId - RouteCacheFileV0IDBase + 1;
        const lwr = parseRoute(this.payload, 0);
        const nlwr = parseRoute(this.payload, MAX_REPEATERS + 1);
        this.routeCache = { nodeId, lwr, nlwr };
      } else {
        this.routeCache = options.routeCache;
      }
    }
    routeCache;
    serialize() {
      this.fileId = nodeIdToRouteCacheFileIDV0(this.routeCache.nodeId);
      this.payload = Bytes.concat([
        encodeRoute(this.routeCache.lwr),
        encodeRoute(this.routeCache.nlwr)
      ]);
      return super.serialize();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toJSON() {
      return {
        ...super.toJSON(),
        routeCache: this.routeCache
      };
    }
  };
  return RouteCacheFileV02 = _classThis;
})();
var RouteCacheFileV1IDBase = 332800;
function nodeIdToRouteCacheFileIDV1(nodeId) {
  return RouteCacheFileV1IDBase + Math.floor((nodeId - 1) / ROUTECACHES_PER_FILE_V1);
}
var RouteCacheFileV1 = (() => {
  let _classDecorators = [nvmFileID((id) => id >= RouteCacheFileV1IDBase && id < RouteCacheFileV1IDBase + MAX_NODES / ROUTECACHES_PER_FILE_V1), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var RouteCacheFileV12 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate9(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      RouteCacheFileV12 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers9(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (gotDeserializationOptions(options)) {
        this.routeCaches = [];
        for (let i = 0; i < ROUTECACHES_PER_FILE_V1; i++) {
          const offset = i * 2 * (MAX_REPEATERS + 1);
          const entry = this.payload.subarray(offset, offset + 2 * (MAX_REPEATERS + 1));
          if (entry.equals(emptyRouteCache))
            continue;
          const nodeId = (this.fileId - RouteCacheFileV1IDBase) * ROUTECACHES_PER_FILE_V1 + 1 + i;
          const lwr = parseRoute(this.payload, offset);
          const nlwr = parseRoute(this.payload, offset + MAX_REPEATERS + 1);
          this.routeCaches.push({ nodeId, lwr, nlwr });
        }
      } else {
        this.routeCaches = options.routeCaches;
      }
    }
    routeCaches;
    serialize() {
      this.routeCaches.sort((a, b) => a.nodeId - b.nodeId);
      const minNodeId = this.routeCaches[0].nodeId;
      this.fileId = nodeIdToRouteCacheFileIDV1(minNodeId);
      this.payload = new Bytes(ROUTECACHES_PER_FILE_V1 * ROUTECACHE_SIZE).fill(EMPTY_ROUTECACHE_FILL);
      const minFileNodeId = Math.floor((minNodeId - 1) / ROUTECACHES_PER_FILE_V1) * ROUTECACHES_PER_FILE_V1 + 1;
      for (const routeCache of this.routeCaches) {
        const offset = (routeCache.nodeId - minFileNodeId) * ROUTECACHE_SIZE;
        const routes = Bytes.concat([
          encodeRoute(routeCache.lwr),
          encodeRoute(routeCache.nlwr)
        ]);
        this.payload.set(routes, offset);
      }
      return super.serialize();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toJSON() {
      return {
        ...super.toJSON(),
        "route caches": this.routeCaches
      };
    }
  };
  return RouteCacheFileV12 = _classThis;
})();

// node_modules/@zwave-js/nvmedit/build/esm/lib/common/sucUpdateEntry.js
function parseSUCUpdateEntry(buffer, offset) {
  const slice = buffer.subarray(offset, offset + SUC_UPDATE_ENTRY_SIZE);
  if (slice.every((b) => b === 0 || b === 255)) {
    return;
  }
  const nodeId = slice[0];
  const changeType = slice[1];
  const { supportedCCs, controlledCCs } = parseCCList(slice.subarray(2, SUC_UPDATE_ENTRY_SIZE));
  return {
    nodeId,
    changeType,
    supportedCCs: supportedCCs.filter((cc) => cc > 0),
    controlledCCs: controlledCCs.filter((cc) => cc > 0)
  };
}
function encodeSUCUpdateEntry(entry) {
  const ret = new Bytes(SUC_UPDATE_ENTRY_SIZE).fill(0);
  if (entry) {
    ret[0] = entry.nodeId;
    ret[1] = entry.changeType;
    const ccList = encodeCCList(entry.supportedCCs, entry.controlledCCs);
    if (ccList.length > SUC_UPDATE_NODEPARM_MAX) {
      throw new ZWaveError("Cannot encode SUC update entry, too many CCs", ZWaveErrorCodes.Argument_Invalid);
    }
    ret.set(ccList, 2);
  }
  return ret;
}

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/files/SUCUpdateEntriesFile.js
var __esDecorate10 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers10 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var SUC_UPDATES_PER_FILE_V5 = 8;
var SUCUpdateEntriesFileIDV0 = 327683;
var SUCUpdateEntriesFileV0 = (() => {
  let _classDecorators = [nvmFileID(SUCUpdateEntriesFileIDV0), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var SUCUpdateEntriesFileV02 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate10(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      SUCUpdateEntriesFileV02 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers10(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (gotDeserializationOptions(options)) {
        this.updateEntries = [];
        for (let entry = 0; entry < SUC_MAX_UPDATES; entry++) {
          const offset = entry * SUC_UPDATE_ENTRY_SIZE;
          const updateEntry = parseSUCUpdateEntry(this.payload, offset);
          if (updateEntry)
            this.updateEntries.push(updateEntry);
        }
      } else {
        this.updateEntries = options.updateEntries;
      }
    }
    updateEntries;
    serialize() {
      this.payload = new Bytes(SUC_MAX_UPDATES * SUC_UPDATE_ENTRY_SIZE).fill(0);
      for (let i = 0; i < this.updateEntries.length; i++) {
        const offset = i * SUC_UPDATE_ENTRY_SIZE;
        const entry = this.updateEntries[i];
        this.payload.set(encodeSUCUpdateEntry(entry), offset);
      }
      return super.serialize();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toJSON() {
      return {
        ...super.toJSON(),
        "SUC update entries": this.updateEntries
      };
    }
  };
  return SUCUpdateEntriesFileV02 = _classThis;
})();
var SUCUpdateEntriesFileV5IDBase = 344064;
var SUCUpdateEntriesFileV5IDMax = SUCUpdateEntriesFileV5IDBase + SUC_MAX_UPDATES / SUC_UPDATES_PER_FILE_V5 - 1;
function sucUpdateIndexToSUCUpdateEntriesFileIDV5(index) {
  return SUCUpdateEntriesFileV5IDBase + Math.floor(index / SUC_UPDATES_PER_FILE_V5);
}
var SUCUpdateEntriesFileV5 = (() => {
  let _classDecorators = [nvmFileID((id) => id >= SUCUpdateEntriesFileV5IDBase && id <= SUCUpdateEntriesFileV5IDMax), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = NVMFile;
  var SUCUpdateEntriesFileV52 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate10(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      SUCUpdateEntriesFileV52 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers10(_classThis, _classExtraInitializers);
    }
    constructor(options) {
      super(options);
      if (gotDeserializationOptions(options)) {
        this.updateEntries = [];
        for (let entry = 0; entry < SUC_UPDATES_PER_FILE_V5; entry++) {
          const offset = entry * SUC_UPDATE_ENTRY_SIZE;
          const updateEntry = parseSUCUpdateEntry(this.payload, offset);
          if (updateEntry)
            this.updateEntries.push(updateEntry);
        }
      } else {
        this.updateEntries = options.updateEntries;
      }
    }
    updateEntries;
    serialize() {
      this.payload = new Bytes(SUC_UPDATES_PER_FILE_V5 * SUC_UPDATE_ENTRY_SIZE).fill(255);
      for (let i = 0; i < this.updateEntries.length; i++) {
        const offset = i * SUC_UPDATE_ENTRY_SIZE;
        const entry = this.updateEntries[i];
        this.payload.set(encodeSUCUpdateEntry(entry), offset);
      }
      return super.serialize();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toJSON() {
      return {
        ...super.toJSON(),
        "SUC update entries": this.updateEntries
      };
    }
  };
  return SUCUpdateEntriesFileV52 = _classThis;
})();

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/files/VersionFiles.js
var __esDecorate11 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers11 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var VersionFile = class extends NVMFile {
  constructor(options) {
    super(options);
    if (gotDeserializationOptions(options)) {
      this.format = this.payload[3];
      this.major = this.payload[2];
      this.minor = this.payload[1];
      this.patch = this.payload[0];
    } else {
      this.format = options.format;
      this.major = options.major;
      this.minor = options.minor;
      this.patch = options.patch;
    }
  }
  format;
  major;
  minor;
  patch;
  serialize() {
    this.payload = Bytes.from([
      this.patch,
      this.minor,
      this.major,
      this.format
    ]);
    return super.serialize();
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  toJSON() {
    return {
      ...super.toJSON(),
      format: this.format,
      version: `${this.major}.${this.minor}.${this.patch}`
    };
  }
};
var ApplicationVersionFileID = 331776;
var ApplicationVersionFile = (() => {
  let _classDecorators = [nvmFileID(ApplicationVersionFileID), nvmSection("application")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = VersionFile;
  var ApplicationVersionFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate11(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ApplicationVersionFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers11(_classThis, _classExtraInitializers);
    }
  };
  return ApplicationVersionFile2 = _classThis;
})();
var ApplicationVersionFile800ID = 266240;
var ApplicationVersionFile800 = (() => {
  let _classDecorators = [nvmFileID(ApplicationVersionFile800ID), nvmSection("application")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = VersionFile;
  var ApplicationVersionFile8002 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate11(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ApplicationVersionFile8002 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers11(_classThis, _classExtraInitializers);
    }
  };
  return ApplicationVersionFile8002 = _classThis;
})();
var ProtocolVersionFileID = 327680;
var ProtocolVersionFile = (() => {
  let _classDecorators = [nvmFileID(ProtocolVersionFileID), nvmSection("protocol")];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _classSuper = VersionFile;
  var ProtocolVersionFile2 = class extends _classSuper {
    static {
      _classThis = this;
    }
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate11(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      ProtocolVersionFile2 = _classThis = _classDescriptor.value;
      if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers11(_classThis, _classExtraInitializers);
    }
  };
  return ProtocolVersionFile2 = _classThis;
})();

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/utils.js
function computeBergerCode(word, numBits = 32) {
  let ret = word;
  if (numBits < 32) {
    ret &= (1 << numBits) - 1;
  }
  ret = ret - (ret >> 1 & 1431655765);
  ret = (ret & 858993459) + (ret >> 2 & 858993459);
  ret = (ret + (ret >> 4) & 252645135) * 16843009 >> 24;
  return numBits - ret;
}
function validateBergerCode(word, code, numBits = 32) {
  if (computeBergerCode(word, numBits) !== code) {
    throw new ZWaveError("Berger Code validation failed!", ZWaveErrorCodes.NVM_InvalidFormat);
  }
}
function computeBergerCodeMulti(words, numBits) {
  let ret = 0;
  for (const word of words) {
    ret += computeBergerCode(word, Math.min(numBits, 32));
    if (numBits < 32)
      break;
    numBits -= 32;
  }
  return ret;
}
function validateBergerCodeMulti(words, numBits) {
  let actual = 0;
  let expected;
  for (const word of words) {
    actual += computeBergerCode(word, Math.min(numBits, 32));
    if (numBits < 32) {
      const maskSize = 32 - numBits;
      const mask = (1 << maskSize) - 1;
      expected = word >>> numBits & mask;
      break;
    }
    numBits -= 32;
  }
  if (actual !== expected) {
    throw new ZWaveError("Berger Code validation failed!", ZWaveErrorCodes.NVM_InvalidFormat);
  }
}
function mapToObject(map) {
  const obj = {};
  for (const [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}
function dumpObject(obj, json = false) {
  try {
    if (json) {
      const file = NVMFile.from(obj.key, obj.data, "7.0.0");
      console.log(JSON.stringify({
        offset: num2hex(obj.offset),
        ...file.toJSON()
      }, null, 2));
      console.log();
      return;
    }
  } catch {
  }
  const prefix = json ? "" : "  ";
  console.log(`${prefix}\xB7 offset: ${num2hex(obj.offset)}`);
  console.log(`${prefix}  key: 0x${obj.key.toString(16)}`);
  console.log(`${prefix}  type: ${ObjectType[obj.type]}`);
  console.log(`${prefix}  fragment type: ${FragmentType[obj.fragmentType]}`);
  if (obj.data) {
    console.log(`${prefix}  data: ${buffer2hex(obj.data)} (${obj.data.length} bytes)`);
  }
  console.log();
}
async function dumpNVM(nvm) {
  for (const [name, section] of Object.entries(nvm.info.sections)) {
    console.log(`NVM section: ${name}`);
    for (const page of section.pages) {
      console.log("");
      console.log(`page (offset 0x${page.offset.toString(16)}):`);
      console.log(`  version: ${page.version}`);
      console.log(`  eraseCount: ${page.eraseCount}`);
      console.log(`  status: ${PageStatus[page.status]}`);
      console.log(`  encrypted: ${page.encrypted}`);
      console.log(`  pageSize: ${page.pageSize}`);
      console.log(`  writeSize: ${page.writeSize}`);
      console.log(`  memoryMapped: ${page.memoryMapped}`);
      console.log(`  deviceFamily: ${page.deviceFamily}`);
      console.log("");
      if (page.objects.length) {
        console.log(`  raw objects:`);
        for (const objectHeader of page.objects) {
          const objectData = objectHeader.type !== ObjectType.Deleted ? await nvm.readObjectData(objectHeader) : void 0;
          dumpObject({
            offset: objectHeader.offset,
            key: objectHeader.key,
            type: objectHeader.type,
            fragmentType: objectHeader.fragmentType,
            data: objectData
          }, false);
        }
      }
    }
    console.log();
    console.log();
  }
  for (const [name, section] of Object.entries(nvm.info.sections)) {
    console.log(`${name} objects:`);
    for (const [fileId, pageIndex] of section.objectLocations) {
      const page = section.pages[pageIndex];
      const objectHeader = page.objects.findLast((o) => o.key === fileId);
      if (!objectHeader)
        continue;
      const objectData = await nvm.get(fileId);
      dumpObject({
        offset: objectHeader.offset,
        key: fileId,
        type: objectHeader.type,
        fragmentType: FragmentType.None,
        data: objectData
      }, true);
    }
    console.log();
  }
}

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/object.js
function serializeObject(obj) {
  const isLarge = obj.type === ObjectType.DataLarge || obj.type === ObjectType.CounterLarge;
  const headerSize = isLarge ? NVM3_OBJ_HEADER_SIZE_LARGE : NVM3_OBJ_HEADER_SIZE_SMALL;
  const dataLength = obj.data?.length ?? 0;
  const ret = new Bytes(dataLength + headerSize);
  if (isLarge) {
    let hdr2 = dataLength & NVM3_OBJ_LARGE_LEN_MASK;
    const hdr1 = obj.type & NVM3_OBJ_TYPE_MASK | (obj.key & NVM3_OBJ_KEY_MASK) << NVM3_OBJ_KEY_SHIFT | (obj.fragmentType & NVM3_OBJ_FRAGTYPE_MASK) << NVM3_OBJ_FRAGTYPE_SHIFT;
    const bergerCode = computeBergerCodeMulti([hdr1, hdr2], 32 + NVM3_CODE_LARGE_SHIFT);
    hdr2 |= bergerCode << NVM3_CODE_LARGE_SHIFT;
    ret.writeInt32LE(hdr1, 0);
    ret.writeInt32LE(hdr2, 4);
  } else {
    let typeAndLen = obj.type;
    if (typeAndLen === ObjectType.DataSmall && dataLength > 0) {
      typeAndLen += dataLength;
    }
    let hdr1 = typeAndLen & NVM3_OBJ_TYPE_MASK | (obj.key & NVM3_OBJ_KEY_MASK) << NVM3_OBJ_KEY_SHIFT;
    const bergerCode = computeBergerCode(hdr1, NVM3_CODE_SMALL_SHIFT);
    hdr1 |= bergerCode << NVM3_CODE_SMALL_SHIFT;
    ret.writeInt32LE(hdr1, 0);
  }
  if (obj.data) {
    ret.set(obj.data, headerSize);
  }
  return ret;
}
function fragmentLargeObject(obj, maxFirstFragmentSizeWithHeader, maxFragmentSizeWithHeader) {
  const ret = [];
  if (obj.data.length + NVM3_OBJ_HEADER_SIZE_LARGE <= maxFirstFragmentSizeWithHeader) {
    return [obj];
  }
  let offset = 0;
  while (offset < obj.data.length) {
    const fragmentSize = offset === 0 ? maxFirstFragmentSizeWithHeader - NVM3_OBJ_HEADER_SIZE_LARGE : maxFragmentSizeWithHeader - NVM3_OBJ_HEADER_SIZE_LARGE;
    const data = obj.data.subarray(offset, offset + fragmentSize);
    ret.push({
      type: obj.type,
      key: obj.key,
      fragmentType: offset === 0 ? FragmentType.First : data.length + NVM3_OBJ_HEADER_SIZE_LARGE < maxFragmentSizeWithHeader ? FragmentType.Last : FragmentType.Next,
      data
    });
    offset += fragmentSize;
  }
  return ret;
}
function getAlignedSize(size) {
  return size + NVM3_WORD_SIZE - 1 & ~(NVM3_WORD_SIZE - 1);
}
function getHeaderSize(obj) {
  switch (obj.type) {
    case ObjectType.Deleted:
    case ObjectType.CounterSmall:
    case ObjectType.DataSmall:
      return NVM3_OBJ_HEADER_SIZE_SMALL;
    case ObjectType.CounterLarge:
    case ObjectType.DataLarge:
      return NVM3_OBJ_HEADER_SIZE_LARGE;
  }
}
function getFragmentSize(obj) {
  switch (obj.type) {
    case ObjectType.Deleted:
      return 0;
    case ObjectType.CounterSmall:
      return NVM3_COUNTER_SIZE;
    case ObjectType.DataSmall:
    case ObjectType.DataLarge:
    case ObjectType.CounterLarge:
      return obj.data?.length ?? 0;
  }
}
function getRequiredSpace(obj) {
  return getHeaderSize(obj) + getAlignedSize(getFragmentSize(obj));
}
function getObjectHeader(obj, offset) {
  const headerSize = getHeaderSize(obj);
  const fragmentSize = getFragmentSize(obj);
  return {
    offset,
    key: obj.key,
    type: obj.type,
    fragmentType: obj.fragmentType,
    headerSize,
    fragmentSize,
    alignedSize: headerSize + getAlignedSize(fragmentSize)
  };
}

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/page.js
function pageSizeToBits(pageSize) {
  return Math.ceil(Math.log2(pageSize) - Math.log2(NVM3_MIN_PAGE_SIZE));
}
function pageSizeFromBits(bits) {
  return NVM3_MIN_PAGE_SIZE * Math.pow(2, bits);
}
function serializePageHeader(header) {
  const ret = new Bytes(NVM3_PAGE_HEADER_SIZE);
  ret.writeUInt16LE(header.version, 0);
  ret.writeUInt16LE(NVM3_PAGE_MAGIC, 2);
  let eraseCount = header.eraseCount & NVM3_PAGE_COUNTER_MASK;
  const eraseCountCode = computeBergerCode(eraseCount, NVM3_PAGE_COUNTER_SIZE);
  eraseCount |= eraseCountCode << NVM3_PAGE_COUNTER_SIZE;
  ret.writeInt32LE(eraseCount, 4);
  let eraseCountInv = ~header.eraseCount & NVM3_PAGE_COUNTER_MASK;
  const eraseCountInvCode = computeBergerCode(eraseCountInv, NVM3_PAGE_COUNTER_SIZE);
  eraseCountInv |= eraseCountInvCode << NVM3_PAGE_COUNTER_SIZE;
  ret.writeInt32LE(eraseCountInv, 8);
  ret.writeUInt32LE(header.status, 12);
  const devInfo = header.deviceFamily & 2047 | (header.writeSize & 1) << 11 | (header.memoryMapped ? 1 : 0) << 12 | pageSizeToBits(header.pageSize) << 13;
  ret.writeUInt16LE(devInfo, 16);
  const formatInfo = header.encrypted ? 65534 : 65535;
  ret.writeUInt16LE(formatInfo, 18);
  return ret;
}

// node_modules/@zwave-js/nvmedit/build/esm/lib/NVM3.js
var NVM3 = class {
  constructor(io) {
    this._io = io;
  }
  _io;
  _access = NVMAccess.None;
  _info;
  get info() {
    return this._info;
  }
  async ensureReadable() {
    if (this._access === NVMAccess.Read || this._access === NVMAccess.ReadWrite) {
      return;
    }
    if (this._access === NVMAccess.Write) {
      await this._io.close();
    }
    this._access = await this._io.open(NVMAccess.Read);
  }
  async ensureWritable() {
    if (this._access === NVMAccess.Write || this._access === NVMAccess.ReadWrite) {
      return;
    }
    if (this._access === NVMAccess.Read) {
      await this._io.close();
    }
    this._access = await this._io.open(NVMAccess.Write);
  }
  async init() {
    await this.ensureReadable();
    let pageOffset = 0;
    const pages = [];
    let isSharedFileSystem = false;
    while (pageOffset < this._io.size) {
      const header = await readPageHeader(this._io, pageOffset);
      pages.push({
        ...header,
        objects: []
      });
      pageOffset += header.pageSize;
    }
    for (const page of pages) {
      let objectOffset = page.offset + NVM3_PAGE_HEADER_SIZE;
      const nextPageOffset = page.offset + page.pageSize;
      while (objectOffset < nextPageOffset) {
        const objectHeader = await readObjectHeader(this._io, objectOffset);
        if (objectHeader) {
          page.objects.push(objectHeader);
          objectOffset += objectHeader.alignedSize;
          if (objectHeader.key === ApplicationVersionFile800ID) {
            isSharedFileSystem = true;
          }
        } else {
          break;
        }
      }
    }
    let applicationPages;
    let protocolPages;
    if (isSharedFileSystem) {
      applicationPages = pages;
      protocolPages = [];
    } else {
      applicationPages = pages.filter((p) => p.offset < ZWAVE_APPLICATION_NVM_SIZE);
      protocolPages = pages.filter((p) => p.offset >= ZWAVE_APPLICATION_NVM_SIZE);
    }
    const pageInfoToSectionInfo = (pages2) => {
      const maxEraseCount = Math.max(...pages2.map((p) => p.eraseCount));
      let currentPageIndex = pages2.findLastIndex((p) => p.eraseCount === maxEraseCount && p.objects.length > 0);
      if (currentPageIndex === -1) {
        currentPageIndex = pages2.findLastIndex((p) => p.objects.length > 0);
      }
      if (currentPageIndex === -1)
        currentPageIndex = 0;
      const currentPage = pages2[currentPageIndex];
      let offset = NVM3_PAGE_HEADER_SIZE;
      for (const object of currentPage.objects) {
        offset += object.alignedSize;
      }
      const objectLocations = /* @__PURE__ */ new Map();
      for (let i = 0; i < pages2.length; i++) {
        const page = pages2[i];
        for (const object of page.objects) {
          const location = objectLocations.get(object.key);
          if (location == void 0) {
            objectLocations.set(object.key, i);
          } else if ((object.fragmentType === FragmentType.None || object.fragmentType === FragmentType.First) && page.eraseCount >= pages2[location].eraseCount) {
            objectLocations.set(object.key, i);
          }
        }
      }
      return {
        pages: pages2,
        offsetInPage: offset,
        currentPage: currentPageIndex,
        objectLocations
      };
    };
    if (isSharedFileSystem) {
      this._info = {
        isSharedFileSystem: true,
        sections: {
          all: pageInfoToSectionInfo(applicationPages)
        }
      };
    } else {
      this._info = {
        isSharedFileSystem: false,
        sections: {
          application: pageInfoToSectionInfo(applicationPages),
          protocol: pageInfoToSectionInfo(protocolPages)
        }
      };
    }
    return this._info;
  }
  getNVMSectionForFile(fileId) {
    return this._info.isSharedFileSystem ? this._info.sections.all : this._info.sections[getNVMSectionByFileID(fileId)];
  }
  async has(fileId) {
    this._info ??= await this.init();
    const section = this.getNVMSectionForFile(fileId);
    return section.objectLocations.has(fileId);
  }
  readObjectData(object) {
    return nvmReadBuffer(this._io, object.offset + object.headerSize, object.fragmentSize);
  }
  async get(fileId) {
    this._info ??= await this.init();
    const section = this.getNVMSectionForFile(fileId);
    const pages = section.pages;
    let parts;
    let complete = false;
    let objType;
    const resetFragments = () => {
      parts = void 0;
      complete = false;
    };
    pages: for (let offset = 0; offset < pages.length; offset++) {
      const index = (section.currentPage - offset + pages.length) % pages.length;
      const page = pages[index];
      objects: for (let j = page.objects.length - 1; j >= 0; j--) {
        const object = page.objects[j];
        const readObject = () => this.readObjectData(object);
        if (object.key !== fileId) {
          resetFragments();
          continue objects;
        }
        if (object.type === ObjectType.Deleted) {
          return;
        } else if (object.fragmentType === FragmentType.None) {
          parts = [await readObject()];
          objType = object.type;
          complete = true;
          break pages;
        } else if (object.fragmentType === FragmentType.Last) {
          parts = [await readObject()];
          objType = object.type;
          complete = false;
        } else if (object.fragmentType === FragmentType.Next) {
          if (parts?.length && objType === object.type) {
            parts.unshift(await readObject());
          } else {
            resetFragments();
          }
        } else if (object.fragmentType === FragmentType.First) {
          if (parts?.length && objType === object.type) {
            parts.unshift(await readObject());
            complete = true;
            break pages;
          } else {
            resetFragments();
          }
        }
      }
    }
    if (!parts?.length || !complete || objType == void 0)
      return;
    return Bytes.concat(parts);
  }
  async writeObjects(objects) {
    const section = this.getNVMSectionForFile(objects[0].key);
    let page = section.pages[section.currentPage];
    let remainingSpace = page.pageSize - NVM3_PAGE_HEADER_SIZE - section.offsetInPage;
    const nextPage = async () => {
      section.currentPage = (section.currentPage + 1) % section.pages.length;
      page = section.pages[section.currentPage];
      const toPreserve = [...section.objectLocations].filter(([, pageIndex]) => pageIndex === section.currentPage).map(([fileID]) => page.objects.findLast((h) => h.key === fileID)).filter((h) => h != void 0).filter((h) => h.type !== ObjectType.Deleted);
      for (const header of toPreserve) {
        const data = await this.get(header.key);
        console.error(`Need to preserve object ${num2hex(header.key)}
  page index: ${section.currentPage}
  object type: ${getEnumMemberName(ObjectType, header.type)}
  data:        ${data != void 0 ? `${data.length} bytes` : "(no data)"}`);
        objects.push({
          key: header.key,
          type: header.type,
          fragmentType: FragmentType.None,
          data
        });
      }
      if (page.objects.length > 0) {
        page.eraseCount++;
        page.objects = [];
        const pageHeaderBuffer = serializePageHeader(page);
        const pageBuffer = new Uint8Array(page.pageSize).fill(255);
        pageBuffer.set(pageHeaderBuffer, 0);
        await nvmWriteBuffer(this._io, page.offset, pageBuffer);
      }
      section.offsetInPage = NVM3_PAGE_HEADER_SIZE;
      remainingSpace = page.pageSize - NVM3_PAGE_HEADER_SIZE;
    };
    for (const object of objects) {
      const isLargeObject = object.type === ObjectType.DataLarge || object.type === ObjectType.CounterLarge;
      let fragments;
      if (isLargeObject) {
        if (remainingSpace <= NVM3_OBJ_HEADER_SIZE_LARGE) {
          await nextPage();
        }
        fragments = fragmentLargeObject(object, remainingSpace, page.pageSize - NVM3_PAGE_HEADER_SIZE);
      } else {
        const requiredSpace = getRequiredSpace(object);
        if (requiredSpace > remainingSpace) {
          await nextPage();
        }
        fragments = [object];
      }
      for (let i = 0; i < fragments.length; i++) {
        if (i > 0)
          await nextPage();
        const fragment = fragments[i];
        const objBuffer = serializeObject(fragment);
        const objOffset = page.offset + section.offsetInPage;
        await this._io.write(objOffset, objBuffer);
        const requiredSpace = getRequiredSpace(fragment);
        section.offsetInPage += requiredSpace;
        remainingSpace -= requiredSpace;
        page.objects.push(getObjectHeader(object, objOffset));
        if (object.type === ObjectType.Deleted) {
          section.objectLocations.delete(object.key);
        } else if (fragment.fragmentType === FragmentType.None || fragment.fragmentType === FragmentType.First) {
          section.objectLocations.set(fragment.key, section.currentPage);
        }
      }
    }
  }
  async set(property, value) {
    if (!this._info)
      await this.init();
    await this.ensureWritable();
    await this.writeObjects([{
      key: property,
      type: value.length <= NVM3_MAX_OBJ_SIZE_SMALL ? ObjectType.DataSmall : ObjectType.DataLarge,
      // writeObject deals with fragmentation
      fragmentType: FragmentType.None,
      data: value
    }]);
  }
  /** Writes multiple values to the NVM at once. `null` / `undefined` cause the value to be deleted */
  async setMany(values) {
    if (!this._info)
      await this.init();
    await this.ensureWritable();
    const objectsBySection = /* @__PURE__ */ new Map();
    for (const [key, value] of values) {
      const sectionOffset = this.getNVMSectionForFile(key).pages[0].offset;
      if (!objectsBySection.has(sectionOffset)) {
        objectsBySection.set(sectionOffset, []);
      }
      objectsBySection.get(sectionOffset).push([key, value]);
    }
    for (const objectGroups of objectsBySection.values()) {
      await this.writeObjects(objectGroups.map(([key, value]) => value ? {
        key,
        type: value.length <= NVM3_MAX_OBJ_SIZE_SMALL ? ObjectType.DataSmall : ObjectType.DataLarge,
        // writeObject deals with fragmentation
        fragmentType: FragmentType.None,
        data: value
      } : {
        key,
        type: ObjectType.Deleted,
        fragmentType: FragmentType.None
      }));
    }
  }
  async delete(property) {
    if (!this._info)
      await this.init();
    await this.ensureWritable();
    await this.writeObjects([{
      key: property,
      type: ObjectType.Deleted,
      fragmentType: FragmentType.None
    }]);
  }
  async erase(options) {
    const { deviceFamily = 2047, writeSize = PageWriteSize.WRITE_SIZE_16, memoryMapped = true, sharedFileSystem = false } = options ?? {};
    const maxPageSize = sharedFileSystem ? FLASH_MAX_PAGE_SIZE_800 : FLASH_MAX_PAGE_SIZE_700;
    const pageSize = Math.min(options?.pageSize ?? maxPageSize, maxPageSize);
    if (this._io.size % pageSize !== 0) {
      throw new ZWaveError(`Invalid page size. NVM size ${this._io.size} must be a multiple of the page size ${pageSize}.`, ZWaveErrorCodes.Argument_Invalid);
    } else if (!sharedFileSystem && ZWAVE_APPLICATION_NVM_SIZE % pageSize !== 0) {
      throw new ZWaveError(`Invalid page size. The application NVM size ${ZWAVE_APPLICATION_NVM_SIZE} must be a multiple of the page size ${pageSize}.`, ZWaveErrorCodes.Argument_Invalid);
    } else if (!sharedFileSystem && (this._io.size - ZWAVE_APPLICATION_NVM_SIZE) % pageSize !== 0) {
      throw new ZWaveError(`Invalid page size. The protocol NVM size ${this._io.size - ZWAVE_APPLICATION_NVM_SIZE} must be a multiple of the page size ${pageSize}.`, ZWaveErrorCodes.Argument_Invalid);
    }
    await this.ensureWritable();
    const applicationPages = [];
    const protocolPages = [];
    const numPages = this._io.size / pageSize;
    for (let i = 0; i < numPages; i++) {
      const offset = i * pageSize;
      const pageBuffer = new Uint8Array(pageSize).fill(255);
      const pageHeader = {
        offset,
        version: 1,
        eraseCount: 0,
        encrypted: false,
        deviceFamily,
        memoryMapped,
        pageSize,
        status: PageStatus.OK,
        writeSize
      };
      pageBuffer.set(serializePageHeader(pageHeader), 0);
      await nvmWriteBuffer(this._io, offset, pageBuffer);
      if (sharedFileSystem || offset < ZWAVE_APPLICATION_NVM_SIZE) {
        applicationPages.push({ ...pageHeader, objects: [] });
      } else {
        protocolPages.push({ ...pageHeader, objects: [] });
      }
    }
    this._info = sharedFileSystem ? {
      isSharedFileSystem: true,
      sections: {
        all: {
          currentPage: 0,
          objectLocations: /* @__PURE__ */ new Map(),
          offsetInPage: NVM3_PAGE_HEADER_SIZE,
          pages: applicationPages
        }
      }
    } : {
      isSharedFileSystem: false,
      sections: {
        application: {
          currentPage: 0,
          objectLocations: /* @__PURE__ */ new Map(),
          offsetInPage: NVM3_PAGE_HEADER_SIZE,
          pages: applicationPages
        },
        protocol: {
          currentPage: 0,
          objectLocations: /* @__PURE__ */ new Map(),
          offsetInPage: NVM3_PAGE_HEADER_SIZE,
          pages: protocolPages
        }
      }
    };
  }
};
async function readPageHeader(io, offset) {
  if (offset > io.size - NVM3_PAGE_HEADER_SIZE) {
    throw new ZWaveError("Incomplete page in buffer!", ZWaveErrorCodes.NVM_InvalidFormat);
  }
  const buffer = Bytes.view((await io.read(offset, NVM3_PAGE_HEADER_SIZE)).buffer);
  const { version, eraseCount } = tryGetVersionAndEraseCount(buffer);
  const status = buffer.readUInt32LE(12);
  const devInfo = buffer.readUInt16LE(16);
  const deviceFamily = devInfo & 2047;
  const writeSize = devInfo >> 11 & 1;
  const memoryMapped = !!(devInfo >> 12 & 1);
  let pageSize = pageSizeFromBits(devInfo >> 13 & 7);
  if (pageSize > 65535) {
    for (let exponent = 0; exponent < 7; exponent++) {
      const testPageSize = pageSizeFromBits(exponent);
      const nextOffset = offset + testPageSize;
      if (
        // exactly end of NVM OR
        io.size === nextOffset || await isValidPageHeaderAtOffset(io, nextOffset)
      ) {
        pageSize = testPageSize;
        break;
      }
    }
  }
  if (pageSize > 65535) {
    throw new ZWaveError("Could not determine page size!", ZWaveErrorCodes.NVM_InvalidFormat);
  }
  if (io.size < offset + pageSize) {
    throw new ZWaveError(`NVM contains incomplete page at offset ${num2hex(offset)}!`, ZWaveErrorCodes.NVM_InvalidFormat);
  }
  const formatInfo = buffer.readUInt16LE(18);
  const encrypted = !(formatInfo & 1);
  return {
    offset,
    version,
    eraseCount,
    status,
    encrypted,
    pageSize,
    writeSize,
    memoryMapped,
    deviceFamily
  };
}
function tryGetVersionAndEraseCount(header) {
  const buffer = Bytes.view(header);
  const version = buffer.readUInt16LE(0);
  const magic = buffer.readUInt16LE(2);
  if (magic !== NVM3_PAGE_MAGIC) {
    throw new ZWaveError("Not a valid NVM3 page!", ZWaveErrorCodes.NVM_InvalidFormat);
  }
  if (version !== 1) {
    throw new ZWaveError(`Unsupported NVM3 page version: ${version}`, ZWaveErrorCodes.NVM_NotSupported);
  }
  let eraseCount = buffer.readUInt32LE(4);
  const eraseCountCode = eraseCount >>> NVM3_PAGE_COUNTER_SIZE;
  eraseCount &= NVM3_PAGE_COUNTER_MASK;
  validateBergerCode(eraseCount, eraseCountCode, NVM3_PAGE_COUNTER_SIZE);
  let eraseCountInv = buffer.readUInt32LE(8);
  const eraseCountInvCode = eraseCountInv >>> NVM3_PAGE_COUNTER_SIZE;
  eraseCountInv &= NVM3_PAGE_COUNTER_MASK;
  validateBergerCode(eraseCountInv, eraseCountInvCode, NVM3_PAGE_COUNTER_SIZE);
  if (eraseCount !== (~eraseCountInv & NVM3_PAGE_COUNTER_MASK)) {
    throw new ZWaveError("Invalid erase count!", ZWaveErrorCodes.NVM_InvalidFormat);
  }
  return { version, eraseCount };
}
async function isValidPageHeaderAtOffset(io, offset) {
  if (offset > io.size - NVM3_PAGE_HEADER_SIZE) {
    return false;
  }
  const { buffer } = await io.read(offset, NVM3_PAGE_HEADER_SIZE);
  try {
    tryGetVersionAndEraseCount(buffer);
    return true;
  } catch {
    return false;
  }
}
async function readObjectHeader(io, offset) {
  let headerSize = 4;
  const hdr1 = await nvmReadUInt32LE(io, offset);
  if (hdr1 === 4294967295)
    return;
  const key = hdr1 >> NVM3_OBJ_KEY_SHIFT & NVM3_OBJ_KEY_MASK;
  let objType = hdr1 & NVM3_OBJ_TYPE_MASK;
  let fragmentSize = 0;
  let hdr2;
  const isLarge = objType === ObjectType.DataLarge || objType === ObjectType.CounterLarge;
  if (isLarge) {
    hdr2 = await nvmReadUInt32LE(io, offset + 4);
    headerSize += 4;
    fragmentSize = hdr2 & NVM3_OBJ_LARGE_LEN_MASK;
  } else if (objType > ObjectType.DataSmall) {
    fragmentSize = objType - ObjectType.DataSmall;
    objType = ObjectType.DataSmall;
  } else if (objType === ObjectType.CounterSmall) {
    fragmentSize = NVM3_COUNTER_SIZE;
  }
  const fragmentType = isLarge ? hdr1 >>> NVM3_OBJ_FRAGTYPE_SHIFT & NVM3_OBJ_FRAGTYPE_MASK : FragmentType.None;
  if (isLarge) {
    validateBergerCodeMulti([hdr1, hdr2], 32 + NVM3_CODE_LARGE_SHIFT);
  } else {
    validateBergerCodeMulti([hdr1], NVM3_CODE_SMALL_SHIFT);
  }
  if (io.size < offset + headerSize + fragmentSize) {
    throw new ZWaveError(`NVM contains incomplete object at offset ${num2hex(offset)}!`, ZWaveErrorCodes.NVM_InvalidFormat);
  }
  const alignedFragmentSize = getAlignedSize(fragmentSize);
  const alignedSize = headerSize + alignedFragmentSize;
  return {
    key,
    offset,
    type: objType,
    fragmentType,
    headerSize,
    fragmentSize,
    alignedSize
  };
}

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm500/EntryParsers.js
function parseNVMDescriptor(data, offset = 0) {
  const buffer = Bytes.view(data);
  return {
    manufacturerID: buffer.readUInt16BE(offset),
    firmwareID: buffer.readUInt16BE(offset + 2),
    productType: buffer.readUInt16BE(offset + 4),
    productID: buffer.readUInt16BE(offset + 6),
    firmwareVersion: `${buffer[offset + 8]}.${buffer[offset + 9]}`,
    // Z-Wave protocol versions are formatted as "6.07" and similar
    protocolVersion: `${buffer[offset + 10]}.${buffer[offset + 11].toString().padStart(2, "0")}`
  };
}
function encodeNVMDescriptor(descriptor) {
  const ret = new Bytes(12);
  ret.writeUInt16BE(descriptor.manufacturerID, 0);
  ret.writeUInt16BE(descriptor.firmwareID, 2);
  ret.writeUInt16BE(descriptor.productType, 4);
  ret.writeUInt16BE(descriptor.productID, 6);
  const fwVersionParts = descriptor.firmwareVersion.split(".").map((i) => parseInt(i));
  ret[8] = fwVersionParts[0];
  ret[9] = fwVersionParts[1];
  const protocolVersionParts = descriptor.protocolVersion.split(".").map((i) => parseInt(i));
  ret[10] = protocolVersionParts[0];
  ret[11] = protocolVersionParts[1];
  return ret;
}
function parseNVMModuleDescriptor(data, offset = 0) {
  const buffer = Bytes.view(data);
  return {
    size: buffer.readUInt16BE(offset),
    type: buffer[offset + 2],
    version: `${buffer[offset + 3]}.${buffer[offset + 4]}`
  };
}
function encodeNVMModuleDescriptor(descriptior) {
  const ret = new Bytes(5);
  ret.writeUInt16BE(descriptior.size, 0);
  ret[2] = descriptior.type;
  const versionParts = descriptior.version.split(".").map((i) => parseInt(i));
  ret[3] = versionParts[0];
  ret[4] = versionParts[1];
  return ret;
}
function parseNVM500NodeInfo(buffer, offset) {
  const { hasSpecificDeviceClass, ...protocolInfo } = parseNodeProtocolInfo(buffer, offset);
  const genericDeviceClass = buffer[offset + 3];
  const specificDeviceClass = hasSpecificDeviceClass ? buffer[offset + 4] : null;
  return {
    ...protocolInfo,
    genericDeviceClass,
    specificDeviceClass
  };
}
function encodeNVM500NodeInfo(nodeInfo) {
  return Bytes.concat([
    encodeNodeProtocolInfo({
      ...nodeInfo,
      hasSpecificDeviceClass: !!nodeInfo.specificDeviceClass
    }),
    Bytes.from([
      nodeInfo.genericDeviceClass,
      nodeInfo.specificDeviceClass ?? 0
    ])
  ]);
}

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm500/shared.js
var NVMEntryType;
(function(NVMEntryType2) {
  NVMEntryType2[NVMEntryType2["NVMModuleSize"] = 0] = "NVMModuleSize";
  NVMEntryType2[NVMEntryType2["Byte"] = 1] = "Byte";
  NVMEntryType2[NVMEntryType2["Word"] = 2] = "Word";
  NVMEntryType2[NVMEntryType2["DWord"] = 3] = "DWord";
  NVMEntryType2[NVMEntryType2["Buffer"] = 4] = "Buffer";
  NVMEntryType2[NVMEntryType2["NodeInfo"] = 5] = "NodeInfo";
  NVMEntryType2[NVMEntryType2["NodeMask"] = 6] = "NodeMask";
  NVMEntryType2[NVMEntryType2["SUCUpdateEntry"] = 7] = "SUCUpdateEntry";
  NVMEntryType2[NVMEntryType2["Route"] = 8] = "Route";
  NVMEntryType2[NVMEntryType2["NVMModuleDescriptor"] = 9] = "NVMModuleDescriptor";
  NVMEntryType2[NVMEntryType2["NVMDescriptor"] = 10] = "NVMDescriptor";
})(NVMEntryType || (NVMEntryType = {}));
var NVMEntrySizes = {
  [NVMEntryType.NVMModuleSize]: 2,
  // Marks the start of an NVM module
  [NVMEntryType.Byte]: 1,
  [NVMEntryType.Word]: 2,
  [NVMEntryType.DWord]: 4,
  [NVMEntryType.Buffer]: 1,
  // The size must be specified
  [NVMEntryType.NodeInfo]: 5,
  // 3 bytes NodeProtocolInfo + generic + specific device class
  [NVMEntryType.NodeMask]: NUM_NODEMASK_BYTES,
  // Nodes bitmask
  [NVMEntryType.SUCUpdateEntry]: SUC_UPDATE_ENTRY_SIZE,
  [NVMEntryType.Route]: 5,
  // a Route
  [NVMEntryType.NVMModuleDescriptor]: 5,
  // 2 bytes module size, 1 byte module type, 2 bytes module version
  [NVMEntryType.NVMDescriptor]: 12
};
var NVMModuleType;
(function(NVMModuleType2) {
  NVMModuleType2[NVMModuleType2["UNDEFINED"] = 0] = "UNDEFINED";
  NVMModuleType2[NVMModuleType2["ZW_PHY_LIBRARY"] = 1] = "ZW_PHY_LIBRARY";
  NVMModuleType2[NVMModuleType2["ZW_LIBRARY"] = 2] = "ZW_LIBRARY";
  NVMModuleType2[NVMModuleType2["ZW_FRAMEWORK"] = 3] = "ZW_FRAMEWORK";
  NVMModuleType2[NVMModuleType2["APPLICATION"] = 4] = "APPLICATION";
  NVMModuleType2[NVMModuleType2["HOST_APPLICATION"] = 5] = "HOST_APPLICATION";
  NVMModuleType2[NVMModuleType2["SECURITY_2"] = 6] = "SECURITY_2";
  NVMModuleType2[NVMModuleType2["NVM_DESCRIPTOR"] = 255] = "NVM_DESCRIPTOR";
})(NVMModuleType || (NVMModuleType = {}));
var SUC_CONTROLLER_LIST_SIZE = 232;
var NVM_SERIALAPI_HOST_SIZE = 2048;
var POWERLEVEL_CHANNELS = 3;
var APPL_NODEPARM_MAX = 35;
var RTC_TIMER_SIZE = 16;
var TOTAL_RTC_TIMER_MAX = 8 + 2;
var CONFIGURATION_VALID_0 = 84;
var CONFIGURATION_VALID_1 = 165;
var ROUTECACHE_VALID = 74;
var MAGIC_VALUE = 66;
function resolveLayout(layout) {
  const ret = /* @__PURE__ */ new Map();
  let offset = 0;
  for (const entry of layout) {
    const size = entry.size ?? NVMEntrySizes[entry.type];
    const resolvedEntry = {
      ...entry,
      size,
      offset: entry.offset ?? offset
    };
    ret.set(resolvedEntry.name, resolvedEntry);
    offset += size * entry.count;
  }
  const endMarker = ret.get("nvmModuleSizeEndMarker");
  const nvmSize = endMarker.offset + endMarker.size;
  return { layout: ret, nvmSize };
}

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm500/impls/Bridge_6_6x.js
var NVM_Layout_Bridge_6_6x = [
  { name: "nvmTotalEnd", type: NVMEntryType.Word, count: 1 },
  { name: "nvmZWlibrarySize", type: NVMEntryType.NVMModuleSize, count: 1 },
  { name: "NVM_INTERNAL_RESERVED_1_far", type: NVMEntryType.Byte, count: 4 },
  {
    name: "EX_NVM_HOME_ID_far",
    type: NVMEntryType.DWord,
    count: 1
  },
  { name: "NVM_INTERNAL_RESERVED_2_far", type: NVMEntryType.Byte, count: 4 },
  { name: "NVM_HOMEID_far", type: NVMEntryType.DWord, count: 1 },
  { name: "NVM_NODEID_far", type: NVMEntryType.Byte, count: 1 },
  { name: "NVM_CONFIGURATION_VALID_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "NVM_CONFIGURATION_REALLYVALID_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  { name: "NVM_INTERNAL_RESERVED_3_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "NVM_PREFERRED_REPEATERS_far",
    type: NVMEntryType.NodeMask,
    size: NUM_NODEMASK_BYTES + 3,
    count: 1
  },
  {
    name: "NVM_PENDING_DISCOVERY_far",
    type: NVMEntryType.NodeMask,
    size: NUM_NODEMASK_BYTES + 3,
    count: 1
  },
  {
    name: "NVM_RTC_TIMERS_far",
    type: NVMEntryType.Byte,
    count: TOTAL_RTC_TIMER_MAX * RTC_TIMER_SIZE
  },
  {
    name: "EX_NVM_NODE_TABLE_START_far",
    type: NVMEntryType.NodeInfo,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_ROUTING_TABLE_START_far",
    type: NVMEntryType.NodeMask,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_LAST_USED_NODE_ID_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_STATIC_CONTROLLER_NODE_ID_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_PENDING_UPDATE_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  { name: "EX_NVM_SUC_ACTIVE_START_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_SUC_NODE_LIST_START_far",
    type: NVMEntryType.SUCUpdateEntry,
    count: SUC_MAX_UPDATES
  },
  {
    name: "EX_NVM_SUC_CONTROLLER_LIST_START_far",
    type: NVMEntryType.Byte,
    count: SUC_CONTROLLER_LIST_SIZE
  },
  {
    name: "EX_NVM_SUC_LAST_INDEX_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_SUC_ROUTING_SLAVE_LIST_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_ZENSOR_TABLE_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_BRIDGE_NODEPOOL_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_CONTROLLER_CONFIGURATION_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  { name: "EX_NVM_MAX_NODE_ID_far", type: NVMEntryType.Byte, count: 1 },
  { name: "EX_NVM_RESERVED_ID_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_ROUTECACHE_START_far",
    type: NVMEntryType.Route,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_ROUTECACHE_NLWR_SR_START_far",
    type: NVMEntryType.Route,
    count: MAX_NODES
  },
  { name: "EX_NVM_ROUTECACHE_MAGIC_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_ROUTECACHE_APP_LOCK_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "nvmZWlibraryDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  {
    name: "nvmApplicationSize",
    type: NVMEntryType.NVMModuleSize,
    // The Bridge API saves an additional node mask for the virtual nodes in the
    // previous module, so we can use this offset to distinguish between the two.
    offset: 12254,
    count: 1
  },
  { name: "EEOFFSET_MAGIC_far", type: NVMEntryType.Byte, count: 1 },
  { name: "EEOFFSET_CMDCLASS_LEN_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EEOFFSET_CMDCLASS_far",
    type: NVMEntryType.Byte,
    count: APPL_NODEPARM_MAX
  },
  {
    name: "EEOFFSET_WATCHDOG_STARTED_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "nvmApplicationDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  {
    name: "nvmHostApplicationSize",
    type: NVMEntryType.NVMModuleSize,
    count: 1
  },
  {
    name: "EEOFFSET_HOST_OFFSET_START_far",
    type: NVMEntryType.Buffer,
    size: NVM_SERIALAPI_HOST_SIZE,
    count: 1
  },
  {
    name: "nvmHostApplicationDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  { name: "nvmDescriptorSize", type: NVMEntryType.NVMModuleSize, count: 1 },
  { name: "nvmDescriptor", type: NVMEntryType.NVMDescriptor, count: 1 },
  {
    name: "nvmDescriptorDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  { name: "nvmModuleSizeEndMarker", type: NVMEntryType.Word, count: 1 }
];
var Bridge_6_6x = {
  name: "Bridge 6.6x",
  library: "bridge",
  protocolVersions: ["4.33", "4.62"],
  layout: NVM_Layout_Bridge_6_6x
};

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm500/impls/Bridge_6_7x.js
var NVM_Layout_Bridge_6_7x = [
  { name: "nvmTotalEnd", type: NVMEntryType.Word, count: 1 },
  { name: "nvmZWlibrarySize", type: NVMEntryType.NVMModuleSize, count: 1 },
  { name: "NVM_INTERNAL_RESERVED_1_far", type: NVMEntryType.Byte, count: 4 },
  {
    name: "EX_NVM_HOME_ID_far",
    type: NVMEntryType.DWord,
    count: 1
  },
  { name: "NVM_INTERNAL_RESERVED_2_far", type: NVMEntryType.Byte, count: 4 },
  { name: "NVM_HOMEID_far", type: NVMEntryType.DWord, count: 1 },
  { name: "NVM_NODEID_far", type: NVMEntryType.Byte, count: 1 },
  { name: "NVM_CONFIGURATION_VALID_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "NVM_CONFIGURATION_REALLYVALID_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  { name: "NVM_INTERNAL_RESERVED_3_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "NVM_PREFERRED_REPEATERS_far",
    type: NVMEntryType.NodeMask,
    size: NUM_NODEMASK_BYTES + 3,
    count: 1
  },
  {
    name: "NVM_PENDING_DISCOVERY_far",
    type: NVMEntryType.NodeMask,
    size: NUM_NODEMASK_BYTES + 3,
    count: 1
  },
  {
    name: "NVM_RTC_TIMERS_far",
    type: NVMEntryType.Byte,
    count: TOTAL_RTC_TIMER_MAX * RTC_TIMER_SIZE
  },
  {
    name: "EX_NVM_NODE_TABLE_START_far",
    type: NVMEntryType.NodeInfo,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_ROUTING_TABLE_START_far",
    type: NVMEntryType.NodeMask,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_LAST_USED_NODE_ID_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_STATIC_CONTROLLER_NODE_ID_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_PENDING_UPDATE_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  { name: "EX_NVM_SUC_ACTIVE_START_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_SUC_NODE_LIST_START_far",
    type: NVMEntryType.SUCUpdateEntry,
    count: SUC_MAX_UPDATES
  },
  {
    name: "EX_NVM_SUC_CONTROLLER_LIST_START_far",
    type: NVMEntryType.Byte,
    count: SUC_CONTROLLER_LIST_SIZE
  },
  {
    name: "EX_NVM_SUC_LAST_INDEX_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_SUC_ROUTING_SLAVE_LIST_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_ZENSOR_TABLE_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_BRIDGE_NODEPOOL_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_CONTROLLER_CONFIGURATION_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  { name: "EX_NVM_MAX_NODE_ID_far", type: NVMEntryType.Byte, count: 1 },
  { name: "EX_NVM_RESERVED_ID_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_ROUTECACHE_START_far",
    type: NVMEntryType.Route,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_ROUTECACHE_NLWR_SR_START_far",
    type: NVMEntryType.Route,
    count: MAX_NODES
  },
  { name: "EX_NVM_ROUTECACHE_MAGIC_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_ROUTECACHE_APP_LOCK_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "NVM_SECURITY0_KEY_far",
    type: NVMEntryType.Buffer,
    size: 16,
    count: 1
  },
  {
    name: "nvmZWlibraryDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  {
    name: "nvmApplicationSize",
    type: NVMEntryType.NVMModuleSize,
    // The Bridge API saves an additional node mask for the virtual nodes in the
    // previous module, so we can use this offset to distinguish between the two.
    offset: 12270,
    count: 1
  },
  { name: "EEOFFSET_MAGIC_far", type: NVMEntryType.Byte, count: 1 },
  { name: "EEOFFSET_CMDCLASS_LEN_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EEOFFSET_CMDCLASS_far",
    type: NVMEntryType.Byte,
    count: APPL_NODEPARM_MAX
  },
  {
    name: "EEOFFSET_WATCHDOG_STARTED_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EEOFFSET_POWERLEVEL_NORMAL_far",
    type: NVMEntryType.Byte,
    count: POWERLEVEL_CHANNELS
  },
  {
    name: "EEOFFSET_POWERLEVEL_LOW_far",
    type: NVMEntryType.Byte,
    count: POWERLEVEL_CHANNELS
  },
  {
    name: "nvmApplicationDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  {
    name: "nvmHostApplicationSize",
    type: NVMEntryType.NVMModuleSize,
    count: 1
  },
  {
    name: "EEOFFSET_HOST_OFFSET_START_far",
    type: NVMEntryType.Buffer,
    size: NVM_SERIALAPI_HOST_SIZE,
    count: 1
  },
  {
    name: "nvmHostApplicationDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  { name: "nvmDescriptorSize", type: NVMEntryType.NVMModuleSize, count: 1 },
  { name: "nvmDescriptor", type: NVMEntryType.NVMDescriptor, count: 1 },
  {
    name: "nvmDescriptorDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  { name: "nvmModuleSizeEndMarker", type: NVMEntryType.Word, count: 1 }
];
var Bridge_6_7x = {
  name: "Bridge 6.7x",
  library: "bridge",
  protocolVersions: ["4.60", "4.61", "5.02", "5.03"],
  layout: NVM_Layout_Bridge_6_7x
};

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm500/impls/Bridge_6_8x.js
var NVM_Layout_Bridge_6_8x = [
  { name: "nvmTotalEnd", type: NVMEntryType.Word, count: 1 },
  { name: "nvmZWlibrarySize", type: NVMEntryType.NVMModuleSize, count: 1 },
  { name: "NVM_INTERNAL_RESERVED_1_far", type: NVMEntryType.Byte, count: 4 },
  {
    name: "EX_NVM_HOME_ID_far",
    type: NVMEntryType.DWord,
    count: 1
  },
  { name: "NVM_INTERNAL_RESERVED_2_far", type: NVMEntryType.Byte, count: 4 },
  { name: "NVM_HOMEID_far", type: NVMEntryType.DWord, count: 1 },
  { name: "NVM_NODEID_far", type: NVMEntryType.Byte, count: 1 },
  { name: "NVM_CONFIGURATION_VALID_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "NVM_CONFIGURATION_REALLYVALID_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  { name: "NVM_INTERNAL_RESERVED_3_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "NVM_PREFERRED_REPEATERS_far",
    type: NVMEntryType.NodeMask,
    size: NUM_NODEMASK_BYTES + 3,
    count: 1
  },
  {
    name: "NVM_PENDING_DISCOVERY_far",
    type: NVMEntryType.NodeMask,
    size: NUM_NODEMASK_BYTES + 3,
    count: 1
  },
  {
    name: "NVM_RTC_TIMERS_far",
    type: NVMEntryType.Byte,
    count: TOTAL_RTC_TIMER_MAX * RTC_TIMER_SIZE
  },
  {
    name: "EX_NVM_NODE_TABLE_START_far",
    type: NVMEntryType.NodeInfo,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_ROUTING_TABLE_START_far",
    type: NVMEntryType.NodeMask,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_LAST_USED_NODE_ID_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_STATIC_CONTROLLER_NODE_ID_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_PENDING_UPDATE_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  { name: "EX_NVM_SUC_ACTIVE_START_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_SUC_NODE_LIST_START_far",
    type: NVMEntryType.SUCUpdateEntry,
    count: SUC_MAX_UPDATES
  },
  {
    name: "EX_NVM_SUC_CONTROLLER_LIST_START_far",
    type: NVMEntryType.Byte,
    count: SUC_CONTROLLER_LIST_SIZE
  },
  {
    name: "EX_NVM_SUC_LAST_INDEX_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_SUC_ROUTING_SLAVE_LIST_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_ZENSOR_TABLE_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_BRIDGE_NODEPOOL_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_CONTROLLER_CONFIGURATION_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  { name: "EX_NVM_MAX_NODE_ID_far", type: NVMEntryType.Byte, count: 1 },
  { name: "EX_NVM_RESERVED_ID_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_ROUTECACHE_START_far",
    type: NVMEntryType.Route,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_ROUTECACHE_NLWR_SR_START_far",
    type: NVMEntryType.Route,
    count: MAX_NODES
  },
  { name: "EX_NVM_ROUTECACHE_MAGIC_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_ROUTECACHE_APP_LOCK_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "NVM_SECURITY0_KEY_far",
    type: NVMEntryType.Buffer,
    size: 16,
    count: 1
  },
  { name: "NVM_SYSTEM_STATE", type: NVMEntryType.Byte, count: 1 },
  {
    name: "nvmZWlibraryDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  {
    name: "nvmApplicationSize",
    type: NVMEntryType.NVMModuleSize,
    // The Bridge API saves an additional node mask for the virtual nodes in the
    // previous module, so we can use this offset to distinguish between the two.
    offset: 12271,
    count: 1
  },
  { name: "EEOFFSET_MAGIC_far", type: NVMEntryType.Byte, count: 1 },
  { name: "EEOFFSET_CMDCLASS_LEN_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EEOFFSET_CMDCLASS_far",
    type: NVMEntryType.Byte,
    count: APPL_NODEPARM_MAX
  },
  {
    name: "EEOFFSET_WATCHDOG_STARTED_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EEOFFSET_POWERLEVEL_NORMAL_far",
    type: NVMEntryType.Byte,
    count: POWERLEVEL_CHANNELS
  },
  {
    name: "EEOFFSET_POWERLEVEL_LOW_far",
    type: NVMEntryType.Byte,
    count: POWERLEVEL_CHANNELS
  },
  {
    name: "EEOFFSET_MODULE_POWER_MODE_EXTINT_ENABLE_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EEOFFSET_MODULE_POWER_MODE_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EEOFFSET_MODULE_POWER_MODE_WUT_TIMEOUT_far",
    type: NVMEntryType.DWord,
    count: 1
  },
  {
    name: "nvmApplicationDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  {
    name: "nvmHostApplicationSize",
    type: NVMEntryType.NVMModuleSize,
    count: 1
  },
  {
    name: "EEOFFSET_HOST_OFFSET_START_far",
    type: NVMEntryType.Buffer,
    size: NVM_SERIALAPI_HOST_SIZE,
    count: 1
  },
  {
    name: "nvmHostApplicationDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  { name: "nvmDescriptorSize", type: NVMEntryType.NVMModuleSize, count: 1 },
  { name: "nvmDescriptor", type: NVMEntryType.NVMDescriptor, count: 1 },
  {
    name: "nvmDescriptorDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  { name: "nvmModuleSizeEndMarker", type: NVMEntryType.Word, count: 1 }
];
var Bridge_6_8x = {
  name: "Bridge 6.8x",
  library: "bridge",
  protocolVersions: [
    "6.01",
    "6.02",
    "6.03",
    "6.04",
    "6.05",
    "6.06",
    "6.07",
    "6.08",
    "6.09",
    "6.10"
  ],
  layout: NVM_Layout_Bridge_6_8x
};

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm500/impls/Static_6_6x.js
var NVM_Layout_Static_6_6x = [
  { name: "nvmTotalEnd", type: NVMEntryType.Word, count: 1 },
  { name: "nvmZWlibrarySize", type: NVMEntryType.NVMModuleSize, count: 1 },
  { name: "NVM_INTERNAL_RESERVED_1_far", type: NVMEntryType.Byte, count: 4 },
  {
    name: "EX_NVM_HOME_ID_far",
    type: NVMEntryType.DWord,
    count: 1
  },
  { name: "NVM_INTERNAL_RESERVED_2_far", type: NVMEntryType.Byte, count: 4 },
  { name: "NVM_HOMEID_far", type: NVMEntryType.DWord, count: 1 },
  { name: "NVM_NODEID_far", type: NVMEntryType.Byte, count: 1 },
  { name: "NVM_CONFIGURATION_VALID_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "NVM_CONFIGURATION_REALLYVALID_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  { name: "NVM_INTERNAL_RESERVED_3_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "NVM_PREFERRED_REPEATERS_far",
    type: NVMEntryType.NodeMask,
    size: NUM_NODEMASK_BYTES + 3,
    count: 1
  },
  {
    name: "NVM_PENDING_DISCOVERY_far",
    type: NVMEntryType.NodeMask,
    size: NUM_NODEMASK_BYTES + 3,
    count: 1
  },
  {
    name: "NVM_RTC_TIMERS_far",
    type: NVMEntryType.Byte,
    count: TOTAL_RTC_TIMER_MAX * RTC_TIMER_SIZE
  },
  {
    name: "EX_NVM_NODE_TABLE_START_far",
    type: NVMEntryType.NodeInfo,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_ROUTING_TABLE_START_far",
    type: NVMEntryType.NodeMask,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_LAST_USED_NODE_ID_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_STATIC_CONTROLLER_NODE_ID_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_PENDING_UPDATE_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  { name: "EX_NVM_SUC_ACTIVE_START_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_SUC_NODE_LIST_START_far",
    type: NVMEntryType.SUCUpdateEntry,
    count: SUC_MAX_UPDATES
  },
  {
    name: "EX_NVM_SUC_CONTROLLER_LIST_START_far",
    type: NVMEntryType.Byte,
    count: SUC_CONTROLLER_LIST_SIZE
  },
  {
    name: "EX_NVM_SUC_LAST_INDEX_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_SUC_ROUTING_SLAVE_LIST_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_ZENSOR_TABLE_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_CONTROLLER_CONFIGURATION_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  { name: "EX_NVM_MAX_NODE_ID_far", type: NVMEntryType.Byte, count: 1 },
  { name: "EX_NVM_RESERVED_ID_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_ROUTECACHE_START_far",
    type: NVMEntryType.Route,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_ROUTECACHE_NLWR_SR_START_far",
    type: NVMEntryType.Route,
    count: MAX_NODES
  },
  { name: "EX_NVM_ROUTECACHE_MAGIC_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_ROUTECACHE_APP_LOCK_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "nvmZWlibraryDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  {
    name: "nvmApplicationSize",
    type: NVMEntryType.NVMModuleSize,
    // The Bridge API saves an additional node mask for the virtual nodes in the
    // previous module, so we can use this offset to distinguish between the two.
    offset: 12225,
    count: 1
  },
  { name: "EEOFFSET_MAGIC_far", type: NVMEntryType.Byte, count: 1 },
  { name: "EEOFFSET_CMDCLASS_LEN_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EEOFFSET_CMDCLASS_far",
    type: NVMEntryType.Byte,
    count: APPL_NODEPARM_MAX
  },
  {
    name: "EEOFFSET_WATCHDOG_STARTED_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "nvmApplicationDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  {
    name: "nvmHostApplicationSize",
    type: NVMEntryType.NVMModuleSize,
    count: 1
  },
  {
    name: "EEOFFSET_HOST_OFFSET_START_far",
    type: NVMEntryType.Buffer,
    size: NVM_SERIALAPI_HOST_SIZE,
    count: 1
  },
  {
    name: "nvmHostApplicationDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  { name: "nvmDescriptorSize", type: NVMEntryType.NVMModuleSize, count: 1 },
  { name: "nvmDescriptor", type: NVMEntryType.NVMDescriptor, count: 1 },
  {
    name: "nvmDescriptorDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  { name: "nvmModuleSizeEndMarker", type: NVMEntryType.Word, count: 1 }
];
var Static_6_6x = {
  name: "Static 6.6x",
  library: "static",
  protocolVersions: ["4.33", "4.62"],
  layout: NVM_Layout_Static_6_6x
};

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm500/impls/Static_6_7x.js
var NVM_Layout_Static_6_7x = [
  { name: "nvmTotalEnd", type: NVMEntryType.Word, count: 1 },
  { name: "nvmZWlibrarySize", type: NVMEntryType.NVMModuleSize, count: 1 },
  { name: "NVM_INTERNAL_RESERVED_1_far", type: NVMEntryType.Byte, count: 4 },
  {
    name: "EX_NVM_HOME_ID_far",
    type: NVMEntryType.DWord,
    count: 1
  },
  { name: "NVM_INTERNAL_RESERVED_2_far", type: NVMEntryType.Byte, count: 4 },
  { name: "NVM_HOMEID_far", type: NVMEntryType.DWord, count: 1 },
  { name: "NVM_NODEID_far", type: NVMEntryType.Byte, count: 1 },
  { name: "NVM_CONFIGURATION_VALID_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "NVM_CONFIGURATION_REALLYVALID_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  { name: "NVM_INTERNAL_RESERVED_3_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "NVM_PREFERRED_REPEATERS_far",
    type: NVMEntryType.NodeMask,
    size: NUM_NODEMASK_BYTES + 3,
    count: 1
  },
  {
    name: "NVM_PENDING_DISCOVERY_far",
    type: NVMEntryType.NodeMask,
    size: NUM_NODEMASK_BYTES + 3,
    count: 1
  },
  {
    name: "NVM_RTC_TIMERS_far",
    type: NVMEntryType.Byte,
    count: TOTAL_RTC_TIMER_MAX * RTC_TIMER_SIZE
  },
  {
    name: "EX_NVM_NODE_TABLE_START_far",
    type: NVMEntryType.NodeInfo,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_ROUTING_TABLE_START_far",
    type: NVMEntryType.NodeMask,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_LAST_USED_NODE_ID_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_STATIC_CONTROLLER_NODE_ID_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_PENDING_UPDATE_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  { name: "EX_NVM_SUC_ACTIVE_START_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_SUC_NODE_LIST_START_far",
    type: NVMEntryType.SUCUpdateEntry,
    count: SUC_MAX_UPDATES
  },
  {
    name: "EX_NVM_SUC_CONTROLLER_LIST_START_far",
    type: NVMEntryType.Byte,
    count: SUC_CONTROLLER_LIST_SIZE
  },
  {
    name: "EX_NVM_SUC_LAST_INDEX_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_SUC_ROUTING_SLAVE_LIST_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_ZENSOR_TABLE_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_CONTROLLER_CONFIGURATION_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  { name: "EX_NVM_MAX_NODE_ID_far", type: NVMEntryType.Byte, count: 1 },
  { name: "EX_NVM_RESERVED_ID_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_ROUTECACHE_START_far",
    type: NVMEntryType.Route,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_ROUTECACHE_NLWR_SR_START_far",
    type: NVMEntryType.Route,
    count: MAX_NODES
  },
  { name: "EX_NVM_ROUTECACHE_MAGIC_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_ROUTECACHE_APP_LOCK_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "NVM_SECURITY0_KEY_far",
    type: NVMEntryType.Buffer,
    size: 16,
    count: 1
  },
  {
    name: "nvmZWlibraryDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  {
    name: "nvmApplicationSize",
    type: NVMEntryType.NVMModuleSize,
    // The Bridge API saves an additional node mask for the virtual nodes in the
    // previous module, so we can use this offset to distinguish between the two.
    offset: 12241,
    count: 1
  },
  { name: "EEOFFSET_MAGIC_far", type: NVMEntryType.Byte, count: 1 },
  { name: "EEOFFSET_CMDCLASS_LEN_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EEOFFSET_CMDCLASS_far",
    type: NVMEntryType.Byte,
    count: APPL_NODEPARM_MAX
  },
  {
    name: "EEOFFSET_WATCHDOG_STARTED_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EEOFFSET_POWERLEVEL_NORMAL_far",
    type: NVMEntryType.Byte,
    count: POWERLEVEL_CHANNELS
  },
  {
    name: "EEOFFSET_POWERLEVEL_LOW_far",
    type: NVMEntryType.Byte,
    count: POWERLEVEL_CHANNELS
  },
  {
    name: "nvmApplicationDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  {
    name: "nvmHostApplicationSize",
    type: NVMEntryType.NVMModuleSize,
    count: 1
  },
  {
    name: "EEOFFSET_HOST_OFFSET_START_far",
    type: NVMEntryType.Buffer,
    size: NVM_SERIALAPI_HOST_SIZE,
    count: 1
  },
  {
    name: "nvmHostApplicationDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  { name: "nvmDescriptorSize", type: NVMEntryType.NVMModuleSize, count: 1 },
  { name: "nvmDescriptor", type: NVMEntryType.NVMDescriptor, count: 1 },
  {
    name: "nvmDescriptorDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  { name: "nvmModuleSizeEndMarker", type: NVMEntryType.Word, count: 1 }
];
var Static_6_7x = {
  name: "Static 6.7x",
  library: "static",
  protocolVersions: ["4.60", "4.61", "5.02", "5.03"],
  layout: NVM_Layout_Static_6_7x
};

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm500/impls/Static_6_8x.js
var NVM_Layout_Static_6_8x = [
  { name: "nvmTotalEnd", type: NVMEntryType.Word, count: 1 },
  { name: "nvmZWlibrarySize", type: NVMEntryType.NVMModuleSize, count: 1 },
  { name: "NVM_INTERNAL_RESERVED_1_far", type: NVMEntryType.Byte, count: 4 },
  {
    name: "EX_NVM_HOME_ID_far",
    type: NVMEntryType.DWord,
    count: 1
  },
  { name: "NVM_INTERNAL_RESERVED_2_far", type: NVMEntryType.Byte, count: 4 },
  { name: "NVM_HOMEID_far", type: NVMEntryType.DWord, count: 1 },
  { name: "NVM_NODEID_far", type: NVMEntryType.Byte, count: 1 },
  { name: "NVM_CONFIGURATION_VALID_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "NVM_CONFIGURATION_REALLYVALID_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  { name: "NVM_INTERNAL_RESERVED_3_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "NVM_PREFERRED_REPEATERS_far",
    type: NVMEntryType.NodeMask,
    size: NUM_NODEMASK_BYTES + 3,
    count: 1
  },
  {
    name: "NVM_PENDING_DISCOVERY_far",
    type: NVMEntryType.NodeMask,
    size: NUM_NODEMASK_BYTES + 3,
    count: 1
  },
  {
    name: "NVM_RTC_TIMERS_far",
    type: NVMEntryType.Byte,
    count: TOTAL_RTC_TIMER_MAX * RTC_TIMER_SIZE
  },
  {
    name: "EX_NVM_NODE_TABLE_START_far",
    type: NVMEntryType.NodeInfo,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_ROUTING_TABLE_START_far",
    type: NVMEntryType.NodeMask,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_LAST_USED_NODE_ID_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_STATIC_CONTROLLER_NODE_ID_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_PENDING_UPDATE_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  { name: "EX_NVM_SUC_ACTIVE_START_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_SUC_NODE_LIST_START_far",
    type: NVMEntryType.SUCUpdateEntry,
    count: SUC_MAX_UPDATES
  },
  {
    name: "EX_NVM_SUC_CONTROLLER_LIST_START_far",
    type: NVMEntryType.Byte,
    count: SUC_CONTROLLER_LIST_SIZE
  },
  {
    name: "EX_NVM_SUC_LAST_INDEX_START_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EX_NVM_SUC_ROUTING_SLAVE_LIST_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_ZENSOR_TABLE_START_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "EX_NVM_CONTROLLER_CONFIGURATION_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  { name: "EX_NVM_MAX_NODE_ID_far", type: NVMEntryType.Byte, count: 1 },
  { name: "EX_NVM_RESERVED_ID_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_ROUTECACHE_START_far",
    type: NVMEntryType.Route,
    offset: 9870,
    count: MAX_NODES
  },
  {
    name: "EX_NVM_ROUTECACHE_NLWR_SR_START_far",
    type: NVMEntryType.Route,
    count: MAX_NODES
  },
  { name: "EX_NVM_ROUTECACHE_MAGIC_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EX_NVM_ROUTECACHE_APP_LOCK_far",
    type: NVMEntryType.NodeMask,
    count: 1
  },
  {
    name: "NVM_SECURITY0_KEY_far",
    type: NVMEntryType.Buffer,
    size: 16,
    count: 1
  },
  { name: "NVM_SYSTEM_STATE", type: NVMEntryType.Byte, count: 1 },
  {
    name: "nvmZWlibraryDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  {
    name: "nvmApplicationSize",
    type: NVMEntryType.NVMModuleSize,
    // The Bridge API saves an additional node mask for the virtual nodes in the
    // previous module, so we can use this offset to distinguish between the two.
    offset: 12242,
    count: 1
  },
  { name: "EEOFFSET_MAGIC_far", type: NVMEntryType.Byte, count: 1 },
  { name: "EEOFFSET_CMDCLASS_LEN_far", type: NVMEntryType.Byte, count: 1 },
  {
    name: "EEOFFSET_CMDCLASS_far",
    type: NVMEntryType.Byte,
    count: APPL_NODEPARM_MAX
  },
  {
    name: "EEOFFSET_WATCHDOG_STARTED_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EEOFFSET_POWERLEVEL_NORMAL_far",
    type: NVMEntryType.Byte,
    count: POWERLEVEL_CHANNELS
  },
  {
    name: "EEOFFSET_POWERLEVEL_LOW_far",
    type: NVMEntryType.Byte,
    count: POWERLEVEL_CHANNELS
  },
  {
    name: "EEOFFSET_MODULE_POWER_MODE_EXTINT_ENABLE_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EEOFFSET_MODULE_POWER_MODE_far",
    type: NVMEntryType.Byte,
    count: 1
  },
  {
    name: "EEOFFSET_MODULE_POWER_MODE_WUT_TIMEOUT_far",
    type: NVMEntryType.DWord,
    count: 1
  },
  {
    name: "nvmApplicationDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  {
    name: "nvmHostApplicationSize",
    type: NVMEntryType.NVMModuleSize,
    count: 1
  },
  {
    name: "EEOFFSET_HOST_OFFSET_START_far",
    type: NVMEntryType.Buffer,
    size: NVM_SERIALAPI_HOST_SIZE,
    count: 1
  },
  {
    name: "nvmHostApplicationDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  { name: "nvmDescriptorSize", type: NVMEntryType.NVMModuleSize, count: 1 },
  { name: "nvmDescriptor", type: NVMEntryType.NVMDescriptor, count: 1 },
  {
    name: "nvmDescriptorDescriptor",
    type: NVMEntryType.NVMModuleDescriptor,
    count: 1
  },
  { name: "nvmModuleSizeEndMarker", type: NVMEntryType.Word, count: 1 }
];
var Static_6_8x = {
  name: "Static 6.8x",
  library: "static",
  protocolVersions: [
    "6.01",
    "6.02",
    "6.03",
    "6.04",
    "6.05",
    "6.06",
    "6.07",
    "6.08",
    "6.09",
    "6.10"
  ],
  layout: NVM_Layout_Static_6_8x
};

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm500/impls/index.js
var nvm500Impls = [
  Bridge_6_6x,
  Bridge_6_7x,
  Bridge_6_8x,
  Static_6_6x,
  Static_6_7x,
  Static_6_8x
];

// node_modules/@zwave-js/nvmedit/build/esm/lib/NVM500.js
var NVM500 = class {
  constructor(io) {
    this._io = io;
  }
  _io;
  _access = NVMAccess.None;
  _info;
  get info() {
    return this._info;
  }
  async ensureReadable() {
    if (this._access === NVMAccess.Read || this._access === NVMAccess.ReadWrite) {
      return;
    }
    if (this._access === NVMAccess.Write) {
      await this._io.close();
    }
    this._access = await this._io.open(NVMAccess.Read);
  }
  async ensureWritable() {
    if (this._access === NVMAccess.Write || this._access === NVMAccess.ReadWrite) {
      return;
    }
    if (this._access === NVMAccess.Read) {
      await this._io.close();
    }
    this._access = await this._io.open(NVMAccess.Write);
  }
  async init() {
    await this.ensureReadable();
    for (const impl of nvm500Impls) {
      try {
        const info = await this.resolveLayout(impl);
        if (await this.isLayoutValid(info, impl.protocolVersions)) {
          this._info = info;
        }
        break;
      } catch {
        continue;
      }
    }
    if (!this._info) {
      throw new ZWaveError("Did not find a matching NVM 500 parser implementation! Make sure that the NVM data belongs to a controller with Z-Wave SDK 6.61 or higher.", ZWaveErrorCodes.NVM_NotSupported);
    }
    return this._info;
  }
  async resolveLayout(impl) {
    const resolvedLayout = /* @__PURE__ */ new Map();
    let nvmDescriptor;
    const moduleDescriptors = /* @__PURE__ */ new Map();
    let offset = 0;
    let moduleStart = -1;
    let moduleSize = -1;
    const nvmEnd = await nvmReadUInt16BE(this._io, 0);
    for (const entry of impl.layout) {
      const size = entry.size ?? NVMEntrySizes[entry.type];
      if (entry.type === NVMEntryType.NVMModuleSize) {
        if (moduleStart !== -1) {
          offset = moduleStart + moduleSize;
        }
        moduleStart = offset;
        moduleSize = await nvmReadUInt16BE(this._io, offset);
      } else if (entry.type === NVMEntryType.NVMModuleDescriptor) {
        offset = moduleStart + moduleSize - size;
      }
      if (entry.offset != void 0 && entry.offset !== offset) {
        throw new ZWaveError(`${entry.name} is at wrong location in NVM buffer!`, ZWaveErrorCodes.NVM_InvalidFormat);
      }
      const resolvedEntry = {
        ...entry,
        offset,
        size
      };
      if (entry.type === NVMEntryType.NVMDescriptor) {
        const entryData = await this.readRawEntry(resolvedEntry);
        nvmDescriptor = parseNVMDescriptor(entryData[0]);
      } else if (entry.type === NVMEntryType.NVMModuleDescriptor) {
        const entryData = await this.readRawEntry(resolvedEntry);
        const descriptor = parseNVMModuleDescriptor(entryData[0]);
        if (descriptor.size !== moduleSize) {
          throw new ZWaveError("NVM module descriptor size does not match module size!", ZWaveErrorCodes.NVM_InvalidFormat);
        }
        moduleDescriptors.set(entry.name, descriptor);
      }
      resolvedLayout.set(entry.name, resolvedEntry);
      offset += size * entry.count;
      if (offset >= nvmEnd)
        break;
    }
    if (!nvmDescriptor) {
      throw new ZWaveError("NVM descriptor not found in NVM!", ZWaveErrorCodes.NVM_InvalidFormat);
    }
    return {
      layout: resolvedLayout,
      library: impl.library,
      moduleDescriptors,
      nvmDescriptor
    };
  }
  async isLayoutValid(info, protocolVersions) {
    const eeoffset_magic_entry = info.layout.get("EEOFFSET_MAGIC_far");
    if (!eeoffset_magic_entry)
      return false;
    const eeoffset_magic = (await this.readEntry(eeoffset_magic_entry))[0];
    const configuration_valid_0_entry = info.layout.get("NVM_CONFIGURATION_VALID_far");
    if (!configuration_valid_0_entry)
      return false;
    const configuration_valid_0 = (await this.readEntry(configuration_valid_0_entry))[0];
    const configuration_valid_1_entry = info.layout.get("NVM_CONFIGURATION_REALLYVALID_far");
    if (!configuration_valid_1_entry)
      return false;
    const configuration_valid_1 = (await this.readEntry(configuration_valid_1_entry))[0];
    const routecache_valid_entry = info.layout.get("EX_NVM_ROUTECACHE_MAGIC_far");
    if (!routecache_valid_entry)
      return false;
    const routecache_valid = (await this.readEntry(routecache_valid_entry))[0];
    const endMarker_entry = info.layout.get("nvmModuleSizeEndMarker");
    if (!endMarker_entry)
      return false;
    const endMarker = (await this.readEntry(endMarker_entry))[0];
    return eeoffset_magic === MAGIC_VALUE && configuration_valid_0 === CONFIGURATION_VALID_0 && configuration_valid_1 === CONFIGURATION_VALID_1 && routecache_valid === ROUTECACHE_VALID && protocolVersions.includes(info.nvmDescriptor.protocolVersion) && endMarker === 0;
  }
  async has(property) {
    this._info ??= await this.init();
    return this._info.layout.has(property);
  }
  async readSingleRawEntry(entry, index) {
    if (index >= entry.count) {
      throw new ZWaveError(`Index out of range. Tried to read entry ${index} of ${entry.count}.`, ZWaveErrorCodes.Argument_Invalid);
    }
    return nvmReadBuffer(this._io, entry.offset + index * entry.size, entry.size);
  }
  async readRawEntry(entry) {
    const ret = [];
    const nvmData = await nvmReadBuffer(this._io, entry.offset, entry.count * entry.size);
    for (let i = 0; i < entry.count; i++) {
      ret.push(nvmData.subarray(i * entry.size, (i + 1) * entry.size));
    }
    return ret;
  }
  parseEntry(type, data) {
    switch (type) {
      case NVMEntryType.Byte:
        return data.readUInt8(0);
      case NVMEntryType.Word:
      case NVMEntryType.NVMModuleSize:
        return data.readUInt16BE(0);
      case NVMEntryType.DWord:
        return data.readUInt32BE(0);
      case NVMEntryType.NodeInfo:
        if (data.every((byte) => byte === 0)) {
          return void 0;
        }
        return parseNVM500NodeInfo(data, 0);
      case NVMEntryType.NodeMask:
        return parseBitMask(data);
      case NVMEntryType.SUCUpdateEntry:
        if (data.every((byte) => byte === 0)) {
          return void 0;
        }
        return parseSUCUpdateEntry(data, 0);
      case NVMEntryType.Route:
        if (data.every((byte) => byte === 0)) {
          return void 0;
        }
        return parseRoute(data, 0);
      case NVMEntryType.NVMModuleDescriptor: {
        return parseNVMModuleDescriptor(data);
      }
      case NVMEntryType.NVMDescriptor:
        return parseNVMDescriptor(data);
      default:
        return data;
    }
  }
  async readEntry(entry) {
    const data = await this.readRawEntry(entry);
    return data.map((buffer) => this.parseEntry(entry.type, Bytes.view(buffer)));
  }
  async readSingleEntry(entry, index) {
    const data = await this.readSingleRawEntry(entry, index);
    return this.parseEntry(entry.type, Bytes.view(data));
  }
  async get(property) {
    this._info ??= await this.init();
    await this.ensureReadable();
    const entry = this._info.layout.get(property);
    if (!entry)
      return void 0;
    return this.readEntry(entry);
  }
  async getSingle(property, index) {
    this._info ??= await this.init();
    await this.ensureReadable();
    const entry = this._info.layout.get(property);
    if (!entry)
      return void 0;
    return this.readSingleEntry(entry, index);
  }
  encodeEntry(type, data, entrySize) {
    const size = entrySize ?? NVMEntrySizes[type];
    switch (type) {
      case NVMEntryType.Byte:
        return Bytes.from([data]);
      case NVMEntryType.Word:
      case NVMEntryType.NVMModuleSize: {
        const ret = new Bytes(2);
        ret.writeUInt16BE(data, 0);
        return ret;
      }
      case NVMEntryType.DWord: {
        const ret = new Bytes(4);
        ret.writeUInt32BE(data, 0);
        return ret;
      }
      case NVMEntryType.NodeInfo:
        return data ? encodeNVM500NodeInfo(data) : new Bytes(size).fill(0);
      case NVMEntryType.NodeMask: {
        const ret = new Bytes(size).fill(0);
        if (data) {
          ret.set(encodeBitMask(data, MAX_NODES, 1), 0);
        }
        return ret;
      }
      case NVMEntryType.SUCUpdateEntry:
        return encodeSUCUpdateEntry(data);
      case NVMEntryType.Route:
        return encodeRoute(data);
      case NVMEntryType.NVMModuleDescriptor:
        return encodeNVMModuleDescriptor(data);
      case NVMEntryType.NVMDescriptor:
        return encodeNVMDescriptor(data);
      case NVMEntryType.Buffer:
        return data;
    }
  }
  async writeSingleRawEntry(entry, index, data) {
    if (index >= entry.count) {
      throw new ZWaveError(`Index out of range. Tried to write entry ${index} of ${entry.count}.`, ZWaveErrorCodes.Argument_Invalid);
    }
    return nvmWriteBuffer(this._io, entry.offset + index * entry.size, data);
  }
  async writeRawEntry(entry, data) {
    await nvmWriteBuffer(this._io, entry.offset, Bytes.concat(data));
  }
  async writeEntry(entry, data) {
    const buffers = data.map((d) => this.encodeEntry(entry.type, d, entry.size));
    await this.writeRawEntry(entry, buffers);
  }
  async writeSingleEntry(entry, index, data) {
    const buffer = this.encodeEntry(entry.type, data, entry.size);
    await this.writeSingleRawEntry(entry, index, buffer);
  }
  async set(property, value) {
    this._info ??= await this.init();
    await this.ensureWritable();
    const entry = this._info.layout.get(property);
    if (!entry)
      return;
    await this.writeEntry(entry, value);
  }
  async setSingle(property, index, value) {
    this._info ??= await this.init();
    await this.ensureWritable();
    const entry = this._info.layout.get(property);
    if (!entry)
      return void 0;
    await this.writeSingleEntry(entry, index, value);
  }
  async fill(key, value) {
    this._info ??= await this.init();
    await this.ensureWritable();
    const entry = this._info.layout.get(key);
    if (!entry)
      return;
    const size = entry.size ?? NVMEntrySizes[entry.type];
    const data = [];
    for (let i = 1; i <= entry.count; i++) {
      switch (entry.type) {
        case NVMEntryType.Byte:
        case NVMEntryType.Word:
        case NVMEntryType.DWord:
          data.push(value);
          break;
        case NVMEntryType.Buffer:
          data.push(new Uint8Array(size).fill(value));
          break;
        case NVMEntryType.NodeMask:
          data.push(new Array(size).fill(value));
          break;
        case NVMEntryType.NodeInfo:
        case NVMEntryType.Route:
          data.push(void 0);
          break;
        default:
          throw new Error(`Cannot fill entry of type ${NVMEntryType[entry.type]}`);
      }
    }
    await this.writeEntry(entry, data);
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async delete(_property) {
    throw new Error("Deleting entries is not supported for 500 series NVMs");
  }
  async erase(options) {
    await nvmWriteBuffer(this._io, 0, new Uint8Array(options.nvmSize).fill(255));
    const layoutEntries = Array.from(options.layout.values());
    const moduleSizeEntries = layoutEntries.filter((entry) => entry.type === NVMEntryType.NVMModuleSize);
    const moduleDescriptorEntries = layoutEntries.filter((entry) => entry.type === NVMEntryType.NVMModuleDescriptor);
    const moduleDescriptors = /* @__PURE__ */ new Map();
    for (let i = 0; i < moduleSizeEntries.length; i++) {
      const sizeEntry = moduleSizeEntries[i];
      const descriptorEntry = moduleDescriptorEntries[i];
      const size = descriptorEntry.offset + descriptorEntry.size - sizeEntry.offset;
      await this.writeEntry(sizeEntry, [size]);
      const moduleType = descriptorEntry.name === "nvmZWlibraryDescriptor" ? NVMModuleType.ZW_LIBRARY : descriptorEntry.name === "nvmApplicationDescriptor" ? NVMModuleType.APPLICATION : descriptorEntry.name === "nvmHostApplicationDescriptor" ? NVMModuleType.HOST_APPLICATION : descriptorEntry.name === "nvmDescriptorDescriptor" ? NVMModuleType.NVM_DESCRIPTOR : 0;
      const moduleDescriptor = {
        size,
        type: moduleType,
        version: descriptorEntry.name === "nvmZWlibraryDescriptor" ? options.nvmDescriptor.protocolVersion : options.nvmDescriptor.firmwareVersion
      };
      moduleDescriptors.set(descriptorEntry.name, moduleDescriptor);
      await this.writeEntry(descriptorEntry, [moduleDescriptor]);
    }
    this._info = {
      ...options,
      moduleDescriptors
    };
    await this.set("nvmTotalEnd", [options.nvmSize - 1]);
    await this.set("NVM_CONFIGURATION_VALID_far", [CONFIGURATION_VALID_0]);
    await this.set("NVM_CONFIGURATION_REALLYVALID_far", [
      CONFIGURATION_VALID_1
    ]);
    await this.set("EEOFFSET_MAGIC_far", [MAGIC_VALUE]);
    await this.set("EX_NVM_ROUTECACHE_MAGIC_far", [ROUTECACHE_VALID]);
    await this.set("nvmModuleSizeEndMarker", [0]);
    await this.set("nvmDescriptor", [options.nvmDescriptor]);
    await this.fill("NVM_INTERNAL_RESERVED_1_far", 0);
    await this.fill("NVM_INTERNAL_RESERVED_2_far", 255);
    await this.fill("NVM_INTERNAL_RESERVED_3_far", 0);
    await this.fill("NVM_RTC_TIMERS_far", 0);
    await this.fill("EX_NVM_SUC_ACTIVE_START_far", 0);
    await this.fill("EX_NVM_ZENSOR_TABLE_START_far", 0);
    await this.fill("NVM_SECURITY0_KEY_far", 0);
    await this.fill("EX_NVM_SUC_CONTROLLER_LIST_START_far", 254);
    await this.fill("EX_NVM_NODE_TABLE_START_far", 0);
    await this.fill("EX_NVM_ROUTING_TABLE_START_far", 0);
    await this.fill("EX_NVM_ROUTECACHE_START_far", 0);
    await this.fill("EX_NVM_ROUTECACHE_NLWR_SR_START_far", 0);
  }
};

// node_modules/@zwave-js/nvmedit/build/esm/lib/io/NVMMemoryIO.js
var NVMMemoryIO = class {
  constructor(buffer) {
    this._buffer = buffer;
  }
  _buffer;
  open(_access) {
    return Promise.resolve(NVMAccess.ReadWrite);
  }
  get size() {
    return this._buffer.length;
  }
  get accessMode() {
    return NVMAccess.ReadWrite;
  }
  determineChunkSize() {
    return Promise.resolve(this._buffer.length);
  }
  read(offset, length) {
    return Promise.resolve({
      buffer: this._buffer.subarray(offset, offset + length),
      endOfFile: offset + length >= this._buffer.length
    });
  }
  write(offset, data) {
    if (offset + data.length > this.size) {
      throw new ZWaveError("Write would exceed the NVM size", ZWaveErrorCodes.NVM_NoSpace);
    }
    this._buffer.set(data, offset);
    return Promise.resolve({
      bytesWritten: data.length,
      endOfFile: offset + data.length >= this._buffer.length
    });
  }
  close() {
    return Promise.resolve();
  }
};

// node_modules/alcalzone-shared/build/esm/helpers/index.js
function assertNever(value) {
  throw new Error(`Unexpected value observed: ${value}`);
}

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm3/adapter.js
var DEFAULT_FILE_VERSION = "7.0.0";
var NVM3Adapter = class {
  constructor(nvm) {
    this._nvm = nvm;
  }
  _nvm;
  _initialized = false;
  _protocolInfo;
  _applicationInfo;
  /** A list of pending changes that haven't been written to the NVM yet. `null` indicates a deleted entry. */
  _pendingChanges = /* @__PURE__ */ new Map();
  getFileVersion(fileId) {
    if (fileId === ProtocolVersionFileID || fileId === ApplicationVersionFileID || fileId === ApplicationVersionFile800ID) {
      return DEFAULT_FILE_VERSION;
    }
    const section = getNVMSectionByFileID(fileId);
    if (section === "application") {
      return this._applicationInfo?.version ?? DEFAULT_FILE_VERSION;
    } else if (section === "protocol") {
      return this._protocolInfo?.version ?? DEFAULT_FILE_VERSION;
    }
    return DEFAULT_FILE_VERSION;
  }
  async init() {
    if (!this._protocolInfo) {
      const protocolVersionFile = await this._getFile(ProtocolVersionFileID, true);
      if (protocolVersionFile) {
        const version = `${protocolVersionFile.major}.${protocolVersionFile.minor}.${protocolVersionFile.patch}`;
        this._protocolInfo = {
          version,
          format: protocolVersionFile.format
        };
      }
    }
    if (!this._applicationInfo) {
      const applicationVersionFile700 = await this._getFile(ApplicationVersionFileID, true);
      const applicationVersionFile800 = await this._getFile(ApplicationVersionFile800ID, true);
      const applicationVersionFile = applicationVersionFile700 ?? applicationVersionFile800;
      if (applicationVersionFile) {
        const version = `${applicationVersionFile.major}.${applicationVersionFile.minor}.${applicationVersionFile.patch}`;
        this._applicationInfo = {
          version,
          format: applicationVersionFile.format
        };
      }
    }
    this._initialized = true;
  }
  /** Adds a complete file to the list of pending changes */
  setFile(file) {
    const { key, data } = file.serialize();
    this._pendingChanges.set(key, data);
  }
  async hasFile(fileId) {
    if (!this._initialized)
      await this.init();
    if (this._pendingChanges.has(fileId)) {
      return this._pendingChanges.get(fileId) !== null;
    } else {
      return this._nvm.has(fileId);
    }
  }
  async _getFile(fileId, skipInit = false) {
    if (!skipInit && !this._initialized)
      await this.init();
    let data;
    if (this._pendingChanges.has(fileId)) {
      data = this._pendingChanges.get(fileId);
    } else {
      data = await this._nvm.get(fileId);
    }
    if (!data)
      return;
    const fileVersion = this.getFileVersion(fileId);
    return NVMFile.from(fileId, data, fileVersion);
  }
  async _expectFile(fileId, skipInit = false) {
    const file = await this._getFile(fileId, skipInit);
    if (!file) {
      throw new ZWaveError(`NVM file ${num2hex(fileId)} not found`, ZWaveErrorCodes.NVM_ObjectNotFound);
    }
    return file;
  }
  getFile(fileId, required) {
    if (required) {
      return this._expectFile(fileId);
    } else {
      return this._getFile(fileId);
    }
  }
  get(property, required) {
    if (property.domain === "controller") {
      return this.getControllerNVMProperty(property, !!required);
    } else if (property.domain === "lrnode") {
      return this.getLRNodeNVMProperty(property, !!required);
    } else {
      return this.getNodeNVMProperty(property, !!required);
    }
  }
  async getControllerNVMProperty(property, required) {
    const getFile = (fileId) => {
      if (required) {
        return this._expectFile(fileId);
      } else {
        return this._getFile(fileId);
      }
    };
    switch (property.type) {
      case "protocolVersion": {
        const file = await getFile(ProtocolVersionFileID);
        if (!file)
          return;
        return `${file.major}.${file.minor}.${file.patch}`;
      }
      case "protocolFileFormat": {
        const file = await getFile(ProtocolVersionFileID);
        return file?.format;
      }
      case "applicationVersion":
      case "applicationFileFormat": {
        const file700 = await this._getFile(ApplicationVersionFileID);
        const file800 = await this._getFile(ApplicationVersionFile800ID);
        const file = file700 ?? file800;
        if (!file) {
          if (required) {
            throw new ZWaveError("ApplicationVersionFile not found!", ZWaveErrorCodes.NVM_ObjectNotFound);
          } else {
            return;
          }
        }
        if (property.type === "applicationVersion") {
          return `${file.major}.${file.minor}.${file.patch}`;
        } else if (property.type === "applicationFileFormat") {
          return file?.format;
        }
      }
      case "applicationData": {
        const file = await getFile(ApplicationDataFileID);
        return file?.applicationData;
      }
      case "applicationName": {
        const file = await getFile(ApplicationNameFileID);
        return file?.name;
      }
      case "homeId":
      case "nodeId":
      case "lastNodeId":
      case "staticControllerNodeId":
      case "sucLastIndex":
      case "controllerConfiguration":
      case "sucAwarenessPushNeeded":
      case "maxNodeId":
      case "reservedId":
      case "systemState":
      case "lastNodeIdLR":
      case "maxNodeIdLR":
      case "reservedIdLR":
      case "primaryLongRangeChannelId":
      case "dcdcConfig": {
        const file = await getFile(ControllerInfoFileID);
        return file?.[property.type];
      }
      case "includedInsecurely":
      case "includedSecurelyInsecureCCs":
      case "includedSecurelySecureCCs": {
        const file = await getFile(ApplicationCCsFileID);
        return file?.[property.type];
      }
      case "rfRegion":
      case "txPower":
      case "measured0dBm":
      case "enablePTI":
      case "maxTXPower":
      case "nodeIdType": {
        const file = await getFile(ApplicationRFConfigFileID);
        return file?.[property.type];
      }
      case "isListening":
      case "optionalFunctionality":
      case "genericDeviceClass":
      case "specificDeviceClass": {
        const file = await getFile(ApplicationTypeFileID);
        return file?.[property.type];
      }
      case "preferredRepeaters": {
        const file = await getFile(ProtocolPreferredRepeatersFileID);
        return file?.nodeIds;
      }
      case "appRouteLock": {
        const file = await getFile(ProtocolAppRouteLockNodeMaskFileID);
        return file?.nodeIds;
      }
      case "routeSlaveSUC": {
        const file = await getFile(ProtocolRouteSlaveSUCNodeMaskFileID);
        return file?.nodeIds;
      }
      case "sucPendingUpdate": {
        const file = await getFile(ProtocolSUCPendingUpdateNodeMaskFileID);
        return file?.nodeIds;
      }
      case "pendingDiscovery": {
        const file = await getFile(ProtocolPendingDiscoveryNodeMaskFileID);
        return file?.nodeIds;
      }
      case "nodeIds": {
        const file = await getFile(ProtocolNodeListFileID);
        return file?.nodeIds;
      }
      case "lrNodeIds": {
        const file = await getFile(ProtocolLRNodeListFileID);
        return file?.nodeIds;
      }
      case "virtualNodeIds": {
        const file = await getFile(ProtocolVirtualNodeMaskFileID);
        return file?.nodeIds;
      }
      case "sucUpdateEntries": {
        if (this._protocolInfo.format < 5) {
          const file = await getFile(SUCUpdateEntriesFileIDV0);
          return file?.updateEntries;
        } else {
          const updateEntries = [];
          for (let index = 0; index < SUC_MAX_UPDATES; index += SUC_UPDATES_PER_FILE_V5) {
            const file = await this._getFile(sucUpdateIndexToSUCUpdateEntriesFileIDV5(index));
            if (!file)
              break;
            updateEntries.push(...file.updateEntries);
          }
          return updateEntries;
        }
      }
      case "learnedHomeId":
      case "commandClasses":
      case "watchdogStarted":
      case "powerLevelNormal":
      case "powerLevelLow":
      case "powerMode":
      case "powerModeExtintEnable":
      case "powerModeWutTimeout":
        return;
      default:
        assertNever(property.type);
    }
  }
  async getNodeNVMProperty(property, required) {
    const getFile = (fileId) => {
      if (required) {
        return this._expectFile(fileId);
      } else {
        return this._getFile(fileId);
      }
    };
    switch (property.type) {
      case "info": {
        if (this._protocolInfo.format < 1) {
          const file = await getFile(nodeIdToNodeInfoFileIDV0(property.nodeId));
          return file?.nodeInfo;
        } else {
          const file = await getFile(nodeIdToNodeInfoFileIDV1(property.nodeId));
          return file?.nodeInfos.find((info) => info.nodeId === property.nodeId);
        }
      }
      case "routes": {
        const nodeMaskFile = await this.getFile(ProtocolRouteCacheExistsNodeMaskFileID);
        if (!nodeMaskFile)
          return;
        if (!nodeMaskFile.nodeIdSet.has(property.nodeId))
          return;
        let routeCache;
        if (this._protocolInfo.format < 1) {
          const file = await getFile(nodeIdToRouteCacheFileIDV0(property.nodeId));
          routeCache = file?.routeCache;
        } else {
          const file = await getFile(nodeIdToRouteCacheFileIDV1(property.nodeId));
          routeCache = file?.routeCaches.find((route) => route.nodeId === property.nodeId);
        }
        if (!routeCache)
          return;
        return {
          lwr: routeCache.lwr,
          nlwr: routeCache.nlwr
        };
      }
      default:
        assertNever(property.type);
    }
  }
  async getLRNodeNVMProperty(property, required) {
    const getFile = (fileId) => {
      if (required) {
        return this._expectFile(fileId);
      } else {
        return this._getFile(fileId);
      }
    };
    switch (property.type) {
      case "info": {
        const file = await getFile(nodeIdToLRNodeInfoFileIDV5(property.nodeId));
        return file?.nodeInfos.find((info) => info.nodeId === property.nodeId);
      }
      default:
        assertNever(property.type);
    }
  }
  async set(property, value) {
    if (!this._initialized)
      await this.init();
    if (property.domain === "controller") {
      return this.setControllerNVMProperty(property, value);
    } else if (property.domain === "lrnode") {
      return this.setLRNodeNVMProperty(property, value);
    } else {
      return this.setNodeNVMProperty(property, value);
    }
  }
  async setControllerNVMProperty(property, value) {
    function failFileMissing() {
      throw new ZWaveError("Cannot set property in NVM for non-existing file", ZWaveErrorCodes.NVM_ObjectNotFound);
    }
    const expectFile = async (fileId) => {
      const file = await this._getFile(fileId);
      if (!file)
        failFileMissing();
      return file;
    };
    const changedFiles = [];
    const deletedFiles = [];
    switch (property.type) {
      case "protocolVersion": {
        const file = await expectFile(ProtocolVersionFileID);
        const [major, minor, patch] = value.split(".").map((part) => parseInt(part, 10));
        file.major = major;
        file.minor = minor;
        file.patch = patch;
        changedFiles.push(file);
        break;
      }
      case "protocolFileFormat": {
        const file = await expectFile(ProtocolVersionFileID);
        file.format = value;
        changedFiles.push(file);
        break;
      }
      case "applicationVersion": {
        const file700 = await this._getFile(ApplicationVersionFileID);
        const file800 = await this._getFile(ApplicationVersionFile800ID);
        const file = file700 ?? file800;
        if (!file) {
          throw new ZWaveError("ApplicationVersionFile not found!", ZWaveErrorCodes.NVM_ObjectNotFound);
        }
        const [major, minor, patch] = value.split(".").map((part) => parseInt(part, 10));
        file.major = major;
        file.minor = minor;
        file.patch = patch;
        changedFiles.push(file);
        break;
      }
      case "applicationFileFormat": {
        const file = await expectFile(ApplicationVersionFileID);
        file.format = value;
        changedFiles.push(file);
        break;
      }
      case "applicationData": {
        const file = new ApplicationDataFile({
          applicationData: value,
          fileVersion: this.getFileVersion(ApplicationDataFileID)
        });
        file.applicationData = value;
        changedFiles.push(file);
        break;
      }
      case "applicationName": {
        const file = new ApplicationNameFile({
          name: value,
          fileVersion: this.getFileVersion(ApplicationNameFileID)
        });
        changedFiles.push(file);
        break;
      }
      case "homeId":
      case "nodeId":
      case "lastNodeId":
      case "staticControllerNodeId":
      case "sucLastIndex":
      case "controllerConfiguration":
      case "sucAwarenessPushNeeded":
      case "maxNodeId":
      case "reservedId":
      case "systemState":
      case "lastNodeIdLR":
      case "maxNodeIdLR":
      case "reservedIdLR":
      case "primaryLongRangeChannelId":
      case "dcdcConfig": {
        const file = await expectFile(ControllerInfoFileID);
        file[property.type] = value;
        changedFiles.push(file);
        break;
      }
      case "includedInsecurely":
      case "includedSecurelyInsecureCCs":
      case "includedSecurelySecureCCs": {
        const file = await expectFile(ApplicationCCsFileID);
        file[property.type] = value;
        changedFiles.push(file);
        break;
      }
      case "rfRegion":
      case "txPower":
      case "measured0dBm":
      case "enablePTI":
      case "maxTXPower":
      case "nodeIdType": {
        const file = await expectFile(ApplicationRFConfigFileID);
        file[property.type] = value;
        changedFiles.push(file);
        break;
      }
      case "isListening":
      case "optionalFunctionality":
      case "genericDeviceClass":
      case "specificDeviceClass": {
        const file = await expectFile(ApplicationTypeFileID);
        file[property.type] = value;
        changedFiles.push(file);
        break;
      }
      case "nodeIds": {
        const file = await this._getFile(ProtocolNodeListFileID) ?? new ProtocolNodeListFile({
          nodeIds: [],
          fileVersion: this.getFileVersion(ProtocolNodeListFileID)
        });
        file.nodeIds = value;
        changedFiles.push(file);
        break;
      }
      case "lrNodeIds": {
        const file = await this._getFile(ProtocolLRNodeListFileID) ?? new ProtocolLRNodeListFile({
          nodeIds: [],
          fileVersion: this.getFileVersion(ProtocolLRNodeListFileID)
        });
        file.nodeIds = value;
        changedFiles.push(file);
        break;
      }
      case "virtualNodeIds": {
        const file = await this._getFile(ProtocolVirtualNodeMaskFileID) ?? new ProtocolVirtualNodeMaskFile({
          nodeIds: [],
          fileVersion: this.getFileVersion(ProtocolVirtualNodeMaskFileID)
        });
        file.nodeIds = value;
        changedFiles.push(file);
        break;
      }
      case "preferredRepeaters": {
        const file = new ProtocolPreferredRepeatersFile({
          nodeIds: value,
          fileVersion: this.getFileVersion(ProtocolPreferredRepeatersFileID)
        });
        changedFiles.push(file);
        break;
      }
      case "appRouteLock": {
        const file = new ProtocolAppRouteLockNodeMaskFile({
          nodeIds: value,
          fileVersion: this.getFileVersion(ProtocolAppRouteLockNodeMaskFileID)
        });
        changedFiles.push(file);
        break;
      }
      case "routeSlaveSUC": {
        const file = new ProtocolRouteSlaveSUCNodeMaskFile({
          nodeIds: value,
          fileVersion: this.getFileVersion(ProtocolRouteSlaveSUCNodeMaskFileID)
        });
        changedFiles.push(file);
        break;
      }
      case "sucPendingUpdate": {
        const file = new ProtocolSUCPendingUpdateNodeMaskFile({
          nodeIds: value,
          fileVersion: this.getFileVersion(ProtocolSUCPendingUpdateNodeMaskFileID)
        });
        changedFiles.push(file);
        break;
      }
      case "pendingDiscovery": {
        const file = new ProtocolPendingDiscoveryNodeMaskFile({
          nodeIds: value,
          fileVersion: this.getFileVersion(ProtocolPendingDiscoveryNodeMaskFileID)
        });
        changedFiles.push(file);
        break;
      }
      case "sucUpdateEntries": {
        if (this._protocolInfo.format < 5) {
          const file = new SUCUpdateEntriesFileV0({
            updateEntries: value,
            fileVersion: this.getFileVersion(SUCUpdateEntriesFileIDV0)
          });
          changedFiles.push(file);
          break;
        } else {
          for (let index = 0; index < SUC_MAX_UPDATES; index += SUC_UPDATES_PER_FILE_V5) {
            const fileId = sucUpdateIndexToSUCUpdateEntriesFileIDV5(index);
            const fileExists = await this.hasFile(fileId);
            const fileVersion = this.getFileVersion(fileId);
            const slice = value.slice(index, index + SUC_UPDATES_PER_FILE_V5);
            if (slice.length > 0) {
              const file = new SUCUpdateEntriesFileV5({
                updateEntries: slice,
                fileId,
                fileVersion
              });
              changedFiles.push(file);
            } else if (fileExists) {
              deletedFiles.push(fileId);
            }
          }
        }
        break;
      }
      case "learnedHomeId":
      case "commandClasses":
      case "watchdogStarted":
      case "powerLevelNormal":
      case "powerLevelLow":
      case "powerMode":
      case "powerModeExtintEnable":
      case "powerModeWutTimeout":
        return;
      default:
        assertNever(property.type);
    }
    for (const file of changedFiles) {
      const { key, data } = file.serialize();
      this._pendingChanges.set(key, data);
    }
    for (const file of deletedFiles) {
      this._pendingChanges.set(file, null);
    }
  }
  async setLRNodeNVMProperty(property, value) {
    const changedFiles = [];
    const deletedFiles = [];
    switch (property.type) {
      case "info": {
        const fileId = nodeIdToLRNodeInfoFileIDV5(property.nodeId);
        let file = await this._getFile(fileId);
        if (value) {
          file ??= new LRNodeInfoFileV5({
            nodeInfos: [],
            fileVersion: this.getFileVersion(fileId)
          });
          const existingIndex = file.nodeInfos.findIndex((info) => info.nodeId === property.nodeId);
          if (existingIndex !== -1) {
            file.nodeInfos[existingIndex] = value;
          } else {
            file.nodeInfos.push(value);
          }
          changedFiles.push(file);
        } else if (file) {
          const existingIndex = file.nodeInfos.findIndex((info) => info.nodeId === property.nodeId);
          if (existingIndex !== -1) {
            file.nodeInfos.splice(existingIndex, 1);
            if (file.nodeInfos.length === 0) {
              deletedFiles.push(fileId);
            } else {
              changedFiles.push(file);
            }
          }
        }
        break;
      }
      default:
        assertNever(property.type);
    }
    for (const file of changedFiles) {
      const { key, data } = file.serialize();
      this._pendingChanges.set(key, data);
    }
    for (const file of deletedFiles) {
      this._pendingChanges.set(file, null);
    }
  }
  async setNodeNVMProperty(property, value) {
    const changedFiles = [];
    const deletedFiles = [];
    switch (property.type) {
      case "info": {
        if (this._protocolInfo.format < 1) {
          const fileId = nodeIdToNodeInfoFileIDV0(property.nodeId);
          let file = await this._getFile(fileId);
          if (value) {
            file ??= new NodeInfoFileV0({
              nodeInfo: void 0,
              fileVersion: this.getFileVersion(fileId)
            });
            file.nodeInfo = value;
            changedFiles.push(file);
          } else {
            deletedFiles.push(fileId);
          }
        } else {
          const fileId = nodeIdToNodeInfoFileIDV1(property.nodeId);
          let file = await this._getFile(fileId);
          if (value) {
            file ??= new NodeInfoFileV1({
              nodeInfos: [],
              fileVersion: this.getFileVersion(fileId)
            });
            const existingIndex = file.nodeInfos.findIndex((info) => info.nodeId === property.nodeId);
            if (existingIndex !== -1) {
              file.nodeInfos[existingIndex] = value;
            } else {
              file.nodeInfos.push(value);
            }
            changedFiles.push(file);
          } else if (file) {
            const existingIndex = file.nodeInfos.findIndex((info) => info.nodeId === property.nodeId);
            if (existingIndex !== -1) {
              file.nodeInfos.splice(existingIndex, 1);
              if (file.nodeInfos.length === 0) {
                deletedFiles.push(fileId);
              } else {
                changedFiles.push(file);
              }
            }
          }
        }
        break;
      }
      case "routes": {
        if (this._protocolInfo.format < 1) {
          const fileId = nodeIdToRouteCacheFileIDV0(property.nodeId);
          let file = await this._getFile(fileId);
          if (value) {
            file ??= new RouteCacheFileV0({
              routeCache: void 0,
              fileVersion: this.getFileVersion(fileId)
            });
            file.routeCache = {
              nodeId: property.nodeId,
              lwr: value.lwr,
              nlwr: value.nlwr
            };
            changedFiles.push(file);
          } else if (file) {
            deletedFiles.push(fileId);
          }
        } else {
          const fileId = nodeIdToRouteCacheFileIDV1(property.nodeId);
          const file = await this._getFile(fileId) ?? new RouteCacheFileV1({
            routeCaches: [],
            fileVersion: this.getFileVersion(fileId)
          });
          const existingIndex = file.routeCaches.findIndex((route) => route.nodeId === property.nodeId);
          const newRoute = {
            nodeId: property.nodeId,
            lwr: value.lwr,
            nlwr: value.nlwr
          };
          if (existingIndex !== -1) {
            file.routeCaches[existingIndex] = newRoute;
          } else {
            file.routeCaches.push(newRoute);
          }
          changedFiles.push(file);
        }
        const nodeMaskFile = await this._getFile(ProtocolRouteCacheExistsNodeMaskFileID) ?? new ProtocolRouteCacheExistsNodeMaskFile({
          nodeIds: [],
          fileVersion: this.getFileVersion(ProtocolRouteCacheExistsNodeMaskFileID)
        });
        if (!value && nodeMaskFile.nodeIdSet.has(property.nodeId)) {
          nodeMaskFile.nodeIdSet.delete(property.nodeId);
          changedFiles.push(nodeMaskFile);
        } else if (value && !nodeMaskFile.nodeIdSet.has(property.nodeId)) {
          nodeMaskFile.nodeIdSet.add(property.nodeId);
          changedFiles.push(nodeMaskFile);
        }
        break;
      }
      default:
        assertNever(property.type);
    }
    for (const file of changedFiles) {
      const { key, data } = file.serialize();
      this._pendingChanges.set(key, data);
    }
    for (const file of deletedFiles) {
      this._pendingChanges.set(file, null);
    }
  }
  async delete(property) {
    if (property.domain === "controller") {
      switch (property.type) {
        case "protocolVersion":
        case "protocolFileFormat": {
          this._pendingChanges.set(ProtocolVersionFileID, null);
          return;
        }
        case "applicationVersion":
        case "applicationFileFormat": {
          if (await this.hasFile(ApplicationVersionFileID)) {
            this._pendingChanges.set(ApplicationVersionFileID, null);
          }
          if (await this.hasFile(ApplicationVersionFile800ID)) {
            this._pendingChanges.set(ApplicationVersionFile800ID, null);
          }
          return;
        }
        case "applicationData": {
          this._pendingChanges.set(ApplicationDataFileID, null);
          return;
        }
        case "applicationName": {
          this._pendingChanges.set(ApplicationNameFileID, null);
          return;
        }
        case "homeId":
        case "nodeId":
        case "lastNodeId":
        case "staticControllerNodeId":
        case "sucLastIndex":
        case "controllerConfiguration":
        case "sucAwarenessPushNeeded":
        case "maxNodeId":
        case "reservedId":
        case "systemState":
        case "lastNodeIdLR":
        case "maxNodeIdLR":
        case "reservedIdLR":
        case "primaryLongRangeChannelId":
        case "dcdcConfig": {
          this._pendingChanges.set(ControllerInfoFileID, null);
          return;
        }
        case "includedInsecurely":
        case "includedSecurelyInsecureCCs":
        case "includedSecurelySecureCCs": {
          this._pendingChanges.set(ApplicationCCsFileID, null);
          return;
        }
        case "rfRegion":
        case "txPower":
        case "measured0dBm":
        case "enablePTI":
        case "maxTXPower":
        case "nodeIdType": {
          this._pendingChanges.set(ApplicationRFConfigFileID, null);
          return;
        }
        case "isListening":
        case "optionalFunctionality":
        case "genericDeviceClass":
        case "specificDeviceClass": {
          this._pendingChanges.set(ApplicationTypeFileID, null);
          return;
        }
        case "nodeIds": {
          this._pendingChanges.set(ProtocolNodeListFileID, null);
          return;
        }
        case "lrNodeIds": {
          this._pendingChanges.set(ProtocolLRNodeListFileID, null);
          return;
        }
        case "virtualNodeIds": {
          this._pendingChanges.set(ProtocolVirtualNodeMaskFileID, null);
          return;
        }
        case "preferredRepeaters": {
          this._pendingChanges.set(ProtocolPreferredRepeatersFileID, null);
          return;
        }
        case "appRouteLock": {
          this._pendingChanges.set(ProtocolAppRouteLockNodeMaskFileID, null);
          return;
        }
        case "routeSlaveSUC": {
          this._pendingChanges.set(ProtocolRouteSlaveSUCNodeMaskFileID, null);
          return;
        }
        case "sucPendingUpdate": {
          this._pendingChanges.set(ProtocolSUCPendingUpdateNodeMaskFileID, null);
          return;
        }
        case "pendingDiscovery": {
          this._pendingChanges.set(ProtocolPendingDiscoveryNodeMaskFileID, null);
          return;
        }
        case "sucUpdateEntries": {
          if (this._protocolInfo.format < 5) {
            this._pendingChanges.set(SUCUpdateEntriesFileIDV0, null);
          } else {
            for (let id = SUCUpdateEntriesFileV5IDBase; id <= SUCUpdateEntriesFileV5IDMax; id++) {
              if (await this.hasFile(id)) {
                this._pendingChanges.set(id, null);
              }
            }
          }
          return;
        }
        case "learnedHomeId":
        case "commandClasses":
        case "watchdogStarted":
        case "powerLevelNormal":
        case "powerLevelLow":
        case "powerMode":
        case "powerModeExtintEnable":
        case "powerModeWutTimeout":
          return;
        default:
          assertNever(property);
      }
    } else if (property.domain === "lrnode") {
      return this.setLRNodeNVMProperty(property, void 0);
    } else if (property.domain === "node") {
      return this.setNodeNVMProperty(property, void 0);
    }
  }
  hasPendingChanges() {
    return this._pendingChanges.size > 0;
  }
  async commit() {
    await this._nvm.setMany([...this._pendingChanges]);
  }
};

// node_modules/@zwave-js/nvmedit/build/esm/lib/nvm500/adapter.js
var NVM500Adapter = class {
  constructor(nvm) {
    this._nvm = nvm;
  }
  _nvm;
  async get(property, required) {
    const info = this._nvm.info ?? await this._nvm.init();
    let ret;
    if (property.domain === "controller") {
      ret = await this.getControllerNVMProperty(info, property);
    } else if (property.domain === "lrnode") {
      throw new ZWaveError(`500 series NVM has no support for Long Range node information`, ZWaveErrorCodes.NVM_ObjectNotFound);
    } else {
      ret = await this.getNodeNVMProperty(property);
    }
    if (required && ret === void 0) {
      throw new ZWaveError(`NVM data for property ${JSON.stringify(property)} not found`, ZWaveErrorCodes.NVM_ObjectNotFound);
    }
    return ret;
  }
  async getOnly(property) {
    const data = await this._nvm.get(property);
    return data?.[0];
  }
  async getSingle(property, index) {
    const data = await this._nvm.getSingle(property, index);
    return data;
  }
  getAll(property) {
    return this._nvm.get(property);
  }
  async getControllerNVMProperty(info, property) {
    switch (property.type) {
      case "protocolVersion":
        return info.nvmDescriptor.protocolVersion;
      case "applicationVersion":
        return info.nvmDescriptor.firmwareVersion;
      case "protocolFileFormat":
      case "applicationFileFormat":
        return 500;
      case "applicationData":
        return this.getOnly("EEOFFSET_HOST_OFFSET_START_far");
      case "applicationName":
        return;
      case "homeId": {
        const homeId = await this.getOnly("EX_NVM_HOME_ID_far");
        if (homeId == void 0)
          return;
        const ret = new Bytes(4).fill(0);
        ret.writeUInt32BE(homeId, 0);
        return ret;
      }
      case "learnedHomeId": {
        const homeId = await this.getOnly("NVM_HOMEID_far");
        if (homeId == void 0)
          return;
        const ret = new Bytes(4).fill(0);
        ret.writeUInt32BE(homeId, 0);
        return ret;
      }
      case "nodeId":
        return this.getOnly("NVM_NODEID_far");
      case "lastNodeId":
        return this.getOnly("EX_NVM_LAST_USED_NODE_ID_START_far");
      case "staticControllerNodeId":
        return this.getOnly("EX_NVM_STATIC_CONTROLLER_NODE_ID_START_far");
      case "sucLastIndex":
        return this.getOnly("EX_NVM_SUC_LAST_INDEX_START_far");
      case "controllerConfiguration":
        return this.getOnly("EX_NVM_CONTROLLER_CONFIGURATION_far");
      case "maxNodeId":
        return this.getOnly("EX_NVM_MAX_NODE_ID_far");
      case "reservedId":
        return this.getOnly("EX_NVM_RESERVED_ID_far");
      case "systemState":
        return this.getOnly("NVM_SYSTEM_STATE");
      case "commandClasses": {
        const numCCs = await this.getOnly("EEOFFSET_CMDCLASS_LEN_far");
        const ret = await this.getAll("EEOFFSET_CMDCLASS_far");
        return ret?.slice(0, numCCs);
      }
      case "preferredRepeaters":
        return this.getOnly("NVM_PREFERRED_REPEATERS_far");
      case "appRouteLock": {
        return this.getOnly("EX_NVM_ROUTECACHE_APP_LOCK_far");
      }
      case "routeSlaveSUC": {
        return this.getOnly("EX_NVM_SUC_ROUTING_SLAVE_LIST_START_far");
      }
      case "sucPendingUpdate": {
        return this.getOnly("EX_NVM_PENDING_UPDATE_far");
      }
      case "pendingDiscovery": {
        return this.getOnly("NVM_PENDING_DISCOVERY_far");
      }
      case "nodeIds": {
        const nodeInfos = await this.getAll("EX_NVM_NODE_TABLE_START_far");
        return nodeInfos?.map((info2, index) => info2 ? index + 1 : void 0).filter((id) => id != void 0);
      }
      case "virtualNodeIds": {
        const ret = await this.getOnly("EX_NVM_BRIDGE_NODEPOOL_START_far");
        return ret ?? [];
      }
      case "sucUpdateEntries": {
        const ret = await this.getAll("EX_NVM_SUC_NODE_LIST_START_far");
        return ret?.filter(Boolean);
      }
      case "watchdogStarted":
        return this.getOnly("EEOFFSET_WATCHDOG_STARTED_far");
      case "powerLevelNormal":
        return this.getAll("EEOFFSET_POWERLEVEL_NORMAL_far");
      case "powerLevelLow":
        return this.getAll("EEOFFSET_POWERLEVEL_LOW_far");
      case "powerMode":
        return this.getOnly("EEOFFSET_MODULE_POWER_MODE_far");
      case "powerModeExtintEnable":
        return this.getOnly("EEOFFSET_MODULE_POWER_MODE_EXTINT_ENABLE_far");
      case "powerModeWutTimeout":
        return this.getOnly("EEOFFSET_MODULE_POWER_MODE_WUT_TIMEOUT_far");
      case "sucAwarenessPushNeeded":
      case "lastNodeIdLR":
      case "maxNodeIdLR":
      case "reservedIdLR":
      case "primaryLongRangeChannelId":
      case "dcdcConfig":
      case "lrNodeIds":
      case "includedInsecurely":
      case "includedSecurelyInsecureCCs":
      case "includedSecurelySecureCCs":
      case "rfRegion":
      case "txPower":
      case "measured0dBm":
      case "enablePTI":
      case "maxTXPower":
      case "nodeIdType":
      case "isListening":
      case "optionalFunctionality":
      case "genericDeviceClass":
      case "specificDeviceClass":
        return;
      default:
        assertNever(property.type);
    }
  }
  async getNodeNVMProperty(property) {
    switch (property.type) {
      case "info": {
        const nodeId = property.nodeId;
        const nodeInfo = await this.getSingle("EX_NVM_NODE_TABLE_START_far", nodeId - 1);
        const sucUpdateIndex = await this.getSingle("EX_NVM_SUC_CONTROLLER_LIST_START_far", nodeId - 1) ?? 255;
        const neighbors = await this.getSingle("EX_NVM_ROUTING_TABLE_START_far", nodeId - 1) ?? [];
        if (!nodeInfo)
          return;
        return {
          nodeId,
          ...nodeInfo,
          neighbors,
          sucUpdateIndex
        };
      }
      case "routes": {
        const lwr = await this.getSingle("EX_NVM_ROUTECACHE_START_far", property.nodeId - 1);
        const nlwr = await this.getSingle("EX_NVM_ROUTECACHE_NLWR_SR_START_far", property.nodeId - 1);
        return { lwr, nlwr };
      }
    }
  }
  setOnly(property, value) {
    return this._nvm.set(property, [value]);
  }
  setSingle(property, index, value) {
    return this._nvm.setSingle(property, index, value);
  }
  setAll(property, value) {
    return this._nvm.set(property, value);
  }
  set(property, value) {
    if (property.domain === "controller") {
      return this.setControllerNVMProperty(property, value);
    } else if (property.domain === "lrnode") {
      throw new ZWaveError(`500 series NVM has no support for Long Range node information`, ZWaveErrorCodes.NVM_ObjectNotFound);
    } else {
      return this.setNodeNVMProperty(property, value);
    }
  }
  async setControllerNVMProperty(property, value) {
    switch (property.type) {
      case "protocolVersion":
      case "applicationVersion":
        return;
      case "protocolFileFormat":
      case "applicationFileFormat":
        return;
      case "applicationData":
        return this.setOnly("EEOFFSET_HOST_OFFSET_START_far", value ?? new Bytes(NVM_SERIALAPI_HOST_SIZE).fill(255));
      case "applicationName":
        return;
      case "homeId": {
        const homeId = value.readUInt32BE(0);
        return this.setOnly("EX_NVM_HOME_ID_far", homeId);
      }
      case "learnedHomeId": {
        const learnedHomeId = value?.readUInt32BE(0) ?? 0;
        return this.setOnly("NVM_HOMEID_far", learnedHomeId);
      }
      case "nodeId":
        return this.setOnly("NVM_NODEID_far", value);
      case "lastNodeId":
        return this.setOnly("EX_NVM_LAST_USED_NODE_ID_START_far", value);
      case "staticControllerNodeId":
        return this.setOnly("EX_NVM_STATIC_CONTROLLER_NODE_ID_START_far", value);
      case "sucLastIndex":
        return this.setOnly("EX_NVM_SUC_LAST_INDEX_START_far", value);
      case "controllerConfiguration":
        return this.setOnly("EX_NVM_CONTROLLER_CONFIGURATION_far", value);
      case "maxNodeId":
        return this.setOnly("EX_NVM_MAX_NODE_ID_far", value);
      case "reservedId":
        return this.setOnly("EX_NVM_RESERVED_ID_far", value);
      case "systemState":
        return this.setOnly("NVM_SYSTEM_STATE", value);
      case "commandClasses": {
        await this.setOnly("EEOFFSET_CMDCLASS_LEN_far", value.length);
        const CCs = new Array(APPL_NODEPARM_MAX).fill(255);
        for (let i = 0; i < value.length; i++) {
          if (i < APPL_NODEPARM_MAX) {
            CCs[i] = value[i];
          }
        }
        await this.setAll("EEOFFSET_CMDCLASS_far", CCs);
        return;
      }
      case "preferredRepeaters":
        return this.setOnly("NVM_PREFERRED_REPEATERS_far", value);
      case "appRouteLock": {
        return this.setOnly("EX_NVM_ROUTECACHE_APP_LOCK_far", value);
      }
      case "routeSlaveSUC": {
        return this.setOnly("EX_NVM_SUC_ROUTING_SLAVE_LIST_START_far", value);
      }
      case "sucPendingUpdate": {
        return this.setOnly("EX_NVM_PENDING_UPDATE_far", value);
      }
      case "pendingDiscovery": {
        return this.setOnly("NVM_PENDING_DISCOVERY_far", value);
      }
      case "nodeIds":
        return;
      case "virtualNodeIds": {
        return this.setOnly("EX_NVM_BRIDGE_NODEPOOL_START_far", value);
      }
      case "sucUpdateEntries": {
        const entries = value;
        const sucUpdateEntries = new Array(SUC_MAX_UPDATES).fill(void 0);
        for (let i = 0; i < entries.length; i++) {
          if (i < SUC_MAX_UPDATES) {
            sucUpdateEntries[i] = entries[i];
          }
        }
        return this.setAll("EX_NVM_SUC_NODE_LIST_START_far", sucUpdateEntries);
      }
      case "watchdogStarted":
        return this.setOnly("EEOFFSET_WATCHDOG_STARTED_far", value);
      case "powerLevelNormal":
        return this.setAll("EEOFFSET_POWERLEVEL_NORMAL_far", value);
      case "powerLevelLow":
        return this.setAll("EEOFFSET_POWERLEVEL_LOW_far", value);
      case "powerMode":
        return this.setOnly("EEOFFSET_MODULE_POWER_MODE_far", value);
      case "powerModeExtintEnable":
        return this.setOnly("EEOFFSET_MODULE_POWER_MODE_EXTINT_ENABLE_far", value);
      case "powerModeWutTimeout":
        return this.setOnly("EEOFFSET_MODULE_POWER_MODE_WUT_TIMEOUT_far", value);
      case "sucAwarenessPushNeeded":
      case "lastNodeIdLR":
      case "maxNodeIdLR":
      case "reservedIdLR":
      case "primaryLongRangeChannelId":
      case "dcdcConfig":
      case "lrNodeIds":
      case "includedInsecurely":
      case "includedSecurelyInsecureCCs":
      case "includedSecurelySecureCCs":
      case "rfRegion":
      case "txPower":
      case "measured0dBm":
      case "enablePTI":
      case "maxTXPower":
      case "nodeIdType":
      case "isListening":
      case "optionalFunctionality":
      case "genericDeviceClass":
      case "specificDeviceClass":
        return;
      default:
        assertNever(property.type);
    }
  }
  async setNodeNVMProperty(property, value) {
    switch (property.type) {
      case "info": {
        const nodeId = property.nodeId;
        const node = value;
        await this.setSingle("EX_NVM_NODE_TABLE_START_far", nodeId - 1, node ? {
          isListening: node.isListening,
          isFrequentListening: node.isFrequentListening,
          isRouting: node.isRouting,
          supportedDataRates: node.supportedDataRates,
          protocolVersion: node.protocolVersion,
          optionalFunctionality: node.optionalFunctionality,
          nodeType: node.nodeType,
          supportsSecurity: node.supportsSecurity,
          supportsBeaming: node.supportsBeaming,
          genericDeviceClass: node.genericDeviceClass,
          specificDeviceClass: node.specificDeviceClass ?? null
        } : void 0);
        await this.setSingle("EX_NVM_SUC_CONTROLLER_LIST_START_far", nodeId - 1, node?.sucUpdateIndex ?? 254);
        await this.setSingle("EX_NVM_ROUTING_TABLE_START_far", nodeId - 1, node?.neighbors);
      }
      case "routes": {
        const nodeId = property.nodeId;
        const routes = value;
        await this.setSingle("EX_NVM_ROUTECACHE_START_far", nodeId - 1, routes.lwr);
        await this.setSingle("EX_NVM_ROUTECACHE_NLWR_SR_START_far", property.nodeId - 1, routes.nlwr);
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async delete(_property) {
    throw new Error("Method not implemented.");
  }
  hasPendingChanges() {
    return false;
  }
  async commit() {
  }
};

// node_modules/@zwave-js/nvmedit/build/esm/convert.js
function nodeHasInfo(node) {
  return !node.isVirtual || Object.keys(node).length > 1;
}
function createEmptyPhysicalNode() {
  return {
    isVirtual: false,
    isListening: false,
    isFrequentListening: false,
    isRouting: false,
    supportedDataRates: [],
    protocolVersion: 0,
    optionalFunctionality: false,
    nodeType: NodeType["End Node"],
    supportsSecurity: false,
    supportsBeaming: false,
    genericDeviceClass: 0,
    specificDeviceClass: null,
    neighbors: [],
    sucUpdateIndex: 0,
    appRouteLock: false,
    routeSlaveSUC: false,
    sucPendingUpdate: false,
    pendingDiscovery: false,
    lwr: null,
    nlwr: null
  };
}
function createEmptyLRNode() {
  return {
    isListening: false,
    isFrequentListening: false,
    isRouting: false,
    supportedDataRates: [],
    protocolVersion: 3,
    optionalFunctionality: false,
    nodeType: NodeType["End Node"],
    supportsSecurity: true,
    supportsBeaming: false,
    genericDeviceClass: 0,
    specificDeviceClass: null
  };
}
function nvmJSONNodeToNodeInfo(nodeId, node) {
  return {
    nodeId,
    ...pick(node, [
      "isListening",
      "isFrequentListening",
      "isRouting",
      "supportedDataRates",
      "protocolVersion",
      "optionalFunctionality",
      "nodeType",
      "supportsSecurity",
      "supportsBeaming",
      "genericDeviceClass",
      "specificDeviceClass",
      "neighbors",
      "sucUpdateIndex"
    ])
  };
}
function nvmJSONLRNodeToLRNodeInfo(nodeId, node) {
  return {
    nodeId,
    ...pick(node, [
      "isListening",
      "isFrequentListening",
      "isRouting",
      "supportedDataRates",
      "protocolVersion",
      "optionalFunctionality",
      "nodeType",
      "supportsSecurity",
      "supportsBeaming",
      "genericDeviceClass",
      "specificDeviceClass"
    ])
  };
}
function nvmJSONControllerToFileOptions(ctrlr) {
  const ret = {
    homeId: Bytes.from(ctrlr.homeId.replace(/^0x/, ""), "hex"),
    nodeId: ctrlr.nodeId,
    lastNodeId: ctrlr.lastNodeId,
    staticControllerNodeId: ctrlr.staticControllerNodeId,
    sucLastIndex: ctrlr.sucLastIndex,
    controllerConfiguration: ctrlr.controllerConfiguration,
    maxNodeId: ctrlr.maxNodeId,
    reservedId: ctrlr.reservedId,
    systemState: ctrlr.systemState
  };
  if (ctrlr.sucAwarenessPushNeeded != void 0) {
    ret.sucAwarenessPushNeeded = ctrlr.sucAwarenessPushNeeded;
  } else {
    Object.assign(ret, stripUndefined(pick(ctrlr, [
      "sucAwarenessPushNeeded",
      "lastNodeIdLR",
      "maxNodeIdLR",
      "reservedIdLR",
      "primaryLongRangeChannelId",
      "dcdcConfig"
    ])));
  }
  return ret;
}
async function nvmToJSON(buffer, debugLogs = false) {
  const io = new NVMMemoryIO(buffer);
  const nvm3 = new NVM3(io);
  const info = await nvm3.init();
  const adapter = new NVM3Adapter(nvm3);
  if (debugLogs) {
    await dumpNVM(nvm3);
  }
  const firstPageHeader = info.isSharedFileSystem ? info.sections.all.pages[0] : info.sections.protocol.pages[0];
  const meta = {
    sharedFileSystem: info.isSharedFileSystem,
    ...pick(firstPageHeader, [
      "pageSize",
      "writeSize",
      "memoryMapped",
      "deviceFamily"
    ])
  };
  const nodes = /* @__PURE__ */ new Map();
  const getNode = (id) => {
    if (!nodes.has(id))
      nodes.set(id, createEmptyPhysicalNode());
    return nodes.get(id);
  };
  const lrNodes = /* @__PURE__ */ new Map();
  const getLRNode = (id) => {
    if (!lrNodes.has(id))
      lrNodes.set(id, createEmptyLRNode());
    return lrNodes.get(id);
  };
  const protocolFileFormat = await adapter.get({
    domain: "controller",
    type: "protocolFileFormat"
  }, true);
  if (protocolFileFormat > MAX_PROTOCOL_FILE_FORMAT) {
    throw new ZWaveError(`Unsupported protocol file format: ${protocolFileFormat}`, ZWaveErrorCodes.NVM_NotSupported, { protocolFileFormat });
  }
  const protocolVersion = await adapter.get({
    domain: "controller",
    type: "protocolVersion"
  }, true);
  const appRouteLock = new Set(await adapter.get({
    domain: "controller",
    type: "appRouteLock"
  }, true));
  const routeSlaveSUC = new Set(await adapter.get({
    domain: "controller",
    type: "routeSlaveSUC"
  }, true));
  const sucPendingUpdate = new Set(await adapter.get({
    domain: "controller",
    type: "sucPendingUpdate"
  }, true));
  const virtualNodeIds = new Set(await adapter.get({
    domain: "controller",
    type: "virtualNodeIds"
  }, true));
  const pendingDiscovery = new Set(await adapter.get({
    domain: "controller",
    type: "pendingDiscovery"
  }, true));
  const nodeIds = await adapter.get({
    domain: "controller",
    type: "nodeIds"
  }, true);
  for (const id of nodeIds) {
    const node = getNode(id);
    const nodeInfo = await adapter.get({
      domain: "node",
      nodeId: id,
      type: "info"
    }, true);
    Object.assign(node, nodeInfo);
    node.isVirtual = virtualNodeIds.has(id);
    node.appRouteLock = appRouteLock.has(id);
    node.routeSlaveSUC = routeSlaveSUC.has(id);
    node.sucPendingUpdate = sucPendingUpdate.has(id);
    node.pendingDiscovery = pendingDiscovery.has(id);
    const routes = await adapter.get({
      domain: "node",
      nodeId: id,
      type: "routes"
    });
    if (routes) {
      node.lwr = routes.lwr;
      node.nlwr = routes.nlwr;
    }
    delete node.nodeId;
  }
  const lrNodeIds = await adapter.get({
    domain: "controller",
    type: "lrNodeIds"
  });
  if (lrNodeIds) {
    for (const id of lrNodeIds) {
      const node = getLRNode(id);
      const nodeInfo = await adapter.get({
        domain: "lrnode",
        nodeId: id,
        type: "info"
      }, true);
      Object.assign(node, nodeInfo);
    }
  }
  const sucUpdateEntries = await adapter.get({
    domain: "controller",
    type: "sucUpdateEntries"
  }, true);
  const applicationVersion = await adapter.get({
    domain: "controller",
    type: "applicationVersion"
  }, true);
  const applicationFileFormat = await adapter.get({
    domain: "controller",
    type: "applicationFileFormat"
  }, true);
  const applicationData = await adapter.get({
    domain: "controller",
    type: "applicationData"
  });
  const applicationName = await adapter.get({
    domain: "controller",
    type: "applicationName"
  });
  const preferredRepeaters = await adapter.get({
    domain: "controller",
    type: "preferredRepeaters"
  });
  const controllerInfoFile = await adapter.getFile(ControllerInfoFileID, true);
  const rfConfigFile = await adapter.getFile(ApplicationRFConfigFileID);
  const applicationCCsFile = await adapter.getFile(ApplicationCCsFileID, true);
  const applicationTypeFile = await adapter.getFile(ApplicationTypeFileID, true);
  const controller = {
    protocolVersion,
    applicationVersion,
    homeId: buffer2hex(controllerInfoFile.homeId),
    ...pick(controllerInfoFile, [
      "nodeId",
      "lastNodeId",
      "staticControllerNodeId",
      "sucLastIndex",
      "controllerConfiguration",
      "sucAwarenessPushNeeded",
      "maxNodeId",
      "reservedId",
      "systemState",
      "lastNodeIdLR",
      "maxNodeIdLR",
      "reservedIdLR",
      "primaryLongRangeChannelId",
      "dcdcConfig"
    ]),
    ...pick(applicationTypeFile, [
      "isListening",
      "optionalFunctionality",
      "genericDeviceClass",
      "specificDeviceClass"
    ]),
    commandClasses: pick(applicationCCsFile, [
      "includedInsecurely",
      "includedSecurelyInsecureCCs",
      "includedSecurelySecureCCs"
    ]),
    preferredRepeaters,
    ...rfConfigFile ? {
      rfConfig: {
        rfRegion: rfConfigFile.rfRegion,
        txPower: rfConfigFile.txPower,
        measured0dBm: rfConfigFile.measured0dBm,
        enablePTI: rfConfigFile.enablePTI ?? null,
        maxTXPower: rfConfigFile.maxTXPower ?? null,
        nodeIdType: rfConfigFile.nodeIdType ?? null
      }
    } : {},
    sucUpdateEntries,
    applicationData: (applicationData && Bytes.view(applicationData).toString("hex")) ?? null,
    applicationName: applicationName ?? null
  };
  const optionalControllerProps = [
    "sucAwarenessPushNeeded",
    "lastNodeIdLR",
    "maxNodeIdLR",
    "reservedIdLR",
    "primaryLongRangeChannelId",
    "dcdcConfig",
    "rfConfig",
    "preferredRepeaters",
    "applicationData"
  ];
  for (const prop of optionalControllerProps) {
    if (controller[prop] === void 0)
      controller[prop] = null;
  }
  const ret = {
    format: protocolFileFormat,
    controller,
    nodes: mapToObject(nodes),
    meta
  };
  if (applicationFileFormat !== 0) {
    ret.applicationFileFormat = applicationFileFormat;
  }
  if (lrNodes.size > 0) {
    ret.lrNodes = mapToObject(lrNodes);
  }
  return ret;
}
async function nvm500ToJSON(buffer) {
  const io = new NVMMemoryIO(buffer);
  const nvm = new NVM500(io);
  const info = await nvm.init();
  const meta = {
    library: info.library,
    ...pick(info.nvmDescriptor, [
      "manufacturerID",
      "firmwareID",
      "productType",
      "productID"
    ])
  };
  const adapter = new NVM500Adapter(nvm);
  const appRouteLock = new Set(await adapter.get({
    domain: "controller",
    type: "appRouteLock"
  }, true));
  const routeSlaveSUC = new Set(await adapter.get({
    domain: "controller",
    type: "routeSlaveSUC"
  }, true));
  const sucPendingUpdate = new Set(await adapter.get({
    domain: "controller",
    type: "sucPendingUpdate"
  }, true));
  const virtualNodeIds = new Set(await adapter.get({
    domain: "controller",
    type: "virtualNodeIds"
  }) ?? []);
  const pendingDiscovery = new Set(await adapter.get({
    domain: "controller",
    type: "pendingDiscovery"
  }, true));
  const nodes = {};
  for (let nodeId = 1; nodeId <= MAX_NODES; nodeId++) {
    const nodeInfo = await adapter.get({
      domain: "node",
      nodeId,
      type: "info"
    });
    const isVirtual = virtualNodeIds.has(nodeId);
    if (!nodeInfo) {
      if (isVirtual) {
        nodes[nodeId] = { isVirtual: true };
      }
      continue;
    }
    const routes = await adapter.get({
      domain: "node",
      nodeId,
      type: "routes"
    });
    delete nodeInfo.nodeId;
    nodes[nodeId] = {
      ...nodeInfo,
      specificDeviceClass: nodeInfo.specificDeviceClass ?? null,
      isVirtual,
      appRouteLock: appRouteLock.has(nodeId),
      routeSlaveSUC: routeSlaveSUC.has(nodeId),
      sucPendingUpdate: sucPendingUpdate.has(nodeId),
      pendingDiscovery: pendingDiscovery.has(nodeId),
      lwr: routes?.lwr ?? null,
      nlwr: routes?.nlwr ?? null
    };
  }
  const ownNodeId = await adapter.get({
    domain: "controller",
    type: "nodeId"
  }, true);
  const ownHomeId = await adapter.get({
    domain: "controller",
    type: "homeId"
  }, true);
  let learnedHomeId = await adapter.get({
    domain: "controller",
    type: "learnedHomeId"
  });
  if (learnedHomeId?.length === 4 && learnedHomeId.every((b) => b === 0)) {
    learnedHomeId = void 0;
  }
  const lastNodeId = await adapter.get({
    domain: "controller",
    type: "lastNodeId"
  }, true);
  const maxNodeId = await adapter.get({
    domain: "controller",
    type: "maxNodeId"
  }, true);
  const reservedId = await adapter.get({
    domain: "controller",
    type: "reservedId"
  }, true);
  const staticControllerNodeId = await adapter.get({
    domain: "controller",
    type: "staticControllerNodeId"
  }, true);
  const sucLastIndex = await adapter.get({
    domain: "controller",
    type: "sucLastIndex"
  }, true);
  const controllerConfiguration = await adapter.get({
    domain: "controller",
    type: "controllerConfiguration"
  }, true);
  const commandClasses = await adapter.get({
    domain: "controller",
    type: "commandClasses"
  }, true);
  const sucUpdateEntries = await adapter.get({
    domain: "controller",
    type: "sucUpdateEntries"
  }, true);
  const applicationData = await adapter.get({
    domain: "controller",
    type: "applicationData"
  });
  const preferredRepeaters = await adapter.get({
    domain: "controller",
    type: "preferredRepeaters"
  }, true);
  const systemState = await adapter.get({
    domain: "controller",
    type: "systemState"
  }, true);
  const watchdogStarted = await adapter.get({
    domain: "controller",
    type: "watchdogStarted"
  }, true);
  const powerLevelNormal = await adapter.get({
    domain: "controller",
    type: "powerLevelNormal"
  }, true);
  const powerLevelLow = await adapter.get({
    domain: "controller",
    type: "powerLevelLow"
  }, true);
  const powerMode = await adapter.get({
    domain: "controller",
    type: "powerMode"
  }, true);
  const powerModeExtintEnable = await adapter.get({
    domain: "controller",
    type: "powerModeExtintEnable"
  }, true);
  const powerModeWutTimeout = await adapter.get({
    domain: "controller",
    type: "powerModeWutTimeout"
  }, true);
  const controller = {
    protocolVersion: info.nvmDescriptor.protocolVersion,
    applicationVersion: info.nvmDescriptor.firmwareVersion,
    ownHomeId: buffer2hex(ownHomeId),
    learnedHomeId: learnedHomeId ? buffer2hex(learnedHomeId) : null,
    nodeId: ownNodeId,
    lastNodeId,
    staticControllerNodeId,
    sucLastIndex,
    controllerConfiguration,
    sucUpdateEntries,
    maxNodeId,
    reservedId,
    systemState,
    watchdogStarted,
    rfConfig: {
      powerLevelNormal,
      powerLevelLow,
      powerMode,
      powerModeExtintEnable,
      powerModeWutTimeout
    },
    preferredRepeaters,
    commandClasses,
    applicationData: (applicationData && Bytes.view(applicationData).toString("hex")) ?? null
  };
  return {
    format: 500,
    meta,
    controller,
    nodes
  };
}
async function jsonToNVM(json, targetSDKVersion) {
  const parsedVersion = (0, import_parse.default)(targetSDKVersion);
  if (!parsedVersion) {
    throw new ZWaveError(`Invalid SDK version: ${targetSDKVersion}`, ZWaveErrorCodes.Argument_Invalid);
  }
  const sharedFileSystem = json.meta?.sharedFileSystem;
  const nvmSize = sharedFileSystem ? ZWAVE_SHARED_NVM_SIZE : ZWAVE_APPLICATION_NVM_SIZE + ZWAVE_PROTOCOL_NVM_SIZE;
  const ret = new Uint8Array(nvmSize);
  const io = new NVMMemoryIO(ret);
  const nvm3 = new NVM3(io);
  await nvm3.erase(json.meta);
  const serializeFile = async (file) => {
    const { key, data } = file.serialize();
    await nvm3.set(key, data);
  };
  let targetApplicationVersion;
  let targetProtocolVersion;
  let targetProtocolFormat;
  const HIGHEST_SUPPORTED_SDK_VERSION = "7.21.0";
  if ((0, import_lte.default)(targetSDKVersion, HIGHEST_SUPPORTED_SDK_VERSION)) {
    targetApplicationVersion = (0, import_parse.default)(targetSDKVersion);
  } else {
    targetApplicationVersion = (0, import_parse.default)(HIGHEST_SUPPORTED_SDK_VERSION);
  }
  if ((0, import_gte2.default)(targetSDKVersion, "7.19.0")) {
    targetProtocolVersion = (0, import_parse.default)("7.19.0");
    targetProtocolFormat = 5;
  } else if ((0, import_gte2.default)(targetSDKVersion, "7.17.0")) {
    targetProtocolVersion = (0, import_parse.default)("7.17.0");
    targetProtocolFormat = 4;
  } else if ((0, import_gte2.default)(targetSDKVersion, "7.15.3")) {
    targetProtocolVersion = (0, import_parse.default)("7.15.3");
    targetProtocolFormat = 3;
  } else if ((0, import_gte2.default)(targetSDKVersion, "7.12.0")) {
    targetProtocolVersion = (0, import_parse.default)("7.12.0");
    targetProtocolFormat = 2;
  } else if ((0, import_gte2.default)(targetSDKVersion, "7.11.0")) {
    targetProtocolVersion = (0, import_parse.default)("7.11.0");
    targetProtocolFormat = 1;
  } else {
    targetProtocolVersion = (0, import_parse.default)("7.0.0");
    targetProtocolFormat = 0;
  }
  const target = cloneDeep(json);
  target.controller.protocolVersion = targetProtocolVersion.format();
  target.format = targetProtocolFormat;
  target.controller.applicationVersion = parsedVersion.format();
  const ApplicationVersionConstructor = sharedFileSystem ? ApplicationVersionFile800 : ApplicationVersionFile;
  const applVersionFile = new ApplicationVersionConstructor({
    format: 0,
    major: targetApplicationVersion.major,
    minor: targetApplicationVersion.minor,
    patch: targetApplicationVersion.patch,
    fileVersion: targetProtocolVersion.format()
    // does not matter for this file
  });
  await serializeFile(applVersionFile);
  const protocolVersionFile = new ProtocolVersionFile({
    format: targetProtocolFormat,
    major: targetProtocolVersion.major,
    minor: targetProtocolVersion.minor,
    patch: targetProtocolVersion.patch,
    fileVersion: targetProtocolVersion.format()
    // does not matter for this file
  });
  await serializeFile(protocolVersionFile);
  {
    const { key, data } = protocolVersionFile.serialize();
    await nvm3.set(key, data);
  }
  const adapter = new NVM3Adapter(nvm3);
  const applTypeFile = new ApplicationTypeFile({
    ...pick(target.controller, [
      "isListening",
      "optionalFunctionality",
      "genericDeviceClass",
      "specificDeviceClass"
    ]),
    fileVersion: target.controller.applicationVersion
  });
  adapter.setFile(applTypeFile);
  const applCCsFile = new ApplicationCCsFile({
    ...pick(target.controller.commandClasses, [
      "includedInsecurely",
      "includedSecurelyInsecureCCs",
      "includedSecurelySecureCCs"
    ]),
    fileVersion: target.controller.applicationVersion
  });
  adapter.setFile(applCCsFile);
  target.controller.rfConfig ??= {
    rfRegion: RFRegion["Default (EU)"],
    txPower: 0,
    measured0dBm: 3.3,
    enablePTI: null,
    maxTXPower: null,
    nodeIdType: null
  };
  if ((0, import_gte2.default)(targetSDKVersion, "7.15.3")) {
    target.controller.rfConfig.enablePTI ??= 0;
    target.controller.rfConfig.maxTXPower ??= 14;
  }
  if ((0, import_gte2.default)(targetSDKVersion, "7.21.0")) {
    target.controller.rfConfig.nodeIdType ??= NodeIDType.Short;
  }
  const applRFConfigFile = new ApplicationRFConfigFile({
    ...pick(target.controller.rfConfig, [
      "rfRegion",
      "txPower",
      "measured0dBm"
    ]),
    enablePTI: target.controller.rfConfig.enablePTI ?? void 0,
    maxTXPower: target.controller.rfConfig.maxTXPower ?? void 0,
    nodeIdType: target.controller.rfConfig.nodeIdType ?? void 0,
    fileVersion: target.controller.applicationVersion
  });
  adapter.setFile(applRFConfigFile);
  if (target.controller.applicationData) {
    await adapter.set({ domain: "controller", type: "applicationData" }, Bytes.from(target.controller.applicationData, "hex"));
  }
  if (target.controller.applicationName && target.meta?.sharedFileSystem) {
    await adapter.set({ domain: "controller", type: "applicationName" }, target.controller.applicationName);
  }
  const nodeInfoExists = /* @__PURE__ */ new Set();
  const lrNodeInfoExists = /* @__PURE__ */ new Set();
  const virtualNodeIds = /* @__PURE__ */ new Set();
  const appRouteLock = /* @__PURE__ */ new Set();
  const routeSlaveSUC = /* @__PURE__ */ new Set();
  const sucPendingUpdate = /* @__PURE__ */ new Set();
  const pendingDiscovery = /* @__PURE__ */ new Set();
  adapter.setFile(new ProtocolRouteCacheExistsNodeMaskFile({
    nodeIds: [],
    fileVersion: target.controller.protocolVersion
  }));
  for (const [id, node] of Object.entries(target.nodes)) {
    const nodeId = parseInt(id);
    if (!nodeHasInfo(node)) {
      virtualNodeIds.add(nodeId);
      continue;
    } else {
      nodeInfoExists.add(nodeId);
      if (node.isVirtual)
        virtualNodeIds.add(nodeId);
      if (node.appRouteLock)
        appRouteLock.add(nodeId);
      if (node.routeSlaveSUC)
        routeSlaveSUC.add(nodeId);
      if (node.sucPendingUpdate)
        sucPendingUpdate.add(nodeId);
      if (node.pendingDiscovery)
        pendingDiscovery.add(nodeId);
    }
    await adapter.set({ domain: "node", nodeId, type: "info" }, nvmJSONNodeToNodeInfo(nodeId, node));
    if (node.lwr || node.nlwr) {
      await adapter.set({ domain: "node", nodeId, type: "routes" }, {
        lwr: node.lwr ?? getEmptyRoute(),
        nlwr: node.nlwr ?? getEmptyRoute()
      });
    }
  }
  await adapter.set({ domain: "controller", type: "nodeIds" }, [...nodeInfoExists]);
  if (target.lrNodes) {
    for (const [id, node] of Object.entries(target.lrNodes)) {
      const nodeId = parseInt(id);
      lrNodeInfoExists.add(nodeId);
      await adapter.set({ domain: "lrnode", nodeId, type: "info" }, nvmJSONLRNodeToLRNodeInfo(nodeId, node));
    }
  }
  await adapter.set({ domain: "controller", type: "lrNodeIds" }, [...lrNodeInfoExists]);
  if (targetProtocolFormat >= 3) {
    target.controller.lastNodeIdLR ??= 255;
    target.controller.maxNodeIdLR ??= 0;
    target.controller.reservedIdLR ??= 0;
    target.controller.primaryLongRangeChannelId ??= 0;
    target.controller.dcdcConfig ??= 255;
  }
  adapter.setFile(new ControllerInfoFile(nvmJSONControllerToFileOptions(target.controller)));
  await adapter.set({ domain: "controller", type: "appRouteLock" }, [...appRouteLock]);
  await adapter.set({ domain: "controller", type: "routeSlaveSUC" }, [...routeSlaveSUC]);
  await adapter.set({ domain: "controller", type: "sucPendingUpdate" }, [...sucPendingUpdate]);
  await adapter.set({ domain: "controller", type: "virtualNodeIds" }, [...virtualNodeIds]);
  await adapter.set({ domain: "controller", type: "pendingDiscovery" }, [...pendingDiscovery]);
  if (target.controller.preferredRepeaters?.length) {
    await adapter.set({ domain: "controller", type: "preferredRepeaters" }, target.controller.preferredRepeaters);
  }
  await adapter.set({ domain: "controller", type: "sucUpdateEntries" }, target.controller.sucUpdateEntries);
  await adapter.commit();
  await io.close();
  return ret;
}
async function jsonToNVM500(json, protocolVersion) {
  const impl = nvm500Impls.find((p) => p.protocolVersions.includes(protocolVersion) && p.name.toLowerCase().startsWith(json.meta.library));
  if (!impl) {
    throw new ZWaveError(`Did not find a matching implementation for protocol version ${protocolVersion} and library ${json.meta.library}. To convert 500-series NVMs, both the source and the target controller must be using Z-Wave SDK 6.61 or higher.`, ZWaveErrorCodes.NVM_NotSupported);
  }
  const { layout, nvmSize } = resolveLayout(impl.layout);
  const ret = new Uint8Array(nvmSize);
  const io = new NVMMemoryIO(ret);
  const nvm = new NVM500(io);
  await nvm.erase({
    layout,
    nvmSize,
    library: impl.library,
    nvmDescriptor: {
      ...pick(json.meta, [
        "manufacturerID",
        "productType",
        "productID",
        "firmwareID"
      ]),
      // Override the protocol version with the specified one
      protocolVersion,
      firmwareVersion: json.controller.applicationVersion
    }
  });
  const adapter = new NVM500Adapter(nvm);
  const c = json.controller;
  await adapter.set({ domain: "controller", type: "homeId" }, Bytes.from(c.ownHomeId.replace(/^0x/, ""), "hex"));
  await adapter.set({ domain: "controller", type: "learnedHomeId" }, c.learnedHomeId ? Bytes.from(c.learnedHomeId.replace(/^0x/, ""), "hex") : void 0);
  await adapter.set({ domain: "controller", type: "nodeId" }, c.nodeId);
  await adapter.set({ domain: "controller", type: "lastNodeId" }, c.lastNodeId);
  await adapter.set({ domain: "controller", type: "maxNodeId" }, c.maxNodeId);
  await adapter.set({ domain: "controller", type: "reservedId" }, c.reservedId);
  await adapter.set({ domain: "controller", type: "staticControllerNodeId" }, c.staticControllerNodeId);
  await adapter.set({ domain: "controller", type: "controllerConfiguration" }, c.controllerConfiguration);
  await adapter.set({ domain: "controller", type: "sucUpdateEntries" }, c.sucUpdateEntries);
  await adapter.set({ domain: "controller", type: "sucLastIndex" }, c.sucLastIndex);
  await adapter.set({ domain: "controller", type: "systemState" }, c.systemState);
  await adapter.set({ domain: "controller", type: "watchdogStarted" }, c.watchdogStarted);
  await adapter.set({ domain: "controller", type: "powerLevelNormal" }, c.rfConfig.powerLevelNormal);
  await adapter.set({ domain: "controller", type: "powerLevelLow" }, c.rfConfig.powerLevelLow);
  await adapter.set({ domain: "controller", type: "powerMode" }, c.rfConfig.powerMode);
  await adapter.set({ domain: "controller", type: "powerModeExtintEnable" }, c.rfConfig.powerModeExtintEnable);
  await adapter.set({ domain: "controller", type: "powerModeWutTimeout" }, c.rfConfig.powerModeWutTimeout);
  await adapter.set({ domain: "controller", type: "preferredRepeaters" }, c.preferredRepeaters);
  await adapter.set({ domain: "controller", type: "commandClasses" }, c.commandClasses);
  if (c.applicationData) {
    await adapter.set({ domain: "controller", type: "applicationData" }, Bytes.from(c.applicationData, "hex"));
  }
  const appRouteLock = [];
  const routeSlaveSUC = [];
  const pendingDiscovery = [];
  const sucPendingUpdate = [];
  const virtualNodeIds = [];
  for (const [id, node] of Object.entries(json.nodes)) {
    const nodeId = parseInt(id);
    if (!nodeHasInfo(node)) {
      virtualNodeIds.push(nodeId);
      continue;
    }
    if (node.appRouteLock)
      appRouteLock.push(nodeId);
    if (node.routeSlaveSUC)
      routeSlaveSUC.push(nodeId);
    if (node.pendingDiscovery)
      pendingDiscovery.push(nodeId);
    if (node.sucPendingUpdate)
      sucPendingUpdate.push(nodeId);
    await adapter.set({ domain: "node", nodeId, type: "info" }, {
      nodeId,
      ...node
    });
    if (node.lwr || node.nlwr) {
      await adapter.set({ domain: "node", nodeId, type: "routes" }, {
        lwr: node.lwr ?? void 0,
        nlwr: node.nlwr ?? void 0
      });
    }
  }
  await adapter.set({ domain: "controller", type: "appRouteLock" }, [...appRouteLock]);
  await adapter.set({ domain: "controller", type: "routeSlaveSUC" }, [...routeSlaveSUC]);
  await adapter.set({ domain: "controller", type: "sucPendingUpdate" }, [...sucPendingUpdate]);
  await adapter.set({ domain: "controller", type: "virtualNodeIds" }, [...virtualNodeIds]);
  await adapter.set({ domain: "controller", type: "pendingDiscovery" }, [...pendingDiscovery]);
  await adapter.commit();
  await io.close();
  return ret;
}

// src/script.ts
var txtNVMType = document.getElementById("nvm_type");
var jsonEditor = document.getElementById("json");
var txtProtocolVersion = document.getElementById(
  "protocol_version"
);
var lblErrorMessage = document.getElementById(
  "error-message"
);
var btnLoad = document.getElementById("btnLoad");
var fileInput = document.getElementById("file");
var btnSave = document.getElementById("btnSave");
btnLoad.onclick = () => fileInput.click();
fileInput.addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const content = e.target.result;
      parseNVM(new Uint8Array(content));
    };
    reader.readAsArrayBuffer(file);
  }
});
async function parseNVM(buffer) {
  let json;
  let type;
  try {
    json = await nvmToJSON(buffer);
    type = "700/800 series";
  } catch (e) {
    if (isZWaveError(e) && e.code === ZWaveErrorCodes.NVM_InvalidFormat) {
      try {
        json = await nvm500ToJSON(buffer);
        type = "500 series";
      } catch (e2) {
        if (isZWaveError(e2) && e2.code === ZWaveErrorCodes.NVM_InvalidFormat) {
          lblErrorMessage.innerText = e2.message;
          return;
        }
        lblErrorMessage.innerText = e2.message;
        return;
      }
    } else if (isZWaveError(e) && e.code === ZWaveErrorCodes.NVM_NotSupported && typeof e.context === "object" && e.context && "protocolFileFormat" in e.context && typeof e.context.protocolFileFormat === "number") {
      lblErrorMessage.innerText = "Unsupported protocol file format: " + e.context.protocolFileFormat;
      return;
    } else {
      lblErrorMessage.innerText = e.message;
      return;
    }
  }
  lblErrorMessage.innerText = "";
  txtNVMType.value = type;
  txtProtocolVersion.value = json.controller.protocolVersion;
  jsonEditor.value = JSON.stringify(json, null, 2);
}
async function saveNVM() {
  const protocolVersion = txtProtocolVersion.value;
  const versionIs500 = /^\d\.\d+$/.test(protocolVersion);
  let json;
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
  const nvm = versionIs500 ? await jsonToNVM500(json, protocolVersion) : await jsonToNVM(json, protocolVersion);
  const blob = new Blob([nvm], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nvm_${protocolVersion}.bin`;
  a.click();
  URL.revokeObjectURL(url);
}
btnSave.onclick = saveNVM;
/*! Bundled license information:

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
//# sourceMappingURL=script.js.map
