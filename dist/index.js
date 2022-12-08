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
var path = require('path');
var proc = require('process');
var url$1 = require('url');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var qs__default = /*#__PURE__*/_interopDefaultLegacy(qs);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var Calendar__default = /*#__PURE__*/_interopDefaultLegacy(Calendar);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var proc__default = /*#__PURE__*/_interopDefaultLegacy(proc);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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
var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }
    return t;
  };
  return _assign.apply(this, arguments);
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
      sent: function sent() {
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
    while (g && (g = 0, op[0] && (_ = 0)), _) {
      try {
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
    next: function next() {
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
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
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
var isArray$1 = function (data) { return data && Array.isArray(data); };
var snakeToCamel = function (str) {
    return str.replace(/([-_][a-z])/gi, function (char) {
        return char.toUpperCase().replace("-", "").replace("_", "");
    });
};
var flatItemAttributes = function (data) {
    if (!(data === null || data === void 0 ? void 0 : data.attributes))
        return data;
    return _assign({ id: data === null || data === void 0 ? void 0 : data.id }, data.attributes);
};
var transformEntriesInObj = function (item) {
    if (isObject(item) && !isArray$1(item)) {
        var entries = Object.entries(item).map(function (entry) {
            var key = snakeToCamel(entry[0]);
            var value = entry[1];
            if (isObject(value)) {
                value = transformEntriesInObj(value);
            }
            else if (isArray$1(value)) {
                value = value.map(function (elem) { return transformEntriesInObj({ item: elem }); });
            }
            return [key, value];
        });
        return Object.fromEntries(entries);
    }
    return item;
};
var transformResponseItem$1 = function (resItem) {
    if (isArray$1(resItem)) {
        return resItem.map(function (item) { return transformResponseItem$1(item); });
    }
    if (isObject(resItem)) {
        if (isArray$1(resItem.data)) {
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
        var passHeaders = _assign(_assign({}, headers), combineHeaders({ withAuth: withAuth }));
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
        return _assign(_assign({}, block), { images: ((_a = block === null || block === void 0 ? void 0 : block.images) === null || _a === void 0 ? void 0 : _a.map(getImageUrl)) || null });
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
                                populate: _assign({}, keys.reduce(function (a, b) {
                                    var _a;
                                    return (_assign(_assign({}, a), (_a = {}, _a[b] = { populate: "*" }, _a)));
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
                filledQuery = _assign({ locale: locale, populate: _assign({ page_blocks: {
                            populate: _assign({}, keys.reduce(function (a, b) {
                                var _a;
                                return (_assign(_assign({}, a), (_a = {}, _a[b] = { populate: "*" }, _a)));
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
                            additionalBlocksData[block] = transformPageBlock(_assign(_assign({}, res[block]), { _Component: block }), transformers);
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

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}

function _toPrimitive(input, hint) {
  if (_typeof$1(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof$1(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof$1(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
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

function ownKeys$l(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$l(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$l(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$l(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * Filter function by text content
 *
 * @param {array} rows - an array of sorted values ​​from the `useTable ()` hook
 * @param {string} accessor - filtering key
 * @param {string} filterValue - the passed filtering parameter by which the comparison is made
 * @returns {array} filtered array of values
 */
var text$3 = function text(rows, accessor, filterValue) {
  return rows.filter(function (row) {
    var rowValue = row[prefix][accessor];
    return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true;
  });
};
var baseFilters = {
  text: text$3
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
    sortBy = _useState[0],
    setSortBy = _useState[1];
  var _useState2 = React.useState(initialFiltersState),
    filters = _useState2[0],
    setFilters = _useState2[1];
  var _useState3 = React.useState(config.globalFilter || ""),
    localGlobalFilter = _useState3[0],
    setLocalGlobalFilter = _useState3[1];
  var _useState4 = React.useState(config.selectedRowIds || undefined),
    localSelectedRowIds = _useState4[0],
    setLocalSelectedRowIds = _useState4[1];
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
    return _objectSpread$l(_objectSpread$l({}, baseFilters), config.filterTypes);
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
  var _useState5 = React.useState(state.globalFilter),
    inputValue = _useState5[0],
    setInputValue = _useState5[1];
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
  argTypes: _objectSpread$l(_objectSpread$l(_objectSpread$l(_objectSpread$l({}, columnsDoc), dataDoc), configDoc), returnDoc),
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
                            newState[index_1] = _assign(_assign({}, localStateItem), newState[index_1]);
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
                loc[index] = _assign(_assign({}, loc[index]), updatedInputs);
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
                        return _assign(_assign({}, prev), (_a = {}, _a[updatedFileKey] = newFiles, _a));
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
                                    return _assign(_assign({}, item), (_a = {}, _a[clearedKey_1[1]] = newFiles, _a));
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
                        return _assign(_assign({}, prev), (_a = {}, _a[updatedFileKey] = newFiles, _a));
                    });
                    return "continue";
                }
            }
            else {
                // console.log(`🚀 ~ changeFiles ~ delete`, updatedFileKey);
                // удалить этот файл
                setLocalFiles(function (prev) {
                    var newFiles = _assign({}, prev);
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
                var newFiles = _assign({}, prev);
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
    width = _useState[0],
    setWidth = _useState[1];
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

function ownKeys$k(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$k(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$k(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$k(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useStyleRewriter$6 = function useStyleRewriter(baseClassName, className) {
  var cleared = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return React.useMemo(function () {
    var styleObj = getStyleObj("@base ".concat(baseClassName), cleared);
    var styleObjProps = getStyleObj("@prop ".concat(className), cleared);
    var computedStyleObj = _objectSpread$k(_objectSpread$k({}, styleObj), styleObjProps);
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
    isActive = _useState[0],
    setIsActive = _useState[1];
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
    isActive = _useState[0],
    setIsActive = _useState[1];
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
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
function ownKeys$j(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$j(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$j(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$j(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var changeInput = function changeInput(e, _ref) {
  var inputs = _ref.inputs,
    errors = _ref.errors,
    files = _ref.files,
    _ref$setErrors = _ref.setErrors,
    setErrors = _ref$setErrors === void 0 ? function () {} : _ref$setErrors,
    setInputs = _ref.setInputs,
    setFiles = _ref.setFiles;
  var localInputs = _objectSpread$j({}, inputs);
  var localErrors = _objectSpread$j({}, errors);
  var localFiles = _objectSpread$j({}, files);
  localErrors[e.target.id] = [];
  if (!e.target.files) {
    if (!Object.keys(files).includes(e.target.id)) {
      localInputs[e.target.id] = e.target.value;
    } else {
      // Delete files on backend
      localInputs[e.target.id] = e.target.value;
      if (e.target.multiple) {
        if (localFiles && Array.isArray(localFiles[e.target.id]) && Array.isArray(localInputs[e.target.id])) {
          localFiles = _objectSpread$j(_objectSpread$j({}, localFiles), {}, _defineProperty({}, e.target.id, _toConsumableArray(localInputs[e.target.id])));
        }
      } else {
        // Deleted not multiple file
        delete localFiles[e.target.id];
      }
    }
  } else {
    var loadedFiles = _objectSpread$j({}, e.target.files);
    var _iterator = _createForOfIteratorHelper$2(new Array(e.target.files.length).entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 1),
          index = _step$value[0];
        if (e.target.multiple) {
          if (localFiles && Array.isArray(localFiles[e.target.id]) && Array.isArray(localInputs[e.target.id])) {
            localFiles = _objectSpread$j(_objectSpread$j({}, localFiles), {}, _defineProperty({}, e.target.id, [].concat(_toConsumableArray(localFiles[e.target.id]), [loadedFiles[index]])));
          } else {
            localFiles = _objectSpread$j(_objectSpread$j({}, localFiles), {}, _defineProperty({}, e.target.id, [loadedFiles[index]]));
          }
        } else {
          localFiles = _objectSpread$j(_objectSpread$j({}, localFiles), {}, _defineProperty({}, e.target.id, loadedFiles[index]));
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
  setFiles(_objectSpread$j({}, localFiles));
  setInputs(_objectSpread$j({}, localInputs));
  setErrors(_objectSpread$j({}, localErrors));
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
  if (value === undefined || value === null || typeof value == "string" && value.trim() == "") {
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
  var localErrors = _objectSpread$j({}, errors);
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
        if (typeof checker === "function") {
          checker(checkerProps);
        } else if (typeof checker === "string") {
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
        hasErrors.push(_objectSpread$j({}, value));
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
    var localTypes = _objectSpread$j({}, types);
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
  setBlockedInputs(_objectSpread$j(_objectSpread$j({}, blockedInputs), newBlockedInputs));
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
function ownKeys$i(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$i(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$i(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$i(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
    inputs = _useState[0],
    setInputs = _useState[1];
  var _useState2 = React.useState(initialFiles),
    files = _useState2[0],
    setFiles = _useState2[1];
  var _useState3 = React.useState(initialErrors),
    errors = _useState3[0],
    setErrors = _useState3[1];
  var _useState4 = React.useState(initialTypes),
    types = _useState4[0],
    setTypes = _useState4[1];
  var _useState5 = React.useState(initialBlocked),
    blockedInputs = _useState5[0],
    setBlockedInputs = _useState5[1];
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
    return onSubmit(e, _objectSpread$i({
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
        var prop = _objectSpread$i({
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
            if (typeof defaultFile !== "object") {
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
      } else if (typeof config.defaultValue === "object") {
        var passedFile = passedFiles;
        var defaultFile = config.defaultValue;
        if (typeof defaultFile !== "object" || defaultFile === null) {
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

function ownKeys$h(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$h(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$h(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
      return _objectSpread$h(_objectSpread$h({}, prev), {}, _defineProperty({}, submitId, onSubmit));
    });
  }, [onSubmit]);
  var onDelete = function onDelete() {
    setSubmitPipe(function (prev) {
      var newSubmitPipes = _objectSpread$h({}, prev);
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
    domRect = _useState[0],
    setDomRect = _useState[1];
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
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$c : _ref$inputsConfig;
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
    inputsValues = _useForm.inputsValues,
    onSubmit = _useForm.onSubmit,
    inputsSetErrors = _useForm.setErrors;
  return {
    inputs: inputs,
    inputsErrors: inputsErrors,
    inputsSetErrors: inputsSetErrors,
    error: error,
    inputsValues: inputsValues,
    onSubmit: onSubmit,
    isLoading: isLoading,
    isSuccess: isSuccess,
    data: data
  };
};
var defaultInputsConfig$c = [{
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
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$b : _ref$inputsConfig,
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
    inputsValues = _useForm.inputsValues,
    setInputsValues = _useForm.setInputsValues,
    setErrors = _useForm.setErrors,
    onSubmit = _useForm.onSubmit,
    setPassed = _useForm.setPassed;
  return {
    isLoading: isLoading,
    data: data,
    isSuccess: isSuccess,
    inputsValues: inputsValues,
    setErrors: setErrors,
    setInputsValues: setInputsValues,
    inputs: inputs,
    onSubmit: onSubmit,
    setPassed: setPassed
  };
};
var defaultInputsConfig$b = [{
  title: "Email address*",
  label: "Email address",
  field: "email",
  checkerFuncs: ["checkRequiredField", "checkEmailMask"],
  type: "email",
  placeholder: "Type your email"
}];

function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$g(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$g(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useLogin = function useLogin(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$a : _ref$inputsConfig;
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
      data: inputs
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
    inputsValues = _useForm.inputsValues,
    changeBlockedInputs = _useForm.changeBlockedInputs,
    clearInputs = _useForm.clearInputs;
  React.useEffect(function () {
    if (error) {
      setErrors(function (prev) {
        var _error$data;
        var newErrors = _objectSpread$g({}, prev);
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
    inputsValues: inputsValues,
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
var defaultInputsConfig$a = [{
  field: "identifier",
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
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$9 : _ref$inputsConfig;
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
    inputsValues = _useForm.inputsValues,
    onSubmit = _useForm.onSubmit,
    setPassed = _useForm.setPassed;
  return {
    data: data,
    inputs: inputs,
    inputsValues: inputsValues,
    onSubmit: onSubmit,
    isSuccess: isSuccess,
    isLoading: isLoading,
    error: error,
    setPassed: setPassed,
    inputsErrors: inputsErrors,
    inputsSetErrors: inputsSetErrors
  };
};
var defaultInputsConfig$9 = [{
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

function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$f(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$f(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useResetPassword = function useResetPassword(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$8 : _ref$inputsConfig,
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
      setInputsValues(_objectSpread$f(_objectSpread$f({}, inputsValues), {}, {
        code: code
      }));
    }
  }, []);
  return {
    data: data,
    isLoading: isLoading,
    error: error,
    inputsValues: inputsValues,
    inputs: inputs,
    onSubmit: onSubmit,
    isSuccess: isSuccess,
    inputsErrors: inputsErrors,
    setInputsErrors: setInputsErrors
  };
};
var defaultInputsConfig$8 = [{
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
  field: "passwordConfirmation",
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
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$7 : _ref$inputsConfig,
    authSlice = _ref.authSlice;
  var auth = reactRedux.useSelector(authSlice.selectors.auth);
  var _useState = React.useState(),
    user = _useState[0],
    setUser = _useState[1];

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
    inputsValues = _useForm.inputsValues,
    inputs = _useForm.inputs,
    onSubmit = _useForm.onSubmit,
    inputsErrors = _useForm.inputs,
    inputsSetErrors = _useForm.setErrors;
  return {
    inputs: inputs,
    inputsValues: inputsValues,
    onSubmit: onSubmit,
    error: error,
    isSuccess: isSuccess,
    inputsErrors: inputsErrors,
    inputsSetErrors: inputsSetErrors
  };
};
var defaultInputsConfig$7 = [{
  label: "Verification code",
  field: "confirmation",
  type: "otp",
  checkerFuncs: ["checkRequiredField"],
  id: "confirmation"
}];

var useSendPhoneConfirmation = function useSendPhoneConfirmation(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$6 : _ref$inputsConfig;
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
    inputsValues = _useForm.inputsValues,
    onSubmit = _useForm.onSubmit,
    inputsSetErrors = _useForm.setErrors;
  return {
    inputs: inputs,
    inputsErrors: inputsErrors,
    inputsValues: inputsValues,
    inputsSetErrors: inputsSetErrors,
    error: error,
    onSubmit: onSubmit,
    isLoading: isLoading,
    isSuccess: isSuccess,
    data: data
  };
};
var defaultInputsConfig$6 = [{
  label: "Phone",
  field: "phone",
  checkerFuncs: ["checkRequiredField"],
  type: "text",
  placeholder: "Type your phone"
}];

function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$e(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$e(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useConfirmEmail = function useConfirmEmail(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$5 : _ref$inputsConfig,
    _ref$ping = _ref.ping,
    ping = _ref$ping === void 0 ? 30 : _ref$ping,
    _ref$initialPing = _ref.initialPing,
    initialPing = _ref$initialPing === void 0 ? 0 : _ref$initialPing,
    useSelector = _ref.useSelector;
  var user = useSelector(function (state) {
    var _state$auth;
    return (_state$auth = state.auth) === null || _state$auth === void 0 ? void 0 : _state$auth.user;
  }); //?
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
  var _useState = React.useState(initialPing),
    counter = _useState[0],
    setCounter = _useState[1];
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
        var newErrors = _objectSpread$e({}, prev);
        newErrors.email = {
          id: "ValidationError",
          message: "Empty email address"
        };
        return newErrors;
      });
      return;
    }
    setCounter(ping);
    sendEmailConfirmation({
      data: {
        email: inputsValues.email
      }
    });
  };
  React.useEffect(function () {
    console.log("\uD83D\uDE80 ~ useEffect ~ user", user);
    if (user) {
      if (user.email) {
        setInputsValues(_objectSpread$e(_objectSpread$e({}, inputsValues), {}, {
          email: user.email
        }));
        return;
      }
    }
    if (typeof window !== "undefined") {
      var _URLSearchParams, _URL, _window, _URLSearchParams2, _URL2, _window2;
      var code = (_URLSearchParams = new URLSearchParams((_URL = new URL((_window = window) === null || _window === void 0 ? void 0 : _window.location)) === null || _URL === void 0 ? void 0 : _URL.search)) === null || _URLSearchParams === void 0 ? void 0 : _URLSearchParams.get("code");
      var email = (_URLSearchParams2 = new URLSearchParams((_URL2 = new URL((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.location)) === null || _URL2 === void 0 ? void 0 : _URL2.search)) === null || _URLSearchParams2 === void 0 ? void 0 : _URLSearchParams2.get("email");
      setInputsValues(_objectSpread$e(_objectSpread$e({}, inputsValues), {}, {
        code: code,
        email: email
      }));
    }
  }, [user]);
  return {
    counter: counter,
    resendEmailConfirmation: resendEmailConfirmation,
    resendEmailConfirmationError: resendEmailConfirmationError,
    resendEmailConfirmationIsLoading: resendEmailConfirmationIsLoading,
    resendEmailConfirmationIsSuccess: resendEmailConfirmationIsSuccess,
    resendEmailConfirmationData: resendEmailConfirmationData,
    data: data,
    isLoading: isLoading,
    inputsValues: inputsValues,
    error: error,
    inputs: inputs,
    onSubmit: onSubmit,
    isSuccess: isSuccess,
    inputsErrors: inputsErrors,
    setInputsErrors: setInputsErrors
  };
};
var defaultInputsConfig$5 = [{
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

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$d(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useConfirmPhone = function useConfirmPhone(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$4 : _ref$inputsConfig,
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
    counter = _useState[0],
    setCounter = _useState[1];
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
        var newErrors = _objectSpread$d({}, prev);
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
      setInputsValues(_objectSpread$d(_objectSpread$d({}, inputsValues), {}, {
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
var defaultInputsConfig$4 = [{
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
            logout: function (state) {
                localStorage.removeItem("jwt");
                state.id = null;
                state.currentAuthFactor = "local";
                state.jwt = undefined;
                state.isAuthenticated = false;
                return;
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
    if (user) {
        state.user = user;
        state.id = user.id;
    }
    if (jwt) {
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
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$3 : _ref$inputsConfig,
    useSelector = _ref.useSelector;
  var _profilesApi$useUpdat = profilesApi.useUpdateMeMutation(),
    _profilesApi$useUpdat2 = _slicedToArray(_profilesApi$useUpdat, 2),
    updateMe = _profilesApi$useUpdat2[0],
    _profilesApi$useUpdat3 = _profilesApi$useUpdat2[1],
    isSuccess = _profilesApi$useUpdat3.isSuccess,
    error = _profilesApi$useUpdat3.error,
    data = _profilesApi$useUpdat3.data,
    isLoading = _profilesApi$useUpdat3.isLoading;
  var accountId = useSelector(selectors.selectAccountId); //?

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
    inputsValues = _useForm.inputsValues,
    inputsErrors = _useForm.errors,
    setInputsErrors = _useForm.setErrors;
  return {
    data: data,
    isLoading: isLoading,
    inputsValues: inputsValues,
    error: error,
    inputs: inputs,
    onSubmit: onSubmit,
    isSuccess: isSuccess,
    inputsErrors: inputsErrors,
    setInputsErrors: setInputsErrors
  };
};
var defaultInputsConfig$3 = [{
  field: "username",
  checkerFuncs: ["checkRequiredField"],
  type: "text",
  placeholder: "Type your username",
  label: "Username"
}];

var useMyProfileCreator = function (_a) {
    var profilesApi = _a.profilesApi, populate = _a.populate, useSelector = _a.useSelector;
    var accountId = useSelector(selectors.selectAccountId);
    var jwtToken = useSelector(selectors.selectJwt);
    var _b = profilesApi.useGetMeQuery(undefined, { skip: !jwtToken }), myProfileByMe = _b.data, meError = _b.error, refetchMe = _b.refetch, isUninitialized = _b.isUninitialized;
    var _c = profilesApi.useGetProfileByIdQuery({ id: accountId, populate: populate }, {
        skip: !jwtToken || !accountId,
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
            ? _assign(_assign({}, (myProfileByMe || {})), (filledProfile || {})) : {};
        var refetch = function () {
            refetchMe();
            refetchProfileById();
        };
        return { me: me, refetch: refetch };
    }, [myProfileByMe, filledProfile]);
    return profile;
};

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$c(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useSetOtp = function useSetOtp(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$2 : _ref$inputsConfig,
    useSelector = _ref.useSelector;
  var accountId = useSelector(selectors.selectAccountId); //?
  var _profilesApi$useGener = profilesApi.useGenerateOtpSecretQuery({
      id: accountId
    }, {
      skip: !accountId
    }),
    generateOtpSecretData = _profilesApi$useGener.data,
    generateOtpSecretIsSuccess = _profilesApi$useGener.isSuccess,
    generateOtpSecretIsLoading = _profilesApi$useGener.isLoading;
  var _profilesApi$useSetOt = profilesApi.useSetOtpMutation(),
    _profilesApi$useSetOt2 = _slicedToArray(_profilesApi$useSetOt, 2),
    setOtp = _profilesApi$useSetOt2[0],
    _profilesApi$useSetOt3 = _profilesApi$useSetOt2[1],
    isSuccess = _profilesApi$useSetOt3.isSuccess,
    error = _profilesApi$useSetOt3.error,
    data = _profilesApi$useSetOt3.data,
    isLoading = _profilesApi$useSetOt3.isLoading;
  var submitFunc = function submitFunc(_ref2) {
    var inputs = _ref2.inputs;
    setOtp({
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
    setInputsValues = _useForm.setInputsValues,
    inputsValues = _useForm.inputsValues,
    inputsErrors = _useForm.errors,
    setInputsErrors = _useForm.setErrors;
  React.useEffect(function () {
    setInputsValues(function (prev) {
      return _objectSpread$c(_objectSpread$c({}, prev), {}, {
        otp_secret: generateOtpSecretData === null || generateOtpSecretData === void 0 ? void 0 : generateOtpSecretData.secretHashCode
      });
    });
  }, [setInputsValues, generateOtpSecretData]);

  // useEffect(() => {
  //   console.log(
  //     `🚀 ~ useEffect ~ generateOtpSecretData`,
  //     generateOtpSecretData
  //   );
  // }, [generateOtpSecretData]);

  return {
    generateOtpSecretData: generateOtpSecretData,
    generateOtpSecretIsLoading: generateOtpSecretIsLoading,
    generateOtpSecretIsSuccess: generateOtpSecretIsSuccess,
    data: data,
    inputsValues: inputsValues,
    isLoading: isLoading,
    setInputsValues: setInputsValues,
    error: error,
    inputs: inputs,
    onSubmit: onSubmit,
    isSuccess: isSuccess,
    inputsErrors: inputsErrors,
    setInputsErrors: setInputsErrors
  };
};
var defaultInputsConfig$2 = [{
  title: "Code",
  field: "code",
  checkerFuncs: ["checkRequiredField"],
  label: "Code",
  placeholder: "Type code here",
  type: "otp"
}];

var useDeleteOtp = function useDeleteOtp(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig$1 : _ref$inputsConfig,
    useSelector = _ref.useSelector;
  var accountId = useSelector(selectors.selectAccountId); //?
  var _profilesApi$useDelet = profilesApi.useDeleteOtpMutation(),
    _profilesApi$useDelet2 = _slicedToArray(_profilesApi$useDelet, 2),
    deleteOtp = _profilesApi$useDelet2[0],
    _profilesApi$useDelet3 = _profilesApi$useDelet2[1],
    isSuccess = _profilesApi$useDelet3.isSuccess,
    error = _profilesApi$useDelet3.error,
    data = _profilesApi$useDelet3.data,
    isLoading = _profilesApi$useDelet3.isLoading;
  var submitFunc = function submitFunc(_ref2) {
    var inputs = _ref2.inputs;
    deleteOtp({
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
    setInputsValues = _useForm.setInputsValues,
    inputsValues = _useForm.inputsValues,
    inputsErrors = _useForm.errors,
    setInputsErrors = _useForm.setErrors;
  return {
    data: data,
    isLoading: isLoading,
    setInputsValues: setInputsValues,
    inputsValues: inputsValues,
    error: error,
    inputs: inputs,
    onSubmit: onSubmit,
    isSuccess: isSuccess,
    inputsErrors: inputsErrors,
    setInputsErrors: setInputsErrors
  };
};
var defaultInputsConfig$1 = [{
  title: "Code",
  field: "code",
  checkerFuncs: ["checkRequiredField"],
  label: "Code",
  placeholder: "Type code here",
  type: "otp"
}];

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$b(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useCheckOtp = function useCheckOtp(_ref) {
  var profilesApi = _ref.profilesApi,
    _ref$inputsConfig = _ref.inputsConfig,
    inputsConfig = _ref$inputsConfig === void 0 ? defaultInputsConfig : _ref$inputsConfig,
    useSelector = _ref.useSelector;
  var user = useSelector(function (state) {
    var _state$auth;
    return (_state$auth = state.auth) === null || _state$auth === void 0 ? void 0 : _state$auth.user;
  }); //?
  var _profilesApi$useCheck = profilesApi.useCheckOtpMutation(),
    _profilesApi$useCheck2 = _slicedToArray(_profilesApi$useCheck, 2),
    checkOtp = _profilesApi$useCheck2[0],
    _profilesApi$useCheck3 = _profilesApi$useCheck2[1],
    isSuccess = _profilesApi$useCheck3.isSuccess,
    error = _profilesApi$useCheck3.error,
    data = _profilesApi$useCheck3.data,
    isLoading = _profilesApi$useCheck3.isLoading;
  var submitFunc = function submitFunc(_ref2) {
    var inputs = _ref2.inputs;
    var userId = user !== null && user !== void 0 && user.id ? user.id : inputs.user;
    checkOtp({
      id: userId,
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
      var _user = (_URLSearchParams = new URLSearchParams((_URL = new URL((_window = window) === null || _window === void 0 ? void 0 : _window.location)) === null || _URL === void 0 ? void 0 : _URL.search)) === null || _URLSearchParams === void 0 ? void 0 : _URLSearchParams.get("user");
      setInputsValues(_objectSpread$b(_objectSpread$b({}, inputsValues), {}, {
        user: _user
      }));
    }
  }, []);
  return {
    data: data,
    isLoading: isLoading,
    inputsValues: inputsValues,
    setInputsValues: setInputsValues,
    error: error,
    inputs: inputs,
    onSubmit: onSubmit,
    isSuccess: isSuccess,
    inputsErrors: inputsErrors,
    setInputsErrors: setInputsErrors
  };
};
var defaultInputsConfig = [{
  title: "Code",
  field: "code",
  checkerFuncs: ["checkRequiredField"],
  label: "Code",
  placeholder: "Type code here",
  type: "otp"
}];

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
  useMyProfileCreator: useMyProfileCreator,
  useSetOtp: useSetOtp,
  useDeleteOtp: useDeleteOtp,
  useCheckOtp: useCheckOtp
};

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$a(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var hooks = _objectSpread$a({
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

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$9(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

function profileInvalidate(result, _error) {
  return result ? [{
    type: "Profile",
    id: result.id
  }] : [];
}
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
            return {
              url: "users/me"
            };
          },
          transformResponse: function transformResponse(item) {
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
          query: function query(params) {
            var formData = prepareDataToSend(params);
            return {
              method: "POST",
              url: "auth/local",
              body: formData
            };
          },
          transformResponse: function transformResponse(res) {
            return transformResponseItem(res);
          }
        }),
        checkOtp: build.mutation({
          query: function query(params) {
            var id = params.id,
              data = params.data;
            return {
              url: "users/".concat(id, "/otp"),
              params: _objectSpread$9({}, data)
            };
          },
          transformResponse: transformResponseItem
        }),
        sendEmailConfirmation: build.mutation({
          query: function query(params) {
            var formData = prepareDataToSend(params);
            return {
              url: "auth/send-email-confirmation",
              method: "POST",
              body: formData
            };
          },
          transformResponse: transformResponseItem
        }),
        confirmEmail: build.mutation({
          query: function query(_ref) {
            var data = _ref.data;
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
          query: function query(params) {
            var formData = prepareDataToSend(params);
            return {
              url: "auth/send-phone-confirmation",
              method: "POST",
              body: formData
            };
          }
        }),
        confirmPhone: build.mutation({
          query: function query(_ref2) {
            var data = _ref2.data;
            var stringifiedParams = qs__default["default"].stringify(data); //?

            return {
              url: "auth/phone-confirmation?".concat(stringifiedParams)
            };
          }
        }),
        forgotPassword: build.mutation({
          query: function query(params) {
            var formData = prepareDataToSend(params);

            // console.log(`🚀 ~ createProfilesApi ~ data`, data);
            return {
              url: "auth/forgot-password",
              method: "POST",
              body: formData
            };
          },
          transformResponse: transformResponseItem
        }),
        resetPassword: build.mutation({
          query: function query(params) {
            var formData = prepareDataToSend(params);

            // console.log(`🚀 ~ createProfilesApi ~ data`, data);
            return {
              url: "auth/reset-password",
              method: "POST",
              body: formData
            };
          },
          transformResponse: transformResponseItem
        }),
        register: build.mutation({
          query: function query(params) {
            var formData = prepareDataToSend(params);
            return {
              url: "auth/local/register",
              method: "POST",
              body: formData
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
          invalidatesTags: profileInvalidate
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
          providesTags: profileInvalidate
        }),
        generateOtpSecret: build.query({
          query: function query() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var id = params.id;
            return {
              url: "user/".concat(id, "/otp/generate")
            };
          },
          transformResponse: transformResponseItem
        }),
        setOtp: build.mutation({
          query: function query(params) {
            var id = params.id,
              data = params.data; //?

            return {
              url: "users/".concat(id, "/otp"),
              method: "POST",
              body: {
                data: data
              }
            };
          },
          transformResponse: transformResponseItem,
          invalidatesTags: profileInvalidate
        }),
        deleteOtp: build.mutation({
          query: function query(params) {
            var id = params.id,
              data = params.data; //?
            var code = data.code;
            console.log("\uD83D\uDE80 ~ createProfilesApi ~ params", params);
            return {
              url: "users/".concat(id, "/otp?code=").concat(code),
              method: "DELETE"
            };
          },
          transformResponse: transformResponseItem,
          invalidatesTags: profileInvalidate
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
    useGenerateOtpSecretQuery = profilesApi.useGenerateOtpSecretQuery,
    useSetOtpMutation = profilesApi.useSetOtpMutation,
    useDeleteOtpMutation = profilesApi.useDeleteOtpMutation;
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
      useGenerateOtpSecretQuery: useGenerateOtpSecretQuery,
      useSetOtpMutation: useSetOtpMutation,
      useDeleteOtpMutation: useDeleteOtpMutation
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

var __jsx$u = React__default["default"].createElement;
var useStyleRewriter$5 = hooks.useStyleRewriter;
var DropdownContainer = function DropdownContainer(_ref) {
  var children = _ref.children,
    containerClassName = _ref.containerClassName,
    className = _ref.className,
    dropdownRef = _ref.dropdownRef;
  var srClassName = useStyleRewriter$5(baseClasses$2, className);
  var srContainerClassName = useStyleRewriter$5(baseContainerClassName$5, containerClassName);
  return __jsx$u("div", {
    ref: dropdownRef,
    className: srContainerClassName
  }, __jsx$u("div", {
    className: srClassName
  }, children));
};
var baseContainerClassName$5 = "\n  @pn absolute\n  @wh w-full\n  @mn mt-2\n  @zi z-50\n  @it top-full left-0\n";
var baseClasses$2 = "\n  @dy flex\n  @fxd flex-col\n  @pn relative\n  @wh w-full\n";

var __jsx$t = React__default["default"].createElement;
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
  return __jsx$t("div", {
    ref: tooltipRef,
    className: "".concat(visible ? "opacity-100 w-auto" : "opacity-0", " ").concat(srClasses, " ").concat(tooltipClasses)
  }, children);
};
var baseClasses$1 = "\n    @pn absolute\n    @wh w-fit\n    @it left-0 top-0\n    @tta text-center \n    @bxsw shadow-400\n    @brw border\n    @brc border-true-gray-150\n    @bdc bg-white \n    @pg p-1 \n    @brr rounded-8px \n    @ttc text-black\n  ";

var _excluded$7 = ["children", "SmartButtonRef"],
  _excluded2$1 = ["Link", "children", "className", "linkProps"];
var __jsx$s = React__default["default"].createElement;
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
  return __jsx$s(React.Fragment, null, __jsx$s(Element, _extends({
    SmartButtonRef: SmartButtonRef,
    onClick: disabled ? function () {} : onClick
  }, elementProps), typeof children === "function" ? children({
    isMouseOver: isMouseOver
  }) : children, DropdownItems && __jsx$s(transitionComponent.Transition, _extends({
    show: isDropdownOpen
  }, contentTransitionProps$2), __jsx$s(DropdownContainer, {
    containerClassName: dropdownContainerClassName,
    className: dropdownClassName,
    dropdownRef: dropdownRef
  }, __jsx$s(DropdownItems, _extends({}, dropdownProps, {
    setIsDropdownOpen: setIsDropdownOpen
  })))), TooltipItems && __jsx$s(transitionComponent.Transition, _extends({
    show: isMouseOver
  }, tooltipTransitionProps), __jsx$s(Tooltip, {
    tooltipPosition: tooltipPosition,
    className: tooltipContainerClasses,
    visible: isMouseOver
  }, __jsx$s(TooltipItems, null)))));
};
var baseButtonClassName = "\n  @pn relative\n  @cr cursor-pointer\n  @tndn duration-200";
var DivSmartButton = function DivSmartButton(_ref2) {
  var children = _ref2.children,
    SmartButtonRef = _ref2.SmartButtonRef,
    props = _objectWithoutProperties(_ref2, _excluded$7);
  return __jsx$s("div", _extends({
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
  return __jsx$s(Link, props, __jsx$s("a", _extends({}, linkAttributes, {
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

var __jsx$r = React__default["default"].createElement;
var useStyleRewriter$2 = hooks.useStyleRewriter;
var ModalComponent$1 = function ModalComponent(_ref) {
  var _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    _ref$setShow = _ref.setShow,
    _setShow = _ref$setShow === void 0 ? function () {} : _ref$setShow,
    _ref$RenderCard = _ref.RenderCard,
    RenderCard = _ref$RenderCard === void 0 ? function () {
      return __jsx$r(React__default["default"].Fragment, null);
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
    showLayout = _useState[0],
    setShowLayout = _useState[1];
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
  return __jsx$r("div", {
    className: "".concat(showLayout ? "z-[200] block" : "-z-1", " ").concat(srContainerClasses)
  }, __jsx$r(TransitionElement, {
    baseClasses: "fixed inset-0 pointer-events-auto duration-".concat(duration, " transition z-10"),
    show: show,
    transitionProps: layoutTransitionProps
  }, __jsx$r("div", {
    className: "transition fixed inset-0"
  }, __jsx$r("div", {
    onClick: function onClick() {
      return _setShow(false);
    },
    className: srLayoutClasses
  }))), __jsx$r(TransitionElement, {
    baseClasses: "pointer-events-auto transition duration-".concat(duration, " transform z-40 relative"),
    show: show,
    id: "modal",
    changePopup: _setShow,
    transitionProps: contentTransitionProps$1
  }, __jsx$r("div", {
    className: srPopupWindowClasses
  }, __jsx$r(RenderCard, _extends({}, renderCardProps, {
    show: show,
    setShow: _setShow
  })))), !hideCloseButton && show ? __jsx$r(CloseButton, {
    setShow: function setShow(bool) {
      return _setShow(bool);
    },
    closeButtonClasses: closeButtonClasses
  }) : null);
};
var DefaultCloseButton = function DefaultCloseButton(_ref2) {
  var setShow = _ref2.setShow;
  return __jsx$r(SmartButton, {
    onClick: function onClick() {
      return setShow(false);
    },
    className: "@pn absolute @it right-[20px] top-[20px] @ttc text-white hover:text-neutral-550 @wh w-12 @zi z-50 @cr cursor-pointer"
  }, __jsx$r("svg", {
    className: "fill-current w-12 h-12",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx$r("path", {
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
  return __jsx$r(transitionComponent.Transition, _extends({
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
  return __jsx$r("div", {
    id: id,
    onClick: function onClick(e) {
      return e.target.id === id ? changePopup(false) : null;
    },
    className: "".concat(baseClasses, " ").concat(show ? transitionProps.enterTo : transitionProps.leaveTo)
  }, children);
};

var _excluded$6 = ["targetId"];
var __jsx$q = React__default["default"].createElement;
var ModalPortal$1 = function ModalPortal(_ref) {
  var _ref$targetId = _ref.targetId,
    targetId = _ref$targetId === void 0 ? "modal" : _ref$targetId,
    props = _objectWithoutProperties(_ref, _excluded$6);
  var _useState = React.useState(false),
    domLoaded = _useState[0],
    setDomLoaded = _useState[1];
  React.useEffect(function () {
    if (typeof window !== undefined && document.querySelector("#".concat(targetId))) {
      setDomLoaded(true);
    }
  }, []);
  return domLoaded && /*#__PURE__*/require$$0.createPortal(__jsx$q(ModalComponent$1, props), document.querySelector("#".concat(targetId)));
};

var _excluded$5 = ["showEffect", "ArrayItem", "array", "getRenderCardProps"];
var __jsx$p = React__default["default"].createElement;
var ModalArray = function ModalArray(_ref) {
  var _ref$showEffect = _ref.showEffect,
    showEffect = _ref$showEffect === void 0 ? function () {} : _ref$showEffect,
    ArrayItem = _ref.ArrayItem,
    array = _ref.array,
    getRenderCardProps = _ref.getRenderCardProps,
    props = _objectWithoutProperties(_ref, _excluded$5);
  var _useState = React.useState(false),
    show = _useState[0],
    setShow = _useState[1];
  var _useState2 = React.useState(0),
    currentItem = _useState2[0],
    setCurrentItem = _useState2[1];
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
  return __jsx$p(React__default["default"].Fragment, null, __jsx$p(ModalPortal$1, _extends({
    modalComponentId: modalComponentId,
    renderCardProps: renderCardProps,
    setShow: setShow,
    show: show
  }, props)), array.map(function (item, index) {
    return __jsx$p(ArrayItem, {
      key: index,
      item: item,
      index: index,
      showCurrentItem: showCurrentItem
    });
  }));
};

var __jsx$o = React__default["default"].createElement;
function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$8(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var useStyleRewriter$1 = hooks.useStyleRewriter;
var ModalComponent = function ModalComponent(_ref) {
  var _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    _ref$setShow = _ref.setShow,
    setShow = _ref$setShow === void 0 ? function () {} : _ref$setShow,
    _ref$RenderCard = _ref.RenderCard,
    RenderCard = _ref$RenderCard === void 0 ? function () {
      return __jsx$o(React__default["default"].Fragment, null);
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
    zIndex = _ref$zIndex === void 0 ? 200 : _ref$zIndex;
  var _useState = React.useState(false),
    isOpen = _useState[0],
    setIsOpen = _useState[1];
  var _useState2 = React.useState(window.innerHeight),
    screenHeight = _useState2[0],
    setScreenHeight = _useState2[1];
  var _useState3 = React.useState(false);
    _useState3[0];
    var setScrollActive = _useState3[1];
  var srPopupWindowClasses = useStyleRewriter$1("fixed z-[210] w-full h-95vh bg-white", popupWindowClasses);
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
      config: _objectSpread$8(_objectSpread$8({}, web.config.stiff), {}, {
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
  return __jsx$o("div", {
    className: "relative"
  }, __jsx$o(web.a.div, {
    onClick: close,
    className: "fixed inset-0 bg-zinc-900 opacity-50",
    style: bgStyle
  }), __jsx$o(web.a.div, _extends({
    className: srPopupWindowClasses
  }, bind(), {
    style: {
      display: show ? "block" : "none",
      bottom: "calc(-100vh + ".concat(modalHeight, "px)"),
      touchAction: "none",
      height: "100vh",
      y: y
    }
  }), __jsx$o("div", {
    className: "relative w-screen h-[90vh] bg-white  rounded-t-2xl pt-5"
  }, __jsx$o("div", {
    className: "absolute bg-white w-12 h-2 -top-4 left-1/2 transform -translate-x-1/2 rounded-full"
  }), __jsx$o("div", {
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
  }, __jsx$o(RenderCard, _extends({
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
var __jsx$n = React__default["default"].createElement;
var ModalPortal = function ModalPortal(_ref) {
  var _ref$targetId = _ref.targetId,
    targetId = _ref$targetId === void 0 ? "modal" : _ref$targetId,
    props = _objectWithoutProperties(_ref, _excluded$4);
  return document.querySelector("#".concat(targetId)) ? /*#__PURE__*/require$$0.createPortal(__jsx$n(ModalComponent, props), document.querySelector("#".concat(targetId))) : null;
};

var _excluded$3 = ["children", "showEffect"];
var __jsx$m = React__default["default"].createElement;
var useStyleRewriter = hooks.useStyleRewriter,
  useBreakpoint = hooks.useBreakpoint;
var Modal = function Modal(_ref) {
  var children = _ref.children,
    _ref$showEffect = _ref.showEffect,
    showEffect = _ref$showEffect === void 0 ? function () {} : _ref$showEffect,
    props = _objectWithoutProperties(_ref, _excluded$3);
  var _useState = React.useState(false),
    show = _useState[0],
    setShow = _useState[1];
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
  return __jsx$m(React.Fragment, null, __jsx$m(Component, _extends({
    modalComponentId: props.modalComponentId ? props.modalComponentId : modalComponentId,
    setShow: children ? setShow : props.setShow,
    show: children ? show : props.show
  }, props)), children ? __jsx$m("div", {
    className: srChildContainerClasses,
    onClick: function onClick() {
      return setShow(true);
    }
  }, children) : null);
};

var __jsx$l = React__default["default"].createElement;
var InputError = function InputError(_ref) {
  var error = _ref.error;
  return error.message ? __jsx$l("p", {
    className: baseClasses
  }, error.message) : null;
};
var baseClasses = "@ttc text-red-500 @fts text-[12px] @ttt normal-case @wh w-fit @leh leading-none text-left";

var __jsx$k = React__default["default"].createElement;
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
  return __jsx$k("div", {
    className: srLabelContainerClassName
  }, typeof LabelComponent === "function" && label ? __jsx$k(LabelComponent, props) : label ? __jsx$k("p", {
    className: srLabelClassName
  }, label) : null, __jsx$k("div", {
    className: srLabelInputContainerClassName
  }, children, typeof PairComponent === "function" ? __jsx$k(PairComponent, props) : null), typeof ErrorComponent === "function" && error ? __jsx$k(ErrorComponent, props) : error ? __jsx$k(InputError, props) : null);
};
var baseLabelContainerClasses = "\n  @pn relative\n  @dy flex\n  @gp gap-2\n  @fxd flex-col\n  @wh w-full\n";
var baseLabelClassName$1 = "\n  @mn mb-0";
var baseLabelInputContainerClassName = "\n  @wh w-full\n  @dy flex\n  @jyc justify-start\n  @ani items-center\n  @pn relative\n";

var __jsx$j = React__default["default"].createElement;
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
    localValue = _useState[0],
    setLocalValue = _useState[1];
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
  return __jsx$j(InputOverlay, _extends({}, props, {
    label: null,
    error: error
  }), __jsx$j("div", {
    className: srInputContainerClassName
  }, __jsx$j("label", {
    htmlFor: id,
    className: resInputlassName
  }, typeof Icon === "function" ? __jsx$j(Icon, _extends({}, props, {
    isChecked: localValue
  })) : null, __jsx$j("input", {
    type: "checkbox",
    id: id,
    className: "hidden",
    onChange: function onChange() {},
    onClick: function onClick() {
      return setLocalValue(!localValue);
    },
    checked: localValue
  })), typeof InnerComponent === "function" ? __jsx$j(InnerComponent, _extends({}, props, {
    onClick: function onClick() {
      return setLocalValue(!localValue);
    },
    isChecked: localValue
  })) : label ? __jsx$j("p", {
    onClick: function onClick() {
      return setLocalValue(!localValue);
    },
    className: srLabelClassName
  }, label) : null));
};
var baseInputContainerClassName$3 = "\n  @dy flex\n  @gp gap-2\n  @ani items-center\n";
var baseInputClassName$5 = "\n  @dy flex\n  @fxsk shrink-0\n  @ani items-center\n  @jyc justify-center\n  @cr cursor-pointer\n";
var baseLabelClassName = "\n  @cr cursor-pointer\n  @ttc text-black\n  @mn mb-0\n";

var __jsx$i = React__default["default"].createElement;
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
  return __jsx$i("div", {
    ref: inputContainerRef,
    className: srInputContainerClassName
  }, __jsx$i("input", {
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
  }), typeof Icon === "function" ? __jsx$i(Icon, {
    onClick: onClick
  }) : null, children ? __jsx$i("div", {
    className: "absolute h-full right-0 top-0 cursor-pointer"
  }, children) : null, DropdownItems ? __jsx$i("div", {
    className: "transition duration-200 ".concat(isDropdownOpen ? "opacity-100" : "pointer-events-none opacity-0")
  }, __jsx$i(DropdownContainer, {
    className: srDropdownContainerClasses,
    dropdownRef: dropdownRef
  }, __jsx$i(DropdownItems, {
    setIsDropdownOpen: setIsDropdownOpen
  }))) : null);
});
var classesByType = {
  select: "@cr cursor-pointer",
  text: "@cr cursor-text"
};
var baseContainerClassName$4 = "w-full relative";
var baseClassName = "\n  @bdc bg-transparent\n  @pn relative\n  @wh w-full\n  @brw border\n  @brs border-solid\n  @brc border-transparent\n  @tndn duration-200\n  @oe outline-none focus:outline-none hover:outline-none\n  @dy flex\n";

var __jsx$h = React__default["default"].createElement;
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
  return __jsx$h(InputOverlay, _extends({}, props, {
    PairComponent: enableTypeChanging && ChangeInputTypeButton ? ChangeInputTypeButton : null
  }), __jsx$h(Input, {
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

var __jsx$g = React__default["default"].createElement;
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
  return __jsx$g(InputOverlay, _extends({}, props, {
    label: label,
    error: error
  }), __jsx$g("div", {
    className: srContainerClassName
  }, __jsx$g("div", {
    style: circleStyle,
    className: srRangeClassName
  }, __jsx$g("div", {
    style: {
      width: "".concat(value / maxValue * 100 <= maxLimit / maxValue * 100 ? value / maxValue * 100 : maxLimit / maxValue * 100, "%")
    },
    className: srActiveRangeClassName
  }), typeof Comp === "function" ? __jsx$g(Comp, {
    style: draggedItemStyle
  }) : __jsx$g("div", {
    style: draggedItemStyle,
    className: srInputClassName
  })), tooltip && __jsx$g("div", {
    className: "absolute left-0 z-50",
    style: circleStyle
  }, __jsx$g("div", {
    style: {
      left: "".concat(valueDividedByMaxValue, "%")
    },
    className: "opacity-0 group-hover:opacity-100 absolute -top-10 bg-primary-700 text-white text-xs left-1/2 -translate-x-1/2 p-1 rounded-4px pointer-events-none"
  }, __jsx$g("div", {
    className: "absolute -bottom-1 bg-primary-700 left-1/2 -translate-x-1/2 rotate-45 w-2 h-2 rounded-1px"
  }), valueDividedByMaxValue || 0, "%")), __jsx$g("input", {
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
  }), range && __jsx$g(Datalist, {
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
  return __jsx$g("div", {
    className: "absolute flex justify-between left-0 w-full h-full top-0 z-0",
    id: id
  }, range.map(function (item, index) {
    var isAchived = value >= item;
    return __jsx$g("div", {
      style: datalistStyle,
      className: "relative top-1/2 -translate-y-1/2 flex-shrink-0 ".concat(isAchived ? "bg-primary-700" : "bg-primary-200", " ").concat(isAchived ? "border-primary-700" : "border-primary-200"),
      key: index
    });
  }));
};

var _excluded$2 = ["focus", "autoFocus"];
var __jsx$f = React__default["default"].createElement;
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
  return __jsx$f("input", _extends({
    ref: inputRef
  }, rest));
}
var SingleOTPInput = /*#__PURE__*/React.memo(SingleOTPInputComponent);

var __jsx$e = React__default["default"].createElement;
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
    activeInput = _useState[0],
    setActiveInput = _useState[1];
  var _useState2 = React.useState(Array(length).fill("")),
    otpValues = _useState2[0],
    setOTPValues = _useState2[1];

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
  return __jsx$e(InputOverlay, props, __jsx$e("div", {
    className: srContainerClassName
  }, allInputs.map(function (_, index) {
    return __jsx$e(SingleOTPInput, {
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
var __jsx$d = React__default["default"].createElement;
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
  return __jsx$d("textarea", _extends({}, props, {
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    className: className,
    disabled: disabled,
    ref: ref,
    id: id
  }));
});

var __jsx$c = React__default["default"].createElement;
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
  return __jsx$c(InputOverlay, props, __jsx$c(TextArea, {
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

var __jsx$b = React__default["default"].createElement;
function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
      var newFiles = _objectSpread$7({}, prev);
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
  return __jsx$b(InputOverlay, _extends({}, props, {
    error: error
  }), __jsx$b("div", {
    className: srInputContainerClassName
  }, files[id] && !multiple ? null : __jsx$b("label", {
    htmlFor: id,
    className: srInputClassName,
    onDrop: handleUploadImage,
    onDragOver: preventDefaultEvent,
    onDragEnter: preventDefaultEvent
  }, multiple ? __jsx$b("input", {
    type: "file"
    // name="file"
    ,
    id: id,
    accept: accept,
    onChange: handleUploadImage,
    className: "hidden",
    multiple: true
  }) : __jsx$b("input", {
    type: "file"
    // name="file"
    ,
    id: id,
    accept: accept,
    onChange: handleUploadImage,
    className: "hidden"
  }), typeof InnerComponent === "function" ? __jsx$b(InnerComponent, _extends({}, props, {
    handleUploadImage: handleUploadImage
  })) : uploadTitle ? __jsx$b("p", {
    className: uploadTitleClassName
  }, uploadTitle) : null), __jsx$b(FilesRow, {
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
    return __jsx$b(FileCard, {
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
  return __jsx$b("div", {
    className: srFileCardClassName
  }, file !== null && file !== void 0 && (_file$type = file.type) !== null && _file$type !== void 0 && _file$type.includes("image/") || file !== null && file !== void 0 && (_file$mime = file.mime) !== null && _file$mime !== void 0 && _file$mime.includes("image/") ? __jsx$b("img", {
    src: src,
    className: srFileCardImageClassName
  }) : typeof FileComponent === "function" ? __jsx$b(FileComponent, {
    file: file
  }) : null, __jsx$b("div", {
    className: srDeleteFileButtonCointainerClassName
  }, typeof DeleteFileButton === "function" ? __jsx$b(DeleteFileButton, {
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

var __jsx$a = React__default["default"].createElement;
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
  return __jsx$a(InputOverlay, _extends({
    label: label,
    error: error
  }, props), __jsx$a("div", {
    className: srInputContainerClassName
  }, items.map(function (item, index) {
    return __jsx$a(SmartButton, {
      className: activeMatcher(item, value) ? activeItemClassName : baseItemClassName,
      key: index,
      onClick: function onClick(e) {
        e.target.value = setter(item);
        e.target.id = id;
        onChange(e);
      }
    }, typeof InnerComponent === "function" ? __jsx$a(InnerComponent, _extends({
      isSelected: activeMatcher(item, value)
    }, props, {
      item: item
    })) : item.title);
  })));
};
var baseInputContainerClassName$1 = "\n  @dy flex\n  @fxw flex-wrap\n  @gp gap-2";

var __jsx$9 = React__default["default"].createElement;
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
    isDropdownOpen = _useState[0],
    setDropdownOpen = _useState[1];
  var srInputClassName = useStyleRewriter$6(baseInputClassName, inputClassName, false);
  var _useState2 = React.useState(),
    activeItem = _useState2[0],
    setActiveItem = _useState2[1];
  React.useEffect(function () {
    var active = items === null || items === void 0 ? void 0 : items.find(function (item) {
      return activeMatcher(item, value);
    });
    setActiveItem(active);
  }, [items === null || items === void 0 ? void 0 : items.length, value]);
  React.useEffect(function () {
    onDropdownOpenChange(isDropdownOpen);
  }, [isDropdownOpen]);
  return __jsx$9(InputOverlay, _extends({}, props, {
    label: label,
    error: error
  }), __jsx$9(SmartButton, {
    onClick: function onClick() {
      return setDropdownOpen(!isDropdownOpen);
    },
    dropdownItems: items !== null && items !== void 0 && items.length ? function () {
      return items.map(function (item, index) {
        return __jsx$9(SmartButton, {
          key: index,
          onClick: function onClick(e) {
            e.target.value = setter(item, index);
            e.target.id = id;
            onChange(e);
          },
          className: activeMatcher(item, value) ? activeItemClassName : baseItemClassName
        }, typeof InnerComponent === "function" ? __jsx$9(InnerComponent, _extends({}, props, {
          isSelected: activeMatcher(item, value),
          item: item
        })) : item === null || item === void 0 ? void 0 : item.title);
      });
    } : null,
    dropdownClassName: dropdownClassName,
    dropdownContainerClassName: inputContainerClassName,
    className: srInputClassName
  }, typeof InnerComponent === "function" && activeItem ? __jsx$9(InnerComponent, _extends({}, props, {
    item: activeItem
  })) : activeItem !== null && activeItem !== void 0 && activeItem.title ? activeItem === null || activeItem === void 0 ? void 0 : activeItem.title : placeholder, typeof Icon === "function" ? __jsx$9(Icon, _extends({}, props, {
    isDropdownOpen: isDropdownOpen
  })) : null));
};
var baseInputClassName = "\n  @cr cursor-pointer\n  @fx flex\n  @wh w-full\n";

var __jsx$8 = React__default["default"].createElement;
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
  return __jsx$8("div", {
    className: srContainerClassName
  }, __jsx$8("div", {
    className: "px-2 flex flex-col items-center text-black"
  }, __jsx$8(Calendar__default["default"], _extends({}, calendarSettings, {
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
  })), __jsx$8("div", {
    className: "flex flex-row items-center justify-end w-full mb-4 md:mb-7"
  }, __jsx$8(SmartButton, {
    className: "@ftf font-roboto @ftw font-medium @bdc bg-primary-900 hover:bg-primary-700 @ttc text-white @brr rounded-[4px] @mn mr-3 @pg px-5 py-1 @cr cursor-pointer @tndn duration-200",
    onClick: function onClick() {
      _onClick(value);
      setOpen(false);
    }
  }, __jsx$8("h5", {
    className: "@ttc text-current"
  }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C")), __jsx$8(SmartButton, {
    className: "@ftf font-roboto @ftw font-medium @bdc bg-primary-200 hover:bg-primary-700 @ttc text-primary hover:text-white @brr rounded-[4px] @pg px-5 py-1 @cr cursor-pointer @tndn duration-200",
    onClick: function onClick() {
      setValue();
      setOpen(false);
    }
  }, __jsx$8("h5", {
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

var __jsx$7 = React__default["default"].createElement;
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
  React.useEffect(function () {
    console.log("\uD83D\uDE80 ~ useEffect ~ error", error);
  }, [error]);
  var buttonRef = React.useRef();
  var _useState = React.useState(null),
    localValue = _useState[0],
    setLocalValue = _useState[1];
  var _useState2 = React.useState(),
    inputValues = _useState2[0],
    setInputValues = _useState2[1];
  var _useState3 = React.useState(error),
    localError = _useState3[0],
    setLocalError = _useState3[1];
  var _useState4 = React.useState(false),
    isDropdownOpen = _useState4[0],
    setIsDropdownOpen = _useState4[1];
  var _useState5 = React.useState("Custom"),
    activeTimeframe = _useState5[0],
    setActiveTimeframe = _useState5[1];
  useOutsideClick(buttonRef, setIsDropdownOpen);
  React.useEffect(function () {
    if (value && value.length !== 0 && (!localValue || typeof localValue === "string")) {
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
    if (localValue && typeof localValue === "object") {
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
  return __jsx$7(InputOverlay, _extends({}, props, {
    error: localError || error
  }), __jsx$7("div", {
    className: srInputContainerClassName,
    ref: buttonRef
  }, __jsx$7(DateInput, {
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
  }), __jsx$7(transitionComponent.Transition, _extends({
    show: isDropdownOpen
  }, contentTransitionProps), __jsx$7(PopupCalendar, {
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
  var _useState6 = React.useState(value[0]),
    date = _useState6[0],
    setDate = _useState6[1];
  var _useState7 = React.useState(value[1]),
    month = _useState7[0],
    setMonth = _useState7[1];
  var _useState8 = React.useState(value[2]),
    year = _useState8[0],
    setYear = _useState8[1];
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
  return __jsx$7("div", {
    onClick: onClick,
    className: srInputContainerClassName
  }, __jsx$7(Input, {
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
  }), typeof DividerComponent === "function" ? __jsx$7(DividerComponent, null) : null, __jsx$7(Input, {
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
  }), typeof DividerComponent === "function" ? __jsx$7(DividerComponent, null) : null, __jsx$7(Input, {
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

var __jsx$6 = React__default["default"].createElement;
var FormInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var type = props.type,
    Comp = props.Comp;
  var InputType = Comp || inputComponents[type] || TextInput;
  return __jsx$6(InputType, _extends({}, props, {
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
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
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

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
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
	    var methodName = context.method,
	      method = delegate.iterator[methodName];
	    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
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

var protocols = ['http', 'https', 'mailto', 'tel'];

/**
 * @param {string} uri
 * @returns {string}
 */
function uriTransformer(uri) {
  var url = (uri || '').trim();
  var first = url.charAt(0);
  if (first === '#' || first === '/') {
    return url;
  }
  var colon = url.indexOf(':');
  if (colon === -1) {
    return url;
  }
  var index = -1;
  while (++index < protocols.length) {
    var protocol = protocols[index];
    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
      return url;
    }
  }
  index = url.indexOf('?');
  if (index !== -1 && colon > index) {
    return url;
  }
  index = url.indexOf('#');
  if (index !== -1 && colon > index) {
    return url;
  }

  // eslint-disable-next-line no-script-url
  return 'javascript:void(0)';
}

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

var isBuffer = function isBuffer(obj) {
  return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct$2()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

/**
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Position} Position
 * @typedef {object & {type: string, position?: Position|undefined}} NodeLike
 */

/**
 * Stringify one point, a position (start and end points), or a node’s
 * positional information.
 *
 * @param {Node|NodeLike|Position|Point|null} [value]
 * @returns {string}
 */
function stringifyPosition(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return '';
  }

  // Node.
  if ('position' in value || 'type' in value) {
    return position(value.position);
  }

  // Position.
  if ('start' in value || 'end' in value) {
    return position(value);
  }

  // Point.
  if ('line' in value || 'column' in value) {
    return point$1(value);
  }

  // ?
  return '';
}

/**
 * @param {Point|undefined} point
 * @returns {string}
 */
function point$1(point) {
  return index$1(point && point.line) + ':' + index$1(point && point.column);
}

/**
 * @param {Position|undefined} pos
 * @returns {string}
 */
function position(pos) {
  return point$1(pos && pos.start) + '-' + point$1(pos && pos.end);
}

/**
 * @param {number|undefined} value
 * @returns {number}
 */
function index$1(value) {
  return value && typeof value === 'number' ? value : 1;
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var VFileMessage = /*#__PURE__*/function (_Error) {
  _inherits(VFileMessage, _Error);
  var _super = _createSuper$1(VFileMessage);
  /**
   * Create a message for `reason` at `place` from `origin`.
   *
   * When an error is passed in as `reason`, the `stack` is copied.
   *
   * @param {string|Error|VFileMessage} reason
   *   Reason for message.
   *   Uses the stack and message of the error if given.
   * @param {Node|NodeLike|Position|Point} [place]
   *   Place at which the message occurred in a file.
   * @param {string} [origin]
   *   Place in code the message originates from (example `'my-package:my-rule-name'`)
   */
  function VFileMessage(reason, place, origin) {
    var _this;
    _classCallCheck(this, VFileMessage);
    /** @type {[string|null, string|null]} */
    var parts = [null, null];
    /** @type {Position} */
    var position = {
      // @ts-expect-error: we always follows the structure of `position`.
      start: {
        line: null,
        column: null
      },
      // @ts-expect-error: "
      end: {
        line: null,
        column: null
      }
    };
    _this = _super.call(this);
    if (typeof place === 'string') {
      origin = place;
      place = undefined;
    }
    if (typeof origin === 'string') {
      var index = origin.indexOf(':');
      if (index === -1) {
        parts[1] = origin;
      } else {
        parts[0] = origin.slice(0, index);
        parts[1] = origin.slice(index + 1);
      }
    }
    if (place) {
      // Node.
      if ('type' in place || 'position' in place) {
        if (place.position) {
          // @ts-expect-error: looks like a position.
          position = place.position;
        }
      }
      // Position.
      else if ('start' in place || 'end' in place) {
        // @ts-expect-error: looks like a position.
        position = place;
      }
      // Point.
      else if ('line' in place || 'column' in place) {
        position.start = place;
      }
    }

    // Fields from `Error`
    _this.name = stringifyPosition(place) || '1:1';
    /** @type {string} */
    _this.message = typeof reason === 'object' ? reason.message : reason;
    /** @type {string} */
    _this.stack = '';
    if (typeof reason === 'object' && reason.stack) {
      _this.stack = reason.stack;
    }

    /**
     * Reason for message.
     *
     * @type {string}
     */
    _this.reason = _this.message;

    /* eslint-disable no-unused-expressions */
    /**
     * Whether this is a fatal problem that marks an associated file as no
     * longer processable.
     * If `true`, marks associated file as no longer processable.
     * If `false`, necessitates a (potential) change.
     * The value can also be `null` or `undefined`, for things that might not
     * need changing.
     *
     * @type {boolean?}
     */
    _this.fatal;

    /**
     * Starting line of error.
     *
     * @type {number?}
     */
    _this.line = position.start.line;

    /**
     * Starting column of error.
     *
     * @type {number?}
     */
    _this.column = position.start.column;

    /**
     * Full range information, when available.
     * Has `start` and `end` fields, both set to an object with `line` and
     * `column`, set to `number?`.
     *
     * @type {Position?}
     */
    _this.position = position;

    /**
     * Namespace of warning (example: `'my-package'`).
     *
     * @type {string?}
     */
    _this.source = parts[0];

    /**
     * Category of message (example: `'my-rule-name'`).
     *
     * @type {string?}
     */
    _this.ruleId = parts[1];

    /**
     * Path of a file (used throughout the VFile ecosystem).
     *
     * @type {string?}
     */
    _this.file;

    // The following fields are “well known”.
    // Not standard.
    // Feel free to add other non-standard fields to your messages.

    /**
     * Specify the source value that’s being reported, which is deemed
     * incorrect.
     *
     * @type {string?}
     */
    _this.actual;

    /**
     * Suggest values that should be used instead of `actual`, one or more
     * values that are deemed as acceptable.
     *
     * @type {Array<string>?}
     */
    _this.expected;

    /**
     * Link to documentation for the message.
     *
     * @type {string?}
     */
    _this.url;

    /**
     * Long form description of the message (supported by `vfile-reporter`).
     *
     * @type {string?}
     */
    _this.note;
    /* eslint-enable no-unused-expressions */
    return _this;
  }
  return _createClass(VFileMessage);
}( /*#__PURE__*/_wrapNativeSuper(Error));
VFileMessage.prototype.file = '';
VFileMessage.prototype.name = '';
VFileMessage.prototype.reason = '';
VFileMessage.prototype.message = '';
VFileMessage.prototype.stack = '';
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;

/**
 * @typedef URL
 * @property {string} hash
 * @property {string} host
 * @property {string} hostname
 * @property {string} href
 * @property {string} origin
 * @property {string} password
 * @property {string} pathname
 * @property {string} port
 * @property {string} protocol
 * @property {string} search
 * @property {any} searchParams
 * @property {string} username
 * @property {() => string} toString
 * @property {() => string} toJSON
 */

/**
 * @param {unknown} fileURLOrPath
 * @returns {fileURLOrPath is URL}
 */
// From: <https://github.com/nodejs/node/blob/fcf8ba4/lib/internal/url.js#L1501>
function isUrl(fileURLOrPath) {
  return fileURLOrPath !== null && typeof fileURLOrPath === 'object' &&
  // @ts-expect-error: indexable.
  fileURLOrPath.href &&
  // @ts-expect-error: indexable.
  fileURLOrPath.origin;
}

// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
var VFile = /*#__PURE__*/function () {
  /**
   * Create a new virtual file.
   *
   * If `options` is `string` or `Buffer`, it’s treated as `{value: options}`.
   * If `options` is a `URL`, it’s treated as `{path: options}`.
   * If `options` is a `VFile`, shallow copies its data over to the new file.
   * All fields in `options` are set on the newly created `VFile`.
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * It’s not possible to set either `dirname` or `extname` without setting
   * either `history`, `path`, `basename`, or `stem` as well.
   *
   * @param {Compatible} [value]
   */
  function VFile(value) {
    _classCallCheck(this, VFile);
    /** @type {Options} */
    var options;
    if (!value) {
      options = {};
    } else if (typeof value === 'string' || isBuffer(value)) {
      // @ts-expect-error Looks like a buffer.
      options = {
        value: value
      };
    } else if (isUrl(value)) {
      options = {
        path: value
      };
    } else {
      // @ts-expect-error Looks like file or options.
      options = value;
    }

    /**
     * Place to store custom information (default: `{}`).
     * It’s OK to store custom data directly on the file but moving it to
     * `data` is recommended.
     * @type {Data}
     */
    this.data = {};

    /**
     * List of messages associated with the file.
     * @type {Array<VFileMessage>}
     */
    this.messages = [];

    /**
     * List of filepaths the file moved between.
     * The first is the original path and the last is the current path.
     * @type {Array<string>}
     */
    this.history = [];

    /**
     * Base of `path` (default: `process.cwd()` or `'/'` in browsers).
     * @type {string}
     */
    this.cwd = proc__default["default"].cwd();

    /* eslint-disable no-unused-expressions */
    /**
     * Raw value.
     * @type {Value}
     */
    this.value;

    // The below are non-standard, they are “well-known”.
    // As in, used in several tools.

    /**
     * Whether a file was saved to disk.
     * This is used by vfile reporters.
     * @type {boolean}
     */
    this.stored;

    /**
     * Sometimes files have a non-string, compiled, representation.
     * This can be stored in the `result` field.
     * One example is when turning markdown into React nodes.
     * This is used by unified to store non-string results.
     * @type {unknown}
     */
    this.result;

    /**
     * Sometimes files have a source map associated with them.
     * This can be stored in the `map` field.
     * This should be a `Map` type, which is equivalent to the `RawSourceMap`
     * type from the `source-map` module.
     * @type {Map|undefined}
     */
    this.map;
    /* eslint-enable no-unused-expressions */

    // Set path related properties in the correct order.
    var index = -1;
    while (++index < order.length) {
      var _prop = order[index];

      // Note: we specifically use `in` instead of `hasOwnProperty` to accept
      // `vfile`s too.
      if (_prop in options && options[_prop] !== undefined) {
        // @ts-expect-error: TS is confused by the different types for `history`.
        this[_prop] = _prop === 'history' ? _toConsumableArray(options[_prop]) : options[_prop];
      }
    }

    /** @type {string} */
    var prop;

    // Set non-path related properties.
    for (prop in options) {
      // @ts-expect-error: fine to set other things.
      if (!order.includes(prop)) this[prop] = options[prop];
    }
  }

  /**
   * Get the full path (example: `'~/index.min.js'`).
   * @returns {string}
   */
  _createClass(VFile, [{
    key: "path",
    get: function get() {
      return this.history[this.history.length - 1];
    }

    /**
     * Set the full path (example: `'~/index.min.js'`).
     * Cannot be nullified.
     * You can set a file URL (a `URL` object with a `file:` protocol) which will
     * be turned into a path with `url.fileURLToPath`.
     * @param {string|URL} path
     */,
    set: function set(path) {
      if (isUrl(path)) {
        path = url$1.fileURLToPath(path);
      }
      assertNonEmpty(path, 'path');
      if (this.path !== path) {
        this.history.push(path);
      }
    }

    /**
     * Get the parent path (example: `'~'`).
     */
  }, {
    key: "dirname",
    get: function get() {
      return typeof this.path === 'string' ? path__default["default"].dirname(this.path) : undefined;
    }

    /**
     * Set the parent path (example: `'~'`).
     * Cannot be set if there’s no `path` yet.
     */,
    set: function set(dirname) {
      assertPath(this.basename, 'dirname');
      this.path = path__default["default"].join(dirname || '', this.basename);
    }

    /**
     * Get the basename (including extname) (example: `'index.min.js'`).
     */
  }, {
    key: "basename",
    get: function get() {
      return typeof this.path === 'string' ? path__default["default"].basename(this.path) : undefined;
    }

    /**
     * Set basename (including extname) (`'index.min.js'`).
     * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
     * on windows).
     * Cannot be nullified (use `file.path = file.dirname` instead).
     */,
    set: function set(basename) {
      assertNonEmpty(basename, 'basename');
      assertPart(basename, 'basename');
      this.path = path__default["default"].join(this.dirname || '', basename);
    }

    /**
     * Get the extname (including dot) (example: `'.js'`).
     */
  }, {
    key: "extname",
    get: function get() {
      return typeof this.path === 'string' ? path__default["default"].extname(this.path) : undefined;
    }

    /**
     * Set the extname (including dot) (example: `'.js'`).
     * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
     * on windows).
     * Cannot be set if there’s no `path` yet.
     */,
    set: function set(extname) {
      assertPart(extname, 'extname');
      assertPath(this.dirname, 'extname');
      if (extname) {
        if (extname.charCodeAt(0) !== 46 /* `.` */) {
          throw new Error('`extname` must start with `.`');
        }
        if (extname.includes('.', 1)) {
          throw new Error('`extname` cannot contain multiple dots');
        }
      }
      this.path = path__default["default"].join(this.dirname, this.stem + (extname || ''));
    }

    /**
     * Get the stem (basename w/o extname) (example: `'index.min'`).
     */
  }, {
    key: "stem",
    get: function get() {
      return typeof this.path === 'string' ? path__default["default"].basename(this.path, this.extname) : undefined;
    }

    /**
     * Set the stem (basename w/o extname) (example: `'index.min'`).
     * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
     * on windows).
     * Cannot be nullified (use `file.path = file.dirname` instead).
     */,
    set: function set(stem) {
      assertNonEmpty(stem, 'stem');
      assertPart(stem, 'stem');
      this.path = path__default["default"].join(this.dirname || '', stem + (this.extname || ''));
    }

    /**
     * Serialize the file.
     *
     * @param {BufferEncoding} [encoding='utf8']
     *   When `value` is a `Buffer`, `encoding` is a character encoding to
     *   understand it as (default: `'utf8'`).
     * @returns {string}
     *   Serialized file.
     */
  }, {
    key: "toString",
    value: function toString(encoding) {
      return (this.value || '').toString(encoding);
    }

    /**
     * Constructs a new `VFileMessage`, where `fatal` is set to `false`, and
     * associates it with the file by adding it to `vfile.messages` and setting
     * `message.file` to the current filepath.
     *
     * @param {string|Error|VFileMessage} reason
     *   Human readable reason for the message, uses the stack and message of the error if given.
     * @param {Node|NodeLike|Position|Point} [place]
     *   Place where the message occurred in the file.
     * @param {string} [origin]
     *   Computer readable reason for the message
     * @returns {VFileMessage}
     *   Message.
     */
  }, {
    key: "message",
    value: function message(reason, place, origin) {
      var message = new VFileMessage(reason, place, origin);
      if (this.path) {
        message.name = this.path + ':' + message.name;
        message.file = this.path;
      }
      message.fatal = false;
      this.messages.push(message);
      return message;
    }

    /**
     * Like `VFile#message()`, but associates an informational message where
     * `fatal` is set to `null`.
     *
     * @param {string|Error|VFileMessage} reason
     *   Human readable reason for the message, uses the stack and message of the error if given.
     * @param {Node|NodeLike|Position|Point} [place]
     *   Place where the message occurred in the file.
     * @param {string} [origin]
     *   Computer readable reason for the message
     * @returns {VFileMessage}
     *   Message.
     */
  }, {
    key: "info",
    value: function info(reason, place, origin) {
      var message = this.message(reason, place, origin);
      message.fatal = null;
      return message;
    }

    /**
     * Like `VFile#message()`, but associates a fatal message where `fatal` is
     * set to `true`, and then immediately throws it.
     *
     * > 👉 **Note**: a fatal error means that a file is no longer processable.
     *
     * @param {string|Error|VFileMessage} reason
     *   Human readable reason for the message, uses the stack and message of the error if given.
     * @param {Node|NodeLike|Position|Point} [place]
     *   Place where the message occurred in the file.
     * @param {string} [origin]
     *   Computer readable reason for the message
     * @returns {never}
     *   Message.
     */
  }, {
    key: "fail",
    value: function fail(reason, place, origin) {
      var message = this.message(reason, place, origin);
      message.fatal = true;
      throw message;
    }
  }]);
  return VFile;
}();

/**
 * Assert that `part` is not a path (as in, does not contain `path.sep`).
 *
 * @param {string|undefined} part
 * @param {string} name
 * @returns {void}
 */
function assertPart(part, name) {
  if (part && part.includes(path__default["default"].sep)) {
    throw new Error('`' + name + '` cannot be a path: did not expect `' + path__default["default"].sep + '`');
  }
}

/**
 * Assert that `part` is not empty.
 *
 * @param {string|undefined} part
 * @param {string} name
 * @returns {asserts part is string}
 */
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}

/**
 * Assert `path` exists.
 *
 * @param {string|undefined} path
 * @param {string} name
 * @returns {asserts path is string}
 */
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableRest();
}

/**
 * Throw a given error.
 *
 * @param {Error|null|undefined} [error]
 *   Maybe error.
 * @returns {asserts error is null|undefined}
 */
function bail(error) {
  if (error) {
    throw error;
  }
}

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray = function isArray(arr) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(arr);
  }
  return toStr.call(arr) === '[object Array]';
};
var isPlainObject$1 = function isPlainObject(obj) {
  if (!obj || toStr.call(obj) !== '[object Object]') {
    return false;
  }
  var hasOwnConstructor = hasOwn.call(obj, 'constructor');
  var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
  // Not own constructor property must be Object
  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  }

  // Own properties are enumerated firstly, so to speed up,
  // if last one is own, then all properties are own.
  var key;
  for (key in obj) {/**/}
  return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
  if (defineProperty && options.name === '__proto__') {
    defineProperty(target, options.name, {
      enumerable: true,
      configurable: true,
      value: options.newValue,
      writable: true
    });
  } else {
    target[options.name] = options.newValue;
  }
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
  if (name === '__proto__') {
    if (!hasOwn.call(obj, name)) {
      return void 0;
    } else if (gOPD) {
      // In early versions of node, obj['__proto__'] is buggy when obj has
      // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
      return gOPD(obj, name).value;
    }
  }
  return obj[name];
};
var extend = function extend() {
  var options, name, src, copy, copyIsArray, clone;
  var target = arguments[0];
  var i = 1;
  var length = arguments.length;
  var deep = false;

  // Handle a deep copy situation
  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {};
    // skip the boolean and the target
    i = 2;
  }
  if (target == null || typeof target !== 'object' && typeof target !== 'function') {
    target = {};
  }
  for (; i < length; ++i) {
    options = arguments[i];
    // Only deal with non-null/undefined values
    if (options != null) {
      // Extend the base object
      for (name in options) {
        src = getProperty(target, name);
        copy = getProperty(options, name);

        // Prevent never-ending loop
        if (target !== copy) {
          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (isPlainObject$1(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isPlainObject$1(src) ? src : {};
            }

            // Never move original objects, clone them
            setProperty(target, {
              name: name,
              newValue: extend(deep, clone, copy)
            });

            // Don't bring in undefined values
          } else if (typeof copy !== 'undefined') {
            setProperty(target, {
              name: name,
              newValue: copy
            });
          }
        }
      }
    }
  }

  // Return the modified object
  return target;
};

function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  var prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}

/**
 * @typedef {(error?: Error|null|undefined, ...output: Array<any>) => void} Callback
 * @typedef {(...input: Array<any>) => any} Middleware
 *
 * @typedef {(...input: Array<any>) => void} Run
 *   Call all middleware.
 * @typedef {(fn: Middleware) => Pipeline} Use
 *   Add `fn` (middleware) to the list.
 * @typedef {{run: Run, use: Use}} Pipeline
 *   Middleware.
 */

/**
 * Create new middleware.
 *
 * @returns {Pipeline}
 */
function trough() {
  /** @type {Array<Middleware>} */
  var fns = [];
  /** @type {Pipeline} */
  var pipeline = {
    run: run,
    use: use
  };
  return pipeline;

  /** @type {Run} */
  function run() {
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }
    var middlewareIndex = -1;
    /** @type {Callback} */
    var callback = values.pop();
    if (typeof callback !== 'function') {
      throw new TypeError('Expected function as last argument, not ' + callback);
    }
    next.apply(void 0, [null].concat(_toConsumableArray(values)));

    /**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error|null|undefined} error
     * @param {Array<any>} output
     */
    function next(error) {
      var fn = fns[++middlewareIndex];
      var index = -1;
      if (error) {
        callback(error);
        return;
      }

      // Copy non-nullish input into values.
      for (var _len2 = arguments.length, output = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        output[_key2 - 1] = arguments[_key2];
      }
      while (++index < values.length) {
        if (output[index] === null || output[index] === undefined) {
          output[index] = values[index];
        }
      }

      // Save the newly created `output` for the next call.
      values = output;

      // Next or done.
      if (fn) {
        wrap$1(fn, next).apply(void 0, output);
      } else {
        callback.apply(void 0, [null].concat(output));
      }
    }
  }

  /** @type {Use} */
  function use(middelware) {
    if (typeof middelware !== 'function') {
      throw new TypeError('Expected `middelware` to be a function, not ' + middelware);
    }
    fns.push(middelware);
    return pipeline;
  }
}

/**
 * Wrap `middleware`.
 * Can be sync or async; return a promise, receive a callback, or return new
 * values and errors.
 *
 * @param {Middleware} middleware
 * @param {Callback} callback
 */
function wrap$1(middleware, callback) {
  /** @type {boolean} */
  var called;
  return wrapped;

  /**
   * Call `middleware`.
   * @this {any}
   * @param {Array<any>} parameters
   * @returns {void}
   */
  function wrapped() {
    for (var _len3 = arguments.length, parameters = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      parameters[_key3] = arguments[_key3];
    }
    var fnExpectsCallback = middleware.length > parameters.length;
    /** @type {any} */
    var result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      var exception = /** @type {Error} */error;

      // Well, this is quite the pickle.
      // `middleware` received a callback and called it synchronously, but that
      // threw an error.
      // The only thing left to do is to throw the thing instead.
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result instanceof Promise) {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }

  /**
   * Call `callback`, only once.
   * @type {Callback}
   */
  function done(error) {
    if (!called) {
      called = true;
      for (var _len4 = arguments.length, output = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        output[_key4 - 1] = arguments[_key4];
      }
      callback.apply(void 0, [error].concat(output));
    }
  }

  /**
   * Call `done` with one value.
   *
   * @param {any} [value]
   */
  function then(value) {
    done(null, value);
  }
}

// Expose a frozen processor.
var unified = base().freeze();
var own$8 = {}.hasOwnProperty;

// Function to create the first processor.
/**
 * @returns {Processor}
 */
function base() {
  var transformers = trough();
  /** @type {Processor['attachers']} */
  var attachers = [];
  /** @type {Record<string, unknown>} */
  var namespace = {};
  /** @type {boolean|undefined} */
  var frozen;
  var freezeIndex = -1;

  // Data management.
  // @ts-expect-error: overloads are handled.
  processor.data = data;
  processor.Parser = undefined;
  processor.Compiler = undefined;

  // Lock.
  processor.freeze = freeze;

  // Plugins.
  processor.attachers = attachers;
  // @ts-expect-error: overloads are handled.
  processor.use = use;

  // API.
  processor.parse = parse;
  processor.stringify = stringify;
  // @ts-expect-error: overloads are handled.
  processor.run = run;
  processor.runSync = runSync;
  // @ts-expect-error: overloads are handled.
  processor.process = process;
  processor.processSync = processSync;

  // Expose.
  return processor;

  // Create a new processor based on the processor in the current scope.
  /** @type {Processor} */
  function processor() {
    var destination = base();
    var index = -1;
    while (++index < attachers.length) {
      destination.use.apply(destination, _toConsumableArray(attachers[index]));
    }
    destination.data(extend(true, {}, namespace));
    return destination;
  }

  /**
   * @param {string|Record<string, unknown>} [key]
   * @param {unknown} [value]
   * @returns {unknown}
   */
  function data(key, value) {
    if (typeof key === 'string') {
      // Set `key`.
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen);
        namespace[key] = value;
        return processor;
      }

      // Get `key`.
      return own$8.call(namespace, key) && namespace[key] || null;
    }

    // Set space.
    if (key) {
      assertUnfrozen('data', frozen);
      namespace = key;
      return processor;
    }

    // Get space.
    return namespace;
  }

  /** @type {Processor['freeze']} */
  function freeze() {
    if (frozen) {
      return processor;
    }
    while (++freezeIndex < attachers.length) {
      var _attachers$freezeInde = _toArray(attachers[freezeIndex]),
        attacher = _attachers$freezeInde[0],
        options = _attachers$freezeInde.slice(1);
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[0] = undefined;
      }

      /** @type {Transformer|void} */
      var transformer = attacher.call.apply(attacher, [processor].concat(_toConsumableArray(options)));
      if (typeof transformer === 'function') {
        transformers.use(transformer);
      }
    }
    frozen = true;
    freezeIndex = Number.POSITIVE_INFINITY;
    return processor;
  }

  /**
   * @param {Pluggable|null|undefined} [value]
   * @param {...unknown} options
   * @returns {Processor}
   */
  function use(value) {
    for (var _len = arguments.length, options = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      options[_key - 1] = arguments[_key];
    }
    /** @type {Record<string, unknown>|undefined} */
    var settings;
    assertUnfrozen('use', frozen);
    if (value === null || value === undefined) ; else if (typeof value === 'function') {
      addPlugin.apply(void 0, [value].concat(options));
    } else if (typeof value === 'object') {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError('Expected usable value, not `' + value + '`');
    }
    if (settings) {
      namespace.settings = Object.assign(namespace.settings || {}, settings);
    }
    return processor;

    /**
     * @param {import('..').Pluggable<unknown[]>} value
     * @returns {void}
     */
    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value);
      } else if (typeof value === 'object') {
        if (Array.isArray(value)) {
          var _value = _toArray(value),
            plugin = _value[0],
            _options = _value.slice(1);
          addPlugin.apply(void 0, [plugin].concat(_toConsumableArray(_options)));
        } else {
          addPreset(value);
        }
      } else {
        throw new TypeError('Expected usable value, not `' + value + '`');
      }
    }

    /**
     * @param {Preset} result
     * @returns {void}
     */
    function addPreset(result) {
      addList(result.plugins);
      if (result.settings) {
        settings = Object.assign(settings || {}, result.settings);
      }
    }

    /**
     * @param {PluggableList|null|undefined} [plugins]
     * @returns {void}
     */
    function addList(plugins) {
      var index = -1;
      if (plugins === null || plugins === undefined) ; else if (Array.isArray(plugins)) {
        while (++index < plugins.length) {
          var thing = plugins[index];
          add(thing);
        }
      } else {
        throw new TypeError('Expected a list of plugins, not `' + plugins + '`');
      }
    }

    /**
     * @param {Plugin} plugin
     * @param {...unknown} [value]
     * @returns {void}
     */
    function addPlugin(plugin, value) {
      var index = -1;
      /** @type {Processor['attachers'][number]|undefined} */
      var entry;
      while (++index < attachers.length) {
        if (attachers[index][0] === plugin) {
          entry = attachers[index];
          break;
        }
      }
      if (entry) {
        if (isPlainObject(entry[1]) && isPlainObject(value)) {
          value = extend(true, entry[1], value);
        }
        entry[1] = value;
      } else {
        // @ts-expect-error: fine.
        attachers.push(Array.prototype.slice.call(arguments));
      }
    }
  }

  /** @type {Processor['parse']} */
  function parse(doc) {
    processor.freeze();
    var file = vfile(doc);
    var Parser = processor.Parser;
    assertParser('parse', Parser);
    if (newable(Parser, 'parse')) {
      // @ts-expect-error: `newable` checks this.
      return new Parser(String(file), file).parse();
    }

    // @ts-expect-error: `newable` checks this.
    return Parser(String(file), file); // eslint-disable-line new-cap
  }

  /** @type {Processor['stringify']} */
  function stringify(node, doc) {
    processor.freeze();
    var file = vfile(doc);
    var Compiler = processor.Compiler;
    assertCompiler('stringify', Compiler);
    assertNode(node);
    if (newable(Compiler, 'compile')) {
      // @ts-expect-error: `newable` checks this.
      return new Compiler(node, file).compile();
    }

    // @ts-expect-error: `newable` checks this.
    return Compiler(node, file); // eslint-disable-line new-cap
  }

  /**
   * @param {Node} node
   * @param {VFileCompatible|RunCallback} [doc]
   * @param {RunCallback} [callback]
   * @returns {Promise<Node>|void}
   */
  function run(node, doc, callback) {
    assertNode(node);
    processor.freeze();
    if (!callback && typeof doc === 'function') {
      callback = doc;
      doc = undefined;
    }
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);

    /**
     * @param {null|((node: Node) => void)} resolve
     * @param {(error: Error) => void} reject
     * @returns {void}
     */
    function executor(resolve, reject) {
      // @ts-expect-error: `doc` can’t be a callback anymore, we checked.
      transformers.run(node, vfile(doc), done);

      /**
       * @param {Error|null} error
       * @param {Node} tree
       * @param {VFile} file
       * @returns {void}
       */
      function done(error, tree, file) {
        tree = tree || node;
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(tree);
        } else {
          // @ts-expect-error: `callback` is defined if `resolve` is not.
          callback(null, tree, file);
        }
      }
    }
  }

  /** @type {Processor['runSync']} */
  function runSync(node, file) {
    /** @type {Node|undefined} */
    var result;
    /** @type {boolean|undefined} */
    var complete;
    processor.run(node, file, done);
    assertDone('runSync', 'run', complete);

    // @ts-expect-error: we either bailed on an error or have a tree.
    return result;

    /**
     * @param {Error|null} [error]
     * @param {Node} [tree]
     * @returns {void}
     */
    function done(error, tree) {
      bail(error);
      result = tree;
      complete = true;
    }
  }

  /**
   * @param {VFileCompatible} doc
   * @param {ProcessCallback} [callback]
   * @returns {Promise<VFile>|undefined}
   */
  function process(doc, callback) {
    processor.freeze();
    assertParser('process', processor.Parser);
    assertCompiler('process', processor.Compiler);
    if (!callback) {
      return new Promise(executor);
    }
    executor(null, callback);

    /**
     * @param {null|((file: VFile) => void)} resolve
     * @param {(error?: Error|null|undefined) => void} reject
     * @returns {void}
     */
    function executor(resolve, reject) {
      var file = vfile(doc);
      processor.run(processor.parse(file), file, function (error, tree, file) {
        if (error || !tree || !file) {
          done(error);
        } else {
          /** @type {unknown} */
          var result = processor.stringify(tree, file);
          if (result === undefined || result === null) ; else if (looksLikeAVFileValue(result)) {
            file.value = result;
          } else {
            file.result = result;
          }
          done(error, file);
        }
      });

      /**
       * @param {Error|null|undefined} [error]
       * @param {VFile|undefined} [file]
       * @returns {void}
       */
      function done(error, file) {
        if (error || !file) {
          reject(error);
        } else if (resolve) {
          resolve(file);
        } else {
          // @ts-expect-error: `callback` is defined if `resolve` is not.
          callback(null, file);
        }
      }
    }
  }

  /** @type {Processor['processSync']} */
  function processSync(doc) {
    /** @type {boolean|undefined} */
    var complete;
    processor.freeze();
    assertParser('processSync', processor.Parser);
    assertCompiler('processSync', processor.Compiler);
    var file = vfile(doc);
    processor.process(file, done);
    assertDone('processSync', 'process', complete);
    return file;

    /**
     * @param {Error|null|undefined} [error]
     * @returns {void}
     */
    function done(error) {
      complete = true;
      bail(error);
    }
  }
}

/**
 * Check if `value` is a constructor.
 *
 * @param {unknown} value
 * @param {string} name
 * @returns {boolean}
 */
function newable(value, name) {
  return typeof value === 'function' &&
  // Prototypes do exist.
  // type-coverage:ignore-next-line
  value.prototype && (
  // A function with keys in its prototype is probably a constructor.
  // Classes’ prototype methods are not enumerable, so we check if some value
  // exists in the prototype.
  // type-coverage:ignore-next-line
  keys(value.prototype) || name in value.prototype);
}

/**
 * Check if `value` is an object with keys.
 *
 * @param {Record<string, unknown>} value
 * @returns {boolean}
 */
function keys(value) {
  /** @type {string} */
  var key;
  for (key in value) {
    if (own$8.call(value, key)) {
      return true;
    }
  }
  return false;
}

/**
 * Assert a parser is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Parser}
 */
function assertParser(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `Parser`');
  }
}

/**
 * Assert a compiler is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Compiler}
 */
function assertCompiler(name, value) {
  if (typeof value !== 'function') {
    throw new TypeError('Cannot `' + name + '` without `Compiler`');
  }
}

/**
 * Assert the processor is not frozen.
 *
 * @param {string} name
 * @param {unknown} frozen
 * @returns {asserts frozen is false}
 */
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error('Cannot call `' + name + '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.');
  }
}

/**
 * Assert `node` is a unist node.
 *
 * @param {unknown} node
 * @returns {asserts node is Node}
 */
function assertNode(node) {
  // `isPlainObj` unfortunately uses `any` instead of `unknown`.
  // type-coverage:ignore-next-line
  if (!isPlainObject(node) || typeof node.type !== 'string') {
    throw new TypeError('Expected node, got `' + node + '`');
    // Fine.
  }
}

/**
 * Assert that `complete` is `true`.
 *
 * @param {string} name
 * @param {string} asyncName
 * @param {unknown} complete
 * @returns {asserts complete is true}
 */
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
  }
}

/**
 * @param {VFileCompatible} [value]
 * @returns {VFile}
 */
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}

/**
 * @param {VFileCompatible} [value]
 * @returns {value is VFile}
 */
function looksLikeAVFile(value) {
  return Boolean(value && typeof value === 'object' && 'message' in value && 'messages' in value);
}

/**
 * @param {unknown} [value]
 * @returns {value is VFileValue}
 */
function looksLikeAVFileValue(value) {
  return typeof value === 'string' || isBuffer(value);
}

/**
 * @typedef Options
 * @property {boolean} [includeImageAlt=true]
 */

/**
 * Get the text content of a node.
 * Prefer the node’s plain-text fields, otherwise serialize its children,
 * and if the given value is an array, serialize the nodes in it.
 *
 * @param {unknown} node
 * @param {Options} [options]
 * @returns {string}
 */
function toString(node, options) {
  var _ref = options || {},
    _ref$includeImageAlt = _ref.includeImageAlt,
    includeImageAlt = _ref$includeImageAlt === void 0 ? true : _ref$includeImageAlt;
  return one$1(node, includeImageAlt);
}

/**
 * @param {unknown} node
 * @param {boolean} includeImageAlt
 * @returns {string}
 */
function one$1(node, includeImageAlt) {
  return node && typeof node === 'object' && (
  // @ts-ignore looks like a literal.
  node.value || (
  // @ts-ignore looks like an image.
  includeImageAlt ? node.alt : '') ||
  // @ts-ignore looks like a parent.
  'children' in node && all$1(node.children, includeImageAlt) || Array.isArray(node) && all$1(node, includeImageAlt)) || '';
}

/**
 * @param {Array.<unknown>} values
 * @param {boolean} includeImageAlt
 * @returns {string}
 */
function all$1(values, includeImageAlt) {
  /** @type {Array.<string>} */
  var result = [];
  var index = -1;
  while (++index < values.length) {
    result[index] = one$1(values[index], includeImageAlt);
  }
  return result.join('');
}

/**
 * Like `Array#splice`, but smarter for giant arrays.
 *
 * `Array#splice` takes all items to be inserted as individual argument which
 * causes a stack overflow in V8 when trying to insert 100k items for instance.
 *
 * Otherwise, this does not return the removed items, and takes `items` as an
 * array instead of rest parameters.
 *
 * @template {unknown} T
 * @param {T[]} list
 * @param {number} start
 * @param {number} remove
 * @param {T[]} items
 * @returns {void}
 */
function splice(list, start, remove, items) {
  var end = list.length;
  var chunkStart = 0;
  /** @type {unknown[]} */

  var parameters; // Make start between zero and `end` (included).

  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0; // No need to chunk the items if there’s only a couple (10k) items.

  if (items.length < 10000) {
    parameters = Array.from(items);
    parameters.unshift(start, remove) // @ts-expect-error Hush, it’s fine.
    ;
    [].splice.apply(list, parameters);
  } else {
    // Delete `remove` items starting from `start`
    if (remove) [].splice.apply(list, [start, remove]); // Insert the items in chunks to not cause stack overflows.

    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 10000);
      parameters.unshift(start, 0) // @ts-expect-error Hush, it’s fine.
      ;
      [].splice.apply(list, parameters);
      chunkStart += 10000;
      start += 10000;
    }
  }
}
/**
 * Append `items` (an array) at the end of `list` (another array).
 * When `list` was empty, returns `items` instead.
 *
 * This prevents a potentially expensive operation when `list` is empty,
 * and adds items in batches to prevent V8 from hanging.
 *
 * @template {unknown} T
 * @param {T[]} list
 * @param {T[]} items
 * @returns {T[]}
 */

function push(list, items) {
  if (list.length > 0) {
    splice(list, list.length, 0, items);
    return list;
  }
  return items;
}

/**
 * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension
 * @typedef {import('micromark-util-types').Extension} Extension
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension
 */
var hasOwnProperty = {}.hasOwnProperty;

/**
 * Combine several syntax extensions into one.
 *
 * @param {Extension[]} extensions List of syntax extensions.
 * @returns {NormalizedExtension} A single combined extension.
 */
function combineExtensions(extensions) {
  /** @type {NormalizedExtension} */
  var all = {};
  var index = -1;
  while (++index < extensions.length) {
    syntaxExtension(all, extensions[index]);
  }
  return all;
}

/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all Extension to merge into.
 * @param {Extension} extension Extension to merge.
 * @returns {void}
 */
function syntaxExtension(all, extension) {
  /** @type {string} */
  var hook;
  for (hook in extension) {
    var maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
    var left = maybe || (all[hook] = {});
    var right = extension[hook];
    /** @type {string} */
    var code = void 0;
    for (code in right) {
      if (!hasOwnProperty.call(left, code)) left[code] = [];
      var value = right[code];
      constructs(
      // @ts-expect-error Looks like a list.
      left[code], Array.isArray(value) ? value : value ? [value] : []);
    }
  }
}

/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {unknown[]} existing
 * @param {unknown[]} list
 * @returns {void}
 */
function constructs(existing, list) {
  var index = -1;
  /** @type {unknown[]} */
  var before = [];
  while (++index < list.length) {
    (list[index].add === 'after' ? existing : before).push(list[index]);
  }
  splice(existing, 0, 0, before);
}

// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
var unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

/**
 * @typedef {import('micromark-util-types').Code} Code
 */
/**
 * Check whether the character code represents an ASCII alpha (`a` through `z`,
 * case insensitive).
 *
 * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.
 *
 * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)
 * to U+005A (`Z`).
 *
 * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)
 * to U+007A (`z`).
 */

var asciiAlpha = regexCheck(/[A-Za-z]/);
/**
 * Check whether the character code represents an ASCII digit (`0` through `9`).
 *
 * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to
 * U+0039 (`9`).
 */

var asciiDigit = regexCheck(/\d/);
/**
 * Check whether the character code represents an ASCII hex digit (`a` through
 * `f`, case insensitive, or `0` through `9`).
 *
 * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex
 * digit, or an ASCII lower hex digit.
 *
 * An **ASCII upper hex digit** is a character in the inclusive range U+0041
 * (`A`) to U+0046 (`F`).
 *
 * An **ASCII lower hex digit** is a character in the inclusive range U+0061
 * (`a`) to U+0066 (`f`).
 */

var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
/**
 * Check whether the character code represents an ASCII alphanumeric (`a`
 * through `z`, case insensitive, or `0` through `9`).
 *
 * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha
 * (see `asciiAlpha`).
 */

var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
/**
 * Check whether the character code represents ASCII punctuation.
 *
 * An **ASCII punctuation** is a character in the inclusive ranges U+0021
 * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT
 * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT
 * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).
 */

var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
/**
 * Check whether the character code represents an ASCII atext.
 *
 * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in
 * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),
 * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F
 * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E
 * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE
 * (`{`) to U+007E TILDE (`~`).
 *
 * See:
 * **\[RFC5322]**:
 * [Internet Message Format](https://tools.ietf.org/html/rfc5322).
 * P. Resnick.
 * IETF.
 */

var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
/**
 * Check whether a character code is an ASCII control character.
 *
 * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)
 * to U+001F (US), or U+007F (DEL).
 *
 * @param {Code} code
 * @returns {code is number}
 */

function asciiControl(code) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < 32 || code === 127)
  );
}
/**
 * Check whether a character code is a markdown line ending (see
 * `markdownLineEnding`) or markdown space (see `markdownSpace`).
 *
 * @param {Code} code
 * @returns {code is number}
 */

function markdownLineEndingOrSpace(code) {
  return code !== null && (code < 0 || code === 32);
}
/**
 * Check whether a character code is a markdown line ending.
 *
 * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN
 * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).
 *
 * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE
 * RETURN (CR) are replaced by these virtual characters depending on whether
 * they occurred together.
 *
 * @param {Code} code
 * @returns {code is number}
 */

function markdownLineEnding(code) {
  return code !== null && code < -2;
}
/**
 * Check whether a character code is a markdown space.
 *
 * A **markdown space** is the concrete character U+0020 SPACE (SP) and the
 * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).
 *
 * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is
 * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL
 * SPACE (VS) characters, depending on the column at which the tab occurred.
 *
 * @param {Code} code
 * @returns {code is number}
 */

function markdownSpace(code) {
  return code === -2 || code === -1 || code === 32;
}
/**
 * Check whether the character code represents Unicode whitespace.
 *
 * Note that this does handle micromark specific markdown whitespace characters.
 * See `markdownLineEndingOrSpace` to check that.
 *
 * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,
 * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),
 * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\[UNICODE]**).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 */

var unicodeWhitespace = regexCheck(/\s/);
/**
 * Check whether the character code represents Unicode punctuation.
 *
 * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,
 * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`
 * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`
 * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII
 * punctuation (see `asciiPunctuation`).
 *
 * See:
 * **\[UNICODE]**:
 * [The Unicode Standard](https://www.unicode.org/versions/).
 * Unicode Consortium.
 */
// Size note: removing ASCII from the regex and using `asciiPunctuation` here
// In fact adds to the bundle size.

var unicodePunctuation = regexCheck(unicodePunctuationRegex);
/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 * @returns {(code: Code) => code is number}
 */

function regexCheck(regex) {
  return check;
  /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code Character code
   * @returns {code is number} Whether the character code matches the bound regex
   */

  function check(code) {
    return code !== null && regex.test(String.fromCharCode(code));
  }
}

/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */
/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {string} type
 * @param {number} [max=Infinity]
 * @returns {State}
 */

function factorySpace(effects, ok, type, max) {
  var limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  var size = 0;
  return start;
  /** @type {State} */

  function start(code) {
    if (markdownSpace(code)) {
      effects.enter(type);
      return prefix(code);
    }
    return ok(code);
  }
  /** @type {State} */

  function prefix(code) {
    if (markdownSpace(code) && size++ < limit) {
      effects.consume(code);
      return prefix;
    }
    effects.exit(type);
    return ok(code);
  }
}

/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {InitialConstruct} */
var content$1 = {
  tokenize: initializeContent
};
/** @type {Initializer} */

function initializeContent(effects) {
  var contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
  /** @type {Token} */

  var previous;
  return contentStart;
  /** @type {State} */

  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, contentStart, 'linePrefix');
  }
  /** @type {State} */

  function paragraphInitial(code) {
    effects.enter('paragraph');
    return lineStart(code);
  }
  /** @type {State} */

  function lineStart(code) {
    var token = effects.enter('chunkText', {
      contentType: 'text',
      previous: previous
    });
    if (previous) {
      previous.next = token;
    }
    previous = token;
    return data(code);
  }
  /** @type {State} */

  function data(code) {
    if (code === null) {
      effects.exit('chunkText');
      effects.exit('paragraph');
      effects.consume(code);
      return;
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      effects.exit('chunkText');
      return lineStart;
    } // Data.

    effects.consume(code);
    return data;
  }
}

/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Point} Point
 */
/** @type {InitialConstruct} */

var document$2 = {
  tokenize: initializeDocument
};
/** @type {Construct} */

var containerConstruct = {
  tokenize: tokenizeContainer
};
/** @type {Initializer} */

function initializeDocument(effects) {
  var self = this;
  /** @type {Array<StackItem>} */

  var stack = [];
  var continued = 0;
  /** @type {TokenizeContext|undefined} */

  var childFlow;
  /** @type {Token|undefined} */

  var childToken;
  /** @type {number} */

  var lineStartOffset;
  return start;
  /** @type {State} */

  function start(code) {
    // First we iterate through the open blocks, starting with the root
    // document, and descending through last children down to the last open
    // block.
    // Each block imposes a condition that the line must satisfy if the block is
    // to remain open.
    // For example, a block quote requires a `>` character.
    // A paragraph requires a non-blank line.
    // In this phase we may match all or just some of the open blocks.
    // But we cannot close unmatched blocks yet, because we may have a lazy
    // continuation line.
    if (continued < stack.length) {
      var item = stack[continued];
      self.containerState = item[1];
      return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code);
    } // Done.

    return checkNewContainers(code);
  }
  /** @type {State} */

  function documentContinue(code) {
    continued++; // Note: this field is called `_closeFlow` but it also closes containers.
    // Perhaps a good idea to rename it but it’s already used in the wild by
    // extensions.

    if (self.containerState._closeFlow) {
      self.containerState._closeFlow = undefined;
      if (childFlow) {
        closeFlow();
      } // Note: this algorithm for moving events around is similar to the
      // algorithm when dealing with lazy lines in `writeToChild`.

      var indexBeforeExits = self.events.length;
      var indexBeforeFlow = indexBeforeExits;
      /** @type {Point|undefined} */

      var point; // Find the flow chunk.

      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === 'exit' && self.events[indexBeforeFlow][1].type === 'chunkFlow') {
          point = self.events[indexBeforeFlow][1].end;
          break;
        }
      }
      exitContainers(continued); // Fix positions.

      var index = indexBeforeExits;
      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point);
        index++;
      } // Inject the exits earlier (they’re still also at the end).

      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)); // Discard the duplicate exits.

      self.events.length = index;
      return checkNewContainers(code);
    }
    return start(code);
  }
  /** @type {State} */

  function checkNewContainers(code) {
    // Next, after consuming the continuation markers for existing blocks, we
    // look for new block starts (e.g. `>` for a block quote).
    // If we encounter a new block start, we close any blocks unmatched in
    // step 1 before creating the new block as a child of the last matched
    // block.
    if (continued === stack.length) {
      // No need to `check` whether there’s a container, of `exitContainers`
      // would be moot.
      // We can instead immediately `attempt` to parse one.
      if (!childFlow) {
        return documentContinued(code);
      } // If we have concrete content, such as block HTML or fenced code,
      // we can’t have containers “pierce” into them, so we can immediately
      // start.

      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        return flowStart(code);
      } // If we do have flow, it could still be a blank line,
      // but we’d be interrupting it w/ a new container if there’s a current
      // construct.

      self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    } // Check if there is a new container.

    self.containerState = {};
    return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code);
  }
  /** @type {State} */

  function thereIsANewContainer(code) {
    if (childFlow) closeFlow();
    exitContainers(continued);
    return documentContinued(code);
  }
  /** @type {State} */

  function thereIsNoNewContainer(code) {
    self.parser.lazy[self.now().line] = continued !== stack.length;
    lineStartOffset = self.now().offset;
    return flowStart(code);
  }
  /** @type {State} */

  function documentContinued(code) {
    // Try new containers.
    self.containerState = {};
    return effects.attempt(containerConstruct, containerContinue, flowStart)(code);
  }
  /** @type {State} */

  function containerContinue(code) {
    continued++;
    stack.push([self.currentConstruct, self.containerState]); // Try another.

    return documentContinued(code);
  }
  /** @type {State} */

  function flowStart(code) {
    if (code === null) {
      if (childFlow) closeFlow();
      exitContainers(0);
      effects.consume(code);
      return;
    }
    childFlow = childFlow || self.parser.flow(self.now());
    effects.enter('chunkFlow', {
      contentType: 'flow',
      previous: childToken,
      _tokenizer: childFlow
    });
    return flowContinue(code);
  }
  /** @type {State} */

  function flowContinue(code) {
    if (code === null) {
      writeToChild(effects.exit('chunkFlow'), true);
      exitContainers(0);
      effects.consume(code);
      return;
    }
    if (markdownLineEnding(code)) {
      effects.consume(code);
      writeToChild(effects.exit('chunkFlow')); // Get ready for the next line.

      continued = 0;
      self.interrupt = undefined;
      return start;
    }
    effects.consume(code);
    return flowContinue;
  }
  /**
   * @param {Token} token
   * @param {boolean} [eof]
   * @returns {void}
   */

  function writeToChild(token, eof) {
    var stream = self.sliceStream(token);
    if (eof) stream.push(null);
    token.previous = childToken;
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.defineSkip(token.start);
    childFlow.write(stream); // Alright, so we just added a lazy line:
    //
    // ```markdown
    // > a
    // b.
    //
    // Or:
    //
    // > ~~~c
    // d
    //
    // Or:
    //
    // > | e |
    // f
    // ```
    //
    // The construct in the second example (fenced code) does not accept lazy
    // lines, so it marked itself as done at the end of its first line, and
    // then the content construct parses `d`.
    // Most constructs in markdown match on the first line: if the first line
    // forms a construct, a non-lazy line can’t “unmake” it.
    //
    // The construct in the third example is potentially a GFM table, and
    // those are *weird*.
    // It *could* be a table, from the first line, if the following line
    // matches a condition.
    // In this case, that second line is lazy, which “unmakes” the first line
    // and turns the whole into one content block.
    //
    // We’ve now parsed the non-lazy and the lazy line, and can figure out
    // whether the lazy line started a new flow block.
    // If it did, we exit the current containers between the two flow blocks.

    if (self.parser.lazy[token.start.line]) {
      var index = childFlow.events.length;
      while (index--) {
        if (
        // The token starts before the line ending…
        childFlow.events[index][1].start.offset < lineStartOffset && (
        // …and either is not ended yet…
        !childFlow.events[index][1].end ||
        // …or ends after it.
        childFlow.events[index][1].end.offset > lineStartOffset)) {
          // Exit: there’s still something open, which means it’s a lazy line
          // part of something.
          return;
        }
      } // Note: this algorithm for moving events around is similar to the
      // algorithm when closing flow in `documentContinue`.

      var indexBeforeExits = self.events.length;
      var indexBeforeFlow = indexBeforeExits;
      /** @type {boolean|undefined} */

      var seen;
      /** @type {Point|undefined} */

      var point; // Find the previous chunk (the one before the lazy line).

      while (indexBeforeFlow--) {
        if (self.events[indexBeforeFlow][0] === 'exit' && self.events[indexBeforeFlow][1].type === 'chunkFlow') {
          if (seen) {
            point = self.events[indexBeforeFlow][1].end;
            break;
          }
          seen = true;
        }
      }
      exitContainers(continued); // Fix positions.

      index = indexBeforeExits;
      while (index < self.events.length) {
        self.events[index][1].end = Object.assign({}, point);
        index++;
      } // Inject the exits earlier (they’re still also at the end).

      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)); // Discard the duplicate exits.

      self.events.length = index;
    }
  }
  /**
   * @param {number} size
   * @returns {void}
   */

  function exitContainers(size) {
    var index = stack.length; // Exit open containers.

    while (index-- > size) {
      var entry = stack[index];
      self.containerState = entry[1];
      entry[0].exit.call(self, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]);
    childToken = undefined;
    childFlow = undefined;
    self.containerState._closeFlow = undefined;
  }
}
/** @type {Tokenizer} */

function tokenizeContainer(effects, ok, nok) {
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok, nok), 'linePrefix', this.parser.constructs.disable["null"].includes('codeIndented') ? undefined : 4);
}

/**
 * @typedef {import('micromark-util-types').Code} Code
 */

/**
 * Classify whether a character code represents whitespace, punctuation, or
 * something else.
 *
 * Used for attention (emphasis, strong), whose sequences can open or close
 * based on the class of surrounding characters.
 *
 * Note that eof (`null`) is seen as whitespace.
 *
 * @param {Code} code
 * @returns {number|undefined}
 */
function classifyCharacter(code) {
  if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) {
    return 1;
  }
  if (unicodePunctuation(code)) {
    return 2;
  }
}

/**
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Resolver} Resolver
 */

/**
 * Call all `resolveAll`s.
 *
 * @param {{resolveAll?: Resolver}[]} constructs
 * @param {Event[]} events
 * @param {TokenizeContext} context
 * @returns {Event[]}
 */
function resolveAll(constructs, events, context) {
  /** @type {Resolver[]} */
  var called = [];
  var index = -1;
  while (++index < constructs.length) {
    var resolve = constructs[index].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Code} Code
 * @typedef {import('micromark-util-types').Point} Point
 */

/** @type {Construct} */
var attention = {
  name: 'attention',
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
/**
 * Take all events and resolve attention to emphasis or strong.
 *
 * @type {Resolver}
 */

function resolveAllAttention(events, context) {
  var index = -1;
  /** @type {number} */

  var open;
  /** @type {Token} */

  var group;
  /** @type {Token} */

  var text;
  /** @type {Token} */

  var openingSequence;
  /** @type {Token} */

  var closingSequence;
  /** @type {number} */

  var use;
  /** @type {Event[]} */

  var nextEvents;
  /** @type {number} */

  var offset; // Walk through all events.
  //
  // Note: performance of this is fine on an mb of normal markdown, but it’s
  // a bottleneck for malicious stuff.

  while (++index < events.length) {
    // Find a token that can close.
    if (events[index][0] === 'enter' && events[index][1].type === 'attentionSequence' && events[index][1]._close) {
      open = index; // Now walk back to find an opener.

      while (open--) {
        // Find a token that can open the closer.
        if (events[open][0] === 'exit' && events[open][1].type === 'attentionSequence' && events[open][1]._open &&
        // If the markers are the same:
        context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
          // If the opening can close or the closing can open,
          // and the close size *is not* a multiple of three,
          // but the sum of the opening and closing size *is* multiple of three,
          // then don’t match.
          if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) {
            continue;
          } // Number of markers to use from the sequence.

          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
          var start = Object.assign({}, events[open][1].end);
          var end = Object.assign({}, events[index][1].start);
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: start,
            end: Object.assign({}, events[open][1].end)
          };
          closingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: Object.assign({}, events[index][1].start),
            end: end
          };
          text = {
            type: use > 1 ? 'strongText' : 'emphasisText',
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index][1].start)
          };
          group = {
            type: use > 1 ? 'strong' : 'emphasis',
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          };
          events[open][1].end = Object.assign({}, openingSequence.start);
          events[index][1].start = Object.assign({}, closingSequence.end);
          nextEvents = []; // If there are more markers in the opening, add them before.

          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = push(nextEvents, [['enter', events[open][1], context], ['exit', events[open][1], context]]);
          } // Opening.

          nextEvents = push(nextEvents, [['enter', group, context], ['enter', openingSequence, context], ['exit', openingSequence, context], ['enter', text, context]]); // Between.

          nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan["null"], events.slice(open + 1, index), context)); // Closing.

          nextEvents = push(nextEvents, [['exit', text, context], ['enter', closingSequence, context], ['exit', closingSequence, context], ['exit', group, context]]); // If there are more markers in the closing, add them after.

          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2;
            nextEvents = push(nextEvents, [['enter', events[index][1], context], ['exit', events[index][1], context]]);
          } else {
            offset = 0;
          }
          splice(events, open - 1, index - open + 3, nextEvents);
          index = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  } // Remove remaining sequences.

  index = -1;
  while (++index < events.length) {
    if (events[index][1].type === 'attentionSequence') {
      events[index][1].type = 'data';
    }
  }
  return events;
}
/** @type {Tokenizer} */

function tokenizeAttention(effects, ok) {
  var attentionMarkers = this.parser.constructs.attentionMarkers["null"];
  var previous = this.previous;
  var before = classifyCharacter(previous);
  /** @type {NonNullable<Code>} */

  var marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('attentionSequence');
    marker = code;
    return sequence(code);
  }
  /** @type {State} */

  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      return sequence;
    }
    var token = effects.exit('attentionSequence');
    var after = classifyCharacter(code);
    var open = !after || after === 2 && before || attentionMarkers.includes(code);
    var close = !before || before === 2 && after || attentionMarkers.includes(previous);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok(code);
  }
}
/**
 * Move a point a bit.
 *
 * Note: `move` only works inside lines! It’s not possible to move past other
 * chunks (replacement characters, tabs, or line endings).
 *
 * @param {Point} point
 * @param {number} offset
 * @returns {void}
 */

function movePoint(point, offset) {
  point.column += offset;
  point.offset += offset;
  point._bufferIndex += offset;
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
var autolink = {
  name: 'autolink',
  tokenize: tokenizeAutolink
};
/** @type {Tokenizer} */

function tokenizeAutolink(effects, ok, nok) {
  var size = 1;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('autolink');
    effects.enter('autolinkMarker');
    effects.consume(code);
    effects.exit('autolinkMarker');
    effects.enter('autolinkProtocol');
    return open;
  }
  /** @type {State} */

  function open(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      return schemeOrEmailAtext;
    }
    return asciiAtext(code) ? emailAtext(code) : nok(code);
  }
  /** @type {State} */

  function schemeOrEmailAtext(code) {
    return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
  }
  /** @type {State} */

  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code);
      return urlInside;
    }
    if ((code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) && size++ < 32) {
      effects.consume(code);
      return schemeInsideOrEmailAtext;
    }
    return emailAtext(code);
  }
  /** @type {State} */

  function urlInside(code) {
    if (code === 62) {
      effects.exit('autolinkProtocol');
      return end(code);
    }
    if (code === null || code === 32 || code === 60 || asciiControl(code)) {
      return nok(code);
    }
    effects.consume(code);
    return urlInside;
  }
  /** @type {State} */

  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot;
    }
    if (asciiAtext(code)) {
      effects.consume(code);
      return emailAtext;
    }
    return nok(code);
  }
  /** @type {State} */

  function emailAtSignOrDot(code) {
    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code);
  }
  /** @type {State} */

  function emailLabel(code) {
    if (code === 46) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code === 62) {
      // Exit, then change the type.
      effects.exit('autolinkProtocol').type = 'autolinkEmail';
      return end(code);
    }
    return emailValue(code);
  }
  /** @type {State} */

  function emailValue(code) {
    if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
      effects.consume(code);
      return code === 45 ? emailValue : emailLabel;
    }
    return nok(code);
  }
  /** @type {State} */

  function end(code) {
    effects.enter('autolinkMarker');
    effects.consume(code);
    effects.exit('autolinkMarker');
    effects.exit('autolink');
    return ok;
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
var blankLine = {
  tokenize: tokenizeBlankLine,
  partial: true
};
/** @type {Tokenizer} */

function tokenizeBlankLine(effects, ok, nok) {
  return factorySpace(effects, afterWhitespace, 'linePrefix');
  /** @type {State} */

  function afterWhitespace(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
var blockQuote = {
  name: 'blockQuote',
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit: exit
};
/** @type {Tokenizer} */

function tokenizeBlockQuoteStart(effects, ok, nok) {
  var self = this;
  return start;
  /** @type {State} */

  function start(code) {
    if (code === 62) {
      var state = self.containerState;
      if (!state.open) {
        effects.enter('blockQuote', {
          _container: true
        });
        state.open = true;
      }
      effects.enter('blockQuotePrefix');
      effects.enter('blockQuoteMarker');
      effects.consume(code);
      effects.exit('blockQuoteMarker');
      return after;
    }
    return nok(code);
  }
  /** @type {State} */

  function after(code) {
    if (markdownSpace(code)) {
      effects.enter('blockQuotePrefixWhitespace');
      effects.consume(code);
      effects.exit('blockQuotePrefixWhitespace');
      effects.exit('blockQuotePrefix');
      return ok;
    }
    effects.exit('blockQuotePrefix');
    return ok(code);
  }
}
/** @type {Tokenizer} */

function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  return factorySpace(effects, effects.attempt(blockQuote, ok, nok), 'linePrefix', this.parser.constructs.disable["null"].includes('codeIndented') ? undefined : 4);
}
/** @type {Exiter} */

function exit(effects) {
  effects.exit('blockQuote');
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
var characterEscape = {
  name: 'characterEscape',
  tokenize: tokenizeCharacterEscape
};
/** @type {Tokenizer} */

function tokenizeCharacterEscape(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('characterEscape');
    effects.enter('escapeMarker');
    effects.consume(code);
    effects.exit('escapeMarker');
    return open;
  }
  /** @type {State} */

  function open(code) {
    if (asciiPunctuation(code)) {
      effects.enter('characterEscapeValue');
      effects.consume(code);
      effects.exit('characterEscapeValue');
      effects.exit('characterEscape');
      return ok;
    }
    return nok(code);
  }
}

/**
 * Map of named character references.
 *
 * @type {Record<string, string>}
 */
var characterEntities = {
  AElig: 'Æ',
  AMP: '&',
  Aacute: 'Á',
  Abreve: 'Ă',
  Acirc: 'Â',
  Acy: 'А',
  Afr: '𝔄',
  Agrave: 'À',
  Alpha: 'Α',
  Amacr: 'Ā',
  And: '⩓',
  Aogon: 'Ą',
  Aopf: '𝔸',
  ApplyFunction: '⁡',
  Aring: 'Å',
  Ascr: '𝒜',
  Assign: '≔',
  Atilde: 'Ã',
  Auml: 'Ä',
  Backslash: '∖',
  Barv: '⫧',
  Barwed: '⌆',
  Bcy: 'Б',
  Because: '∵',
  Bernoullis: 'ℬ',
  Beta: 'Β',
  Bfr: '𝔅',
  Bopf: '𝔹',
  Breve: '˘',
  Bscr: 'ℬ',
  Bumpeq: '≎',
  CHcy: 'Ч',
  COPY: '©',
  Cacute: 'Ć',
  Cap: '⋒',
  CapitalDifferentialD: 'ⅅ',
  Cayleys: 'ℭ',
  Ccaron: 'Č',
  Ccedil: 'Ç',
  Ccirc: 'Ĉ',
  Cconint: '∰',
  Cdot: 'Ċ',
  Cedilla: '¸',
  CenterDot: '·',
  Cfr: 'ℭ',
  Chi: 'Χ',
  CircleDot: '⊙',
  CircleMinus: '⊖',
  CirclePlus: '⊕',
  CircleTimes: '⊗',
  ClockwiseContourIntegral: '∲',
  CloseCurlyDoubleQuote: '”',
  CloseCurlyQuote: '’',
  Colon: '∷',
  Colone: '⩴',
  Congruent: '≡',
  Conint: '∯',
  ContourIntegral: '∮',
  Copf: 'ℂ',
  Coproduct: '∐',
  CounterClockwiseContourIntegral: '∳',
  Cross: '⨯',
  Cscr: '𝒞',
  Cup: '⋓',
  CupCap: '≍',
  DD: 'ⅅ',
  DDotrahd: '⤑',
  DJcy: 'Ђ',
  DScy: 'Ѕ',
  DZcy: 'Џ',
  Dagger: '‡',
  Darr: '↡',
  Dashv: '⫤',
  Dcaron: 'Ď',
  Dcy: 'Д',
  Del: '∇',
  Delta: 'Δ',
  Dfr: '𝔇',
  DiacriticalAcute: '´',
  DiacriticalDot: '˙',
  DiacriticalDoubleAcute: '˝',
  DiacriticalGrave: '`',
  DiacriticalTilde: '˜',
  Diamond: '⋄',
  DifferentialD: 'ⅆ',
  Dopf: '𝔻',
  Dot: '¨',
  DotDot: '⃜',
  DotEqual: '≐',
  DoubleContourIntegral: '∯',
  DoubleDot: '¨',
  DoubleDownArrow: '⇓',
  DoubleLeftArrow: '⇐',
  DoubleLeftRightArrow: '⇔',
  DoubleLeftTee: '⫤',
  DoubleLongLeftArrow: '⟸',
  DoubleLongLeftRightArrow: '⟺',
  DoubleLongRightArrow: '⟹',
  DoubleRightArrow: '⇒',
  DoubleRightTee: '⊨',
  DoubleUpArrow: '⇑',
  DoubleUpDownArrow: '⇕',
  DoubleVerticalBar: '∥',
  DownArrow: '↓',
  DownArrowBar: '⤓',
  DownArrowUpArrow: '⇵',
  DownBreve: '̑',
  DownLeftRightVector: '⥐',
  DownLeftTeeVector: '⥞',
  DownLeftVector: '↽',
  DownLeftVectorBar: '⥖',
  DownRightTeeVector: '⥟',
  DownRightVector: '⇁',
  DownRightVectorBar: '⥗',
  DownTee: '⊤',
  DownTeeArrow: '↧',
  Downarrow: '⇓',
  Dscr: '𝒟',
  Dstrok: 'Đ',
  ENG: 'Ŋ',
  ETH: 'Ð',
  Eacute: 'É',
  Ecaron: 'Ě',
  Ecirc: 'Ê',
  Ecy: 'Э',
  Edot: 'Ė',
  Efr: '𝔈',
  Egrave: 'È',
  Element: '∈',
  Emacr: 'Ē',
  EmptySmallSquare: '◻',
  EmptyVerySmallSquare: '▫',
  Eogon: 'Ę',
  Eopf: '𝔼',
  Epsilon: 'Ε',
  Equal: '⩵',
  EqualTilde: '≂',
  Equilibrium: '⇌',
  Escr: 'ℰ',
  Esim: '⩳',
  Eta: 'Η',
  Euml: 'Ë',
  Exists: '∃',
  ExponentialE: 'ⅇ',
  Fcy: 'Ф',
  Ffr: '𝔉',
  FilledSmallSquare: '◼',
  FilledVerySmallSquare: '▪',
  Fopf: '𝔽',
  ForAll: '∀',
  Fouriertrf: 'ℱ',
  Fscr: 'ℱ',
  GJcy: 'Ѓ',
  GT: '>',
  Gamma: 'Γ',
  Gammad: 'Ϝ',
  Gbreve: 'Ğ',
  Gcedil: 'Ģ',
  Gcirc: 'Ĝ',
  Gcy: 'Г',
  Gdot: 'Ġ',
  Gfr: '𝔊',
  Gg: '⋙',
  Gopf: '𝔾',
  GreaterEqual: '≥',
  GreaterEqualLess: '⋛',
  GreaterFullEqual: '≧',
  GreaterGreater: '⪢',
  GreaterLess: '≷',
  GreaterSlantEqual: '⩾',
  GreaterTilde: '≳',
  Gscr: '𝒢',
  Gt: '≫',
  HARDcy: 'Ъ',
  Hacek: 'ˇ',
  Hat: '^',
  Hcirc: 'Ĥ',
  Hfr: 'ℌ',
  HilbertSpace: 'ℋ',
  Hopf: 'ℍ',
  HorizontalLine: '─',
  Hscr: 'ℋ',
  Hstrok: 'Ħ',
  HumpDownHump: '≎',
  HumpEqual: '≏',
  IEcy: 'Е',
  IJlig: 'Ĳ',
  IOcy: 'Ё',
  Iacute: 'Í',
  Icirc: 'Î',
  Icy: 'И',
  Idot: 'İ',
  Ifr: 'ℑ',
  Igrave: 'Ì',
  Im: 'ℑ',
  Imacr: 'Ī',
  ImaginaryI: 'ⅈ',
  Implies: '⇒',
  Int: '∬',
  Integral: '∫',
  Intersection: '⋂',
  InvisibleComma: '⁣',
  InvisibleTimes: '⁢',
  Iogon: 'Į',
  Iopf: '𝕀',
  Iota: 'Ι',
  Iscr: 'ℐ',
  Itilde: 'Ĩ',
  Iukcy: 'І',
  Iuml: 'Ï',
  Jcirc: 'Ĵ',
  Jcy: 'Й',
  Jfr: '𝔍',
  Jopf: '𝕁',
  Jscr: '𝒥',
  Jsercy: 'Ј',
  Jukcy: 'Є',
  KHcy: 'Х',
  KJcy: 'Ќ',
  Kappa: 'Κ',
  Kcedil: 'Ķ',
  Kcy: 'К',
  Kfr: '𝔎',
  Kopf: '𝕂',
  Kscr: '𝒦',
  LJcy: 'Љ',
  LT: '<',
  Lacute: 'Ĺ',
  Lambda: 'Λ',
  Lang: '⟪',
  Laplacetrf: 'ℒ',
  Larr: '↞',
  Lcaron: 'Ľ',
  Lcedil: 'Ļ',
  Lcy: 'Л',
  LeftAngleBracket: '⟨',
  LeftArrow: '←',
  LeftArrowBar: '⇤',
  LeftArrowRightArrow: '⇆',
  LeftCeiling: '⌈',
  LeftDoubleBracket: '⟦',
  LeftDownTeeVector: '⥡',
  LeftDownVector: '⇃',
  LeftDownVectorBar: '⥙',
  LeftFloor: '⌊',
  LeftRightArrow: '↔',
  LeftRightVector: '⥎',
  LeftTee: '⊣',
  LeftTeeArrow: '↤',
  LeftTeeVector: '⥚',
  LeftTriangle: '⊲',
  LeftTriangleBar: '⧏',
  LeftTriangleEqual: '⊴',
  LeftUpDownVector: '⥑',
  LeftUpTeeVector: '⥠',
  LeftUpVector: '↿',
  LeftUpVectorBar: '⥘',
  LeftVector: '↼',
  LeftVectorBar: '⥒',
  Leftarrow: '⇐',
  Leftrightarrow: '⇔',
  LessEqualGreater: '⋚',
  LessFullEqual: '≦',
  LessGreater: '≶',
  LessLess: '⪡',
  LessSlantEqual: '⩽',
  LessTilde: '≲',
  Lfr: '𝔏',
  Ll: '⋘',
  Lleftarrow: '⇚',
  Lmidot: 'Ŀ',
  LongLeftArrow: '⟵',
  LongLeftRightArrow: '⟷',
  LongRightArrow: '⟶',
  Longleftarrow: '⟸',
  Longleftrightarrow: '⟺',
  Longrightarrow: '⟹',
  Lopf: '𝕃',
  LowerLeftArrow: '↙',
  LowerRightArrow: '↘',
  Lscr: 'ℒ',
  Lsh: '↰',
  Lstrok: 'Ł',
  Lt: '≪',
  Map: '⤅',
  Mcy: 'М',
  MediumSpace: ' ',
  Mellintrf: 'ℳ',
  Mfr: '𝔐',
  MinusPlus: '∓',
  Mopf: '𝕄',
  Mscr: 'ℳ',
  Mu: 'Μ',
  NJcy: 'Њ',
  Nacute: 'Ń',
  Ncaron: 'Ň',
  Ncedil: 'Ņ',
  Ncy: 'Н',
  NegativeMediumSpace: '​',
  NegativeThickSpace: '​',
  NegativeThinSpace: '​',
  NegativeVeryThinSpace: '​',
  NestedGreaterGreater: '≫',
  NestedLessLess: '≪',
  NewLine: '\n',
  Nfr: '𝔑',
  NoBreak: '⁠',
  NonBreakingSpace: ' ',
  Nopf: 'ℕ',
  Not: '⫬',
  NotCongruent: '≢',
  NotCupCap: '≭',
  NotDoubleVerticalBar: '∦',
  NotElement: '∉',
  NotEqual: '≠',
  NotEqualTilde: '≂̸',
  NotExists: '∄',
  NotGreater: '≯',
  NotGreaterEqual: '≱',
  NotGreaterFullEqual: '≧̸',
  NotGreaterGreater: '≫̸',
  NotGreaterLess: '≹',
  NotGreaterSlantEqual: '⩾̸',
  NotGreaterTilde: '≵',
  NotHumpDownHump: '≎̸',
  NotHumpEqual: '≏̸',
  NotLeftTriangle: '⋪',
  NotLeftTriangleBar: '⧏̸',
  NotLeftTriangleEqual: '⋬',
  NotLess: '≮',
  NotLessEqual: '≰',
  NotLessGreater: '≸',
  NotLessLess: '≪̸',
  NotLessSlantEqual: '⩽̸',
  NotLessTilde: '≴',
  NotNestedGreaterGreater: '⪢̸',
  NotNestedLessLess: '⪡̸',
  NotPrecedes: '⊀',
  NotPrecedesEqual: '⪯̸',
  NotPrecedesSlantEqual: '⋠',
  NotReverseElement: '∌',
  NotRightTriangle: '⋫',
  NotRightTriangleBar: '⧐̸',
  NotRightTriangleEqual: '⋭',
  NotSquareSubset: '⊏̸',
  NotSquareSubsetEqual: '⋢',
  NotSquareSuperset: '⊐̸',
  NotSquareSupersetEqual: '⋣',
  NotSubset: '⊂⃒',
  NotSubsetEqual: '⊈',
  NotSucceeds: '⊁',
  NotSucceedsEqual: '⪰̸',
  NotSucceedsSlantEqual: '⋡',
  NotSucceedsTilde: '≿̸',
  NotSuperset: '⊃⃒',
  NotSupersetEqual: '⊉',
  NotTilde: '≁',
  NotTildeEqual: '≄',
  NotTildeFullEqual: '≇',
  NotTildeTilde: '≉',
  NotVerticalBar: '∤',
  Nscr: '𝒩',
  Ntilde: 'Ñ',
  Nu: 'Ν',
  OElig: 'Œ',
  Oacute: 'Ó',
  Ocirc: 'Ô',
  Ocy: 'О',
  Odblac: 'Ő',
  Ofr: '𝔒',
  Ograve: 'Ò',
  Omacr: 'Ō',
  Omega: 'Ω',
  Omicron: 'Ο',
  Oopf: '𝕆',
  OpenCurlyDoubleQuote: '“',
  OpenCurlyQuote: '‘',
  Or: '⩔',
  Oscr: '𝒪',
  Oslash: 'Ø',
  Otilde: 'Õ',
  Otimes: '⨷',
  Ouml: 'Ö',
  OverBar: '‾',
  OverBrace: '⏞',
  OverBracket: '⎴',
  OverParenthesis: '⏜',
  PartialD: '∂',
  Pcy: 'П',
  Pfr: '𝔓',
  Phi: 'Φ',
  Pi: 'Π',
  PlusMinus: '±',
  Poincareplane: 'ℌ',
  Popf: 'ℙ',
  Pr: '⪻',
  Precedes: '≺',
  PrecedesEqual: '⪯',
  PrecedesSlantEqual: '≼',
  PrecedesTilde: '≾',
  Prime: '″',
  Product: '∏',
  Proportion: '∷',
  Proportional: '∝',
  Pscr: '𝒫',
  Psi: 'Ψ',
  QUOT: '"',
  Qfr: '𝔔',
  Qopf: 'ℚ',
  Qscr: '𝒬',
  RBarr: '⤐',
  REG: '®',
  Racute: 'Ŕ',
  Rang: '⟫',
  Rarr: '↠',
  Rarrtl: '⤖',
  Rcaron: 'Ř',
  Rcedil: 'Ŗ',
  Rcy: 'Р',
  Re: 'ℜ',
  ReverseElement: '∋',
  ReverseEquilibrium: '⇋',
  ReverseUpEquilibrium: '⥯',
  Rfr: 'ℜ',
  Rho: 'Ρ',
  RightAngleBracket: '⟩',
  RightArrow: '→',
  RightArrowBar: '⇥',
  RightArrowLeftArrow: '⇄',
  RightCeiling: '⌉',
  RightDoubleBracket: '⟧',
  RightDownTeeVector: '⥝',
  RightDownVector: '⇂',
  RightDownVectorBar: '⥕',
  RightFloor: '⌋',
  RightTee: '⊢',
  RightTeeArrow: '↦',
  RightTeeVector: '⥛',
  RightTriangle: '⊳',
  RightTriangleBar: '⧐',
  RightTriangleEqual: '⊵',
  RightUpDownVector: '⥏',
  RightUpTeeVector: '⥜',
  RightUpVector: '↾',
  RightUpVectorBar: '⥔',
  RightVector: '⇀',
  RightVectorBar: '⥓',
  Rightarrow: '⇒',
  Ropf: 'ℝ',
  RoundImplies: '⥰',
  Rrightarrow: '⇛',
  Rscr: 'ℛ',
  Rsh: '↱',
  RuleDelayed: '⧴',
  SHCHcy: 'Щ',
  SHcy: 'Ш',
  SOFTcy: 'Ь',
  Sacute: 'Ś',
  Sc: '⪼',
  Scaron: 'Š',
  Scedil: 'Ş',
  Scirc: 'Ŝ',
  Scy: 'С',
  Sfr: '𝔖',
  ShortDownArrow: '↓',
  ShortLeftArrow: '←',
  ShortRightArrow: '→',
  ShortUpArrow: '↑',
  Sigma: 'Σ',
  SmallCircle: '∘',
  Sopf: '𝕊',
  Sqrt: '√',
  Square: '□',
  SquareIntersection: '⊓',
  SquareSubset: '⊏',
  SquareSubsetEqual: '⊑',
  SquareSuperset: '⊐',
  SquareSupersetEqual: '⊒',
  SquareUnion: '⊔',
  Sscr: '𝒮',
  Star: '⋆',
  Sub: '⋐',
  Subset: '⋐',
  SubsetEqual: '⊆',
  Succeeds: '≻',
  SucceedsEqual: '⪰',
  SucceedsSlantEqual: '≽',
  SucceedsTilde: '≿',
  SuchThat: '∋',
  Sum: '∑',
  Sup: '⋑',
  Superset: '⊃',
  SupersetEqual: '⊇',
  Supset: '⋑',
  THORN: 'Þ',
  TRADE: '™',
  TSHcy: 'Ћ',
  TScy: 'Ц',
  Tab: '\t',
  Tau: 'Τ',
  Tcaron: 'Ť',
  Tcedil: 'Ţ',
  Tcy: 'Т',
  Tfr: '𝔗',
  Therefore: '∴',
  Theta: 'Θ',
  ThickSpace: '  ',
  ThinSpace: ' ',
  Tilde: '∼',
  TildeEqual: '≃',
  TildeFullEqual: '≅',
  TildeTilde: '≈',
  Topf: '𝕋',
  TripleDot: '⃛',
  Tscr: '𝒯',
  Tstrok: 'Ŧ',
  Uacute: 'Ú',
  Uarr: '↟',
  Uarrocir: '⥉',
  Ubrcy: 'Ў',
  Ubreve: 'Ŭ',
  Ucirc: 'Û',
  Ucy: 'У',
  Udblac: 'Ű',
  Ufr: '𝔘',
  Ugrave: 'Ù',
  Umacr: 'Ū',
  UnderBar: '_',
  UnderBrace: '⏟',
  UnderBracket: '⎵',
  UnderParenthesis: '⏝',
  Union: '⋃',
  UnionPlus: '⊎',
  Uogon: 'Ų',
  Uopf: '𝕌',
  UpArrow: '↑',
  UpArrowBar: '⤒',
  UpArrowDownArrow: '⇅',
  UpDownArrow: '↕',
  UpEquilibrium: '⥮',
  UpTee: '⊥',
  UpTeeArrow: '↥',
  Uparrow: '⇑',
  Updownarrow: '⇕',
  UpperLeftArrow: '↖',
  UpperRightArrow: '↗',
  Upsi: 'ϒ',
  Upsilon: 'Υ',
  Uring: 'Ů',
  Uscr: '𝒰',
  Utilde: 'Ũ',
  Uuml: 'Ü',
  VDash: '⊫',
  Vbar: '⫫',
  Vcy: 'В',
  Vdash: '⊩',
  Vdashl: '⫦',
  Vee: '⋁',
  Verbar: '‖',
  Vert: '‖',
  VerticalBar: '∣',
  VerticalLine: '|',
  VerticalSeparator: '❘',
  VerticalTilde: '≀',
  VeryThinSpace: ' ',
  Vfr: '𝔙',
  Vopf: '𝕍',
  Vscr: '𝒱',
  Vvdash: '⊪',
  Wcirc: 'Ŵ',
  Wedge: '⋀',
  Wfr: '𝔚',
  Wopf: '𝕎',
  Wscr: '𝒲',
  Xfr: '𝔛',
  Xi: 'Ξ',
  Xopf: '𝕏',
  Xscr: '𝒳',
  YAcy: 'Я',
  YIcy: 'Ї',
  YUcy: 'Ю',
  Yacute: 'Ý',
  Ycirc: 'Ŷ',
  Ycy: 'Ы',
  Yfr: '𝔜',
  Yopf: '𝕐',
  Yscr: '𝒴',
  Yuml: 'Ÿ',
  ZHcy: 'Ж',
  Zacute: 'Ź',
  Zcaron: 'Ž',
  Zcy: 'З',
  Zdot: 'Ż',
  ZeroWidthSpace: '​',
  Zeta: 'Ζ',
  Zfr: 'ℨ',
  Zopf: 'ℤ',
  Zscr: '𝒵',
  aacute: 'á',
  abreve: 'ă',
  ac: '∾',
  acE: '∾̳',
  acd: '∿',
  acirc: 'â',
  acute: '´',
  acy: 'а',
  aelig: 'æ',
  af: '⁡',
  afr: '𝔞',
  agrave: 'à',
  alefsym: 'ℵ',
  aleph: 'ℵ',
  alpha: 'α',
  amacr: 'ā',
  amalg: '⨿',
  amp: '&',
  and: '∧',
  andand: '⩕',
  andd: '⩜',
  andslope: '⩘',
  andv: '⩚',
  ang: '∠',
  ange: '⦤',
  angle: '∠',
  angmsd: '∡',
  angmsdaa: '⦨',
  angmsdab: '⦩',
  angmsdac: '⦪',
  angmsdad: '⦫',
  angmsdae: '⦬',
  angmsdaf: '⦭',
  angmsdag: '⦮',
  angmsdah: '⦯',
  angrt: '∟',
  angrtvb: '⊾',
  angrtvbd: '⦝',
  angsph: '∢',
  angst: 'Å',
  angzarr: '⍼',
  aogon: 'ą',
  aopf: '𝕒',
  ap: '≈',
  apE: '⩰',
  apacir: '⩯',
  ape: '≊',
  apid: '≋',
  apos: "'",
  approx: '≈',
  approxeq: '≊',
  aring: 'å',
  ascr: '𝒶',
  ast: '*',
  asymp: '≈',
  asympeq: '≍',
  atilde: 'ã',
  auml: 'ä',
  awconint: '∳',
  awint: '⨑',
  bNot: '⫭',
  backcong: '≌',
  backepsilon: '϶',
  backprime: '‵',
  backsim: '∽',
  backsimeq: '⋍',
  barvee: '⊽',
  barwed: '⌅',
  barwedge: '⌅',
  bbrk: '⎵',
  bbrktbrk: '⎶',
  bcong: '≌',
  bcy: 'б',
  bdquo: '„',
  becaus: '∵',
  because: '∵',
  bemptyv: '⦰',
  bepsi: '϶',
  bernou: 'ℬ',
  beta: 'β',
  beth: 'ℶ',
  between: '≬',
  bfr: '𝔟',
  bigcap: '⋂',
  bigcirc: '◯',
  bigcup: '⋃',
  bigodot: '⨀',
  bigoplus: '⨁',
  bigotimes: '⨂',
  bigsqcup: '⨆',
  bigstar: '★',
  bigtriangledown: '▽',
  bigtriangleup: '△',
  biguplus: '⨄',
  bigvee: '⋁',
  bigwedge: '⋀',
  bkarow: '⤍',
  blacklozenge: '⧫',
  blacksquare: '▪',
  blacktriangle: '▴',
  blacktriangledown: '▾',
  blacktriangleleft: '◂',
  blacktriangleright: '▸',
  blank: '␣',
  blk12: '▒',
  blk14: '░',
  blk34: '▓',
  block: '█',
  bne: '=⃥',
  bnequiv: '≡⃥',
  bnot: '⌐',
  bopf: '𝕓',
  bot: '⊥',
  bottom: '⊥',
  bowtie: '⋈',
  boxDL: '╗',
  boxDR: '╔',
  boxDl: '╖',
  boxDr: '╓',
  boxH: '═',
  boxHD: '╦',
  boxHU: '╩',
  boxHd: '╤',
  boxHu: '╧',
  boxUL: '╝',
  boxUR: '╚',
  boxUl: '╜',
  boxUr: '╙',
  boxV: '║',
  boxVH: '╬',
  boxVL: '╣',
  boxVR: '╠',
  boxVh: '╫',
  boxVl: '╢',
  boxVr: '╟',
  boxbox: '⧉',
  boxdL: '╕',
  boxdR: '╒',
  boxdl: '┐',
  boxdr: '┌',
  boxh: '─',
  boxhD: '╥',
  boxhU: '╨',
  boxhd: '┬',
  boxhu: '┴',
  boxminus: '⊟',
  boxplus: '⊞',
  boxtimes: '⊠',
  boxuL: '╛',
  boxuR: '╘',
  boxul: '┘',
  boxur: '└',
  boxv: '│',
  boxvH: '╪',
  boxvL: '╡',
  boxvR: '╞',
  boxvh: '┼',
  boxvl: '┤',
  boxvr: '├',
  bprime: '‵',
  breve: '˘',
  brvbar: '¦',
  bscr: '𝒷',
  bsemi: '⁏',
  bsim: '∽',
  bsime: '⋍',
  bsol: '\\',
  bsolb: '⧅',
  bsolhsub: '⟈',
  bull: '•',
  bullet: '•',
  bump: '≎',
  bumpE: '⪮',
  bumpe: '≏',
  bumpeq: '≏',
  cacute: 'ć',
  cap: '∩',
  capand: '⩄',
  capbrcup: '⩉',
  capcap: '⩋',
  capcup: '⩇',
  capdot: '⩀',
  caps: '∩︀',
  caret: '⁁',
  caron: 'ˇ',
  ccaps: '⩍',
  ccaron: 'č',
  ccedil: 'ç',
  ccirc: 'ĉ',
  ccups: '⩌',
  ccupssm: '⩐',
  cdot: 'ċ',
  cedil: '¸',
  cemptyv: '⦲',
  cent: '¢',
  centerdot: '·',
  cfr: '𝔠',
  chcy: 'ч',
  check: '✓',
  checkmark: '✓',
  chi: 'χ',
  cir: '○',
  cirE: '⧃',
  circ: 'ˆ',
  circeq: '≗',
  circlearrowleft: '↺',
  circlearrowright: '↻',
  circledR: '®',
  circledS: 'Ⓢ',
  circledast: '⊛',
  circledcirc: '⊚',
  circleddash: '⊝',
  cire: '≗',
  cirfnint: '⨐',
  cirmid: '⫯',
  cirscir: '⧂',
  clubs: '♣',
  clubsuit: '♣',
  colon: ':',
  colone: '≔',
  coloneq: '≔',
  comma: ',',
  commat: '@',
  comp: '∁',
  compfn: '∘',
  complement: '∁',
  complexes: 'ℂ',
  cong: '≅',
  congdot: '⩭',
  conint: '∮',
  copf: '𝕔',
  coprod: '∐',
  copy: '©',
  copysr: '℗',
  crarr: '↵',
  cross: '✗',
  cscr: '𝒸',
  csub: '⫏',
  csube: '⫑',
  csup: '⫐',
  csupe: '⫒',
  ctdot: '⋯',
  cudarrl: '⤸',
  cudarrr: '⤵',
  cuepr: '⋞',
  cuesc: '⋟',
  cularr: '↶',
  cularrp: '⤽',
  cup: '∪',
  cupbrcap: '⩈',
  cupcap: '⩆',
  cupcup: '⩊',
  cupdot: '⊍',
  cupor: '⩅',
  cups: '∪︀',
  curarr: '↷',
  curarrm: '⤼',
  curlyeqprec: '⋞',
  curlyeqsucc: '⋟',
  curlyvee: '⋎',
  curlywedge: '⋏',
  curren: '¤',
  curvearrowleft: '↶',
  curvearrowright: '↷',
  cuvee: '⋎',
  cuwed: '⋏',
  cwconint: '∲',
  cwint: '∱',
  cylcty: '⌭',
  dArr: '⇓',
  dHar: '⥥',
  dagger: '†',
  daleth: 'ℸ',
  darr: '↓',
  dash: '‐',
  dashv: '⊣',
  dbkarow: '⤏',
  dblac: '˝',
  dcaron: 'ď',
  dcy: 'д',
  dd: 'ⅆ',
  ddagger: '‡',
  ddarr: '⇊',
  ddotseq: '⩷',
  deg: '°',
  delta: 'δ',
  demptyv: '⦱',
  dfisht: '⥿',
  dfr: '𝔡',
  dharl: '⇃',
  dharr: '⇂',
  diam: '⋄',
  diamond: '⋄',
  diamondsuit: '♦',
  diams: '♦',
  die: '¨',
  digamma: 'ϝ',
  disin: '⋲',
  div: '÷',
  divide: '÷',
  divideontimes: '⋇',
  divonx: '⋇',
  djcy: 'ђ',
  dlcorn: '⌞',
  dlcrop: '⌍',
  dollar: '$',
  dopf: '𝕕',
  dot: '˙',
  doteq: '≐',
  doteqdot: '≑',
  dotminus: '∸',
  dotplus: '∔',
  dotsquare: '⊡',
  doublebarwedge: '⌆',
  downarrow: '↓',
  downdownarrows: '⇊',
  downharpoonleft: '⇃',
  downharpoonright: '⇂',
  drbkarow: '⤐',
  drcorn: '⌟',
  drcrop: '⌌',
  dscr: '𝒹',
  dscy: 'ѕ',
  dsol: '⧶',
  dstrok: 'đ',
  dtdot: '⋱',
  dtri: '▿',
  dtrif: '▾',
  duarr: '⇵',
  duhar: '⥯',
  dwangle: '⦦',
  dzcy: 'џ',
  dzigrarr: '⟿',
  eDDot: '⩷',
  eDot: '≑',
  eacute: 'é',
  easter: '⩮',
  ecaron: 'ě',
  ecir: '≖',
  ecirc: 'ê',
  ecolon: '≕',
  ecy: 'э',
  edot: 'ė',
  ee: 'ⅇ',
  efDot: '≒',
  efr: '𝔢',
  eg: '⪚',
  egrave: 'è',
  egs: '⪖',
  egsdot: '⪘',
  el: '⪙',
  elinters: '⏧',
  ell: 'ℓ',
  els: '⪕',
  elsdot: '⪗',
  emacr: 'ē',
  empty: '∅',
  emptyset: '∅',
  emptyv: '∅',
  emsp13: ' ',
  emsp14: ' ',
  emsp: ' ',
  eng: 'ŋ',
  ensp: ' ',
  eogon: 'ę',
  eopf: '𝕖',
  epar: '⋕',
  eparsl: '⧣',
  eplus: '⩱',
  epsi: 'ε',
  epsilon: 'ε',
  epsiv: 'ϵ',
  eqcirc: '≖',
  eqcolon: '≕',
  eqsim: '≂',
  eqslantgtr: '⪖',
  eqslantless: '⪕',
  equals: '=',
  equest: '≟',
  equiv: '≡',
  equivDD: '⩸',
  eqvparsl: '⧥',
  erDot: '≓',
  erarr: '⥱',
  escr: 'ℯ',
  esdot: '≐',
  esim: '≂',
  eta: 'η',
  eth: 'ð',
  euml: 'ë',
  euro: '€',
  excl: '!',
  exist: '∃',
  expectation: 'ℰ',
  exponentiale: 'ⅇ',
  fallingdotseq: '≒',
  fcy: 'ф',
  female: '♀',
  ffilig: 'ﬃ',
  fflig: 'ﬀ',
  ffllig: 'ﬄ',
  ffr: '𝔣',
  filig: 'ﬁ',
  fjlig: 'fj',
  flat: '♭',
  fllig: 'ﬂ',
  fltns: '▱',
  fnof: 'ƒ',
  fopf: '𝕗',
  forall: '∀',
  fork: '⋔',
  forkv: '⫙',
  fpartint: '⨍',
  frac12: '½',
  frac13: '⅓',
  frac14: '¼',
  frac15: '⅕',
  frac16: '⅙',
  frac18: '⅛',
  frac23: '⅔',
  frac25: '⅖',
  frac34: '¾',
  frac35: '⅗',
  frac38: '⅜',
  frac45: '⅘',
  frac56: '⅚',
  frac58: '⅝',
  frac78: '⅞',
  frasl: '⁄',
  frown: '⌢',
  fscr: '𝒻',
  gE: '≧',
  gEl: '⪌',
  gacute: 'ǵ',
  gamma: 'γ',
  gammad: 'ϝ',
  gap: '⪆',
  gbreve: 'ğ',
  gcirc: 'ĝ',
  gcy: 'г',
  gdot: 'ġ',
  ge: '≥',
  gel: '⋛',
  geq: '≥',
  geqq: '≧',
  geqslant: '⩾',
  ges: '⩾',
  gescc: '⪩',
  gesdot: '⪀',
  gesdoto: '⪂',
  gesdotol: '⪄',
  gesl: '⋛︀',
  gesles: '⪔',
  gfr: '𝔤',
  gg: '≫',
  ggg: '⋙',
  gimel: 'ℷ',
  gjcy: 'ѓ',
  gl: '≷',
  glE: '⪒',
  gla: '⪥',
  glj: '⪤',
  gnE: '≩',
  gnap: '⪊',
  gnapprox: '⪊',
  gne: '⪈',
  gneq: '⪈',
  gneqq: '≩',
  gnsim: '⋧',
  gopf: '𝕘',
  grave: '`',
  gscr: 'ℊ',
  gsim: '≳',
  gsime: '⪎',
  gsiml: '⪐',
  gt: '>',
  gtcc: '⪧',
  gtcir: '⩺',
  gtdot: '⋗',
  gtlPar: '⦕',
  gtquest: '⩼',
  gtrapprox: '⪆',
  gtrarr: '⥸',
  gtrdot: '⋗',
  gtreqless: '⋛',
  gtreqqless: '⪌',
  gtrless: '≷',
  gtrsim: '≳',
  gvertneqq: '≩︀',
  gvnE: '≩︀',
  hArr: '⇔',
  hairsp: ' ',
  half: '½',
  hamilt: 'ℋ',
  hardcy: 'ъ',
  harr: '↔',
  harrcir: '⥈',
  harrw: '↭',
  hbar: 'ℏ',
  hcirc: 'ĥ',
  hearts: '♥',
  heartsuit: '♥',
  hellip: '…',
  hercon: '⊹',
  hfr: '𝔥',
  hksearow: '⤥',
  hkswarow: '⤦',
  hoarr: '⇿',
  homtht: '∻',
  hookleftarrow: '↩',
  hookrightarrow: '↪',
  hopf: '𝕙',
  horbar: '―',
  hscr: '𝒽',
  hslash: 'ℏ',
  hstrok: 'ħ',
  hybull: '⁃',
  hyphen: '‐',
  iacute: 'í',
  ic: '⁣',
  icirc: 'î',
  icy: 'и',
  iecy: 'е',
  iexcl: '¡',
  iff: '⇔',
  ifr: '𝔦',
  igrave: 'ì',
  ii: 'ⅈ',
  iiiint: '⨌',
  iiint: '∭',
  iinfin: '⧜',
  iiota: '℩',
  ijlig: 'ĳ',
  imacr: 'ī',
  image: 'ℑ',
  imagline: 'ℐ',
  imagpart: 'ℑ',
  imath: 'ı',
  imof: '⊷',
  imped: 'Ƶ',
  "in": '∈',
  incare: '℅',
  infin: '∞',
  infintie: '⧝',
  inodot: 'ı',
  "int": '∫',
  intcal: '⊺',
  integers: 'ℤ',
  intercal: '⊺',
  intlarhk: '⨗',
  intprod: '⨼',
  iocy: 'ё',
  iogon: 'į',
  iopf: '𝕚',
  iota: 'ι',
  iprod: '⨼',
  iquest: '¿',
  iscr: '𝒾',
  isin: '∈',
  isinE: '⋹',
  isindot: '⋵',
  isins: '⋴',
  isinsv: '⋳',
  isinv: '∈',
  it: '⁢',
  itilde: 'ĩ',
  iukcy: 'і',
  iuml: 'ï',
  jcirc: 'ĵ',
  jcy: 'й',
  jfr: '𝔧',
  jmath: 'ȷ',
  jopf: '𝕛',
  jscr: '𝒿',
  jsercy: 'ј',
  jukcy: 'є',
  kappa: 'κ',
  kappav: 'ϰ',
  kcedil: 'ķ',
  kcy: 'к',
  kfr: '𝔨',
  kgreen: 'ĸ',
  khcy: 'х',
  kjcy: 'ќ',
  kopf: '𝕜',
  kscr: '𝓀',
  lAarr: '⇚',
  lArr: '⇐',
  lAtail: '⤛',
  lBarr: '⤎',
  lE: '≦',
  lEg: '⪋',
  lHar: '⥢',
  lacute: 'ĺ',
  laemptyv: '⦴',
  lagran: 'ℒ',
  lambda: 'λ',
  lang: '⟨',
  langd: '⦑',
  langle: '⟨',
  lap: '⪅',
  laquo: '«',
  larr: '←',
  larrb: '⇤',
  larrbfs: '⤟',
  larrfs: '⤝',
  larrhk: '↩',
  larrlp: '↫',
  larrpl: '⤹',
  larrsim: '⥳',
  larrtl: '↢',
  lat: '⪫',
  latail: '⤙',
  late: '⪭',
  lates: '⪭︀',
  lbarr: '⤌',
  lbbrk: '❲',
  lbrace: '{',
  lbrack: '[',
  lbrke: '⦋',
  lbrksld: '⦏',
  lbrkslu: '⦍',
  lcaron: 'ľ',
  lcedil: 'ļ',
  lceil: '⌈',
  lcub: '{',
  lcy: 'л',
  ldca: '⤶',
  ldquo: '“',
  ldquor: '„',
  ldrdhar: '⥧',
  ldrushar: '⥋',
  ldsh: '↲',
  le: '≤',
  leftarrow: '←',
  leftarrowtail: '↢',
  leftharpoondown: '↽',
  leftharpoonup: '↼',
  leftleftarrows: '⇇',
  leftrightarrow: '↔',
  leftrightarrows: '⇆',
  leftrightharpoons: '⇋',
  leftrightsquigarrow: '↭',
  leftthreetimes: '⋋',
  leg: '⋚',
  leq: '≤',
  leqq: '≦',
  leqslant: '⩽',
  les: '⩽',
  lescc: '⪨',
  lesdot: '⩿',
  lesdoto: '⪁',
  lesdotor: '⪃',
  lesg: '⋚︀',
  lesges: '⪓',
  lessapprox: '⪅',
  lessdot: '⋖',
  lesseqgtr: '⋚',
  lesseqqgtr: '⪋',
  lessgtr: '≶',
  lesssim: '≲',
  lfisht: '⥼',
  lfloor: '⌊',
  lfr: '𝔩',
  lg: '≶',
  lgE: '⪑',
  lhard: '↽',
  lharu: '↼',
  lharul: '⥪',
  lhblk: '▄',
  ljcy: 'љ',
  ll: '≪',
  llarr: '⇇',
  llcorner: '⌞',
  llhard: '⥫',
  lltri: '◺',
  lmidot: 'ŀ',
  lmoust: '⎰',
  lmoustache: '⎰',
  lnE: '≨',
  lnap: '⪉',
  lnapprox: '⪉',
  lne: '⪇',
  lneq: '⪇',
  lneqq: '≨',
  lnsim: '⋦',
  loang: '⟬',
  loarr: '⇽',
  lobrk: '⟦',
  longleftarrow: '⟵',
  longleftrightarrow: '⟷',
  longmapsto: '⟼',
  longrightarrow: '⟶',
  looparrowleft: '↫',
  looparrowright: '↬',
  lopar: '⦅',
  lopf: '𝕝',
  loplus: '⨭',
  lotimes: '⨴',
  lowast: '∗',
  lowbar: '_',
  loz: '◊',
  lozenge: '◊',
  lozf: '⧫',
  lpar: '(',
  lparlt: '⦓',
  lrarr: '⇆',
  lrcorner: '⌟',
  lrhar: '⇋',
  lrhard: '⥭',
  lrm: '‎',
  lrtri: '⊿',
  lsaquo: '‹',
  lscr: '𝓁',
  lsh: '↰',
  lsim: '≲',
  lsime: '⪍',
  lsimg: '⪏',
  lsqb: '[',
  lsquo: '‘',
  lsquor: '‚',
  lstrok: 'ł',
  lt: '<',
  ltcc: '⪦',
  ltcir: '⩹',
  ltdot: '⋖',
  lthree: '⋋',
  ltimes: '⋉',
  ltlarr: '⥶',
  ltquest: '⩻',
  ltrPar: '⦖',
  ltri: '◃',
  ltrie: '⊴',
  ltrif: '◂',
  lurdshar: '⥊',
  luruhar: '⥦',
  lvertneqq: '≨︀',
  lvnE: '≨︀',
  mDDot: '∺',
  macr: '¯',
  male: '♂',
  malt: '✠',
  maltese: '✠',
  map: '↦',
  mapsto: '↦',
  mapstodown: '↧',
  mapstoleft: '↤',
  mapstoup: '↥',
  marker: '▮',
  mcomma: '⨩',
  mcy: 'м',
  mdash: '—',
  measuredangle: '∡',
  mfr: '𝔪',
  mho: '℧',
  micro: 'µ',
  mid: '∣',
  midast: '*',
  midcir: '⫰',
  middot: '·',
  minus: '−',
  minusb: '⊟',
  minusd: '∸',
  minusdu: '⨪',
  mlcp: '⫛',
  mldr: '…',
  mnplus: '∓',
  models: '⊧',
  mopf: '𝕞',
  mp: '∓',
  mscr: '𝓂',
  mstpos: '∾',
  mu: 'μ',
  multimap: '⊸',
  mumap: '⊸',
  nGg: '⋙̸',
  nGt: '≫⃒',
  nGtv: '≫̸',
  nLeftarrow: '⇍',
  nLeftrightarrow: '⇎',
  nLl: '⋘̸',
  nLt: '≪⃒',
  nLtv: '≪̸',
  nRightarrow: '⇏',
  nVDash: '⊯',
  nVdash: '⊮',
  nabla: '∇',
  nacute: 'ń',
  nang: '∠⃒',
  nap: '≉',
  napE: '⩰̸',
  napid: '≋̸',
  napos: 'ŉ',
  napprox: '≉',
  natur: '♮',
  natural: '♮',
  naturals: 'ℕ',
  nbsp: ' ',
  nbump: '≎̸',
  nbumpe: '≏̸',
  ncap: '⩃',
  ncaron: 'ň',
  ncedil: 'ņ',
  ncong: '≇',
  ncongdot: '⩭̸',
  ncup: '⩂',
  ncy: 'н',
  ndash: '–',
  ne: '≠',
  neArr: '⇗',
  nearhk: '⤤',
  nearr: '↗',
  nearrow: '↗',
  nedot: '≐̸',
  nequiv: '≢',
  nesear: '⤨',
  nesim: '≂̸',
  nexist: '∄',
  nexists: '∄',
  nfr: '𝔫',
  ngE: '≧̸',
  nge: '≱',
  ngeq: '≱',
  ngeqq: '≧̸',
  ngeqslant: '⩾̸',
  nges: '⩾̸',
  ngsim: '≵',
  ngt: '≯',
  ngtr: '≯',
  nhArr: '⇎',
  nharr: '↮',
  nhpar: '⫲',
  ni: '∋',
  nis: '⋼',
  nisd: '⋺',
  niv: '∋',
  njcy: 'њ',
  nlArr: '⇍',
  nlE: '≦̸',
  nlarr: '↚',
  nldr: '‥',
  nle: '≰',
  nleftarrow: '↚',
  nleftrightarrow: '↮',
  nleq: '≰',
  nleqq: '≦̸',
  nleqslant: '⩽̸',
  nles: '⩽̸',
  nless: '≮',
  nlsim: '≴',
  nlt: '≮',
  nltri: '⋪',
  nltrie: '⋬',
  nmid: '∤',
  nopf: '𝕟',
  not: '¬',
  notin: '∉',
  notinE: '⋹̸',
  notindot: '⋵̸',
  notinva: '∉',
  notinvb: '⋷',
  notinvc: '⋶',
  notni: '∌',
  notniva: '∌',
  notnivb: '⋾',
  notnivc: '⋽',
  npar: '∦',
  nparallel: '∦',
  nparsl: '⫽⃥',
  npart: '∂̸',
  npolint: '⨔',
  npr: '⊀',
  nprcue: '⋠',
  npre: '⪯̸',
  nprec: '⊀',
  npreceq: '⪯̸',
  nrArr: '⇏',
  nrarr: '↛',
  nrarrc: '⤳̸',
  nrarrw: '↝̸',
  nrightarrow: '↛',
  nrtri: '⋫',
  nrtrie: '⋭',
  nsc: '⊁',
  nsccue: '⋡',
  nsce: '⪰̸',
  nscr: '𝓃',
  nshortmid: '∤',
  nshortparallel: '∦',
  nsim: '≁',
  nsime: '≄',
  nsimeq: '≄',
  nsmid: '∤',
  nspar: '∦',
  nsqsube: '⋢',
  nsqsupe: '⋣',
  nsub: '⊄',
  nsubE: '⫅̸',
  nsube: '⊈',
  nsubset: '⊂⃒',
  nsubseteq: '⊈',
  nsubseteqq: '⫅̸',
  nsucc: '⊁',
  nsucceq: '⪰̸',
  nsup: '⊅',
  nsupE: '⫆̸',
  nsupe: '⊉',
  nsupset: '⊃⃒',
  nsupseteq: '⊉',
  nsupseteqq: '⫆̸',
  ntgl: '≹',
  ntilde: 'ñ',
  ntlg: '≸',
  ntriangleleft: '⋪',
  ntrianglelefteq: '⋬',
  ntriangleright: '⋫',
  ntrianglerighteq: '⋭',
  nu: 'ν',
  num: '#',
  numero: '№',
  numsp: ' ',
  nvDash: '⊭',
  nvHarr: '⤄',
  nvap: '≍⃒',
  nvdash: '⊬',
  nvge: '≥⃒',
  nvgt: '>⃒',
  nvinfin: '⧞',
  nvlArr: '⤂',
  nvle: '≤⃒',
  nvlt: '<⃒',
  nvltrie: '⊴⃒',
  nvrArr: '⤃',
  nvrtrie: '⊵⃒',
  nvsim: '∼⃒',
  nwArr: '⇖',
  nwarhk: '⤣',
  nwarr: '↖',
  nwarrow: '↖',
  nwnear: '⤧',
  oS: 'Ⓢ',
  oacute: 'ó',
  oast: '⊛',
  ocir: '⊚',
  ocirc: 'ô',
  ocy: 'о',
  odash: '⊝',
  odblac: 'ő',
  odiv: '⨸',
  odot: '⊙',
  odsold: '⦼',
  oelig: 'œ',
  ofcir: '⦿',
  ofr: '𝔬',
  ogon: '˛',
  ograve: 'ò',
  ogt: '⧁',
  ohbar: '⦵',
  ohm: 'Ω',
  oint: '∮',
  olarr: '↺',
  olcir: '⦾',
  olcross: '⦻',
  oline: '‾',
  olt: '⧀',
  omacr: 'ō',
  omega: 'ω',
  omicron: 'ο',
  omid: '⦶',
  ominus: '⊖',
  oopf: '𝕠',
  opar: '⦷',
  operp: '⦹',
  oplus: '⊕',
  or: '∨',
  orarr: '↻',
  ord: '⩝',
  order: 'ℴ',
  orderof: 'ℴ',
  ordf: 'ª',
  ordm: 'º',
  origof: '⊶',
  oror: '⩖',
  orslope: '⩗',
  orv: '⩛',
  oscr: 'ℴ',
  oslash: 'ø',
  osol: '⊘',
  otilde: 'õ',
  otimes: '⊗',
  otimesas: '⨶',
  ouml: 'ö',
  ovbar: '⌽',
  par: '∥',
  para: '¶',
  parallel: '∥',
  parsim: '⫳',
  parsl: '⫽',
  part: '∂',
  pcy: 'п',
  percnt: '%',
  period: '.',
  permil: '‰',
  perp: '⊥',
  pertenk: '‱',
  pfr: '𝔭',
  phi: 'φ',
  phiv: 'ϕ',
  phmmat: 'ℳ',
  phone: '☎',
  pi: 'π',
  pitchfork: '⋔',
  piv: 'ϖ',
  planck: 'ℏ',
  planckh: 'ℎ',
  plankv: 'ℏ',
  plus: '+',
  plusacir: '⨣',
  plusb: '⊞',
  pluscir: '⨢',
  plusdo: '∔',
  plusdu: '⨥',
  pluse: '⩲',
  plusmn: '±',
  plussim: '⨦',
  plustwo: '⨧',
  pm: '±',
  pointint: '⨕',
  popf: '𝕡',
  pound: '£',
  pr: '≺',
  prE: '⪳',
  prap: '⪷',
  prcue: '≼',
  pre: '⪯',
  prec: '≺',
  precapprox: '⪷',
  preccurlyeq: '≼',
  preceq: '⪯',
  precnapprox: '⪹',
  precneqq: '⪵',
  precnsim: '⋨',
  precsim: '≾',
  prime: '′',
  primes: 'ℙ',
  prnE: '⪵',
  prnap: '⪹',
  prnsim: '⋨',
  prod: '∏',
  profalar: '⌮',
  profline: '⌒',
  profsurf: '⌓',
  prop: '∝',
  propto: '∝',
  prsim: '≾',
  prurel: '⊰',
  pscr: '𝓅',
  psi: 'ψ',
  puncsp: ' ',
  qfr: '𝔮',
  qint: '⨌',
  qopf: '𝕢',
  qprime: '⁗',
  qscr: '𝓆',
  quaternions: 'ℍ',
  quatint: '⨖',
  quest: '?',
  questeq: '≟',
  quot: '"',
  rAarr: '⇛',
  rArr: '⇒',
  rAtail: '⤜',
  rBarr: '⤏',
  rHar: '⥤',
  race: '∽̱',
  racute: 'ŕ',
  radic: '√',
  raemptyv: '⦳',
  rang: '⟩',
  rangd: '⦒',
  range: '⦥',
  rangle: '⟩',
  raquo: '»',
  rarr: '→',
  rarrap: '⥵',
  rarrb: '⇥',
  rarrbfs: '⤠',
  rarrc: '⤳',
  rarrfs: '⤞',
  rarrhk: '↪',
  rarrlp: '↬',
  rarrpl: '⥅',
  rarrsim: '⥴',
  rarrtl: '↣',
  rarrw: '↝',
  ratail: '⤚',
  ratio: '∶',
  rationals: 'ℚ',
  rbarr: '⤍',
  rbbrk: '❳',
  rbrace: '}',
  rbrack: ']',
  rbrke: '⦌',
  rbrksld: '⦎',
  rbrkslu: '⦐',
  rcaron: 'ř',
  rcedil: 'ŗ',
  rceil: '⌉',
  rcub: '}',
  rcy: 'р',
  rdca: '⤷',
  rdldhar: '⥩',
  rdquo: '”',
  rdquor: '”',
  rdsh: '↳',
  real: 'ℜ',
  realine: 'ℛ',
  realpart: 'ℜ',
  reals: 'ℝ',
  rect: '▭',
  reg: '®',
  rfisht: '⥽',
  rfloor: '⌋',
  rfr: '𝔯',
  rhard: '⇁',
  rharu: '⇀',
  rharul: '⥬',
  rho: 'ρ',
  rhov: 'ϱ',
  rightarrow: '→',
  rightarrowtail: '↣',
  rightharpoondown: '⇁',
  rightharpoonup: '⇀',
  rightleftarrows: '⇄',
  rightleftharpoons: '⇌',
  rightrightarrows: '⇉',
  rightsquigarrow: '↝',
  rightthreetimes: '⋌',
  ring: '˚',
  risingdotseq: '≓',
  rlarr: '⇄',
  rlhar: '⇌',
  rlm: '‏',
  rmoust: '⎱',
  rmoustache: '⎱',
  rnmid: '⫮',
  roang: '⟭',
  roarr: '⇾',
  robrk: '⟧',
  ropar: '⦆',
  ropf: '𝕣',
  roplus: '⨮',
  rotimes: '⨵',
  rpar: ')',
  rpargt: '⦔',
  rppolint: '⨒',
  rrarr: '⇉',
  rsaquo: '›',
  rscr: '𝓇',
  rsh: '↱',
  rsqb: ']',
  rsquo: '’',
  rsquor: '’',
  rthree: '⋌',
  rtimes: '⋊',
  rtri: '▹',
  rtrie: '⊵',
  rtrif: '▸',
  rtriltri: '⧎',
  ruluhar: '⥨',
  rx: '℞',
  sacute: 'ś',
  sbquo: '‚',
  sc: '≻',
  scE: '⪴',
  scap: '⪸',
  scaron: 'š',
  sccue: '≽',
  sce: '⪰',
  scedil: 'ş',
  scirc: 'ŝ',
  scnE: '⪶',
  scnap: '⪺',
  scnsim: '⋩',
  scpolint: '⨓',
  scsim: '≿',
  scy: 'с',
  sdot: '⋅',
  sdotb: '⊡',
  sdote: '⩦',
  seArr: '⇘',
  searhk: '⤥',
  searr: '↘',
  searrow: '↘',
  sect: '§',
  semi: ';',
  seswar: '⤩',
  setminus: '∖',
  setmn: '∖',
  sext: '✶',
  sfr: '𝔰',
  sfrown: '⌢',
  sharp: '♯',
  shchcy: 'щ',
  shcy: 'ш',
  shortmid: '∣',
  shortparallel: '∥',
  shy: '­',
  sigma: 'σ',
  sigmaf: 'ς',
  sigmav: 'ς',
  sim: '∼',
  simdot: '⩪',
  sime: '≃',
  simeq: '≃',
  simg: '⪞',
  simgE: '⪠',
  siml: '⪝',
  simlE: '⪟',
  simne: '≆',
  simplus: '⨤',
  simrarr: '⥲',
  slarr: '←',
  smallsetminus: '∖',
  smashp: '⨳',
  smeparsl: '⧤',
  smid: '∣',
  smile: '⌣',
  smt: '⪪',
  smte: '⪬',
  smtes: '⪬︀',
  softcy: 'ь',
  sol: '/',
  solb: '⧄',
  solbar: '⌿',
  sopf: '𝕤',
  spades: '♠',
  spadesuit: '♠',
  spar: '∥',
  sqcap: '⊓',
  sqcaps: '⊓︀',
  sqcup: '⊔',
  sqcups: '⊔︀',
  sqsub: '⊏',
  sqsube: '⊑',
  sqsubset: '⊏',
  sqsubseteq: '⊑',
  sqsup: '⊐',
  sqsupe: '⊒',
  sqsupset: '⊐',
  sqsupseteq: '⊒',
  squ: '□',
  square: '□',
  squarf: '▪',
  squf: '▪',
  srarr: '→',
  sscr: '𝓈',
  ssetmn: '∖',
  ssmile: '⌣',
  sstarf: '⋆',
  star: '☆',
  starf: '★',
  straightepsilon: 'ϵ',
  straightphi: 'ϕ',
  strns: '¯',
  sub: '⊂',
  subE: '⫅',
  subdot: '⪽',
  sube: '⊆',
  subedot: '⫃',
  submult: '⫁',
  subnE: '⫋',
  subne: '⊊',
  subplus: '⪿',
  subrarr: '⥹',
  subset: '⊂',
  subseteq: '⊆',
  subseteqq: '⫅',
  subsetneq: '⊊',
  subsetneqq: '⫋',
  subsim: '⫇',
  subsub: '⫕',
  subsup: '⫓',
  succ: '≻',
  succapprox: '⪸',
  succcurlyeq: '≽',
  succeq: '⪰',
  succnapprox: '⪺',
  succneqq: '⪶',
  succnsim: '⋩',
  succsim: '≿',
  sum: '∑',
  sung: '♪',
  sup1: '¹',
  sup2: '²',
  sup3: '³',
  sup: '⊃',
  supE: '⫆',
  supdot: '⪾',
  supdsub: '⫘',
  supe: '⊇',
  supedot: '⫄',
  suphsol: '⟉',
  suphsub: '⫗',
  suplarr: '⥻',
  supmult: '⫂',
  supnE: '⫌',
  supne: '⊋',
  supplus: '⫀',
  supset: '⊃',
  supseteq: '⊇',
  supseteqq: '⫆',
  supsetneq: '⊋',
  supsetneqq: '⫌',
  supsim: '⫈',
  supsub: '⫔',
  supsup: '⫖',
  swArr: '⇙',
  swarhk: '⤦',
  swarr: '↙',
  swarrow: '↙',
  swnwar: '⤪',
  szlig: 'ß',
  target: '⌖',
  tau: 'τ',
  tbrk: '⎴',
  tcaron: 'ť',
  tcedil: 'ţ',
  tcy: 'т',
  tdot: '⃛',
  telrec: '⌕',
  tfr: '𝔱',
  there4: '∴',
  therefore: '∴',
  theta: 'θ',
  thetasym: 'ϑ',
  thetav: 'ϑ',
  thickapprox: '≈',
  thicksim: '∼',
  thinsp: ' ',
  thkap: '≈',
  thksim: '∼',
  thorn: 'þ',
  tilde: '˜',
  times: '×',
  timesb: '⊠',
  timesbar: '⨱',
  timesd: '⨰',
  tint: '∭',
  toea: '⤨',
  top: '⊤',
  topbot: '⌶',
  topcir: '⫱',
  topf: '𝕥',
  topfork: '⫚',
  tosa: '⤩',
  tprime: '‴',
  trade: '™',
  triangle: '▵',
  triangledown: '▿',
  triangleleft: '◃',
  trianglelefteq: '⊴',
  triangleq: '≜',
  triangleright: '▹',
  trianglerighteq: '⊵',
  tridot: '◬',
  trie: '≜',
  triminus: '⨺',
  triplus: '⨹',
  trisb: '⧍',
  tritime: '⨻',
  trpezium: '⏢',
  tscr: '𝓉',
  tscy: 'ц',
  tshcy: 'ћ',
  tstrok: 'ŧ',
  twixt: '≬',
  twoheadleftarrow: '↞',
  twoheadrightarrow: '↠',
  uArr: '⇑',
  uHar: '⥣',
  uacute: 'ú',
  uarr: '↑',
  ubrcy: 'ў',
  ubreve: 'ŭ',
  ucirc: 'û',
  ucy: 'у',
  udarr: '⇅',
  udblac: 'ű',
  udhar: '⥮',
  ufisht: '⥾',
  ufr: '𝔲',
  ugrave: 'ù',
  uharl: '↿',
  uharr: '↾',
  uhblk: '▀',
  ulcorn: '⌜',
  ulcorner: '⌜',
  ulcrop: '⌏',
  ultri: '◸',
  umacr: 'ū',
  uml: '¨',
  uogon: 'ų',
  uopf: '𝕦',
  uparrow: '↑',
  updownarrow: '↕',
  upharpoonleft: '↿',
  upharpoonright: '↾',
  uplus: '⊎',
  upsi: 'υ',
  upsih: 'ϒ',
  upsilon: 'υ',
  upuparrows: '⇈',
  urcorn: '⌝',
  urcorner: '⌝',
  urcrop: '⌎',
  uring: 'ů',
  urtri: '◹',
  uscr: '𝓊',
  utdot: '⋰',
  utilde: 'ũ',
  utri: '▵',
  utrif: '▴',
  uuarr: '⇈',
  uuml: 'ü',
  uwangle: '⦧',
  vArr: '⇕',
  vBar: '⫨',
  vBarv: '⫩',
  vDash: '⊨',
  vangrt: '⦜',
  varepsilon: 'ϵ',
  varkappa: 'ϰ',
  varnothing: '∅',
  varphi: 'ϕ',
  varpi: 'ϖ',
  varpropto: '∝',
  varr: '↕',
  varrho: 'ϱ',
  varsigma: 'ς',
  varsubsetneq: '⊊︀',
  varsubsetneqq: '⫋︀',
  varsupsetneq: '⊋︀',
  varsupsetneqq: '⫌︀',
  vartheta: 'ϑ',
  vartriangleleft: '⊲',
  vartriangleright: '⊳',
  vcy: 'в',
  vdash: '⊢',
  vee: '∨',
  veebar: '⊻',
  veeeq: '≚',
  vellip: '⋮',
  verbar: '|',
  vert: '|',
  vfr: '𝔳',
  vltri: '⊲',
  vnsub: '⊂⃒',
  vnsup: '⊃⃒',
  vopf: '𝕧',
  vprop: '∝',
  vrtri: '⊳',
  vscr: '𝓋',
  vsubnE: '⫋︀',
  vsubne: '⊊︀',
  vsupnE: '⫌︀',
  vsupne: '⊋︀',
  vzigzag: '⦚',
  wcirc: 'ŵ',
  wedbar: '⩟',
  wedge: '∧',
  wedgeq: '≙',
  weierp: '℘',
  wfr: '𝔴',
  wopf: '𝕨',
  wp: '℘',
  wr: '≀',
  wreath: '≀',
  wscr: '𝓌',
  xcap: '⋂',
  xcirc: '◯',
  xcup: '⋃',
  xdtri: '▽',
  xfr: '𝔵',
  xhArr: '⟺',
  xharr: '⟷',
  xi: 'ξ',
  xlArr: '⟸',
  xlarr: '⟵',
  xmap: '⟼',
  xnis: '⋻',
  xodot: '⨀',
  xopf: '𝕩',
  xoplus: '⨁',
  xotime: '⨂',
  xrArr: '⟹',
  xrarr: '⟶',
  xscr: '𝓍',
  xsqcup: '⨆',
  xuplus: '⨄',
  xutri: '△',
  xvee: '⋁',
  xwedge: '⋀',
  yacute: 'ý',
  yacy: 'я',
  ycirc: 'ŷ',
  ycy: 'ы',
  yen: '¥',
  yfr: '𝔶',
  yicy: 'ї',
  yopf: '𝕪',
  yscr: '𝓎',
  yucy: 'ю',
  yuml: 'ÿ',
  zacute: 'ź',
  zcaron: 'ž',
  zcy: 'з',
  zdot: 'ż',
  zeetrf: 'ℨ',
  zeta: 'ζ',
  zfr: '𝔷',
  zhcy: 'ж',
  zigrarr: '⇝',
  zopf: '𝕫',
  zscr: '𝓏',
  zwj: '‍',
  zwnj: '‌'
};

var own$7 = {}.hasOwnProperty;

/**
 * Decode a single character reference (without the `&` or `;`).
 * You probably only need this when you’re building parsers yourself that follow
 * different rules compared to HTML.
 * This is optimized to be tiny in browsers.
 *
 * @param {string} value
 *   `notin` (named), `#123` (deci), `#x123` (hexa).
 * @returns {string|false}
 *   Decoded reference.
 */
function decodeNamedCharacterReference(value) {
  return own$7.call(characterEntities, value) ? characterEntities[value] : false;
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/** @type {Construct} */
var characterReference = {
  name: 'characterReference',
  tokenize: tokenizeCharacterReference
};
/** @type {Tokenizer} */

function tokenizeCharacterReference(effects, ok, nok) {
  var self = this;
  var size = 0;
  /** @type {number} */

  var max;
  /** @type {(code: Code) => code is number} */

  var test;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('characterReference');
    effects.enter('characterReferenceMarker');
    effects.consume(code);
    effects.exit('characterReferenceMarker');
    return open;
  }
  /** @type {State} */

  function open(code) {
    if (code === 35) {
      effects.enter('characterReferenceMarkerNumeric');
      effects.consume(code);
      effects.exit('characterReferenceMarkerNumeric');
      return numeric;
    }
    effects.enter('characterReferenceValue');
    max = 31;
    test = asciiAlphanumeric;
    return value(code);
  }
  /** @type {State} */

  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter('characterReferenceMarkerHexadecimal');
      effects.consume(code);
      effects.exit('characterReferenceMarkerHexadecimal');
      effects.enter('characterReferenceValue');
      max = 6;
      test = asciiHexDigit;
      return value;
    }
    effects.enter('characterReferenceValue');
    max = 7;
    test = asciiDigit;
    return value(code);
  }
  /** @type {State} */

  function value(code) {
    /** @type {Token} */
    var token;
    if (code === 59 && size) {
      token = effects.exit('characterReferenceValue');
      if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token))) {
        return nok(code);
      }
      effects.enter('characterReferenceMarker');
      effects.consume(code);
      effects.exit('characterReferenceMarker');
      effects.exit('characterReference');
      return ok;
    }
    if (test(code) && size++ < max) {
      effects.consume(code);
      return value;
    }
    return nok(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/** @type {Construct} */
var codeFenced = {
  name: 'codeFenced',
  tokenize: tokenizeCodeFenced,
  concrete: true
};
/** @type {Tokenizer} */

function tokenizeCodeFenced(effects, ok, nok) {
  var self = this;
  /** @type {Construct} */

  var closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: true
  };
  /** @type {Construct} */

  var nonLazyLine = {
    tokenize: tokenizeNonLazyLine,
    partial: true
  };
  var tail = this.events[this.events.length - 1];
  var initialPrefix = tail && tail[1].type === 'linePrefix' ? tail[2].sliceSerialize(tail[1], true).length : 0;
  var sizeOpen = 0;
  /** @type {NonNullable<Code>} */

  var marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('codeFenced');
    effects.enter('codeFencedFence');
    effects.enter('codeFencedFenceSequence');
    marker = code;
    return sequenceOpen(code);
  }
  /** @type {State} */

  function sequenceOpen(code) {
    if (code === marker) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit('codeFencedFenceSequence');
    return sizeOpen < 3 ? nok(code) : factorySpace(effects, infoOpen, 'whitespace')(code);
  }
  /** @type {State} */

  function infoOpen(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code);
    }
    effects.enter('codeFencedFenceInfo');
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return info(code);
  }
  /** @type {State} */

  function info(code) {
    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceInfo');
      return factorySpace(effects, infoAfter, 'whitespace')(code);
    }
    if (code === 96 && code === marker) return nok(code);
    effects.consume(code);
    return info;
  }
  /** @type {State} */

  function infoAfter(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code);
    }
    effects.enter('codeFencedFenceMeta');
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return meta(code);
  }
  /** @type {State} */

  function meta(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceMeta');
      return openAfter(code);
    }
    if (code === 96 && code === marker) return nok(code);
    effects.consume(code);
    return meta;
  }
  /** @type {State} */

  function openAfter(code) {
    effects.exit('codeFencedFence');
    return self.interrupt ? ok(code) : contentStart(code);
  }
  /** @type {State} */

  function contentStart(code) {
    if (code === null) {
      return after(code);
    }
    if (markdownLineEnding(code)) {
      return effects.attempt(nonLazyLine, effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, contentStart, 'linePrefix', initialPrefix + 1) : contentStart), after)(code);
    }
    effects.enter('codeFlowValue');
    return contentContinue(code);
  }
  /** @type {State} */

  function contentContinue(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue');
      return contentStart(code);
    }
    effects.consume(code);
    return contentContinue;
  }
  /** @type {State} */

  function after(code) {
    effects.exit('codeFenced');
    return ok(code);
  }
  /** @type {Tokenizer} */

  function tokenizeNonLazyLine(effects, ok, nok) {
    var self = this;
    return start;
    /** @type {State} */

    function start(code) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return lineStart;
    }
    /** @type {State} */

    function lineStart(code) {
      return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
    }
  }
  /** @type {Tokenizer} */

  function tokenizeClosingFence(effects, ok, nok) {
    var size = 0;
    return factorySpace(effects, closingSequenceStart, 'linePrefix', this.parser.constructs.disable["null"].includes('codeIndented') ? undefined : 4);
    /** @type {State} */

    function closingSequenceStart(code) {
      effects.enter('codeFencedFence');
      effects.enter('codeFencedFenceSequence');
      return closingSequence(code);
    }
    /** @type {State} */

    function closingSequence(code) {
      if (code === marker) {
        effects.consume(code);
        size++;
        return closingSequence;
      }
      if (size < sizeOpen) return nok(code);
      effects.exit('codeFencedFenceSequence');
      return factorySpace(effects, closingSequenceEnd, 'whitespace')(code);
    }
    /** @type {State} */

    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('codeFencedFence');
        return ok(code);
      }
      return nok(code);
    }
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
var codeIndented = {
  name: 'codeIndented',
  tokenize: tokenizeCodeIndented
};
/** @type {Construct} */

var indentedContent = {
  tokenize: tokenizeIndentedContent,
  partial: true
};
/** @type {Tokenizer} */

function tokenizeCodeIndented(effects, ok, nok) {
  var self = this;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('codeIndented');
    return factorySpace(effects, afterStartPrefix, 'linePrefix', 4 + 1)(code);
  }
  /** @type {State} */

  function afterStartPrefix(code) {
    var tail = self.events[self.events.length - 1];
    return tail && tail[1].type === 'linePrefix' && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code) : nok(code);
  }
  /** @type {State} */

  function afterPrefix(code) {
    if (code === null) {
      return after(code);
    }
    if (markdownLineEnding(code)) {
      return effects.attempt(indentedContent, afterPrefix, after)(code);
    }
    effects.enter('codeFlowValue');
    return content(code);
  }
  /** @type {State} */

  function content(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue');
      return afterPrefix(code);
    }
    effects.consume(code);
    return content;
  }
  /** @type {State} */

  function after(code) {
    effects.exit('codeIndented');
    return ok(code);
  }
}
/** @type {Tokenizer} */

function tokenizeIndentedContent(effects, ok, nok) {
  var self = this;
  return start;
  /** @type {State} */

  function start(code) {
    // If this is a lazy line, it can’t be code.
    if (self.parser.lazy[self.now().line]) {
      return nok(code);
    }
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return start;
    }
    return factorySpace(effects, afterPrefix, 'linePrefix', 4 + 1)(code);
  }
  /** @type {State} */

  function afterPrefix(code) {
    var tail = self.events[self.events.length - 1];
    return tail && tail[1].type === 'linePrefix' && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok(code) : markdownLineEnding(code) ? start(code) : nok(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Previous} Previous
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
var codeText = {
  name: 'codeText',
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous: previous
};
/** @type {Resolver} */

function resolveCodeText(events) {
  var tailExitIndex = events.length - 4;
  var headEnterIndex = 3;
  /** @type {number} */

  var index;
  /** @type {number|undefined} */

  var enter; // If we start and end with an EOL or a space.

  if ((events[headEnterIndex][1].type === 'lineEnding' || events[headEnterIndex][1].type === 'space') && (events[tailExitIndex][1].type === 'lineEnding' || events[tailExitIndex][1].type === 'space')) {
    index = headEnterIndex; // And we have data.

    while (++index < tailExitIndex) {
      if (events[index][1].type === 'codeTextData') {
        // Then we have padding.
        events[headEnterIndex][1].type = 'codeTextPadding';
        events[tailExitIndex][1].type = 'codeTextPadding';
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  } // Merge adjacent spaces and data.

  index = headEnterIndex - 1;
  tailExitIndex++;
  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
        enter = index;
      }
    } else if (index === tailExitIndex || events[index][1].type === 'lineEnding') {
      events[enter][1].type = 'codeTextData';
      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end;
        events.splice(enter + 2, index - enter - 2);
        tailExitIndex -= index - enter - 2;
        index = enter + 2;
      }
      enter = undefined;
    }
  }
  return events;
}
/** @type {Previous} */

function previous(code) {
  // If there is a previous code, there will always be a tail.
  return code !== 96 || this.events[this.events.length - 1][1].type === 'characterEscape';
}
/** @type {Tokenizer} */

function tokenizeCodeText(effects, ok, nok) {
  var sizeOpen = 0;
  /** @type {number} */

  var size;
  /** @type {Token} */

  var token;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('codeText');
    effects.enter('codeTextSequence');
    return openingSequence(code);
  }
  /** @type {State} */

  function openingSequence(code) {
    if (code === 96) {
      effects.consume(code);
      sizeOpen++;
      return openingSequence;
    }
    effects.exit('codeTextSequence');
    return gap(code);
  }
  /** @type {State} */

  function gap(code) {
    // EOF.
    if (code === null) {
      return nok(code);
    } // Closing fence?
    // Could also be data.

    if (code === 96) {
      token = effects.enter('codeTextSequence');
      size = 0;
      return closingSequence(code);
    } // Tabs don’t work, and virtual spaces don’t make sense.

    if (code === 32) {
      effects.enter('space');
      effects.consume(code);
      effects.exit('space');
      return gap;
    }
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return gap;
    } // Data.

    effects.enter('codeTextData');
    return data(code);
  } // In code.

  /** @type {State} */

  function data(code) {
    if (code === null || code === 32 || code === 96 || markdownLineEnding(code)) {
      effects.exit('codeTextData');
      return gap(code);
    }
    effects.consume(code);
    return data;
  } // Closing fence.

  /** @type {State} */

  function closingSequence(code) {
    // More.
    if (code === 96) {
      effects.consume(code);
      size++;
      return closingSequence;
    } // Done!

    if (size === sizeOpen) {
      effects.exit('codeTextSequence');
      effects.exit('codeText');
      return ok(code);
    } // More or less accents: mark as data.

    token.type = 'codeTextData';
    return data(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Event} Event
 */

/**
 * Tokenize subcontent.
 *
 * @param {Event[]} events
 * @returns {boolean}
 */
function subtokenize(events) {
  /** @type {Record<string, number>} */
  var jumps = {};
  var index = -1;
  /** @type {Event} */

  var event;
  /** @type {number|undefined} */

  var lineIndex;
  /** @type {number} */

  var otherIndex;
  /** @type {Event} */

  var otherEvent;
  /** @type {Event[]} */

  var parameters;
  /** @type {Event[]} */

  var subevents;
  /** @type {boolean|undefined} */

  var more;
  while (++index < events.length) {
    while (index in jumps) {
      index = jumps[index];
    }
    event = events[index]; // Add a hook for the GFM tasklist extension, which needs to know if text
    // is in the first content of a list item.

    if (index && event[1].type === 'chunkFlow' && events[index - 1][1].type === 'listItemPrefix') {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === 'lineEndingBlank') {
        otherIndex += 2;
      }
      if (otherIndex < subevents.length && subevents[otherIndex][1].type === 'content') {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === 'content') {
            break;
          }
          if (subevents[otherIndex][1].type === 'chunkText') {
            subevents[otherIndex][1]._isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    } // Enter.

    if (event[0] === 'enter') {
      if (event[1].contentType) {
        Object.assign(jumps, subcontent(events, index));
        index = jumps[index];
        more = true;
      }
    } // Exit.
    else if (event[1]._container) {
      otherIndex = index;
      lineIndex = undefined;
      while (otherIndex--) {
        otherEvent = events[otherIndex];
        if (otherEvent[1].type === 'lineEnding' || otherEvent[1].type === 'lineEndingBlank') {
          if (otherEvent[0] === 'enter') {
            if (lineIndex) {
              events[lineIndex][1].type = 'lineEndingBlank';
            }
            otherEvent[1].type = 'lineEnding';
            lineIndex = otherIndex;
          }
        } else {
          break;
        }
      }
      if (lineIndex) {
        // Fix position.
        event[1].end = Object.assign({}, events[lineIndex][1].start); // Switch container exit w/ line endings.

        parameters = events.slice(lineIndex, index);
        parameters.unshift(event);
        splice(events, lineIndex, index - lineIndex + 1, parameters);
      }
    }
  }
  return !more;
}
/**
 * Tokenize embedded tokens.
 *
 * @param {Event[]} events
 * @param {number} eventIndex
 * @returns {Record<string, number>}
 */

function subcontent(events, eventIndex) {
  var token = events[eventIndex][1];
  var context = events[eventIndex][2];
  var startPosition = eventIndex - 1;
  /** @type {number[]} */

  var startPositions = [];
  var tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
  var childEvents = tokenizer.events;
  /** @type {[number, number][]} */

  var jumps = [];
  /** @type {Record<string, number>} */

  var gaps = {};
  /** @type {Chunk[]} */

  var stream;
  /** @type {Token|undefined} */

  var previous;
  var index = -1;
  /** @type {Token|undefined} */

  var current = token;
  var adjust = 0;
  var start = 0;
  var breaks = [start]; // Loop forward through the linked tokens to pass them in order to the
  // subtokenizer.

  while (current) {
    // Find the position of the event for this token.
    while (events[++startPosition][1] !== current) {
      // Empty.
    }
    startPositions.push(startPosition);
    if (!current._tokenizer) {
      stream = context.sliceStream(current);
      if (!current.next) {
        stream.push(null);
      }
      if (previous) {
        tokenizer.defineSkip(current.start);
      }
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }
      tokenizer.write(stream);
      if (current._isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = undefined;
      }
    } // Unravel the next token.

    previous = current;
    current = current.next;
  } // Now, loop back through all events (and linked tokens), to figure out which
  // parts belong where.

  current = token;
  while (++index < childEvents.length) {
    if (
    // Find a void token that includes a break.
    childEvents[index][0] === 'exit' && childEvents[index - 1][0] === 'enter' && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
      start = index + 1;
      breaks.push(start); // Help GC.

      current._tokenizer = undefined;
      current.previous = undefined;
      current = current.next;
    }
  } // Help GC.

  tokenizer.events = []; // If there’s one more token (which is the cases for lines that end in an
  // EOF), that’s perfect: the last point we found starts it.
  // If there isn’t then make sure any remaining content is added to it.

  if (current) {
    // Help GC.
    current._tokenizer = undefined;
    current.previous = undefined;
  } else {
    breaks.pop();
  } // Now splice the events from the subtokenizer into the current events,
  // moving back to front so that splice indices aren’t affected.

  index = breaks.length;
  while (index--) {
    var slice = childEvents.slice(breaks[index], breaks[index + 1]);
    var _start = startPositions.pop();
    jumps.unshift([_start, _start + slice.length - 1]);
    splice(events, _start, 2, slice);
  }
  index = -1;
  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
    adjust += jumps[index][1] - jumps[index][0] - 1;
  }
  return gaps;
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */

/**
 * No name because it must not be turned off.
 * @type {Construct}
 */
var content = {
  tokenize: tokenizeContent,
  resolve: resolveContent
};
/** @type {Construct} */

var continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: true
};
/**
 * Content is transparent: it’s parsed right now. That way, definitions are also
 * parsed right now: before text in paragraphs (specifically, media) are parsed.
 *
 * @type {Resolver}
 */

function resolveContent(events) {
  subtokenize(events);
  return events;
}
/** @type {Tokenizer} */

function tokenizeContent(effects, ok) {
  /** @type {Token} */
  var previous;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('content');
    previous = effects.enter('chunkContent', {
      contentType: 'content'
    });
    return data(code);
  }
  /** @type {State} */

  function data(code) {
    if (code === null) {
      return contentEnd(code);
    }
    if (markdownLineEnding(code)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
    } // Data.

    effects.consume(code);
    return data;
  }
  /** @type {State} */

  function contentEnd(code) {
    effects.exit('chunkContent');
    effects.exit('content');
    return ok(code);
  }
  /** @type {State} */

  function contentContinue(code) {
    effects.consume(code);
    effects.exit('chunkContent');
    previous.next = effects.enter('chunkContent', {
      contentType: 'content',
      previous: previous
    });
    previous = previous.next;
    return data;
  }
}
/** @type {Tokenizer} */

function tokenizeContinuation(effects, ok, nok) {
  var self = this;
  return startLookahead;
  /** @type {State} */

  function startLookahead(code) {
    effects.exit('chunkContent');
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, prefixed, 'linePrefix');
  }
  /** @type {State} */

  function prefixed(code) {
    if (code === null || markdownLineEnding(code)) {
      return nok(code);
    }
    var tail = self.events[self.events.length - 1];
    if (!self.parser.constructs.disable["null"].includes('codeIndented') && tail && tail[1].type === 'linePrefix' && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok(code);
    }
    return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} literalType
 * @param {string} literalMarkerType
 * @param {string} rawType
 * @param {string} stringType
 * @param {number} [max=Infinity]
 * @returns {State}
 */
// eslint-disable-next-line max-params
function factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  var limit = max || Number.POSITIVE_INFINITY;
  var balance = 0;
  return start;
  /** @type {State} */

  function start(code) {
    if (code === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      return destinationEnclosedBefore;
    }
    if (code === null || code === 41 || asciiControl(code)) {
      return nok(code);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return destinationRaw(code);
  }
  /** @type {State} */

  function destinationEnclosedBefore(code) {
    if (code === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return destinationEnclosed(code);
  }
  /** @type {State} */

  function destinationEnclosed(code) {
    if (code === 62) {
      effects.exit('chunkString');
      effects.exit(stringType);
      return destinationEnclosedBefore(code);
    }
    if (code === null || code === 60 || markdownLineEnding(code)) {
      return nok(code);
    }
    effects.consume(code);
    return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
  }
  /** @type {State} */

  function destinationEnclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code);
      return destinationEnclosed;
    }
    return destinationEnclosed(code);
  }
  /** @type {State} */

  function destinationRaw(code) {
    if (code === 40) {
      if (++balance > limit) return nok(code);
      effects.consume(code);
      return destinationRaw;
    }
    if (code === 41) {
      if (!balance--) {
        effects.exit('chunkString');
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok(code);
      }
      effects.consume(code);
      return destinationRaw;
    }
    if (code === null || markdownLineEndingOrSpace(code)) {
      if (balance) return nok(code);
      effects.exit('chunkString');
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok(code);
    }
    if (asciiControl(code)) return nok(code);
    effects.consume(code);
    return code === 92 ? destinationRawEscape : destinationRaw;
  }
  /** @type {State} */

  function destinationRawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code);
      return destinationRaw;
    }
    return destinationRaw(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').State} State
 */

/**
 * @this {TokenizeContext}
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @returns {State}
 */
// eslint-disable-next-line max-params
function factoryLabel(effects, ok, nok, type, markerType, stringType) {
  var self = this;
  var size = 0;
  /** @type {boolean} */

  var data;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  /** @type {State} */

  function atBreak(code) {
    if (code === null || code === 91 || code === 93 && !data ||
    /* To do: remove in the future once we’ve switched from
     * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
     * which doesn’t need this */

    /* Hidden footnotes hook */

    /* c8 ignore next 3 */
    code === 94 && !size && '_hiddenFootnoteSupport' in self.parser.constructs || size > 999) {
      return nok(code);
    }
    if (code === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return atBreak;
    }
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return label(code);
  }
  /** @type {State} */

  function label(code) {
    if (code === null || code === 91 || code === 93 || markdownLineEnding(code) || size++ > 999) {
      effects.exit('chunkString');
      return atBreak(code);
    }
    effects.consume(code);
    data = data || !markdownSpace(code);
    return code === 92 ? labelEscape : label;
  }
  /** @type {State} */

  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return label;
    }
    return label(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {string} type
 * @param {string} markerType
 * @param {string} stringType
 * @returns {State}
 */
// eslint-disable-next-line max-params
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
  /** @type {NonNullable<Code>} */
  var marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    marker = code === 40 ? 41 : code;
    return atFirstTitleBreak;
  }
  /** @type {State} */

  function atFirstTitleBreak(code) {
    if (code === marker) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    return atTitleBreak(code);
  }
  /** @type {State} */

  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker);
    }
    if (code === null) {
      return nok(code);
    } // Note: blank lines can’t exist in content.

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return factorySpace(effects, atTitleBreak, 'linePrefix');
    }
    effects.enter('chunkString', {
      contentType: 'string'
    });
    return title(code);
  }
  /** @type {State} */

  function title(code) {
    if (code === marker || code === null || markdownLineEnding(code)) {
      effects.exit('chunkString');
      return atTitleBreak(code);
    }
    effects.consume(code);
    return code === 92 ? titleEscape : title;
  }
  /** @type {State} */

  function titleEscape(code) {
    if (code === marker || code === 92) {
      effects.consume(code);
      return title;
    }
    return title(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Effects} Effects
 * @typedef {import('micromark-util-types').State} State
 */

/**
 * @param {Effects} effects
 * @param {State} ok
 */
function factoryWhitespace(effects, ok) {
  /** @type {boolean} */
  var seen;
  return start;
  /** @type {State} */

  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      seen = true;
      return start;
    }
    if (markdownSpace(code)) {
      return factorySpace(effects, start, seen ? 'linePrefix' : 'lineSuffix')(code);
    }
    return ok(code);
  }
}

/**
 * Normalize an identifier (such as used in definitions).
 *
 * @param {string} value
 * @returns {string}
 */
function normalizeIdentifier(value) {
  return value // Collapse Markdown whitespace.
  .replace(/[\t\n\r ]+/g, ' ') // Trim.
  .replace(/^ | $/g, '') // Some characters are considered “uppercase”, but if their lowercase
  // counterpart is uppercased will result in a different uppercase
  // character.
  // Hence, to get that form, we perform both lower- and uppercase.
  // Upper case makes sure keys will not interact with default prototypal
  // methods: no method is uppercase.
  .toLowerCase().toUpperCase();
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
var definition = {
  name: 'definition',
  tokenize: tokenizeDefinition
};
/** @type {Construct} */

var titleConstruct = {
  tokenize: tokenizeTitle,
  partial: true
};
/** @type {Tokenizer} */

function tokenizeDefinition(effects, ok, nok) {
  var self = this;
  /** @type {string} */

  var identifier;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('definition');
    return factoryLabel.call(self, effects, labelAfter, nok, 'definitionLabel', 'definitionLabelMarker', 'definitionLabelString')(code);
  }
  /** @type {State} */

  function labelAfter(code) {
    identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
    if (code === 58) {
      effects.enter('definitionMarker');
      effects.consume(code);
      effects.exit('definitionMarker'); // Note: blank lines can’t exist in content.

      return factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, 'whitespace'), factorySpace(effects, after, 'whitespace')), nok, 'definitionDestination', 'definitionDestinationLiteral', 'definitionDestinationLiteralMarker', 'definitionDestinationRaw', 'definitionDestinationString'));
    }
    return nok(code);
  }
  /** @type {State} */

  function after(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('definition');
      if (!self.parser.defined.includes(identifier)) {
        self.parser.defined.push(identifier);
      }
      return ok(code);
    }
    return nok(code);
  }
}
/** @type {Tokenizer} */

function tokenizeTitle(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, before)(code) : nok(code);
  }
  /** @type {State} */

  function before(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(effects, factorySpace(effects, after, 'whitespace'), nok, 'definitionTitle', 'definitionTitleMarker', 'definitionTitleString')(code);
    }
    return nok(code);
  }
  /** @type {State} */

  function after(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
var hardBreakEscape = {
  name: 'hardBreakEscape',
  tokenize: tokenizeHardBreakEscape
};
/** @type {Tokenizer} */

function tokenizeHardBreakEscape(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('hardBreakEscape');
    effects.enter('escapeMarker');
    effects.consume(code);
    return open;
  }
  /** @type {State} */

  function open(code) {
    if (markdownLineEnding(code)) {
      effects.exit('escapeMarker');
      effects.exit('hardBreakEscape');
      return ok(code);
    }
    return nok(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
var headingAtx = {
  name: 'headingAtx',
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
/** @type {Resolver} */

function resolveHeadingAtx(events, context) {
  var contentEnd = events.length - 2;
  var contentStart = 3;
  /** @type {Token} */

  var content;
  /** @type {Token} */

  var text; // Prefix whitespace, part of the opening.

  if (events[contentStart][1].type === 'whitespace') {
    contentStart += 2;
  } // Suffix whitespace, part of the closing.

  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === 'whitespace') {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === 'atxHeadingSequence' && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === 'whitespace')) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content = {
      type: 'atxHeadingText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text = {
      type: 'chunkText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      // @ts-expect-error Constants are fine to assign.
      contentType: 'text'
    };
    splice(events, contentStart, contentEnd - contentStart + 1, [['enter', content, context], ['enter', text, context], ['exit', text, context], ['exit', content, context]]);
  }
  return events;
}
/** @type {Tokenizer} */

function tokenizeHeadingAtx(effects, ok, nok) {
  var self = this;
  var size = 0;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('atxHeading');
    effects.enter('atxHeadingSequence');
    return fenceOpenInside(code);
  }
  /** @type {State} */

  function fenceOpenInside(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code);
      return fenceOpenInside;
    }
    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingSequence');
      return self.interrupt ? ok(code) : headingBreak(code);
    }
    return nok(code);
  }
  /** @type {State} */

  function headingBreak(code) {
    if (code === 35) {
      effects.enter('atxHeadingSequence');
      return sequence(code);
    }
    if (code === null || markdownLineEnding(code)) {
      effects.exit('atxHeading');
      return ok(code);
    }
    if (markdownSpace(code)) {
      return factorySpace(effects, headingBreak, 'whitespace')(code);
    }
    effects.enter('atxHeadingText');
    return data(code);
  }
  /** @type {State} */

  function sequence(code) {
    if (code === 35) {
      effects.consume(code);
      return sequence;
    }
    effects.exit('atxHeadingSequence');
    return headingBreak(code);
  }
  /** @type {State} */

  function data(code) {
    if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingText');
      return headingBreak(code);
    }
    effects.consume(code);
    return data;
  }
}

/**
 * List of lowercase HTML tag names which when parsing HTML (flow), result
 * in more relaxed rules (condition 6): because they are known blocks, the
 * HTML-like syntax doesn’t have to be strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 */
var htmlBlockNames = ['address', 'article', 'aside', 'base', 'basefont', 'blockquote', 'body', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dialog', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'iframe', 'legend', 'li', 'link', 'main', 'menu', 'menuitem', 'nav', 'noframes', 'ol', 'optgroup', 'option', 'p', 'param', 'section', 'summary', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul'];

/**
 * List of lowercase HTML tag names which when parsing HTML (flow), result in
 * HTML that can include lines w/o exiting, until a closing tag also in this
 * list is found (condition 1).
 *
 * This module is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 *
 * Note that `textarea` was added in `CommonMark@0.30`.
 */
var htmlRawNames = ['pre', 'script', 'style', 'textarea'];

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */
/** @type {Construct} */

var htmlFlow = {
  name: 'htmlFlow',
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: true
};
/** @type {Construct} */

var nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: true
};
/** @type {Resolver} */

function resolveToHtmlFlow(events) {
  var index = events.length;
  while (index--) {
    if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') {
      break;
    }
  }
  if (index > 1 && events[index - 2][1].type === 'linePrefix') {
    // Add the prefix start to the HTML token.
    events[index][1].start = events[index - 2][1].start; // Add the prefix start to the HTML line token.

    events[index + 1][1].start = events[index - 2][1].start; // Remove the line prefix.

    events.splice(index - 2, 2);
  }
  return events;
}
/** @type {Tokenizer} */

function tokenizeHtmlFlow(effects, ok, nok) {
  var self = this;
  /** @type {number} */

  var kind;
  /** @type {boolean} */

  var startTag;
  /** @type {string} */

  var buffer;
  /** @type {number} */

  var index;
  /** @type {Code} */

  var marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('htmlFlow');
    effects.enter('htmlFlowData');
    effects.consume(code);
    return open;
  }
  /** @type {State} */

  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationStart;
    }
    if (code === 47) {
      effects.consume(code);
      return tagCloseStart;
    }
    if (code === 63) {
      effects.consume(code);
      kind = 3; // While we’re in an instruction instead of a declaration, we’re on a `?`
      // right now, so we do need to search for `>`, similar to declarations.

      return self.interrupt ? ok : continuationDeclarationInside;
    }
    if (asciiAlpha(code)) {
      effects.consume(code);
      buffer = String.fromCharCode(code);
      startTag = true;
      return tagName;
    }
    return nok(code);
  }
  /** @type {State} */

  function declarationStart(code) {
    if (code === 45) {
      effects.consume(code);
      kind = 2;
      return commentOpenInside;
    }
    if (code === 91) {
      effects.consume(code);
      kind = 5;
      buffer = 'CDATA[';
      index = 0;
      return cdataOpenInside;
    }
    if (asciiAlpha(code)) {
      effects.consume(code);
      kind = 4;
      return self.interrupt ? ok : continuationDeclarationInside;
    }
    return nok(code);
  }
  /** @type {State} */

  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code);
      return self.interrupt ? ok : continuationDeclarationInside;
    }
    return nok(code);
  }
  /** @type {State} */

  function cdataOpenInside(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length ? self.interrupt ? ok : continuation : cdataOpenInside;
    }
    return nok(code);
  }
  /** @type {State} */

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      buffer = String.fromCharCode(code);
      return tagName;
    }
    return nok(code);
  }
  /** @type {State} */

  function tagName(code) {
    if (code === null || code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      if (code !== 47 && startTag && htmlRawNames.includes(buffer.toLowerCase())) {
        kind = 1;
        return self.interrupt ? ok(code) : continuation(code);
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        kind = 6;
        if (code === 47) {
          effects.consume(code);
          return basicSelfClosing;
        }
        return self.interrupt ? ok(code) : continuation(code);
      }
      kind = 7; // Do not support complete HTML when interrupting

      return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
    }
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return tagName;
    }
    return nok(code);
  }
  /** @type {State} */

  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code);
      return self.interrupt ? ok : continuation;
    }
    return nok(code);
  }
  /** @type {State} */

  function completeClosingTagAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeClosingTagAfter;
    }
    return completeEnd(code);
  }
  /** @type {State} */

  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code);
      return completeEnd;
    }
    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code);
      return completeAttributeName;
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeNameBefore;
    }
    return completeEnd(code);
  }
  /** @type {State} */

  function completeAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code);
  }
  /** @type {State} */

  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code);
  }
  /** @type {State} */

  function completeAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }
    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return completeAttributeValueQuoted;
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }
    marker = null;
    return completeAttributeValueUnquoted(code);
  }
  /** @type {State} */

  function completeAttributeValueQuoted(code) {
    if (code === null || markdownLineEnding(code)) {
      return nok(code);
    }
    if (code === marker) {
      effects.consume(code);
      return completeAttributeValueQuotedAfter;
    }
    effects.consume(code);
    return completeAttributeValueQuoted;
  }
  /** @type {State} */

  function completeAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || markdownLineEndingOrSpace(code)) {
      return completeAttributeNameAfter(code);
    }
    effects.consume(code);
    return completeAttributeValueUnquoted;
  }
  /** @type {State} */

  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownSpace(code)) {
      return completeAttributeNameBefore(code);
    }
    return nok(code);
  }
  /** @type {State} */

  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code);
      return completeAfter;
    }
    return nok(code);
  }
  /** @type {State} */

  function completeAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return completeAfter;
    }
    return code === null || markdownLineEnding(code) ? continuation(code) : nok(code);
  }
  /** @type {State} */

  function continuation(code) {
    if (code === 45 && kind === 2) {
      effects.consume(code);
      return continuationCommentInside;
    }
    if (code === 60 && kind === 1) {
      effects.consume(code);
      return continuationRawTagOpen;
    }
    if (code === 62 && kind === 4) {
      effects.consume(code);
      return continuationClose;
    }
    if (code === 63 && kind === 3) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    if (code === 93 && kind === 5) {
      effects.consume(code);
      return continuationCharacterDataInside;
    }
    if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
      return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
    }
    if (code === null || markdownLineEnding(code)) {
      return continuationAtLineEnding(code);
    }
    effects.consume(code);
    return continuation;
  }
  /** @type {State} */

  function continuationAtLineEnding(code) {
    effects.exit('htmlFlowData');
    return htmlContinueStart(code);
  }
  /** @type {State} */

  function htmlContinueStart(code) {
    if (code === null) {
      return done(code);
    }
    if (markdownLineEnding(code)) {
      return effects.attempt({
        tokenize: htmlLineEnd,
        partial: true
      }, htmlContinueStart, done)(code);
    }
    effects.enter('htmlFlowData');
    return continuation(code);
  }
  /** @type {Tokenizer} */

  function htmlLineEnd(effects, ok, nok) {
    return start;
    /** @type {State} */

    function start(code) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return lineStart;
    }
    /** @type {State} */

    function lineStart(code) {
      return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
    }
  }
  /** @type {State} */

  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }
  /** @type {State} */

  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code);
      buffer = '';
      return continuationRawEndTag;
    }
    return continuation(code);
  }
  /** @type {State} */

  function continuationRawEndTag(code) {
    if (code === 62 && htmlRawNames.includes(buffer.toLowerCase())) {
      effects.consume(code);
      return continuationClose;
    }
    if (asciiAlpha(code) && buffer.length < 8) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return continuationRawEndTag;
    }
    return continuation(code);
  }
  /** @type {State} */

  function continuationCharacterDataInside(code) {
    if (code === 93) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }
  /** @type {State} */

  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code);
      return continuationClose;
    } // More dashes.

    if (code === 45 && kind === 2) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }
  /** @type {State} */

  function continuationClose(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('htmlFlowData');
      return done(code);
    }
    effects.consume(code);
    return continuationClose;
  }
  /** @type {State} */

  function done(code) {
    effects.exit('htmlFlow');
    return ok(code);
  }
}
/** @type {Tokenizer} */

function tokenizeNextBlank(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.exit('htmlFlowData');
    effects.enter('lineEndingBlank');
    effects.consume(code);
    effects.exit('lineEndingBlank');
    return effects.attempt(blankLine, ok, nok);
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/** @type {Construct} */
var htmlText = {
  name: 'htmlText',
  tokenize: tokenizeHtmlText
};
/** @type {Tokenizer} */

function tokenizeHtmlText(effects, ok, nok) {
  var self = this;
  /** @type {NonNullable<Code>|undefined} */

  var marker;
  /** @type {string} */

  var buffer;
  /** @type {number} */

  var index;
  /** @type {State} */

  var returnState;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('htmlText');
    effects.enter('htmlTextData');
    effects.consume(code);
    return open;
  }
  /** @type {State} */

  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationOpen;
    }
    if (code === 47) {
      effects.consume(code);
      return tagCloseStart;
    }
    if (code === 63) {
      effects.consume(code);
      return instruction;
    }
    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagOpen;
    }
    return nok(code);
  }
  /** @type {State} */

  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentOpen;
    }
    if (code === 91) {
      effects.consume(code);
      buffer = 'CDATA[';
      index = 0;
      return cdataOpen;
    }
    if (asciiAlpha(code)) {
      effects.consume(code);
      return declaration;
    }
    return nok(code);
  }
  /** @type {State} */

  function commentOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentStart;
    }
    return nok(code);
  }
  /** @type {State} */

  function commentStart(code) {
    if (code === null || code === 62) {
      return nok(code);
    }
    if (code === 45) {
      effects.consume(code);
      return commentStartDash;
    }
    return comment(code);
  }
  /** @type {State} */

  function commentStartDash(code) {
    if (code === null || code === 62) {
      return nok(code);
    }
    return comment(code);
  }
  /** @type {State} */

  function comment(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 45) {
      effects.consume(code);
      return commentClose;
    }
    if (markdownLineEnding(code)) {
      returnState = comment;
      return atLineEnding(code);
    }
    effects.consume(code);
    return comment;
  }
  /** @type {State} */

  function commentClose(code) {
    if (code === 45) {
      effects.consume(code);
      return end;
    }
    return comment(code);
  }
  /** @type {State} */

  function cdataOpen(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length ? cdata : cdataOpen;
    }
    return nok(code);
  }
  /** @type {State} */

  function cdata(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 93) {
      effects.consume(code);
      return cdataClose;
    }
    if (markdownLineEnding(code)) {
      returnState = cdata;
      return atLineEnding(code);
    }
    effects.consume(code);
    return cdata;
  }
  /** @type {State} */

  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code);
      return cdataEnd;
    }
    return cdata(code);
  }
  /** @type {State} */

  function cdataEnd(code) {
    if (code === 62) {
      return end(code);
    }
    if (code === 93) {
      effects.consume(code);
      return cdataEnd;
    }
    return cdata(code);
  }
  /** @type {State} */

  function declaration(code) {
    if (code === null || code === 62) {
      return end(code);
    }
    if (markdownLineEnding(code)) {
      returnState = declaration;
      return atLineEnding(code);
    }
    effects.consume(code);
    return declaration;
  }
  /** @type {State} */

  function instruction(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 63) {
      effects.consume(code);
      return instructionClose;
    }
    if (markdownLineEnding(code)) {
      returnState = instruction;
      return atLineEnding(code);
    }
    effects.consume(code);
    return instruction;
  }
  /** @type {State} */

  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code);
  }
  /** @type {State} */

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagClose;
    }
    return nok(code);
  }
  /** @type {State} */

  function tagClose(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagClose;
    }
    return tagCloseBetween(code);
  }
  /** @type {State} */

  function tagCloseBetween(code) {
    if (markdownLineEnding(code)) {
      returnState = tagCloseBetween;
      return atLineEnding(code);
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return tagCloseBetween;
    }
    return end(code);
  }
  /** @type {State} */

  function tagOpen(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagOpen;
    }
    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code);
    }
    return nok(code);
  }
  /** @type {State} */

  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code);
      return end;
    }
    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }
    if (markdownLineEnding(code)) {
      returnState = tagOpenBetween;
      return atLineEnding(code);
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenBetween;
    }
    return end(code);
  }
  /** @type {State} */

  function tagOpenAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code);
  }
  /** @type {State} */

  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }
    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code);
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code);
  }
  /** @type {State} */

  function tagOpenAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }
    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return tagOpenAttributeValueQuoted;
    }
    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code);
    }
    if (markdownSpace(code)) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code);
    marker = undefined;
    return tagOpenAttributeValueUnquoted;
  }
  /** @type {State} */

  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code === null) {
      return nok(code);
    }
    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code);
    }
    effects.consume(code);
    return tagOpenAttributeValueQuoted;
  }
  /** @type {State} */

  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code);
    }
    return nok(code);
  }
  /** @type {State} */

  function tagOpenAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
      return nok(code);
    }
    if (code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code);
    }
    effects.consume(code);
    return tagOpenAttributeValueUnquoted;
  } // We can’t have blank lines in content, so no need to worry about empty
  // tokens.

  /** @type {State} */

  function atLineEnding(code) {
    effects.exit('htmlTextData');
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, afterPrefix, 'linePrefix', self.parser.constructs.disable["null"].includes('codeIndented') ? undefined : 4);
  }
  /** @type {State} */

  function afterPrefix(code) {
    effects.enter('htmlTextData');
    return returnState(code);
  }
  /** @type {State} */

  function end(code) {
    if (code === 62) {
      effects.consume(code);
      effects.exit('htmlTextData');
      effects.exit('htmlText');
      return ok;
    }
    return nok(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').Event} Event
 * @typedef {import('micromark-util-types').Token} Token
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/** @type {Construct} */
var labelEnd = {
  name: 'labelEnd',
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
};
/** @type {Construct} */

var resourceConstruct = {
  tokenize: tokenizeResource
};
/** @type {Construct} */

var fullReferenceConstruct = {
  tokenize: tokenizeFullReference
};
/** @type {Construct} */

var collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
};
/** @type {Resolver} */

function resolveAllLabelEnd(events) {
  var index = -1;
  /** @type {Token} */

  var token;
  while (++index < events.length) {
    token = events[index][1];
    if (token.type === 'labelImage' || token.type === 'labelLink' || token.type === 'labelEnd') {
      // Remove the marker.
      events.splice(index + 1, token.type === 'labelImage' ? 4 : 2);
      token.type = 'data';
      index++;
    }
  }
  return events;
}
/** @type {Resolver} */

function resolveToLabelEnd(events, context) {
  var index = events.length;
  var offset = 0;
  /** @type {Token} */

  var token;
  /** @type {number|undefined} */

  var open;
  /** @type {number|undefined} */

  var close;
  /** @type {Event[]} */

  var media; // Find an opening.

  while (index--) {
    token = events[index][1];
    if (open) {
      // If we see another link, or inactive link label, we’ve been here before.
      if (token.type === 'link' || token.type === 'labelLink' && token._inactive) {
        break;
      } // Mark other link openings as inactive, as we can’t have links in
      // links.

      if (events[index][0] === 'enter' && token.type === 'labelLink') {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index][0] === 'enter' && (token.type === 'labelImage' || token.type === 'labelLink') && !token._balanced) {
        open = index;
        if (token.type !== 'labelLink') {
          offset = 2;
          break;
        }
      }
    } else if (token.type === 'labelEnd') {
      close = index;
    }
  }
  var group = {
    type: events[open][1].type === 'labelLink' ? 'link' : 'image',
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  var label = {
    type: 'label',
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  };
  var text = {
    type: 'labelText',
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  media = [['enter', group, context], ['enter', label, context]]; // Opening marker.

  media = push(media, events.slice(open + 1, open + offset + 3)); // Text open.

  media = push(media, [['enter', text, context]]); // Between.

  media = push(media, resolveAll(context.parser.constructs.insideSpan["null"], events.slice(open + offset + 4, close - 3), context)); // Text close, marker close, label close.

  media = push(media, [['exit', text, context], events[close - 2], events[close - 1], ['exit', label, context]]); // Reference, resource, or so.

  media = push(media, events.slice(close + 1)); // Media close.

  media = push(media, [['exit', group, context]]);
  splice(events, open, events.length, media);
  return events;
}
/** @type {Tokenizer} */

function tokenizeLabelEnd(effects, ok, nok) {
  var self = this;
  var index = self.events.length;
  /** @type {Token} */

  var labelStart;
  /** @type {boolean} */

  var defined; // Find an opening.

  while (index--) {
    if ((self.events[index][1].type === 'labelImage' || self.events[index][1].type === 'labelLink') && !self.events[index][1]._balanced) {
      labelStart = self.events[index][1];
      break;
    }
  }
  return start;
  /** @type {State} */

  function start(code) {
    if (!labelStart) {
      return nok(code);
    } // It’s a balanced bracket, but contains a link.

    if (labelStart._inactive) return balanced(code);
    defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    })));
    effects.enter('labelEnd');
    effects.enter('labelMarker');
    effects.consume(code);
    effects.exit('labelMarker');
    effects.exit('labelEnd');
    return afterLabelEnd;
  }
  /** @type {State} */

  function afterLabelEnd(code) {
    // Resource: `[asd](fgh)`.
    if (code === 40) {
      return effects.attempt(resourceConstruct, ok, defined ? ok : balanced)(code);
    } // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?

    if (code === 91) {
      return effects.attempt(fullReferenceConstruct, ok, defined ? effects.attempt(collapsedReferenceConstruct, ok, balanced) : balanced)(code);
    } // Shortcut reference: `[asd]`?

    return defined ? ok(code) : balanced(code);
  }
  /** @type {State} */

  function balanced(code) {
    labelStart._balanced = true;
    return nok(code);
  }
}
/** @type {Tokenizer} */

function tokenizeResource(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('resource');
    effects.enter('resourceMarker');
    effects.consume(code);
    effects.exit('resourceMarker');
    return factoryWhitespace(effects, open);
  }
  /** @type {State} */

  function open(code) {
    if (code === 41) {
      return end(code);
    }
    return factoryDestination(effects, destinationAfter, nok, 'resourceDestination', 'resourceDestinationLiteral', 'resourceDestinationLiteralMarker', 'resourceDestinationRaw', 'resourceDestinationString', 32)(code);
  }
  /** @type {State} */

  function destinationAfter(code) {
    return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, between)(code) : end(code);
  }
  /** @type {State} */

  function between(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(effects, factoryWhitespace(effects, end), nok, 'resourceTitle', 'resourceTitleMarker', 'resourceTitleString')(code);
    }
    return end(code);
  }
  /** @type {State} */

  function end(code) {
    if (code === 41) {
      effects.enter('resourceMarker');
      effects.consume(code);
      effects.exit('resourceMarker');
      effects.exit('resource');
      return ok;
    }
    return nok(code);
  }
}
/** @type {Tokenizer} */

function tokenizeFullReference(effects, ok, nok) {
  var self = this;
  return start;
  /** @type {State} */

  function start(code) {
    return factoryLabel.call(self, effects, afterLabel, nok, 'reference', 'referenceMarker', 'referenceString')(code);
  }
  /** @type {State} */

  function afterLabel(code) {
    return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok(code) : nok(code);
  }
}
/** @type {Tokenizer} */

function tokenizeCollapsedReference(effects, ok, nok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('reference');
    effects.enter('referenceMarker');
    effects.consume(code);
    effects.exit('referenceMarker');
    return open;
  }
  /** @type {State} */

  function open(code) {
    if (code === 93) {
      effects.enter('referenceMarker');
      effects.consume(code);
      effects.exit('referenceMarker');
      effects.exit('reference');
      return ok;
    }
    return nok(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */
/** @type {Construct} */

var labelStartImage = {
  name: 'labelStartImage',
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
/** @type {Tokenizer} */

function tokenizeLabelStartImage(effects, ok, nok) {
  var self = this;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('labelImage');
    effects.enter('labelImageMarker');
    effects.consume(code);
    effects.exit('labelImageMarker');
    return open;
  }
  /** @type {State} */

  function open(code) {
    if (code === 91) {
      effects.enter('labelMarker');
      effects.consume(code);
      effects.exit('labelMarker');
      effects.exit('labelImage');
      return after;
    }
    return nok(code);
  }
  /** @type {State} */

  function after(code) {
    /* To do: remove in the future once we’ve switched from
     * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
     * which doesn’t need this */

    /* Hidden footnotes hook */

    /* c8 ignore next 3 */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs ? nok(code) : ok(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */
/** @type {Construct} */

var labelStartLink = {
  name: 'labelStartLink',
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
/** @type {Tokenizer} */

function tokenizeLabelStartLink(effects, ok, nok) {
  var self = this;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('labelLink');
    effects.enter('labelMarker');
    effects.consume(code);
    effects.exit('labelMarker');
    effects.exit('labelLink');
    return after;
  }
  /** @type {State} */

  function after(code) {
    /* To do: remove in the future once we’ve switched from
     * `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
     * which doesn’t need this */

    /* Hidden footnotes hook. */

    /* c8 ignore next 3 */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs ? nok(code) : ok(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {Construct} */
var lineEnding = {
  name: 'lineEnding',
  tokenize: tokenizeLineEnding
};
/** @type {Tokenizer} */

function tokenizeLineEnding(effects, ok) {
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, ok, 'linePrefix');
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/** @type {Construct} */
var thematicBreak$1 = {
  name: 'thematicBreak',
  tokenize: tokenizeThematicBreak
};
/** @type {Tokenizer} */

function tokenizeThematicBreak(effects, ok, nok) {
  var size = 0;
  /** @type {NonNullable<Code>} */

  var marker;
  return start;
  /** @type {State} */

  function start(code) {
    effects.enter('thematicBreak');
    marker = code;
    return atBreak(code);
  }
  /** @type {State} */

  function atBreak(code) {
    if (code === marker) {
      effects.enter('thematicBreakSequence');
      return sequence(code);
    }
    if (markdownSpace(code)) {
      return factorySpace(effects, atBreak, 'whitespace')(code);
    }
    if (size < 3 || code !== null && !markdownLineEnding(code)) {
      return nok(code);
    }
    effects.exit('thematicBreak');
    return ok(code);
  }
  /** @type {State} */

  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      size++;
      return sequence;
    }
    effects.exit('thematicBreakSequence');
    return atBreak(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext
 * @typedef {import('micromark-util-types').Exiter} Exiter
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */
/** @type {Construct} */

var list$1 = {
  name: 'list',
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
};
/** @type {Construct} */

var listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: true
};
/** @type {Construct} */

var indentConstruct = {
  tokenize: tokenizeIndent,
  partial: true
};
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */

function tokenizeListStart(effects, ok, nok) {
  var self = this;
  var tail = self.events[self.events.length - 1];
  var initialSize = tail && tail[1].type === 'linePrefix' ? tail[2].sliceSerialize(tail[1], true).length : 0;
  var size = 0;
  return start;
  /** @type {State} */

  function start(code) {
    var kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? 'listUnordered' : 'listOrdered');
    if (kind === 'listUnordered' ? !self.containerState.marker || code === self.containerState.marker : asciiDigit(code)) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === 'listUnordered') {
        effects.enter('listItemPrefix');
        return code === 42 || code === 45 ? effects.check(thematicBreak$1, nok, atMarker)(code) : atMarker(code);
      }
      if (!self.interrupt || code === 49) {
        effects.enter('listItemPrefix');
        effects.enter('listItemValue');
        return inside(code);
      }
    }
    return nok(code);
  }
  /** @type {State} */

  function inside(code) {
    if (asciiDigit(code) && ++size < 10) {
      effects.consume(code);
      return inside;
    }
    if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
      effects.exit('listItemValue');
      return atMarker(code);
    }
    return nok(code);
  }
  /**
   * @type {State}
   **/

  function atMarker(code) {
    effects.enter('listItemMarker');
    effects.consume(code);
    effects.exit('listItemMarker');
    self.containerState.marker = self.containerState.marker || code;
    return effects.check(blankLine,
    // Can’t be empty when interrupting.
    self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }
  /** @type {State} */

  function onBlank(code) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code);
  }
  /** @type {State} */

  function otherPrefix(code) {
    if (markdownSpace(code)) {
      effects.enter('listItemPrefixWhitespace');
      effects.consume(code);
      effects.exit('listItemPrefixWhitespace');
      return endOfPrefix;
    }
    return nok(code);
  }
  /** @type {State} */

  function endOfPrefix(code) {
    self.containerState.size = initialSize + self.sliceSerialize(effects.exit('listItemPrefix'), true).length;
    return ok(code);
  }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */

function tokenizeListContinuation(effects, ok, nok) {
  var self = this;
  self.containerState._closeFlow = undefined;
  return effects.check(blankLine, onBlank, notBlank);
  /** @type {State} */

  function onBlank(code) {
    self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine; // We have a blank line.
    // Still, try to consume at most the items size.

    return factorySpace(effects, ok, 'listItemIndent', self.containerState.size + 1)(code);
  }
  /** @type {State} */

  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
      self.containerState.furtherBlankLines = undefined;
      self.containerState.initialBlankLine = undefined;
      return notInCurrentItem(code);
    }
    self.containerState.furtherBlankLines = undefined;
    self.containerState.initialBlankLine = undefined;
    return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
  }
  /** @type {State} */

  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true; // As we’re closing flow, we’re no longer interrupting.

    self.interrupt = undefined;
    return factorySpace(effects, effects.attempt(list$1, ok, nok), 'linePrefix', self.parser.constructs.disable["null"].includes('codeIndented') ? undefined : 4)(code);
  }
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */

function tokenizeIndent(effects, ok, nok) {
  var self = this;
  return factorySpace(effects, afterPrefix, 'listItemIndent', self.containerState.size + 1);
  /** @type {State} */

  function afterPrefix(code) {
    var tail = self.events[self.events.length - 1];
    return tail && tail[1].type === 'listItemIndent' && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok(code) : nok(code);
  }
}
/**
 * @type {Exiter}
 * @this {TokenizeContextWithState}
 */

function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
/**
 * @type {Tokenizer}
 * @this {TokenizeContextWithState}
 */

function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  var self = this;
  return factorySpace(effects, afterPrefix, 'listItemPrefixWhitespace', self.parser.constructs.disable["null"].includes('codeIndented') ? undefined : 4 + 1);
  /** @type {State} */

  function afterPrefix(code) {
    var tail = self.events[self.events.length - 1];
    return !markdownSpace(code) && tail && tail[1].type === 'listItemPrefixWhitespace' ? ok(code) : nok(code);
  }
}

/**
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Tokenizer} Tokenizer
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */

/** @type {Construct} */
var setextUnderline = {
  name: 'setextUnderline',
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
/** @type {Resolver} */

function resolveToSetextUnderline(events, context) {
  var index = events.length;
  /** @type {number|undefined} */

  var content;
  /** @type {number|undefined} */

  var text;
  /** @type {number|undefined} */

  var definition; // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.

  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === 'content') {
        content = index;
        break;
      }
      if (events[index][1].type === 'paragraph') {
        text = index;
      }
    } // Exit
    else {
      if (events[index][1].type === 'content') {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1);
      }
      if (!definition && events[index][1].type === 'definition') {
        definition = index;
      }
    }
  }
  var heading = {
    type: 'setextHeading',
    start: Object.assign({}, events[text][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  }; // Change the paragraph to setext heading text.

  events[text][1].type = 'setextHeadingText'; // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.

  if (definition) {
    events.splice(text, 0, ['enter', heading, context]);
    events.splice(definition + 1, 0, ['exit', events[content][1], context]);
    events[content][1].end = Object.assign({}, events[definition][1].end);
  } else {
    events[content][1] = heading;
  } // Add the heading exit at the end.

  events.push(['exit', heading, context]);
  return events;
}
/** @type {Tokenizer} */

function tokenizeSetextUnderline(effects, ok, nok) {
  var self = this;
  var index = self.events.length;
  /** @type {NonNullable<Code>} */

  var marker;
  /** @type {boolean} */

  var paragraph; // Find an opening.

  while (index--) {
    // Skip enter/exit of line ending, line prefix, and content.
    // We can now either have a definition or a paragraph.
    if (self.events[index][1].type !== 'lineEnding' && self.events[index][1].type !== 'linePrefix' && self.events[index][1].type !== 'content') {
      paragraph = self.events[index][1].type === 'paragraph';
      break;
    }
  }
  return start;
  /** @type {State} */

  function start(code) {
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
      effects.enter('setextHeadingLine');
      effects.enter('setextHeadingLineSequence');
      marker = code;
      return closingSequence(code);
    }
    return nok(code);
  }
  /** @type {State} */

  function closingSequence(code) {
    if (code === marker) {
      effects.consume(code);
      return closingSequence;
    }
    effects.exit('setextHeadingLineSequence');
    return factorySpace(effects, closingSequenceEnd, 'lineSuffix')(code);
  }
  /** @type {State} */

  function closingSequenceEnd(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('setextHeadingLine');
      return ok(code);
    }
    return nok(code);
  }
}

/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').State} State
 */

/** @type {InitialConstruct} */
var flow$1 = {
  tokenize: initializeFlow
};
/** @type {Initializer} */

function initializeFlow(effects) {
  var self = this;
  var initial = effects.attempt(
  // Try to parse a blank line.
  blankLine, atBlankEnding,
  // Try to parse initial flow (essentially, only code).
  effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content, afterConstruct)), 'linePrefix')));
  return initial;
  /** @type {State} */

  function atBlankEnding(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }
    effects.enter('lineEndingBlank');
    effects.consume(code);
    effects.exit('lineEndingBlank');
    self.currentConstruct = undefined;
    return initial;
  }
  /** @type {State} */

  function afterConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return;
    }
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    self.currentConstruct = undefined;
    return initial;
  }
}

/**
 * @typedef {import('micromark-util-types').Resolver} Resolver
 * @typedef {import('micromark-util-types').Initializer} Initializer
 * @typedef {import('micromark-util-types').Construct} Construct
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').State} State
 * @typedef {import('micromark-util-types').Code} Code
 */
var resolver = {
  resolveAll: createResolver()
};
var string$1 = initializeFactory('string');
var text$2 = initializeFactory('text');
/**
 * @param {'string'|'text'} field
 * @returns {InitialConstruct}
 */

function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(field === 'text' ? resolveAllLineSuffixes : undefined)
  };
  /** @type {Initializer} */

  function initializeText(effects) {
    var self = this;
    var constructs = this.parser.constructs[field];
    var text = effects.attempt(constructs, start, notText);
    return start;
    /** @type {State} */

    function start(code) {
      return atBreak(code) ? text(code) : notText(code);
    }
    /** @type {State} */

    function notText(code) {
      if (code === null) {
        effects.consume(code);
        return;
      }
      effects.enter('data');
      effects.consume(code);
      return data;
    }
    /** @type {State} */

    function data(code) {
      if (atBreak(code)) {
        effects.exit('data');
        return text(code);
      } // Data.

      effects.consume(code);
      return data;
    }
    /**
     * @param {Code} code
     * @returns {boolean}
     */

    function atBreak(code) {
      if (code === null) {
        return true;
      }
      var list = constructs[code];
      var index = -1;
      if (list) {
        while (++index < list.length) {
          var item = list[index];
          if (!item.previous || item.previous.call(self, self.previous)) {
            return true;
          }
        }
      }
      return false;
    }
  }
}
/**
 * @param {Resolver} [extraResolver]
 * @returns {Resolver}
 */

function createResolver(extraResolver) {
  return resolveAllText;
  /** @type {Resolver} */

  function resolveAllText(events, context) {
    var index = -1;
    /** @type {number|undefined} */

    var enter; // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.

    while (++index <= events.length) {
      if (enter === undefined) {
        if (events[index] && events[index][1].type === 'data') {
          enter = index;
          index++;
        }
      } else if (!events[index] || events[index][1].type !== 'data') {
        // Don’t do anything if there is one data token.
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end;
          events.splice(enter + 2, index - enter - 2);
          index = enter + 2;
        }
        enter = undefined;
      }
    }
    return extraResolver ? extraResolver(events, context) : events;
  }
}
/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */

function resolveAllLineSuffixes(events, context) {
  var eventIndex = 0; // Skip first.

  while (++eventIndex <= events.length) {
    if ((eventIndex === events.length || events[eventIndex][1].type === 'lineEnding') && events[eventIndex - 1][1].type === 'data') {
      var data = events[eventIndex - 1][1];
      var chunks = context.sliceStream(data);
      var index = chunks.length;
      var bufferIndex = -1;
      var size = 0;
      /** @type {boolean|undefined} */

      var tabs = void 0;
      while (index--) {
        var chunk = chunks[index];
        if (typeof chunk === 'string') {
          bufferIndex = chunk.length;
          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }
          if (bufferIndex) break;
          bufferIndex = -1;
        } // Number
        else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) ; else {
          // Replacement character, exit.
          index++;
          break;
        }
      }
      if (size) {
        var token = {
          type: eventIndex === events.length || tabs || size < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start);
        if (data.start.offset === data.end.offset) {
          Object.assign(data, token);
        } else {
          events.splice(eventIndex, 0, ['enter', token, context], ['exit', token, context]);
          eventIndex += 2;
        }
      }
      eventIndex++;
    }
  }
  return events;
}

/**
 * Create a tokenizer.
 * Tokenizers deal with one type of data (e.g., containers, flow, text).
 * The parser is the object dealing with it all.
 * `initialize` works like other constructs, except that only its `tokenize`
 * function is used, in which case it doesn’t receive an `ok` or `nok`.
 * `from` can be given to set the point before the first character, although
 * when further lines are indented, they must be set with `defineSkip`.
 *
 * @param {ParseContext} parser
 * @param {InitialConstruct} initialize
 * @param {Omit<Point, '_index'|'_bufferIndex'>} [from]
 * @returns {TokenizeContext}
 */
function createTokenizer(parser, initialize, from) {
  /** @type {Point} */
  var point = Object.assign(from ? Object.assign({}, from) : {
    line: 1,
    column: 1,
    offset: 0
  }, {
    _index: 0,
    _bufferIndex: -1
  });
  /** @type {Record<string, number>} */

  var columnStart = {};
  /** @type {Array<Construct>} */

  var resolveAllConstructs = [];
  /** @type {Array<Chunk>} */

  var chunks = [];
  /** @type {Array<Token>} */

  var stack = [];
  /**
   * Tools used for tokenizing.
   *
   * @type {Effects}
   */

  var effects = {
    consume: consume,
    enter: enter,
    exit: exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  /**
   * State and tools for resolving and serializing.
   *
   * @type {TokenizeContext}
   */

  var context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser: parser,
    sliceStream: sliceStream,
    sliceSerialize: sliceSerialize,
    now: now,
    defineSkip: defineSkip,
    write: write
  };
  /**
   * The state function.
   *
   * @type {State|void}
   */

  var state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  /** @type {TokenizeContext['write']} */

  function write(slice) {
    chunks = push(chunks, slice);
    main(); // Exit if we’re not done, resolve might change stuff.

    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0); // Otherwise, resolve, and exit.

    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  } //
  // Tools.
  //

  /** @type {TokenizeContext['sliceSerialize']} */

  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  /** @type {TokenizeContext['sliceStream']} */

  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  /** @type {TokenizeContext['now']} */

  function now() {
    return Object.assign({}, point);
  }
  /** @type {TokenizeContext['defineSkip']} */

  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  } //
  // State management.
  //

  /**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {void}
   */

  function main() {
    /** @type {number} */
    var chunkIndex;
    while (point._index < chunks.length) {
      var chunk = chunks[point._index]; // If we’re in a buffer chunk, loop through it.

      if (typeof chunk === 'string') {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  /**
   * Deal with one code.
   *
   * @param {Code} code
   * @returns {void}
   */

  function go(code) {
    state = state(code);
  }
  /** @type {Effects['consume']} */

  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    } // Not in a string chunk.

    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++; // At end of string chunk.
      // @ts-expect-error Points w/ non-negative `_bufferIndex` reference
      // strings.

      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    } // Expose the previous character.

    context.previous = code; // Mark as consumed.
  }
  /** @type {Effects['enter']} */

  function enter(type, fields) {
    /** @type {Token} */
    // @ts-expect-error Patch instead of assign required fields to help GC.
    var token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(['enter', token, context]);
    stack.push(token);
    return token;
  }
  /** @type {Effects['exit']} */

  function exit(type) {
    var token = stack.pop();
    token.end = now();
    context.events.push(['exit', token, context]);
    return token;
  }
  /**
   * Use results.
   *
   * @type {ReturnHandle}
   */

  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  /**
   * Discard results.
   *
   * @type {ReturnHandle}
   */

  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  /**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   * @param {Record<string, unknown>} [fields]
   */

  function constructFactory(onreturn, fields) {
    return hook;
    /**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Construct|Array<Construct>|ConstructRecord} constructs
     * @param {State} returnState
     * @param {State} [bogusState]
     * @returns {State}
     */

    function hook(constructs, returnState, bogusState) {
      /** @type {Array<Construct>} */
      var listOfConstructs;
      /** @type {number} */

      var constructIndex;
      /** @type {Construct} */

      var currentConstruct;
      /** @type {Info} */

      var info;
      return Array.isArray(constructs) ? /* c8 ignore next 1 */
      handleListOfConstructs(constructs) : 'tokenize' in constructs // @ts-expect-error Looks like a construct.
      ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      /**
       * Handle a list of construct.
       *
       * @param {ConstructRecord} map
       * @returns {State}
       */

      function handleMapOfConstructs(map) {
        return start;
        /** @type {State} */

        function start(code) {
          var def = code !== null && map[code];
          var all = code !== null && map["null"];
          var list = [].concat(_toConsumableArray(Array.isArray(def) ? def : def ? [def] : []), _toConsumableArray(Array.isArray(all) ? all : all ? [all] : []));
          return handleListOfConstructs(list)(code);
        }
      }
      /**
       * Handle a list of construct.
       *
       * @param {Array<Construct>} list
       * @returns {State}
       */

      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      /**
       * Handle a single construct.
       *
       * @param {Construct} construct
       * @returns {State}
       */

      function handleConstruct(construct) {
        return start;
        /** @type {State} */

        function start(code) {
          // To do: not needed to store if there is no bogus state, probably?
          // Currently doesn’t work because `inspect` in document does a check
          // w/o a bogus, which doesn’t make sense. But it does seem to help perf
          // by not storing.
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable["null"].includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
          // If we do have fields, create an object w/ `context` as its
          // prototype.
          // This allows a “live binding”, which is needed for `interrupt`.
          fields ? Object.assign(Object.create(context), fields) : context, effects, ok, nok)(code);
        }
      }
      /** @type {State} */

      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      /** @type {State} */

      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  /**
   * @param {Construct} construct
   * @param {number} from
   * @returns {void}
   */

  function addResult(construct, from) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(context.events, from, context.events.length - from, construct.resolve(context.events.slice(from), context));
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  /**
   * Store state.
   *
   * @returns {Info}
   */

  function store() {
    var startPoint = now();
    var startPrevious = context.previous;
    var startCurrentConstruct = context.currentConstruct;
    var startEventsIndex = context.events.length;
    var startStack = Array.from(stack);
    return {
      restore: restore,
      from: startEventsIndex
    };
    /**
     * Restore state.
     *
     * @returns {void}
     */

    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  /**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {void}
   */

  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {Array<Chunk>} chunks
 * @param {Pick<Token, 'start'|'end'>} token
 * @returns {Array<Chunk>}
 */

function sliceChunks(chunks, token) {
  var startIndex = token.start._index;
  var startBufferIndex = token.start._bufferIndex;
  var endIndex = token.end._index;
  var endBufferIndex = token.end._bufferIndex;
  /** @type {Array<Chunk>} */

  var view;
  if (startIndex === endIndex) {
    // @ts-expect-error `_bufferIndex` is used on string chunks.
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      // @ts-expect-error `_bufferIndex` is used on string chunks.
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
/**
 * Get the string value of a slice of chunks.
 *
 * @param {Array<Chunk>} chunks
 * @param {boolean} [expandTabs=false]
 * @returns {string}
 */

function serializeChunks(chunks, expandTabs) {
  var index = -1;
  /** @type {Array<string>} */

  var result = [];
  /** @type {boolean|undefined} */

  var atTab;
  while (++index < chunks.length) {
    var chunk = chunks[index];
    /** @type {string} */

    var value = void 0;
    if (typeof chunk === 'string') {
      value = chunk;
    } else switch (chunk) {
      case -5:
        {
          value = '\r';
          break;
        }
      case -4:
        {
          value = '\n';
          break;
        }
      case -3:
        {
          value = '\r' + '\n';
          break;
        }
      case -2:
        {
          value = expandTabs ? ' ' : '\t';
          break;
        }
      case -1:
        {
          if (!expandTabs && atTab) continue;
          value = ' ';
          break;
        }
      default:
        {
          // Currently only replacement character.
          value = String.fromCharCode(chunk);
        }
    }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join('');
}

var _document, _flowInitial, _flow, _string, _text;
/** @type {Extension['document']} */

var document$1 = (_document = {}, _defineProperty(_document, 42, list$1), _defineProperty(_document, 43, list$1), _defineProperty(_document, 45, list$1), _defineProperty(_document, 48, list$1), _defineProperty(_document, 49, list$1), _defineProperty(_document, 50, list$1), _defineProperty(_document, 51, list$1), _defineProperty(_document, 52, list$1), _defineProperty(_document, 53, list$1), _defineProperty(_document, 54, list$1), _defineProperty(_document, 55, list$1), _defineProperty(_document, 56, list$1), _defineProperty(_document, 57, list$1), _defineProperty(_document, 62, blockQuote), _document);
/** @type {Extension['contentInitial']} */

var contentInitial = _defineProperty({}, 91, definition);
/** @type {Extension['flowInitial']} */

var flowInitial = (_flowInitial = {}, _defineProperty(_flowInitial, -2, codeIndented), _defineProperty(_flowInitial, -1, codeIndented), _defineProperty(_flowInitial, 32, codeIndented), _flowInitial);
/** @type {Extension['flow']} */

var flow = (_flow = {}, _defineProperty(_flow, 35, headingAtx), _defineProperty(_flow, 42, thematicBreak$1), _defineProperty(_flow, 45, [setextUnderline, thematicBreak$1]), _defineProperty(_flow, 60, htmlFlow), _defineProperty(_flow, 61, setextUnderline), _defineProperty(_flow, 95, thematicBreak$1), _defineProperty(_flow, 96, codeFenced), _defineProperty(_flow, 126, codeFenced), _flow);
/** @type {Extension['string']} */

var string = (_string = {}, _defineProperty(_string, 38, characterReference), _defineProperty(_string, 92, characterEscape), _string);
/** @type {Extension['text']} */

var text$1 = (_text = {}, _defineProperty(_text, -5, lineEnding), _defineProperty(_text, -4, lineEnding), _defineProperty(_text, -3, lineEnding), _defineProperty(_text, 33, labelStartImage), _defineProperty(_text, 38, characterReference), _defineProperty(_text, 42, attention), _defineProperty(_text, 60, [autolink, htmlText]), _defineProperty(_text, 91, labelStartLink), _defineProperty(_text, 92, [hardBreakEscape, characterEscape]), _defineProperty(_text, 93, labelEnd), _defineProperty(_text, 95, attention), _defineProperty(_text, 96, codeText), _text);
/** @type {Extension['insideSpan']} */

var insideSpan = {
  "null": [attention, resolver]
};
/** @type {Extension['attentionMarkers']} */

var attentionMarkers = {
  "null": [42, 95]
};
/** @type {Extension['disable']} */

var disable = {
  "null": []
};

var defaultConstructs = /*#__PURE__*/Object.freeze({
    __proto__: null,
    document: document$1,
    contentInitial: contentInitial,
    flowInitial: flowInitial,
    flow: flow,
    string: string,
    text: text$1,
    insideSpan: insideSpan,
    attentionMarkers: attentionMarkers,
    disable: disable
});

/**
 * @typedef {import('micromark-util-types').InitialConstruct} InitialConstruct
 * @typedef {import('micromark-util-types').FullNormalizedExtension} FullNormalizedExtension
 * @typedef {import('micromark-util-types').ParseOptions} ParseOptions
 * @typedef {import('micromark-util-types').ParseContext} ParseContext
 * @typedef {import('micromark-util-types').Create} Create
 */
/**
 * @param {ParseOptions} [options]
 * @returns {ParseContext}
 */

function parse$1() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  /** @type {FullNormalizedExtension} */
  // @ts-expect-error `defaultConstructs` is full, so the result will be too.
  var constructs = combineExtensions(
  // @ts-expect-error Same as above.
  [defaultConstructs].concat(options.extensions || []));
  /** @type {ParseContext} */

  var parser = {
    defined: [],
    lazy: {},
    constructs: constructs,
    content: create(content$1),
    document: create(document$2),
    flow: create(flow$1),
    string: create(string$1),
    text: create(text$2)
  };
  return parser;
  /**
   * @param {InitialConstruct} initial
   */

  function create(initial) {
    return creator;
    /** @type {Create} */

    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}

/**
 * @typedef {import('micromark-util-types').Encoding} Encoding
 * @typedef {import('micromark-util-types').Value} Value
 * @typedef {import('micromark-util-types').Chunk} Chunk
 * @typedef {import('micromark-util-types').Code} Code
 */

/**
 * @callback Preprocessor
 * @param {Value} value
 * @param {Encoding} [encoding]
 * @param {boolean} [end=false]
 * @returns {Array<Chunk>}
 */
var search = /[\0\t\n\r]/g;
/**
 * @returns {Preprocessor}
 */

function preprocess() {
  var column = 1;
  var buffer = '';
  /** @type {boolean|undefined} */

  var start = true;
  /** @type {boolean|undefined} */

  var atCarriageReturn;
  return preprocessor;
  /** @type {Preprocessor} */

  function preprocessor(value, encoding, end) {
    /** @type {Array<Chunk>} */
    var chunks = [];
    /** @type {RegExpMatchArray|null} */

    var match;
    /** @type {number} */

    var next;
    /** @type {number} */

    var startPosition;
    /** @type {number} */

    var endPosition;
    /** @type {Code} */

    var code; // @ts-expect-error `Buffer` does allow an encoding.

    value = buffer + value.toString(encoding);
    startPosition = 0;
    buffer = '';
    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }
      start = undefined;
    }
    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match && match.index !== undefined ? match.index : value.length;
      code = value.charCodeAt(endPosition);
      if (!match) {
        buffer = value.slice(startPosition);
        break;
      }
      if (code === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = undefined;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = undefined;
        }
        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }
        switch (code) {
          case 0:
            {
              chunks.push(65533);
              column++;
              break;
            }
          case 9:
            {
              next = Math.ceil(column / 4) * 4;
              chunks.push(-2);
              while (column++ < next) {
                chunks.push(-1);
              }
              break;
            }
          case 10:
            {
              chunks.push(-4);
              column = 1;
              break;
            }
          default:
            {
              atCarriageReturn = true;
              column = 1;
            }
        }
      }
      startPosition = endPosition + 1;
    }
    if (end) {
      if (atCarriageReturn) chunks.push(-5);
      if (buffer) chunks.push(buffer);
      chunks.push(null);
    }
    return chunks;
  }
}

/**
 * @typedef {import('micromark-util-types').Event} Event
 */
/**
 * @param {Array<Event>} events
 * @returns {Array<Event>}
 */

function postprocess(events) {
  while (!subtokenize(events)) {
    // Empty
  }
  return events;
}

/**
 * Turn the number (in string form as either hexa- or plain decimal) coming from
 * a numeric character reference into a character.
 *
 * @param {string} value
 *   Value to decode.
 * @param {number} base
 *   Numeric base.
 * @returns {string}
 */
function decodeNumericCharacterReference(value, base) {
  var code = Number.parseInt(value, base);
  if (
  // C0 except for HT, LF, FF, CR, space
  code < 9 || code === 11 || code > 13 && code < 32 ||
  // Control character (DEL) of the basic block and C1 controls.
  code > 126 && code < 160 ||
  // Lone high surrogates and low surrogates.
  code > 55295 && code < 57344 ||
  // Noncharacters.
  code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 ||
  // Out of range
  code > 1114111) {
    return "\uFFFD";
  }
  return String.fromCharCode(code);
}

var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
/**
 * Utility to decode markdown strings (which occur in places such as fenced
 * code info strings, destinations, labels, and titles).
 * The “string” content type allows character escapes and -references.
 * This decodes those.
 *
 * @param {string} value
 * @returns {string}
 */

function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
/**
 * @param {string} $0
 * @param {string} $1
 * @param {string} $2
 * @returns {string}
 */

function decode($0, $1, $2) {
  if ($1) {
    // Escape.
    return $1;
  } // Reference.

  var head = $2.charCodeAt(0);
  if (head === 35) {
    var _head = $2.charCodeAt(1);
    var hex = _head === 120 || _head === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}

var own$6 = {}.hasOwnProperty;
/**
 * @param value Markdown to parse (`string` or `Buffer`).
 * @param [encoding] Character encoding to understand `value` as when it’s a `Buffer` (`string`, default: `'utf8'`).
 * @param [options] Configuration
 */

var fromMarkdown =
/**
 * @type {(
 *   ((value: Value, encoding: Encoding, options?: Options) => Root) &
 *   ((value: Value, options?: Options) => Root)
 * )}
 */

/**
 * @param {Value} value
 * @param {Encoding} [encoding]
 * @param {Options} [options]
 * @returns {Root}
 */
function fromMarkdown(value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding;
    encoding = undefined;
  }
  return compiler(options)(postprocess(parse$1(options).document().write(preprocess()(value, encoding, true))));
};
/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options} [options]
 */

function compiler() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  /** @type {NormalizedExtension} */
  // @ts-expect-error: our base has all required fields, so the result will too.
  var config = configure({
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: opener(link),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading),
      blockQuote: opener(blockQuote),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis),
      hardBreakEscape: opener(hardBreak),
      hardBreakTrailing: opener(hardBreak),
      htmlFlow: opener(html, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html, buffer),
      htmlTextData: onenterdata,
      image: opener(image),
      label: buffer,
      link: opener(link),
      listItem: opener(listItem),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list, onenterlistordered),
      listUnordered: opener(list),
      paragraph: opener(paragraph),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading),
      strong: opener(strong),
      thematicBreak: opener(thematicBreak)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  }, options.mdastExtensions || []);
  /** @type {CompileData} */

  var data = {};
  return compile;
  /**
   * @param {Array<Event>} events
   * @returns {Root}
   */

  function compile(events) {
    /** @type {Root} */
    var tree = {
      type: 'root',
      children: []
    };
    /** @type {CompileContext['stack']} */

    var stack = [tree];
    /** @type {CompileContext['tokenStack']} */

    var tokenStack = [];
    /** @type {Array<number>} */

    var listStack = [];
    /** @type {Omit<CompileContext, 'sliceSerialize'>} */

    var context = {
      stack: stack,
      tokenStack: tokenStack,
      config: config,
      enter: enter,
      exit: exit,
      buffer: buffer,
      resume: resume,
      setData: setData,
      getData: getData
    };
    var index = -1;
    while (++index < events.length) {
      // We preprocess lists to add `listItem` tokens, and to infer whether
      // items the list itself are spread out.
      if (events[index][1].type === 'listOrdered' || events[index][1].type === 'listUnordered') {
        if (events[index][0] === 'enter') {
          listStack.push(index);
        } else {
          var tail = listStack.pop();
          index = prepareList(events, tail, index);
        }
      }
    }
    index = -1;
    while (++index < events.length) {
      var handler = config[events[index][0]];
      if (own$6.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(Object.assign({
          sliceSerialize: events[index][2].sliceSerialize
        }, context), events[index][1]);
      }
    }
    if (tokenStack.length > 0) {
      var _tail = tokenStack[tokenStack.length - 1];
      var _handler = _tail[1] || defaultOnError;
      _handler.call(context, undefined, _tail[0]);
    } // Figure out `root` position.

    tree.position = {
      start: point(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };
    index = -1;
    while (++index < config.transforms.length) {
      tree = config.transforms[index](tree) || tree;
    }
    return tree;
  }
  /**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */

  function prepareList(events, start, length) {
    var index = start - 1;
    var containerBalance = -1;
    var listSpread = false;
    /** @type {Token|undefined} */

    var listItem;
    /** @type {number|undefined} */

    var lineIndex;
    /** @type {number|undefined} */

    var firstBlankLineIndex;
    /** @type {boolean|undefined} */

    var atMarker;
    while (++index <= length) {
      var event = events[index];
      if (event[1].type === 'listUnordered' || event[1].type === 'listOrdered' || event[1].type === 'blockQuote') {
        if (event[0] === 'enter') {
          containerBalance++;
        } else {
          containerBalance--;
        }
        atMarker = undefined;
      } else if (event[1].type === 'lineEndingBlank') {
        if (event[0] === 'enter') {
          if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) {
            firstBlankLineIndex = index;
          }
          atMarker = undefined;
        }
      } else if (event[1].type === 'linePrefix' || event[1].type === 'listItemValue' || event[1].type === 'listItemMarker' || event[1].type === 'listItemPrefix' || event[1].type === 'listItemPrefixWhitespace') ; else {
        atMarker = undefined;
      }
      if (!containerBalance && event[0] === 'enter' && event[1].type === 'listItemPrefix' || containerBalance === -1 && event[0] === 'exit' && (event[1].type === 'listUnordered' || event[1].type === 'listOrdered')) {
        if (listItem) {
          var tailIndex = index;
          lineIndex = undefined;
          while (tailIndex--) {
            var tailEvent = events[tailIndex];
            if (tailEvent[1].type === 'lineEnding' || tailEvent[1].type === 'lineEndingBlank') {
              if (tailEvent[0] === 'exit') continue;
              if (lineIndex) {
                events[lineIndex][1].type = 'lineEndingBlank';
                listSpread = true;
              }
              tailEvent[1].type = 'lineEnding';
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === 'linePrefix' || tailEvent[1].type === 'blockQuotePrefix' || tailEvent[1].type === 'blockQuotePrefixWhitespace' || tailEvent[1].type === 'blockQuoteMarker' || tailEvent[1].type === 'listItemIndent') ; else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            // @ts-expect-error Patched.
            listItem._spread = true;
          } // Fix position.

          listItem.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]]);
          index++;
          length++;
        } // Create a new list item.

        if (event[1].type === 'listItemPrefix') {
          listItem = {
            type: 'listItem',
            // @ts-expect-error Patched
            _spread: false,
            start: Object.assign({}, event[1].start)
          }; // @ts-expect-error: `listItem` is most definitely defined, TS...

          events.splice(index, 0, ['enter', listItem, event[2]]);
          index++;
          length++;
          firstBlankLineIndex = undefined;
          atMarker = true;
        }
      }
    } // @ts-expect-error Patched.

    events[start][1]._spread = listSpread;
    return length;
  }
  /**
   * @type {CompileContext['setData']}
   * @param [value]
   */

  function setData(key, value) {
    data[key] = value;
  }
  /**
   * @type {CompileContext['getData']}
   * @template {string} K
   * @param {K} key
   * @returns {CompileData[K]}
   */

  function getData(key) {
    return data[key];
  }
  /**
   * @param {Point} d
   * @returns {Point}
   */

  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  /**
   * @param {(token: Token) => Node} create
   * @param {Handle} [and]
   * @returns {Handle}
   */

  function opener(create, and) {
    return open;
    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */

    function open(token) {
      enter.call(this, create(token), token);
      if (and) and.call(this, token);
    }
  }
  /** @type {CompileContext['buffer']} */

  function buffer() {
    this.stack.push({
      type: 'fragment',
      children: []
    });
  }
  /**
   * @type {CompileContext['enter']}
   * @template {Node} N
   * @this {CompileContext}
   * @param {N} node
   * @param {Token} token
   * @param {OnEnterError} [errorHandler]
   * @returns {N}
   */

  function enter(node, token, errorHandler) {
    var parent = this.stack[this.stack.length - 1];
    // @ts-expect-error: Assume `Node` can exist as a child of `parent`.
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]); // @ts-expect-error: `end` will be patched later.

    node.position = {
      start: point(token.start)
    };
    return node;
  }
  /**
   * @param {Handle} [and]
   * @returns {Handle}
   */

  function closer(and) {
    return close;
    /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {void}
     */

    function close(token) {
      if (and) and.call(this, token);
      exit.call(this, token);
    }
  }
  /**
   * @type {CompileContext['exit']}
   * @this {CompileContext}
   * @param {Token} token
   * @param {OnExitError} [onExitError]
   * @returns {Node}
   */

  function exit(token, onExitError) {
    var node = this.stack.pop();
    var open = this.tokenStack.pop();
    if (!open) {
      throw new Error('Cannot close `' + token.type + '` (' + stringifyPosition({
        start: token.start,
        end: token.end
      }) + '): it’s not open');
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        var handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  /**
   * @this {CompileContext}
   * @returns {string}
   */

  function resume() {
    return toString(this.stack.pop());
  } //
  // Handlers.
  //

  /** @type {Handle} */

  function onenterlistordered() {
    setData('expectingFirstListItemValue', true);
  }
  /** @type {Handle} */

  function onenterlistitemvalue(token) {
    if (getData('expectingFirstListItemValue')) {
      var ancestor = /** @type {List} */
      this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      setData('expectingFirstListItemValue');
    }
  }
  /** @type {Handle} */

  function onexitcodefencedfenceinfo() {
    var data = this.resume();
    var node = /** @type {Code} */
    this.stack[this.stack.length - 1];
    node.lang = data;
  }
  /** @type {Handle} */

  function onexitcodefencedfencemeta() {
    var data = this.resume();
    var node = /** @type {Code} */
    this.stack[this.stack.length - 1];
    node.meta = data;
  }
  /** @type {Handle} */

  function onexitcodefencedfence() {
    // Exit if this is the closing fence.
    if (getData('flowCodeInside')) return;
    this.buffer();
    setData('flowCodeInside', true);
  }
  /** @type {Handle} */

  function onexitcodefenced() {
    var data = this.resume();
    var node = /** @type {Code} */
    this.stack[this.stack.length - 1];
    node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
    setData('flowCodeInside');
  }
  /** @type {Handle} */

  function onexitcodeindented() {
    var data = this.resume();
    var node = /** @type {Code} */
    this.stack[this.stack.length - 1];
    node.value = data.replace(/(\r?\n|\r)$/g, '');
  }
  /** @type {Handle} */

  function onexitdefinitionlabelstring(token) {
    // Discard label, use the source content instead.
    var label = this.resume();
    var node = /** @type {Definition} */
    this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  /** @type {Handle} */

  function onexitdefinitiontitlestring() {
    var data = this.resume();
    var node = /** @type {Definition} */
    this.stack[this.stack.length - 1];
    node.title = data;
  }
  /** @type {Handle} */

  function onexitdefinitiondestinationstring() {
    var data = this.resume();
    var node = /** @type {Definition} */
    this.stack[this.stack.length - 1];
    node.url = data;
  }
  /** @type {Handle} */

  function onexitatxheadingsequence(token) {
    var node = /** @type {Heading} */
    this.stack[this.stack.length - 1];
    if (!node.depth) {
      var depth = this.sliceSerialize(token).length;
      node.depth = depth;
    }
  }
  /** @type {Handle} */

  function onexitsetextheadingtext() {
    setData('setextHeadingSlurpLineEnding', true);
  }
  /** @type {Handle} */

  function onexitsetextheadinglinesequence(token) {
    var node = /** @type {Heading} */
    this.stack[this.stack.length - 1];
    node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }
  /** @type {Handle} */

  function onexitsetextheading() {
    setData('setextHeadingSlurpLineEnding');
  }
  /** @type {Handle} */

  function onenterdata(token) {
    var parent = /** @type {Parent} */
    this.stack[this.stack.length - 1];
    /** @type {Node} */

    var tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== 'text') {
      // Add a new text node.
      tail = text(); // @ts-expect-error: we’ll add `end` later.

      tail.position = {
        start: point(token.start)
      }; // @ts-expect-error: Assume `parent` accepts `text`.

      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  /** @type {Handle} */

  function onexitdata(token) {
    var tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point(token.end);
  }
  /** @type {Handle} */

  function onexitlineending(token) {
    var context = this.stack[this.stack.length - 1];

    // If we’re at a hard break, include the line ending in there.
    if (getData('atHardBreak')) {
      var tail = context.children[context.children.length - 1];
      tail.position.end = point(token.end);
      setData('atHardBreak');
      return;
    }
    if (!getData('setextHeadingSlurpLineEnding') && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  /** @type {Handle} */

  function onexithardbreak() {
    setData('atHardBreak', true);
  }
  /** @type {Handle} */

  function onexithtmlflow() {
    var data = this.resume();
    var node = /** @type {HTML} */
    this.stack[this.stack.length - 1];
    node.value = data;
  }
  /** @type {Handle} */

  function onexithtmltext() {
    var data = this.resume();
    var node = /** @type {HTML} */
    this.stack[this.stack.length - 1];
    node.value = data;
  }
  /** @type {Handle} */

  function onexitcodetext() {
    var data = this.resume();
    var node = /** @type {InlineCode} */
    this.stack[this.stack.length - 1];
    node.value = data;
  }
  /** @type {Handle} */

  function onexitlink() {
    var context = /** @type {Link & {identifier: string, label: string}} */
    this.stack[this.stack.length - 1]; // To do: clean.

    if (getData('inReference')) {
      context.type += 'Reference'; // @ts-expect-error: mutate.

      context.referenceType = getData('referenceType') || 'shortcut'; // @ts-expect-error: mutate.

      delete context.url;
      delete context.title;
    } else {
      // @ts-expect-error: mutate.
      delete context.identifier; // @ts-expect-error: mutate.

      delete context.label;
    }
    setData('referenceType');
  }
  /** @type {Handle} */

  function onexitimage() {
    var context = /** @type {Image & {identifier: string, label: string}} */
    this.stack[this.stack.length - 1]; // To do: clean.

    if (getData('inReference')) {
      context.type += 'Reference'; // @ts-expect-error: mutate.

      context.referenceType = getData('referenceType') || 'shortcut'; // @ts-expect-error: mutate.

      delete context.url;
      delete context.title;
    } else {
      // @ts-expect-error: mutate.
      delete context.identifier; // @ts-expect-error: mutate.

      delete context.label;
    }
    setData('referenceType');
  }
  /** @type {Handle} */

  function onexitlabeltext(token) {
    var ancestor = /** @type {(Link|Image) & {identifier: string, label: string}} */
    this.stack[this.stack.length - 2];
    var string = this.sliceSerialize(token);
    ancestor.label = decodeString(string);
    ancestor.identifier = normalizeIdentifier(string).toLowerCase();
  }
  /** @type {Handle} */

  function onexitlabel() {
    var fragment = /** @type {Fragment} */
    this.stack[this.stack.length - 1];
    var value = this.resume();
    var node = /** @type {(Link|Image) & {identifier: string, label: string}} */
    this.stack[this.stack.length - 1]; // Assume a reference.

    setData('inReference', true);
    if (node.type === 'link') {
      // @ts-expect-error: Assume static phrasing content.
      node.children = fragment.children;
    } else {
      node.alt = value;
    }
  }
  /** @type {Handle} */

  function onexitresourcedestinationstring() {
    var data = this.resume();
    var node = /** @type {Link|Image} */
    this.stack[this.stack.length - 1];
    node.url = data;
  }
  /** @type {Handle} */

  function onexitresourcetitlestring() {
    var data = this.resume();
    var node = /** @type {Link|Image} */
    this.stack[this.stack.length - 1];
    node.title = data;
  }
  /** @type {Handle} */

  function onexitresource() {
    setData('inReference');
  }
  /** @type {Handle} */

  function onenterreference() {
    setData('referenceType', 'collapsed');
  }
  /** @type {Handle} */

  function onexitreferencestring(token) {
    var label = this.resume();
    var node = /** @type {LinkReference|ImageReference} */
    this.stack[this.stack.length - 1];
    node.label = label;
    node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
    setData('referenceType', 'full');
  }
  /** @type {Handle} */

  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type);
  }
  /** @type {Handle} */

  function onexitcharacterreferencevalue(token) {
    var data = this.sliceSerialize(token);
    var type = getData('characterReferenceType');
    /** @type {string} */

    var value;
    if (type) {
      value = decodeNumericCharacterReference(data, type === 'characterReferenceMarkerNumeric' ? 10 : 16);
      setData('characterReferenceType');
    } else {
      // @ts-expect-error `decodeNamedCharacterReference` can return false for
      // invalid named character references, but everything we’ve tokenized is
      // valid.
      value = decodeNamedCharacterReference(data);
    }
    var tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point(token.end);
  }
  /** @type {Handle} */

  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    var node = /** @type {Link} */
    this.stack[this.stack.length - 1];
    node.url = this.sliceSerialize(token);
  }
  /** @type {Handle} */

  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    var node = /** @type {Link} */
    this.stack[this.stack.length - 1];
    node.url = 'mailto:' + this.sliceSerialize(token);
  } //
  // Creaters.
  //

  /** @returns {Blockquote} */

  function blockQuote() {
    return {
      type: 'blockquote',
      children: []
    };
  }
  /** @returns {Code} */

  function codeFlow() {
    return {
      type: 'code',
      lang: null,
      meta: null,
      value: ''
    };
  }
  /** @returns {InlineCode} */

  function codeText() {
    return {
      type: 'inlineCode',
      value: ''
    };
  }
  /** @returns {Definition} */

  function definition() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: ''
    };
  }
  /** @returns {Emphasis} */

  function emphasis() {
    return {
      type: 'emphasis',
      children: []
    };
  }
  /** @returns {Heading} */

  function heading() {
    // @ts-expect-error `depth` will be set later.
    return {
      type: 'heading',
      depth: undefined,
      children: []
    };
  }
  /** @returns {Break} */

  function hardBreak() {
    return {
      type: 'break'
    };
  }
  /** @returns {HTML} */

  function html() {
    return {
      type: 'html',
      value: ''
    };
  }
  /** @returns {Image} */

  function image() {
    return {
      type: 'image',
      title: null,
      url: '',
      alt: null
    };
  }
  /** @returns {Link} */

  function link() {
    return {
      type: 'link',
      title: null,
      url: '',
      children: []
    };
  }
  /**
   * @param {Token} token
   * @returns {List}
   */

  function list(token) {
    return {
      type: 'list',
      ordered: token.type === 'listOrdered',
      start: null,
      // @ts-expect-error Patched.
      spread: token._spread,
      children: []
    };
  }
  /**
   * @param {Token} token
   * @returns {ListItem}
   */

  function listItem(token) {
    return {
      type: 'listItem',
      // @ts-expect-error Patched.
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  /** @returns {Paragraph} */

  function paragraph() {
    return {
      type: 'paragraph',
      children: []
    };
  }
  /** @returns {Strong} */

  function strong() {
    return {
      type: 'strong',
      children: []
    };
  }
  /** @returns {Text} */

  function text() {
    return {
      type: 'text',
      value: ''
    };
  }
  /** @returns {ThematicBreak} */

  function thematicBreak() {
    return {
      type: 'thematicBreak'
    };
  }
}
/**
 * @param {Extension} combined
 * @param {Array<Extension|Array<Extension>>} extensions
 * @returns {Extension}
 */

function configure(combined, extensions) {
  var index = -1;
  while (++index < extensions.length) {
    var value = extensions[index];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
  return combined;
}
/**
 * @param {Extension} combined
 * @param {Extension} extension
 * @returns {void}
 */

function extension(combined, extension) {
  /** @type {string} */
  var key;
  for (key in extension) {
    if (own$6.call(extension, key)) {
      var list = key === 'canContainEols' || key === 'transforms';
      var maybe = own$6.call(combined, key) ? combined[key] : undefined;
      /* c8 ignore next */

      var left = maybe || (combined[key] = list ? [] : {});
      var right = extension[key];
      if (right) {
        if (list) {
          // @ts-expect-error: `left` is an array.
          combined[key] = [].concat(_toConsumableArray(left), _toConsumableArray(right));
        } else {
          Object.assign(left, right);
        }
      }
    }
  }
}
/** @type {OnEnterError} */

function defaultOnError(left, right) {
  if (left) {
    throw new Error('Cannot close `' + left.type + '` (' + stringifyPosition({
      start: left.start,
      end: left.end
    }) + '): a different token (`' + right.type + '`, ' + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ') is open');
  } else {
    throw new Error('Cannot close document, a token (`' + right.type + '`, ' + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ') is still open');
  }
}

/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-from-markdown').Options} Options
 */

/** @type {import('unified').Plugin<[Options?] | void[], string, Root>} */
function remarkParse(options) {
  var _this = this;
  /** @type {import('unified').ParserFunction<Root>} */
  var parser = function parser(doc) {
    // Assume options.
    var settings = /** @type {Options} */_this.data('settings');
    return fromMarkdown(doc, Object.assign({}, settings, options, {
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: _this.data('micromarkExtensions') || [],
      mdastExtensions: _this.data('fromMarkdownExtensions') || []
    }));
  };
  Object.assign(this, {
    Parser: parser
  });
}

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist').Literal} Literal
 * @typedef {Object.<string, unknown>} Props
 * @typedef {Array.<Node>|string} ChildrenOrValue
 *
 * @typedef {(<T extends string, P extends Record<string, unknown>, C extends Node[]>(type: T, props: P, children: C) => {type: T, children: C} & P)} BuildParentWithProps
 * @typedef {(<T extends string, P extends Record<string, unknown>>(type: T, props: P, value: string) => {type: T, value: string} & P)} BuildLiteralWithProps
 * @typedef {(<T extends string, P extends Record<string, unknown>>(type: T, props: P) => {type: T} & P)} BuildVoidWithProps
 * @typedef {(<T extends string, C extends Node[]>(type: T, children: C) => {type: T, children: C})} BuildParent
 * @typedef {(<T extends string>(type: T, value: string) => {type: T, value: string})} BuildLiteral
 * @typedef {(<T extends string>(type: T) => {type: T})} BuildVoid
 */

var u =
/**
* @type {BuildVoid & BuildVoidWithProps & BuildLiteral & BuildLiteralWithProps & BuildParent & BuildParentWithProps}
*/
/**
 * @param {string} type Type of node
 * @param {Props|ChildrenOrValue} [props] Additional properties for node (or `children` or `value`)
 * @param {ChildrenOrValue} [value] `children` or `value` of node
 * @returns {Node}
 */
function u(type, props, value) {
  /** @type {Node} */
  var node = {
    type: String(type)
  };
  if ((value === undefined || value === null) && (typeof props === 'string' || Array.isArray(props))) {
    value = props;
  } else {
    Object.assign(node, props);
  }
  if (Array.isArray(value)) {
    node.children = value;
  } else if (value !== undefined && value !== null) {
    node.value = String(value);
  }
  return node;
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var own$5 = {}.hasOwnProperty;

/**
 * Transform an unknown node.
 * @type {Handler}
 * @param {MdastNode} node
 */
function unknown(h, node) {
  var data = node.data || {};
  if ('value' in node && !(own$5.call(data, 'hName') || own$5.call(data, 'hProperties') || own$5.call(data, 'hChildren'))) {
    return h.augment(node, u('text', node.value));
  }
  return h(node, 'div', all(h, node));
}

/**
 * @type {Handler}
 * @param {MdastNode} node
 */
function one(h, node, parent) {
  var type = node && node.type;
  /** @type {Handler} */
  var fn;

  // Fail on non-nodes.
  if (!type) {
    throw new Error('Expected node, got `' + node + '`');
  }
  if (own$5.call(h.handlers, type)) {
    fn = h.handlers[type];
  } else if (h.passThrough && h.passThrough.includes(type)) {
    fn = returnNode;
  } else {
    fn = h.unknownHandler;
  }
  return (typeof fn === 'function' ? fn : unknown)(h, node, parent);
}

/**
 * @type {Handler}
 * @param {MdastNode} node
 */
function returnNode(h, node) {
  // @ts-expect-error: Pass through custom node.
  return 'children' in node ? _objectSpread$6(_objectSpread$6({}, node), {}, {
    children: all(h, node)
  }) : node;
}

/**
 * @param {H} h
 * @param {MdastNode} parent
 */
function all(h, parent) {
  /** @type {Array<Content>} */
  var values = [];
  if ('children' in parent) {
    var nodes = parent.children;
    var index = -1;
    while (++index < nodes.length) {
      var result = one(h, nodes[index], parent);
      if (result) {
        if (index && nodes[index - 1].type === 'break') {
          if (!Array.isArray(result) && result.type === 'text') {
            result.value = result.value.replace(/^\s+/, '');
          }
          if (!Array.isArray(result) && result.type === 'element') {
            var head = result.children[0];
            if (head && head.type === 'text') {
              head.value = head.value.replace(/^\s+/, '');
            }
          }
        }
        if (Array.isArray(result)) {
          values.push.apply(values, _toConsumableArray(result));
        } else {
          values.push(result);
        }
      }
    }
  }
  return values;
}

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 *
 * @typedef {string} Type
 * @typedef {Object<string, unknown>} Props
 *
 * @typedef {null|undefined|Type|Props|TestFunctionAnything|Array.<Type|Props|TestFunctionAnything>} Test
 */
var convert =
/**
 * @type {(
 *   (<T extends Node>(test: T['type']|Partial<T>|TestFunctionPredicate<T>) => AssertPredicate<T>) &
 *   ((test?: Test) => AssertAnything)
 * )}
 */

/**
 * Generate an assertion from a check.
 * @param {Test} [test]
 * When nullish, checks if `node` is a `Node`.
 * When `string`, works like passing `function (node) {return node.type === test}`.
 * When `function` checks if function passed the node is true.
 * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
 * When `array`, checks any one of the subtests pass.
 * @returns {AssertAnything}
 */
function convert(test) {
  if (test === undefined || test === null) {
    return ok;
  }
  if (typeof test === 'string') {
    return typeFactory(test);
  }
  if (typeof test === 'object') {
    return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
  }
  if (typeof test === 'function') {
    return castFactory(test);
  }
  throw new Error('Expected function, string, or object as test');
};
/**
 * @param {Array.<Type|Props|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */
function anyFactory(tests) {
  /** @type {Array.<AssertAnything>} */
  var checks = [];
  var index = -1;
  while (++index < tests.length) {
    checks[index] = convert(tests[index]);
  }
  return castFactory(any);

  /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */
  function any() {
    var index = -1;
    for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
      parameters[_key] = arguments[_key];
    }
    while (++index < checks.length) {
      var _checks$index;
      if ((_checks$index = checks[index]).call.apply(_checks$index, [this].concat(parameters))) return true;
    }
    return false;
  }
}

/**
 * Utility to assert each property in `test` is represented in `node`, and each
 * values are strictly equal.
 *
 * @param {Props} check
 * @returns {AssertAnything}
 */
function propsFactory(check) {
  return castFactory(all);

  /**
   * @param {Node} node
   * @returns {boolean}
   */
  function all(node) {
    /** @type {string} */
    var key;
    for (key in check) {
      // @ts-expect-error: hush, it sure works as an index.
      if (node[key] !== check[key]) return false;
    }
    return true;
  }
}

/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 *
 * @param {Type} check
 * @returns {AssertAnything}
 */
function typeFactory(check) {
  return castFactory(type);

  /**
   * @param {Node} node
   */
  function type(node) {
    return node && node.type === check;
  }
}

/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */
function castFactory(check) {
  return assertion;

  /**
   * @this {unknown}
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */
  function assertion() {
    for (var _len2 = arguments.length, parameters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      parameters[_key2] = arguments[_key2];
    }
    // @ts-expect-error: spreading is fine.
    return Boolean(check.call.apply(check, [this].concat(parameters)));
  }
}

// Utility to return true.
function ok() {
  return true;
}

/**
 * @param {string} d
 * @returns {string}
 */
function color(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('./complex-types.js').Action} Action
 * @typedef {import('./complex-types.js').Index} Index
 * @typedef {import('./complex-types.js').ActionTuple} ActionTuple
 * @typedef {import('./complex-types.js').VisitorResult} VisitorResult
 * @typedef {import('./complex-types.js').Visitor} Visitor
 */

/**
 * Continue traversing as normal
 */
var CONTINUE = true;
/**
 * Do not traverse this node’s children
 */
var SKIP = 'skip';
/**
 * Stop traversing immediately
 */
var EXIT = false;

/**
 * Visit children of tree which pass test.
 *
 * @param tree
 *   Tree to walk
 * @param [test]
 *   `unist-util-is`-compatible test
 * @param visitor
 *   Function called for nodes that pass `test`.
 * @param [reverse=false]
 *   Traverse in reverse preorder (NRL) instead of preorder (NLR) (default).
 */
var visitParents =
/**
 * @type {(
 *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: import('./complex-types.js').BuildVisitor<Tree, Check>, reverse?: boolean) => void) &
 *   (<Tree extends Node>(tree: Tree, visitor: import('./complex-types.js').BuildVisitor<Tree>, reverse?: boolean) => void)
 * )}
 */

/**
 * @param {Node} tree
 * @param {Test} test
 * @param {import('./complex-types.js').Visitor<Node>} visitor
 * @param {boolean} [reverse=false]
 */
function visitParents(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    // @ts-expect-error no visitor given, so `visitor` is test.
    visitor = test;
    test = null;
  }
  var is = convert(test);
  var step = reverse ? -1 : 1;
  factory(tree, null, [])();

  /**
   * @param {Node} node
   * @param {number?} index
   * @param {Array<Parent>} parents
   */
  function factory(node, index, parents) {
    /** @type {Record<string, unknown>} */
    // @ts-expect-error: hush
    var value = typeof node === 'object' && node !== null ? node : {};
    /** @type {string|undefined} */
    var name;
    if (typeof value.type === 'string') {
      name = typeof value.tagName === 'string' ? value.tagName : typeof value.name === 'string' ? value.name : undefined;
      Object.defineProperty(visit, 'name', {
        value: 'node (' + color(value.type + (name ? '<' + name + '>' : '')) + ')'
      });
    }
    return visit;
    function visit() {
      /** @type {ActionTuple} */
      var result = [];
      /** @type {ActionTuple} */
      var subresult;
      /** @type {number} */
      var offset;
      /** @type {Array<Parent>} */
      var grandparents;
      if (!test || is(node, index, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }

      // @ts-expect-error looks like a parent.
      if (node.children && result[0] !== SKIP) {
        // @ts-expect-error looks like a parent.
        offset = (reverse ? node.children.length : -1) + step;
        // @ts-expect-error looks like a parent.
        grandparents = parents.concat(node);

        // @ts-expect-error looks like a parent.
        while (offset > -1 && offset < node.children.length) {
          // @ts-expect-error looks like a parent.
          subresult = factory(node.children[offset], offset, grandparents)();
          if (subresult[0] === EXIT) {
            return subresult;
          }
          offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step;
        }
      }
      return result;
    }
  }
};

/**
 * @param {VisitorResult} value
 * @returns {ActionTuple}
 */
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === 'number') {
    return [CONTINUE, value];
  }
  return [value];
}

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 * @typedef {import('./complex-types.js').Visitor} Visitor
 */

/**
 * Visit children of tree which pass test.
 *
 * @param tree
 *   Tree to walk
 * @param [test]
 *   `unist-util-is`-compatible test
 * @param visitor
 *   Function called for nodes that pass `test`.
 * @param reverse
 *   Traverse in reverse preorder (NRL) instead of preorder (NLR) (default).
 */
var visit =
/**
 * @type {(
 *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: import('./complex-types.js').BuildVisitor<Tree, Check>, reverse?: boolean) => void) &
 *   (<Tree extends Node>(tree: Tree, visitor: import('./complex-types.js').BuildVisitor<Tree>, reverse?: boolean) => void)
 * )}
 */

/**
 * @param {Node} tree
 * @param {Test} test
 * @param {import('./complex-types.js').Visitor} visitor
 * @param {boolean} [reverse]
 */
function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }
  visitParents(tree, test, overload, reverse);

  /**
   * @param {Node} node
   * @param {Array<Parent>} parents
   */
  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};

/**
 * @typedef {import('unist').Position} Position
 * @typedef {import('unist').Node} Node
 * @typedef {Record<string, unknown> & {type: string, position?: PositionLike|undefined}} NodeLike
 * @typedef {import('unist').Point} Point
 *
 * @typedef {Partial<Point>} PointLike
 *
 * @typedef PositionLike
 * @property {PointLike} [start]
 * @property {PointLike} [end]
 */

var pointStart = point('start');
var pointEnd = point('end');

/**
 * Get the positional info of `node`.
 *
 * @param {'start'|'end'} type
 */
function point(type) {
  return point;

  /**
   * Get the positional info of `node`.
   *
   * @param {NodeLike|Node} [node]
   * @returns {Point}
   */
  function point(node) {
    var point = node && node.position && node.position[type] || {};
    return {
      line: point.line || null,
      column: point.column || null,
      offset: point.offset > -1 ? point.offset : null
    };
  }
}

/**
 * @typedef {Object} PointLike
 * @property {number} [line]
 * @property {number} [column]
 * @property {number} [offset]
 *
 * @typedef {Object} PositionLike
 * @property {PointLike} [start]
 * @property {PointLike} [end]
 *
 * @typedef {Object} NodeLike
 * @property {PositionLike} [position]
 */

/**
 * Check if `node` is *generated*.
 *
 * @param {NodeLike} [node]
 * @returns {boolean}
 */
function generated(node) {
  return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;
}

/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 * @typedef {import('mdast').Definition} Definition
 */
var own$4 = {}.hasOwnProperty;

/**
 * Find definitions in `node`.
 * Uses CommonMark precedence, which means that earlier definitions are
 * preferred over duplicate later definitions.
 *
 * @param {Node} node
 */
function definitions(node) {
  /** @type {Record<string, Definition>} */
  var cache = Object.create(null);
  if (!node || !node.type) {
    throw new Error('mdast-util-definitions expected node');
  }
  visit(node, 'definition', function (definition) {
    var id = clean(definition.identifier);
    if (id && !own$4.call(cache, id)) {
      cache[id] = definition;
    }
  });
  return definition;

  /**
   * Get a node from the bound definition cache.
   *
   * @param {string} identifier
   * @returns {Definition|null}
   */
  function definition(identifier) {
    var id = clean(identifier);
    return id && own$4.call(cache, id) ? cache[id] : null;
  }
}

/**
 * @param {string} [value]
 * @returns {string}
 */
function clean(value) {
  return String(value || '').toUpperCase();
}

/**
 * Normalize a URL (such as used in definitions).
 *
 * Encode unsafe characters with percent-encoding, skipping already encoded
 * sequences.
 *
 * @param {string} value
 * @returns {string}
 */

function normalizeUri(value) {
  /** @type {Array<string>} */
  var result = [];
  var index = -1;
  var start = 0;
  var skip = 0;
  while (++index < value.length) {
    var code = value.charCodeAt(index);
    /** @type {string} */

    var replace = ''; // A correct percent encoded value.

    if (code === 37 && asciiAlphanumeric(value.charCodeAt(index + 1)) && asciiAlphanumeric(value.charCodeAt(index + 2))) {
      skip = 2;
    } // ASCII.
    else if (code < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {
        replace = String.fromCharCode(code);
      }
    } // Astral.
    else if (code > 55295 && code < 57344) {
      var next = value.charCodeAt(index + 1); // A correct surrogate pair.

      if (code < 56320 && next > 56319 && next < 57344) {
        replace = String.fromCharCode(code, next);
        skip = 1;
      } // Lone surrogate.
      else {
        replace = "\uFFFD";
      }
    } // Unicode.
    else {
      replace = String.fromCharCode(code);
    }
    if (replace) {
      result.push(value.slice(start, index), encodeURIComponent(replace));
      start = index + skip + 1;
      replace = '';
    }
    if (skip) {
      index += skip;
      skip = 0;
    }
  }
  return result.join('') + value.slice(start);
}

/**
 * @typedef {import('./index.js').Content} Content
 */

/**
 * Wrap `nodes` with line feeds between each entry.
 * Optionally adds line feeds at the start and end.
 *
 * @param {Array<Content>} nodes
 * @param {boolean} [loose=false]
 * @returns {Array<Content>}
 */
function wrap(nodes, loose) {
  /** @type {Array<Content>} */
  var result = [];
  var index = -1;
  if (loose) {
    result.push(u('text', '\n'));
  }
  while (++index < nodes.length) {
    if (index) result.push(u('text', '\n'));
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u('text', '\n'));
  }
  return result;
}

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * @param {H} h
 * @returns {Element|null}
 */
function footer(h) {
  var index = -1;
  /** @type {Array<ElementContent>} */
  var listItems = [];
  while (++index < h.footnoteOrder.length) {
    var def = h.footnoteById[h.footnoteOrder[index].toUpperCase()];
    if (!def) {
      continue;
    }
    var content = all(h, def);
    var id = String(def.identifier);
    var safeId = normalizeUri(id.toLowerCase());
    var referenceIndex = 0;
    /** @type {Array<ElementContent>} */
    var backReferences = [];
    while (++referenceIndex <= h.footnoteCounts[id]) {
      /** @type {Element} */
      var backReference = {
        type: 'element',
        tagName: 'a',
        properties: {
          href: '#' + h.clobberPrefix + 'fnref-' + safeId + (referenceIndex > 1 ? '-' + referenceIndex : ''),
          dataFootnoteBackref: true,
          className: ['data-footnote-backref'],
          ariaLabel: h.footnoteBackLabel
        },
        children: [{
          type: 'text',
          value: '↩'
        }]
      };
      if (referenceIndex > 1) {
        backReference.children.push({
          type: 'element',
          tagName: 'sup',
          children: [{
            type: 'text',
            value: String(referenceIndex)
          }]
        });
      }
      if (backReferences.length > 0) {
        backReferences.push({
          type: 'text',
          value: ' '
        });
      }
      backReferences.push(backReference);
    }
    var tail = content[content.length - 1];
    if (tail && tail.type === 'element' && tail.tagName === 'p') {
      var _tail$children;
      var tailTail = tail.children[tail.children.length - 1];
      if (tailTail && tailTail.type === 'text') {
        tailTail.value += ' ';
      } else {
        tail.children.push({
          type: 'text',
          value: ' '
        });
      }
      (_tail$children = tail.children).push.apply(_tail$children, backReferences);
    } else {
      content.push.apply(content, backReferences);
    }

    /** @type {Element} */
    var listItem = {
      type: 'element',
      tagName: 'li',
      properties: {
        id: h.clobberPrefix + 'fn-' + safeId
      },
      children: wrap(content, true)
    };
    if (def.position) {
      listItem.position = def.position;
    }
    listItems.push(listItem);
  }
  if (listItems.length === 0) {
    return null;
  }
  return {
    type: 'element',
    tagName: 'section',
    properties: {
      dataFootnotes: true,
      className: ['footnotes']
    },
    children: [{
      type: 'element',
      tagName: h.footnoteLabelTagName,
      properties: _objectSpread$5(_objectSpread$5({}, JSON.parse(JSON.stringify(h.footnoteLabelProperties))), {}, {
        id: 'footnote-label'
      }),
      children: [u('text', h.footnoteLabel)]
    }, {
      type: 'text',
      value: '\n'
    }, {
      type: 'element',
      tagName: 'ol',
      properties: {},
      children: wrap(listItems, true)
    }, {
      type: 'text',
      value: '\n'
    }]
  };
}

/**
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Blockquote} node
 */
function blockquote(h, node) {
  return h(node, 'blockquote', wrap(all(h, node), true));
}

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {import('mdast').Break} Break
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Break} node
 * @returns {Array<Element|Text>}
 */
function hardBreak(h, node) {
  return [h(node, 'br'), u('text', '\n')];
}

/**
 * @typedef {import('mdast').Code} Code
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Code} node
 */
function code(h, node) {
  var value = node.value ? node.value + '\n' : '';
  // To do: next major, use `node.lang` w/o regex, the splitting’s been going
  // on for years in remark now.
  var lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/);
  /** @type {Properties} */
  var props = {};
  if (lang) {
    props.className = ['language-' + lang];
  }
  var code = h(node, 'code', props, [u('text', value)]);
  if (node.meta) {
    code.data = {
      meta: node.meta
    };
  }
  return h(node.position, 'pre', [code]);
}

/**
 * @typedef {import('mdast').Delete} Delete
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Delete} node
 */
function strikethrough(h, node) {
  return h(node, 'del', all(h, node));
}

/**
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Emphasis} node
 */
function emphasis(h, node) {
  return h(node, 'em', all(h, node));
}

/**
 * @typedef {import('mdast').FootnoteReference} FootnoteReference
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {FootnoteReference} node
 */
function footnoteReference(h, node) {
  var id = String(node.identifier);
  var safeId = normalizeUri(id.toLowerCase());
  var index = h.footnoteOrder.indexOf(id);
  /** @type {number} */
  var counter;
  if (index === -1) {
    h.footnoteOrder.push(id);
    h.footnoteCounts[id] = 1;
    counter = h.footnoteOrder.length;
  } else {
    h.footnoteCounts[id]++;
    counter = index + 1;
  }
  var reuseCounter = h.footnoteCounts[id];
  return h(node, 'sup', [h(node.position, 'a', {
    href: '#' + h.clobberPrefix + 'fn-' + safeId,
    id: h.clobberPrefix + 'fnref-' + safeId + (reuseCounter > 1 ? '-' + reuseCounter : ''),
    dataFootnoteRef: true,
    ariaDescribedBy: 'footnote-label'
  }, [u('text', String(counter))])]);
}

/**
 * @typedef {import('mdast').Footnote} Footnote
 * @typedef {import('../index.js').Handler} Handler
 *
 * @todo
 *   `footnote` (or “inline note”) are a pandoc footnotes feature (`^[a note]`)
 *   that does not exist in GFM.
 *   We still have support for it, so that things remain working with
 *   `micromark-extension-footnote` and `mdast-util-footnote`, but in the future
 *   we might be able to remove it?
 */

/**
 * @type {Handler}
 * @param {Footnote} node
 */
function footnote(h, node) {
  var footnoteById = h.footnoteById;
  var no = 1;
  while (no in footnoteById) {
    no++;
  }
  var identifier = String(no);
  footnoteById[identifier] = {
    type: 'footnoteDefinition',
    identifier: identifier,
    children: [{
      type: 'paragraph',
      children: node.children
    }],
    position: node.position
  };
  return footnoteReference(h, {
    type: 'footnoteReference',
    identifier: identifier,
    position: node.position
  });
}

/**
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Heading} node
 */
function heading(h, node) {
  return h(node, 'h' + node.depth, all(h, node));
}

/**
 * @typedef {import('mdast').HTML} HTML
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * Return either a `raw` node in dangerous mode, otherwise nothing.
 *
 * @type {Handler}
 * @param {HTML} node
 */
function html$2(h, node) {
  return h.dangerous ? h.augment(node, u('raw', node.value)) : null;
}

/**
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('./index.js').Handler} Handler
 * @typedef {import('./index.js').Content} Content
 */

/**
 * Return the content of a reference without definition as plain text.
 *
 * @type {Handler}
 * @param {ImageReference|LinkReference} node
 * @returns {Content|Array<Content>}
 */
function revert(h, node) {
  var subtype = node.referenceType;
  var suffix = ']';
  if (subtype === 'collapsed') {
    suffix += '[]';
  } else if (subtype === 'full') {
    suffix += '[' + (node.label || node.identifier) + ']';
  }
  if (node.type === 'imageReference') {
    return u('text', '![' + node.alt + suffix);
  }
  var contents = all(h, node);
  var head = contents[0];
  if (head && head.type === 'text') {
    head.value = '[' + head.value;
  } else {
    contents.unshift(u('text', '['));
  }
  var tail = contents[contents.length - 1];
  if (tail && tail.type === 'text') {
    tail.value += suffix;
  } else {
    contents.push(u('text', suffix));
  }
  return contents;
}

/**
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {ImageReference} node
 */
function imageReference(h, node) {
  var def = h.definition(node.identifier);
  if (!def) {
    return revert(h, node);
  }

  /** @type {Properties} */
  var props = {
    src: normalizeUri(def.url || ''),
    alt: node.alt
  };
  if (def.title !== null && def.title !== undefined) {
    props.title = def.title;
  }
  return h(node, 'img', props);
}

/**
 * @typedef {import('mdast').Image} Image
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Image} node
 */
function image(h, node) {
  /** @type {Properties} */
  var props = {
    src: normalizeUri(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== undefined) {
    props.title = node.title;
  }
  return h(node, 'img', props);
}

/**
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {InlineCode} node
 */
function inlineCode(h, node) {
  return h(node, 'code', [u('text', node.value.replace(/\r?\n|\r/g, ' '))]);
}

/**
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {LinkReference} node
 */
function linkReference(h, node) {
  var def = h.definition(node.identifier);
  if (!def) {
    return revert(h, node);
  }

  /** @type {Properties} */
  var props = {
    href: normalizeUri(def.url || '')
  };
  if (def.title !== null && def.title !== undefined) {
    props.title = def.title;
  }
  return h(node, 'a', props, all(h, node));
}

/**
 * @typedef {import('mdast').Link} Link
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Link} node
 */
function link(h, node) {
  /** @type {Properties} */
  var props = {
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== undefined) {
    props.title = node.title;
  }
  return h(node, 'a', props, all(h, node));
}

/**
 * @type {Handler}
 * @param {ListItem} node
 * @param {List} parent
 */
function listItem(h, node, parent) {
  var result = all(h, node);
  var loose = parent ? listLoose(parent) : listItemLoose(node);
  /** @type {Properties} */
  var props = {};
  /** @type {Array<Content>} */
  var wrapped = [];
  if (typeof node.checked === 'boolean') {
    /** @type {Element} */
    var paragraph;
    if (result[0] && result[0].type === 'element' && result[0].tagName === 'p') {
      paragraph = result[0];
    } else {
      paragraph = h(null, 'p', []);
      result.unshift(paragraph);
    }
    if (paragraph.children.length > 0) {
      paragraph.children.unshift(u('text', ' '));
    }
    paragraph.children.unshift(h(null, 'input', {
      type: 'checkbox',
      checked: node.checked,
      disabled: true
    }));

    // According to github-markdown-css, this class hides bullet.
    // See: <https://github.com/sindresorhus/github-markdown-css>.
    props.className = ['task-list-item'];
  }
  var index = -1;
  while (++index < result.length) {
    var child = result[index];

    // Add eols before nodes, except if this is a loose, first paragraph.
    if (loose || index !== 0 || child.type !== 'element' || child.tagName !== 'p') {
      wrapped.push(u('text', '\n'));
    }
    if (child.type === 'element' && child.tagName === 'p' && !loose) {
      wrapped.push.apply(wrapped, _toConsumableArray(child.children));
    } else {
      wrapped.push(child);
    }
  }
  var tail = result[result.length - 1];

  // Add a final eol.
  if (tail && (loose || !('tagName' in tail) || tail.tagName !== 'p')) {
    wrapped.push(u('text', '\n'));
  }
  return h(node, 'li', props, wrapped);
}

/**
 * @param {List} node
 * @return {Boolean}
 */
function listLoose(node) {
  var loose = node.spread;
  var children = node.children;
  var index = -1;
  while (!loose && ++index < children.length) {
    loose = listItemLoose(children[index]);
  }
  return Boolean(loose);
}

/**
 * @param {ListItem} node
 * @return {Boolean}
 */
function listItemLoose(node) {
  var spread = node.spread;
  return spread === undefined || spread === null ? node.children.length > 1 : spread;
}

/**
 * @typedef {import('mdast').List} List
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {List} node
 * @returns {Element}
 */
function list(h, node) {
  /** @type {Properties} */
  var props = {};
  var name = node.ordered ? 'ol' : 'ul';
  var items = all(h, node);
  var index = -1;
  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start;
  }

  // Like GitHub, add a class for custom styling.
  while (++index < items.length) {
    var item = items[index];
    if (item.type === 'element' && item.tagName === 'li' && item.properties && Array.isArray(item.properties.className) && item.properties.className.includes('task-list-item')) {
      props.className = ['contains-task-list'];
      break;
    }
  }
  return h(node, name, props, wrap(items, true));
}

/**
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Paragraph} node
 */
function paragraph(h, node) {
  return h(node, 'p', all(h, node));
}

/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Root} node
 */
function root(h, node) {
  // @ts-expect-error `root`s are also fine.
  return h.augment(node, u('root', wrap(all(h, node))));
}

/**
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Strong} node
 */
function strong(h, node) {
  return h(node, 'strong', all(h, node));
}

/**
 * @typedef {import('mdast').Table} Table
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 * @typedef {import('../index.js').Content} Content
 */

/**
 * @type {Handler}
 * @param {Table} node
 */
function table(h, node) {
  var rows = node.children;
  var index = -1;
  var align = node.align || [];
  /** @type {Array<Element>} */
  var result = [];
  while (++index < rows.length) {
    var row = rows[index].children;
    var name = index === 0 ? 'th' : 'td';
    /** @type {Array<Content>} */
    var out = [];
    var cellIndex = -1;
    var length = node.align ? align.length : row.length;
    while (++cellIndex < length) {
      var cell = row[cellIndex];
      out.push(h(cell, name, {
        align: align[cellIndex]
      }, cell ? all(h, cell) : []));
    }
    result[index] = h(rows[index], 'tr', wrap(out, true));
  }
  return h(node, 'table', wrap([h(result[0].position, 'thead', wrap([result[0]], true))].concat(result[1] ? h({
    start: pointStart(result[1]),
    end: pointEnd(result[result.length - 1])
  }, 'tbody', wrap(result.slice(1), true)) : []), true));
}

var tab = 9; /* `\t` */
var space = 32; /* ` ` */

/**
 * Remove initial and final spaces and tabs at the line breaks in `value`.
 * Does not trim initial and final spaces and tabs of the value itself.
 *
 * @param {string} value
 *   Value to trim.
 * @returns {string}
 *   Trimmed value.
 */
function trimLines(value) {
  var source = String(value);
  var search = /\r?\n|\r/g;
  var match = search.exec(source);
  var last = 0;
  /** @type {Array<string>} */
  var lines = [];
  while (match) {
    lines.push(trimLine(source.slice(last, match.index), last > 0, true), match[0]);
    last = match.index + match[0].length;
    match = search.exec(source);
  }
  lines.push(trimLine(source.slice(last), last > 0, false));
  return lines.join('');
}

/**
 * @param {string} value
 *   Line to trim.
 * @param {boolean} start
 *   Whether to trim the start of the line.
 * @param {boolean} end
 *   Whether to trim the end of the line.
 * @returns {string}
 *   Trimmed line.
 */
function trimLine(value, start, end) {
  var startIndex = 0;
  var endIndex = value.length;
  if (start) {
    var code = value.codePointAt(startIndex);
    while (code === tab || code === space) {
      startIndex++;
      code = value.codePointAt(startIndex);
    }
  }
  if (end) {
    var _code = value.codePointAt(endIndex - 1);
    while (_code === tab || _code === space) {
      endIndex--;
      _code = value.codePointAt(endIndex - 1);
    }
  }
  return endIndex > startIndex ? value.slice(startIndex, endIndex) : '';
}

/**
 * @typedef {import('mdast').Text} Text
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {Text} node
 */
function text(h, node) {
  return h.augment(node, u('text', trimLines(String(node.value))));
}

/**
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('hast').Element} Element
 * @typedef {import('../index.js').Handler} Handler
 */

/**
 * @type {Handler}
 * @param {ThematicBreak} [node]
 * @returns {Element}
 */
function thematicBreak(h, node) {
  return h(node, 'hr');
}

var handlers = {
  blockquote: blockquote,
  "break": hardBreak,
  code: code,
  "delete": strikethrough,
  emphasis: emphasis,
  footnoteReference: footnoteReference,
  footnote: footnote,
  heading: heading,
  html: html$2,
  imageReference: imageReference,
  image: image,
  inlineCode: inlineCode,
  linkReference: linkReference,
  link: link,
  listItem: listItem,
  list: list,
  paragraph: paragraph,
  root: root,
  strong: strong,
  table: table,
  text: text,
  thematicBreak: thematicBreak,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};

// Return nothing for nodes that are ignored.
function ignore() {
  return null;
}

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var own$3 = {}.hasOwnProperty;

/**
 * Turn mdast into hast.
 *
 * @param {MdastNode} tree
 *   mdast node.
 * @param {Options} [options]
 *   Configuration (optional).
 * @returns {H}
 *   `h` function.
 */
function factory(tree, options) {
  var settings = options || {};
  var dangerous = settings.allowDangerousHtml || false;
  /** @type {Record<string, FootnoteDefinition>} */
  var footnoteById = {};
  h.dangerous = dangerous;
  h.clobberPrefix = settings.clobberPrefix === undefined || settings.clobberPrefix === null ? 'user-content-' : settings.clobberPrefix;
  h.footnoteLabel = settings.footnoteLabel || 'Footnotes';
  h.footnoteLabelTagName = settings.footnoteLabelTagName || 'h2';
  h.footnoteLabelProperties = settings.footnoteLabelProperties || {
    className: ['sr-only']
  };
  h.footnoteBackLabel = settings.footnoteBackLabel || 'Back to content';
  h.definition = definitions(tree);
  h.footnoteById = footnoteById;
  /** @type {Array<string>} */
  h.footnoteOrder = [];
  /** @type {Record<string, number>} */
  h.footnoteCounts = {};
  h.augment = augment;
  h.handlers = _objectSpread$4(_objectSpread$4({}, handlers), settings.handlers);
  h.unknownHandler = settings.unknownHandler;
  h.passThrough = settings.passThrough;
  visit(tree, 'footnoteDefinition', function (definition) {
    var id = String(definition.identifier).toUpperCase();

    // Mimick CM behavior of link definitions.
    // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/8290999/index.js#L26>.
    if (!own$3.call(footnoteById, id)) {
      footnoteById[id] = definition;
    }
  });

  // @ts-expect-error Hush, it’s fine!
  return h;

  /**
   * Finalise the created `right`, a hast node, from `left`, an mdast node.
   *
   * @param {(NodeWithData|PositionLike)?} left
   * @param {Content} right
   * @returns {Content}
   */
  function augment(left, right) {
    // Handle `data.hName`, `data.hProperties, `data.hChildren`.
    if (left && 'data' in left && left.data) {
      /** @type {Data} */
      var data = left.data;
      if (data.hName) {
        if (right.type !== 'element') {
          right = {
            type: 'element',
            tagName: '',
            properties: {},
            children: []
          };
        }
        right.tagName = data.hName;
      }
      if (right.type === 'element' && data.hProperties) {
        right.properties = _objectSpread$4(_objectSpread$4({}, right.properties), data.hProperties);
      }
      if ('children' in right && right.children && data.hChildren) {
        right.children = data.hChildren;
      }
    }
    if (left) {
      var ctx = 'type' in left ? left : {
        position: left
      };
      if (!generated(ctx)) {
        // @ts-expect-error: fine.
        right.position = {
          start: pointStart(ctx),
          end: pointEnd(ctx)
        };
      }
    }
    return right;
  }

  /**
   * Create an element for `node`.
   *
   * @type {HFunctionProps}
   */
  function h(node, tagName, props, children) {
    if (Array.isArray(props)) {
      children = props;
      props = {};
    }

    // @ts-expect-error augmenting an element yields an element.
    return augment(node, {
      type: 'element',
      tagName: tagName,
      properties: props || {},
      children: children || []
    });
  }
}

/**
 * Transform `tree` (an mdast node) to a hast node.
 *
 * @param {MdastNode} tree mdast node
 * @param {Options} [options] Configuration
 * @returns {HastNode|null|undefined} hast node
 */
function toHast(tree, options) {
  var h = factory(tree, options);
  var node = one(h, tree, null);
  var foot = footer(h);
  if (foot) {
    // @ts-expect-error If there’s a footer, there were definitions, meaning block
    // content.
    // So assume `node` is a parent node.
    node.children.push(u('text', '\n'), foot);
  }
  return Array.isArray(node) ? {
    type: 'root',
    children: node
  } : node;
}

/**
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('mdast').Root} MdastRoot
 * @typedef {import('mdast-util-to-hast').Options} Options
 * @typedef {import('unified').Processor<any, any, any, any>} Processor
 *
 * @typedef {import('mdast-util-to-hast')} DoNotTouchAsThisImportIncludesRawInTree
 */

// Note: the `<MdastRoot, HastRoot>` overload doesn’t seem to work :'(

/**
 * Plugin that turns markdown into HTML to support rehype.
 *
 * *   If a destination processor is given, that processor runs with a new HTML
 *     (hast) tree (bridge-mode).
 *     As the given processor runs with a hast tree, and rehype plugins support
 *     hast, that means rehype plugins can be used with the given processor.
 *     The hast tree is discarded in the end.
 *     It’s highly unlikely that you want to do this.
 * *   The common case is to not pass a destination processor, in which case the
 *     current processor continues running with a new HTML (hast) tree
 *     (mutate-mode).
 *     As the current processor continues with a hast tree, and rehype plugins
 *     support hast, that means rehype plugins can be used after
 *     `remark-rehype`.
 *     It’s likely that this is what you want to do.
 *
 * @param destination
 *   Optional unified processor.
 * @param options
 *   Options passed to `mdast-util-to-hast`.
 */
var remarkRehype = /** @type {(import('unified').Plugin<[Processor, Options?]|[null|undefined, Options?]|[Options]|[], MdastRoot>)} */

function remarkRehype(destination, options) {
  return destination && 'run' in destination ? bridge(destination, options) : mutate(destination || options);
};

/**
 * Bridge-mode.
 * Runs the destination with the new hast tree.
 *
 * @type {import('unified').Plugin<[Processor, Options?], MdastRoot>}
 */
function bridge(destination, options) {
  return function (node, file, next) {
    destination.run(toHast(node, options), file, function (error) {
      next(error);
    });
  };
}

/**
 * Mutate-mode.
 * Further plugins run on the hast tree.
 *
 * @type {import('unified').Plugin<[Options?]|void[], MdastRoot, HastRoot>}
 */
function mutate(options) {
  // @ts-expect-error: assume a corresponding node is returned by `toHast`.
  return function (node) {
    return toHast(node, options);
  };
}

/**
 * @typedef {import('./info.js').Info} Info
 * @typedef {Record<string, Info>} Properties
 * @typedef {Record<string, string>} Normal
 */

var Schema = /*#__PURE__*/_createClass(
/**
 * @constructor
 * @param {Properties} property
 * @param {Normal} normal
 * @param {string} [space]
 */
function Schema(property, normal, space) {
  _classCallCheck(this, Schema);
  this.property = property;
  this.normal = normal;
  if (space) {
    this.space = space;
  }
});

/** @type {Properties} */
Schema.prototype.property = {};
/** @type {Normal} */
Schema.prototype.normal = {};
/** @type {string|null} */
Schema.prototype.space = null;

/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 */

/**
 * @param {Schema[]} definitions
 * @param {string} [space]
 * @returns {Schema}
 */
function merge(definitions, space) {
  /** @type {Properties} */
  var property = {};
  /** @type {Normal} */
  var normal = {};
  var index = -1;
  while (++index < definitions.length) {
    Object.assign(property, definitions[index].property);
    Object.assign(normal, definitions[index].normal);
  }
  return new Schema(property, normal, space);
}

/**
 * @param {string} value
 * @returns {string}
 */
function normalize(value) {
  return value.toLowerCase();
}

var Info = /*#__PURE__*/_createClass(
/**
 * @constructor
 * @param {string} property
 * @param {string} attribute
 */
function Info(property, attribute) {
  _classCallCheck(this, Info);
  /** @type {string} */
  this.property = property;
  /** @type {string} */
  this.attribute = attribute;
});

/** @type {string|null} */
Info.prototype.space = null;
Info.prototype["boolean"] = false;
Info.prototype.booleanish = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.number = false;
Info.prototype.commaSeparated = false;
Info.prototype.spaceSeparated = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.mustUseProperty = false;
Info.prototype.defined = false;

var powers = 0;
var _boolean = increment();
var booleanish = increment();
var overloadedBoolean = increment();
var number = increment();
var spaceSeparated = increment();
var commaSeparated = increment();
var commaOrSpaceSeparated = increment();
function increment() {
  return Math.pow(2, ++powers);
}

var types = /*#__PURE__*/Object.freeze({
    __proto__: null,
    boolean: _boolean,
    booleanish: booleanish,
    overloadedBoolean: overloadedBoolean,
    number: number,
    spaceSeparated: spaceSeparated,
    commaSeparated: commaSeparated,
    commaOrSpaceSeparated: commaOrSpaceSeparated
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/** @type {Array<keyof types>} */
// @ts-expect-error: hush.
var checks = Object.keys(types);
var DefinedInfo = /*#__PURE__*/function (_Info) {
  _inherits(DefinedInfo, _Info);
  var _super = _createSuper(DefinedInfo);
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  function DefinedInfo(property, attribute, mask, space) {
    var _this;
    _classCallCheck(this, DefinedInfo);
    var index = -1;
    _this = _super.call(this, property, attribute);
    mark(_assertThisInitialized(_this), 'space', space);
    if (typeof mask === 'number') {
      while (++index < checks.length) {
        var check = checks[index];
        mark(_assertThisInitialized(_this), checks[index], (mask & types[check]) === types[check]);
      }
    }
    return _this;
  }
  return _createClass(DefinedInfo);
}(Info);
DefinedInfo.prototype.defined = true;

/**
 * @param {DefinedInfo} values
 * @param {string} key
 * @param {unknown} value
 */
function mark(values, key, value) {
  if (value) {
    // @ts-expect-error: assume `value` matches the expected value of `key`.
    values[key] = value;
  }
}

/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 *
 * @typedef {Record<string, string>} Attributes
 *
 * @typedef {Object} Definition
 * @property {Record<string, number|null>} properties
 * @property {(attributes: Attributes, property: string) => string} transform
 * @property {string} [space]
 * @property {Attributes} [attributes]
 * @property {Array<string>} [mustUseProperty]
 */
var own$2 = {}.hasOwnProperty;

/**
 * @param {Definition} definition
 * @returns {Schema}
 */
function create(definition) {
  /** @type {Properties} */
  var property = {};
  /** @type {Normal} */
  var normal = {};
  /** @type {string} */
  var prop;
  for (prop in definition.properties) {
    if (own$2.call(definition.properties, prop)) {
      var value = definition.properties[prop];
      var info = new DefinedInfo(prop, definition.transform(definition.attributes || {}, prop), value, definition.space);
      if (definition.mustUseProperty && definition.mustUseProperty.includes(prop)) {
        info.mustUseProperty = true;
      }
      property[prop] = info;
      normal[normalize(prop)] = prop;
      normal[normalize(info.attribute)] = prop;
    }
  }
  return new Schema(property, normal, definition.space);
}

var xlink = create({
  space: 'xlink',
  transform: function transform(_, prop) {
    return 'xlink:' + prop.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});

var xml = create({
  space: 'xml',
  transform: function transform(_, prop) {
    return 'xml:' + prop.slice(3).toLowerCase();
  },
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
});

/**
 * @param {Record<string, string>} attributes
 * @param {string} attribute
 * @returns {string}
 */
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}

/**
 * @param {Record<string, string>} attributes
 * @param {string} property
 * @returns {string}
 */
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}

var xmlns = create({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
});

var aria = create({
  transform: function transform(_, prop) {
    return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});

var html$1 = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: _boolean,
    allowPaymentRequest: _boolean,
    allowUserMedia: _boolean,
    alt: null,
    as: null,
    async: _boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: _boolean,
    autoPlay: _boolean,
    capture: _boolean,
    charSet: null,
    checked: _boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: _boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    "default": _boolean,
    defer: _boolean,
    dir: null,
    dirName: null,
    disabled: _boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: _boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: _boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: _boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: _boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: _boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: _boolean,
    muted: _boolean,
    name: null,
    nonce: null,
    noModule: _boolean,
    noValidate: _boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: _boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: _boolean,
    poster: null,
    preload: null,
    readOnly: _boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: _boolean,
    reversed: _boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: _boolean,
    seamless: _boolean,
    selected: _boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: _boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: number,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    "char": null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: _boolean,
    // Lists. Use CSS to reduce space between items instead
    declare: _boolean,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: number,
    // `<img>` and `<object>`
    leftMargin: number,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: number,
    // `<body>`
    marginWidth: number,
    // `<body>`
    noResize: _boolean,
    // `<frame>`
    noHref: _boolean,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: _boolean,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: _boolean,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: number,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: booleanish,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: number,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number,
    // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: _boolean,
    disableRemotePlayback: _boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});

var svg$1 = create({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: _boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    "in": null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});

/**
 * @typedef {import('./util/schema.js').Schema} Schema
 */
var valid = /^data[-\w.:]+$/i;
var dash = /-[a-z]/g;
var cap = /[A-Z]/g;

/**
 * @param {Schema} schema
 * @param {string} value
 * @returns {Info}
 */
function find(schema, value) {
  var normal = normalize(value);
  var prop = value;
  var Type = Info;
  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      // Turn it into a property.
      var rest = value.slice(5).replace(dash, camelcase);
      prop = 'data' + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      // Turn it into an attribute.
      var _rest = value.slice(4);
      if (!dash.test(_rest)) {
        var dashes = _rest.replace(cap, kebab);
        if (dashes.charAt(0) !== '-') {
          dashes = '-' + dashes;
        }
        value = 'data' + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(prop, value);
}

/**
 * @param {string} $0
 * @returns {string}
 */
function kebab($0) {
  return '-' + $0.toLowerCase();
}

/**
 * @param {string} $0
 * @returns {string}
 */
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}

/**
 * `hast` is close to `React`, but differs in a couple of cases.
 *
 * To get a React property from a hast property, check if it is in
 * `hastToReact`, if it is, then use the corresponding value,
 * otherwise, use the hast property.
 *
 * @type {Record<string, string>}
 */
var hastToReact = {
  classId: 'classID',
  dataType: 'datatype',
  itemId: 'itemID',
  strokeDashArray: 'strokeDasharray',
  strokeDashOffset: 'strokeDashoffset',
  strokeLineCap: 'strokeLinecap',
  strokeLineJoin: 'strokeLinejoin',
  strokeMiterLimit: 'strokeMiterlimit',
  typeOf: 'typeof',
  xLinkActuate: 'xlinkActuate',
  xLinkArcRole: 'xlinkArcrole',
  xLinkHref: 'xlinkHref',
  xLinkRole: 'xlinkRole',
  xLinkShow: 'xlinkShow',
  xLinkTitle: 'xlinkTitle',
  xLinkType: 'xlinkType',
  xmlnsXLink: 'xmlnsXlink'
};

/**
 * @typedef {import('./lib/util/info.js').Info} Info
 * @typedef {import('./lib/util/schema.js').Schema} Schema
 */
var html = merge([xml, xlink, xmlns, aria, html$1], 'html');
var svg = merge([xml, xlink, xmlns, aria, svg$1], 'svg');

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 *
 * @callback AllowElement
 * @param {Element} element
 * @param {number} index
 * @param {Element|Root} parent
 * @returns {boolean|undefined}
 *
 * @typedef Options
 * @property {Array<string>} [allowedElements]
 * @property {Array<string>} [disallowedElements=[]]
 * @property {AllowElement} [allowElement]
 * @property {boolean} [unwrapDisallowed=false]
 */

/**
 * @type {import('unified').Plugin<[Options], Root>}
 */
function rehypeFilter(options) {
  if (options.allowedElements && options.disallowedElements) {
    throw new TypeError('Only one of `allowedElements` and `disallowedElements` should be defined');
  }
  if (options.allowedElements || options.disallowedElements || options.allowElement) {
    return function (tree) {
      visit(tree, 'element', function (node, index, parent_) {
        var parent = /** @type {Element|Root} */parent_;
        /** @type {boolean|undefined} */
        var remove;
        if (options.allowedElements) {
          remove = !options.allowedElements.includes(node.tagName);
        } else if (options.disallowedElements) {
          remove = options.disallowedElements.includes(node.tagName);
        }
        if (!remove && options.allowElement && typeof index === 'number') {
          remove = !options.allowElement(node, index, parent);
        }
        if (remove && typeof index === 'number') {
          if (options.unwrapDisallowed && node.children) {
            var _parent$children;
            (_parent$children = parent.children).splice.apply(_parent$children, [index, 1].concat(_toConsumableArray(node.children)));
          } else {
            parent.children.splice(index, 1);
          }
          return index;
        }
        return undefined;
      });
    };
  }
}

var reactIs = {exports: {}};

var reactIs_production_min = {};

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;

	var b = Symbol["for"]("react.element"),
	  c = Symbol["for"]("react.portal"),
	  d = Symbol["for"]("react.fragment"),
	  e = Symbol["for"]("react.strict_mode"),
	  f = Symbol["for"]("react.profiler"),
	  g = Symbol["for"]("react.provider"),
	  h = Symbol["for"]("react.context"),
	  k = Symbol["for"]("react.server_context"),
	  l = Symbol["for"]("react.forward_ref"),
	  m = Symbol["for"]("react.suspense"),
	  n = Symbol["for"]("react.suspense_list"),
	  p = Symbol["for"]("react.memo"),
	  q = Symbol["for"]("react.lazy"),
	  t = Symbol["for"]("react.offscreen"),
	  u;
	u = Symbol["for"]("react.module.reference");
	function v(a) {
	  if ("object" === typeof a && null !== a) {
	    var r = a.$$typeof;
	    switch (r) {
	      case b:
	        switch (a = a.type, a) {
	          case d:
	          case f:
	          case e:
	          case m:
	          case n:
	            return a;
	          default:
	            switch (a = a && a.$$typeof, a) {
	              case k:
	              case h:
	              case l:
	              case q:
	              case p:
	              case g:
	                return a;
	              default:
	                return r;
	            }
	        }
	      case c:
	        return r;
	    }
	  }
	}
	reactIs_production_min.ContextConsumer = h;
	reactIs_production_min.ContextProvider = g;
	reactIs_production_min.Element = b;
	reactIs_production_min.ForwardRef = l;
	reactIs_production_min.Fragment = d;
	reactIs_production_min.Lazy = q;
	reactIs_production_min.Memo = p;
	reactIs_production_min.Portal = c;
	reactIs_production_min.Profiler = f;
	reactIs_production_min.StrictMode = e;
	reactIs_production_min.Suspense = m;
	reactIs_production_min.SuspenseList = n;
	reactIs_production_min.isAsyncMode = function () {
	  return !1;
	};
	reactIs_production_min.isConcurrentMode = function () {
	  return !1;
	};
	reactIs_production_min.isContextConsumer = function (a) {
	  return v(a) === h;
	};
	reactIs_production_min.isContextProvider = function (a) {
	  return v(a) === g;
	};
	reactIs_production_min.isElement = function (a) {
	  return "object" === typeof a && null !== a && a.$$typeof === b;
	};
	reactIs_production_min.isForwardRef = function (a) {
	  return v(a) === l;
	};
	reactIs_production_min.isFragment = function (a) {
	  return v(a) === d;
	};
	reactIs_production_min.isLazy = function (a) {
	  return v(a) === q;
	};
	reactIs_production_min.isMemo = function (a) {
	  return v(a) === p;
	};
	reactIs_production_min.isPortal = function (a) {
	  return v(a) === c;
	};
	reactIs_production_min.isProfiler = function (a) {
	  return v(a) === f;
	};
	reactIs_production_min.isStrictMode = function (a) {
	  return v(a) === e;
	};
	reactIs_production_min.isSuspense = function (a) {
	  return v(a) === m;
	};
	reactIs_production_min.isSuspenseList = function (a) {
	  return v(a) === n;
	};
	reactIs_production_min.isValidElementType = function (a) {
	  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? !0 : !1;
	};
	reactIs_production_min.typeOf = v;
	return reactIs_production_min;
}

var reactIs_development = {};

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function () {

	    // ATTENTION
	    // When adding new symbols to this file,
	    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	    // The Symbol used to tag the ReactElement-like types.
	    var REACT_ELEMENT_TYPE = Symbol["for"]('react.element');
	    var REACT_PORTAL_TYPE = Symbol["for"]('react.portal');
	    var REACT_FRAGMENT_TYPE = Symbol["for"]('react.fragment');
	    var REACT_STRICT_MODE_TYPE = Symbol["for"]('react.strict_mode');
	    var REACT_PROFILER_TYPE = Symbol["for"]('react.profiler');
	    var REACT_PROVIDER_TYPE = Symbol["for"]('react.provider');
	    var REACT_CONTEXT_TYPE = Symbol["for"]('react.context');
	    var REACT_SERVER_CONTEXT_TYPE = Symbol["for"]('react.server_context');
	    var REACT_FORWARD_REF_TYPE = Symbol["for"]('react.forward_ref');
	    var REACT_SUSPENSE_TYPE = Symbol["for"]('react.suspense');
	    var REACT_SUSPENSE_LIST_TYPE = Symbol["for"]('react.suspense_list');
	    var REACT_MEMO_TYPE = Symbol["for"]('react.memo');
	    var REACT_LAZY_TYPE = Symbol["for"]('react.lazy');
	    var REACT_OFFSCREEN_TYPE = Symbol["for"]('react.offscreen');

	    // -----------------------------------------------------------------------------

	    var enableScopeAPI = false; // Experimental Create Event Handle API.
	    var enableCacheElement = false;
	    var enableTransitionTracing = false; // No known bugs, but needs performance testing

	    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	    // stuff. Intended to enable React core members to more easily debug scheduling
	    // issues in DEV builds.

	    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	    var REACT_MODULE_REFERENCE;
	    {
	      REACT_MODULE_REFERENCE = Symbol["for"]('react.module.reference');
	    }
	    function isValidElementType(type) {
	      if (typeof type === 'string' || typeof type === 'function') {
	        return true;
	      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

	      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
	        return true;
	      }
	      if (typeof type === 'object' && type !== null) {
	        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
	        // This needs to include all possible module reference object
	        // types supported by any Flight configuration anywhere since
	        // we don't know which Flight build this will end up being used
	        // with.
	        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	          return true;
	        }
	      }
	      return false;
	    }
	    function typeOf(object) {
	      if (typeof object === 'object' && object !== null) {
	        var $$typeof = object.$$typeof;
	        switch ($$typeof) {
	          case REACT_ELEMENT_TYPE:
	            var type = object.type;
	            switch (type) {
	              case REACT_FRAGMENT_TYPE:
	              case REACT_PROFILER_TYPE:
	              case REACT_STRICT_MODE_TYPE:
	              case REACT_SUSPENSE_TYPE:
	              case REACT_SUSPENSE_LIST_TYPE:
	                return type;
	              default:
	                var $$typeofType = type && type.$$typeof;
	                switch ($$typeofType) {
	                  case REACT_SERVER_CONTEXT_TYPE:
	                  case REACT_CONTEXT_TYPE:
	                  case REACT_FORWARD_REF_TYPE:
	                  case REACT_LAZY_TYPE:
	                  case REACT_MEMO_TYPE:
	                  case REACT_PROVIDER_TYPE:
	                    return $$typeofType;
	                  default:
	                    return $$typeof;
	                }
	            }
	          case REACT_PORTAL_TYPE:
	            return $$typeof;
	        }
	      }
	      return undefined;
	    }
	    var ContextConsumer = REACT_CONTEXT_TYPE;
	    var ContextProvider = REACT_PROVIDER_TYPE;
	    var Element = REACT_ELEMENT_TYPE;
	    var ForwardRef = REACT_FORWARD_REF_TYPE;
	    var Fragment = REACT_FRAGMENT_TYPE;
	    var Lazy = REACT_LAZY_TYPE;
	    var Memo = REACT_MEMO_TYPE;
	    var Portal = REACT_PORTAL_TYPE;
	    var Profiler = REACT_PROFILER_TYPE;
	    var StrictMode = REACT_STRICT_MODE_TYPE;
	    var Suspense = REACT_SUSPENSE_TYPE;
	    var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	    var hasWarnedAboutDeprecatedIsAsyncMode = false;
	    var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

	    function isAsyncMode(object) {
	      {
	        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	        }
	      }
	      return false;
	    }
	    function isConcurrentMode(object) {
	      {
	        if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	          hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

	          console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	        }
	      }
	      return false;
	    }
	    function isContextConsumer(object) {
	      return typeOf(object) === REACT_CONTEXT_TYPE;
	    }
	    function isContextProvider(object) {
	      return typeOf(object) === REACT_PROVIDER_TYPE;
	    }
	    function isElement(object) {
	      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	    }
	    function isForwardRef(object) {
	      return typeOf(object) === REACT_FORWARD_REF_TYPE;
	    }
	    function isFragment(object) {
	      return typeOf(object) === REACT_FRAGMENT_TYPE;
	    }
	    function isLazy(object) {
	      return typeOf(object) === REACT_LAZY_TYPE;
	    }
	    function isMemo(object) {
	      return typeOf(object) === REACT_MEMO_TYPE;
	    }
	    function isPortal(object) {
	      return typeOf(object) === REACT_PORTAL_TYPE;
	    }
	    function isProfiler(object) {
	      return typeOf(object) === REACT_PROFILER_TYPE;
	    }
	    function isStrictMode(object) {
	      return typeOf(object) === REACT_STRICT_MODE_TYPE;
	    }
	    function isSuspense(object) {
	      return typeOf(object) === REACT_SUSPENSE_TYPE;
	    }
	    function isSuspenseList(object) {
	      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	    }
	    reactIs_development.ContextConsumer = ContextConsumer;
	    reactIs_development.ContextProvider = ContextProvider;
	    reactIs_development.Element = Element;
	    reactIs_development.ForwardRef = ForwardRef;
	    reactIs_development.Fragment = Fragment;
	    reactIs_development.Lazy = Lazy;
	    reactIs_development.Memo = Memo;
	    reactIs_development.Portal = Portal;
	    reactIs_development.Profiler = Profiler;
	    reactIs_development.StrictMode = StrictMode;
	    reactIs_development.Suspense = Suspense;
	    reactIs_development.SuspenseList = SuspenseList;
	    reactIs_development.isAsyncMode = isAsyncMode;
	    reactIs_development.isConcurrentMode = isConcurrentMode;
	    reactIs_development.isContextConsumer = isContextConsumer;
	    reactIs_development.isContextProvider = isContextProvider;
	    reactIs_development.isElement = isElement;
	    reactIs_development.isForwardRef = isForwardRef;
	    reactIs_development.isFragment = isFragment;
	    reactIs_development.isLazy = isLazy;
	    reactIs_development.isMemo = isMemo;
	    reactIs_development.isPortal = isPortal;
	    reactIs_development.isProfiler = isProfiler;
	    reactIs_development.isStrictMode = isStrictMode;
	    reactIs_development.isSuspense = isSuspense;
	    reactIs_development.isSuspenseList = isSuspenseList;
	    reactIs_development.isValidElementType = isValidElementType;
	    reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactIs_production_min();
	} else {
	  module.exports = requireReactIs_development();
	}
} (reactIs));

var ReactIs = /*@__PURE__*/getDefaultExportFromCjs(reactIs.exports);

/**
 * @param {unknown} thing
 * @returns {boolean}
 */
function whitespace(thing) {
  /** @type {string} */
  var value =
  // @ts-ignore looks like a node.
  thing && typeof thing === 'object' && thing.type === 'text' ?
  // @ts-ignore looks like a text.
  thing.value || '' : thing;

  // HTML whitespace expression.
  // See <https://html.spec.whatwg.org/#space-character>.
  return typeof value === 'string' && value.replace(/[ \t\n\f\r]/g, '') === '';
}

/**
 * Parse space-separated tokens to an array of strings.
 *
 * @param {string} value
 *   Space-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */

/**
 * Serialize an array of strings as space separated-tokens.
 *
 * @param {Array<string|number>} values
 *   List of tokens.
 * @returns {string}
 *   Space-separated tokens.
 */
function stringify$1(values) {
  return values.join(' ').trim();
}

/**
 * Serialize an array of strings or numbers to comma-separated tokens.
 *
 * @param {Array<string|number>} values
 *   List of tokens.
 * @param {Options} [options]
 *   Configuration for `stringify` (optional).
 * @returns {string}
 *   Comma-separated tokens.
 */
function stringify(values, options) {
  var settings = options || {};

  // Ensure the last empty entry is seen.
  var input = values[values.length - 1] === '' ? [].concat(_toConsumableArray(values), ['']) : values;
  return input.join((settings.padRight ? ' ' : '') + ',' + (settings.padLeft === false ? '' : ' ')).trim();
}

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
var inlineStyleParser = function (style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  if (!style) return [];
  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = {
      line: lineno,
      column: column
    };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = {
      line: lineno,
      column: column
    };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;
    if (options.silent) ; else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
    var i = 2;
    while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
      ++i;
    }
    i += 2;
    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }
    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;
    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);
    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);
    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];
    comments(decls);

    // declarations
    var decl;
    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }
    return decls;
  }
  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}

var parse = inlineStyleParser;

/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== 'string') {
    return output;
  }
  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;
  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;
    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }
  return output;
}
var styleToObject = StyleToObject;

/**
 * @template T
 * @typedef {import('react').ComponentType<T>} ComponentType<T>
 */
var own$1 = {}.hasOwnProperty;

// The table-related elements that must not contain whitespace text according
// to React.
var tableElements = new Set(['table', 'thead', 'tbody', 'tfoot', 'tr']);

/**
 * @param {Context} context
 * @param {Element|Root} node
 */
function childrenToReact(context, node) {
  /** @type {Array<ReactNode>} */
  var children = [];
  var childIndex = -1;
  /** @type {Comment|Doctype|Element|Raw|Text} */
  var child;
  while (++childIndex < node.children.length) {
    child = node.children[childIndex];
    if (child.type === 'element') {
      children.push(toReact(context, child, childIndex, node));
    } else if (child.type === 'text') {
      // Currently, a warning is triggered by react for *any* white space in
      // tables.
      // So we drop it.
      // See: <https://github.com/facebook/react/pull/7081>.
      // See: <https://github.com/facebook/react/pull/7515>.
      // See: <https://github.com/remarkjs/remark-react/issues/64>.
      // See: <https://github.com/remarkjs/react-markdown/issues/576>.
      if (node.type !== 'element' || !tableElements.has(node.tagName) || !whitespace(child)) {
        children.push(child.value);
      }
    } else if (child.type === 'raw' && !context.options.skipHtml) {
      // Default behavior is to show (encoded) HTML.
      children.push(child.value);
    }
  }
  return children;
}

/**
 * @param {Context} context
 * @param {Element} node
 * @param {number} index
 * @param {Element|Root} parent
 */
function toReact(context, node, index, parent) {
  var options = context.options;
  var parentSchema = context.schema;
  /** @type {ReactMarkdownNames} */
  // @ts-expect-error assume a known HTML/SVG element.
  var name = node.tagName;
  /** @type {Record<string, unknown>} */
  var properties = {};
  var schema = parentSchema;
  /** @type {string} */
  var property;
  if (parentSchema.space === 'html' && name === 'svg') {
    schema = svg;
    context.schema = schema;
  }
  if (node.properties) {
    for (property in node.properties) {
      if (own$1.call(node.properties, property)) {
        addProperty(properties, property, node.properties[property], context);
      }
    }
  }
  if (name === 'ol' || name === 'ul') {
    context.listDepth++;
  }
  var children = childrenToReact(context, node);
  if (name === 'ol' || name === 'ul') {
    context.listDepth--;
  }

  // Restore parent schema.
  context.schema = parentSchema;

  // Nodes created by plugins do not have positional info, in which case we use
  // an object that matches the position interface.
  var position = node.position || {
    start: {
      line: null,
      column: null,
      offset: null
    },
    end: {
      line: null,
      column: null,
      offset: null
    }
  };
  var component = options.components && own$1.call(options.components, name) ? options.components[name] : name;
  var basic = typeof component === 'string' || component === React__default["default"].Fragment;
  if (!ReactIs.isValidElementType(component)) {
    throw new TypeError("Component for name `".concat(name, "` not defined or is not renderable"));
  }
  properties.key = [name, position.start.line, position.start.column, index].join('-');
  if (name === 'a' && options.linkTarget) {
    properties.target = typeof options.linkTarget === 'function' ? options.linkTarget(String(properties.href || ''), node.children, typeof properties.title === 'string' ? properties.title : null) : options.linkTarget;
  }
  if (name === 'a' && options.transformLinkUri) {
    properties.href = options.transformLinkUri(String(properties.href || ''), node.children, typeof properties.title === 'string' ? properties.title : null);
  }
  if (!basic && name === 'code' && parent.type === 'element' && parent.tagName !== 'pre') {
    properties.inline = true;
  }
  if (!basic && (name === 'h1' || name === 'h2' || name === 'h3' || name === 'h4' || name === 'h5' || name === 'h6')) {
    properties.level = Number.parseInt(name.charAt(1), 10);
  }
  if (name === 'img' && options.transformImageUri) {
    properties.src = options.transformImageUri(String(properties.src || ''), String(properties.alt || ''), typeof properties.title === 'string' ? properties.title : null);
  }
  if (!basic && name === 'li' && parent.type === 'element') {
    var input = getInputElement(node);
    properties.checked = input && input.properties ? Boolean(input.properties.checked) : null;
    properties.index = getElementsBeforeCount(parent, node);
    properties.ordered = parent.tagName === 'ol';
  }
  if (!basic && (name === 'ol' || name === 'ul')) {
    properties.ordered = name === 'ol';
    properties.depth = context.listDepth;
  }
  if (name === 'td' || name === 'th') {
    if (properties.align) {
      if (!properties.style) properties.style = {};
      // @ts-expect-error assume `style` is an object
      properties.style.textAlign = properties.align;
      delete properties.align;
    }
    if (!basic) {
      properties.isHeader = name === 'th';
    }
  }
  if (!basic && name === 'tr' && parent.type === 'element') {
    properties.isHeader = Boolean(parent.tagName === 'thead');
  }

  // If `sourcePos` is given, pass source information (line/column info from markdown source).
  if (options.sourcePos) {
    properties['data-sourcepos'] = flattenPosition(position);
  }
  if (!basic && options.rawSourcePos) {
    properties.sourcePosition = node.position;
  }

  // If `includeElementIndex` is given, pass node index info to components.
  if (!basic && options.includeElementIndex) {
    properties.index = getElementsBeforeCount(parent, node);
    properties.siblingCount = getElementsBeforeCount(parent);
  }
  if (!basic) {
    properties.node = node;
  }

  // Ensure no React warnings are emitted for void elements w/ children.
  return children.length > 0 ? /*#__PURE__*/React__default["default"].createElement(component, properties, children) : /*#__PURE__*/React__default["default"].createElement(component, properties);
}

/**
 * @param {Element|Root} node
 * @returns {Element?}
 */
function getInputElement(node) {
  var index = -1;
  while (++index < node.children.length) {
    var child = node.children[index];
    if (child.type === 'element' && child.tagName === 'input') {
      return child;
    }
  }
  return null;
}

/**
 * @param {Element|Root} parent
 * @param {Element} [node]
 * @returns {number}
 */
function getElementsBeforeCount(parent, node) {
  var index = -1;
  var count = 0;
  while (++index < parent.children.length) {
    if (parent.children[index] === node) break;
    if (parent.children[index].type === 'element') count++;
  }
  return count;
}

/**
 * @param {Record<string, unknown>} props
 * @param {string} prop
 * @param {unknown} value
 * @param {Context} ctx
 */
function addProperty(props, prop, value, ctx) {
  var info = find(ctx.schema, prop);
  var result = value;

  // Ignore nullish and `NaN` values.
  // eslint-disable-next-line no-self-compare
  if (result === null || result === undefined || result !== result) {
    return;
  }

  // Accept `array`.
  // Most props are space-separated.
  if (Array.isArray(result)) {
    result = info.commaSeparated ? stringify(result) : stringify$1(result);
  }
  if (info.property === 'style' && typeof result === 'string') {
    result = parseStyle(result);
  }
  if (info.space && info.property) {
    props[own$1.call(hastToReact, info.property) ? hastToReact[info.property] : info.property] = result;
  } else if (info.attribute) {
    props[info.attribute] = result;
  }
}

/**
 * @param {string} value
 * @returns {Record<string, string>}
 */
function parseStyle(value) {
  /** @type {Record<string, string>} */
  var result = {};
  try {
    styleToObject(value, iterator);
  } catch (_unused) {
    // Silent.
  }
  return result;

  /**
   * @param {string} name
   * @param {string} v
   */
  function iterator(name, v) {
    var k = name.slice(0, 4) === '-ms-' ? "ms-".concat(name.slice(4)) : name;
    result[k.replace(/-([a-z])/g, styleReplacer)] = v;
  }
}

/**
 * @param {unknown} _
 * @param {string} $1
 */
function styleReplacer(_, $1) {
  return $1.toUpperCase();
}

/**
 * @param {Position|{start: {line: null, column: null, offset: null}, end: {line: null, column: null, offset: null}}} pos
 * @returns {string}
 */
function flattenPosition(pos) {
  return [pos.start.line, ':', pos.start.column, '-', pos.end.line, ':', pos.end.column].map(String).join('');
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var own = {}.hasOwnProperty;
var changelog = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md';

/** @type {Record<string, Deprecation>} */
var deprecated = {
  plugins: {
    to: 'plugins',
    id: 'change-plugins-to-remarkplugins'
  },
  renderers: {
    to: 'components',
    id: 'change-renderers-to-components'
  },
  astPlugins: {
    id: 'remove-buggy-html-in-markdown-parser'
  },
  allowDangerousHtml: {
    id: 'remove-buggy-html-in-markdown-parser'
  },
  escapeHtml: {
    id: 'remove-buggy-html-in-markdown-parser'
  },
  source: {
    to: 'children',
    id: 'change-source-to-children'
  },
  allowNode: {
    to: 'allowElement',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes'
  },
  allowedTypes: {
    to: 'allowedElements',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes'
  },
  disallowedTypes: {
    to: 'disallowedElements',
    id: 'replace-allownode-allowedtypes-and-disallowedtypes'
  },
  includeNodeIndex: {
    to: 'includeElementIndex',
    id: 'change-includenodeindex-to-includeelementindex'
  }
};

/**
 * React component to render markdown.
 *
 * @param {ReactMarkdownOptions} options
 * @returns {ReactElement}
 */
function ReactMarkdown(options) {
  for (var key in deprecated) {
    if (own.call(deprecated, key) && own.call(options, key)) {
      var deprecation = deprecated[key];
      console.warn("[react-markdown] Warning: please ".concat(deprecation.to ? "use `".concat(deprecation.to, "` instead of") : 'remove', " `").concat(key, "` (see <").concat(changelog, "#").concat(deprecation.id, "> for more info)"));
      delete deprecated[key];
    }
  }
  var processor = unified().use(remarkParse).use(options.remarkPlugins || []).use(remarkRehype, _objectSpread$3(_objectSpread$3({}, options.remarkRehypeOptions), {}, {
    allowDangerousHtml: true
  })).use(options.rehypePlugins || []).use(rehypeFilter, options);
  var file = new VFile();
  if (typeof options.children === 'string') {
    file.value = options.children;
  } else if (options.children !== undefined && options.children !== null) {
    console.warn("[react-markdown] Warning: please pass a string as `children` (not: `".concat(options.children, "`)"));
  }
  var hastNode = processor.runSync(processor.parse(file), file);
  if (hastNode.type !== 'root') {
    throw new TypeError('Expected a `root` node');
  }

  /** @type {ReactElement} */
  var result = /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {}, childrenToReact({
    options: options,
    schema: html,
    listDepth: 0
  }, hastNode));
  if (options.className) {
    result = /*#__PURE__*/React__default["default"].createElement('div', {
      className: options.className
    }, result);
  }
  return result;
}
ReactMarkdown.defaultProps = {
  transformLinkUri: uriTransformer
};
ReactMarkdown.propTypes = {
  // Core options:
  children: PropTypes__default["default"].string,
  // Layout options:
  className: PropTypes__default["default"].string,
  // Filter options:
  allowElement: PropTypes__default["default"].func,
  allowedElements: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string),
  disallowedElements: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string),
  unwrapDisallowed: PropTypes__default["default"].bool,
  // Plugin options:
  remarkPlugins: PropTypes__default["default"].arrayOf(PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].arrayOf(PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string, PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].arrayOf(
  // prettier-ignore
  // type-coverage:ignore-next-line
  PropTypes__default["default"].any)]))])),
  rehypePlugins: PropTypes__default["default"].arrayOf(PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].arrayOf(PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string, PropTypes__default["default"].object, PropTypes__default["default"].func, PropTypes__default["default"].arrayOf(
  // prettier-ignore
  // type-coverage:ignore-next-line
  PropTypes__default["default"].any)]))])),
  // Transform options:
  sourcePos: PropTypes__default["default"].bool,
  rawSourcePos: PropTypes__default["default"].bool,
  skipHtml: PropTypes__default["default"].bool,
  includeElementIndex: PropTypes__default["default"].bool,
  transformLinkUri: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].bool]),
  linkTarget: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].string]),
  transformImageUri: PropTypes__default["default"].func,
  components: PropTypes__default["default"].object
};

var __jsx$5 = React__default["default"].createElement;
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
    return __jsx$5(CloseIcon, props);
  } : function (props) {
    return __jsx$5(CloseButton, props);
  };
  return __jsx$5(web.animated.div, {
    className: srContainerClassName,
    style: _objectSpread$2({}, styles)
  }, __jsx$5("div", {
    className: srContentContainerClassName,
    ref: ref
  }, Child ? __jsx$5(Child, props) : null, showDefault ? __jsx$5("div", {
    className: "flex flex-col items-start ".concat(message ? "gap-2" : "")
  }, __jsx$5("div", {
    className: "markdown ".concat(srHeaderClassName)
  }, __jsx$5(ReactMarkdown, null, title)), __jsx$5("div", {
    className: "markdown ".concat(srBodyClassName)
  }, __jsx$5(ReactMarkdown, null, message))) : null, __jsx$5(CloseIconComp, {
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
  return __jsx$5(SmartButton, {
    onClick: remove,
    className: "@pn absolute @it right-1 top-1 @ttc text-black @wh w-3 @zi z-50 @cr cursor-pointer"
  }, __jsx$5("svg", {
    className: "fill-current w-3",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx$5("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5659 5.24616C13.8936 4.91762 14.4257 4.91762 14.7542 5.24616C15.0827 5.57391 15.0827 6.10671 14.7542 6.43442L11.1711 10.0175L14.7042 13.5506C15.0302 13.8758 15.0302 14.4037 14.7042 14.7297C14.379 15.0558 13.8511 15.0558 13.5251 14.7297L9.99199 11.1966L6.43466 14.7539C6.10696 15.0817 5.57493 15.0817 5.2464 14.7539C4.91787 14.4262 4.91787 13.8942 5.2464 13.5656L8.80368 10.0084L5.27056 6.47527C4.94451 6.1501 4.94451 5.62226 5.27056 5.29621C5.59573 4.97016 6.12357 4.97016 6.44962 5.29621L9.98275 8.8293L13.5659 5.24616Z"
  })));
};

var __jsx$4 = React__default["default"].createElement;
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
  return __jsx$4("div", {
    className: "".concat(notificationsContainerClassName, " ").concat(isFromTop ? "top-0 mt-4" : "bottom-0 mb-4")
  }, transitions(function (styles, item) {
    return __jsx$4(Notification, _extends({
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
var __jsx$3 = React__default["default"].createElement;
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
var isBrowser = typeof window !== "undefined";
var NotificationsWrapper = function NotificationsWrapper(_ref) {
  var children = _ref.children;
  var _useState = React.useState([]),
    notifications = _useState[0],
    setNotifications = _useState[1];

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
  return __jsx$3(NotificationsContext.Provider, {
    value: {
      add: add
    }
  }, children, __jsx$3(Overlay, {
    notifications: notifications,
    remove: remove,
    isFromTop: isFromTop
  }));
};
var OverlayWrapper = function OverlayWrapper(_ref3) {
  var _ref3$notify = _ref3.notify,
    notify = _ref3$notify === void 0 ? function () {} : _ref3$notify;
  var isFromTop = isBrowser && window.innerWidth < 540;
  var _useState2 = React.useState([]),
    notifications = _useState2[0],
    setNotifications = _useState2[1];
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
  return __jsx$3(Overlay, {
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
    portal.render(__jsx$3(OverlayWrapper, {
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

var __jsx$2 = React__default["default"].createElement;
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
    width = _useState[0],
    setWidth = _useState[1];
  React.useEffect(function () {
    if (typeof window === "undefined") {
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
  return __jsx$2("div", {
    className: srGalleryClassName
  }, mediaLength > 1 ? typeof PreviousNavItemComponent === "function" ? __jsx$2(PreviousNavItemComponent, {
    onClick: function onClick() {
      ref.current = ref.current ? ref.current - 1 : 0;
      setActiveSlide(ref.current);
      setSlidePosition();
    }
  }) : __jsx$2(NavItem, {
    next: false,
    navItemClassName: navItemClassName,
    onClick: function onClick() {
      ref.current = ref.current ? ref.current - 1 : 0;
      setActiveSlide(ref.current);
      setSlidePosition();
    }
  }) : null, __jsx$2("div", {
    className: srMediaContainerClassName
  }, props.map(function (item, index) {
    var x = item.x,
      display = item.display;
    var mediaObj = media[index];
    return __jsx$2(web.animated.div, _extends({}, bind(), {
      key: "".concat(mediaObj.id, "-").concat(index),
      className: srMediaItemClassName,
      style: {
        display: display,
        x: x
      }
    }), typeof MediaItemComponent === "function" ? __jsx$2(MediaItemComponent, {
      mediaObj: mediaObj
    }) : mediaObj.renderType === "image" ? __jsx$2("img", {
      src: mediaObj.url,
      className: srImageItemClassName
    }) : __jsx$2("video", {
      src: url,
      controls: true,
      className: srVideoItemClassName
    }));
  })), mediaLength > 1 ? typeof NextNavItemComponent === "function" ? __jsx$2(NextNavItemComponent, {
    onClick: function onClick() {
      var lastItem = media.length - 1;
      ref.current = ref.current < lastItem ? ref.current + 1 : lastItem;
      setActiveSlide(ref.current);
      setSlidePosition();
    }
  }) : __jsx$2(NavItem, {
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
  return __jsx$2("div", {
    className: "z-10 absolute h-full top-0 ".concat(next ? "right-2" : "left-2", "  flex items-center")
  }, __jsx$2("div", {
    onClick: onClick,
    className: srNavItemClassName
  }, __jsx$2(ChevronIcon, {
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
  return __jsx$2("svg", {
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "fill-current ".concat(className)
  }, __jsx$2("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.3923 17.9512L10.106 4.81458L11.4102 3.61536L26.9999 17.9506L26.8933 18.0487L26.894 18.0493L11.3042 32.3845L10 31.1853L24.3923 17.9512Z"
  }));
};

var __jsx$1 = React__default["default"].createElement;
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
  var _useState = React.useState(false);
    _useState[0];
    var setShow = _useState[1];
  var _useState2 = React.useState(0),
    activeSlideIndex = _useState2[0],
    setActiveSlideIndex = _useState2[1];
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
  return __jsx$1("div", {
    className: srContainerClassName
  }, __jsx$1("div", {
    className: srGalleryContainerClassName
  }, __jsx$1("div", {
    className: "absolute w-full h-full inset-0"
  }, __jsx$1(ReactSpringGallery, {
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

var __jsx = React__default["default"].createElement;
var CopyButton = function CopyButton(props) {
  var textToCopy = props.textToCopy,
    _props$CopyButtonComp = props.CopyButtonComponent,
    CopyButtonComponent = _props$CopyButtonComp === void 0 ? function () {} : _props$CopyButtonComp;
  var _useState = React.useState(false),
    copied = _useState[0],
    setCopied = _useState[1];
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
  return __jsx(CopyButtonComponent, _extends({}, props, {
    onClick: handleClick,
    copied: copied
  }));
};

var AuthWrapper = function (_a) {
    var isAuth = _a.isAuth, children = _a.children, _b = _a.isPublic, isPublic = _b === void 0 ? false : _b, useRouter = _a.useRouter, 
    // user,
    useMyProfile = _a.useMyProfile, redirectTo = _a.redirectTo;
    var user = useMyProfile().me;
    var router = useRouter();
    var initPath = router.query.initPath;
    var _c = __read(React.useState(initPath || ""), 2); _c[0]; _c[1];
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
        // console.log(`🚀 ~ useEffect ~ user`, user);
        var _a;
        if (user.id) {
            setPassed(true);
            if ((_a = router.pathname) === null || _a === void 0 ? void 0 : _a.includes("/auth")) {
                router.push(redirectTo);
            }
            return;
        }
        else if (!isAuth) {
            if (isPublic) {
                setPassed(true);
                return;
            }
            var pathQuery = !initPath ? "?initPath=".concat(router.asPath) : "";
            // console.log(`🚀 ~ useEffect ~ pathQuery`, pathQuery);
            router.push("/auth/login".concat(pathQuery));
        }
        else if (isAuth) {
            setPassed(true);
        }
    }, [user, router]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null, passed ? children : null));
};

var Pagination = function (_a) {
    var currentPage = _a.currentPage, pagesCount = _a.pagesCount, _b = _a.visiblePagesCount, visiblePagesCount = _b === void 0 ? 3 : _b, onNavBtnClick = _a.onNavBtnClick, onPageBtnClick = _a.onPageBtnClick;
    var _c = __read(React.useState([]), 2), pagesBtns = _c[0], setPagesBtns = _c[1];
    React.useEffect(function () {
        if (pagesBtns.includes(currentPage))
            return;
        var page = currentPage;
        if (page + visiblePagesCount > pagesCount)
            page = pagesCount - visiblePagesCount + 1;
        var cb = function (_, index) { return page + index; };
        var newBtns = new Array(visiblePagesCount).fill(0).map(cb);
        setPagesBtns(newBtns);
    }, [pagesCount, visiblePagesCount, currentPage]);
    var showNavBtns = pagesCount > visiblePagesCount;
    var isLeftEdge = pagesBtns[0] + visiblePagesCount <= pagesCount;
    return (React__default["default"].createElement("div", { className: "flex justify-start items-center gap-2" },
        showNavBtns ? (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement("div", { onClick: function () {
                    return onNavBtnClick({ isNext: false, isShiftToEdge: true });
                }, className: btn }, "<<"),
            React__default["default"].createElement("div", { onClick: function () {
                    return onNavBtnClick({ isNext: false, isShiftToEdge: false });
                }, className: btn }, "<"))) : null,
        React__default["default"].createElement("div", { className: "flex justify-center items-center gap-2" },
            showNavBtns && !isLeftEdge ? React__default["default"].createElement("div", { className: btn }, "...") : null,
            pagesBtns.map(function (page) { return (React__default["default"].createElement("div", { className: "flex cursor-pointer select-none leading-5 justify-center items-center rounded-xl min-w-[44px] min-h-[44px] p-3 ".concat(page === currentPage
                    ? "bg-black border"
                    : "bg-neutral-850 hover:border text-neutral-500", " border-white"), key: page, onClick: function () { return page !== currentPage && onPageBtnClick(page); } }, page)); }),
            showNavBtns && isLeftEdge ? (React__default["default"].createElement("div", { className: "flex cursor-pointer leading-5 justify-center items-center rounded-xl min-w-[44px] min-h-[44px] p-3 bg-neutral-850 text-neutral-500" }, "...")) : null),
        showNavBtns ? (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement("div", { onClick: function () {
                    return onNavBtnClick({ isNext: true, isShiftToEdge: false });
                }, className: btn }, "<"),
            React__default["default"].createElement("div", { onClick: function () { return onNavBtnClick({ isNext: true, isShiftToEdge: true }); }, className: btn }, "<<"))) : null));
};
var btn = "flex cursor-pointer select-none leading-5 justify-center items-center rounded-xl min-w-[44px] min-h-[44px] p-3 bg-neutral-850 text-neutral-500";
// const isFirst = currentPage === pagesBtns[0];
// const isLast = currentPage === pagesBtns[pagesBtns.length - 1];
// else if (isLast) page--;

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
  AuthWrapper: AuthWrapper,
  Pagination: Pagination
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
