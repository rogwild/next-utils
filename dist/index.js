Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var qs = require('qs');
var React = require('react');
var reactTable = require('react-table');
var reactRedux = require('react-redux');
var toolkit = require('@reduxjs/toolkit');
var transitionComponent = require('transition-component');
var require$$0 = require('react-dom');
var web = require('@react-spring/web');
var react = require('@use-gesture/react');
var Calendar = require('react-calendar');
var ReactMarkdown = require('react-markdown');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var qs__default = /*#__PURE__*/_interopDefaultLegacy(qs);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var Calendar__default = /*#__PURE__*/_interopDefaultLegacy(Calendar);
var ReactMarkdown__default = /*#__PURE__*/_interopDefaultLegacy(ReactMarkdown);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

var BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
var combineHeaders = function (_a) {
    var withAuth = _a.withAuth;
    var headers = {};
    if (withAuth) {
        var token = localStorage.getItem("jwt");
        headers.Authorization = "Bearer ".concat(token);
    }
    return headers;
};
var isObject = function (data) { return data && typeof data === "object"; };
var isArray = function (data) { return data && Array.isArray(data); };
var snakeToCamel = function (str) {
    return str.replace(/([-_][a-z])/gi, function (char) {
        return char.toUpperCase().replace("-", "").replace("_", "");
    });
};
var flatItemAttributes = function (data) {
    if (!(data === null || data === void 0 ? void 0 : data.attributes))
        return data;
    return __assign({ id: data === null || data === void 0 ? void 0 : data.id }, data.attributes);
};
var transformEntriesInObj = function (item) {
    if (isObject(item) && !isArray(item)) {
        var entries = Object.entries(item).map(function (entry) {
            var key = snakeToCamel(entry[0]);
            var value = entry[1];
            if (isObject(value)) {
                value = transformEntriesInObj(value);
            }
            else if (isArray(value)) {
                value = value.map(function (elem) { return transformEntriesInObj({ item: elem }); });
            }
            return [key, value];
        });
        return Object.fromEntries(entries);
    }
    return item;
};
var transformResponseItem$1 = function (resItem) {
    if (isArray(resItem)) {
        return resItem.map(function (item) { return transformResponseItem$1(item); });
    }
    if (isObject(resItem)) {
        if (isArray(resItem.data)) {
            resItem = __spreadArray([], __read(resItem.data), false);
        }
        else if (isObject(resItem.data)) {
            resItem = transformEntriesInObj(flatItemAttributes(resItem.data));
        }
        else if (resItem.data === null) {
            resItem = null;
        }
        else {
            resItem = transformEntriesInObj(flatItemAttributes(resItem));
        }
        if (isObject(resItem) && isObject(resItem.meta)) {
            resItem._meta = resItem.meta;
        }
        for (var key in resItem) {
            resItem[key] = transformResponseItem$1(resItem[key]);
        }
        return resItem;
    }
    return resItem;
};
var Api = /** @class */ (function () {
    function Api(url) {
        this.baseUrl = url || BACKEND_URL;
    }
    Api.prototype.request = function (_a) {
        var model = _a.model, query = _a.query, _b = _a.method, method = _b === void 0 ? "GET" : _b, data = _a.data, withAuth = _a.withAuth, headers = _a.headers, _c = _a.id, id = _c === void 0 ? "" : _c; _a.notifyError;
        var stringifiedQuery = qs.stringify(query, {
            encodeValuesOnly: true,
        });
        var passHeaders = __assign(__assign({}, headers), combineHeaders({ withAuth: withAuth }));
        return axios__default["default"]({
            url: "".concat(this.baseUrl, "/api/").concat(model, "/").concat(id, "?").concat(stringifiedQuery),
            headers: passHeaders,
            method: method,
            data: data,
        })
            .then(function (res) { return transformResponseItem$1(res.data); })
            .catch(function (error) {
            var _a, _b, _c, _d;
            ((_c = (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.message) || (error === null || error === void 0 ? void 0 : error.message);
            console.log("error", method, model, (_d = error.response) === null || _d === void 0 ? void 0 : _d.data);
        });
    };
    return Api;
}());

var _a;
var getFileUrl = function (obj, options) {
    var _a, _b;
    if (options === void 0) { options = {}; }
    var size = options.size, BACKEND_URL = options.BACKEND_URL;
    if (!obj) {
        return null;
    }
    var url = size ? ((_b = (_a = obj.formats) === null || _a === void 0 ? void 0 : _a[size]) === null || _b === void 0 ? void 0 : _b.url) || obj.url : obj.url;
    var httpsExists = url.match(/^https?:\/\//);
    if (httpsExists) {
        return url;
    }
    return "".concat(BACKEND_URL || "").concat(url);
};
/**
 * Will be deprecated, use getFileUrl
 */
var getImageUrl = getFileUrl;
var transformPageBlock = function (block, transformers) {
    var key = block === null || block === void 0 ? void 0 : block._Component;
    if (!(transformers === null || transformers === void 0 ? void 0 : transformers[key])) {
        return block;
    }
    return transformers[key](block);
};
var appendFilesToFormData = function (formData, files) {
    var e_1, _a, e_2, _b;
    if (Object.keys(files).length) {
        try {
            for (var _c = __values(Object.keys(files)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                if (Array.isArray(files[key])) {
                    try {
                        for (var _e = (e_2 = void 0, __values(files[key].entries())), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var _g = __read(_f.value, 2), _ = _g[0], file = _g[1];
                            formData.append("files.".concat(key), file);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                else {
                    formData.append("files.".concat(key), files[key]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
};
var unlunkRemovedFiles = function (_a) {
    var e_3, _b;
    var _c;
    var data = _a.data;
    var sanitized;
    if (typeof data === "object") {
        sanitized = {};
        try {
            for (var _d = __values(Object.keys(data)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var key = _e.value;
                // If we should unlink files from model
                var sanitizedKey = key;
                var priority = 1;
                var splitted = key.split("].");
                if (splitted.length > 1) {
                    priority = 2;
                    sanitizedKey = splitted[splitted.length - 1];
                }
                if (Array.isArray(data[key])) {
                    if ((_c = sanitized[sanitizedKey]) === null || _c === void 0 ? void 0 : _c.length) {
                        if (priority !== 2) {
                            continue;
                        }
                    }
                    sanitized[sanitizedKey] = data[key].map(function (item) {
                        return unlunkRemovedFiles({ data: item });
                    });
                }
                else {
                    sanitized[sanitizedKey] = data[key];
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    else {
        sanitized = data;
    }
    return sanitized;
};
var removeEmptyFields = function (_a) {
    var e_4, _b, e_5, _c;
    var data = _a.data, passKey = _a.passKey, files = _a.files;
    var modified;
    if (typeof data === "object" && data !== null) {
        modified = {};
        if (Array.isArray(data)) {
            modified = [];
            try {
                for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var element = data_1_1.value;
                    modified.push(removeEmptyFields({ data: element, passKey: passKey, files: files }));
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_b = data_1.return)) _b.call(data_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        else {
            try {
                for (var _d = __values(Object.keys(data)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var key = _e.value;
                    if (data[key] === "" && key !== "publishedAt") {
                        continue;
                    }
                    modified[key] = removeEmptyFields({
                        data: data[key],
                        passKey: "".concat(passKey ? "".concat(passKey, ".") : "").concat(key),
                        files: files,
                    });
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
    }
    else {
        modified = data;
    }
    return modified;
};
(_a = {},
    _a["page-blocks.main-block"] = function (block) {
        var _a;
        return __assign(__assign({}, block), { images: ((_a = block === null || block === void 0 ? void 0 : block.images) === null || _a === void 0 ? void 0 : _a.map(getImageUrl)) || null });
    },
    _a);
/**
 * Get data for Next.js page form Strapi API
 *
 * @param additionalBlocks - ex. ['header', 'footer']
 * @param transformers - ex.
 * { [`page-blocks.main-block`]: (block) => {
 *   return {
 *      ...block,
 *      images: block?.images?.map((image) =>
 *              getImageUrl(image, {BACKEND_URL: "http://localhost:1337"})) || null,
 *            };
 *    },
 * }
 */
var getPageData = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var url, locale, _a, keys, page, _b, transformers, _c, additionalBlocks, query, client, additionalPopulate, additionalBlocks_1, additionalBlocks_1_1, block, filledQuery, res, pageBlocks, additionalBlocksData, additionalBlocks_2, additionalBlocks_2_1, block;
    var e_6, _d, e_7, _e;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                url = params.url, locale = params.locale, _a = params.keys, keys = _a === void 0 ? [] : _a, page = params.page, _b = params.transformers, transformers = _b === void 0 ? {} : _b, _c = params.additionalBlocks, additionalBlocks = _c === void 0 ? [] : _c, query = params.query;
                client = new Api(url ? url : undefined);
                additionalPopulate = {};
                if (additionalBlocks) {
                    try {
                        for (additionalBlocks_1 = __values(additionalBlocks), additionalBlocks_1_1 = additionalBlocks_1.next(); !additionalBlocks_1_1.done; additionalBlocks_1_1 = additionalBlocks_1.next()) {
                            block = additionalBlocks_1_1.value;
                            additionalPopulate[block] = {
                                populate: __assign({}, keys.reduce(function (a, b) {
                                    var _a;
                                    return (__assign(__assign({}, a), (_a = {}, _a[b] = { populate: "*" }, _a)));
                                }, {})),
                            };
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (additionalBlocks_1_1 && !additionalBlocks_1_1.done && (_d = additionalBlocks_1.return)) _d.call(additionalBlocks_1);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                }
                filledQuery = __assign({ locale: locale, populate: __assign({ page_blocks: {
                            populate: __assign({}, keys.reduce(function (a, b) {
                                var _a;
                                return (__assign(__assign({}, a), (_a = {}, _a[b] = { populate: "*" }, _a)));
                            }, {})),
                        } }, additionalPopulate) }, query);
                return [4 /*yield*/, client.request({
                        model: page,
                        query: filledQuery,
                    })];
            case 1:
                res = _g.sent();
                pageBlocks = (_f = res === null || res === void 0 ? void 0 : res.pageBlocks) === null || _f === void 0 ? void 0 : _f.map(function (block) {
                    return transformPageBlock(block, transformers);
                });
                additionalBlocksData = {};
                try {
                    for (additionalBlocks_2 = __values(additionalBlocks), additionalBlocks_2_1 = additionalBlocks_2.next(); !additionalBlocks_2_1.done; additionalBlocks_2_1 = additionalBlocks_2.next()) {
                        block = additionalBlocks_2_1.value;
                        block; //?
                        if (res[block]) {
                            res[block];
                            additionalBlocksData[block] = transformPageBlock(__assign(__assign({}, res[block]), { _Component: block }), transformers);
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (additionalBlocks_2_1 && !additionalBlocks_2_1.done && (_e = additionalBlocks_2.return)) _e.call(additionalBlocks_2);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
                return [2 /*return*/, { pageBlocks: pageBlocks, res: res, additionalBlocks: additionalBlocksData }];
        }
    });
}); };
var handleApiError = function (error) {
    var _a;
    return ({
        event: "error",
        title: error
            ? ((_a = error.data) === null || _a === void 0 ? void 0 : _a.error.message) || error.message
            : "Something went wrong :(",
    });
};
var ApiClient = Api;
var transformResponseItem = transformResponseItem$1;

var apiUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getFileUrl: getFileUrl,
    getImageUrl: getImageUrl,
    transformPageBlock: transformPageBlock,
    appendFilesToFormData: appendFilesToFormData,
    unlunkRemovedFiles: unlunkRemovedFiles,
    removeEmptyFields: removeEmptyFields,
    getPageData: getPageData,
    handleApiError: handleApiError,
    ApiClient: ApiClient,
    transformResponseItem: transformResponseItem
});

var NUMBERS_AFTER_ZERO = 4;
var hasZeroAfterDot = function (price) { return /0[.,](0+)[0-9]+/.test(price); };
var getCountAfterDot = function (price) {
    return price.toString().match(/0[.,](0*)[0-9]+/)[1].length + NUMBERS_AFTER_ZERO;
};
var formatPercent = function (number) {
    return number ? "".concat(number.toFixed(2)) : "0";
};
var allowedImageExtensions = ["png", "jpeg", "webp", "tiff"];
var parseMimeType$1 = function (mime) {
    if (!mime)
        return {};
    var splittedMime = mime === null || mime === void 0 ? void 0 : mime.split("/");
    var type = splittedMime[0];
    var ext = splittedMime[1];
    var renderType = type;
    if (type === "image" && !allowedImageExtensions.includes(ext)) {
        renderType = "file";
    }
    if (type !== "image" && type !== "video") {
        renderType = "file";
    }
    return { type: type, ext: ext, renderType: renderType };
};
var shortenAddress = function (address, symbols) {
    if (symbols === void 0) { symbols = [6, 4]; }
    if (!(address === null || address === void 0 ? void 0 : address.length)) {
        return "";
    }
    var firstPart = address.slice(0, symbols[0]);
    var secondPart = address.slice(-symbols[1]);
    return "".concat(firstPart, "...").concat(secondPart);
};

var formatters = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hasZeroAfterDot: hasZeroAfterDot,
    getCountAfterDot: getCountAfterDot,
    formatPercent: formatPercent,
    parseMimeType: parseMimeType$1,
    shortenAddress: shortenAddress
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _unsupportedIterableToArray$3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest();
}

function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$e(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$e(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * Filter function by text content
 *
 * @param {array} rows - an array of sorted values ​​from the `useTable ()` hook
 * @param {string} accessor - filtering key
 * @param {string} filterValue - the passed filtering parameter by which the comparison is made
 * @returns {array} filtered array of values
 */
var text = function text(rows, accessor, filterValue) {
  return rows.filter(function (row) {
    var rowValue = row[prefix][accessor];
    return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true;
  });
};
var baseFilters = {
  text: text
};

/**
 *
 * Column element, describes how useTable should configure the returned `headerGroups` array
 * @typedef ColumnItemObject
 * @type {object}
 * @property {string} Header - column name. Will be displayed in the component `Sorting → SortButton → P`
 * @property {string} accessor - the key of the object in the iterable object of the `data` array. A value is taken from it to pass it to the displayed component
 * @property {boolean} [hidden] - parameter that affects the display of the component in `Sorting`. If the value is `false`, then the component in` Sorting` will be hidden
 * @property {function} [Filter] - component to render in `Sorting`
 * @property {string} [filter] - the name of the filtering function must match the name of the function passed to `useLookupTable ({config.filterTypes: {...}})`. Fires when clicking on an element in `Sorting`
 * @property {string} [className] - `useStyleRewriter` classes for substitution in the component` Sorting → SortButton`
 */

/**
 * Hook seed configuration object
 * @typedef HookConfig
 * @type {object}
 * @property {{ id: string }[]} sortBy - the `accessor`'s array by which to sort the data
 * @property {{ id: string, value: any }[]>} filters - array of applied filters
 * @property {string} globalFilter - initial filter value
 * @property {{ rowId: string }[]} selectedRowIds - an array with objects holding the selected table rows
 * @property {boolean} useRowSelect - a parameter that determines whether the method for selecting an item in the table should be exported. If `true`, in addition to the columns from `columns`, one more will be added at the very beginning. Which will trigger the work with the selection of elements. They can be obtained in `rows → row.isSelected`. And call it via `rows → row.toggleRowSelected(Boolean)`.
 * @property {{ string: function }} filterTypes - object with functions for filtering. Example `{ filterByName: (rows, accessor, filterValue) => rows.filter(r => r[accessor] !== filterValue) }`.
 */

/**
 * Data returned from the hook
 * @typedef ReturnObject
 * @type {object}
 * @property {string} inputValue - the value from the input field. Used in the component, since the form uses `onInputChange`
 * @property {function} onInputChange - filtering state change function
 * @property {array} headerGroups - array of column header parameters. Also contains handlers for sorting,filtering - [`setFilter`](https://react-table.tanstack.com/docs/api/useFilters#instance-properties), [`toggleSortBy`](https://react-table.tanstack.com/docs/api/useSortBy#instance-properties).
 * @property {array} rows - array of transformed [data](https://react-table.tanstack.com/docs/api/useTable#row-properties)
 * @property {function} prepareRow - [data conversion function](https://react-table.tanstack.com/docs/api/useTable#instance-properties) to prevent re-rendering
 * @property {object} state - [state of the hook](https://react-table.tanstack.com/docs/api/useTable#instance-properties)
 * @property {function} toggleRowExpanded - [function](https://react-table.tanstack.com/docs/api/useExpanded#instance-properties) for opening nested data
 */

/**
 * Hook that transforms data suitable for display in a table. Adds handlers to work with sorting, filtering and searching.
 * @param {array.<ColumnItemObject>} columns - An array of objects `ColumnItemObject` that characterizes the display of columns for sorting and filtering items. It combines rendering, filtering and sorting parameters.
 * @param {object[]} data - An array of data to be prepared for the table.
 * @param {HookConfig} [config] - A hook configuration object and setting the initial value of the data used in the hook functions. Used when working with realtime data. Since if you do not set `initialState`, then when the input data changes, filtering and sorting take an init value
 * @returns {ReturnObject}
 */
var useLookupTable = function useLookupTable(_ref) {
  var _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? [] : _ref$columns,
    _ref$data = _ref.data,
    passedData = _ref$data === void 0 ? [] : _ref$data,
    _ref$memoUpdateFunc = _ref.memoUpdateFunc,
    memoUpdateFunc = _ref$memoUpdateFunc === void 0 ? function (passedData) {
      return passedData.length;
    } : _ref$memoUpdateFunc,
    getRowId = _ref.getRowId,
    _ref$config = _ref.config,
    config = _ref$config === void 0 ? {
      selectedRowIds: []
    } : _ref$config,
    _ref$initialFiltersSt = _ref.initialFiltersState,
    initialFiltersState = _ref$initialFiltersSt === void 0 ? [] : _ref$initialFiltersSt;
  var data = React.useMemo(function () {
    return passedData;
  }, [memoUpdateFunc(passedData)]);
  var _useState = React.useState(config.sortBy),
    _useState2 = _slicedToArray(_useState, 2),
    sortBy = _useState2[0],
    setSortBy = _useState2[1];
  var _useState3 = React.useState(initialFiltersState),
    _useState4 = _slicedToArray(_useState3, 2),
    filters = _useState4[0],
    setFilters = _useState4[1];
  var _useState5 = React.useState(config.globalFilter || ""),
    _useState6 = _slicedToArray(_useState5, 2),
    localGlobalFilter = _useState6[0],
    setLocalGlobalFilter = _useState6[1];
  var _useState7 = React.useState(config.selectedRowIds || undefined),
    _useState8 = _slicedToArray(_useState7, 2),
    localSelectedRowIds = _useState8[0],
    setLocalSelectedRowIds = _useState8[1];
  React.useMemo(function () {
    var _config$useRowSelect;
    return (_config$useRowSelect = config.useRowSelect) !== null && _config$useRowSelect !== void 0 ? _config$useRowSelect : false;
  }, []);

  /**
   * State memoization to prevent data erasure when `data` changes
   * */
  var initialState = React.useMemo(function () {
    var state = {};
    if (sortBy) state.sortBy = sortBy;
    if (filters) state.filters = filters;
    if (localGlobalFilter) state.globalFilter = localGlobalFilter;
    if (localSelectedRowIds) state.selectedRowIds = localSelectedRowIds;
    return state;
  }, [sortBy, filters, localSelectedRowIds]);
  var filterTypes = React.useMemo(function () {
    return _objectSpread$e(_objectSpread$e({}, baseFilters), config.filterTypes);
  }, []);
  React.useEffect(function () {
    if (data.length && config.selectedRowIds) {
      setLocalSelectedRowIds(config.selectedRowIds);
    }
  }, [data]);
  var tableInstance = reactTable.useTable({
    columns: columns,
    data: data,
    filterTypes: filterTypes,
    initialState: initialState,
    getRowId: getRowId
  }, reactTable.useGlobalFilter, reactTable.useFilters, reactTable.useSortBy, reactTable.useExpanded, reactTable.useRowSelect);
  var headerGroups = tableInstance.headerGroups,
    rows = tableInstance.rows,
    setGlobalFilter = tableInstance.setGlobalFilter,
    prepareRow = tableInstance.prepareRow,
    toggleRowExpanded = tableInstance.toggleRowExpanded,
    getTableBodyProps = tableInstance.getTableBodyProps,
    getTableProps = tableInstance.getTableProps,
    state = tableInstance.state,
    toggleAllRowsSelected = tableInstance.toggleAllRowsSelected;

  /**
   * Save `isSelected` IDs state for real-data rendering
   */
  React.useEffect(function () {
    var foundSelected = false;
    if (!rows.length) {
      return;
    }
    var selected = {};
    rows === null || rows === void 0 ? void 0 : rows.map(function (row) {
      selected[row.index] = row === null || row === void 0 ? void 0 : row.isSelected;
      foundSelected = true;
    });
    if (foundSelected) {
      setLocalSelectedRowIds(selected);
    }
    if (!foundSelected) {
      setLocalSelectedRowIds({});
    }
  }, [state]);

  /**
   * Save `isSorted` value for real-data rendering
   */
  React.useEffect(function () {
    var foundSorted = false;
    if (!rows.length) {
      return;
    }
    headerGroups[0].headers.map(function (header) {
      if (header !== null && header !== void 0 && header.isSorted) {
        setSortBy([{
          id: header.id,
          desc: !!header.isSortedDesc
        }]);
        foundSorted = true;
      }
    });
    if (!foundSorted) {
      setSortBy([]);
    }
  }, [rows]);

  /**
   * Save `filterValue` for real-data rendering
   */

  React.useEffect(function () {
    var foundFiltered = false;
    if (!rows.length) {
      return;
    }
    headerGroups[0].headers.map(function (header) {
      if (header.filterValue) {
        setFilters([{
          id: header.id,
          value: header.filterValue
        }]);
        foundFiltered = true;
      }
    });
    if (!foundFiltered) setFilters([]);
  }, [rows]);
  var _useState9 = React.useState(state.globalFilter),
    _useState10 = _slicedToArray(_useState9, 2),
    inputValue = _useState10[0],
    setInputValue = _useState10[1];
  var onGlobalFilterChange = function onGlobalFilterChange(value) {
    setGlobalFilter(value || undefined);
  };
  var onInputChange = function onInputChange(e) {
    if (config.onInputChange) {
      config.onInputChange(e.target.value);
    }
    setInputValue(e.target.value);
    onGlobalFilterChange(e.target.value);
    setLocalGlobalFilter(e.target.value);
  };
  return {
    inputValue: inputValue,
    onInputChange: onInputChange,
    headerGroups: headerGroups,
    rows: rows,
    prepareRow: prepareRow,
    state: state,
    getTableBodyProps: getTableBodyProps,
    getTableProps: getTableProps,
    toggleRowExpanded: toggleRowExpanded,
    toggleAllRowsSelected: toggleAllRowsSelected
  };
};

/**
 * A function that creates a valid documentation item structure for using in a `Storybook`, section` ArgsTable`.
 *
 * export default {
 *    component: "NameOfCompOrFunction",
 *    title: "TitleOfComponent",
 *    argTypes: {*it will be here*}
 * }
 *
 * @param {String} title - Variable name
 * @param {String} description - Variable description
 * @param {String} type - Variable type in string `(Array | Object | String | Boolean)`
 * @param {String} detail - The structure of the passed argument with a description of the types. Supported by `Markdown`. For example:
 *    "Header: String,\n
 *     accessor: String,\n
 *     [hidden]: Boolean,\n
 *     [Filter]: Function,\n
 *     [filter]: String,\n
 *     [className]: String".
 * @param {String} defaultValue - The default value will be in the table in the `Default` column
 * @param {Boolean} isRequired - Required field or not
 * @returns {Object}
 */
function createArgDocumentation(_ref2) {
  var title = _ref2.title,
    description = _ref2.description,
    type = _ref2.type,
    detail = _ref2.detail,
    defaultValue = _ref2.defaultValue,
    _ref2$isRequired = _ref2.isRequired,
    isRequired = _ref2$isRequired === void 0 ? false : _ref2$isRequired;
  var documentation = _defineProperty({}, title, {
    description: description,
    table: {
      type: {
        summary: type,
        detail: detail
      },
      defaultValue: {
        summary: defaultValue,
        detail: undefined
      }
    },
    type: {
      name: type,
      required: isRequired
    }
  });
  return documentation;
}

/**
 * `columns` documentation for `Storybook`
 */
var columnsDoc = createArgDocumentation({
  title: "columns",
  description: "An array of objects `ColumnItemObject` that characterizes the display of columns for sorting and filtering items. It combines rendering, filtering and sorting parameters.",
  type: "array",
  detail: "Header: string,\naccessor: string,\n[hidden]: Boolean,\n[Filter]: Function,\n[filter]: string,\n[className]: string",
  defaultValue: "[]",
  isRequired: true
});

/**
 * `data` documentation for `Storybook`
 */
var dataDoc = createArgDocumentation({
  title: "data",
  description: "An array of objects",
  type: "array",
  detail: "Any type of arrays, where placed objects",
  defaultValue: "[]",
  isRequired: true
});

/**
 * `config` documentation for `Storybook`
 */
var configDoc = createArgDocumentation({
  title: "config",
  description: "A hook configuration object and setting the initial value of the data used in the hook functions. Used when working with realtime data. Since if you do not set `initialState`, then when the input data changes, filtering and sorting take an init value",
  type: "object",
  detail: "sortBy: [{ id: string }],\nfilters: [{ id: string, value: any }],\nglobalFilter: string,\nselectedRowIds: [{ rowId: string }],\nuseRowSelect: boolean,\nfilterTypes: { string: function }",
  defaultValue: "{ selectedRowIds: [] }",
  isRequired: false
});

/**
 * `return` documentation for `Storybook`
 */
var returnDoc = createArgDocumentation({
  title: "return",
  description: "Object returned from the hook. All information on the returned data can be found in the documentation React Table (https://react-table.tanstack.com/docs/api/overview), by entering the corresponding key in the search (`onInputChange`, `headerGroups`).",
  type: "object",
  detail: "inputValue: string\nonInputChange: function\nheaderGroups: array\nrows: array\nprepareRow: function\nstate: object\ntoggleRowExpanded: function",
  isRequired: false
});

/**
 * `Storybook` default export object with documentation for `props` and `return`
 */
({
  component: useLookupTable,
  title: "Hooks/useLookupTable",
  argTypes: _objectSpread$e(_objectSpread$e(_objectSpread$e(_objectSpread$e({}, columnsDoc), dataDoc), configDoc), returnDoc),
  parameters: {
    docs: {
      description: {
        component: "Hook that transforms data suitable for display in a table. Adds handlers to work with sorting, filtering and searching."
      }
    }
  }
});

var useSetParentsInput = function (_a) {
    var passedState = _a.passedState, _b = _a.passedFiles, passedFiles = _b === void 0 ? {} : _b, parentKey = _a.parentKey, _c = _a.setParentInputs, setParentInputs = _c === void 0 ? function () { } : _c, _d = _a.setParentFiles, setParentFiles = _d === void 0 ? function () { } : _d, _e = _a.setParentErrors, setParentErrors = _e === void 0 ? function () { } : _e;
    // console.log(`🚀 ~ passedState`, passedState);
    var _f = __read(React.useState(passedState), 2), localState = _f[0], setLocalState = _f[1];
    var _g = __read(React.useState(passedFiles), 2), localFiles = _g[0], setLocalFiles = _g[1];
    // console.log(`🚀 ~ passedFiles`, passedFiles, localFiles);
    React.useEffect(function () {
        // console.log(`🚀 ~ passedState`, passedState);
        if (JSON.stringify(passedState) === JSON.stringify(localState)) {
            return;
        }
        if (typeof passedState === "object" &&
            Object.keys(passedState).length === 0) {
            return;
        }
        setLocalState(passedState);
    }, [passedState]);
    var handleAddItem = function () {
        setLocalState(function (prev) {
            return __spreadArray(__spreadArray([], __read(prev), false), [{ i: 3 }], false);
        });
    };
    var handleDeleteItem = function (index) {
        // setParentErrors((prev) => {
        //   console.log(`🚀 ~ setErrors ~ prev`, prev);
        //   return prev;
        // });
        setParentErrors(function (prev) {
            var e_1, _a;
            var clearedErrors = {};
            console.log("\uD83D\uDE80 ~ setParentErrors ~ clearedErrors", clearedErrors);
            try {
                for (var _b = __values(Object.keys(prev)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    clearedErrors[key] = null;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return clearedErrors;
        });
        setLocalState(localState.filter(function (item, stageIndex) { return stageIndex !== index; }));
    };
    var changeInputs = function (updatedInputs, index) {
        var e_2, _a, e_3, _b;
        if (!updatedInputs || typeof updatedInputs !== "object") {
            return;
        }
        if (typeof updatedInputs === "object" && Array.isArray(updatedInputs)) {
            // console.log(
            //   `🚀 ~ changeInputs ~ updatedInputs`,
            //   updatedInputs,
            //   localState
            // );
            if (localState && Array.isArray(localState)) {
                var newState = __spreadArray([], __read(localState), false);
                var updated = false;
                try {
                    for (var _c = __values(localState.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var _e = __read(_d.value, 2), index_1 = _e[0], localStateItem = _e[1];
                        var eq = objAreEq(updatedInputs[index_1], localStateItem);
                        if (!eq) {
                            updated = true;
                            newState[index_1] = __assign(__assign({}, localStateItem), newState[index_1]);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                if (newState.length !== updatedInputs.length) {
                    if (updatedInputs.length > newState.length) {
                        try {
                            for (var _f = __values(updatedInputs.entries()), _g = _f.next(); !_g.done; _g = _f.next()) {
                                var _h = __read(_g.value, 2), index_2 = _h[0], updatedItem = _h[1];
                                if (index_2 > newState.length) {
                                    newState.push(updatedItem);
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }
                    else {
                        // delete
                        newState = newState.filter(function (item, index) { return index <= updatedInputs.length; });
                    }
                    updated = true;
                }
                if (updated) {
                    // console.log(`🚀 ~ changeInputs ~ newState`, newState);
                    // console.log(`🚀 ~ changeInputs ~ updated`, newState, updated);
                    setLocalState(newState);
                }
            }
        }
        else if (index !== undefined) {
            var eq = objAreEq(updatedInputs, localState[index]);
            // console.log(
            //   `🚀 ~ changeInputs`,
            //   localState[index],
            //   updatedInputs,
            //   index,
            //   eq
            // );
            if (eq) {
                return;
            }
            setLocalState(function (prev) {
                var loc = __spreadArray([], __read(prev), false);
                loc[index] = __assign(__assign({}, loc[index]), updatedInputs);
                // console.log(`🚀 ~ setLocalState ~ prev`, prev);
                // console.log(
                //   `🚀 ~ setLocalState ~ loc[index]`,
                //   loc[index],
                //   updatedInputs
                // );
                return loc;
            });
            // console.log(`🚀 ~ changeInputs ended`);
        }
    };
    var changeFiles = function (updatedFiles) {
        var _loop_1 = function (updatedFileKey) {
            // console.log(
            //   `🚀 ~ changeFiles ~ updatedFileKey`,
            //   updatedFileKey,
            //   localState
            // );
            var newFiles = updatedFiles[updatedFileKey];
            // Если файл передается
            if (typeof newFiles === "object" && newFiles !== null) {
                // Если передается массив файлов
                if (Array.isArray(newFiles)) {
                    // console.log(`🚀 ~ changeFiles ~ newFiles-массив`, newFiles);
                    setLocalFiles(function (prev) {
                        var _a;
                        return __assign(__assign({}, prev), (_a = {}, _a[updatedFileKey] = newFiles, _a));
                    });
                    // Обнулить компонент с файлом, нужно в inputState передать пустой массив
                    if (parentKey && Array.isArray(localState) && !newFiles.length) {
                        var clearedKey_1 = updatedFileKey
                            .replace(parentKey, "")
                            .replace("[", "")
                            .replace("]", "")
                            .split(".");
                        if (clearedKey_1.length === 2) {
                            var newLocalState = localState.map(function (item, index) {
                                var _a;
                                if (index === parseInt(clearedKey_1[0])) {
                                    return __assign(__assign({}, item), (_a = {}, _a[clearedKey_1[1]] = newFiles, _a));
                                }
                                return item;
                            });
                            setLocalState(newLocalState);
                        }
                        // console.log(`🚀 ~ changeFiles ~ parentKey`, parentKey);
                    }
                    return "continue";
                }
                else {
                    // console.log(`🚀 ~ changeFiles ~ newFiles-объект`, newFiles);
                    setLocalFiles(function (prev) {
                        var _a;
                        return __assign(__assign({}, prev), (_a = {}, _a[updatedFileKey] = newFiles, _a));
                    });
                    return "continue";
                }
            }
            else {
                // console.log(`🚀 ~ changeFiles ~ delete`, updatedFileKey);
                // удалить этот файл
                setLocalFiles(function (prev) {
                    var newFiles = __assign({}, prev);
                    delete newFiles[updatedFileKey];
                    return newFiles;
                });
            }
        };
        // console.log(`🚀 ~ changeFiles ~ updatedFiles`, updatedFiles, localFiles);
        // console.log(`🚀 ~ changeFiles`, localFiles, updatedFiles);
        for (var updatedFileKey in updatedFiles) {
            _loop_1(updatedFileKey);
        }
        // console.log(`🚀 ~ changeFiles ~ updatedFiles`, updatedFiles, localFiles);
        var toDeleteFilesKeys = [];
        for (var oldFileKey in localFiles) {
            var keyIsExists = false;
            for (var passedKey in updatedFiles) {
                if (passedKey === oldFileKey) {
                    keyIsExists = true;
                }
            }
            if (!keyIsExists) {
                toDeleteFilesKeys.push(oldFileKey);
            }
        }
        if (toDeleteFilesKeys.length) {
            setLocalFiles(function (prev) {
                var e_4, _a;
                var newFiles = __assign({}, prev);
                try {
                    for (var toDeleteFilesKeys_1 = __values(toDeleteFilesKeys), toDeleteFilesKeys_1_1 = toDeleteFilesKeys_1.next(); !toDeleteFilesKeys_1_1.done; toDeleteFilesKeys_1_1 = toDeleteFilesKeys_1.next()) {
                        var toDeleteFilesKey = toDeleteFilesKeys_1_1.value;
                        delete newFiles[toDeleteFilesKey];
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (toDeleteFilesKeys_1_1 && !toDeleteFilesKeys_1_1.done && (_a = toDeleteFilesKeys_1.return)) _a.call(toDeleteFilesKeys_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                return newFiles;
            });
            // console.log(`🚀 ~ changeFiles ~ toDeleteFilesKeys`, toDeleteFilesKeys);
        }
    };
    React.useEffect(function () {
        // console.log(`🚀 ~ useEffect ~ localFiles`, localFiles);
        setParentFiles(localFiles);
    }, [localFiles]);
    React.useEffect(function () {
        // console.log(`🚀 ~ useEffect ~ localState`, localState);
        setParentInputs(localState);
    }, [localState]);
    return {
        localState: localState,
        localFiles: localFiles,
        changeFiles: changeFiles,
        changeInputs: changeInputs,
        handleAddItem: handleAddItem,
        handleDeleteItem: handleDeleteItem,
    };
};
function objAreEq(newObj, prevObj) {
    if (typeof newObj !== "object" || typeof prevObj !== "object") {
        return false;
    }
    var equals = true;
    for (var key in newObj) {
        if (newObj[key] !== prevObj[key]) {
            equals = false;
        }
    }
    return equals;
}

var _BREAKPOINTS;
var BREAKPOINTS = (_BREAKPOINTS = {
  sm: 640,
  md: 768,
  xl: 1024
}, _defineProperty(_BREAKPOINTS, "xl", 1280), _defineProperty(_BREAKPOINTS, "2xl", 1536), _BREAKPOINTS);
var useBreakpoint$1 = function useBreakpoint(breakpoint) {
  var _useState = React.useState(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    width = _useState2[0],
    setWidth = _useState2[1];
  React.useEffect(function () {
    var handleResize = function handleResize() {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return !width || width >= BREAKPOINTS[breakpoint];
};

var _shortByFull;
var fullByShort = {
  "@prop": "@prop",
  "@base": "@base",
  "@anc": "@alignContent",
  "@ani": "@alignItems",
  "@ans": "@alignSelf",
  "@an": "@animation",
  "@ae": "@appearance",
  "@bda": "@backgroundAttachment",
  "@bdcp": "@backgroundClip",
  "@bdc": "@backgroundColor",
  "@bdi": "@backgroundImage",
  "@bdo": "@backgroundOpacity",
  "@bdp": "@backgroundPosition",
  "@bdr": "@backgroundRepeat",
  "@bds": "@backgroundSize",
  "@brce": "@borderCollapse",
  "@brc": "@borderColor",
  "@bro": "@borderOpacity",
  "@brr": "@borderRadius",
  "@brs": "@borderStyle",
  "@brw": "@borderWidth",
  "@bxsw": "@boxShadow",
  "@bxsg": "@boxSizing",
  "@cr": "@cursor",
  "@dy": "@display",
  "@dec": "@divideColor",
  "@deo": "@divideOpacity",
  "@des": "@divideStyle",
  "@dew": "@divideWidth",
  "@fl": "@fill",
  "@fx": "@flex",
  "@fxsk": "@flexShrink",
  "@fxd": "@flexDirection",
  "@fxg": "@flexGrow",
  "@fxs": "@flexShrink",
  "@fxw": "@flexWrap",
  "@ftf": "@fontFamily",
  "@fts": "@fontSize",
  "@ftsg": "@fontSmoothing",
  "@ftse": "@fontStyle",
  "@ftvn": "@fontVariantNumeric",
  "@ftw": "@fontWeight",
  "@gp": "@gap",
  "@gtcs": "@gradientColorStops",
  "@ht": "@height",
  "@it": "@inset",
  "@jyc": "@justifyContent",
  "@jyi": "@justifyItems",
  "@jys": "@justifySelf",
  "@lrs": "@letterSpacing",
  "@leh": "@lineHeight",
  "@ltsp": "@listStylePosition",
  "@ltst": "@listStyleType",
  "@mn": "@margin",
  "@mxh": "@maxHeight",
  "@mxw": "@maxWidth",
  "@mnh": "@minHeight",
  "@mnw": "@minWidth",
  "@otf": "@objectFit",
  "@otp": "@objectPosition",
  "@oy": "@opacity",
  "@or": "@order",
  "@oe": "@outline",
  "@ow": "@overflow",
  "@olb": "@overscrollBehavior",
  "@pg": "@padding",
  "@pec": "@placeContent",
  "@pei": "@placeItems",
  "@pes": "@placeSelf",
  "@prc": "@placeholderColor",
  "@pro": "@placeholderOpacity",
  "@pre": "@pointerEvents",
  "@pn": "@position",
  "@rgc": "@ringColor",
  "@rgoc": "@ringOffsetColor",
  "@rgow": "@ringOffsetWidth",
  "@rgo": "@ringOpacity",
  "@rgw": "@ringWidth",
  "@re": "@rotate",
  "@sw": "@skew",
  "@seb": "@spaceBetween",
  "@se": "@stroke",
  "@sew": "@strokeWidth",
  "@tel": "@tableLayout",
  "@th": "@touchAction",
  "@tta": "@textAlign",
  "@ttc": "@textColor",
  "@ttd": "@textDecoration",
  "@ttoy": "@textOpacity",
  "@ttow": "@textOverflow",
  "@ttt": "@textTransform",
  "@tm": "@transform",
  "@tmo": "@transformOrigin",
  "@tndy": "@transitionDelay",
  "@tndn": "@transitionDuration",
  "@tnp": "@transitionProperty",
  "@tntf": "@transitionTimingFunction",
  "@te": "@translate",
  "@urs": "@userSelect",
  "@vla": "@verticalAlign",
  "@vy": "@visibility",
  "@we": "@whitespace",
  "@wh": "@width",
  "@wdb": "@wordBreak",
  "@zi": "@zIndex"
};
var shortByFull = (_shortByFull = {
  "@alignContent": "@anc",
  "@alignItems": "@ani",
  "@alignSelf": "@ans",
  "@animation": "@an",
  "@appearance": "@ae",
  "@backgroundAttachment": "@bda",
  "@backgroundClip": "@bdcp",
  "@backgroundColor": "@bdc",
  "@backgroundImage": "@bdi",
  "@backgroundOpacity": "@bdo",
  "@backgroundPosition": "@bdp",
  "@backgroundRepeat": "@bdr",
  "@backgroundSize": "@bds",
  "@borderCollapse": "@brce",
  "@borderColor": "@brc",
  "@borderOpacity": "@bro",
  "@borderRadius": "@brr",
  "@borderStyle": "@brs",
  "@borderWidth": "@brw",
  "@boxShadow": "@bxsw",
  "@boxSizing": "@bxsg",
  "@clear": "@cr",
  "@container": "@cr",
  "@cursor": "@cr",
  "@display": "@dy",
  "@divideColor": "@dec",
  "@divideOpacity": "@deo",
  "@divideStyle": "@des",
  "@divideWidth": "@dew",
  "@fill": "@fl",
  "@flex": "@fx",
  "@flexShrink": "@fxsk",
  "@flexDirection": "@fxd",
  "@flexGrow": "@fxg"
}, _defineProperty(_shortByFull, "@flexShrink", "@fxs"), _defineProperty(_shortByFull, "@flexWrap", "@fxw"), _defineProperty(_shortByFull, "@fontFamily", "@ftf"), _defineProperty(_shortByFull, "@fontSize", "@fts"), _defineProperty(_shortByFull, "@fontSmoothing", "@ftsg"), _defineProperty(_shortByFull, "@fontStyle", "@ftse"), _defineProperty(_shortByFull, "@fontVariantNumeric", "@ftvn"), _defineProperty(_shortByFull, "@fontWeight", "@ftw"), _defineProperty(_shortByFull, "@gap", "@gp"), _defineProperty(_shortByFull, "@gradientColorStops", "@gtcs"), _defineProperty(_shortByFull, "@height", "@ht"), _defineProperty(_shortByFull, "@inset", "@it"), _defineProperty(_shortByFull, "@justifyContent", "@jyc"), _defineProperty(_shortByFull, "@justifyItems", "@jyi"), _defineProperty(_shortByFull, "@justifySelf", "@jys"), _defineProperty(_shortByFull, "@letterSpacing", "@lrs"), _defineProperty(_shortByFull, "@lineHeight", "@leh"), _defineProperty(_shortByFull, "@listStylePosition", "@ltsp"), _defineProperty(_shortByFull, "@listStyleType", "@ltst"), _defineProperty(_shortByFull, "@margin", "@mn"), _defineProperty(_shortByFull, "@maxHeight", "@mxh"), _defineProperty(_shortByFull, "@maxWidth", "@mxw"), _defineProperty(_shortByFull, "@minHeight", "@mnh"), _defineProperty(_shortByFull, "@minWidth", "@mnw"), _defineProperty(_shortByFull, "@objectFit", "@otf"), _defineProperty(_shortByFull, "@objectPosition", "@otp"), _defineProperty(_shortByFull, "@opacity", "@oy"), _defineProperty(_shortByFull, "@order", "@or"), _defineProperty(_shortByFull, "@outline", "@oe"), _defineProperty(_shortByFull, "@overflow", "@ow"), _defineProperty(_shortByFull, "@overscrollBehavior", "@olb"), _defineProperty(_shortByFull, "@padding", "@pg"), _defineProperty(_shortByFull, "@placeContent", "@pec"), _defineProperty(_shortByFull, "@placeItems", "@pei"), _defineProperty(_shortByFull, "@placeSelf", "@pes"), _defineProperty(_shortByFull, "@placeholderColor", "@prc"), _defineProperty(_shortByFull, "@placeholderOpacity", "@pro"), _defineProperty(_shortByFull, "@pointerEvents", "@pre"), _defineProperty(_shortByFull, "@position", "@pn"), _defineProperty(_shortByFull, "@resize", "@re"), _defineProperty(_shortByFull, "@ringColor", "@rgc"), _defineProperty(_shortByFull, "@ringOffsetColor", "@rgoc"), _defineProperty(_shortByFull, "@ringOffsetWidth", "@rgow"), _defineProperty(_shortByFull, "@ringOpacity", "@rgo"), _defineProperty(_shortByFull, "@ringWidth", "@rgw"), _defineProperty(_shortByFull, "@rotate", "@re"), _defineProperty(_shortByFull, "@scale", "@se"), _defineProperty(_shortByFull, "@skew", "@sw"), _defineProperty(_shortByFull, "@spaceBetween", "@seb"), _defineProperty(_shortByFull, "@stroke", "@se"), _defineProperty(_shortByFull, "@strokeWidth", "@sew"), _defineProperty(_shortByFull, "@tableLayout", "@tel"), _defineProperty(_shortByFull, "@touchAction", "@th"), _defineProperty(_shortByFull, "@textAlign", "@tta"), _defineProperty(_shortByFull, "@textColor", "@ttc"), _defineProperty(_shortByFull, "@textDecoration", "@ttd"), _defineProperty(_shortByFull, "@textOpacity", "@ttoy"), _defineProperty(_shortByFull, "@textOverflow", "@ttow"), _defineProperty(_shortByFull, "@textTransform", "@ttt"), _defineProperty(_shortByFull, "@transform", "@tm"), _defineProperty(_shortByFull, "@transformOrigin", "@tmo"), _defineProperty(_shortByFull, "@transitionDelay", "@tndy"), _defineProperty(_shortByFull, "@transitionDuration", "@tndn"), _defineProperty(_shortByFull, "@transitionProperty", "@tnp"), _defineProperty(_shortByFull, "@transitionTimingFunction", "@tntf"), _defineProperty(_shortByFull, "@translate", "@te"), _defineProperty(_shortByFull, "@userSelect", "@urs"), _defineProperty(_shortByFull, "@verticalAlign", "@vla"), _defineProperty(_shortByFull, "@visibility", "@vy"), _defineProperty(_shortByFull, "@whitespace", "@we"), _defineProperty(_shortByFull, "@width", "@wh"), _defineProperty(_shortByFull, "@wordBreak", "@wdb"), _defineProperty(_shortByFull, "@zIndex", "@zi"), _shortByFull);

/* */

// function snakeToCamel(str) {
//   return str.replace(/([-_][a-z])/gi, (char) => {
//     return char.toUpperCase().replace("-", "").replace("_", "");
//   });
// }
// let props = [
//   "Container",
//   "Box Sizing",
//   "Display",
//   "Clear",
//   "Object Fit",
//   "Object Position",
//   "Overflow",
//   "Overscroll Behavior",
//   "Position",
//   "Visibility",
//   "Z Index",
//   "Flex Direction",
//   "Flex Wrap",
//   "Flex",
//   "Flex Grow",
//   "Flex Shrink",
//   "Order",
//   "Gap",
//   "Justify Content",
//   "Justify Items",
//   "Justify Self",
//   "Align Content",
//   "Align Items",
//   "Align Self",
//   "Place Content",
//   "Place Items",
//   "Place Self",
//   "Padding",
//   "Margin",
//   "Space Between",
//   "Width",
//   "Min Width",
//   "Max Width",
//   "Height",
//   "Min Height",
//   "Max Height",
//   "Font Family",
//   "Font Size",
//   "Font Smoothing",
//   "Font Style",
//   "Font Weight",
//   "Font Variant Numeric",
//   "Letter Spacing",
//   "Line Height",
//   "List Style Type",
//   "List Style Position",
//   "Placeholder Color",
//   "Placeholder Opacity",
//   "Text Align",
//   "Text Color",
//   "Text Opacity",
//   "Text Decoration",
//   "Text Transform",
//   "Text Overflow",
//   "Vertical Align",
//   "Whitespace",
//   "Word Break",
//   "Background Attachment",
//   "Background Clip",
//   "Background Color",
//   "Background Opacity",
//   "Background Position",
//   "Background Repeat",
//   "Background Size",
//   "Background Image",
//   "Gradient Color Stops",
//   "Border Radius",
//   "Border Width",
//   "Border Color",
//   "Border Opacity",
//   "Border Style",
//   "Divide Width",
//   "Divide Color",
//   "Divide Opacity",
//   "Divide Style",
//   "Ring Width",
//   "Ring Color",
//   "Ring Opacity",
//   "Ring Offset Width",
//   "Ring Offset Color",
//   "Box Shadow",
//   "Opacity",
//   "Border Collapse",
//   "Table Layout",
//   "Transition Property",
//   "Transition Duration",
//   "Transition Timing Function",
//   "Transition Delay",
//   "Animation",
//   "Transform",
//   "Transform Origin",
//   "Scale",
//   "Rotate",
//   "Translate",
//   "Skew",
//   "Appearance",
//   "Cursor",
//   "Outline",
//   "Pointer Events",
//   "Resize",
//   "User Select",
//   "Fill",
//   "Stroke",
//   "Stroke Width",
// ].sort();

// const getShortChars = (str) => {
//   if (str.length === 1) {
//     return str;
//   }
//   return `${str[0]}${str[str.length - 1]}`;
// };

// const getShortKey = (string) =>
//   `${string
//     .toLowerCase()
//     .split(" ")
//     .map((str) => getShortChars(str))
//     .join("")}`;

// props = props.map((item) => [
//   item,
//   item
//     .toLowerCase()
//     .split(" ")
//     .map((str, index) => {
//       if (index === 0) {
//         return `${getShortChars(str)}`;
//       } else {
//         return str[0];
//       }
//     })
//     .join(""),
// ]);
// let copy = [];
// let duplicate = [];

// let fullKeys = {};
// let shortKeys = {};

// props.forEach((item) => {
//   let fullKey = item[0].toLowerCase().split(" ").join("_");
//   fullKey = snakeToCamel(fullKey);
//   let shortKey = item[1];

//   if (shortKeys[shortKey]) {
//     let firstFull = shortKeys[shortKey];
//     delete shortKeys[shortKey];
//     shortKey = getShortKey(item[0]);
//     let shortKeyOfFirstFull = getShortKey(firstFull.replace(/([A-Z])/g, " $1"));
//     shortKeys[shortKeyOfFirstFull] = firstFull;
//     fullKeys[firstFull] = shortKeyOfFirstFull;
//   }

//   fullKeys[fullKey] = shortKey;
//   shortKeys[shortKey] = fullKey;
// });

// console.log("====================================");
// console.log(fullKeys);
// console.log("====================================");

// props.forEach((item) => {
//   let entries = Object.entries(item)[0];
//   let key = entries[0];
//   let value = entries[1];
//   let dup = copy.find((str) => str === value);
//   if (!dup) {
//     copy.push(value);
//   } else {
//     let first = props.find((x) => {
//       let en = Object.entries(x)[0];
//       return en[1] === value && en[0] !== key;
//     });
//     // dup[entries[0]] = value;
//     duplicate.push({ ...item, ...first });
//     // throw new Error(
//     //   `duplicate ${entries[0]} ${value} ${copy.find((str) => str === value)}`
//     // );
//   }
// });

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$d(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useStyleRewriter$6 = function useStyleRewriter(baseClassName, className) {
  var cleared = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return React.useMemo(function () {
    var styleObj = getStyleObj("@base ".concat(baseClassName), cleared);
    var styleObjProps = getStyleObj("@prop ".concat(className), cleared);
    var computedStyleObj = _objectSpread$d(_objectSpread$d({}, styleObj), styleObjProps);
    var resultClassName = Object.values(computedStyleObj).join(" ").replace(/\n/g, "");
    return resultClassName.replace(/\s+/g, " ");
  }, [baseClassName, className]);
};
var getStyleObj = function getStyleObj() {
  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var cleared = arguments.length > 1 ? arguments[1] : undefined;
  if (!className || !className.trim()) {
    return {};
  }
  var classesArr = className.replace(/@([a-z:]*)/g, "__@$1__").split("__").filter(function (str) {
    return str;
  });
  var styleObj = {};
  classesArr.forEach(function (item, index) {
    if (item) {
      var isKey = item.includes("@");
      var nextValue = classesArr[index + 1];
      if (isKey) {
        var isKeyNextValue = nextValue && nextValue.includes("@");
        if (!(fullByShort[item] || shortByFull[item])) {
          throw new Error("Invalid key ".concat(item, " for styleRewriter in className ").concat(className));
        }
        if (!isKeyNextValue) {
          setValue({
            styleObj: styleObj,
            key: item,
            value: nextValue,
            cleared: cleared
          });
        } else {
          setValue({
            styleObj: styleObj,
            key: item,
            value: "",
            cleared: cleared
          });
        }
      }
    }
  });
  return styleObj;
};
var setValue = function setValue(_ref) {
  var styleObj = _ref.styleObj,
    key = _ref.key,
    value = _ref.value,
    cleared = _ref.cleared;
  if (cleared) {
    styleObj[key] = value;
  } else {
    var stringKey = key === "@base" || key === "@prop" ? "" : key;
    styleObj[key] = "".concat(stringKey, " ").concat(value);
  }
};

var useDetectMouseover$1 = function useDetectMouseover(el, initialState) {
  var _useState = React.useState(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];
  var handleOver = React.useCallback(function (e) {
    setIsActive(true);
  }, [el.current]);
  var handleOut = React.useCallback(function (e) {
    setIsActive(false);
  }, [el.current]);
  React.useEffect(function () {
    if (el.current) {
      el.current.addEventListener("mouseenter", handleOver);
      el.current.addEventListener("mouseleave", handleOut);
    }
    return function () {
      if (el.current) {
        el.current.removeEventListener("mouseenter", handleOver);
        el.current.removeEventListener("mouseleave", handleOut);
      }
    };
  }, [isActive, el.current]);
  return [isActive];
};

var useDetectOutsideClick$1 = function useDetectOutsideClick(trigger, initialState) {
  var _useState = React.useState(initialState),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];
  React.useEffect(function () {
    var pageClickEvent = function pageClickEvent(e) {
      if (trigger !== null && trigger !== void 0 && trigger.current && !trigger.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    window.addEventListener("click", pageClickEvent);
    return function () {
      window.removeEventListener("click", pageClickEvent);
    };
  }, []);
  return [isActive, setIsActive];
};

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$3(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread();
}

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }
function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$c(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var changeInput = function changeInput(e, _ref) {
  var inputs = _ref.inputs,
    errors = _ref.errors,
    files = _ref.files,
    _ref$setErrors = _ref.setErrors,
    setErrors = _ref$setErrors === void 0 ? function () {} : _ref$setErrors,
    setInputs = _ref.setInputs,
    setFiles = _ref.setFiles;
  var localInputs = _objectSpread$c({}, inputs);
  var localErrors = _objectSpread$c({}, errors);
  var localFiles = _objectSpread$c({}, files);
  localErrors[e.target.id] = [];
  if (!e.target.files) {
    if (!Object.keys(files).includes(e.target.id)) {
      localInputs[e.target.id] = e.target.value;
    } else {
      // Delete files on backend
      localInputs[e.target.id] = e.target.value;
      if (e.target.multiple) {
        if (localFiles && Array.isArray(localFiles[e.target.id]) && Array.isArray(localInputs[e.target.id])) {
          localFiles = _objectSpread$c(_objectSpread$c({}, localFiles), {}, _defineProperty({}, e.target.id, _toConsumableArray(localInputs[e.target.id])));
        }
      } else {
        // Deleted not multiple file
        delete localFiles[e.target.id];
      }
    }
  } else {
    var loadedFiles = _objectSpread$c({}, e.target.files);
    var _iterator = _createForOfIteratorHelper$2(new Array(e.target.files.length).entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 1),
          index = _step$value[0];
        if (e.target.multiple) {
          if (localFiles && Array.isArray(localFiles[e.target.id]) && Array.isArray(localInputs[e.target.id])) {
            localFiles = _objectSpread$c(_objectSpread$c({}, localFiles), {}, _defineProperty({}, e.target.id, [].concat(_toConsumableArray(localFiles[e.target.id]), [loadedFiles[index]])));
          } else {
            localFiles = _objectSpread$c(_objectSpread$c({}, localFiles), {}, _defineProperty({}, e.target.id, [loadedFiles[index]]));
          }
        } else {
          localFiles = _objectSpread$c(_objectSpread$c({}, localFiles), {}, _defineProperty({}, e.target.id, loadedFiles[index]));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (e.target.type == "checkbox") {
    localInputs[e.target.id] = e.target.checked;
  }
  setFiles(_objectSpread$c({}, localFiles));
  setInputs(_objectSpread$c({}, localInputs));
  setErrors(_objectSpread$c({}, localErrors));
};
var checkUsernameMask = function checkUsernameMask(_ref2) {
  var field = _ref2.field,
    value = _ref2.value,
    errors = _ref2.errors;
  if (!/^[A-z0-9_]{5,25}$/.test(value)) {
    addError({
      errors: errors,
      field: field,
      id: "usernameMask",
      message: "Username must contain only characters, numbers and \"_\". Min 5 symbols"
    });
  }
};
var regexes = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^[+][0-9]{11,15}$/
};
var checkEmailMask = function checkEmailMask(_ref3) {
  var field = _ref3.field,
    value = _ref3.value,
    errors = _ref3.errors;
  if (!regexes.email.test(value.trim())) {
    addError({
      errors: errors,
      field: field,
      id: "mask",
      message: "Invalid E-mail address format"
    });
  }
};
var checkPhoneMask = function checkPhoneMask(_ref4) {
  var _value;
  var field = _ref4.field,
    value = _ref4.value,
    errors = _ref4.errors;
  value = (_value = value) === null || _value === void 0 ? void 0 : _value.replace(/[ \( \)-]*/g, "");
  if (!regexes.phone.test(value.trim())) {
    addError({
      errors: errors,
      field: field,
      id: "mask",
      message: "Invalid phone format"
    });
  }
};
var checkPassword = function checkPassword(_ref5) {
  var field = _ref5.field,
    value = _ref5.value,
    errors = _ref5.errors;
  var min = 8;
  if (value.length < min || value.includes(" ")) {
    addError({
      errors: errors,
      field: field,
      id: "length",
      message: "Password is too short, minimum ".concat(min, " characters")
    });
  }
};
var checkRequiredField = function checkRequiredField(_ref6) {
  var field = _ref6.field,
    value = _ref6.value,
    errors = _ref6.errors;
  // Reset old required errors if exists
  // Add new require errors
  if (value === undefined || value === null || _typeof$1(value) == "string" && value.trim() == "") {
    addError({
      errors: errors,
      field: field,
      id: "required",
      message: "Reqired field"
    });
  }
};
var checkEqualTo = function checkEqualTo(_ref7) {
  var field = _ref7.field,
    value = _ref7.value,
    errors = _ref7.errors,
    config = _ref7.config,
    inputs = _ref7.inputs,
    inputsConfig = _ref7.inputsConfig;
  var equalTo = config.equalTo;
  if (value !== inputs[equalTo]) {
    var equalToConfig = inputsConfig.find(function (a) {
      return a.field === equalTo;
    });
    var equalToTitle = equalToConfig.title || equalToConfig.label || equalTo;
    addError({
      errors: errors,
      field: field,
      id: "equal",
      message: config.equalToError || "Not equal to ".concat(equalToTitle)
    });
  }
};
var checkFields = function checkFields(_ref8) {
  var setErrors = _ref8.setErrors,
    errors = _ref8.errors,
    inputsConfig = _ref8.inputsConfig,
    inputs = _ref8.inputs,
    files = _ref8.files;
  var localErrors = _objectSpread$c({}, errors);
  inputsConfig.forEach(function (_ref9) {
    var field = _ref9.field,
      checkerFuncs = _ref9.checkerFuncs,
      config = _ref9.config,
      title = _ref9.title,
      label = _ref9.label,
      type = _ref9.type,
      multiple = _ref9.multiple;
    var value = inputs[field];
    if (files && type === "file" && files[field]) {
      if (multiple) {
        var _files$field;
        if (((_files$field = files[field]) === null || _files$field === void 0 ? void 0 : _files$field.length) > 0) {
          value = "uploaded";
        }
      } else {
        value = "uploaded";
      }
    }
    checkerFuncs.forEach(function (checker) {
      if (!localErrors[field]) {
        var checkerProps = {
          value: value,
          field: field,
          errors: localErrors,
          label: label,
          title: title,
          inputs: inputs,
          config: config,
          inputsConfig: inputsConfig
        };
        if (_typeof$1(checker) === "function") {
          checker(checkerProps);
        } else if (_typeof$1(checker) === "string") {
          if (defualtCheckerFuncs[checker]) {
            defualtCheckerFuncs[checker](checkerProps);
          } else {
            throw new Error("There is no function ".concat(checker, " in default chekers function. List of available functions ").concat(Object.keys(defualtCheckerFuncs)));
          }
        } else {
          throw new Error("".concat(checker, " is not a valid function"));
        }
      }
    });
  });
  setErrors(localErrors);
  var hasErrors = [];
  for (var _i = 0, _Object$entries = Object.entries(localErrors); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2);
      _Object$entries$_i[0];
      var value = _Object$entries$_i[1];
    if (value) {
      var _Object$values, _Object$values$filter;
      // Во вложенных формах своя проверка
      if (((_Object$values = Object.values(value)) === null || _Object$values === void 0 ? void 0 : (_Object$values$filter = _Object$values.filter(function (m) {
        return typeof m === "string";
      })) === null || _Object$values$filter === void 0 ? void 0 : _Object$values$filter.length) > 0) {
        hasErrors.push(_objectSpread$c({}, value));
      }
    }
  }
  var isValid = !hasErrors.length ? true : false;
  return isValid;
};
var addError = function addError(_ref10) {
  var errors = _ref10.errors,
    field = _ref10.field,
    id = _ref10.id,
    message = _ref10.message;
  errors[field] = {
    id: id,
    message: message
  };
};
var defualtCheckerFuncs = {
  checkEmailMask: checkEmailMask,
  checkPhoneMask: checkPhoneMask,
  checkUsernameMask: checkUsernameMask,
  checkPassword: checkPassword,
  checkRequiredField: checkRequiredField,
  checkEqualTo: checkEqualTo
};
var changeTypeFunc = function changeTypeFunc(_ref11) {
  var types = _ref11.types,
    setTypes = _ref11.setTypes,
    field = _ref11.field;
  var type = types[field];
  if (types[field]) {
    var localTypes = _objectSpread$c({}, types);
    if (type === "password") {
      localTypes[field] = "text";
    } else if (type === "text") {
      localTypes[field] = "password";
    }
    setTypes(localTypes);
  }
};
var changeBlockedInputsFunc = function changeBlockedInputsFunc(_ref12) {
  var setBlockedInputs = _ref12.setBlockedInputs,
    blockedInputs = _ref12.blockedInputs,
    newBlockedInputs = _ref12.newBlockedInputs;
  setBlockedInputs(_objectSpread$c(_objectSpread$c({}, blockedInputs), newBlockedInputs));
};

var checkIsServer = function () { return typeof window === "undefined"; };
var loadScripts = function (_a) {
    var u = _a.u, _b = _a.type, type = _b === void 0 ? "text/javascript" : _b, id = _a.id;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_c) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var s = document.createElement("script");
                    s.type = type;
                    s.async = true;
                    s.src = u;
                    if (id) {
                        s.id = id;
                    }
                    s.onload = function () { return resolve(s); };
                    s.onerror = function () { return reject(new Error("Error loading script ".concat(u))); };
                    document.body.append(s);
                })];
        });
    });
};
var GTMPageView = function (url) {
    var pageEvent = {
        event: "pageview",
        page: url,
    };
    window &&
        window.dataLayer &&
        window.dataLayer.push(pageEvent);
    return pageEvent;
};
var isNil = function (value) { return value === null || value === undefined; };
var urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gim;
var addProtocolToUrl = function (url) {
    var splittedString = url.split("://");
    var urlWithProtocol = "";
    if (splittedString.length > 1) {
        urlWithProtocol =
            splittedString[0][-1] === "s" ? url : "https://".concat(splittedString[1]);
    }
    else {
        urlWithProtocol = "https://".concat(url);
    }
    return urlWithProtocol;
};
var getURLsFromText = function (text) {
    var displayUrl = "";
    var textWithMarkup = text.replace(urlRegex, function (replacement) {
        if (!displayUrl) {
            displayUrl = replacement;
        }
        var urlWithProtocol = addProtocolToUrl(replacement);
        return "[".concat(replacement, "](").concat(urlWithProtocol, ")");
    });
    return {
        textWithMarkup: textWithMarkup,
        displayUrl: displayUrl,
    };
};
var parseMimeType = function (mime) {
    if (!mime)
        return {};
    var splittedMime = mime === null || mime === void 0 ? void 0 : mime.split("/");
    return { type: splittedMime[0], ext: splittedMime[1] };
};
var getPastDay = function (days) {
    var date = new Date();
    date.setDate(date.getDate() - days);
    return date;
};
var getMonthRange = function (_a) {
    var date = _a.date, firstDayQuantity = _a.firstDayQuantity, lastDayQuantity = _a.lastDayQuantity;
    var firstDay = new Date(date.getFullYear(), date.getMonth() - (firstDayQuantity || 0), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + (lastDayQuantity || 0), 0);
    return [firstDay, lastDay];
};

var vanilla = /*#__PURE__*/Object.freeze({
    __proto__: null,
    checkIsServer: checkIsServer,
    loadScripts: loadScripts,
    GTMPageView: GTMPageView,
    isNil: isNil,
    urlRegex: urlRegex,
    addProtocolToUrl: addProtocolToUrl,
    getURLsFromText: getURLsFromText,
    parseMimeType: parseMimeType,
    getPastDay: getPastDay,
    getMonthRange: getMonthRange
});

var _excluded$8 = ["field", "blocked", "placeholder", "title", "label", "config", "type", "PairComponent"];
function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$b(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useForm = function useForm(_ref) {
  var inputsConfig = _ref.inputsConfig,
    _ref$submitFunc = _ref.submitFunc,
    submitFunc = _ref$submitFunc === void 0 ? function () {
      // For useChild and setParent pipes

      return true;
    } : _ref$submitFunc,
    _ref$inputPropsType = _ref.inputPropsType,
    inputPropsType = _ref$inputPropsType === void 0 ? "array" : _ref$inputPropsType;
  var _useMemo = React.useMemo(function () {
      var inputs = {};
      var errors = {};
      var types = {};
      var blockedInputs = {};
      var files = {};
      inputsConfig.forEach(function (_ref2) {
        var field = _ref2.field,
          defaultValue = _ref2.defaultValue,
          _ref2$type = _ref2.type,
          type = _ref2$type === void 0 ? "text" : _ref2$type,
          _ref2$config = _ref2.config,
          config = _ref2$config === void 0 ? {} : _ref2$config,
          blocked = _ref2.blocked;
        defaultValue = defaultValue !== undefined ? defaultValue : "";
        if (type === "file") {
          if (defaultValue !== "") {
            files[field] = defaultValue;
          }
        } else {
          inputs[field] = defaultValue;
        }
        errors[field] = null;
        if (config.enableTypeChanging) {
          types[field] = type;
        }
        if (!isNil(blocked)) {
          blockedInputs[field] = blocked;
        }
      });
      return {
        initialInputs: inputs,
        initialErrors: errors,
        initialTypes: types,
        initialBlocked: blockedInputs,
        initialFiles: files
      };
    }, [inputsConfig]),
    initialInputs = _useMemo.initialInputs,
    initialErrors = _useMemo.initialErrors,
    initialTypes = _useMemo.initialTypes,
    initialBlocked = _useMemo.initialBlocked,
    initialFiles = _useMemo.initialFiles;
  var _useState = React.useState(initialInputs),
    _useState2 = _slicedToArray(_useState, 2),
    inputs = _useState2[0],
    setInputs = _useState2[1];
  var _useState3 = React.useState(initialFiles),
    _useState4 = _slicedToArray(_useState3, 2),
    files = _useState4[0],
    setFiles = _useState4[1];
  var _useState5 = React.useState(initialErrors),
    _useState6 = _slicedToArray(_useState5, 2),
    errors = _useState6[0],
    setErrors = _useState6[1];
  var _useState7 = React.useState(initialTypes),
    _useState8 = _slicedToArray(_useState7, 2),
    types = _useState8[0],
    setTypes = _useState8[1];
  var _useState9 = React.useState(initialBlocked),
    _useState10 = _slicedToArray(_useState9, 2),
    blockedInputs = _useState10[0],
    setBlockedInputs = _useState10[1];
  React.useEffect(function () {
    setInputs(initialInputs);
    setErrors(initialErrors);
    setTypes(initialTypes);
    setFiles(initialFiles);
    setBlockedInputs(initialBlocked);
  }, [inputsConfig]);
  React.useEffect(function () {
    setErrors(initialErrors);
  }, [inputs]);
  var clearInputs = function clearInputs() {
    return setInputs(initialInputs);
  };
  var onSubmitFunc = React.useCallback(function (e) {
    var submitProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return onSubmit(e, _objectSpread$b({
      inputsConfig: inputsConfig,
      inputs: inputs,
      errors: errors,
      setErrors: setErrors,
      submitFunc: submitFunc,
      files: files,
      evt: e
    }, submitProps));
  }, [inputsConfig, inputs, errors, files]);
  var changeType = function changeType(e, _ref3) {
    var field = _ref3.field;
    return changeTypeFunc({
      types: types,
      setTypes: setTypes,
      field: field
    });
  };
  var changeBlockedInputs = function changeBlockedInputs(inputs) {
    return changeBlockedInputsFunc({
      setBlockedInputs: setBlockedInputs,
      blockedInputs: blockedInputs,
      newBlockedInputs: inputs
    });
  };
  var onChange = function onChange(e) {
    changeInput(e, {
      inputs: inputs,
      errors: errors,
      files: files,
      setFiles: setFiles,
      setErrors: setErrors,
      setInputs: setInputs
    });
  };
  var inputsProps = React.useMemo(function () {
    var props;
    if (inputPropsType === "array") {
      props = [];
    } else {
      props = {};
    }
    inputsConfig.forEach(function (_ref4) {
      var field = _ref4.field,
        blocked = _ref4.blocked,
        _ref4$placeholder = _ref4.placeholder,
        placeholder = _ref4$placeholder === void 0 ? "" : _ref4$placeholder,
        _ref4$title = _ref4.title,
        title = _ref4$title === void 0 ? "" : _ref4$title,
        _ref4$label = _ref4.label,
        label = _ref4$label === void 0 ? "" : _ref4$label,
        _ref4$config = _ref4.config,
        config = _ref4$config === void 0 ? {} : _ref4$config,
        _ref4$type = _ref4.type,
        defaultType = _ref4$type === void 0 ? "text" : _ref4$type,
        PairComponent = _ref4.PairComponent,
        params = _objectWithoutProperties(_ref4, _excluded$8);
      if (defaultType !== "hidden") {
        var prop = _objectSpread$b({
          id: field,
          error: errors[field],
          changeType: changeType,
          blocked: isNil(blocked) ? false : blockedInputs[field],
          title: title,
          label: label,
          placeholder: placeholder,
          onChange: onChange,
          type: types[field] || defaultType,
          enableTypeChanging: config.enableTypeChanging,
          headingProps: config.headingProps,
          changeBlockedInputs: changeBlockedInputs,
          setFiles: setFiles,
          PairComponent: PairComponent
        }, params);
        if (prop.type === "file") {
          // console.log(`🚀 ~ inputsProps ~ files`, files);
          prop.files = files;
          prop.value = undefined;
        } else {
          prop.value = inputs[field];
        }
        if (inputPropsType === "array") {
          props.push(prop);
        } else {
          props[field] = prop;
        }
      }
    });
    return props;
  }, [inputs, files, errors, types, blockedInputs]);
  return {
    inputs: inputsProps,
    onSubmit: onSubmitFunc,
    inputsValues: inputs,
    setInputsValues: setInputs,
    errors: errors,
    files: files,
    setErrors: setErrors,
    changeBlockedInputs: changeBlockedInputs,
    clearInputs: clearInputs,
    setInitialErrors: function setInitialErrors() {
      return setErrors(initialErrors);
    }
  };
};
var onSubmit = function onSubmit(e, props) {
  e && e.preventDefault();
  var inputsConfig = props.inputsConfig,
    inputs = props.inputs,
    errors = props.errors,
    setErrors = props.setErrors,
    submitFunc = props.submitFunc,
    files = props.files;
  var isValid = checkFields({
    setErrors: setErrors,
    errors: errors,
    inputsConfig: inputsConfig,
    inputs: inputs,
    files: files
  });
  if (!isValid) {
    console.log("\uD83D\uDE80 ~ onSubmit ~ errors", errors);
    return;
  }
  if (files) {
    selectFilesForDelete({
      files: files,
      inputsConfig: inputsConfig
    });
  }
  return submitFunc(props);
};
var selectFilesForDelete = function selectFilesForDelete(_ref5) {
  var files = _ref5.files,
    inputsConfig = _ref5.inputsConfig;
  var filesInputsConfigs = inputsConfig.filter(function (config) {
    return config.type === "file";
  });
  var _iterator = _createForOfIteratorHelper$1(filesInputsConfigs),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var config = _step.value;
      var filesKey = config.field;
      var passedFiles = files[filesKey];
      if (Array.isArray(config.defaultValue) && config.defaultValue.length) {
        var _iterator2 = _createForOfIteratorHelper$1(config.defaultValue),
          _step2;
        try {
          var _loop = function _loop() {
            var defaultFile = _step2.value;
            if (_typeof$1(defaultFile) !== "object") {
              return "continue";
            }
            if (!passedFiles.filter(function (passedFile) {
              return passedFile.url === defaultFile.url;
            }).length) {
              if (typeof config.deleteFile === "function") {
                config.deleteFile(defaultFile);
              }
            }
          };
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _ret = _loop();
            if (_ret === "continue") continue;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else if (_typeof$1(config.defaultValue) === "object") {
        var passedFile = passedFiles;
        var defaultFile = config.defaultValue;
        if (_typeof$1(defaultFile) !== "object" || defaultFile === null) {
          return;
        }
        if (defaultFile.url) {
          if (!passedFile || passedFile.url !== defaultFile.url) {
            if (typeof config.deleteFile === "function") {
              config.deleteFile(defaultFile);
            }
          }
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$a(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function useChildForm(_ref) {
  var inputsConfig = _ref.inputsConfig,
    _ref$setParentErrors = _ref.setParentErrors,
    setParentErrors = _ref$setParentErrors === void 0 ? function () {} : _ref$setParentErrors,
    _ref$setSubmitPipe = _ref.setSubmitPipe,
    setSubmitPipe = _ref$setSubmitPipe === void 0 ? function () {} : _ref$setSubmitPipe,
    _ref$setParentInputs = _ref.setParentInputs,
    setParentInputs = _ref$setParentInputs === void 0 ? function () {} : _ref$setParentInputs,
    inputPropsType = _ref.inputPropsType,
    _ref$setParentFiles = _ref.setParentFiles,
    setParentFiles = _ref$setParentFiles === void 0 ? function () {} : _ref$setParentFiles;
  var _useForm = useForm({
      inputsConfig: inputsConfig,
      inputPropsType: inputPropsType
    }),
    inputsValues = _useForm.inputsValues,
    errors = _useForm.errors,
    onSubmit = _useForm.onSubmit,
    inputs = _useForm.inputs,
    files = _useForm.files,
    setInputsValues = _useForm.setInputsValues;
  var submitId = React.useMemo(function () {
    return "".concat((Math.random() * 1000000).toFixed(0));
  }, []);
  React.useEffect(function () {
    setParentErrors(errors);
  }, [errors]);

  // console.log(`🚀 ~ inputsConfig`, submitId, inputsConfig);

  React.useEffect(function () {
    setSubmitPipe(function (prev) {
      return _objectSpread$a(_objectSpread$a({}, prev), {}, _defineProperty({}, submitId, onSubmit));
    });
  }, [onSubmit]);
  var onDelete = function onDelete() {
    setSubmitPipe(function (prev) {
      var newSubmitPipes = _objectSpread$a({}, prev);
      delete newSubmitPipes[submitId];
      return newSubmitPipes;
    });
  };
  React.useEffect(function () {
    // console.log(`🚀 ~ useEffect ~ inputsValues`, inputsValues);
    setParentErrors(null);
    setParentInputs(inputsValues);
  }, [inputsValues]);
  React.useEffect(function () {
    setParentErrors(null);
    // console.log(`🚀 ~ useEffect ~ setParentFiles files Stage`, files);
    setParentFiles(files);
  }, [files]);
  return {
    inputsValues: inputsValues,
    setInputsValues: setInputsValues,
    onSubmit: onSubmit,
    inputs: inputs,
    files: files,
    onDelete: onDelete,
    errors: errors
  };
}

var useDomMeasure = function useDomMeasure(ref) {
  var triggers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var _useState = React.useState({
      width: 0,
      height: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    domRect = _useState2[0],
    setDomRect = _useState2[1];
  React.useEffect(function () {
    if (ref.current) {
      var elemDomRect = ref.current.getBoundingClientRect();
      setDomRect(elemDomRect);
    }
  }, [ref].concat(_toConsumableArray(triggers)));
  React.useEffect(function () {
    if (ref.current) {
      var setRectCallback = function setRectCallback() {
        var elemDomRect = ref.current.getBoundingClientRect();
        var newWidth = elemDomRect.width,
          newHeight = elemDomRect.height;
        if (newWidth !== domRect.width || newHeight !== domRect.height) {
          setDomRect(elemDomRect);
        }
      };
      window.addEventListener("resize", setRectCallback);
      return function () {
        window.removeEventListener("resize", setRectCallback);
      };
    }
  }, []);
  return [domRect.width, domRect.height];
};

var useDebounce = function (value, delay) {
    var _a = __read(React.useState(value), 2), depouncedValue = _a[0], setDebouncedValue = _a[1];
    React.useEffect(function () {
        var timer = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return depouncedValue;
};

var useSendEmailConfirmation = function useSendEmailConfirmation(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$9 : _ref$inputsConfig;
  var _profilesApi$useSendE = profilesApi.useSendEmailConfirmationMutation(),
    _profilesApi$useSendE2 = _slicedToArray(_profilesApi$useSendE, 2),
    sendEmailConfirmation = _profilesApi$useSendE2[0],
    _profilesApi$useSendE3 = _profilesApi$useSendE2[1],
    error = _profilesApi$useSendE3.error,
    isLoading = _profilesApi$useSendE3.isLoading,
    isSuccess = _profilesApi$useSendE3.isSuccess,
    data = _profilesApi$useSendE3.data;
  var submitFunc = function submitFunc(_ref2) {
    var inputs = _ref2.inputs;
    sendEmailConfirmation({
      data: inputs
    });
  };
  var memoInputsConfig = React.useMemo(function () {
    return inputsConfig;
  }, [inputsConfig]);
  var _useForm = useForm({
      inputsConfig: memoInputsConfig,
      submitFunc: submitFunc,
      inputPropsType: "object"
    }),
    inputs = _useForm.inputs,
    inputsErrors = _useForm.errors,
    onSubmit = _useForm.onSubmit,
    inputsSetErrors = _useForm.setErrors;
  return {
    inputs: inputs,
    inputsErrors: inputsErrors,
    inputsSetErrors: inputsSetErrors,
    error: error,
    onSubmit: onSubmit,
    isLoading: isLoading,
    isSuccess: isSuccess,
    data: data
  };
};
var defaultInputsConfig$9 = [{
  label: "Email",
  field: "email",
  checkerFuncs: ["checkRequiredField", "checkEmailMask"],
  type: "email",
  id: "email",
  placeholder: "Type your email"
}];

var useForgotPassword = function useForgotPassword(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$8 : _ref$inputsConfig,
    authSlice = _ref.authSlice,
    useDispatch = _ref.useDispatch;
  var dispatch = useDispatch();
  var _profilesApi$useForgo = profilesApi.useForgotPasswordMutation(),
    _profilesApi$useForgo2 = _slicedToArray(_profilesApi$useForgo, 2),
    forgotPassword = _profilesApi$useForgo2[0],
    _profilesApi$useForgo3 = _profilesApi$useForgo2[1],
    isSuccess = _profilesApi$useForgo3.isSuccess,
    isLoading = _profilesApi$useForgo3.isLoading,
    data = _profilesApi$useForgo3.data;
  React.useEffect(function () {
    dispatch(authSlice.actions.logout());
    localStorage.removeItem("jwt");
    sessionStorage.removeItem("jwt");
  }, [authSlice === null || authSlice === void 0 ? void 0 : authSlice.actions]);
  var submitFunc = function submitFunc(_ref2) {
    var inputs = _ref2.inputs;
    forgotPassword({
      data: inputs
    });
  };
  var memoInputsConfig = React.useMemo(function () {
    return inputsConfig;
  }, [inputsConfig]);
  var _useForm = useForm({
      inputsConfig: memoInputsConfig,
      submitFunc: submitFunc,
      inputPropsType: "object"
    }),
    inputs = _useForm.inputs,
    onSubmit = _useForm.onSubmit,
    setPassed = _useForm.setPassed;
  return {
    isLoading: isLoading,
    data: data,
    isSuccess: isSuccess,
    inputs: inputs,
    onSubmit: onSubmit,
    setPassed: setPassed
  };
};
var defaultInputsConfig$8 = [{
  title: "Email address*",
  label: "Email address",
  field: "email",
  checkerFuncs: ["checkRequiredField", "checkEmailMask"],
  type: "email",
  placeholder: "Type your email"
}];

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$9(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useLogin = function useLogin(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$7 : _ref$inputsConfig;
  var _profilesApi$useLogin = profilesApi.useLoginWithEmailAndPasswordMutation(),
    _profilesApi$useLogin2 = _slicedToArray(_profilesApi$useLogin, 2),
    loginWithEmailAndPassword = _profilesApi$useLogin2[0],
    _profilesApi$useLogin3 = _profilesApi$useLogin2[1],
    error = _profilesApi$useLogin3.error,
    data = _profilesApi$useLogin3.data,
    isSuccess = _profilesApi$useLogin3.isSuccess,
    isLoading = _profilesApi$useLogin3.isLoading,
    isFetching = _profilesApi$useLogin3.isFetching;
  var memoInputsConfig = React.useMemo(function () {
    return inputsConfig;
  }, [inputsConfig]);
  var submitFunc = function submitFunc(_ref2) {
    var inputs = _ref2.inputs;
    loginWithEmailAndPassword({
      identifier: inputs.email,
      password: inputs.password
    });
  };
  var _useForm = useForm({
      inputsConfig: memoInputsConfig,
      submitFunc: submitFunc,
      inputPropsType: "object"
    }),
    inputs = _useForm.inputs,
    setErrors = _useForm.setErrors,
    onSubmit = _useForm.onSubmit,
    changeBlockedInputs = _useForm.changeBlockedInputs,
    clearInputs = _useForm.clearInputs;
  React.useEffect(function () {
    if (error) {
      setErrors(function (prev) {
        var _error$data;
        var newErrors = _objectSpread$9({}, prev);
        if ((_error$data = error.data) !== null && _error$data !== void 0 && _error$data.error) {
          newErrors.email = {
            id: error.data.error.name,
            message: error.data.error.message
          };
          newErrors.password = {
            id: error.data.error.name,
            message: error.data.error.message
          };
        }
        return newErrors;
      });
    }
  }, [error, setErrors]);
  return {
    inputs: inputs,
    onSubmit: onSubmit,
    changeBlockedInputs: changeBlockedInputs,
    clearInputs: clearInputs,
    error: error,
    data: data,
    isSuccess: isSuccess,
    isLoading: isLoading,
    isFetching: isFetching
  };
};
var defaultInputsConfig$7 = [{
  field: "email",
  checkerFuncs: ["checkRequiredField"],
  type: "text",
  placeholder: "Type your email",
  label: "Email"
}, {
  field: "password",
  checkerFuncs: ["checkRequiredField"],
  config: {
    enableTypeChanging: true
  },
  label: "Password",
  type: "password",
  placeholder: "Type your password"
}, {
  field: "rememberCheckbox",
  checkerFuncs: [],
  type: "checkbox",
  defaultValue: true,
  id: "rememberCheckbox",
  label: "Remember"
}];

var useRegister = function useRegister(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$6 : _ref$inputsConfig;
  var _profilesApi$useRegis = profilesApi.useRegisterMutation(),
    _profilesApi$useRegis2 = _slicedToArray(_profilesApi$useRegis, 2),
    register = _profilesApi$useRegis2[0],
    _profilesApi$useRegis3 = _profilesApi$useRegis2[1],
    error = _profilesApi$useRegis3.error,
    isSuccess = _profilesApi$useRegis3.isSuccess,
    isLoading = _profilesApi$useRegis3.isLoading,
    data = _profilesApi$useRegis3.data;
  var memoInputsConfig = React.useMemo(function () {
    return inputsConfig;
  }, [inputsConfig]);
  var submitFunc = function submitFunc(_ref2) {
    var inputs = _ref2.inputs;
    register({
      data: inputs
    });
  };
  var afterPassed = function afterPassed(_ref3) {
    var clearInputs = _ref3.clearInputs;
    clearInputs();
  };
  var _useForm = useForm({
      inputsConfig: memoInputsConfig,
      afterPassed: afterPassed,
      submitFunc: submitFunc,
      inputPropsType: "object"
    }),
    inputs = _useForm.inputs,
    inputsSetErrors = _useForm.setErrors,
    inputsErrors = _useForm.errors,
    onSubmit = _useForm.onSubmit,
    setPassed = _useForm.setPassed;
  return {
    data: data,
    inputs: inputs,
    onSubmit: onSubmit,
    isSuccess: isSuccess,
    isLoading: isLoading,
    error: error,
    setPassed: setPassed,
    inputsErrors: inputsErrors,
    inputsSetErrors: inputsSetErrors
  };
};
var defaultInputsConfig$6 = [{
  label: "Username",
  field: "username",
  checkerFuncs: ["checkRequiredField"],
  type: "text",
  placeholder: "Type your username"
}, {
  label: "Email",
  field: "email",
  checkerFuncs: ["checkRequiredField", "checkEmailMask"],
  type: "email",
  id: "email",
  placeholder: "Type your email"
}, {
  label: "Password",
  field: "password",
  checkerFuncs: ["checkRequiredField", "checkPassword"],
  config: {
    enableTypeChanging: true
  },
  type: "password",
  placeholder: "Type your password"
}, {
  label: "Repeat password",
  field: "confirm_password",
  checkerFuncs: ["checkRequiredField", "checkEqualTo"],
  config: {
    equalTo: "password",
    enableTypeChanging: true
  },
  type: "password",
  placeholder: "Repeat your password"
}, {
  label: "I agree with terms and conditions",
  field: "agreement_checkbox",
  checkerFuncs: [],
  type: "checkbox",
  defaultValue: false
}];

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$8(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useResetPassword = function useResetPassword(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$5 : _ref$inputsConfig,
    authSlice = _ref.authSlice,
    useDispatch = _ref.useDispatch;
  var dispatch = useDispatch();
  React.useEffect(function () {
    dispatch(authSlice.actions.logout());
    localStorage.removeItem("jwt");
    sessionStorage.removeItem("jwt");
  }, [authSlice === null || authSlice === void 0 ? void 0 : authSlice.actions]);
  var _profilesApi$useReset = profilesApi.useResetPasswordMutation(),
    _profilesApi$useReset2 = _slicedToArray(_profilesApi$useReset, 2),
    resetPassword = _profilesApi$useReset2[0],
    _profilesApi$useReset3 = _profilesApi$useReset2[1],
    isSuccess = _profilesApi$useReset3.isSuccess,
    error = _profilesApi$useReset3.error,
    data = _profilesApi$useReset3.data,
    isLoading = _profilesApi$useReset3.isLoading;
  var submitFunc = function submitFunc(_ref2) {
    var inputs = _ref2.inputs;
    resetPassword({
      data: inputs
    });
  };
  var memoInputsConfig = React.useMemo(function () {
    return inputsConfig;
  }, [inputsConfig]);
  var _useForm = useForm({
      inputsConfig: memoInputsConfig,
      submitFunc: submitFunc,
      inputPropsType: "object"
    }),
    inputs = _useForm.inputs,
    onSubmit = _useForm.onSubmit,
    setInputsValues = _useForm.setInputsValues,
    inputsValues = _useForm.inputsValues,
    inputsErrors = _useForm.errors,
    setInputsErrors = _useForm.setErrors;
  React.useEffect(function () {
    if (typeof window !== "undefined") {
      var _URLSearchParams, _URL, _window;
      var code = (_URLSearchParams = new URLSearchParams((_URL = new URL((_window = window) === null || _window === void 0 ? void 0 : _window.location)) === null || _URL === void 0 ? void 0 : _URL.search)) === null || _URLSearchParams === void 0 ? void 0 : _URLSearchParams.get("code");
      setInputsValues(_objectSpread$8(_objectSpread$8({}, inputsValues), {}, {
        code: code
      }));
    }
  }, []);
  return {
    data: data,
    isLoading: isLoading,
    error: error,
    inputs: inputs,
    onSubmit: onSubmit,
    isSuccess: isSuccess,
    inputsErrors: inputsErrors,
    setInputsErrors: setInputsErrors
  };
};
var defaultInputsConfig$5 = [{
  label: "New Password",
  field: "password",
  checkerFuncs: ["checkRequiredField", "checkPassword"],
  config: {
    enableTypeChanging: true
  },
  type: "password",
  placeholder: "Type your new password"
}, {
  label: "Repeat New Password",
  field: "confirm_password",
  checkerFuncs: ["checkRequiredField", "checkEqualTo"],
  config: {
    equalTo: "password",
    enableTypeChanging: true
  },
  type: "password",
  placeholder: "Repeat your new password"
}, {
  title: "Code",
  field: "code",
  checkerFuncs: ["checkRequiredField"],
  type: "hidden"
}];

var usePhoneConfirmation = function usePhoneConfirmation(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$4 : _ref$inputsConfig,
    authSlice = _ref.authSlice;
  var auth = reactRedux.useSelector(authSlice.selectors.auth);
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    user = _useState2[0],
    setUser = _useState2[1];

  // Without hard memoization sendPhoneConfirmSms calls twice
  React.useEffect(function () {
    var _auth$user, _auth$user2;
    if (auth !== null && auth !== void 0 && (_auth$user = auth.user) !== null && _auth$user !== void 0 && _auth$user.phoneNumber && (auth === null || auth === void 0 ? void 0 : (_auth$user2 = auth.user) === null || _auth$user2 === void 0 ? void 0 : _auth$user2.phoneNumber) !== (user === null || user === void 0 ? void 0 : user.phoneNumber)) {
      setUser(auth.user);
    }
  }, [auth]);
  var _profilesApi$useSendC = profilesApi.useSendConfirmPhoneMutation(),
    _profilesApi$useSendC2 = _slicedToArray(_profilesApi$useSendC, 2),
    sendPhoneConfirmSms = _profilesApi$useSendC2[0],
    isUninitialized = _profilesApi$useSendC2[1].isUninitialized;
  React.useEffect(function () {
    if (user && isUninitialized) {
      sendPhoneConfirmSms({
        data: {
          phone_number: user.phoneNumber
        }
      });
    }
  }, [user, isUninitialized]);
  var memoInputsConfig = React.useMemo(function () {
    return inputsConfig;
  }, [inputsConfig]);
  var _profilesApi$useConfi = profilesApi.useConfirmPhoneMutation(),
    _profilesApi$useConfi2 = _slicedToArray(_profilesApi$useConfi, 2),
    confirmPhone = _profilesApi$useConfi2[0],
    _profilesApi$useConfi3 = _profilesApi$useConfi2[1],
    error = _profilesApi$useConfi3.error,
    isSuccess = _profilesApi$useConfi3.isSuccess;
  var submitFunc = function submitFunc(_ref2) {
    var inputs = _ref2.inputs;
    confirmPhone({
      confirmation: inputs.confirmation
    });
  };
  var _useForm = useForm({
      inputsConfig: memoInputsConfig,
      submitFunc: submitFunc,
      inputPropsType: "object"
    }),
    inputs = _useForm.inputs,
    onSubmit = _useForm.onSubmit,
    inputsErrors = _useForm.inputs,
    inputsSetErrors = _useForm.setErrors;
  return {
    inputs: inputs,
    onSubmit: onSubmit,
    error: error,
    isSuccess: isSuccess,
    inputsErrors: inputsErrors,
    inputsSetErrors: inputsSetErrors
  };
};
var defaultInputsConfig$4 = [{
  label: "Verification code",
  field: "confirmation",
  type: "otp",
  checkerFuncs: ["checkRequiredField"],
  id: "confirmation"
}];

var useSendPhoneConfirmation = function useSendPhoneConfirmation(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$3 : _ref$inputsConfig;
  var _profilesApi$useSendP = profilesApi.useSendPhoneConfirmationMutation(),
    _profilesApi$useSendP2 = _slicedToArray(_profilesApi$useSendP, 2),
    sendPhoneConfirmation = _profilesApi$useSendP2[0],
    _profilesApi$useSendP3 = _profilesApi$useSendP2[1],
    error = _profilesApi$useSendP3.error,
    isLoading = _profilesApi$useSendP3.isLoading,
    isSuccess = _profilesApi$useSendP3.isSuccess,
    data = _profilesApi$useSendP3.data;
  var submitFunc = function submitFunc(_ref2) {
    var inputs = _ref2.inputs;
    sendPhoneConfirmation({
      data: inputs
    });
  };
  var memoInputsConfig = React.useMemo(function () {
    return inputsConfig;
  }, [inputsConfig]);
  var _useForm = useForm({
      inputsConfig: memoInputsConfig,
      submitFunc: submitFunc,
      inputPropsType: "object"
    }),
    inputs = _useForm.inputs,
    inputsErrors = _useForm.errors,
    onSubmit = _useForm.onSubmit,
    inputsSetErrors = _useForm.setErrors;
  return {
    inputs: inputs,
    inputsErrors: inputsErrors,
    inputsSetErrors: inputsSetErrors,
    error: error,
    onSubmit: onSubmit,
    isLoading: isLoading,
    isSuccess: isSuccess,
    data: data
  };
};
var defaultInputsConfig$3 = [{
  label: "Phone",
  field: "phone",
  checkerFuncs: ["checkRequiredField"],
  type: "text",
  placeholder: "Type your phone"
}];

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useConfirmEmail = function useConfirmEmail(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$2 : _ref$inputsConfig,
    _ref$ping = _ref.ping,
    ping = _ref$ping === void 0 ? 30 : _ref$ping;
  var _profilesApi$useConfi = profilesApi.useConfirmEmailMutation(),
    _profilesApi$useConfi2 = _slicedToArray(_profilesApi$useConfi, 2),
    confirmEmail = _profilesApi$useConfi2[0],
    _profilesApi$useConfi3 = _profilesApi$useConfi2[1],
    isSuccess = _profilesApi$useConfi3.isSuccess,
    error = _profilesApi$useConfi3.error,
    data = _profilesApi$useConfi3.data,
    isLoading = _profilesApi$useConfi3.isLoading;
  var submitFunc = function submitFunc(_ref2) {
    var inputs = _ref2.inputs;
    confirmEmail({
      data: inputs
    });
  };
  var _profilesApi$useSendE = profilesApi.useSendEmailConfirmationMutation(),
    _profilesApi$useSendE2 = _slicedToArray(_profilesApi$useSendE, 2),
    sendEmailConfirmation = _profilesApi$useSendE2[0],
    _profilesApi$useSendE3 = _profilesApi$useSendE2[1],
    resendEmailConfirmationError = _profilesApi$useSendE3.error,
    resendEmailConfirmationIsLoading = _profilesApi$useSendE3.isLoading,
    resendEmailConfirmationIsSuccess = _profilesApi$useSendE3.isSuccess,
    resendEmailConfirmationData = _profilesApi$useSendE3.data;
  var _useState = React.useState(ping),
    _useState2 = _slicedToArray(_useState, 2),
    counter = _useState2[0],
    setCounter = _useState2[1];
  React.useEffect(function () {
    var timer = counter > 0 && setInterval(function () {
      return setCounter(counter - 1);
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, [counter]);
  var memoInputsConfig = React.useMemo(function () {
    return inputsConfig;
  }, [inputsConfig]);
  var _useForm = useForm({
      inputsConfig: memoInputsConfig,
      submitFunc: submitFunc,
      inputPropsType: "object"
    }),
    inputs = _useForm.inputs,
    onSubmit = _useForm.onSubmit,
    setInputsValues = _useForm.setInputsValues,
    inputsValues = _useForm.inputsValues,
    inputsErrors = _useForm.errors,
    setInputsErrors = _useForm.setErrors;
  var resendEmailConfirmation = function resendEmailConfirmation() {
    if (!inputsValues.email) {
      console.error("Pass email for resending code");
      setInputsErrors(function (prev) {
        var newErrors = _objectSpread$7({}, prev);
        newErrors.email = {
          id: "ValidationError",
          message: "Empty email address"
        };
        return newErrors;
      });
      return;
    }
    sendEmailConfirmation({
      data: {
        email: inputsValues.email
      }
    });
  };
  React.useEffect(function () {
    if (typeof window !== "undefined") {
      var _URLSearchParams, _URL, _window, _URLSearchParams2, _URL2, _window2;
      var code = (_URLSearchParams = new URLSearchParams((_URL = new URL((_window = window) === null || _window === void 0 ? void 0 : _window.location)) === null || _URL === void 0 ? void 0 : _URL.search)) === null || _URLSearchParams === void 0 ? void 0 : _URLSearchParams.get("code");
      var email = (_URLSearchParams2 = new URLSearchParams((_URL2 = new URL((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.location)) === null || _URL2 === void 0 ? void 0 : _URL2.search)) === null || _URLSearchParams2 === void 0 ? void 0 : _URLSearchParams2.get("email");
      setInputsValues(_objectSpread$7(_objectSpread$7({}, inputsValues), {}, {
        code: code,
        email: email
      }));
    }
  }, []);
  return {
    counter: counter,
    resendEmailConfirmation: resendEmailConfirmation,
    resendEmailConfirmationError: resendEmailConfirmationError,
    resendEmailConfirmationIsLoading: resendEmailConfirmationIsLoading,
    resendEmailConfirmationIsSuccess: resendEmailConfirmationIsSuccess,
    resendEmailConfirmationData: resendEmailConfirmationData,
    data: data,
    isLoading: isLoading,
    error: error,
    inputs: inputs,
    onSubmit: onSubmit,
    isSuccess: isSuccess,
    inputsErrors: inputsErrors,
    setInputsErrors: setInputsErrors
  };
};
var defaultInputsConfig$2 = [{
  field: "email",
  checkerFuncs: ["checkRequiredField"],
  type: "text",
  placeholder: "Type your email",
  label: "Email"
}, {
  title: "Code",
  field: "code",
  checkerFuncs: ["checkRequiredField"],
  label: "Code",
  placeholder: "Type code here",
  type: "text"
}];

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useConfirmPhone = function useConfirmPhone(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$1 : _ref$inputsConfig,
    _ref$ping = _ref.ping,
    ping = _ref$ping === void 0 ? 30 : _ref$ping;
  var _profilesApi$useConfi = profilesApi.useConfirmPhoneMutation(),
    _profilesApi$useConfi2 = _slicedToArray(_profilesApi$useConfi, 2),
    confirmEmail = _profilesApi$useConfi2[0],
    _profilesApi$useConfi3 = _profilesApi$useConfi2[1],
    isSuccess = _profilesApi$useConfi3.isSuccess,
    error = _profilesApi$useConfi3.error,
    data = _profilesApi$useConfi3.data,
    isLoading = _profilesApi$useConfi3.isLoading;
  var _profilesApi$useSendP = profilesApi.useSendPhoneConfirmationMutation(),
    _profilesApi$useSendP2 = _slicedToArray(_profilesApi$useSendP, 2),
    sendPhoneConfirmation = _profilesApi$useSendP2[0],
    _profilesApi$useSendP3 = _profilesApi$useSendP2[1],
    resendPhoneConfirmationError = _profilesApi$useSendP3.error,
    resendPhoneConfirmationIsLoading = _profilesApi$useSendP3.isLoading,
    resendPhoneConfirmationIsSuccess = _profilesApi$useSendP3.isSuccess,
    resendPhoneConfirmationData = _profilesApi$useSendP3.data;
  var _useState = React.useState(ping),
    _useState2 = _slicedToArray(_useState, 2),
    counter = _useState2[0],
    setCounter = _useState2[1];
  React.useEffect(function () {
    var timer = counter > 0 && setInterval(function () {
      return setCounter(counter - 1);
    }, 1000);
    return function () {
      return clearInterval(timer);
    };
  }, [counter]);
  var submitFunc = function submitFunc(_ref2) {
    var inputs = _ref2.inputs;
    confirmEmail({
      data: inputs
    });
  };
  var memoInputsConfig = React.useMemo(function () {
    return inputsConfig;
  }, [inputsConfig]);
  var _useForm = useForm({
      inputsConfig: memoInputsConfig,
      submitFunc: submitFunc,
      inputPropsType: "object"
    }),
    inputs = _useForm.inputs,
    onSubmit = _useForm.onSubmit,
    setInputsValues = _useForm.setInputsValues,
    inputsValues = _useForm.inputsValues,
    inputsErrors = _useForm.errors,
    setInputsErrors = _useForm.setErrors;
  var resendPhoneConfirmation = function resendPhoneConfirmation() {
    if (!inputsValues.phone) {
      console.error("Pass phone for resending code");
      setInputsErrors(function (prev) {
        var newErrors = _objectSpread$6({}, prev);
        newErrors.phone = {
          id: "ValidationError",
          message: "Empty phone address"
        };
        return newErrors;
      });
      return;
    }
    sendPhoneConfirmation({
      data: {
        phone: inputsValues.phone
      }
    });
  };
  React.useEffect(function () {
    if (typeof window !== "undefined") {
      var _URLSearchParams, _URL, _window, _URLSearchParams2, _URL2, _window2;
      var code = (_URLSearchParams = new URLSearchParams((_URL = new URL((_window = window) === null || _window === void 0 ? void 0 : _window.location)) === null || _URL === void 0 ? void 0 : _URL.search)) === null || _URLSearchParams === void 0 ? void 0 : _URLSearchParams.get("code");
      var phone = (_URLSearchParams2 = new URLSearchParams((_URL2 = new URL((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.location)) === null || _URL2 === void 0 ? void 0 : _URL2.search)) === null || _URLSearchParams2 === void 0 ? void 0 : _URLSearchParams2.get("phone");
      console.log("\uD83D\uDE80 ~ useEffect ~ phone", phone);
      setInputsValues(_objectSpread$6(_objectSpread$6({}, inputsValues), {}, {
        code: code,
        phone: phone
      }));
    }
  }, []);
  return {
    counter: counter,
    resendPhoneConfirmation: resendPhoneConfirmation,
    resendPhoneConfirmationError: resendPhoneConfirmationError,
    resendPhoneConfirmationIsLoading: resendPhoneConfirmationIsLoading,
    resendPhoneConfirmationIsSuccess: resendPhoneConfirmationIsSuccess,
    resendPhoneConfirmationData: resendPhoneConfirmationData,
    data: data,
    isLoading: isLoading,
    error: error,
    inputs: inputs,
    onSubmit: onSubmit,
    isSuccess: isSuccess,
    inputsErrors: inputsErrors,
    setInputsErrors: setInputsErrors
  };
};
var defaultInputsConfig$1 = [{
  field: "phone",
  checkerFuncs: ["checkRequiredField"],
  type: "text",
  placeholder: "Type your phone",
  label: "Phone"
}, {
  title: "Code",
  field: "code",
  checkerFuncs: ["checkRequiredField"],
  label: "Code",
  placeholder: "Type code here",
  type: "text"
}];

var sliceCreator = function (profilesApi) {
    var initialState = {
        id: null,
        jwt: typeof window !== "undefined" ? localStorage.getItem("jwt") : undefined,
        isAuthenticated: false,
        currentAuthFactor: "local",
    };
    return toolkit.createSlice({
        name: "auth",
        initialState: initialState,
        reducers: {
            logout: function () {
                localStorage.removeItem("jwt");
                return initialState;
            },
        },
        extraReducers: function (builder) {
            builder
                .addMatcher(profilesApi.endpoints.loginWithEmailAndPassword.matchFulfilled, function (state, action) {
                setUser(state, action);
            })
                .addMatcher(profilesApi.endpoints.register.matchFulfilled, function (state, action) {
                setUser(state, action);
            })
                .addMatcher(profilesApi.endpoints.checkOtp.matchFulfilled, function (state, action) {
                setUser(state, action);
            })
                .addMatcher(profilesApi.endpoints.checkOtp.matchFulfilled, function (state, action) {
                setUser(state, action);
            })
                .addMatcher(profilesApi.endpoints.confirmEmail.matchFulfilled, function (state, action) {
                setUser(state, action);
            })
                .addMatcher(profilesApi.endpoints.confirmPhone.matchFulfilled, function (state, action) {
                setUser(state, action);
            })
                .addMatcher(profilesApi.endpoints.getMe.matchFulfilled, function (state, action) {
                state.id = action.payload.id;
                state.isAuthenticated = true;
            });
        },
    });
};
var selectors = {
    selectIsAuthenticated: function (state) { return state.auth.isAuthenticated; },
    selectAccountId: function (state) { return state.auth.id; },
    selectJwt: function (state) { return state.auth.jwt; },
};
function setUser(state, action) {
    var _a = action.payload, user = _a.user, jwt = _a.jwt, nextAuthFactor = _a.nextAuthFactor;
    if (jwt) {
        state.id = user.id;
        state.isAuthenticated = true;
        state.jwt = jwt;
        localStorage.setItem("jwt", jwt);
        return;
    }
    if (nextAuthFactor) {
        state.currentAuthFactor = nextAuthFactor;
    }
}

var authSlice = /*#__PURE__*/Object.freeze({
    __proto__: null,
    sliceCreator: sliceCreator,
    selectors: selectors
});

var useUpdateMe = function useUpdateMe(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig : _ref$inputsConfig;
  var _profilesApi$useUpdat = profilesApi.useUpdateMeMutation(),
    _profilesApi$useUpdat2 = _slicedToArray(_profilesApi$useUpdat, 2),
    updateMe = _profilesApi$useUpdat2[0],
    _profilesApi$useUpdat3 = _profilesApi$useUpdat2[1],
    isSuccess = _profilesApi$useUpdat3.isSuccess,
    error = _profilesApi$useUpdat3.error,
    data = _profilesApi$useUpdat3.data,
    isLoading = _profilesApi$useUpdat3.isLoading;
  var accountId = reactRedux.useSelector(selectors.selectAccountId); //?

  var submitFunc = function submitFunc(_ref2) {
    var inputs = _ref2.inputs;

    updateMe({
      id: accountId,
      data: inputs
    });
  };
  var memoInputsConfig = React.useMemo(function () {
    return inputsConfig;
  }, [inputsConfig]);
  var _useForm = useForm({
      inputsConfig: memoInputsConfig,
      submitFunc: submitFunc,
      inputPropsType: "object"
    }),
    inputs = _useForm.inputs,
    onSubmit = _useForm.onSubmit,
    inputsErrors = _useForm.errors,
    setInputsErrors = _useForm.setErrors;
  return {
    data: data,
    isLoading: isLoading,
    error: error,
    inputs: inputs,
    onSubmit: onSubmit,
    isSuccess: isSuccess,
    inputsErrors: inputsErrors,
    setInputsErrors: setInputsErrors
  };
};
var defaultInputsConfig = [{
  field: "username",
  checkerFuncs: ["checkRequiredField"],
  type: "text",
  placeholder: "Type your username",
  label: "Username"
}];

var useMyProfileCreator = function (_a) {
    var profilesApi = _a.profilesApi, populate = _a.populate, useSelector = _a.useSelector;
    React.useEffect(function () {
        console.log("\uD83D\uDE80 new useMyProfile");
    }, []);
    var accountId = useSelector(selectors.selectAccountId);
    var jwtToken = useSelector(selectors.selectJwt);
    var _b = profilesApi.useGetMeQuery("", { skip: !jwtToken }), myProfileByMe = _b.data, meError = _b.error, refetchMe = _b.refetch, isUninitialized = _b.isUninitialized;
    var _c = profilesApi.useGetProfileByIdQuery({ id: accountId, populate: populate }, {
        skip: !myProfileByMe,
        pollingInterval: 60000,
    }), filledProfile = _c.data, refetchProfileById = _c.refetch;
    React.useEffect(function () {
        if (!isUninitialized &&
            meError &&
            ((meError === null || meError === void 0 ? void 0 : meError.status) !== 403 || (meError === null || meError === void 0 ? void 0 : meError.status) !== 401)) {
            // const refetchTm = setTimeout(() => {
            //   refetchMe();
            //   clearTimeout(refetchTm);
            // }, 2000);
            return;
        }
    }, [meError]);
    var profile = React.useMemo(function () {
        var me = accountId
            ? __assign(__assign({}, (myProfileByMe || {})), (filledProfile || {})) : {};
        var refetch = function () {
            refetchMe();
            refetchProfileById();
        };
        return { me: me, refetch: refetch };
    }, [myProfileByMe, filledProfile]);
    return profile;
};

var useAuth = {
  useSendEmailConfirmation: useSendEmailConfirmation,
  usePhoneConfirmation: usePhoneConfirmation,
  useForgotPassword: useForgotPassword,
  useLogin: useLogin,
  useRegister: useRegister,
  useResetPassword: useResetPassword,
  useSendPhoneConfirmation: useSendPhoneConfirmation,
  useConfirmEmail: useConfirmEmail,
  useConfirmPhone: useConfirmPhone,
  useUpdateMe: useUpdateMe,
  useMyProfileCreator: useMyProfileCreator
};

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var hooks = _objectSpread$5({
  useDetectMouseover: useDetectMouseover$1,
  useDetectOutsideClick: useDetectOutsideClick$1,
  useLookupTable: useLookupTable,
  useBreakpoint: useBreakpoint$1,
  useSetParentsInput: useSetParentsInput,
  useStyleRewriter: useStyleRewriter$6,
  useForm: useForm,
  useChildForm: useChildForm,
  useDomMeasure: useDomMeasure,
  useDebounce: useDebounce
}, useAuth);

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}

// interface IStrapiParams {
//   filters?: object;
//   populate?: object;
//   fields?: object;
//   sort?: Array<string>;
//   pagination?: object;
// }

// type IQueryParams = {
//   id: string;
//   filters?: object;
//   populate?: object;
//   fields?: object;
//   sort?: Array<string>;
//   pagination?: object;
// };

// type IUseGetQuery = UseQuery<
//   QueryDefinition<
//     any,
//     BaseQueryFn<
//       string | FetchArgs,
//       unknown,
//       FetchBaseQueryError,
//       any,
//       FetchBaseQueryMeta
//     >,
//     string,
//     any,
//     "backend"
//   >
// >;

// type IUseMutation = UseMutation<
//   MutationDefinition<
//     any,
//     BaseQueryFn<
//       string | FetchArgs,
//       unknown,
//       FetchBaseQueryError,
//       any,
//       FetchBaseQueryMeta
//     >,
//     string,
//     any,
//     "backend"
//   >
// >;

// type TBuild = EndpointBuilder<
//   BaseQueryFn<
//     string | FetchArgs,
//     unknown,
//     FetchBaseQueryError,
//     any,
//     FetchBaseQueryMeta
//   >,
//   string,
//   "backend"
// >;

// type TProfilesHooks = {
//   useGetMeQuery: IUseGetQuery;
//   useLazyGetMeQuery: IUseGetQuery;
//   useGetProfileByIdQuery: IUseGetQuery;
//   useLazyGetProfileByIdQuery: IUseGetQuery;
//   useConfirmPhoneMutation: IUseMutation;
//   useLoginWithEmailAndPasswordMutation: IUseMutation;
//   useSendConfirmPhoneMutation: IUseMutation;
//   useConfirmEmailMutation: IUseMutation;
//   useForgotPasswordMutation: IUseMutation;
//   useResetPasswordMutation: IUseMutation;
//   useCheckOtpMutation: IUseMutation;
//   useSendEmailCodeMutation: IUseMutation;
//   useUpdateMeMutation: IUseMutation;
//   useRegisterMutation: IUseMutation;
//   useGenerateOtpQuery: IUseGetQuery;
// };

// type TBackendServicApi = Api<
//   BaseQueryFn<
//     string | FetchArgs,
//     unknown,
//     FetchBaseQueryError,
//     any,
//     FetchBaseQueryMeta
//   >,
//   any,
//   "backend",
//   string,
//   any
// >;

var prepareDataToSend = function prepareDataToSend(params) {
  var data = params.data,
    files = params.files;
  var clearedData = removeEmptyFields({
    data: data,
    files: files
  });
  console.log("\uD83D\uDE80 ~ clearedData", clearedData);
  var formData = new FormData();
  formData.append("data", JSON.stringify(clearedData));
  if (files) {
    appendFilesToFormData(formData, files);
  }
  return formData;
};
function createProfilesApi(backendServiceApi) {
  var profilesApi = backendServiceApi.injectEndpoints({
    endpoints: function endpoints(build) {
      return {
        getMe: build.query({
          query: function query() {
            console.log("\uD83D\uDE80 ~ createProfilesApi ~ \"getMe\"", "getMe");
            return {
              url: "users/me"
            };
          },
          transformResponse: function transformResponse(item) {
            console.log("\uD83D\uDE80 ~ createProfilesApi ~ item transformResponse", item);
            return transformResponseItem(item);
          },
          providesTags: function providesTags(result) {
            return result ? [{
              type: "Profile",
              id: result.id
            }] : [];
          }
        }),
        loginWithEmailAndPassword: build.mutation({
          query: function query(_ref) {
            var identifier = _ref.identifier,
              password = _ref.password;
            return {
              method: "POST",
              url: "auth/local",
              body: {
                identifier: identifier,
                password: password
              }
            };
          },
          transformResponse: function transformResponse(res) {
            return transformResponseItem(res);
          }
        }),
        checkOtp: build.mutation({
          query: function query(params) {
            var userId = params.userId,
              code = params.code;
            return {
              url: "auth/check-otp/".concat(userId),
              params: {
                code: code
              }
            };
          },
          transformResponse: transformResponseItem
        }),
        sendEmailConfirmation: build.mutation({
          query: function query(_ref2) {
            var data = _ref2.data;
            return {
              url: "auth/send-email-confirmation",
              method: "POST",
              body: data
            };
          },
          transformResponse: transformResponseItem
        }),
        confirmEmail: build.mutation({
          query: function query(_ref3) {
            var data = _ref3.data;
            var stringifiedParams = qs__default["default"].stringify(data);
            // console.log(
            //   `🚀 ~ createProfilesApi ~ stringifiedParams`,
            //   stringifiedParams
            // );

            return {
              url: "auth/email-confirmation?".concat(stringifiedParams)
            };
          },
          transformResponse: transformResponseItem
        }),
        sendPhoneConfirmation: build.mutation({
          query: function query(_ref4) {
            var data = _ref4.data;
            return {
              url: "auth/send-phone-confirmation",
              method: "POST",
              body: data
            };
          }
        }),
        confirmPhone: build.mutation({
          query: function query(_ref5) {
            var data = _ref5.data;
            var stringifiedParams = qs__default["default"].stringify(data); //?

            return {
              url: "auth/phone-confirmation?".concat(stringifiedParams)
            };
          }
        }),
        forgotPassword: build.mutation({
          query: function query(_ref6) {
            var data = _ref6.data;
            // console.log(`🚀 ~ createProfilesApi ~ data`, data);
            return {
              url: "auth/forgot-password",
              method: "POST",
              body: data
            };
          },
          transformResponse: transformResponseItem
        }),
        resetPassword: build.mutation({
          query: function query(_ref7) {
            var data = _ref7.data;
            console.log("\uD83D\uDE80 ~ createProfilesApi ~ data", data);
            return {
              url: "auth/reset-password",
              method: "POST",
              body: data
            };
          },
          transformResponse: transformResponseItem
        }),
        register: build.mutation({
          query: function query(_ref8) {
            var data = _ref8.data;
            return {
              url: "auth/local/register",
              method: "POST",
              body: data
            };
          },
          transformResponse: transformResponseItem
        }),
        updateMe: build.mutation({
          query: function query(params) {
            var id = params.id; //?

            var formData = prepareDataToSend(params);
            return {
              url: "users/".concat(id),
              method: "PUT",
              body: formData
            };
          },
          transformResponse: transformResponseItem,
          invalidatesTags: function invalidatesTags(_result, _error, _ref9) {
            var id = _ref9.id;
            return [{
              type: "Profile",
              id: id
            }];
          }
        }),
        getProfileById: build.query({
          query: function query(params) {
            var id = params.id,
              populate = params.populate;
            return {
              url: "users/".concat(id),
              params: {
                populate: populate
              }
            };
          },
          transformResponse: transformResponseItem,
          providesTags: function providesTags(result, _error, id) {
            return result ? [{
              type: "Profile",
              id: id
            }] : [];
          }
        }),
        generateOtp: build.query({
          query: function query() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            _objectDestructuringEmpty(params);
            return {
              url: "auth/otp-secret"
            };
          },
          transformResponse: transformResponseItem,
          invalidatesTags: function invalidatesTags(_result, _error, _ref10) {
            _ref10.id;
            return [];
          }
        })
      };
    }
  });
  var useGetMeQuery = profilesApi.useGetMeQuery,
    useLazyGetMeQuery = profilesApi.useLazyGetMeQuery,
    useGetProfileByIdQuery = profilesApi.useGetProfileByIdQuery,
    useLazyGetProfileByIdQuery = profilesApi.useLazyGetProfileByIdQuery,
    useConfirmPhoneMutation = profilesApi.useConfirmPhoneMutation,
    useConfirmEmailMutation = profilesApi.useConfirmEmailMutation,
    useLoginWithEmailAndPasswordMutation = profilesApi.useLoginWithEmailAndPasswordMutation,
    useSendPhoneConfitmationMutation = profilesApi.useSendPhoneConfitmationMutation,
    useSendEmailConfirmationMutation = profilesApi.useSendEmailConfirmationMutation,
    useForgotPasswordMutation = profilesApi.useForgotPasswordMutation,
    useResetPasswordMutation = profilesApi.useResetPasswordMutation,
    useCheckOtpMutation = profilesApi.useCheckOtpMutation,
    useSendConfirmEmailMutation = profilesApi.useSendConfirmEmailMutation,
    useUpdateMeMutation = profilesApi.useUpdateMeMutation,
    useRegisterMutation = profilesApi.useRegisterMutation,
    useGenerateOtpQuery = profilesApi.useGenerateOtpQuery;
  return {
    profilesApi: profilesApi,
    hooks: {
      useGetMeQuery: useGetMeQuery,
      useLazyGetMeQuery: useLazyGetMeQuery,
      useGetProfileByIdQuery: useGetProfileByIdQuery,
      useLazyGetProfileByIdQuery: useLazyGetProfileByIdQuery,
      useConfirmPhoneMutation: useConfirmPhoneMutation,
      useConfirmEmailMutation: useConfirmEmailMutation,
      useLoginWithEmailAndPasswordMutation: useLoginWithEmailAndPasswordMutation,
      useSendPhoneConfitmationMutation: useSendPhoneConfitmationMutation,
      useSendEmailConfirmationMutation: useSendEmailConfirmationMutation,
      useForgotPasswordMutation: useForgotPasswordMutation,
      useResetPasswordMutation: useResetPasswordMutation,
      useCheckOtpMutation: useCheckOtpMutation,
      useSendConfirmEmailMutation: useSendConfirmEmailMutation,
      useUpdateMeMutation: useUpdateMeMutation,
      useRegisterMutation: useRegisterMutation,
      useGenerateOtpQuery: useGenerateOtpQuery
    }
  };
}

var redux = {
  slices: {
    authSlice: authSlice
  },
  queries: {
    profiles: {
      createProfilesApi: createProfilesApi
    }
  }
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var useStyleRewriter$5 = hooks.useStyleRewriter;
var DropdownContainer = function DropdownContainer(_ref) {
  var children = _ref.children,
    containerClassName = _ref.containerClassName,
    className = _ref.className,
    dropdownRef = _ref.dropdownRef;
  var srClassName = useStyleRewriter$5(baseClasses$2, className);
  var srContainerClassName = useStyleRewriter$5(baseContainerClassName$5, containerClassName);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: dropdownRef,
    className: srContainerClassName
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srClassName
  }, children));
};
var baseContainerClassName$5 = "\n  @pn absolute\n  @wh w-full\n  @mn mt-2\n  @zi z-50\n  @it top-full left-0\n";
var baseClasses$2 = "\n  @dy flex\n  @fxd flex-col\n  @pn relative\n  @wh w-full\n";

var useStyleRewriter$4 = hooks.useStyleRewriter;
var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
    _ref$visible = _ref.visible,
    visible = _ref$visible === void 0 ? true : _ref$visible,
    tooltipRef = _ref.tooltipRef,
    className = _ref.className,
    tooltipPosition = _ref.tooltipPosition;
  var srClasses = useStyleRewriter$4(baseClasses$1, className);
  var tooltipClasses = React.useMemo(function () {
    switch (tooltipPosition) {
      case "left-bottom":
        return "tooltip-left-bottom";
      case "left-top":
        return;
      case "top-left":
        return;
      case "top-right":
        return;
      case "right-top":
        return;
      case "right-bottom":
        return;
      case "bottom-right":
        return;
      case "bottom-left":
        return;
    }
  }, [tooltipPosition]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: tooltipRef,
    className: "".concat(visible ? "opacity-100 w-auto" : "opacity-0", " ").concat(srClasses, " ").concat(tooltipClasses)
  }, children);
};
var baseClasses$1 = "\n    @pn absolute\n    @wh w-fit\n    @it left-0 top-0\n    @tta text-center \n    @bxsw shadow-400\n    @brw border\n    @brc border-true-gray-150\n    @bdc bg-white \n    @pg p-1 \n    @brr rounded-8px \n    @ttc text-black\n  ";

var _excluded$7 = ["children", "SmartButtonRef"],
  _excluded2$1 = ["Link", "children", "className", "linkProps"];
var useStyleRewriter$3 = hooks.useStyleRewriter,
  useDetectMouseover = hooks.useDetectMouseover,
  useDetectOutsideClick = hooks.useDetectOutsideClick;
var SmartButton = function SmartButton(_ref) {
  var disabled = _ref.disabled,
    className = _ref.className,
    disabledClassName = _ref.disabledClassName,
    children = _ref.children,
    tooltipPosition = _ref.tooltipPosition,
    _ref$href = _ref.href,
    href = _ref$href === void 0 ? "" : _ref$href,
    DropdownItems = _ref.dropdownItems,
    _ref$dropdownContaine = _ref.dropdownContainerClassName,
    dropdownContainerClassName = _ref$dropdownContaine === void 0 ? "" : _ref$dropdownContaine,
    _ref$dropdownClassNam = _ref.dropdownClassName,
    dropdownClassName = _ref$dropdownClassNam === void 0 ? "" : _ref$dropdownClassNam,
    dropdownProps = _ref.dropdownProps,
    TooltipItems = _ref.tooltipItems,
    _ref$tooltipContainer = _ref.tooltipContainerClasses,
    tooltipContainerClasses = _ref$tooltipContainer === void 0 ? "" : _ref$tooltipContainer,
    onClickCb = _ref.onClick,
    _ref$linkProps = _ref.linkProps,
    linkProps = _ref$linkProps === void 0 ? [] : _ref$linkProps,
    _ref$Link = _ref.Link,
    Link = _ref$Link === void 0 ? function () {
      return undefined;
    } : _ref$Link;
  var dropdownRef = React.useRef(null);
  var SmartButtonRef = React.useRef(null);
  var _useDetectOutsideClic = useDetectOutsideClick(SmartButtonRef, false),
    _useDetectOutsideClic2 = _slicedToArray(_useDetectOutsideClic, 2),
    isDropdownOpen = _useDetectOutsideClic2[0],
    setIsDropdownOpen = _useDetectOutsideClic2[1];
  var onClick = function onClick(e) {
    var _dropdownRef$current;
    if (DropdownItems && !((_dropdownRef$current = dropdownRef.current) !== null && _dropdownRef$current !== void 0 && _dropdownRef$current.contains(e.target))) {
      setIsDropdownOpen(!isDropdownOpen);
    }
    return onClickCb && onClickCb(e);
  };
  var _useDetectMouseover = useDetectMouseover(SmartButtonRef, false),
    _useDetectMouseover2 = _slicedToArray(_useDetectMouseover, 1),
    isMouseOver = _useDetectMouseover2[0];
  var statusClassName = React.useMemo(function () {
    if (disabled) {
      return disabledClassName ? disabledClassName : "@pre pointer-events-none";
    }
    return className;
  }, [disabled, className]);
  var srClasses = useStyleRewriter$3(baseButtonClassName, statusClassName);
  var Element = href ? LinkSmartButton : DivSmartButton;
  var elementProps = href ? {
    Link: Link,
    href: href,
    passHref: true,
    className: srClasses,
    linkProps: linkProps
  } : {
    className: srClasses
  };
  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(Element, _extends({
    SmartButtonRef: SmartButtonRef,
    onClick: disabled ? function () {} : onClick
  }, elementProps), typeof children === "function" ? children({
    isMouseOver: isMouseOver
  }) : children, DropdownItems && /*#__PURE__*/React__default["default"].createElement(transitionComponent.Transition, _extends({
    show: isDropdownOpen
  }, contentTransitionProps$2), /*#__PURE__*/React__default["default"].createElement(DropdownContainer, {
    containerClassName: dropdownContainerClassName,
    className: dropdownClassName,
    dropdownRef: dropdownRef
  }, /*#__PURE__*/React__default["default"].createElement(DropdownItems, _extends({}, dropdownProps, {
    setIsDropdownOpen: setIsDropdownOpen
  })))), TooltipItems && /*#__PURE__*/React__default["default"].createElement(transitionComponent.Transition, _extends({
    show: isMouseOver
  }, tooltipTransitionProps), /*#__PURE__*/React__default["default"].createElement(Tooltip, {
    tooltipPosition: tooltipPosition,
    className: tooltipContainerClasses,
    visible: isMouseOver
  }, /*#__PURE__*/React__default["default"].createElement(TooltipItems, null)))));
};
var baseButtonClassName = "\n  @pn relative\n  @cr cursor-pointer\n  @tndn duration-200";
var DivSmartButton = function DivSmartButton(_ref2) {
  var children = _ref2.children,
    SmartButtonRef = _ref2.SmartButtonRef,
    props = _objectWithoutProperties(_ref2, _excluded$7);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    ref: SmartButtonRef
  }, props), children);
};
var LinkSmartButton = function LinkSmartButton(_ref3) {
  var _ref3$Link = _ref3.Link,
    Link = _ref3$Link === void 0 ? function () {} : _ref3$Link,
    children = _ref3.children,
    className = _ref3.className,
    _ref3$linkProps = _ref3.linkProps,
    linkProps = _ref3$linkProps === void 0 ? [] : _ref3$linkProps,
    props = _objectWithoutProperties(_ref3, _excluded2$1);
  var linkAttributes = [];
  if (linkProps.length) {
    linkAttributes = linkProps.map(function (_ref4) {
      var name = _ref4.name,
        value = _ref4.value;
      return [name, value];
    });
    linkAttributes = Object.fromEntries(linkAttributes);
  }
  return /*#__PURE__*/React__default["default"].createElement(Link, props, /*#__PURE__*/React__default["default"].createElement("a", _extends({}, linkAttributes, {
    className: className
  }), children));
};
var contentTransitionProps$2 = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0"
};
var tooltipTransitionProps = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 scale-50",
  enterTo: "opacity-100 scale-100",
  leave: "ease-in duration-300",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-50"
};

var useStyleRewriter$2 = hooks.useStyleRewriter;
var ModalComponent$1 = function ModalComponent(_ref) {
  var _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    _ref$setShow = _ref.setShow,
    _setShow = _ref$setShow === void 0 ? function () {} : _ref$setShow,
    _ref$RenderCard = _ref.RenderCard,
    RenderCard = _ref$RenderCard === void 0 ? function () {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
    } : _ref$RenderCard,
    _ref$CloseButton = _ref.CloseButton,
    CloseButton = _ref$CloseButton === void 0 ? DefaultCloseButton : _ref$CloseButton,
    _ref$popupWindowClass = _ref.popupWindowClasses,
    popupWindowClasses = _ref$popupWindowClass === void 0 ? "" : _ref$popupWindowClass,
    _ref$closeButtonClass = _ref.closeButtonClasses,
    closeButtonClasses = _ref$closeButtonClass === void 0 ? "" : _ref$closeButtonClass,
    _ref$layoutClasses = _ref.layoutClasses,
    layoutClasses = _ref$layoutClasses === void 0 ? "" : _ref$layoutClasses,
    _ref$containerClasses = _ref.containerClasses,
    containerClasses = _ref$containerClasses === void 0 ? "" : _ref$containerClasses,
    _ref$removeFromDom = _ref.removeFromDom,
    removeFromDom = _ref$removeFromDom === void 0 ? true : _ref$removeFromDom,
    _ref$transitionDurati = _ref.transitionDuration,
    duration = _ref$transitionDurati === void 0 ? 300 : _ref$transitionDurati,
    _ref$renderCardProps = _ref.renderCardProps,
    renderCardProps = _ref$renderCardProps === void 0 ? {} : _ref$renderCardProps,
    _ref$hideDocumentOver = _ref.hideDocumentOverflow,
    hideDocumentOverflow = _ref$hideDocumentOver === void 0 ? true : _ref$hideDocumentOver,
    _ref$hideCloseButton = _ref.hideCloseButton,
    hideCloseButton = _ref$hideCloseButton === void 0 ? false : _ref$hideCloseButton;
  var _useState = React.useState(show),
    _useState2 = _slicedToArray(_useState, 2),
    showLayout = _useState2[0],
    setShowLayout = _useState2[1];
  var srLayoutClasses = useStyleRewriter$2(baseLayoutClasses, layoutClasses);
  var srPopupWindowClasses = useStyleRewriter$2("@pre pointer-events-auto @tnp transition @tm transform z-40 @pn relative", popupWindowClasses);
  var srContainerClasses = useStyleRewriter$2(baseContainerClasses, containerClasses);
  var changePopup = function changePopup(bool) {
    if (bool) {
      if (hideDocumentOverflow) {
        document.body.style.overflow = "hidden";
      }
      setShowLayout(true);
    } else {
      if (hideDocumentOverflow) {
        document.body.style.overflow = "auto";
      }
      setTimeout(function () {
        setShowLayout(false);
      }, duration - 50);
    }
  };
  React.useEffect(function () {
    if (showLayout || show) changePopup(show);
  }, [show]);

  // close popup on 'escape' key
  React.useEffect(function () {
    var changePopupListener = function changePopupListener(e) {
      if (e.code === "Escape") {
        _setShow(false);
        changePopup(false);
      }
    };
    window.addEventListener("keydown", changePopupListener);
    return function () {
      window.removeEventListener("keydown", changePopupListener);
      document.body.style.overflow = null;
    };
  }, []);
  var TransitionElement = removeFromDom ? TransitionComponent : PlainDiv;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(showLayout ? "z-30 block" : "-z-1", " ").concat(srContainerClasses, " ")
  }, /*#__PURE__*/React__default["default"].createElement(TransitionElement, {
    baseClasses: "fixed inset-0 pointer-events-auto duration-".concat(duration, " transition z-10"),
    show: show,
    transitionProps: layoutTransitionProps
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "transition fixed inset-0"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: function onClick() {
      return _setShow(false);
    },
    className: srLayoutClasses
  }))), /*#__PURE__*/React__default["default"].createElement(TransitionElement, {
    baseClasses: "pointer-events-auto transition duration-".concat(duration, " transform z-40 relative"),
    show: show,
    id: "modal",
    changePopup: _setShow,
    transitionProps: contentTransitionProps$1
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srPopupWindowClasses
  }, /*#__PURE__*/React__default["default"].createElement(RenderCard, _extends({}, renderCardProps, {
    show: show,
    setShow: _setShow
  })))), !hideCloseButton && show ? /*#__PURE__*/React__default["default"].createElement(CloseButton, {
    setShow: function setShow(bool) {
      return _setShow(bool);
    },
    closeButtonClasses: closeButtonClasses
  }) : null);
};
var DefaultCloseButton = function DefaultCloseButton(_ref2) {
  var setShow = _ref2.setShow;
    _ref2.closeButtonClasses;
  return /*#__PURE__*/React__default["default"].createElement(SmartButton, {
    onClick: function onClick() {
      return setShow(false);
    },
    className: "@pn absolute @it right-[20px] top-[20px] @ttc text-white hover:text-neutral-550 @wh w-12 @zi z-50 @cr cursor-pointer"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    className: "fill-current w-12 h-12",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5659 5.24616C13.8936 4.91762 14.4257 4.91762 14.7542 5.24616C15.0827 5.57391 15.0827 6.10671 14.7542 6.43442L11.1711 10.0175L14.7042 13.5506C15.0302 13.8758 15.0302 14.4037 14.7042 14.7297C14.379 15.0558 13.8511 15.0558 13.5251 14.7297L9.99199 11.1966L6.43466 14.7539C6.10696 15.0817 5.57493 15.0817 5.2464 14.7539C4.91787 14.4262 4.91787 13.8942 5.2464 13.5656L8.80368 10.0084L5.27056 6.47527C4.94451 6.1501 4.94451 5.62226 5.27056 5.29621C5.59573 4.97016 6.12357 4.97016 6.44962 5.29621L9.98275 8.8293L13.5659 5.24616Z"
  })));
};
var baseLayoutClasses = "@pn fixed @it inset-0 @pre pointer-events-auto @zi z-10 @bdc bg-black @bdo bg-opacity-60";
var baseContainerClasses = "@pre pointer-events-none @dy flex @pn fixed @ow overflow-hidden @it bottom-0 inset-0 @pg px-5 py-10 @ani items-center @jyc justify-center";
var layoutTransitionProps = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0"
};
var contentTransitionProps$1 = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale -95",
  enterTo: "opacity-100 translate-y-0 sm:scale-100",
  leave: "ease-in duration-300",
  leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
  leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
};
var TransitionComponent = function TransitionComponent(_ref3) {
  var children = _ref3.children,
    show = _ref3.show,
    transitionProps = _ref3.transitionProps;
  return /*#__PURE__*/React__default["default"].createElement(transitionComponent.Transition, _extends({
    show: show
  }, transitionProps), children);
};
var PlainDiv = function PlainDiv(_ref4) {
  var children = _ref4.children,
    show = _ref4.show,
    transitionProps = _ref4.transitionProps,
    baseClasses = _ref4.baseClasses,
    _ref4$changePopup = _ref4.changePopup,
    changePopup = _ref4$changePopup === void 0 ? function () {} : _ref4$changePopup,
    id = _ref4.id;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    id: id,
    onClick: function onClick(e) {
      return e.target.id === id ? changePopup(false) : null;
    },
    className: "".concat(baseClasses, " ").concat(show ? transitionProps.enterTo : transitionProps.leaveTo)
  }, children);
};

var _excluded$6 = ["targetId"];
var ModalPortal$1 = function ModalPortal(_ref) {
  var _ref$targetId = _ref.targetId,
    targetId = _ref$targetId === void 0 ? "modal" : _ref$targetId,
    props = _objectWithoutProperties(_ref, _excluded$6);
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    domLoaded = _useState2[0],
    setDomLoaded = _useState2[1];
  React.useEffect(function () {
    if ((typeof window === "undefined" ? "undefined" : _typeof$1(window)) !== undefined && document.querySelector("#".concat(targetId))) {
      setDomLoaded(true);
    }
  }, []);
  return domLoaded && /*#__PURE__*/require$$0.createPortal( /*#__PURE__*/React__default["default"].createElement(ModalComponent$1, props), document.querySelector("#".concat(targetId)));
};

var _excluded$5 = ["showEffect", "ArrayItem", "array", "getRenderCardProps"];
var ModalArray = function ModalArray(_ref) {
  var _ref$showEffect = _ref.showEffect,
    showEffect = _ref$showEffect === void 0 ? function () {} : _ref$showEffect,
    ArrayItem = _ref.ArrayItem,
    array = _ref.array,
    getRenderCardProps = _ref.getRenderCardProps,
    props = _objectWithoutProperties(_ref, _excluded$5);
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var _useState3 = React.useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    currentItem = _useState4[0],
    setCurrentItem = _useState4[1];
  var modalComponentId = React.useMemo(function () {
    if (props.modalComponentId) {
      return props.modalComponentId;
    }
    var name = props.RenderCard.name;
    if (!name || name === "anonymous") {
      return "component".concat(Math.round(Math.random() * 10e5));
    }
    return name;
  }, []);
  React.useEffect(function () {
    showEffect({
      show: show,
      setShow: setShow
    });
  }, [ArrayItem ? show : props.show, props]);
  var showCurrentItem = function showCurrentItem(index) {
    setCurrentItem(index);
    setShow(true);
  };
  var renderCardProps = getRenderCardProps(array[currentItem], currentItem);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ModalPortal$1, _extends({
    modalComponentId: modalComponentId,
    renderCardProps: renderCardProps,
    setShow: setShow,
    show: show
  }, props)), array.map(function (item, index) {
    return /*#__PURE__*/React__default["default"].createElement(ArrayItem, {
      key: index,
      item: item,
      index: index,
      showCurrentItem: showCurrentItem
    });
  }));
};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useStyleRewriter$1 = hooks.useStyleRewriter;
var ModalComponent = function ModalComponent(_ref) {
  var _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    _ref$setShow = _ref.setShow,
    setShow = _ref$setShow === void 0 ? function () {} : _ref$setShow,
    _ref$RenderCard = _ref.RenderCard,
    RenderCard = _ref$RenderCard === void 0 ? function () {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
    } : _ref$RenderCard,
    _ref$popupWindowClass = _ref.popupWindowClasses,
    popupWindowClasses = _ref$popupWindowClass === void 0 ? "" : _ref$popupWindowClass,
    _ref$renderCardContai = _ref.renderCardContainerClasses,
    renderCardContainerClasses = _ref$renderCardContai === void 0 ? "" : _ref$renderCardContai,
    _ref$renderCardProps = _ref.renderCardProps,
    renderCardProps = _ref$renderCardProps === void 0 ? {} : _ref$renderCardProps,
    _ref$onCloseModalCb = _ref.onCloseModalCb,
    onCloseModalCb = _ref$onCloseModalCb === void 0 ? function () {} : _ref$onCloseModalCb,
    _ref$zIndex = _ref.zIndex,
    zIndex = _ref$zIndex === void 0 ? 50 : _ref$zIndex;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = React.useState(window.innerHeight),
    _useState4 = _slicedToArray(_useState3, 2),
    screenHeight = _useState4[0],
    setScreenHeight = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray(_useState5, 2);
    _useState6[0];
    var setScrollActive = _useState6[1];
  var srPopupWindowClasses = useStyleRewriter$1("fixed z-40 w-full h-95vh bg-white", popupWindowClasses);
  var srRenderCardContainerClasses = useStyleRewriter$1("w-full h-full mt-1 overflow-visible", renderCardContainerClasses);
  var modalHeight = screenHeight ? screenHeight * 0.9 : 0;
  var _useSpring = web.useSpring(function () {
      return {
        y: modalHeight
      };
    }),
    _useSpring2 = _slicedToArray(_useSpring, 2),
    y = _useSpring2[0].y,
    set = _useSpring2[1];
  var open = function open(_ref2) {
    var canceled = _ref2.canceled;
    if (!isOpen) setIsOpen(true);
    set({
      y: 0,
      immediate: false,
      config: canceled ? web.config.wobbly : web.config.stiff
    });
    document.querySelector("body").style.overflow = "hidden";
  };
  var close = function close() {
    var velocity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    document.querySelector("body").style.overflow = "auto";
    onCloseModalCb();
    setShow(false);
    set({
      y: modalHeight,
      immediate: false,
      config: _objectSpread$4(_objectSpread$4({}, web.config.stiff), {}, {
        velocity: velocity
      })
    });
    setIsOpen(false);
  };
  var bind = react.useDrag(function (state) {
    /**
     * @todo
     * !!! API was changed, need to fix
     *
     * Uncaught TypeError:
     * Cannot destructure property 'Symbol(Symbol.iterator)' of 'state' as it is undefined.
     */
    // console.log(`🚀 ~ state`, state);
    // const {
    //   last,
    //   vxvy: [],
    //   movement: [],
    //   cancel = () => {}, //
    //   canceled, //
    // } = state;
    // const [_, vy] = vxvy;
    // const [, my] = movement;
    // if (scrollActive) return;
    // if (my < -50) cancel();
    // if (last) {
    //   my > modalHeight * 0.5 || vy > 0.35 ? close(vy) : open({ canceled });
    // } else {
    //   set({ y: my, immediate: true });
    // }
  }, {
    from: function from() {
      return [0, y.get()];
    },
    filterTaps: true,
    bounds: {
      top: 0
    },
    rubberband: true
  });
  var bgStyle = {
    opacity: y.to([0, modalHeight], [0.5, 0], "clamp"),
    zIndex: y.to([0, modalHeight], [zIndex, -1], "clamp")
  };
  React.useEffect(function () {
    setRect({
      setScreenHeight: setScreenHeight
    });
    var setRectListener = function setRectListener() {
      return setRect({
        setScreenHeight: setScreenHeight
      });
    };
    window.addEventListener("resize", setRectListener);
    return function () {
      window.removeEventListener("resize", setRectListener);
      document.querySelector("body").style.overflow = "auto";
    };
  }, []);
  React.useEffect(function () {
    if (!show && !isOpen) return;
    if (show) setIsOpen(true);
    show ? open({}) : close();
  }, [show]);
  if (!isOpen) return null;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React__default["default"].createElement(web.a.div, {
    onClick: close,
    className: "fixed inset-0 bg-zinc-900 opacity-50",
    style: bgStyle
  }), /*#__PURE__*/React__default["default"].createElement(web.a.div, _extends({
    className: srPopupWindowClasses
  }, bind(), {
    style: {
      display: show ? "block" : "none",
      bottom: "calc(-100vh + ".concat(modalHeight, "px)"),
      touchAction: "none",
      height: "100vh",
      zIndex: "110",
      y: y
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative w-screen h-[90vh] bg-white  rounded-t-2xl pt-5"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute bg-white w-12 h-2 -top-4 left-1/2 transform -translate-x-1/2 rounded-full"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: srRenderCardContainerClasses,
    onTouchStart: function onTouchStart() {
      return setScrollActive(true);
    },
    onTouchEnd: function onTouchEnd() {
      return setScrollActive(false);
    },
    onMouseDown: function onMouseDown() {
      return setScrollActive(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setScrollActive(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement(RenderCard, _extends({
    setShow: setShow,
    show: show
  }, renderCardProps))))));
};
var setRect = function setRect(_ref3) {
  var setScreenHeight = _ref3.setScreenHeight;
  var height = window.innerHeight;
  setScreenHeight(height);
};

// const baseLayoutClasses = `@pn fixed @it inset-0 @pre pointer-events-auto @zi z-10 @bdc bg-gray-500 @bdo opacity-50`;

// const baseContainerClasses = `@pre pointer-events-none @dy flex @pn fixed @ow overflow-hidden @it bottom-0 inset-0 @ani items-end @jyc justify-end`;

var _excluded$4 = ["targetId"];
var ModalPortal = function ModalPortal(_ref) {
  var _ref$targetId = _ref.targetId,
    targetId = _ref$targetId === void 0 ? "modal" : _ref$targetId,
    props = _objectWithoutProperties(_ref, _excluded$4);
  return document.querySelector("#".concat(targetId)) ? /*#__PURE__*/require$$0.createPortal( /*#__PURE__*/React__default["default"].createElement(ModalComponent, props), document.querySelector("#".concat(targetId))) : null;
};

var _excluded$3 = ["children", "showEffect"];
var useStyleRewriter = hooks.useStyleRewriter,
  useBreakpoint = hooks.useBreakpoint;
var Modal = function Modal(_ref) {
  var children = _ref.children,
    _ref$showEffect = _ref.showEffect,
    showEffect = _ref$showEffect === void 0 ? function () {} : _ref$showEffect,
    props = _objectWithoutProperties(_ref, _excluded$3);
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var srChildContainerClasses = useStyleRewriter("@cr cursor-pointer @wh w-full @ht h-full", props.childContainerClasses);
  var modalComponentId = React.useMemo(function () {
    var name = props.RenderCard.name;
    if (!name || name === "anonymous") {
      return "component".concat(Math.round(Math.random() * 10e5));
    }
    return name;
  }, []);
  React.useEffect(function () {
    showEffect({
      show: show,
      setShow: setShow
    });
  }, [children ? show : props.show, props]);
  var useDesktopModal = useBreakpoint("md");
  var Component = useDesktopModal ? ModalPortal$1 : ModalPortal;
  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(Component, _extends({
    modalComponentId: props.modalComponentId ? props.modalComponentId : modalComponentId,
    setShow: children ? setShow : props.setShow,
    show: children ? show : props.show
  }, props)), children ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: srChildContainerClasses,
    onClick: function onClick() {
      return setShow(true);
    }
  }, children) : null);
};

var InputError = function InputError(_ref) {
  var error = _ref.error;
  return error.message ? /*#__PURE__*/React__default["default"].createElement("p", {
    className: baseClasses
  }, error.message) : null;
};
var baseClasses = "@ttc text-red-500 @fts text-[12px] @ttt normal-case @wh w-fit @leh leading-none text-left";

var InputOverlay = function InputOverlay(props) {
  var children = props.children,
    label = props.label,
    _props$labelContainer = props.labelContainerClassName,
    labelContainerClassName = _props$labelContainer === void 0 ? "" : _props$labelContainer,
    _props$labelClassName = props.labelClassName,
    labelClassName = _props$labelClassName === void 0 ? "" : _props$labelClassName,
    _props$labelInputCont = props.labelInputContainerClassName,
    labelInputContainerClassName = _props$labelInputCont === void 0 ? "" : _props$labelInputCont,
    error = props.error,
    ErrorComponent = props.ErrorComponent,
    PairComponent = props.PairComponent,
    LabelComponent = props.LabelComponent;
  var srLabelContainerClassName = useStyleRewriter$6(baseLabelContainerClasses, labelContainerClassName);
  var srLabelClassName = useStyleRewriter$6(baseLabelClassName$1, labelClassName);
  var srLabelInputContainerClassName = useStyleRewriter$6(baseLabelInputContainerClassName, labelInputContainerClassName);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: srLabelContainerClassName
  }, typeof LabelComponent === "function" && label ? /*#__PURE__*/React__default["default"].createElement(LabelComponent, props) : label ? /*#__PURE__*/React__default["default"].createElement("p", {
    className: srLabelClassName
  }, label) : null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srLabelInputContainerClassName
  }, children, typeof PairComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(PairComponent, props) : null), typeof ErrorComponent === "function" && error ? /*#__PURE__*/React__default["default"].createElement(ErrorComponent, props) : error ? /*#__PURE__*/React__default["default"].createElement(InputError, props) : null);
};
var baseLabelContainerClasses = "\n  @pn relative\n  @dy flex\n  @gp gap-2\n  @fxd flex-col\n  @wh w-full\n";
var baseLabelClassName$1 = "\n  @mn mb-0";
var baseLabelInputContainerClassName = "\n  @wh w-full\n  @dy flex\n  @jyc justify-start\n  @ani items-center\n  @pn relative\n";

var CheckboxInput = function CheckboxInput(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? false : _props$value,
    label = props.label,
    error = props.error,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$id = props.id,
    id = _props$id === void 0 ? Math.floor(Math.random() * 10000) : _props$id,
    inputContainerClassName = props.inputContainerClassName,
    labelClassName = props.labelClassName,
    inputClassName = props.inputClassName,
    _props$checkedInputCl = props.checkedInputClassName,
    checkedInputClassName = _props$checkedInputCl === void 0 ? "" : _props$checkedInputCl,
    Icon = props.Icon,
    InnerComponent = props.InnerComponent;
  var _useState = React.useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    localValue = _useState2[0],
    setLocalValue = _useState2[1];
  var srInputContainerClassName = useStyleRewriter$6(baseInputContainerClassName$3, inputContainerClassName);
  var srLabelClassName = useStyleRewriter$6(baseLabelClassName, labelClassName);
  var srInputClassName = useStyleRewriter$6(baseInputClassName$5, inputClassName, false);
  var resInputlassName = useStyleRewriter$6(srInputClassName, localValue ? checkedInputClassName : "");
  React.useEffect(function () {
    if (value !== localValue) {
      setLocalValue(value);
    }
    if (value == "") {
      setLocalValue(false);
    }
  }, []);
  React.useEffect(function () {
    var e = {
      target: {}
    };
    handleChange(e);
  }, [localValue]);
  var handleChange = function handleChange(e) {
    e.target.type = "checkbox";
    e.target.checked = localValue;
    e.target.id = id;
    onChange(e);
  };
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, _extends({}, props, {
    label: null,
    error: error
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: srInputContainerClassName
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: id,
    className: resInputlassName
  }, typeof Icon === "function" ? /*#__PURE__*/React__default["default"].createElement(Icon, _extends({}, props, {
    isChecked: localValue
  })) : null, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "checkbox",
    id: id,
    className: "hidden",
    onChange: function onChange() {},
    onClick: function onClick() {
      return setLocalValue(!localValue);
    },
    checked: localValue
  })), typeof InnerComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(InnerComponent, _extends({}, props, {
    onClick: function onClick() {
      return setLocalValue(!localValue);
    },
    isChecked: localValue
  })) : label ? /*#__PURE__*/React__default["default"].createElement("p", {
    onClick: function onClick() {
      return setLocalValue(!localValue);
    },
    className: srLabelClassName
  }, label) : null));
};
var baseInputContainerClassName$3 = "\n  @dy flex\n  @gp gap-2\n  @ani items-center\n";
var baseInputClassName$5 = "\n  @dy flex\n  @fxsk shrink-0\n  @ani items-center\n  @jyc justify-center\n  @cr cursor-pointer\n";
var baseLabelClassName = "\n  @cr cursor-pointer\n  @ttc text-black\n  @mn mb-0\n";

var Input = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    DropdownItems = _ref.dropdownItems,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? "" : _ref$value,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "text" : _ref$type,
    placeholder = _ref.placeholder,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {
      return null;
    } : _ref$onChange,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    Icon = _ref.Icon,
    _ref$inputClassName = _ref.inputClassName,
    inputClassName = _ref$inputClassName === void 0 ? "" : _ref$inputClassName,
    _ref$inputDisabledCla = _ref.inputDisabledClassName,
    inputDisabledClassName = _ref$inputDisabledCla === void 0 ? "" : _ref$inputDisabledCla,
    _ref$inputErrorClassN = _ref.inputErrorClassName,
    inputErrorClassName = _ref$inputErrorClassN === void 0 ? "" : _ref$inputErrorClassN,
    _ref$dropdownContaine = _ref.dropdownContainerClasses,
    dropdownContainerClasses = _ref$dropdownContaine === void 0 ? "" : _ref$dropdownContaine,
    _ref$inputContainerCl = _ref.inputContainerClassName,
    inputContainerClassName = _ref$inputContainerCl === void 0 ? "" : _ref$inputContainerCl,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? null : _ref$autoComplete,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? null : _ref$id,
    error = _ref.error,
    _ref$dropdownPosition = _ref.dropdownPosition,
    dropdownPosition = _ref$dropdownPosition === void 0 ? "left" : _ref$dropdownPosition,
    maxLength = _ref.maxLength,
    name = _ref.name;
  var dropdownRef = React.useRef(null);
  var inputContainerRef = React.useRef(null);
  var _useDetectOutsideClic = useDetectOutsideClick$1(inputContainerRef, false),
    _useDetectOutsideClic2 = _slicedToArray(_useDetectOutsideClic, 2),
    isDropdownOpen = _useDetectOutsideClic2[0],
    setIsDropdownOpen = _useDetectOutsideClic2[1];
  var onClick = function onClick(e) {
    setIsDropdownOpen(!isDropdownOpen);
  };
  var typeClasses = classesByType[type];
  var defaultClasses = useStyleRewriter$6(baseClassName, typeClasses, false);
  var baseClasses = useStyleRewriter$6(defaultClasses, inputClassName, false);
  var statusClasses = disabled ? inputDisabledClassName : error ? inputErrorClassName : "";
  var srClasses = useStyleRewriter$6(baseClasses, statusClasses);
  var srInputContainerClassName = useStyleRewriter$6(baseContainerClassName$4, inputContainerClassName);
  var baseDropdownContainerClasses = "@wh w-full @mn mt-1 @ht h-200px @ow overflow-y-scroll ".concat(dropdownPosition === "right" ? "@it left-auto right-0" : "@it inset-x-0");
  var srDropdownContainerClasses = useStyleRewriter$6(baseDropdownContainerClasses, dropdownContainerClasses, true);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: inputContainerRef,
    className: srInputContainerClassName
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    placeholder: placeholder,
    autoComplete: autoComplete,
    id: id,
    type: type == "select" ? "button" : type,
    className: srClasses,
    disabled: disabled ? true : false,
    onChange: onChange,
    onClick: onClick,
    value: value,
    ref: ref,
    maxLength: maxLength,
    name: name
  }), _typeof$1(Icon) === "function" ? /*#__PURE__*/React__default["default"].createElement(Icon, {
    onClick: onClick
  }) : null, children ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute h-full right-0 top-0 cursor-pointer"
  }, children) : null, DropdownItems ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "transition duration-200 ".concat(isDropdownOpen ? "opacity-100" : "pointer-events-none opacity-0")
  }, /*#__PURE__*/React__default["default"].createElement(DropdownContainer, {
    className: srDropdownContainerClasses,
    dropdownRef: dropdownRef
  }, /*#__PURE__*/React__default["default"].createElement(DropdownItems, {
    setIsDropdownOpen: setIsDropdownOpen
  }))) : null);
});
var classesByType = {
  select: "@cr cursor-pointer",
  text: "@cr cursor-text"
};
var baseContainerClassName$4 = "w-full relative";
var baseClassName = "\n  @bdc bg-transparent\n  @pn relative\n  @wh w-full\n  @brw border\n  @brs border-solid\n  @brc border-transparent\n  @tndn duration-200\n  @oe outline-none focus:outline-none hover:outline-none\n  @dy flex\n";

var TextInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var value = props.value,
    id = props.id,
    onChange = props.onChange,
    placeholder = props.placeholder,
    type = props.type,
    disabled = props.disabled,
    _props$enableTypeChan = props.enableTypeChanging,
    enableTypeChanging = _props$enableTypeChan === void 0 ? false : _props$enableTypeChan,
    inputClassName = props.inputClassName,
    Icon = props.Icon,
    name = props.name,
    ChangeInputTypeButton = props.ChangeInputTypeButton,
    inputErrorClassName = props.inputErrorClassName,
    inputDisabledClassName = props.inputDisabledClassName,
    inputContainerClassName = props.inputContainerClassName,
    error = props.error;
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, _extends({}, props, {
    PairComponent: enableTypeChanging && ChangeInputTypeButton ? ChangeInputTypeButton : null
  }), /*#__PURE__*/React__default["default"].createElement(Input, {
    ref: ref,
    value: value,
    id: id,
    onChange: onChange,
    placeholder: placeholder,
    type: type,
    disabled: disabled,
    Icon: Icon,
    inputClassName: inputClassName,
    inputDisabledClassName: inputDisabledClassName,
    inputErrorClassName: inputErrorClassName,
    inputContainerClassName: inputContainerClassName,
    name: name,
    error: error
  }));
});

var RangeInput = function RangeInput(props) {
  var _props$id = props.id,
    id = _props$id === void 0 ? Math.random() : _props$id,
    _props$value = props.value,
    value = _props$value === void 0 ? 0 : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$minValue = props.minValue,
    minValue = _props$minValue === void 0 ? 0 : _props$minValue,
    _props$maxValue = props.maxValue,
    maxValue = _props$maxValue === void 0 ? 100 : _props$maxValue,
    _props$minLimit = props.minLimit,
    minLimit = _props$minLimit === void 0 ? minValue : _props$minLimit,
    _props$maxLimit = props.maxLimit,
    maxLimit = _props$maxLimit === void 0 ? maxValue : _props$maxLimit,
    _props$range = props.range,
    range = _props$range === void 0 ? [0, maxValue * 0.25, maxValue * 0.5, maxValue * 0.75, maxValue] : _props$range,
    _props$tooltip = props.tooltip,
    tooltip = _props$tooltip === void 0 ? false : _props$tooltip,
    disabled = props.disabled,
    _props$onMouseUp = props.onMouseUp,
    onMouseUp = _props$onMouseUp === void 0 ? function () {} : _props$onMouseUp,
    inputClassName = props.inputClassName,
    rangeClassName = props.rangeClassName,
    activeRangeClassName = props.activeRangeClassName,
    label = props.label,
    error = props.error,
    Comp = props.Comp,
    _props$step = props.step,
    step = _props$step === void 0 ? 0.01 : _props$step,
    containerClassName = props.containerClassName;
  var rangeRef = React.useRef(null);
  var onMouseUpHandler = function onMouseUpHandler(e) {
    var value = +e.target.value;
    rangeRef.current.style.cursor = "grab";
    onMouseUp(e, value);
  };
  var onChangeHandler = function onChangeHandler(e) {
    var value = +e.target.value;
    onChange(e, value);
  };
  var srContainerClassName = useStyleRewriter$6(baseContainerClassName$3, containerClassName);
  var valueDividedByMaxValue = value / maxValue * 100 || 0;
  var srRangeClassName = useStyleRewriter$6(baseRangeClassName, rangeClassName);
  var srActiveRangeClassName = useStyleRewriter$6(baseActiveRangeClassName, activeRangeClassName);
  var srInputClassName = useStyleRewriter$6(baseInputClassName$4, inputClassName);
  var draggedItemStyle = React.useMemo(function () {
    return {
      left: "".concat(value / maxValue * 100 <= maxLimit / maxValue * 100 ? value / maxValue * 100 : maxLimit / maxValue * 100, "%")
    };
  }, [value]);
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, _extends({}, props, {
    label: label,
    error: error
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: srContainerClassName
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: circleStyle,
    className: srRangeClassName
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: "".concat(value / maxValue * 100 <= maxLimit / maxValue * 100 ? value / maxValue * 100 : maxLimit / maxValue * 100, "%")
    },
    className: srActiveRangeClassName
  }), typeof Comp === "function" ? /*#__PURE__*/React__default["default"].createElement(Comp, {
    style: draggedItemStyle
  }) : /*#__PURE__*/React__default["default"].createElement("div", {
    style: draggedItemStyle,
    className: srInputClassName
  })), tooltip && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute left-0 z-50",
    style: circleStyle
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      left: "".concat(valueDividedByMaxValue, "%")
    },
    className: "opacity-0 group-hover:opacity-100 absolute -top-10 bg-primary-700 text-white text-xs left-1/2 -translate-x-1/2 p-1 rounded-4px pointer-events-none"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute -bottom-1 bg-primary-700 left-1/2 -translate-x-1/2 rotate-45 w-2 h-2 rounded-1px"
  }), valueDividedByMaxValue || 0, "%")), /*#__PURE__*/React__default["default"].createElement("input", {
    disabled: disabled,
    list: id,
    ref: rangeRef,
    min: minValue,
    max: maxValue,
    step: step,
    onMouseDown: function onMouseDown() {
      return rangeRef.current.style.cursor = "grabbing";
    },
    onMouseUp: function onMouseUp(e) {
      return onMouseUpHandler(e);
    },
    onInput: function onInput(e) {
      return onChangeHandler(e);
    },
    type: "range",
    className: "w-full absolute h-full opacity-0 z-20",
    id: id,
    style: {
      width: "".concat((maxLimit - minLimit) / maxValue * 100, "%"),
      left: "calc(".concat(minLimit / maxValue * 100, "% )"),
      cursor: "grab",
      minWidth: "2%"
    },
    value: value
  }), range && /*#__PURE__*/React__default["default"].createElement(Datalist, {
    id: id,
    value: value,
    range: range
  })));
};
var baseContainerClassName$3 = "\n  @wh w-full\n  @dy flex\n  @ani items-center\n  @jyc justify-center\n  @gp group\n  @ht h-[8px] \n  @fxd flex-col\n  @pn relative\n";
var baseInputClassName$4 = "\n  @ht h-6\n  @wh w-6\n  @brr rounded-full\n  @bdc bg-white\n  @pn absolute\n  @it top-1/2\n  @tndn -translate-y-1/2 -translate-x-1/2\n  @zi z-50\n  @bxsw shadow-md\n";
var baseRangeClassName = "\n  @ht h-[8px]\n  @wh w-full\n  @it left-0\n  @brr rounded-full\n  @pn absolute\n  @zi z-10";
var baseActiveRangeClassName = "\n  @ht h-[8px]\n  @brr rounded-full\n  @pn absolute\n  @zi z-40";
var circleStyle = {
  width: "calc(100% - 12px)",
  left: "6px"
};
var datalistStyle = {
  borderRadius: "50%",
  minHeight: "12px",
  minWidth: "12px"
};
var Datalist = function Datalist(_ref) {
  var id = _ref.id,
    range = _ref.range,
    value = _ref.value;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute flex justify-between left-0 w-full h-full top-0 z-0",
    id: id
  }, range.map(function (item, index) {
    var isAchived = value >= item;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      style: datalistStyle,
      className: "relative top-1/2 -translate-y-1/2 flex-shrink-0 ".concat(isAchived ? "bg-primary-700" : "bg-primary-200", " ").concat(isAchived ? "border-primary-700" : "border-primary-200"),
      key: index
    });
  }));
};

var _excluded$2 = ["focus", "autoFocus"];
function usePrevious(value) {
  var ref = React.useRef();

  // Store current value in ref
  React.useEffect(function () {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
function SingleOTPInputComponent(props) {
  var focus = props.focus,
    autoFocus = props.autoFocus,
    rest = _objectWithoutProperties(props, _excluded$2);
  var inputRef = React.useRef(null);
  var prevFocus = usePrevious(!!focus);
  React.useEffect(function () {
    if (inputRef.current) {
      if (focus) {
        inputRef.current.focus();
      }
      if (focus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);
  return /*#__PURE__*/React__default["default"].createElement("input", _extends({
    ref: inputRef
  }, rest));
}
var SingleOTPInput = /*#__PURE__*/React.memo(SingleOTPInputComponent);

var OtpInput = function OtpInput(props) {
  var _props$length = props.length,
    length = _props$length === void 0 ? 6 : _props$length,
    _props$isNumberInput = props.isNumberInput,
    isNumberInput = _props$isNumberInput === void 0 ? true : _props$isNumberInput,
    autoFocus = props.autoFocus,
    disabled = props.disabled,
    onChangeOTP = props.onChange,
    containerClassName = props.containerClassName,
    inputClassName = props.inputClassName,
    inputErrorClassName = props.inputErrorClassName,
    error = props.error,
    id = props.id;
  var _useState = React.useState(autoFocus ? 0 : undefined),
    _useState2 = _slicedToArray(_useState, 2),
    activeInput = _useState2[0],
    setActiveInput = _useState2[1];
  var _useState3 = React.useState(Array(length).fill("")),
    _useState4 = _slicedToArray(_useState3, 2),
    otpValues = _useState4[0],
    setOTPValues = _useState4[1];

  // Helper to return OTP from inputs
  var handleOtpChange = function handleOtpChange(e, otp) {
    var otpValue = otp.join("");
    e.target.id = id;
    e.target.value = otpValue;
    onChangeOTP(e);
  };

  // Helper to return value with the right type: 'text' or 'number'
  var getRightValue = React.useCallback(function (str) {
    var changedValue = str;
    if (!isNumberInput) {
      return changedValue;
    }
    return !changedValue || /\d/.test(changedValue) ? changedValue : "";
  }, [isNumberInput]);

  // Change OTP value at focussing input
  var changeCodeAtFocus = React.useCallback(function (e, str) {
    var updatedOTPValues = _toConsumableArray(otpValues);
    updatedOTPValues[activeInput] = str[0] || "";
    setOTPValues(updatedOTPValues);
    handleOtpChange(e, updatedOTPValues);
  }, [activeInput, handleOtpChange, otpValues]);

  // Focus `inputIndex` input
  var focusInput = React.useCallback(function (inputIndex) {
    var selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
    setActiveInput(selectedIndex);
  }, [length]);
  var focusPrevInput = React.useCallback(function () {
    var clean = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (activeInput <= 0) return;
    focusInput(activeInput - 1);
    if (clean) {
      var updatedOTPValues = _toConsumableArray(otpValues);
      updatedOTPValues[activeInput - 1] = "";
      setOTPValues(updatedOTPValues);
    }
  }, [activeInput, focusInput, otpValues]);
  var focusNextInput = React.useCallback(function () {
    if (activeInput === length - 1) return;
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]);

  // Handle onFocus input
  var handleOnFocus = React.useCallback(function (index) {
    return function () {
      focusInput(index);
    };
  }, [focusInput]);

  // Handle onChange value for each input
  var handleOnChange = React.useCallback(function (e) {
    var val = getRightValue(e.currentTarget.value);
    if (!val) {
      e.preventDefault();
      return;
    }
    changeCodeAtFocus(e, val);
    focusNextInput();
  }, [changeCodeAtFocus, focusNextInput, getRightValue]);

  // Hanlde onBlur input
  var onBlur = React.useCallback(function () {
    setActiveInput(-1);
  }, []);

  // Handle onKeyDown input
  var handleOnKeyDown = React.useCallback(function (e) {
    switch (e.key) {
      case "Backspace":
      case "Delete":
        {
          e.preventDefault();
          if (otpValues[activeInput]) {
            changeCodeAtFocus(e, "");
          } else {
            focusPrevInput(true);
          }
          break;
        }
      case "ArrowLeft":
        {
          e.preventDefault();
          focusPrevInput();
          break;
        }
      case "ArrowRight":
        {
          e.preventDefault();
          focusNextInput();
          break;
        }
      case " ":
        {
          e.preventDefault();
          break;
        }
      default:
        return e;
    }
  }, [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]);
  var handleOnPaste = React.useCallback(function (e) {
    e.preventDefault();
    var pastedData = e.clipboardData.getData("text/plain").trim().slice(0, length - activeInput).split("");
    if (pastedData) {
      var nextFocusIndex = 0;
      var updatedOTPValues = _toConsumableArray(otpValues);
      updatedOTPValues.forEach(function (val, index) {
        if (index >= activeInput) {
          var changedValue = getRightValue(pastedData.shift() || val);
          if (changedValue) {
            updatedOTPValues[index] = changedValue;
            nextFocusIndex = index;
          }
        }
      });
      setOTPValues(updatedOTPValues);
      e.target.id = id;
      e.target.value = updatedOTPValues.join("");
      onChangeOTP(e);
      setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
    }
  }, [activeInput, getRightValue, length, otpValues]);
  var allInputs = Array(length).fill("");
  var srContainerClassName = useStyleRewriter$6(baseContainerClassName$2, containerClassName);
  var baseClasses = useStyleRewriter$6(baseInputClassName$3, inputClassName, false);
  var statusClasses = error ? inputErrorClassName : "";
  var srClasses = useStyleRewriter$6(baseClasses, statusClasses);
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, props, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srContainerClassName
  }, allInputs.map(function (_, index) {
    return /*#__PURE__*/React__default["default"].createElement(SingleOTPInput, {
      key: index,
      focus: activeInput === index,
      value: otpValues && otpValues[index],
      autoFocus: autoFocus,
      onFocus: handleOnFocus(index),
      onChange: handleOnChange,
      onKeyDown: handleOnKeyDown,
      onBlur: onBlur,
      onPaste: handleOnPaste,
      type: "text",
      className: srClasses,
      disabled: disabled,
      style: {
        appearance: "textfield",
        MozAppearance: "textfield",
        WebkitAppearance: "textfield"
      }
      // maxlength={1}
    });
  })));
};
var baseContainerClassName$2 = "\n  @dy flex gap-2\n  @jyc justify-center\n  @ani items-center\n";
var baseInputClassName$3 = "\n  @wh w-4/12\n  @tta text-center\n  @oe outline-none\n  @bdc bg-transparent\n";

var _excluded$1 = ["value", "placeholder", "onChange", "className", "disabled", "id"];
var TextArea = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? "" : _ref$value,
    placeholder = _ref.placeholder,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {
      return null;
    } : _ref$onChange,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    disabled = _ref.disabled,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? null : _ref$id,
    props = _objectWithoutProperties(_ref, _excluded$1);
  return /*#__PURE__*/React__default["default"].createElement("textarea", _extends({}, props, {
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    className: className,
    disabled: disabled,
    ref: ref,
    id: id
  }));
});

var TextAreaInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var value = props.value,
    id = props.id,
    onChange = props.onChange,
    placeholder = props.placeholder,
    disabled = props.disabled,
    error = props.error,
    _props$inputClassName = props.inputClassName,
    inputClassName = _props$inputClassName === void 0 ? "" : _props$inputClassName,
    _props$inputErrorClas = props.inputErrorClassName,
    inputErrorClassName = _props$inputErrorClas === void 0 ? "" : _props$inputErrorClas,
    _props$rows = props.rows,
    rows = _props$rows === void 0 ? 3 : _props$rows;
  var srInputClassName = useStyleRewriter$6(baseInputClassName$2, inputClassName, false);
  var srStatusClassName = useStyleRewriter$6(srInputClassName, error ? inputErrorClassName : "");
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, props, /*#__PURE__*/React__default["default"].createElement(TextArea, {
    disabled: disabled,
    ref: ref,
    value: value,
    id: id,
    rows: rows,
    onChange: onChange,
    placeholder: placeholder,
    className: srStatusClassName
  }));
});
var baseInputClassName$2 = "\n  @wh w-full\n  @bdc bg-transparent\n  @tndn duration-200\n  @oe outline-none focus:outline-none hover:outline-none\n  @dy flex\n  @pn relative\n";

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var UploadFileInput = function UploadFileInput(props) {
  var _props$uploadTitle = props.uploadTitle,
    uploadTitle = _props$uploadTitle === void 0 ? "Click here to upload a file" : _props$uploadTitle,
    uploadTitleClassName = props.uploadTitleClassName,
    _props$multiple = props.multiple,
    multiple = _props$multiple === void 0 ? false : _props$multiple,
    onChange = props.onChange,
    id = props.id,
    _props$files = props.files,
    files = _props$files === void 0 ? {} : _props$files,
    setFiles = props.setFiles,
    error = props.error,
    _props$accept = props.accept,
    accept = _props$accept === void 0 ? "*/*" : _props$accept,
    DeleteFileButton = props.DeleteFileButton,
    inputClassName = props.inputClassName,
    containerClassName = props.containerClassName,
    _props$BACKEND_URL = props.BACKEND_URL,
    BACKEND_URL = _props$BACKEND_URL === void 0 ? "" : _props$BACKEND_URL,
    fileCardClassName = props.fileCardClassName,
    FileComponent = props.FileComponent,
    InnerComponent = props.InnerComponent,
    fileCardImageClassName = props.fileCardImageClassName,
    deleteFileButtonCointainerClassName = props.deleteFileButtonCointainerClassName;
  var handleUploadImage = function handleUploadImage(e) {
    preventDefaultEvent(e);

    // setError(null);

    // if (files?.length >= 4) return setError({ message: `Maximum files: 4` });

    // let file;

    // if (e?.dataTransfer) {
    //   file = e.dataTransfer.files[0];
    // } else {
    //   file = e.target.files[0];
    // }

    // console.log(`🚀 ~ handleUploadImage ~ file`, file);
    e.target.multiple = multiple;
    onChange(e);
    // if (file) {
    //   const sizeInMB = file?.size / (1024 * 1024);

    //   if (sizeInMB > 2.3) return setError({ message: `File too large` });

    //   // setFiles([...files, file]);
    //   onChange(e);
    // }
  };

  var _handleDelete = function handleDelete(e) {
    var _files$id, _files$id$filter;
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var index = params.index,
      file = params.file;
    e.target.id = id;
    e.target.multiple = multiple;

    // console.log(`🚀 ~ handleDelete ~ files[id]`, files[id]);

    // Exists files on backend
    if (file !== null && file !== void 0 && file.id || (_files$id = files[id]) !== null && _files$id !== void 0 && _files$id.length && (_files$id$filter = files[id].filter(function (f) {
      return f.id;
    })) !== null && _files$id$filter !== void 0 && _files$id$filter.length) {
      if (multiple) {
        e.target.value = files[id].filter(function (backendFile) {
          return backendFile.id !== file.id;
        });
      } else {
        e.target.value = undefined;
        // console.log(`🚀 ~ handleDelete ~ e.target.value`, e.target.value);
      }
    }

    // console.log(`🚀 ~ handleDelete ~ files`, files[id]);
    // console.log(`🚀 ~ handleDelete ~ handleDelete params`, params);

    setFiles(function (prev) {
      var _toDeleteFile;
      var newFiles = _objectSpread$3({}, prev);
      var toDeleteFile;
      if (multiple) {
        toDeleteFile = newFiles[id][index];
      } else {
        toDeleteFile = newFiles[id];
      }
      if ((_toDeleteFile = toDeleteFile) !== null && _toDeleteFile !== void 0 && _toDeleteFile.url) ;
      if (multiple) {
        newFiles[id] = newFiles[id].filter(function (file, fIndex) {
          return fIndex !== index;
        });
      } else {
        delete newFiles[id];
      }

      // console.log(`🚀 ~ setFiles ~ newFiles`, newFiles);
      return newFiles;
    });

    // console.log(`🚀 ~ handleDelete ~ files, file`, files, file);

    onChange(e);

    // console.log(`🚀 ~ handleDelete ~ e`, e, deleteFile);
  };

  var srInputClassName = useStyleRewriter$6(baseInputClassName$1, inputClassName);
  var srInputContainerClassName = useStyleRewriter$6(baseInputContainerClassName$2, containerClassName);
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, _extends({}, props, {
    error: error
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: srInputContainerClassName
  }, files[id] && !multiple ? null : /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: id,
    className: srInputClassName,
    onDrop: handleUploadImage,
    onDragOver: preventDefaultEvent,
    onDragEnter: preventDefaultEvent
  }, multiple ? /*#__PURE__*/React__default["default"].createElement("input", {
    type: "file"
    // name="file"
    ,
    id: id,
    accept: accept,
    onChange: handleUploadImage,
    className: "hidden",
    multiple: true
  }) : /*#__PURE__*/React__default["default"].createElement("input", {
    type: "file"
    // name="file"
    ,
    id: id,
    accept: accept,
    onChange: handleUploadImage,
    className: "hidden"
  }), typeof InnerComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(InnerComponent, _extends({}, props, {
    handleUploadImage: handleUploadImage
  })) : uploadTitle ? /*#__PURE__*/React__default["default"].createElement("p", {
    className: uploadTitleClassName
  }, uploadTitle) : null), /*#__PURE__*/React__default["default"].createElement(FilesRow, {
    handleUploadImage: handleUploadImage,
    handleDelete: function handleDelete(e, params) {
      return _handleDelete(e, params);
    },
    files: files[id],
    multiple: multiple,
    DeleteFileButton: DeleteFileButton,
    fileCardClassName: fileCardClassName,
    fileCardImageClassName: fileCardImageClassName,
    deleteFileButtonCointainerClassName: deleteFileButtonCointainerClassName,
    FileComponent: FileComponent,
    BACKEND_URL: BACKEND_URL
  })));
};
var FilesRow = function FilesRow(_ref) {
  var files = _ref.files,
    multiple = _ref.multiple,
    _ref$handleDelete = _ref.handleDelete,
    _handleDelete2 = _ref$handleDelete === void 0 ? function () {} : _ref$handleDelete,
    DeleteFileButton = _ref.DeleteFileButton,
    fileCardClassName = _ref.fileCardClassName,
    fileCardImageClassName = _ref.fileCardImageClassName,
    deleteFileButtonCointainerClassName = _ref.deleteFileButtonCointainerClassName,
    FileComponent = _ref.FileComponent,
    BACKEND_URL = _ref.BACKEND_URL;
  // console.log(`🚀 ~ FilesRow ~ files`, files);
  var localFiles = React.useMemo(function () {
    if (!files) {
      return;
    }
    if (multiple) {
      return files;
    } else {
      return [files];
    }
  }, [files]);
  return (localFiles === null || localFiles === void 0 ? void 0 : localFiles.length) > 0 ? localFiles === null || localFiles === void 0 ? void 0 : localFiles.map(function (file, index) {
    return /*#__PURE__*/React__default["default"].createElement(FileCard, {
      handleDelete: function handleDelete(e) {
        return _handleDelete2(e, {
          index: index,
          file: file
        });
      },
      key: index,
      file: file,
      files: localFiles,
      fileCardClassName: fileCardClassName,
      DeleteFileButton: DeleteFileButton,
      fileCardImageClassName: fileCardImageClassName,
      deleteFileButtonCointainerClassName: deleteFileButtonCointainerClassName,
      FileComponent: FileComponent,
      BACKEND_URL: BACKEND_URL
    });
  }) : null;
};
var FileCard = function FileCard(_ref2) {
  var _file$type, _file$mime;
  _ref2.files;
    var file = _ref2.file,
    _ref2$handleDelete = _ref2.handleDelete,
    handleDelete = _ref2$handleDelete === void 0 ? function () {} : _ref2$handleDelete,
    BACKEND_URL = _ref2.BACKEND_URL,
    DeleteFileButton = _ref2.DeleteFileButton,
    fileCardClassName = _ref2.fileCardClassName,
    fileCardImageClassName = _ref2.fileCardImageClassName,
    deleteFileButtonCointainerClassName = _ref2.deleteFileButtonCointainerClassName,
    FileComponent = _ref2.FileComponent;
  var src = React.useMemo(function () {
    if (!file) {
      return "";
    }
    if (file.url) {
      var httpsExists = file.url.match(/https?:\/\//);
      if (httpsExists) {
        return file.url;
      }
      return "".concat(BACKEND_URL).concat(file.url);
    }
    return URL.createObjectURL(file);
  }, [file]);
  var srFileCardClassName = useStyleRewriter$6(baseFileCardClassName, fileCardClassName);
  var srFileCardImageClassName = useStyleRewriter$6(baseFileCardImageClassName, fileCardImageClassName);
  var srDeleteFileButtonCointainerClassName = useStyleRewriter$6(baseDeleteFileButtonCointainerClassName, deleteFileButtonCointainerClassName);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: srFileCardClassName
  }, file !== null && file !== void 0 && (_file$type = file.type) !== null && _file$type !== void 0 && _file$type.includes("image/") || file !== null && file !== void 0 && (_file$mime = file.mime) !== null && _file$mime !== void 0 && _file$mime.includes("image/") ? /*#__PURE__*/React__default["default"].createElement("img", {
    src: src,
    className: srFileCardImageClassName
  }) : typeof FileComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(FileComponent, {
    file: file
  }) : null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srDeleteFileButtonCointainerClassName
  }, typeof DeleteFileButton === "function" ? /*#__PURE__*/React__default["default"].createElement(DeleteFileButton, {
    onClick: handleDelete
  }) : null));
};
var preventDefaultEvent = function preventDefaultEvent(e) {
  return e.preventDefault();
};
var baseInputContainerClassName$2 = "\n  @dy flex\n  @fxw flex-wrap\n  @wh w-full\n";
var baseInputClassName$1 = "\n  @cr cursor-pointer\n  @pn relative\n  @tndn duration-200\n";
var baseFileCardClassName = "\n  @pn relative\n  @tndn duration-200\n  @ow overflow-hidden\n";
var baseFileCardImageClassName = "\n  @wh w-full\n  @ht h-full\n  @pn absolute\n  @it inset-0\n  @otf object-cover\n";
var baseDeleteFileButtonCointainerClassName = "\n  @wh w-full\n  @ht h-full\n  @pn absolute\n  @dy flex\n  @ani items-center\n  @jyc justify-center\n  @it inset-0 \n  @oy opacity-0 hover:opacity-100\n  @tndn duration-200\n";

var SelectInput = function SelectInput(props) {
  var items = props.items,
    onChange = props.onChange,
    value = props.value,
    id = props.id,
    _props$activeMatcher = props.activeMatcher,
    activeMatcher = _props$activeMatcher === void 0 ? function () {} : _props$activeMatcher,
    _props$setter = props.setter,
    setter = _props$setter === void 0 ? function () {} : _props$setter,
    label = props.label,
    error = props.error,
    inputContainerClassName = props.inputContainerClassName,
    activeItemClassName = props.activeItemClassName,
    baseItemClassName = props.baseItemClassName,
    InnerComponent = props.InnerComponent;
  var srInputContainerClassName = useStyleRewriter$6(baseInputContainerClassName$1, inputContainerClassName);
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, _extends({
    label: label,
    error: error
  }, props), /*#__PURE__*/React__default["default"].createElement("div", {
    className: srInputContainerClassName
  }, items.map(function (item, index) {
    return /*#__PURE__*/React__default["default"].createElement(SmartButton, {
      className: activeMatcher(item, value) ? activeItemClassName : baseItemClassName,
      key: index,
      onClick: function onClick(e) {
        e.target.value = setter(item);
        e.target.id = id;
        onChange(e);
      }
    }, typeof InnerComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(InnerComponent, _extends({
      isSelected: activeMatcher(item, value)
    }, props, {
      item: item
    })) : item.title);
  })));
};
var baseInputContainerClassName$1 = "\n  @dy flex\n  @fxw flex-wrap\n  @gp gap-2";

var DropdownInput = function DropdownInput(props) {
  var label = props.label,
    error = props.error,
    setter = props.setter,
    id = props.id,
    value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$onDropdownOpen = props.onDropdownOpenChange,
    onDropdownOpenChange = _props$onDropdownOpen === void 0 ? function () {} : _props$onDropdownOpen,
    items = props.items,
    activeMatcher = props.activeMatcher,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? "" : _props$placeholder,
    inputContainerClassName = props.inputContainerClassName,
    inputClassName = props.inputClassName,
    activeItemClassName = props.activeItemClassName,
    _props$dropdownClassN = props.dropdownClassName,
    dropdownClassName = _props$dropdownClassN === void 0 ? "" : _props$dropdownClassN,
    baseItemClassName = props.baseItemClassName,
    Icon = props.Icon,
    InnerComponent = props.InnerComponent;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDropdownOpen = _useState2[0],
    setDropdownOpen = _useState2[1];
  var srInputClassName = useStyleRewriter$6(baseInputClassName, inputClassName, false);
  var _useState3 = React.useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    activeItem = _useState4[0],
    setActiveItem = _useState4[1];
  React.useEffect(function () {
    var active = items === null || items === void 0 ? void 0 : items.find(function (item) {
      return activeMatcher(item, value);
    });
    setActiveItem(active);
  }, [items === null || items === void 0 ? void 0 : items.length, value]);
  React.useEffect(function () {
    onDropdownOpenChange(isDropdownOpen);
  }, [isDropdownOpen]);
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, _extends({}, props, {
    label: label,
    error: error
  }), /*#__PURE__*/React__default["default"].createElement(SmartButton, {
    onClick: function onClick() {
      return setDropdownOpen(!isDropdownOpen);
    },
    dropdownItems: items !== null && items !== void 0 && items.length ? function () {
      return items.map(function (item, index) {
        return /*#__PURE__*/React__default["default"].createElement(SmartButton, {
          key: index,
          onClick: function onClick(e) {
            e.target.value = setter(item, index);
            e.target.id = id;
            onChange(e);
          },
          className: activeMatcher(item, value) ? activeItemClassName : baseItemClassName
        }, typeof InnerComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(InnerComponent, _extends({}, props, {
          isSelected: activeMatcher(item, value),
          item: item
        })) : item === null || item === void 0 ? void 0 : item.title);
      });
    } : null,
    dropdownClassName: dropdownClassName,
    dropdownContainerClassName: inputContainerClassName,
    className: srInputClassName
  }, typeof InnerComponent === "function" && activeItem ? /*#__PURE__*/React__default["default"].createElement(InnerComponent, _extends({}, props, {
    item: activeItem
  })) : activeItem !== null && activeItem !== void 0 && activeItem.title ? activeItem === null || activeItem === void 0 ? void 0 : activeItem.title : placeholder, typeof Icon === "function" ? /*#__PURE__*/React__default["default"].createElement(Icon, _extends({}, props, {
    isDropdownOpen: isDropdownOpen
  })) : null));
};
var baseInputClassName = "\n  @cr cursor-pointer\n  @fx flex\n  @wh w-full\n";

var PopupCalendar = function PopupCalendar(_ref) {
  var setOpen = _ref.setOpen,
    _onClick = _ref.onClick,
    value = _ref.value,
    setValue = _ref.setValue,
    setActiveTimeframe = _ref.setActiveTimeframe,
    _ref$containerClassNa = _ref.containerClassName,
    containerClassName = _ref$containerClassNa === void 0 ? "" : _ref$containerClassNa,
    nextButtonChild = _ref.nextButtonChild,
    prevButtonChild = _ref.prevButtonChild;
  var srContainerClassName = useStyleRewriter$6(baseContainerClassName$1, containerClassName);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: srContainerClassName
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "px-2 flex flex-col items-center text-black"
  }, /*#__PURE__*/React__default["default"].createElement(Calendar__default["default"], _extends({}, calendarSettings, {
    nextLabel: nextButtonChild,
    prevLabel: prevButtonChild,
    next2AriaLabel: null,
    prev2AriaLabel: null,
    value: new Date(value),
    onChange: setValue,
    onClickDay: function onClickDay(value) {
      setActiveTimeframe("Custom");
      setValue(value);
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-row items-center justify-end w-full mb-4 md:mb-7"
  }, /*#__PURE__*/React__default["default"].createElement(SmartButton, {
    className: "@ftf font-roboto @ftw font-medium @bdc bg-primary-900 hover:bg-primary-700 @ttc text-white @brr rounded-[4px] @mn mr-3 @pg px-5 py-1 @cr cursor-pointer @tndn duration-200",
    onClick: function onClick() {
      _onClick(value);
      setOpen(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement("h5", {
    className: "@ttc text-current"
  }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C")), /*#__PURE__*/React__default["default"].createElement(SmartButton, {
    className: "@ftf font-roboto @ftw font-medium @bdc bg-primary-200 hover:bg-primary-700 @ttc text-primary hover:text-white @brr rounded-[4px] @pg px-5 py-1 @cr cursor-pointer @tndn duration-200",
    onClick: function onClick() {
      setValue();
      setOpen(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement("h5", {
    className: "@ttc text-current"
  }, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C")))));
};
var calendarSettings = {
  locale: "en",
  className: "border-none p-3 md:p-6",
  selectRange: false,
  showNavigation: true,
  returnValue: "start"
};
var baseContainerClassName$1 = "\n  @pn absolute\n  @it left-0 top-full\n  @dy flex\n  @fxd flex-col md:flex-row\n  @bdc bg-white\n  @ow overflow-hidden\n  @pg p-0\n  @dew divide-x\n  @des divide-true-gray-150\n  @bxsw shadow-none\n  @brr rounded-[8px]\n  @zi z-40\n";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var DateCalendar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var value = props.value,
    id = props.id,
    onChange = props.onChange,
    error = props.error,
    nextButtonChild = props.nextButtonChild,
    prevButtonChild = props.prevButtonChild,
    inputContainerClassName = props.inputContainerClassName,
    dateInputInputContainerClassName = props.dateInputInputContainerClassName,
    dateInputDateInputClassName = props.dateInputDateInputClassName,
    dateInputMonthInputClassName = props.dateInputMonthInputClassName,
    dateInputYearInputClassName = props.dateInputYearInputClassName,
    calendarContainerClassName = props.calendarContainerClassName,
    DividerComponent = props.DividerComponent;
  var buttonRef = React.useRef();
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    localValue = _useState2[0],
    setLocalValue = _useState2[1];
  var _useState3 = React.useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    inputValues = _useState4[0],
    setInputValues = _useState4[1];
  var _useState5 = React.useState(error),
    _useState6 = _slicedToArray(_useState5, 2),
    localError = _useState6[0],
    setLocalError = _useState6[1];
  var _useState7 = React.useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isDropdownOpen = _useState8[0],
    setIsDropdownOpen = _useState8[1];
  var _useState9 = React.useState("Custom"),
    _useState10 = _slicedToArray(_useState9, 2),
    activeTimeframe = _useState10[0],
    setActiveTimeframe = _useState10[1];
  useOutsideClick(buttonRef, setIsDropdownOpen);
  React.useEffect(function () {
    if (value && value.length !== 0 && (!localValue || _typeof$1(localValue) === "string")) {
      var parsedDate = new Date(value).toISOString();
      setLocalValue(new Date(parsedDate));
    }
  }, [value]);
  React.useEffect(function () {
    if (!inputValues) return;
    var couldBeParsed = true;
    if (inputValues.every(function (value) {
      return value === "";
    })) {
      setLocalValue(null);
      return;
    }
    if (inputValues.every(function (value) {
      return !isNaN(value);
    })) {
      var _iterator = _createForOfIteratorHelper(inputValues.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            index = _step$value[0],
            _value = _step$value[1];
          if (!_value) {
            couldBeParsed = false;
          }
          if (index === 0 && (+_value > 30 || +_value < 1)) {
            couldBeParsed = false;
          }
          if (index === 1 && (+_value > 11 || +_value < 1)) {
            couldBeParsed = false;
          }
          if (index === 2 && (+_value < 1900 || +_value > 3000)) {
            couldBeParsed = false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (!couldBeParsed) return;
      var newDate = new Date(Date.UTC(inputValues[2], inputValues[1] - 1, inputValues[0]));
      if (!localValue || (newDate === null || newDate === void 0 ? void 0 : newDate.getTime()) !== (localValue === null || localValue === void 0 ? void 0 : localValue.getTime())) {
        setLocalValue(newDate);
      }
    }
  }, [inputValues]);
  React.useEffect(function () {
    if (localValue || localValue === null) {
      setLocalError();
      var e = {
        target: {
          id: id,
          value: localValue ? localValue.toISOString() : null
        }
      };
      onChange(e);
    }
  }, [localValue]);
  React.useEffect(function () {
    if (localValue && _typeof$1(localValue) === "object") {
      var date = new Date(localValue).getDate();
      var month = new Date(localValue).getMonth() + 1;
      var year = new Date(localValue).getFullYear();
      if ((inputValues === null || inputValues === void 0 ? void 0 : inputValues.length) === 3) {
        if (inputValues[0] !== date || inputValues[1] !== month || inputValues[2] !== year) {
          setInputValues([date, month, year]);
        }
      } else {
        setInputValues([date, month, year]);
      }
    }
  }, [localValue]);
  var srInputContainerClassName = useStyleRewriter$6(baseInputContainerClassName, inputContainerClassName);
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, _extends({}, props, {
    error: localError
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: srInputContainerClassName,
    ref: buttonRef
  }, /*#__PURE__*/React__default["default"].createElement(DateInput, {
    dateInputInputContainerClassName: dateInputInputContainerClassName,
    dateInputDateInputClassName: dateInputDateInputClassName,
    dateInputMonthInputClassName: dateInputMonthInputClassName,
    dateInputYearInputClassName: dateInputYearInputClassName,
    error: localError,
    value: inputValues,
    onChange: setInputValues,
    onClick: function onClick() {
      return setIsDropdownOpen(!isDropdownOpen);
    },
    DividerComponent: DividerComponent
  }), /*#__PURE__*/React__default["default"].createElement(transitionComponent.Transition, _extends({
    show: isDropdownOpen
  }, contentTransitionProps), /*#__PURE__*/React__default["default"].createElement(PopupCalendar, {
    containerClassName: calendarContainerClassName,
    value: localValue || new Date(),
    setValue: setLocalValue,
    open: isDropdownOpen,
    setOpen: setIsDropdownOpen,
    activeTimeframe: activeTimeframe,
    setActiveTimeframe: setActiveTimeframe,
    onClick: function onClick(localValue) {
      setIsDropdownOpen(false);
    },
    nextButtonChild: nextButtonChild,
    prevButtonChild: prevButtonChild
  }))));
});
var DateInput = function DateInput(_ref) {
  var _ref$dateInputInputCo = _ref.dateInputInputContainerClassName,
    dateInputInputContainerClassName = _ref$dateInputInputCo === void 0 ? "" : _ref$dateInputInputCo,
    _ref$dateInputDateInp = _ref.dateInputDateInputClassName,
    dateInputDateInputClassName = _ref$dateInputDateInp === void 0 ? "" : _ref$dateInputDateInp,
    _ref$dateInputMonthIn = _ref.dateInputMonthInputClassName,
    dateInputMonthInputClassName = _ref$dateInputMonthIn === void 0 ? "" : _ref$dateInputMonthIn,
    _ref$dateInputYearInp = _ref.dateInputYearInputClassName,
    dateInputYearInputClassName = _ref$dateInputYearInp === void 0 ? "" : _ref$dateInputYearInp,
    DividerComponent = _ref.DividerComponent,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? [] : _ref$value,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;
    _ref.error;
  var _useState11 = React.useState(value[0]),
    _useState12 = _slicedToArray(_useState11, 2),
    date = _useState12[0],
    setDate = _useState12[1];
  var _useState13 = React.useState(value[1]),
    _useState14 = _slicedToArray(_useState13, 2),
    month = _useState14[0],
    setMonth = _useState14[1];
  var _useState15 = React.useState(value[2]),
    _useState16 = _slicedToArray(_useState15, 2),
    year = _useState16[0],
    setYear = _useState16[1];
  React.useEffect(function () {
    setDate(value[0]);
    setMonth(value[1]);
    setYear(value[2]);
  }, [value]);
  React.useEffect(function () {
    onChange(function () {
      return [date, month, year];
    });
  }, [date, month, year]);
  var srInputContainerClassName = useStyleRewriter$6(baseDateInputInputContainerClassName, dateInputInputContainerClassName);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: onClick,
    className: srInputContainerClassName
  }, /*#__PURE__*/React__default["default"].createElement(Input, {
    type: "number",
    value: date || "",
    onChange: function onChange(e) {
      var value = e.target.value;
      value = +value || "";
      if (value && value < 0) value = "";
      if (value > 31) return;
      setDate("".concat(value));
    },
    inputContainerClassName: "@wh w-fit",
    inputClassName: dateInputDateInputClassName
  }), typeof DividerComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(DividerComponent, null) : null, /*#__PURE__*/React__default["default"].createElement(Input, {
    type: "number",
    value: month || "",
    onChange: function onChange(e) {
      var value = e.target.value;
      value = +value || "";
      if (value && value < 0) value = 0;
      if (value > 12) return;
      setMonth(value);
    },
    inputContainerClassName: "@wh w-fit",
    inputClassName: dateInputMonthInputClassName
  }), typeof DividerComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(DividerComponent, null) : null, /*#__PURE__*/React__default["default"].createElement(Input, {
    type: "number",
    value: year || "",
    onChange: function onChange(e) {
      var value = e.target.value;
      value = +value || "";
      if (value && value < 0) value = 0;
      if (value > 2100) return;
      setYear(value);
    },
    inputContainerClassName: "@wh w-fit",
    inputClassName: dateInputYearInputClassName
  }));
};
var contentTransitionProps = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0"
};
var useOutsideClick = function useOutsideClick(ref, action) {
  React.useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) action(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
var baseInputContainerClassName = "\n  @pn relative\n  @zi z-70\n  @wh w-full\n";
var baseDateInputInputContainerClassName = "\n  @wh w-fit\n  @dy flex\n";

var FormInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var type = props.type,
    Comp = props.Comp;
  var InputType = Comp || inputComponents[type] || TextInput;
  return /*#__PURE__*/React__default["default"].createElement(InputType, _extends({}, props, {
    ref: ref
  }));
});
var inputComponents = {
  text: TextInput,
  select: SelectInput,
  checkbox: CheckboxInput,
  range: RangeInput,
  dropdown: DropdownInput,
  otp: OtpInput,
  "text-area": TextAreaInput,
  file: UploadFileInput,
  date: DateCalendar
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

var regeneratorRuntime$1 = {exports: {}};

var _typeof = {exports: {}};

(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	}
	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
} (_typeof));

(function (module) {
	var _typeof$1 = _typeof.exports["default"];
	function _regeneratorRuntime() {

	  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
	  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
	    return exports;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  var exports = {},
	    Op = Object.prototype,
	    hasOwn = Op.hasOwnProperty,
	    defineProperty = Object.defineProperty || function (obj, key, desc) {
	      obj[key] = desc.value;
	    },
	    $Symbol = "function" == typeof Symbol ? Symbol : {},
	    iteratorSymbol = $Symbol.iterator || "@@iterator",
	    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
	    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	  function define(obj, key, value) {
	    return Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: !0,
	      configurable: !0,
	      writable: !0
	    }), obj[key];
	  }
	  try {
	    define({}, "");
	  } catch (err) {
	    define = function define(obj, key, value) {
	      return obj[key] = value;
	    };
	  }
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
	      generator = Object.create(protoGenerator.prototype),
	      context = new Context(tryLocsList || []);
	    return defineProperty(generator, "_invoke", {
	      value: makeInvokeMethod(innerFn, self, context)
	    }), generator;
	  }
	  function tryCatch(fn, obj, arg) {
	    try {
	      return {
	        type: "normal",
	        arg: fn.call(obj, arg)
	      };
	    } catch (err) {
	      return {
	        type: "throw",
	        arg: err
	      };
	    }
	  }
	  exports.wrap = wrap;
	  var ContinueSentinel = {};
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });
	  var getProto = Object.getPrototypeOf,
	    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      define(prototype, method, function (arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }
	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if ("throw" !== record.type) {
	        var result = record.arg,
	          value = result.value;
	        return value && "object" == _typeof$1(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
	          invoke("next", value, resolve, reject);
	        }, function (err) {
	          invoke("throw", err, resolve, reject);
	        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
	          result.value = unwrapped, resolve(result);
	        }, function (error) {
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	      reject(record.arg);
	    }
	    var previousPromise;
	    defineProperty(this, "_invoke", {
	      value: function value(method, arg) {
	        function callInvokeWithMethodAndArg() {
	          return new PromiseImpl(function (resolve, reject) {
	            invoke(method, arg, resolve, reject);
	          });
	        }
	        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	      }
	    });
	  }
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = "suspendedStart";
	    return function (method, arg) {
	      if ("executing" === state) throw new Error("Generator is already running");
	      if ("completed" === state) {
	        if ("throw" === method) throw arg;
	        return doneResult();
	      }
	      for (context.method = method, context.arg = arg;;) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
	          if ("suspendedStart" === state) throw state = "completed", context.arg;
	          context.dispatchException(context.arg);
	        } else "return" === context.method && context.abrupt("return", context.arg);
	        state = "executing";
	        var record = tryCatch(innerFn, self, context);
	        if ("normal" === record.type) {
	          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
	          return {
	            value: record.arg,
	            done: context.done
	          };
	        }
	        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
	      }
	    };
	  }
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (undefined === method) {
	      if (context.delegate = null, "throw" === context.method) {
	        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
	        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
	      }
	      return ContinueSentinel;
	    }
	    var record = tryCatch(method, delegate.iterator, context.arg);
	    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
	    var info = record.arg;
	    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
	  }
	  function pushTryEntry(locs) {
	    var entry = {
	      tryLoc: locs[0]
	    };
	    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
	  }
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal", delete record.arg, entry.completion = record;
	  }
	  function Context(tryLocsList) {
	    this.tryEntries = [{
	      tryLoc: "root"
	    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
	  }
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) return iteratorMethod.call(iterable);
	      if ("function" == typeof iterable.next) return iterable;
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	          next = function next() {
	            for (; ++i < iterable.length;) {
	              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
	            }
	            return next.value = undefined, next.done = !0, next;
	          };
	        return next.next = next;
	      }
	    }
	    return {
	      next: doneResult
	    };
	  }
	  function doneResult() {
	    return {
	      value: undefined,
	      done: !0
	    };
	  }
	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
	    value: GeneratorFunctionPrototype,
	    configurable: !0
	  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
	    value: GeneratorFunction,
	    configurable: !0
	  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
	    var ctor = "function" == typeof genFun && genFun.constructor;
	    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
	  }, exports.mark = function (genFun) {
	    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
	  }, exports.awrap = function (arg) {
	    return {
	      __await: arg
	    };
	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    void 0 === PromiseImpl && (PromiseImpl = Promise);
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
	    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
	    return this;
	  }), define(Gp, "toString", function () {
	    return "[object Generator]";
	  }), exports.keys = function (val) {
	    var object = Object(val),
	      keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    return keys.reverse(), function next() {
	      for (; keys.length;) {
	        var key = keys.pop();
	        if (key in object) return next.value = key, next.done = !1, next;
	      }
	      return next.done = !0, next;
	    };
	  }, exports.values = values, Context.prototype = {
	    constructor: Context,
	    reset: function reset(skipTempReset) {
	      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
	        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
	      }
	    },
	    stop: function stop() {
	      this.done = !0;
	      var rootRecord = this.tryEntries[0].completion;
	      if ("throw" === rootRecord.type) throw rootRecord.arg;
	      return this.rval;
	    },
	    dispatchException: function dispatchException(exception) {
	      if (this.done) throw exception;
	      var context = this;
	      function handle(loc, caught) {
	        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
	      }
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i],
	          record = entry.completion;
	        if ("root" === entry.tryLoc) return handle("end");
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc"),
	            hasFinally = hasOwn.call(entry, "finallyLoc");
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	          } else {
	            if (!hasFinally) throw new Error("try statement without catch or finally");
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          }
	        }
	      }
	    },
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
	      var record = finallyEntry ? finallyEntry.completion : {};
	      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
	    },
	    complete: function complete(record, afterLoc) {
	      if ("throw" === record.type) throw record.arg;
	      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
	    },
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
	      }
	    },
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if ("throw" === record.type) {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	      throw new Error("illegal catch attempt");
	    },
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      return this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
	    }
	  }, exports;
	}
	module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
} (regeneratorRuntime$1));

// TODO(Babel 8): Remove this file.

var runtime = regeneratorRuntime$1.exports();
var regenerator = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// use forwardRef here to access alert *content* div height
// used to animate *container* div height from 0 <-> auto during enter / leave transition
var Notification = /*#__PURE__*/React__default["default"].forwardRef(function (props, ref) {
  var _props$title = props.title,
    title = _props$title === void 0 ? "" : _props$title,
    _props$message = props.message,
    message = _props$message === void 0 ? "" : _props$message,
    _props$remove = props.remove,
    remove = _props$remove === void 0 ? function () {} : _props$remove,
    _props$containerClass = props.containerClassName,
    containerClassName = _props$containerClass === void 0 ? "" : _props$containerClass,
    _props$contentContain = props.contentContainerClassName,
    contentContainerClassName = _props$contentContain === void 0 ? "" : _props$contentContain,
    _props$headerClassNam = props.headerClassName,
    headerClassName = _props$headerClassNam === void 0 ? "" : _props$headerClassNam,
    _props$bodyClassName = props.bodyClassName,
    bodyClassName = _props$bodyClassName === void 0 ? "" : _props$bodyClassName,
    styles = props.styles,
    Child = props.Child,
    CloseIcon = props.CloseIcon,
    _props$showDefault = props.showDefault,
    showDefault = _props$showDefault === void 0 ? true : _props$showDefault;
  var srContainerClassName = useStyleRewriter$6(alertContainerClassName, containerClassName);
  var srContentContainerClassName = useStyleRewriter$6(contentWrapperClassName, contentContainerClassName);
  var srHeaderClassName = useStyleRewriter$6(alertHeaderClassName, headerClassName);
  var srBodyClassName = useStyleRewriter$6(alertBodyClassName, bodyClassName);
  var CloseIconComp = CloseIcon ? function (props) {
    return /*#__PURE__*/React__default["default"].createElement(CloseIcon, props);
  } : function (props) {
    return /*#__PURE__*/React__default["default"].createElement(CloseButton, props);
  };
  return /*#__PURE__*/React__default["default"].createElement(web.animated.div, {
    className: srContainerClassName,
    style: _objectSpread$2({}, styles)
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srContentContainerClassName,
    ref: ref
  }, Child ? /*#__PURE__*/React__default["default"].createElement(Child, props) : null, showDefault ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-col items-start ".concat(message ? "gap-2" : "")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "markdown ".concat(srHeaderClassName)
  }, /*#__PURE__*/React__default["default"].createElement(ReactMarkdown__default["default"], null, title)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "markdown ".concat(srBodyClassName)
  }, /*#__PURE__*/React__default["default"].createElement(ReactMarkdown__default["default"], null, message))) : null, /*#__PURE__*/React__default["default"].createElement(CloseIconComp, {
    remove: remove
  })));
});
var alertContainerClassName = "\n  @pn relative\n  @ow overflow-hidden";
var contentWrapperClassName = "\n  @pn relative\n  @dy flex\n  @fxd flex-row\n  @ani items-start\n  @brr rounded-sm\n  @bxsw drop-shadow-md\n  @pg pr-8 py-2\n  @bdc bg-white";
var alertHeaderClassName = "\n  @pg pl-2\n  @fts font-sm";
var alertBodyClassName = "\n  @pg pl-2\n  @fts text-xs";
var CloseButton = function CloseButton(_ref) {
  var _ref$remove = _ref.remove,
    remove = _ref$remove === void 0 ? function () {} : _ref$remove;
  return /*#__PURE__*/React__default["default"].createElement(SmartButton, {
    onClick: remove,
    className: "@pn absolute @it right-1 top-1 @ttc text-black @wh w-3 @zi z-50 @cr cursor-pointer"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    className: "fill-current w-3",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5659 5.24616C13.8936 4.91762 14.4257 4.91762 14.7542 5.24616C15.0827 5.57391 15.0827 6.10671 14.7542 6.43442L11.1711 10.0175L14.7042 13.5506C15.0302 13.8758 15.0302 14.4037 14.7042 14.7297C14.379 15.0558 13.8511 15.0558 13.5251 14.7297L9.99199 11.1966L6.43466 14.7539C6.10696 15.0817 5.57493 15.0817 5.2464 14.7539C4.91787 14.4262 4.91787 13.8942 5.2464 13.5656L8.80368 10.0084L5.27056 6.47527C4.94451 6.1501 4.94451 5.62226 5.27056 5.29621C5.59573 4.97016 6.12357 4.97016 6.44962 5.29621L9.98275 8.8293L13.5659 5.24616Z"
  })));
};

var notificationsContainerClassName = "z-50 fixed right-0 flex items-end flex-col mx-4";
var defaultNotificationHeight = 44;
var Overlay = function Overlay(_ref) {
  var _ref$notifications = _ref.notifications,
    notifications = _ref$notifications === void 0 ? [] : _ref$notifications,
    _ref$remove = _ref.remove,
    _remove = _ref$remove === void 0 ? function () {} : _ref$remove,
    _ref$isFromTop = _ref.isFromTop,
    isFromTop = _ref$isFromTop === void 0 ? false : _ref$isFromTop;
  // use weakmap to get div height for alert items
  //
  // prevents memory leaks by garbage collecting removed items
  var ref = React.useRef(new Map());
  var refMap = ref.current;
  var transitionConfigWithHeightAnimation = {
    from: {
      opacity: 0,
      height: 0,
      transform: "translateY(".concat(isFromTop ? "-100%" : 0, ") scale(1)"),
      marginBottom: 0
    },
    enter: function enter(item) {
      return /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(next) {
          var minHeight, offsetHeight;
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  minHeight = item.minHeight || defaultNotificationHeight;
                  offsetHeight = refMap.get(item).offsetHeight;
                  _context.next = 4;
                  return next({
                    opacity: 1,
                    height: offsetHeight >= minHeight ? offsetHeight : minHeight,
                    transform: "translateY(0) scale(1)",
                    marginBottom: 8
                  });
                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }();
    },
    update: function update(item) {
      return /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(next) {
          var minHeight, offsetHeight;
          return regenerator.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  minHeight = item.minHeight || defaultNotificationHeight;
                  offsetHeight = refMap.get(item).offsetHeight;
                  _context2.next = 4;
                  return next({
                    height: offsetHeight >= minHeight ? offsetHeight : minHeight
                  });
                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }();
    },
    leave: function leave() {
      return /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(next) {
          return regenerator.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return next({
                    opacity: 1,
                    height: 0,
                    transform: "translateY(0 scale(0.9)",
                    marginBottom: 0
                  });
                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return function (_x3) {
          return _ref4.apply(this, arguments);
        };
      }();
    }
  };
  var transitions = web.useTransition(notifications, transitionConfigWithHeightAnimation);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(notificationsContainerClassName, " ").concat(isFromTop ? "top-0 mt-4" : "bottom-0 mb-4")
  }, transitions(function (styles, item) {
    return /*#__PURE__*/React__default["default"].createElement(Notification, _extends({
      key: item.id,
      styles: styles,
      ref: function ref(_ref5) {
        return _ref5 && refMap.set(item, _ref5);
      },
      remove: function remove() {
        return _remove(item.id);
      }
    }, item));
  }));
};

var createRoot;

var m = require$$0__default["default"];
if (process.env.NODE_ENV === 'production') {
  createRoot = m.createRoot;
  m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function (c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

var _excluded = ["duration"],
  _excluded2 = ["duration"];
function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var NotificationsContext = /*#__PURE__*/React.createContext({
  add: function add() {
    return null;
  }
});
var useNotifications = function useNotifications() {
  return React.useContext(NotificationsContext);
};
var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof$1(window)) !== "undefined";
var NotificationsWrapper = function NotificationsWrapper(_ref) {
  var children = _ref.children;
  var _useState = React.useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    notifications = _useState2[0],
    setNotifications = _useState2[1];

  // use state fns to avoid passing stale alerts array to showAlert and removeAlert functions
  var remove = function remove(timestampId) {
    setNotifications(function (alertNotifications) {
      return alertNotifications.filter(function (alertInfo) {
        return (alertInfo === null || alertInfo === void 0 ? void 0 : alertInfo.id) !== timestampId;
      });
    });
  };
  var add = function add(_ref2) {
    var _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 8000 : _ref2$duration,
      props = _objectWithoutProperties(_ref2, _excluded);
    // use creation timestamp as psuedo-unique alert object ID
    var newNotificationId = new Date().getTime();
    var newNotification = _objectSpread$1({
      id: newNotificationId
    }, props);
    setNotifications(function (alertNotifications) {
      return [].concat(_toConsumableArray(alertNotifications), [newNotification]);
    });
    if (duration !== 0) {
      setTimeout(function () {
        return remove(newNotificationId);
      }, duration);
    }
  };

  // on first render ref is undefined
  // create empty alert helps to fix height error
  React.useEffect(function () {
    add({
      duration: 1
    });
  }, []);
  var isFromTop = isBrowser && window.innerWidth < 540;
  return /*#__PURE__*/React__default["default"].createElement(NotificationsContext.Provider, {
    value: {
      add: add
    }
  }, children, /*#__PURE__*/React__default["default"].createElement(Overlay, {
    notifications: notifications,
    remove: remove,
    isFromTop: isFromTop
  }));
};
var OverlayWrapper = function OverlayWrapper(_ref3) {
  var _ref3$notify = _ref3.notify,
    notify = _ref3$notify === void 0 ? function () {} : _ref3$notify;
  var isFromTop = isBrowser && window.innerWidth < 540;
  var _useState3 = React.useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    notifications = _useState4[0],
    setNotifications = _useState4[1];
  // use state fns to avoid passing stale alerts array to showAlert and removeAlert functions
  var remove = function remove(timestampId) {
    setNotifications(function (alertNotifications) {
      return alertNotifications.filter(function (alertInfo) {
        return alertInfo.id !== timestampId;
      });
    });
  };
  var add = function add(_ref4) {
    var _ref4$duration = _ref4.duration,
      duration = _ref4$duration === void 0 ? 8000 : _ref4$duration,
      props = _objectWithoutProperties(_ref4, _excluded2);
    // use creation timestamp as psuedo-unique alert object ID
    var newNotificationId = new Date().getTime();
    var newNotification = _objectSpread$1({
      id: newNotificationId
    }, props);
    setNotifications(function (alertNotifications) {
      return isFromTop ? [newNotification].concat(_toConsumableArray(alertNotifications)) : [].concat(_toConsumableArray(alertNotifications), [newNotification]);
    });
    if (duration !== 0) {
      setTimeout(function () {
        return remove(newNotificationId);
      }, duration);
    }
  };
  React.useEffect(function () {
    notify(add, remove);
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(Overlay, {
    notifications: notifications,
    remove: remove,
    isFromTop: isFromTop
  });
};
var notificationPortalId = "notification-portal";
var NotifiactionsManager = /*#__PURE__*/function () {
  function NotifiactionsManager() {
    var _this = this;
    _classCallCheck(this, NotifiactionsManager);
    _defineProperty(this, "bindNotify", function (add) {
      _this.createNotificationFn = add;
    });
    if (typeof window === "undefined") return;
    var portalElement = document.getElementById(notificationPortalId);
    if (!portalElement) {
      var element = document.createElement("div");
      element.id = notificationPortalId;
      // element.className = notificationsContainerClassName;
      if (document.body) {
        document.body.appendChild(element);
      }
      portalElement = element;
    }
    var portal = createRoot(portalElement);
    portal.render( /*#__PURE__*/React__default["default"].createElement(OverlayWrapper, {
      notify: this.bindNotify
    }));
  }
  _createClass(NotifiactionsManager, [{
    key: "createNotification",
    value: function createNotification(message) {
      if (this.createNotificationFn) {
        return this.createNotificationFn(message);
      }
    }
  }]);
  return NotifiactionsManager;
}();
var notifiactionsManager = new NotifiactionsManager();
var createNotification = function createNotification(message) {
  return notifiactionsManager.createNotification(message);
};
var SpringNotification = {
  NotificationsWrapper: NotificationsWrapper,
  useNotifications: useNotifications,
  notificationPortalId: notificationPortalId,
  createNotification: createNotification
};

function ReactSpringGallery(_ref) {
  var media = _ref.media,
    _ref$galleryClassName = _ref.galleryClassName,
    galleryClassName = _ref$galleryClassName === void 0 ? "" : _ref$galleryClassName,
    _ref$mediaItemClassNa = _ref.mediaItemClassName,
    mediaItemClassName = _ref$mediaItemClassNa === void 0 ? "" : _ref$mediaItemClassNa,
    _ref$imageItemClassNa = _ref.imageItemClassName,
    imageItemClassName = _ref$imageItemClassNa === void 0 ? "" : _ref$imageItemClassNa,
    _ref$videoItemClassNa = _ref.videoItemClassName,
    videoItemClassName = _ref$videoItemClassNa === void 0 ? "" : _ref$videoItemClassNa,
    _ref$activeSlide = _ref.activeSlide,
    activeSlide = _ref$activeSlide === void 0 ? 0 : _ref$activeSlide,
    setActiveSlide = _ref.setActiveSlide,
    PreviousNavItemComponent = _ref.PreviousNavItemComponent,
    NextNavItemComponent = _ref.NextNavItemComponent,
    _ref$navItemClassName = _ref.navItemClassName,
    navItemClassName = _ref$navItemClassName === void 0 ? "" : _ref$navItemClassName,
    _ref$mediaContainerCl = _ref.mediaContainerClassName,
    mediaContainerClassName = _ref$mediaContainerCl === void 0 ? "" : _ref$mediaContainerCl,
    MediaItemComponent = _ref.MediaItemComponent;
    _ref.children;
    _ref.setShow;
  var srGalleryClassName = useStyleRewriter$6(baseGalleryClassName, galleryClassName);
  var srMediaContainerClassName = useStyleRewriter$6(baseMediaContainerClassName, mediaContainerClassName);
  var srMediaItemClassName = useStyleRewriter$6(baseMediaItemClassName, mediaItemClassName);
  var srImageItemClassName = useStyleRewriter$6(baseImageItemClassName, imageItemClassName);
  var srVideoItemClassName = useStyleRewriter$6(baseVideoItemClassName, videoItemClassName);
  var isDesktop = useBreakpoint$1("md");
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    width = _useState2[0],
    setWidth = _useState2[1];
  React.useEffect(function () {
    if ((typeof window === "undefined" ? "undefined" : _typeof$1(window)) === "undefined") {
      return;
    }
    if (isDesktop) {
      setWidth(window.innerWidth * 0.8);
    } else {
      setWidth(window.innerWidth);
    }
  }, [isDesktop]);
  var ref = React.useRef(activeSlide);
  var _useSprings = web.useSprings(media.length, function (i) {
      return {
        x: i === activeSlide ? 0 : width * (i - activeSlide),
        display: i === activeSlide ? "block" : "none"
      };
    }),
    _useSprings2 = _slicedToArray(_useSprings, 2),
    props = _useSprings2[0],
    api = _useSprings2[1];
  var bind = react.useDrag(function (_ref2) {
    var active = _ref2.active,
      _ref2$movement = _slicedToArray(_ref2.movement, 1),
      mx = _ref2$movement[0],
      _ref2$direction = _slicedToArray(_ref2.direction, 1),
      xDir = _ref2$direction[0],
      cancel = _ref2.cancel;
    if (active && Math.abs(mx) > width / 10) {
      ref.current = clamp(ref.current + (xDir > 0 ? -1 : 1), 0, media.length - 1);
      cancel();
    }
    api.start(function (i) {
      if (i < ref.current - 1 || i > ref.current + 1) return {
        display: "none"
      };
      var x = (i - ref.current) * width + (active ? mx : 0);
      setActiveSlide(ref.current);
      return {
        x: x,
        display: "block"
      };
    });
  });
  var setSlidePosition = function setSlidePosition() {
    return api.start(function (i) {
      if (i < ref.current - 1 || i > ref.current + 1) return {
        display: "none"
      };
      var x = i === ref.current ? 0 : width * (i - ref.current);
      return {
        x: x,
        display: "block"
      };
    });
  };
  var mediaLength = media.length;
  React.useEffect(function () {
    if (ref.current !== activeSlide) {
      var next = activeSlide > ref.current;
      var dirMultiplier = next ? 1 : -1;
      for (var index = ref.current; next ? index <= activeSlide : index >= activeSlide; index += dirMultiplier) {
        if (index >= 0 && index < mediaLength) {
          ref.current = index;
          setSlidePosition();
        }
      }
    }
  }, [activeSlide]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: srGalleryClassName
  }, mediaLength > 1 ? typeof PreviousNavItemComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(PreviousNavItemComponent, {
    onClick: function onClick() {
      ref.current = ref.current ? ref.current - 1 : 0;
      setActiveSlide(ref.current);
      setSlidePosition();
    }
  }) : /*#__PURE__*/React__default["default"].createElement(NavItem, {
    next: false,
    navItemClassName: navItemClassName,
    onClick: function onClick() {
      ref.current = ref.current ? ref.current - 1 : 0;
      setActiveSlide(ref.current);
      setSlidePosition();
    }
  }) : null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srMediaContainerClassName
  }, props.map(function (item, index) {
    var x = item.x,
      display = item.display;
    var mediaObj = media[index];
    return /*#__PURE__*/React__default["default"].createElement(web.animated.div, _extends({}, bind(), {
      key: "".concat(mediaObj.id, "-").concat(index),
      className: srMediaItemClassName,
      style: {
        display: display,
        x: x
      }
    }), typeof MediaItemComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(MediaItemComponent, {
      mediaObj: mediaObj
    }) : mediaObj.renderType === "image" ? /*#__PURE__*/React__default["default"].createElement("img", {
      src: mediaObj.url,
      className: srImageItemClassName
    }) : /*#__PURE__*/React__default["default"].createElement("video", {
      src: url,
      controls: true,
      className: srVideoItemClassName
    }));
  })), mediaLength > 1 ? typeof NextNavItemComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(NextNavItemComponent, {
    onClick: function onClick() {
      var lastItem = media.length - 1;
      ref.current = ref.current < lastItem ? ref.current + 1 : lastItem;
      setActiveSlide(ref.current);
      setSlidePosition();
    }
  }) : /*#__PURE__*/React__default["default"].createElement(NavItem, {
    next: true,
    navItemClassName: navItemClassName,
    onClick: function onClick() {
      var lastItem = media.length - 1;
      ref.current = ref.current < lastItem ? ref.current + 1 : lastItem;
      setActiveSlide(ref.current);
      setSlidePosition();
    }
  }) : null);
}
var clamp = function clamp(number, lower, upper) {
  number = +number;
  lower = +lower;
  upper = +upper;
  lower = lower === lower ? lower : 0;
  upper = upper === upper ? upper : 0;
  if (number === number) {
    number = number <= upper ? number : upper;
    number = number >= lower ? number : lower;
  }
  return number;
};

// true = next, false = prev
var NavItem = function NavItem(_ref3) {
  var next = _ref3.next,
    onClick = _ref3.onClick,
    navItemClassName = _ref3.navItemClassName;
  var srNavItemClassName = useStyleRewriter$6(baseNavItemClassName, navItemClassName);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "z-10 absolute h-full top-0 ".concat(next ? "right-2" : "left-2", "  flex items-center")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: onClick,
    className: srNavItemClassName
  }, /*#__PURE__*/React__default["default"].createElement(ChevronIcon, {
    className: "w-[26px] ".concat(next ? "" : "rotate-180")
  })));
};
var baseGalleryClassName = "\n  @ht h-full\n  @wh w-full\n  @pn relative\n";
var baseMediaContainerClassName = "\n  @ht h-full\n  @wh w-full\n  @pn relative\n  @ow overflow-hidden\n  @dy flex\n  @jyc justify-center\n  @ani items-center\n";
var baseMediaItemClassName = "\n  @pn absolute\n  @wh w-full\n  @ht h-full\n  @ow overflow-hidden\n  @th touch-none\n";
var baseImageItemClassName = "\n  @wh w-full\n  @ht h-full\n  @pre pointer-events-none\n  @th touch-none\n  @urs select-none\n  @otf object-cover\n";
var baseVideoItemClassName = "\n  @wh w-full\n  @ht h-full\n";
var baseNavItemClassName = "\n  @dy flex\n  @jyc justify-center\n  @ani items-center\n  @wh w-[32px]\n  @ht h-[50px]\n  @brr rounded-full\n  @cr cursor-pointer\n  @bdc bg-black\n  @bdo bg-opacity-30\n  @ttc text-white";
var ChevronIcon = function ChevronIcon(_ref4) {
  var className = _ref4.className;
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "fill-current ".concat(className)
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.3923 17.9512L10.106 4.81458L11.4102 3.61536L26.9999 17.9506L26.8933 18.0487L26.894 18.0493L11.3042 32.3845L10 31.1853L24.3923 17.9512Z"
  }));
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var MediaGallery = function MediaGallery(_ref) {
  var media = _ref.media,
    _ref$containerClassNa = _ref.containerClassName,
    containerClassName = _ref$containerClassNa === void 0 ? "" : _ref$containerClassNa,
    _ref$galleryContainer = _ref.galleryContainerClassName,
    galleryContainerClassName = _ref$galleryContainer === void 0 ? "" : _ref$galleryContainer,
    mediaItemClassName = _ref.mediaItemClassName,
    imageItemClassName = _ref.imageItemClassName,
    videoItemClassName = _ref.videoItemClassName,
    PreviousNavItemComponent = _ref.PreviousNavItemComponent,
    mediaContainerClassName = _ref.mediaContainerClassName,
    NextNavItemComponent = _ref.NextNavItemComponent,
    galleryClassName = _ref.galleryClassName,
    MediaItemComponent = _ref.MediaItemComponent;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setShow = _useState2[1];
  var _useState3 = React.useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    activeSlideIndex = _useState4[0],
    setActiveSlideIndex = _useState4[1];
  var localMedia = React.useMemo(function () {
    if (!media) {
      return;
    }
    return media.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        renderType: parseMimeType$1(item.mime).renderType
      });
    });
  }, [media]);
  if (!localMedia) return null;
  var srContainerClassName = useStyleRewriter$6(baseContainerClassName, containerClassName);
  var srGalleryContainerClassName = useStyleRewriter$6(baseGalleryContainerClassName, galleryContainerClassName);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: srContainerClassName
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srGalleryContainerClassName
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute w-full h-full inset-0"
  }, /*#__PURE__*/React__default["default"].createElement(ReactSpringGallery, {
    activeSlide: activeSlideIndex,
    galleryClassName: galleryClassName,
    mediaContainerClassName: mediaContainerClassName,
    mediaItemClassName: mediaItemClassName,
    imageItemClassName: imageItemClassName,
    videoItemClassName: videoItemClassName,
    PreviousNavItemComponent: PreviousNavItemComponent,
    NextNavItemComponent: NextNavItemComponent,
    MediaItemComponent: MediaItemComponent,
    setActiveSlide: setActiveSlideIndex,
    media: localMedia,
    setShow: setShow
  }))));
};
var baseContainerClassName = "\n  @wh w-full\n  @ht h-full\n  @dy flex\n  @fxd flex-row\n  @ani items-center md:items-start\n  @jyc justify-center\n  @pn relative";
var baseGalleryContainerClassName = "\n  @dy flex\n  @wh w-full\n  @pn relative";

var CopyButton = function CopyButton(props) {
  var textToCopy = props.textToCopy,
    _props$CopyButtonComp = props.CopyButtonComponent,
    CopyButtonComponent = _props$CopyButtonComp === void 0 ? function () {} : _props$CopyButtonComp;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    copied = _useState2[0],
    setCopied = _useState2[1];
  var handleClick = function handleClick() {
    if (!window.isSecureContext) {
      alert("Copying is not supported in your browser");
      return;
    }
    window.navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(function () {
      return setCopied(false);
    }, 7000);
  };
  return /*#__PURE__*/React__default["default"].createElement(CopyButtonComponent, _extends({}, props, {
    onClick: handleClick,
    copied: copied
  }));
};

var AuthWrapper = function (_a) {
    var isAuthRoute = _a.isAuthRoute, children = _a.children, _b = _a.isPublic, isPublic = _b === void 0 ? false : _b, useRouter = _a.useRouter, user = _a.user; _a.useMyProfile; var redirectTo = _a.redirectTo;
    // const { me: user } = useMyProfile();
    var router = useRouter();
    var initPath = router.query.initPath;
    var _c = __read(React.useState(initPath || ""), 2); _c[0]; _c[1];
    React.useEffect(function () {
        console.log("\uD83D\uDE80 ~ useEffect ~ \"new render\"", "new render");
    }, []);
    // useEffect(() => {
    //   setCachedInitPath((prev) => {
    //     if (initPath !== "" && prev === "") {
    //       return initPath;
    //     }
    //     return prev;
    //   });
    // }, [initPath]);
    // useEffect(() => {
    //   console.log(`🚀 ~ useEffect ~ cachedInitPath`, cachedInitPath);
    // }, [cachedInitPath]);
    var _d = __read(React.useState(false), 2), passed = _d[0], setPassed = _d[1];
    React.useEffect(function () {
        var _a;
        if (user.id) {
            setPassed(true);
            if ((_a = router.pathname) === null || _a === void 0 ? void 0 : _a.includes("/auth")) {
                router.push(redirectTo);
            }
            return;
        }
        else if (!isAuthRoute) {
            if (isPublic) {
                setPassed(true);
                return;
            }
            var pathQuery = !initPath ? "?initPath=".concat(router.asPath) : "";
            // console.log(`🚀 ~ useEffect ~ pathQuery`, pathQuery);
            router.push("/auth/login".concat(pathQuery));
        }
        else if (isAuthRoute) {
            setPassed(true);
        }
    }, [user, router]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null, passed ? children : null));
};

var components = {
  SmartButton: SmartButton,
  Modal: Modal,
  ModalArray: ModalArray,
  Input: FormInput,
  CheckboxInput: CheckboxInput,
  DropdownInput: DropdownInput,
  SpringNotification: SpringNotification,
  MediaGallery: MediaGallery,
  CopyButton: CopyButton,
  AuthWrapper: AuthWrapper
};

var index = {
    api: apiUtils,
    formatters: formatters,
    vanilla: vanilla,
    hooks: hooks,
    components: components,
    redux: redux,
};

exports["default"] = index;
//# sourceMappingURL=index.js.map
