Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var qs = require('qs');
var React = require('react');
var reactTable = require('react-table');
var transitionComponent = require('transition-component');
var reactDom = require('react-dom');
var reactUseGesture = require('react-use-gesture');
var Calendar = require('react-calendar');
var ReactMarkdown = require('react-markdown');
var react = require('@use-gesture/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
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

    while (_) try {
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
var getImageUrl = function (obj, options) {
    var _a, _b;
    if (options === void 0) { options = {}; }
    var size = options.size, BACKEND_URL = options.BACKEND_URL;
    if (!obj) {
        return null;
    }
    var url = size ? ((_b = (_a = obj.formats) === null || _a === void 0 ? void 0 : _a[size]) === null || _b === void 0 ? void 0 : _b.url) || obj.url : obj.url;
    return "".concat(BACKEND_URL || "").concat(url);
};
var transformPageBlock = function (block, transformers) {
    var key = block === null || block === void 0 ? void 0 : block._Component;
    if (!(transformers === null || transformers === void 0 ? void 0 : transformers[key])) {
        return block;
    }
    return transformers[key](block);
};
var appendFilesToFormData = function (formData, files) {
    var e_1, _a, e_2, _b;
    // console.log(`🚀 ~ appendFilesToFormData ~ files`, files);
    // console.log(`🚀 ~ appendFilesToFormData ~ formData`, formData);
    if (Object.keys(files).length) {
        try {
            for (var _c = __values(Object.keys(files)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                // console.log(`🚀 ~ key`, key);
                if (Array.isArray(files[key])) {
                    try {
                        for (var _e = (e_2 = void 0, __values(files[key].entries())), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var _g = __read(_f.value, 2), _ = _g[0], file = _g[1];
                            // console.log(`🚀 ~ file`, file, files[key]);
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
                    // console.log(`🚀 ~ appendFilesToFormData ~ key`, key);
                    // console.log(`🚀 ~ file`, file, files[key]);
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
                    // console.log(`🚀 ~ unlunkRemovedFiles ~ splitted`, splitted);
                    sanitizedKey = splitted[splitted.length - 1];
                }
                if (Array.isArray(data[key])) {
                    if ((_c = sanitized[sanitizedKey]) === null || _c === void 0 ? void 0 : _c.length) {
                        if (priority !== 2) {
                            continue;
                        }
                    }
                    // console.log(`🚀 ~ unlunkRemovedFiles ~ array`);
                    sanitized[sanitizedKey] = data[key].map(function (item) {
                        return unlunkRemovedFiles({ data: item });
                    });
                }
                else {
                    // console.log(`🚀 ~ unlunkRemovedFiles ~ object`);
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
        // console.log(`🚀 ~ unlunkRemovedFiles ~ text`);
        sanitized = data;
    }
    // console.log(`🚀 ~ unlunkRemovedFiles ~ data`, data);
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
                    // // For situations, when you
                    // // should delete file in components documents[0].files: [...<here>]
                    // const splitted = key?.split(`].`);
                    // if (splitted?.length > 1) {
                    //   console.log(`🚀 ~ removeEmptyFields ~ splitted`, splitted);
                    //   const splittedKey = splitted[splitted.length - 1];
                    //   modified[key] = removeEmptyFields({
                    //     data: data[key],
                    //     splittedKey,
                    //     files,
                    //   });
                    // } else {
                    modified[key] = removeEmptyFields({
                        data: data[key],
                        passKey: "".concat(passKey ? "".concat(passKey, ".") : "").concat(key),
                        files: files,
                    });
                    // }
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

var formatters = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hasZeroAfterDot: hasZeroAfterDot,
    getCountAfterDot: getCountAfterDot,
    formatPercent: formatPercent,
    parseMimeType: parseMimeType$1
});

/**
 * Filter function by text content
 *
 * @param {array} rows - an array of sorted values ​​from the `useTable ()` hook
 * @param {string} accessor - filtering key
 * @param {string} filterValue - the passed filtering parameter by which the comparison is made
 * @returns {array} filtered array of values
 */

const text = (rows, accessor, filterValue) => {
  return rows.filter(row => {
    const rowValue = row[prefix][accessor];
    return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true;
  });
};

const baseFilters = {
  text
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

const useLookupTable = ({
  columns = [],
  data: passedData = [],
  getRowId,
  config = {
    selectedRowIds: []
  },
  initialFiltersState = []
}) => {
  const data = React.useMemo(() => {
    return passedData;
  }, [passedData.length]);
  const [sortBy, setSortBy] = React.useState(config.sortBy);
  const [filters, setFilters] = React.useState(initialFiltersState);
  const [localGlobalFilter, setLocalGlobalFilter] = React.useState(config.globalFilter || ``);
  const [localSelectedRowIds, setLocalSelectedRowIds] = React.useState(config.selectedRowIds || undefined);
  React.useMemo(() => config.useRowSelect ?? false, []);
  /**
   * State memoization to prevent data erasure when `data` changes
   * */

  const initialState = React.useMemo(() => {
    const state = {};
    if (sortBy) state.sortBy = sortBy;
    if (filters) state.filters = filters;
    if (localGlobalFilter) state.globalFilter = localGlobalFilter;
    if (localSelectedRowIds) state.selectedRowIds = localSelectedRowIds;
    return state;
  }, [sortBy, filters, localSelectedRowIds]);
  const filterTypes = React.useMemo(() => {
    return { ...baseFilters,
      ...config.filterTypes
    };
  }, []);
  React.useEffect(() => {
    if (data.length && config.selectedRowIds) {
      setLocalSelectedRowIds(config.selectedRowIds);
    }
  }, [data]);
  const tableInstance = reactTable.useTable({
    columns,
    data,
    filterTypes,
    initialState,
    getRowId
  }, reactTable.useGlobalFilter, reactTable.useFilters, reactTable.useSortBy, reactTable.useExpanded, reactTable.useRowSelect);
  const {
    headerGroups,
    rows,
    setGlobalFilter,
    prepareRow,
    toggleRowExpanded,
    getTableBodyProps,
    getTableProps,
    state,
    toggleAllRowsSelected
  } = tableInstance;
  /**
   * Save `isSelected` IDs state for real-data rendering
   */

  React.useEffect(() => {
    let foundSelected = false;

    if (!rows.length) {
      return;
    }

    const selected = {};
    rows?.map(row => {
      selected[row.index] = row?.isSelected;
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

  React.useEffect(() => {
    let foundSorted = false;

    if (!rows.length) {
      return;
    }

    headerGroups[0].headers.map(header => {
      if (header?.isSorted) {
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

  React.useEffect(() => {
    let foundFiltered = false;

    if (!rows.length) {
      return;
    }

    headerGroups[0].headers.map(header => {
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
  const [inputValue, setInputValue] = React.useState(state.globalFilter);

  const onGlobalFilterChange = value => {
    setGlobalFilter(value || undefined);
  };

  const onInputChange = e => {
    if (config.onInputChange) {
      config.onInputChange(e.target.value);
    }

    setInputValue(e.target.value);
    onGlobalFilterChange(e.target.value);
    setLocalGlobalFilter(e.target.value);
  };

  return {
    inputValue,
    onInputChange,
    headerGroups,
    rows,
    prepareRow,
    state,
    getTableBodyProps,
    getTableProps,
    toggleRowExpanded,
    toggleAllRowsSelected
  };
};

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

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  xl: 1024,
  xl: 1280,
  "2xl": 1536
};

const useBreakpoint$1 = breakpoint => {
  const [width, setWidth] = React.useState(undefined);
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener(`resize`, handleResize);
    handleResize();
    return () => {
      window.removeEventListener(`resize`, handleResize);
    };
  }, []);
  return !width || width >= BREAKPOINTS[breakpoint];
};

const fullByShort = {
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
const shortByFull = {
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
  "@flexGrow": "@fxg",
  "@flexShrink": "@fxs",
  "@flexWrap": "@fxw",
  "@fontFamily": "@ftf",
  "@fontSize": "@fts",
  "@fontSmoothing": "@ftsg",
  "@fontStyle": "@ftse",
  "@fontVariantNumeric": "@ftvn",
  "@fontWeight": "@ftw",
  "@gap": "@gp",
  "@gradientColorStops": "@gtcs",
  "@height": "@ht",
  "@inset": "@it",
  "@justifyContent": "@jyc",
  "@justifyItems": "@jyi",
  "@justifySelf": "@jys",
  "@letterSpacing": "@lrs",
  "@lineHeight": "@leh",
  "@listStylePosition": "@ltsp",
  "@listStyleType": "@ltst",
  "@margin": "@mn",
  "@maxHeight": "@mxh",
  "@maxWidth": "@mxw",
  "@minHeight": "@mnh",
  "@minWidth": "@mnw",
  "@objectFit": "@otf",
  "@objectPosition": "@otp",
  "@opacity": "@oy",
  "@order": "@or",
  "@outline": "@oe",
  "@overflow": "@ow",
  "@overscrollBehavior": "@olb",
  "@padding": "@pg",
  "@placeContent": "@pec",
  "@placeItems": "@pei",
  "@placeSelf": "@pes",
  "@placeholderColor": "@prc",
  "@placeholderOpacity": "@pro",
  "@pointerEvents": "@pre",
  "@position": "@pn",
  "@resize": "@re",
  "@ringColor": "@rgc",
  "@ringOffsetColor": "@rgoc",
  "@ringOffsetWidth": "@rgow",
  "@ringOpacity": "@rgo",
  "@ringWidth": "@rgw",
  "@rotate": "@re",
  "@scale": "@se",
  "@skew": "@sw",
  "@spaceBetween": "@seb",
  "@stroke": "@se",
  "@strokeWidth": "@sew",
  "@tableLayout": "@tel",
  "@touchAction": "@th",
  "@textAlign": "@tta",
  "@textColor": "@ttc",
  "@textDecoration": "@ttd",
  "@textOpacity": "@ttoy",
  "@textOverflow": "@ttow",
  "@textTransform": "@ttt",
  "@transform": "@tm",
  "@transformOrigin": "@tmo",
  "@transitionDelay": "@tndy",
  "@transitionDuration": "@tndn",
  "@transitionProperty": "@tnp",
  "@transitionTimingFunction": "@tntf",
  "@translate": "@te",
  "@userSelect": "@urs",
  "@verticalAlign": "@vla",
  "@visibility": "@vy",
  "@whitespace": "@we",
  "@width": "@wh",
  "@wordBreak": "@wdb",
  "@zIndex": "@zi"
};
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

const useStyleRewriter$6 = (baseClassName, className, cleared = true) => {
  return React.useMemo(() => {
    let styleObj = getStyleObj(`@base ${baseClassName}`, cleared);
    let styleObjProps = getStyleObj(`@prop ${className}`, cleared);
    const computedStyleObj = { ...styleObj,
      ...styleObjProps
    };
    const resultClassName = Object.values(computedStyleObj).join(" ").replace(/\n/g, "");
    return resultClassName.replace(/\s+/g, " ");
  }, [baseClassName, className]);
};

const getStyleObj = (className = "", cleared) => {
  if (!className || !className.trim()) {
    return {};
  }

  let classesArr = className.replace(/@([a-z:]*)/g, "__@$1__").split("__").filter(str => str);
  const styleObj = {};
  classesArr.forEach((item, index) => {
    if (item) {
      const isKey = item.includes("@");
      const nextValue = classesArr[index + 1];

      if (isKey) {
        const isKeyNextValue = nextValue && nextValue.includes("@");

        if (!(fullByShort[item] || shortByFull[item])) {
          throw new Error(`Invalid key ${item} for styleRewriter in className ${className}`);
        }

        if (!isKeyNextValue) {
          setValue({
            styleObj,
            key: item,
            value: nextValue,
            cleared
          });
        } else {
          setValue({
            styleObj,
            key: item,
            value: "",
            cleared
          });
        }
      }
    }
  });
  return styleObj;
};

const setValue = ({
  styleObj,
  key,
  value,
  cleared
}) => {
  if (cleared) {
    styleObj[key] = value;
  } else {
    const stringKey = key === "@base" || key === "@prop" ? "" : key;
    styleObj[key] = `${stringKey} ${value}`;
  }
};

const useDetectMouseover$1 = (el, initialState) => {
  const [isActive, setIsActive] = React.useState(initialState);
  const handleOver = React.useCallback(e => {
    setIsActive(true);
  }, [el.current]);
  const handleOut = React.useCallback(e => {
    setIsActive(false);
  }, [el.current]);
  React.useEffect(() => {
    if (el.current) {
      el.current.addEventListener("mouseenter", handleOver);
      el.current.addEventListener("mouseleave", handleOut);
    }

    return () => {
      if (el.current) {
        el.current.removeEventListener("mouseenter", handleOver);
        el.current.removeEventListener("mouseleave", handleOut);
      }
    };
  }, [isActive, el.current]);
  return [isActive];
};

const useDetectOutsideClick$1 = (trigger, initialState) => {
  const [isActive, setIsActive] = React.useState(initialState);
  React.useEffect(() => {
    const pageClickEvent = e => {
      if (trigger?.current && !trigger.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    window.addEventListener("click", pageClickEvent);
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, []);
  return [isActive, setIsActive];
};

const changeInput = (e, {
  inputs,
  errors,
  files,
  setErrors = () => {},
  setInputs,
  setFiles
}) => {
  let localInputs = { ...inputs
  };
  let localErrors = { ...errors
  };
  let localFiles = { ...files
  };
  localErrors[e.target.id] = [];

  if (!e.target.files) {
    if (!Object.keys(files).includes(e.target.id)) {
      localInputs[e.target.id] = e.target.value;
    } else {
      // Delete files on backend
      localInputs[e.target.id] = e.target.value;

      if (e.target.multiple) {
        if (localFiles && Array.isArray(localFiles[e.target.id])) {
          localFiles = { ...localFiles,
            [e.target.id]: [...localInputs[e.target.id]]
          };
        }
      }
    }
  } else {
    const loadedFiles = { ...e.target.files
    };

    for (const [index] of new Array(e.target.files.length).entries()) {
      if (e.target.multiple) {
        if (localFiles && Array.isArray(localFiles[e.target.id])) {
          localFiles = { ...localFiles,
            [e.target.id]: [...localFiles[e.target.id], loadedFiles[index]]
          };
        } else {
          localFiles = { ...localFiles,
            [e.target.id]: [loadedFiles[index]]
          };
        }
      } else {
        localFiles = { ...localFiles,
          [e.target.id]: loadedFiles[index]
        };
      }
    }
  }

  if (e.target.type == `checkbox`) {
    localInputs[e.target.id] = e.target.checked;
  }

  setFiles({ ...localFiles
  });
  setInputs({ ...localInputs
  });
  setErrors({ ...localErrors
  });
};
const checkUsernameMask = ({
  field,
  value,
  errors
}) => {
  if (!/^[A-z0-9_]{5,25}$/.test(value)) {
    addError({
      errors,
      field,
      id: `usernameMask`,
      message: `Username must contain only characters, numbers and "_". Min 5 symbols`
    });
  }
};
const regexes = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^[+][0-9]{11,15}$/
};
const checkEmailMask = ({
  field,
  value,
  errors
}) => {
  if (!regexes.email.test(value.trim())) {
    addError({
      errors,
      field,
      id: `mask`,
      message: `Invalid E-mail address format`
    });
  }
};

const checkPhoneMask = ({
  field,
  value,
  errors
}) => {
  value = value?.replace(/[ \( \)-]*/g, ``);

  if (!regexes.phone.test(value.trim())) {
    addError({
      errors,
      field,
      id: `mask`,
      message: `Invalid phone format`
    });
  }
};

const checkPassword = ({
  field,
  value,
  errors,
  title
}) => {
  const min = 8;

  if (value.length < min || value.includes(` `)) {
    addError({
      errors,
      field,
      id: `length`,
      message: `Password is too short, minimum ${min} characters`
    });
  }
};
const checkRequiredField = ({
  field,
  value,
  errors
}) => {
  // Reset old required errors if exists
  // Add new require errors
  if (value === undefined || value === null || typeof value == `string` && value.trim() == ``) {
    addError({
      errors,
      field,
      id: `required`,
      message: `Reqired field`
    });
  }
};
const checkEqualTo = ({
  field,
  value,
  errors,
  config,
  inputs,
  title,
  label,
  inputsConfig
}) => {
  const equalTo = config.equalTo;

  if (value !== inputs[equalTo]) {
    // const fieldTitle = title || label || field;
    // const equalToConfig = inputsConfig?.find((a) => a?.field === equalTo);
    // const equalToTitle = equalToConfig.title || equalToConfig.label || equalTo;
    addError({
      errors,
      field,
      id: `equal`,
      message: `Not equal`
    });
  }
};
const checkFields = ({
  setErrors,
  errors,
  inputsConfig,
  inputs,
  files
}) => {
  const localErrors = { ...errors
  };
  inputsConfig.forEach(({
    field,
    checkerFuncs,
    config,
    title,
    label,
    type,
    multiple
  }) => {
    let value = inputs[field];

    if (files && type === `file` && files[field]) {
      if (multiple) {
        if (files[field]?.length > 0) {
          value = `uploaded`;
        }
      } else {
        value = `uploaded`;
      }
    }

    checkerFuncs.forEach(checker => {
      if (!localErrors[field]) {
        const checkerProps = {
          value,
          field,
          errors: localErrors,
          label,
          title,
          inputs,
          config,
          inputsConfig
        };

        if (typeof checker === `function`) {
          checker(checkerProps);
        } else if (typeof checker === `string`) {
          if (defualtCheckerFuncs[checker]) {
            defualtCheckerFuncs[checker](checkerProps);
          } else {
            throw new Error(`There is no function ${checker} in default chekers function. List of available functions ${Object.keys(defualtCheckerFuncs)}`);
          }
        } else {
          throw new Error(`${checker} is not a valid function`);
        }
      }
    });
  });
  setErrors(localErrors);
  const hasErrors = [];

  for (const [key, value] of Object.entries(localErrors)) {
    if (value) {
      // console.log(`🚀 ~ localErrors ~ key, value`, key, value);
      // Во вложенных формах своя проверка
      if (Object.values(value).every(message => typeof message === `string`)) {
        hasErrors.push({ ...value
        });
      } // hasErrors.push({ ...value });

    }
  } // console.log(`🚀 ~ hasErrors`, hasErrors, localErrors);


  const isValid = hasErrors.length ? false : true;
  return isValid;
};

const addError = ({
  errors,
  field,
  id,
  message
}) => {
  errors[field] = {
    id,
    message
  };
};

const defualtCheckerFuncs = {
  checkEmailMask,
  checkPhoneMask,
  checkUsernameMask,
  checkPassword,
  checkRequiredField,
  checkEqualTo
};
const changeTypeFunc = ({
  types,
  setTypes,
  field
}) => {
  const type = types[field];

  if (types[field]) {
    const localTypes = { ...types
    };

    if (type === `password`) {
      localTypes[field] = `text`;
    } else if (type === `text`) {
      localTypes[field] = `password`;
    }

    setTypes(localTypes);
  }
};
const changeBlockedInputsFunc = ({
  setBlockedInputs,
  blockedInputs,
  newBlockedInputs
}) => {
  setBlockedInputs({ ...blockedInputs,
    ...newBlockedInputs
  });
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
var urlRegex = /\b(?<![@.,%&#-])(?<protocol>\w{2,10}:\/\/)?((?:\w|\&\#\d{1,5};)[.-]?)+(\.([a-z]{2,15})|((protocol)(?:\:\d{1,6})|(?!)))\b(?![@])(\/)?(?:([\w\d\?\-=#:%@&.;])+(?:\/(?:([\w\d\?\--=#:%@&;.])+))*)?(?<![.,?!-])/gim;
var shortenAddress = function (address, symbols) {
    if (symbols === void 0) { symbols = [6, 4]; }
    var firstPart = address.slice(0, symbols[0]);
    var secondPart = address.slice(-symbols[1]);
    return "".concat(firstPart, "...").concat(secondPart);
};
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
    shortenAddress: shortenAddress,
    addProtocolToUrl: addProtocolToUrl,
    getURLsFromText: getURLsFromText,
    parseMimeType: parseMimeType,
    getPastDay: getPastDay,
    getMonthRange: getMonthRange
});

const useForm = ({
  inputsConfig,
  submitFunc = submitFuncProps => {
    return true;
  },
  afterPassed = ({
    setInputs,
    clearInputs
  }) => {},
  inputPropsType = `array`
}) => {
  const {
    initialInputs,
    initialErrors,
    initialTypes,
    initialBlocked,
    initialFiles
  } = React.useMemo(() => {
    const inputs = {};
    const errors = {};
    const types = {};
    const blockedInputs = {};
    const files = {};
    inputsConfig.forEach(({
      field,
      defaultValue,
      type = `text`,
      config = {},
      blocked
    }) => {
      defaultValue = defaultValue !== undefined ? defaultValue : ``; // console.log(`🚀 ~ defaultValue`, defaultValue);

      if (type === `file`) {
        if (defaultValue !== ``) {
          files[field] = defaultValue;
        }
      } else {
        inputs[field] = defaultValue;
      }

      errors[field] = null;

      if (config?.enableTypeChanging) {
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
  }, [inputsConfig]);
  const [inputs, setInputs] = React.useState(initialInputs);
  const [files, setFiles] = React.useState(initialFiles);
  const [errors, setErrors] = React.useState(initialErrors);
  const [types, setTypes] = React.useState(initialTypes);
  const [blockedInputs, setBlockedInputs] = React.useState(initialBlocked);
  const [requestId, setRequestId] = React.useState(``);
  React.useEffect(() => {
    setInputs(initialInputs);
    setErrors(initialErrors);
    setTypes(initialTypes);
    setFiles(initialFiles);
    setBlockedInputs(initialBlocked);
  }, [inputsConfig]);
  const [passed, setPassed] = React.useState(false);
  React.useEffect(() => {
    setErrors(initialErrors);
  }, [inputs]);

  const clearInputs = () => setInputs(initialInputs); // call afterPassed function after passed


  React.useEffect(() => {
    if (passed) {
      const unmountCallback = afterPassed({
        setInputs,
        clearInputs,
        passed,
        setPassed
      });
      return unmountCallback;
    }
  }, [passed]);
  const onSubmitFunc = React.useMemo(() => {
    return (e, submitProps = {}) => onSubmit(e, {
      inputsConfig,
      inputs,
      errors,
      setErrors,
      submitFunc,
      setRequestId,
      files,
      evt: e,
      ...submitProps
    });
  }, [inputsConfig, inputs, errors, files]);

  const changeType = (e, {
    field
  }) => changeTypeFunc({
    types,
    setTypes,
    field
  });

  const changeBlockedInputs = inputs => changeBlockedInputsFunc({
    setBlockedInputs,
    blockedInputs,
    newBlockedInputs: inputs
  });

  const onChange = e => {
    changeInput(e, {
      inputs,
      errors,
      files,
      setFiles,
      setErrors,
      setInputs
    });
  };

  const inputsProps = React.useMemo(() => {
    let props;

    if (inputPropsType === `array`) {
      props = [];
    } else {
      props = {};
    }

    inputsConfig.forEach(({
      field,
      blocked,
      placeholder = ``,
      title = ``,
      label = ``,
      config = {},
      type: defaultType = `text`,
      PairComponent,
      ...params
    }) => {
      if (defaultType !== `hidden`) {
        const prop = {
          id: field,
          error: errors[field],
          changeType,
          blocked: isNil(blocked) ? false : blockedInputs[field],
          title,
          label,
          placeholder,
          onChange,
          type: types[field] || defaultType,
          enableTypeChanging: config && config.enableTypeChanging,
          headingProps: config?.headingProps,
          changeBlockedInputs,
          setFiles,
          PairComponent,
          ...params
        };

        if (prop.type === `file`) {
          // console.log(`🚀 ~ inputsProps ~ files`, files);
          prop.files = files;
          prop.value = undefined;
        } else {
          prop.value = inputs[field];
        }

        if (inputPropsType === `array`) {
          props.push(prop);
        } else {
          props[field] = prop;
        }
      }
    }); // console.log(`🚀 ~ inputsProps ~ props`, props, files);

    return props;
  }, [inputs, files, errors, types, blockedInputs]);
  return {
    setRequestId,
    requestId,
    inputs: inputsProps,
    onSubmit: onSubmitFunc,
    inputsValues: inputs,
    setInputsValues: setInputs,
    errors,
    files,
    setErrors,
    passed,
    setPassed,
    changeBlockedInputs,
    clearInputs,
    setInitialErrors: () => setErrors(initialErrors)
  };
};
const onSubmit = (e, props) => {
  e && e.preventDefault();
  const {
    inputsConfig,
    inputs,
    errors,
    setErrors,
    submitFunc,
    files
  } = props;
  const isValid = checkFields({
    setErrors,
    errors,
    inputsConfig,
    inputs,
    files
  });

  if (isValid) {
    // console.log(`🚀 ~ if (isValid) onSubmit ~ isValid`, isValid);
    if (files) {
      selectFilesForDelete({
        files,
        inputsConfig
      });
    } // console.log(`🚀 ~ submitFunc props`, props);


    return submitFunc(props);
  } else {
    console.log(`🚀 ~ onSubmit ~ errors`, errors);
  }
};

const selectFilesForDelete = ({
  files,
  inputsConfig
}) => {
  const filesInputsConfigs = inputsConfig.filter(config => config.type === `file`);

  for (const config of filesInputsConfigs) {
    const filesKey = config.field;
    const passedFiles = files[filesKey];

    if (Array.isArray(config.defaultValue)) {
      for (const defaultFile of config.defaultValue) {
        if (!passedFiles.filter(passedFile => passedFile.url === defaultFile.url).length) {
          config?.deleteFile(defaultFile);
        }
      }
    } else if (typeof config.defaultValue === `object`) {
      const passedFile = passedFiles;
      const defaultFile = config?.defaultValue;

      if (defaultFile?.url) {
        if (!passedFile || passedFile.url !== defaultFile?.url) {
          config?.deleteFile(defaultFile);
        }
      }
    }
  }
};

function useChildForm({
  inputsConfig,
  setParentErrors = () => {},
  setSubmitPipe = () => {},
  setParentInputs = () => {},
  inputPropsType,
  setParentFiles = () => {}
}) {
  const {
    inputsValues,
    errors,
    onSubmit,
    inputs,
    files,
    setInputsValues
  } = useForm({
    inputsConfig,
    inputPropsType
  });
  const submitId = React.useMemo(() => {
    return `${(Math.random() * 1000000).toFixed(0)}`;
  }, []);
  React.useEffect(() => {
    setParentErrors(errors);
  }, [errors]); // console.log(`🚀 ~ inputsConfig`, submitId, inputsConfig);

  React.useEffect(() => {
    setSubmitPipe(prev => ({ ...prev,
      [submitId]: onSubmit
    }));
  }, [onSubmit]);

  const onDelete = () => {
    setSubmitPipe(prev => {
      const newSubmitPipes = { ...prev
      };
      delete newSubmitPipes[submitId];
      return newSubmitPipes;
    });
  };

  React.useEffect(() => {
    // console.log(`🚀 ~ useEffect ~ inputsValues`, inputsValues);
    setParentErrors(null);
    setParentInputs(inputsValues);
  }, [inputsValues]);
  React.useEffect(() => {
    setParentErrors(null); // console.log(`🚀 ~ useEffect ~ setParentFiles files Stage`, files);

    setParentFiles(files);
  }, [files]);
  return {
    inputsValues,
    setInputsValues,
    onSubmit,
    inputs,
    files,
    onDelete,
    errors
  };
}

const hooks = {
  useDetectMouseover: useDetectMouseover$1,
  useDetectOutsideClick: useDetectOutsideClick$1,
  useLookupTable,
  useBreakpoint: useBreakpoint$1,
  useSetParentsInput,
  useStyleRewriter: useStyleRewriter$6,
  useForm,
  useChildForm
};

function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function (target) {
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
  return _extends$3.apply(this, arguments);
}

const {
  useStyleRewriter: useStyleRewriter$5
} = hooks;

const DropdownContainer = ({
  children,
  containerClassName,
  className,
  dropdownRef
}) => {
  const srClassName = useStyleRewriter$5(baseClasses$2, className);
  const srContainerClassName = useStyleRewriter$5(baseContainerClassName$4, containerClassName);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: dropdownRef,
    className: srContainerClassName
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srClassName
  }, children));
};
const baseContainerClassName$4 = `
  @pn absolute
  @wh w-full
  @mn mt-2
  @zi z-50
  @it top-full left-0
`;
const baseClasses$2 = `
  @dy flex
  @fxd flex-col
  @pn relative
  @wh w-full
`;

const {
  useStyleRewriter: useStyleRewriter$4
} = hooks;

const Tooltip = ({
  children,
  visible = true,
  tooltipRef,
  className,
  tooltipPosition
}) => {
  const srClasses = useStyleRewriter$4(baseClasses$1, className);
  const tooltipClasses = React.useMemo(() => {
    switch (tooltipPosition) {
      case "left-bottom":
        return `tooltip-left-bottom`;

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
    className: `${visible ? "opacity-100 w-auto" : "opacity-0"} ${srClasses} ${tooltipClasses}`
  }, children);
};
const baseClasses$1 = `
    @pn absolute
    @wh w-fit
    @it left-0 top-0
    @tta text-center 
    @bxsw shadow-400
    @brw border
    @brc border-true-gray-150
    @bdc bg-white 
    @pg p-1 
    @brr rounded-8px 
    @ttc text-black
  `;

const {
  useStyleRewriter: useStyleRewriter$3,
  useDetectMouseover,
  useDetectOutsideClick
} = hooks;

const SmartButton = ({
  disabled,
  className,
  disabledClassName,
  children,
  tooltipPosition,
  href = "",
  dropdownItems: DropdownItems,
  dropdownContainerClassName = "",
  dropdownClassName = "",
  dropdownProps,
  tooltipItems: TooltipItems,
  tooltipContainerClasses = "",
  onClick: onClickCb,
  linkProps = [],
  Link = () => {}
}) => {
  const dropdownRef = React.useRef(null);
  const SmartButtonRef = React.useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useDetectOutsideClick(SmartButtonRef, false);

  const onClick = e => {
    if (DropdownItems && !dropdownRef.current?.contains(e.target)) {
      setIsDropdownOpen(!isDropdownOpen);
    }

    return onClickCb && onClickCb(e);
  };

  const [isMouseOver] = useDetectMouseover(SmartButtonRef, false);
  const statusClassName = React.useMemo(() => {
    if (disabled) {
      return disabledClassName ? disabledClassName : "@pre pointer-events-none";
    }

    return className;
  }, [disabled, className]);
  const srClasses = useStyleRewriter$3(baseButtonClassName, statusClassName);
  const Element = href ? LinkSmartButton : DivSmartButton;
  const elementProps = href ? {
    Link,
    href,
    passHref: true,
    className: srClasses,
    linkProps
  } : {
    className: srClasses
  };
  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(Element, _extends$3({
    SmartButtonRef: SmartButtonRef,
    onClick: disabled ? () => {} : onClick
  }, elementProps), typeof children === "function" ? children({
    isMouseOver
  }) : children, DropdownItems && /*#__PURE__*/React__default["default"].createElement(transitionComponent.Transition, _extends$3({
    show: isDropdownOpen
  }, contentTransitionProps$2), /*#__PURE__*/React__default["default"].createElement(DropdownContainer, {
    containerClassName: dropdownContainerClassName,
    className: dropdownClassName,
    dropdownRef: dropdownRef
  }, /*#__PURE__*/React__default["default"].createElement(DropdownItems, _extends$3({}, dropdownProps, {
    setIsDropdownOpen: setIsDropdownOpen
  })))), TooltipItems && /*#__PURE__*/React__default["default"].createElement(transitionComponent.Transition, _extends$3({
    show: isMouseOver
  }, tooltipTransitionProps), /*#__PURE__*/React__default["default"].createElement(Tooltip, {
    tooltipPosition: tooltipPosition,
    className: tooltipContainerClasses,
    visible: isMouseOver
  }, /*#__PURE__*/React__default["default"].createElement(TooltipItems, null)))));
};
const baseButtonClassName = `
  @pn relative
  @cr cursor-pointer
  @tndn duration-200`;

const DivSmartButton = ({
  children,
  SmartButtonRef,
  ...props
}) => /*#__PURE__*/React__default["default"].createElement("div", _extends$3({
  ref: SmartButtonRef
}, props), children);

const LinkSmartButton = ({
  Link = () => {},
  children,
  className,
  linkProps = [],
  ...props
}) => {
  let linkAttributes = [];

  if (linkProps.length) {
    linkAttributes = linkProps.map(({
      name,
      value
    }) => [name, value]);
    linkAttributes = Object.fromEntries(linkAttributes);
  }

  return /*#__PURE__*/React__default["default"].createElement(Link, props, /*#__PURE__*/React__default["default"].createElement("a", _extends$3({}, linkAttributes, {
    className: className
  }), children));
};

const contentTransitionProps$2 = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0"
};
const tooltipTransitionProps = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 scale-50",
  enterTo: "opacity-100 scale-100",
  leave: "ease-in duration-300",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-50"
};

const {
  useStyleRewriter: useStyleRewriter$2
} = hooks;

const ModalComponent$1 = ({
  show = false,
  //required
  setShow = () => {},
  //required
  RenderCard = () => /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null),
  //required
  CloseButton = DefaultCloseButton,
  popupWindowClasses = ``,
  closeButtonClasses = ``,
  layoutClasses = ``,
  containerClasses = ``,
  removeFromDom = true,
  transitionDuration: duration = 300,
  renderCardProps = {},
  hideDocumentOverflow = true,
  hideCloseButton = false
}) => {
  const [showLayout, setShowLayout] = React.useState(show);
  const srLayoutClasses = useStyleRewriter$2(baseLayoutClasses, layoutClasses);
  const srPopupWindowClasses = useStyleRewriter$2(`@pre pointer-events-auto @tnp transition @tm transform z-40 @pn relative`, popupWindowClasses);
  const srContainerClasses = useStyleRewriter$2(baseContainerClasses, containerClasses);

  const changePopup = bool => {
    if (bool) {
      if (hideDocumentOverflow) {
        document.body.style.overflow = `hidden`;
      }

      setShowLayout(true);
    } else {
      if (hideDocumentOverflow) {
        document.body.style.overflow = `auto`;
      }

      setTimeout(() => {
        setShowLayout(false);
      }, duration - 50);
    }
  };

  React.useEffect(() => {
    if (showLayout || show) changePopup(show);
  }, [show]); // close popup on 'escape' key

  React.useEffect(() => {
    const changePopupListener = e => {
      if (e.code === `Escape`) {
        setShow(false);
        changePopup(false);
      }
    };

    window.addEventListener(`keydown`, changePopupListener);
    return () => {
      window.removeEventListener(`keydown`, changePopupListener);
      document.body.style.overflow = null;
    };
  }, []);
  const TransitionElement = removeFromDom ? TransitionComponent : PlainDiv;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    // onClick={(e) => e.stopPropagation()}
    className: `${showLayout ? `z-30 block` : `-z-1`} ${srContainerClasses} `
  }, /*#__PURE__*/React__default["default"].createElement(TransitionElement, {
    baseClasses: `fixed inset-0 pointer-events-auto duration-${duration} transition z-10`,
    show: show,
    transitionProps: layoutTransitionProps
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "transition fixed inset-0"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: () => setShow(false),
    className: srLayoutClasses
  }))), /*#__PURE__*/React__default["default"].createElement(TransitionElement, {
    baseClasses: `pointer-events-auto transition duration-${duration} transform z-40 relative`,
    show: show,
    id: `modal`,
    changePopup: setShow,
    transitionProps: contentTransitionProps$1
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srPopupWindowClasses
  }, /*#__PURE__*/React__default["default"].createElement(RenderCard, _extends$3({}, renderCardProps, {
    show: show,
    setShow: setShow
  })))), !hideCloseButton && show ? /*#__PURE__*/React__default["default"].createElement(CloseButton, {
    setShow: bool => setShow(bool),
    closeButtonClasses: closeButtonClasses
  }) : null));
};

const DefaultCloseButton = ({
  setShow,
  closeButtonClasses
}) => {
  return /*#__PURE__*/React__default["default"].createElement(SmartButton, {
    onClick: () => setShow(false),
    className: "@pn absolute @it right-[20px] top-[20px] @ttc text-white hover:text-neutral-550 @wh w-12 @zi z-50 @cr cursor-pointer"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    className: `fill-current w-12 h-12`,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5659 5.24616C13.8936 4.91762 14.4257 4.91762 14.7542 5.24616C15.0827 5.57391 15.0827 6.10671 14.7542 6.43442L11.1711 10.0175L14.7042 13.5506C15.0302 13.8758 15.0302 14.4037 14.7042 14.7297C14.379 15.0558 13.8511 15.0558 13.5251 14.7297L9.99199 11.1966L6.43466 14.7539C6.10696 15.0817 5.57493 15.0817 5.2464 14.7539C4.91787 14.4262 4.91787 13.8942 5.2464 13.5656L8.80368 10.0084L5.27056 6.47527C4.94451 6.1501 4.94451 5.62226 5.27056 5.29621C5.59573 4.97016 6.12357 4.97016 6.44962 5.29621L9.98275 8.8293L13.5659 5.24616Z"
  })));
};

const baseLayoutClasses = `@pn fixed @it inset-0 @pre pointer-events-auto @zi z-10 @bdc bg-black @bdo bg-opacity-60`;
const baseContainerClasses = `@pre pointer-events-none @dy flex @pn fixed @ow overflow-hidden @it bottom-0 inset-0 @pg px-5 py-10 @ani items-center @jyc justify-center`;
const layoutTransitionProps = {
  enter: `ease-out duration-300`,
  enterFrom: `opacity-0`,
  enterTo: `opacity-100`,
  leave: `ease-in duration-200`,
  leaveFrom: `opacity-100`,
  leaveTo: `opacity-0`
};
const contentTransitionProps$1 = {
  enter: `ease-out duration-300`,
  enterFrom: `opacity-0 translate-y-4 sm:translate-y-0 sm:scale -95`,
  enterTo: `opacity-100 translate-y-0 sm:scale-100`,
  leave: `ease-in duration-300`,
  leaveFrom: `opacity-100 translate-y-0 sm:scale-100`,
  leaveTo: `opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95`
};

const TransitionComponent = ({
  children,
  show,
  transitionProps
}) => /*#__PURE__*/React__default["default"].createElement(transitionComponent.Transition, _extends$3({
  show: show
}, transitionProps), children);

const PlainDiv = ({
  children,
  show,
  transitionProps,
  baseClasses,
  changePopup = () => {},
  id
}) => /*#__PURE__*/React__default["default"].createElement("div", {
  id: id,
  onClick: e => e.target.id === id ? changePopup(false) : null,
  className: `${baseClasses} ${show ? transitionProps.enterTo : transitionProps.leaveTo}`
}, children);

const ModalPortal$1 = ({
  targetId = `modal`,
  ...props
}) => {
  return document.querySelector(`#${targetId}`) ? /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(ModalComponent$1, props), document.querySelector(`#${targetId}`)) : null;
};

const ModalArray = ({
  showEffect = () => {},
  ArrayItem,
  array,
  getRenderCardProps,
  ...props
}) => {
  const [show, setShow] = React.useState(false);
  const [currentItem, setCurrentItem] = React.useState(0);
  const modalComponentId = React.useMemo(() => {
    if (props.modalComponentId) {
      return props.modalComponentId;
    }

    const name = props.RenderCard.name;

    if (!name || name === `anonymous`) {
      return `component${Math.round(Math.random() * 10e5)}`;
    }

    return name;
  }, []);
  React.useEffect(() => {
    showEffect({
      show,
      setShow
    });
  }, [ArrayItem ? show : props.show, props]);

  const showCurrentItem = index => {
    setCurrentItem(index);
    setShow(true);
  };

  const renderCardProps = getRenderCardProps(array[currentItem], currentItem);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ModalPortal$1, _extends$3({
    modalComponentId: modalComponentId,
    renderCardProps: renderCardProps,
    setShow: setShow,
    show: show
  }, props)), array.map((item, index) => /*#__PURE__*/React__default["default"].createElement(ArrayItem, {
    key: index,
    item: item,
    index: index,
    showCurrentItem: showCurrentItem
  })));
};

let updateQueue = makeQueue();

const raf = fn => schedule(fn, updateQueue);

let writeQueue = makeQueue();

raf.write = fn => schedule(fn, writeQueue);

let onStartQueue = makeQueue();

raf.onStart = fn => schedule(fn, onStartQueue);

let onFrameQueue = makeQueue();

raf.onFrame = fn => schedule(fn, onFrameQueue);

let onFinishQueue = makeQueue();

raf.onFinish = fn => schedule(fn, onFinishQueue);

let timeouts = [];

raf.setTimeout = (handler, ms) => {
  let time = raf.now() + ms;

  let cancel = () => {
    let i = timeouts.findIndex(t => t.cancel == cancel);
    if (~i) timeouts.splice(i, 1);
    pendingCount -= ~i ? 1 : 0;
  };

  let timeout = {
    time,
    handler,
    cancel
  };
  timeouts.splice(findTimeout(time), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};

let findTimeout = time => ~(~timeouts.findIndex(t => t.time > time) || ~timeouts.length);

raf.cancel = fn => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  onFinishQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
};

raf.sync = fn => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};

raf.throttle = fn => {
  let lastArgs;

  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }

  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }

  throttled.handler = fn;

  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };

  return throttled;
};

let nativeRaf = typeof window != 'undefined' ? window.requestAnimationFrame : () => {};

raf.use = impl => nativeRaf = impl;

raf.now = typeof performance != 'undefined' ? () => performance.now() : Date.now;

raf.batchedUpdates = fn => fn();

raf.catch = console.error;
raf.frameLoop = 'always';

raf.advance = () => {
  if (raf.frameLoop !== 'demand') {
    console.warn('Cannot call the manual advancement of rafz whilst frameLoop is not set as demand');
  } else {
    update();
  }
};

let ts = -1;
let pendingCount = 0;
let sync = false;

function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}

function start() {
  if (ts < 0) {
    ts = 0;

    if (raf.frameLoop !== 'demand') {
      nativeRaf(loop);
    }
  }
}

function stop() {
  ts = -1;
}

function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}

function update() {
  let prevTs = ts;
  ts = raf.now();
  let count = findTimeout(ts);

  if (count) {
    eachSafely(timeouts.splice(0, count), t => t.handler());
    pendingCount -= count;
  }

  if (!pendingCount) {
    stop();
    return;
  }

  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
}

function makeQueue() {
  let next = new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },

    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },

    flush(arg) {
      if (current.size) {
        next = new Set();
        pendingCount -= current.size;
        eachSafely(current, fn => fn(arg) && next.add(fn));
        pendingCount += next.size;
        current = next;
      }
    }

  };
}

function eachSafely(values, each) {
  values.forEach(value => {
    try {
      each(value);
    } catch (e) {
      raf.catch(e);
    }
  });
}

function noop() {}

const defineHidden = (obj, key, value) => Object.defineProperty(obj, key, {
  value,
  writable: true,
  configurable: true
});

const is = {
  arr: Array.isArray,
  obj: a => !!a && a.constructor.name === 'Object',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === undefined
};

function isEqual(a, b) {
  if (is.arr(a)) {
    if (!is.arr(b) || a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }

    return true;
  }

  return a === b;
}

const each = (obj, fn) => obj.forEach(fn);

function eachProp(obj, fn, ctx) {
  if (is.arr(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx, obj[i], `${i}`);
    }

    return;
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx, obj[key], key);
    }
  }
}

const toArray = a => is.und(a) ? [] : is.arr(a) ? a : [a];

function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}

const flushCalls = (queue, ...args) => flush(queue, fn => fn(...args));

const isSSR = () => typeof window === 'undefined' || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

let createStringInterpolator$1;
let to;
let colors$1 = null;
let skipAnimation = false;
let willAdvance = noop;

const assign = globals => {
  if (globals.to) to = globals.to;
  if (globals.now) raf.now = globals.now;
  if (globals.colors !== undefined) colors$1 = globals.colors;
  if (globals.skipAnimation != null) skipAnimation = globals.skipAnimation;
  if (globals.createStringInterpolator) createStringInterpolator$1 = globals.createStringInterpolator;
  if (globals.requestAnimationFrame) raf.use(globals.requestAnimationFrame);
  if (globals.batchedUpdates) raf.batchedUpdates = globals.batchedUpdates;
  if (globals.willAdvance) willAdvance = globals.willAdvance;
  if (globals.frameLoop) raf.frameLoop = globals.frameLoop;
};

var globals = /*#__PURE__*/Object.freeze({
  __proto__: null,

  get createStringInterpolator() {
    return createStringInterpolator$1;
  },

  get to() {
    return to;
  },

  get colors() {
    return colors$1;
  },

  get skipAnimation() {
    return skipAnimation;
  },

  get willAdvance() {
    return willAdvance;
  },

  assign: assign
});
const startQueue = new Set();
let currentFrame = [];
let prevFrame = [];
let priority = 0;
const frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },

  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      raf(advance);
    }
  },

  advance,

  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);

      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },

  clear() {
    currentFrame = [];
    startQueue.clear();
  }

};

function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  raf(advance);
}

function startSafely(animation) {
  if (!currentFrame.includes(animation)) startUnsafely(animation);
}

function startUnsafely(animation) {
  currentFrame.splice(findIndex(currentFrame, other => other.priority > animation.priority), 0, animation);
}

function advance(dt) {
  const nextFrame = prevFrame;

  for (let i = 0; i < currentFrame.length; i++) {
    const animation = currentFrame[i];
    priority = animation.priority;

    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);

      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }

  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}

function findIndex(arr, test) {
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
}

const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call(...parts) {
  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  }

  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;

  if (colors$1 && colors$1[color] !== undefined) {
    return colors$1[color];
  }

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 0x000000ff) >>> 0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + 'ff', 16) >>> 0;
  }

  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 0x000000ff) >>> 0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }

  if (is.arr(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (is.str(range.output[0])) {
    return createStringInterpolator$1(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
};

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
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

  return _extends$2.apply(this, arguments);
}

const $get = Symbol.for('FluidValue.get');
const $observers = Symbol.for('FluidValue.observers');

const hasFluidValue = arg => Boolean(arg && arg[$get]);

const getFluidValue = arg => arg && arg[$get] ? arg[$get]() : arg;

const getFluidObservers = target => target[$observers] || null;

function callFluidObserver(observer, event) {
  if (observer.eventObserved) {
    observer.eventObserved(event);
  } else {
    observer(event);
  }
}

function callFluidObservers(target, event) {
  let observers = target[$observers];

  if (observers) {
    observers.forEach(observer => {
      callFluidObserver(observer, event);
    });
  }
}

class FluidValue {
  constructor(get) {
    this[$get] = void 0;
    this[$observers] = void 0;

    if (!get && !(get = this.get)) {
      throw Error('Unknown getter');
    }

    setFluidGetter(this, get);
  }

}

const setFluidGetter = (target, get) => setHidden(target, $get, get);

function addFluidObserver(target, observer) {
  if (target[$get]) {
    let observers = target[$observers];

    if (!observers) {
      setHidden(target, $observers, observers = new Set());
    }

    if (!observers.has(observer)) {
      observers.add(observer);

      if (target.observerAdded) {
        target.observerAdded(observers.size, observer);
      }
    }
  }

  return observer;
}

function removeFluidObserver(target, observer) {
  let observers = target[$observers];

  if (observers && observers.has(observer)) {
    const count = observers.size - 1;

    if (count) {
      observers.delete(observer);
    } else {
      target[$observers] = null;
    }

    if (target.observerRemoved) {
      target.observerRemoved(count, observer);
    }
  }
}

const setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});

const numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
const unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, 'i');
const rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
const cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

const variableToRgba = input => {
  const [token, fallback] = parseCSSVariable(input);

  if (!token || isSSR()) {
    return input;
  }

  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);

  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith('--')) {
    const _value = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);

    if (_value) {
      return _value;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }

  return input;
};

const parseCSSVariable = current => {
  const match = cssVariableRegex.exec(current);
  if (!match) return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};

let namedColorRegex;

const rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;

const createStringInterpolator = config => {
  if (!namedColorRegex) namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join('|')})(?!\\w)`, 'g') : /^\b$/;
  const output = config.output.map(value => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map(value => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map((_, i) => keyframes.map(values => {
    if (!(i in values)) {
      throw Error('The arity of each "output" value must be equal');
    }

    return values[i];
  }));
  const interpolators = outputRanges.map(output => createInterpolator(_extends$2({}, config, {
    output
  })));
  return input => {
    var _output$find;

    const missingUnit = !unitRegex.test(output[0]) && ((_output$find = output.find(value => unitRegex.test(value))) == null ? void 0 : _output$find.replace(numberRegex, ''));
    let i = 0;
    return output[0].replace(numberRegex, () => `${interpolators[i++](input)}${missingUnit || ''}`).replace(rgbaRegex, rgbaRound);
  };
};

const prefix$1 = 'react-spring: ';

const once = fn => {
  const func = fn;
  let called = false;

  if (typeof func != 'function') {
    throw new TypeError(`${prefix$1}once requires a function parameter`);
  }

  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};

const warnInterpolate = once(console.warn);

function deprecateInterpolate() {
  warnInterpolate(`${prefix$1}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}

const warnDirectCall = once(console.warn);

function deprecateDirectCall() {
  warnDirectCall(`${prefix$1}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}

function isAnimatedString(value) {
  return is.str(value) && (value[0] == '#' || /\d/.test(value) || !isSSR() && cssVariableRegex.test(value) || value in (colors$1 || {}));
}

const useIsomorphicLayoutEffect = isSSR() ? React.useEffect : React.useLayoutEffect;

const useIsMounted = () => {
  const isMounted = React.useRef(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

function useForceUpdate() {
  const update = React.useState()[1];
  const isMounted = useIsMounted();
  return () => {
    if (isMounted.current) {
      update(Math.random());
    }
  };
}

function useMemoOne(getResult, inputs) {
  const [initial] = React.useState(() => ({
    inputs,
    result: getResult()
  }));
  const committed = React.useRef();
  const prevCache = committed.current;
  let cache = prevCache;

  if (cache) {
    const useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));

    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }

  React.useEffect(() => {
    committed.current = cache;

    if (prevCache == initial) {
      initial.inputs = initial.result = undefined;
    }
  }, [cache]);
  return cache.result;
}

function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }

  for (let i = 0; i < next.length; i++) {
    if (next[i] !== prev[i]) {
      return false;
    }
  }

  return true;
}

const useOnce = effect => React.useEffect(effect, emptyDeps);

const emptyDeps = [];

function usePrev(value) {
  const prevRef = React.useRef();
  React.useEffect(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}

const $node = Symbol.for('Animated:node');

const isAnimated = value => !!value && value[$node] === value;

const getAnimated = owner => owner && owner[$node];

const setAnimated = (owner, node) => defineHidden(owner, $node, node);

const getPayload = owner => owner && owner[$node] && owner[$node].getPayload();

class Animated {
  constructor() {
    this.payload = void 0;
    setAnimated(this, this);
  }

  getPayload() {
    return this.payload || [];
  }

}

class AnimatedValue extends Animated {
  constructor(_value) {
    super();
    this.done = true;
    this.elapsedTime = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.v0 = void 0;
    this.durationProgress = 0;
    this._value = _value;

    if (is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }

  static create(value) {
    return new AnimatedValue(value);
  }

  getPayload() {
    return [this];
  }

  getValue() {
    return this._value;
  }

  setValue(value, step) {
    if (is.num(value)) {
      this.lastPosition = value;

      if (step) {
        value = Math.round(value / step) * step;

        if (this.done) {
          this.lastPosition = value;
        }
      }
    }

    if (this._value === value) {
      return false;
    }

    this._value = value;
    return true;
  }

  reset() {
    const {
      done
    } = this;
    this.done = false;

    if (is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done) this.lastVelocity = null;
      this.v0 = null;
    }
  }

}

class AnimatedString extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = void 0;
    this._toString = createInterpolator({
      output: [value, value]
    });
  }

  static create(value) {
    return new AnimatedString(value);
  }

  getValue() {
    let value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }

  setValue(value) {
    if (is.str(value)) {
      if (value == this._string) {
        return false;
      }

      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }

    return true;
  }

  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal]
      });
    }

    this._value = 0;
    super.reset();
  }

}

const TreeContext = {
  dependencies: null
};

class AnimatedObject extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }

  getValue(animated) {
    const values = {};
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated);
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source);
      } else if (!animated) {
        values[key] = source;
      }
    });
    return values;
  }

  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }

  reset() {
    if (this.payload) {
      each(this.payload, node => node.reset());
    }
  }

  _makePayload(source) {
    if (source) {
      const payload = new Set();
      eachProp(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }

  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source);
    }

    const payload = getPayload(source);

    if (payload) {
      each(payload, node => this.add(node));
    }
  }

}

class AnimatedArray extends AnimatedObject {
  constructor(source) {
    super(source);
  }

  static create(source) {
    return new AnimatedArray(source);
  }

  getValue() {
    return this.source.map(node => node.getValue());
  }

  setValue(source) {
    const payload = this.getPayload();

    if (source.length == payload.length) {
      return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
    }

    super.setValue(source.map(makeAnimated));
    return true;
  }

}

function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}

function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

const withAnimated = (Component, host) => {
  const hasInstance = !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent;
  return React.forwardRef((givenProps, givenRef) => {
    const instanceRef = React.useRef(null);
    const ref = hasInstance && React.useCallback(value => {
      instanceRef.current = updateRef(givenRef, value);
    }, [givenRef]);
    const [props, deps] = getAnimatedState(givenProps, host);
    const forceUpdate = useForceUpdate();

    const callback = () => {
      const instance = instanceRef.current;

      if (hasInstance && !instance) {
        return;
      }

      const didUpdate = instance ? host.applyAnimatedValues(instance, props.getValue(true)) : false;

      if (didUpdate === false) {
        forceUpdate();
      }
    };

    const observer = new PropsObserver(callback, deps);
    const observerRef = React.useRef();
    useIsomorphicLayoutEffect(() => {
      observerRef.current = observer;
      each(deps, dep => addFluidObserver(dep, observer));
      return () => {
        if (observerRef.current) {
          each(observerRef.current.deps, dep => removeFluidObserver(dep, observerRef.current));
          raf.cancel(observerRef.current.update);
        }
      };
    });
    React.useEffect(callback, []);
    useOnce(() => () => {
      const observer = observerRef.current;
      each(observer.deps, dep => removeFluidObserver(dep, observer));
    });
    const usedProps = host.getComponentProps(props.getValue());
    return React__namespace.createElement(Component, _extends$1({}, usedProps, {
      ref: ref
    }));
  });
};

class PropsObserver {
  constructor(update, deps) {
    this.update = update;
    this.deps = deps;
  }

  eventObserved(event) {
    if (event.type == 'change') {
      raf.write(this.update);
    }
  }

}

function getAnimatedState(props, host) {
  const dependencies = new Set();
  TreeContext.dependencies = dependencies;
  if (props.style) props = _extends$1({}, props, {
    style: host.createAnimatedStyle(props.style)
  });
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}

function updateRef(ref, value) {
  if (ref) {
    if (is.fun(ref)) ref(value);else ref.current = value;
  }

  return value;
}

const cacheKey = Symbol.for('AnimatedComponent');

const createHost = (components, {
  applyAnimatedValues: _applyAnimatedValues = () => false,
  createAnimatedStyle: _createAnimatedStyle = style => new AnimatedObject(style),
  getComponentProps: _getComponentProps = props => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: _applyAnimatedValues,
    createAnimatedStyle: _createAnimatedStyle,
    getComponentProps: _getComponentProps
  };

  const animated = Component => {
    const displayName = getDisplayName(Component) || 'Anonymous';

    if (is.str(Component)) {
      Component = animated[Component] || (animated[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }

    Component.displayName = `Animated(${displayName})`;
    return Component;
  };

  eachProp(components, (Component, key) => {
    if (is.arr(components)) {
      key = getDisplayName(Component);
    }

    animated[key] = animated(Component);
  });
  return {
    animated
  };
};

const getDisplayName = arg => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;

function _extends() {
  _extends = Object.assign || function (target) {
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

function callProp(value, ...args) {
  return is.fun(value) ? value(...args) : value;
}

const matchProp = (value, key) => value === true || !!(key && value && (is.fun(value) ? value(key) : toArray(value).includes(key)));

const resolveProp = (prop, key) => is.obj(prop) ? key && prop[key] : prop;

const getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : undefined;

const noopTransform = value => value;

const getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;

  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }

  const defaults = {};

  for (const key of keys) {
    const value = transform(props[key], key);

    if (!is.und(value)) {
      defaults[key] = value;
    }
  }

  return defaults;
};

const DEFAULT_PROPS = ['config', 'onProps', 'onStart', 'onChange', 'onPause', 'onResume', 'onRest'];
const RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};

function getForwardProps(props) {
  const forward = {};
  let count = 0;
  eachProp(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });

  if (count) {
    return forward;
  }
}

function inferTo(props) {
  const to = getForwardProps(props);

  if (to) {
    const out = {
      to
    };
    eachProp(props, (val, key) => key in to || (out[key] = val));
    return out;
  }

  return _extends({}, props);
}

function computeGoal(value) {
  value = getFluidValue(value);
  return is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}

function hasProps(props) {
  for (const _ in props) return true;

  return false;
}

function isAsyncTo(to) {
  return is.fun(to) || is.arr(to) && is.obj(to[0]);
}

function detachRefs(ctrl, ref) {
  var _ctrl$ref;

  (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref.delete(ctrl);
  ref == null ? void 0 : ref.delete(ctrl);
}

function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    var _ctrl$ref2;

    (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};
const c1 = 1.70158;
const c2 = c1 * 1.525;
const c3 = c1 + 1;
const c4 = 2 * Math.PI / 3;
const c5 = 2 * Math.PI / 4.5;

const bounceOut = x => {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
};

const easings = {
  linear: x => x,
  easeInQuad: x => x * x,
  easeOutQuad: x => 1 - (1 - x) * (1 - x),
  easeInOutQuad: x => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
  easeInCubic: x => x * x * x,
  easeOutCubic: x => 1 - Math.pow(1 - x, 3),
  easeInOutCubic: x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  easeInQuart: x => x * x * x * x,
  easeOutQuart: x => 1 - Math.pow(1 - x, 4),
  easeInOutQuart: x => x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
  easeInQuint: x => x * x * x * x * x,
  easeOutQuint: x => 1 - Math.pow(1 - x, 5),
  easeInOutQuint: x => x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2,
  easeInSine: x => 1 - Math.cos(x * Math.PI / 2),
  easeOutSine: x => Math.sin(x * Math.PI / 2),
  easeInOutSine: x => -(Math.cos(Math.PI * x) - 1) / 2,
  easeInExpo: x => x === 0 ? 0 : Math.pow(2, 10 * x - 10),
  easeOutExpo: x => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
  easeInOutExpo: x => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2,
  easeInCirc: x => 1 - Math.sqrt(1 - Math.pow(x, 2)),
  easeOutCirc: x => Math.sqrt(1 - Math.pow(x - 1, 2)),
  easeInOutCirc: x => x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
  easeInBack: x => c3 * x * x * x - c1 * x * x,
  easeOutBack: x => 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2),
  easeInOutBack: x => x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2,
  easeInElastic: x => x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4),
  easeOutElastic: x => x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1,
  easeInOutElastic: x => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1,
  easeInBounce: x => 1 - bounceOut(1 - x),
  easeOutBounce: bounceOut,
  easeInOutBounce: x => x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
};

const defaults = _extends({}, config.default, {
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
});

class AnimationConfig {
  constructor() {
    this.tension = void 0;
    this.friction = void 0;
    this.frequency = void 0;
    this.damping = void 0;
    this.mass = void 0;
    this.velocity = 0;
    this.restVelocity = void 0;
    this.precision = void 0;
    this.progress = void 0;
    this.duration = void 0;
    this.easing = void 0;
    this.clamp = void 0;
    this.bounce = void 0;
    this.decay = void 0;
    this.round = void 0;
    Object.assign(this, defaults);
  }

}

function mergeConfig(config, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = _extends({}, defaultConfig);
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = _extends({}, defaultConfig, newConfig);
  }

  sanitizeConfig(config, newConfig);
  Object.assign(config, newConfig);

  for (const key in defaults) {
    if (config[key] == null) {
      config[key] = defaults[key];
    }
  }

  let {
    mass,
    frequency,
    damping
  } = config;

  if (!is.und(frequency)) {
    if (frequency < 0.01) frequency = 0.01;
    if (damping < 0) damping = 0;
    config.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config.friction = 4 * Math.PI * damping * mass / frequency;
  }

  return config;
}

function sanitizeConfig(config, props) {
  if (!is.und(props.decay)) {
    config.duration = undefined;
  } else {
    const isTensionConfig = !is.und(props.tension) || !is.und(props.friction);

    if (isTensionConfig || !is.und(props.frequency) || !is.und(props.damping) || !is.und(props.mass)) {
      config.duration = undefined;
      config.decay = undefined;
    }

    if (isTensionConfig) {
      config.frequency = undefined;
    }
  }
}

const emptyArray = [];

class Animation {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.to = void 0;
    this.from = void 0;
    this.config = new AnimationConfig();
    this.immediate = false;
  }

}

function scheduleProps(callId, {
  key,
  props,
  defaultProps,
  state,
  actions
}) {
  return new Promise((resolve, reject) => {
    var _props$cancel;

    let delay;
    let timeout;
    let cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);

    if (cancel) {
      onStart();
    } else {
      if (!is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }

      let pause = defaultProps == null ? void 0 : defaultProps.pause;

      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }

      delay = callProp(props.delay || 0, key);

      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }

    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - raf.now();
    }

    function onResume() {
      if (delay > 0 && !globals.skipAnimation) {
        state.delayed = true;
        timeout = raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }

    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }

      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);

      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }

      try {
        actions.start(_extends({}, props, {
          callId,
          cancel
        }), resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}

const getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some(result => result.cancelled) ? getCancelledResult(target.get()) : results.every(result => result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every(result => result.finished));

const getNoopResult = value => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});

const getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});

const getCancelledResult = value => ({
  value,
  cancelled: true,
  finished: false
});

function runAsync(to, props, state, target) {
  const {
    callId,
    parentId,
    onRest
  } = props;
  const {
    asyncTo: prevTo,
    promise: prevPromise
  } = state;

  if (!parentId && to === prevTo && !props.reset) {
    return prevPromise;
  }

  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to;
    const defaultProps = getDefaultProps(props, (value, key) => key === 'onRest' ? undefined : value);
    let preventBail;
    let bail;
    const bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject));

    const bailIfEnded = bailSignal => {
      const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);

      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };

    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAniamtionSignal();
      return (async () => {
        if (globals.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }

        bailIfEnded(bailSignal);
        const props = is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
          to: arg1
        });
        props.parentId = callId;
        eachProp(defaultProps, (value, key) => {
          if (is.und(props[key])) {
            props[key] = value;
          }
        });
        const result = await target.start(props);
        bailIfEnded(bailSignal);

        if (state.paused) {
          await new Promise(resume => {
            state.resumeQueue.add(resume);
          });
        }

        return result;
      })();
    };

    let result;

    if (globals.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }

    try {
      let animating;

      if (is.arr(to)) {
        animating = (async queue => {
          for (const props of queue) {
            await animate(props);
          }
        })(to);
      } else {
        animating = Promise.resolve(to(animate, target.stop.bind(target)));
      }

      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAniamtionSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : undefined;
        state.promise = parentId ? prevPromise : undefined;
      }
    }

    if (is.fun(onRest)) {
      raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }

    return result;
  })();
}

function stopAsync(state, cancelId) {
  flush(state.timeouts, t => t.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = undefined;
  if (cancelId) state.cancelId = cancelId;
}

class BailSignal extends Error {
  constructor() {
    super('An async animation has been interrupted. You see this error because you ' + 'forgot to use `await` or `.catch(...)` on its returned promise.');
    this.result = void 0;
  }

}

class SkipAniamtionSignal extends Error {
  constructor() {
    super('SkipAnimationSignal');
    this.result = void 0;
  }

}

const isFrameValue = value => value instanceof FrameValue;

let nextId$1 = 1;

class FrameValue extends FluidValue {
  constructor(...args) {
    super(...args);
    this.id = nextId$1++;
    this.key = void 0;
    this._priority = 0;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    if (this._priority != priority) {
      this._priority = priority;

      this._onPriorityChange(priority);
    }
  }

  get() {
    const node = getAnimated(this);
    return node && node.getValue();
  }

  to(...args) {
    return globals.to(this, args);
  }

  interpolate(...args) {
    deprecateInterpolate();
    return globals.to(this, args);
  }

  toJSON() {
    return this.get();
  }

  observerAdded(count) {
    if (count == 1) this._attach();
  }

  observerRemoved(count) {
    if (count == 0) this._detach();
  }

  _attach() {}

  _detach() {}

  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: 'change',
      parent: this,
      value,
      idle
    });
  }

  _onPriorityChange(priority) {
    if (!this.idle) {
      frameLoop.sort(this);
    }

    callFluidObservers(this, {
      type: 'priority',
      parent: this,
      priority
    });
  }

}

const $P = Symbol.for('SpringPhase');
const HAS_ANIMATED = 1;
const IS_ANIMATING = 2;
const IS_PAUSED = 4;

const hasAnimated = target => (target[$P] & HAS_ANIMATED) > 0;

const isAnimating = target => (target[$P] & IS_ANIMATING) > 0;

const isPaused = target => (target[$P] & IS_PAUSED) > 0;

const setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;

const setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;

class SpringValue extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.key = void 0;
    this.animation = new Animation();
    this.queue = void 0;
    this.defaultProps = {};
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._pendingCalls = new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;

    if (!is.und(arg1) || !is.und(arg2)) {
      const props = is.obj(arg1) ? _extends({}, arg1) : _extends({}, arg2, {
        from: arg1
      });

      if (is.und(props.default)) {
        props.default = true;
      }

      this.start(props);
    }
  }

  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }

  get goal() {
    return getFluidValue(this.animation.to);
  }

  get velocity() {
    const node = getAnimated(this);
    return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map(node => node.lastVelocity || 0);
  }

  get hasAnimated() {
    return hasAnimated(this);
  }

  get isAnimating() {
    return isAnimating(this);
  }

  get isPaused() {
    return isPaused(this);
  }

  get isDelayed() {
    return this._state.delayed;
  }

  advance(dt) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let {
      config,
      toValues
    } = anim;
    const payload = getPayload(anim.to);

    if (!payload && hasFluidValue(anim.to)) {
      toValues = toArray(getFluidValue(anim.to));
    }

    anim.values.forEach((node, i) => {
      if (node.done) return;
      const to = node.constructor == AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i];
      let finished = anim.immediate;
      let position = to;

      if (!finished) {
        position = node.lastPosition;

        if (config.tension <= 0) {
          node.done = true;
          return;
        }

        let elapsed = node.elapsedTime += dt;
        const from = anim.fromValues[i];
        const v0 = node.v0 != null ? node.v0 : node.v0 = is.arr(config.velocity) ? config.velocity[i] : config.velocity;
        let velocity;

        if (!is.und(config.duration)) {
          let p = 1;

          if (config.duration > 0) {
            if (this._memoizedDuration !== config.duration) {
              this._memoizedDuration = config.duration;

              if (node.durationProgress > 0) {
                node.elapsedTime = config.duration * node.durationProgress;
                elapsed = node.elapsedTime += dt;
              }
            }

            p = (config.progress || 0) + elapsed / this._memoizedDuration;
            p = p > 1 ? 1 : p < 0 ? 0 : p;
            node.durationProgress = p;
          }

          position = from + config.easing(p) * (to - from);
          velocity = (position - node.lastPosition) / dt;
          finished = p == 1;
        } else if (config.decay) {
          const decay = config.decay === true ? 0.998 : config.decay;
          const e = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e);
          finished = Math.abs(node.lastPosition - position) < 0.1;
          velocity = v0 * e;
        } else {
          velocity = node.lastVelocity == null ? v0 : node.lastVelocity;
          const precision = config.precision || (from == to ? 0.005 : Math.min(1, Math.abs(to - from) * 0.001));
          const restVelocity = config.restVelocity || precision / 10;
          const bounceFactor = config.clamp ? 0 : config.bounce;
          const canBounce = !is.und(bounceFactor);
          const isGrowing = from == to ? node.v0 > 0 : from < to;
          let isMoving;
          let isBouncing = false;
          const step = 1;
          const numSteps = Math.ceil(dt / step);

          for (let n = 0; n < numSteps; ++n) {
            isMoving = Math.abs(velocity) > restVelocity;

            if (!isMoving) {
              finished = Math.abs(to - position) <= precision;

              if (finished) {
                break;
              }
            }

            if (canBounce) {
              isBouncing = position == to || position > to == isGrowing;

              if (isBouncing) {
                velocity = -velocity * bounceFactor;
                position = to;
              }
            }

            const springForce = -config.tension * 0.000001 * (position - to);
            const dampingForce = -config.friction * 0.001 * velocity;
            const acceleration = (springForce + dampingForce) / config.mass;
            velocity = velocity + acceleration * step;
            position = position + velocity * step;
          }
        }

        node.lastVelocity = velocity;

        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }

      if (payload && !payload[i].done) {
        finished = false;
      }

      if (finished) {
        node.done = true;
      } else {
        idle = false;
      }

      if (node.setValue(position, config.round)) {
        changed = true;
      }
    });
    const node = getAnimated(this);
    const currVal = node.getValue();

    if (idle) {
      const finalVal = getFluidValue(anim.to);

      if ((currVal !== finalVal || changed) && !config.decay) {
        node.setValue(finalVal);

        this._onChange(finalVal);
      } else if (changed && config.decay) {
        this._onChange(currVal);
      }

      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }

  set(value) {
    raf.batchedUpdates(() => {
      this._stop();

      this._focus(value);

      this._set(value);
    });
    return this;
  }

  pause() {
    this._update({
      pause: true
    });
  }

  resume() {
    this._update({
      pause: false
    });
  }

  finish() {
    if (isAnimating(this)) {
      const {
        to,
        config
      } = this.animation;
      raf.batchedUpdates(() => {
        this._onStart();

        if (!config.decay) {
          this._set(to, false);
        }

        this._stop();
      });
    }

    return this;
  }

  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }

  start(to, arg2) {
    let queue;

    if (!is.und(to)) {
      queue = [is.obj(to) ? to : _extends({}, arg2, {
        to
      })];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }

    return Promise.all(queue.map(props => {
      const up = this._update(props);

      return up;
    })).then(results => getCombinedResult(this, results));
  }

  stop(cancel) {
    const {
      to
    } = this.animation;

    this._focus(this.get());

    stopAsync(this._state, cancel && this._lastCallId);
    raf.batchedUpdates(() => this._stop(to, cancel));
    return this;
  }

  reset() {
    this._update({
      reset: true
    });
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._start();
    } else if (event.type == 'priority') {
      this.priority = event.priority + 1;
    }
  }

  _prepareNode(props) {
    const key = this.key || '';
    let {
      to,
      from
    } = props;
    to = is.obj(to) ? to[key] : to;

    if (to == null || isAsyncTo(to)) {
      to = undefined;
    }

    from = is.obj(from) ? from[key] : from;

    if (from == null) {
      from = undefined;
    }

    const range = {
      to,
      from
    };

    if (!hasAnimated(this)) {
      if (props.reverse) [to, from] = [from, to];
      from = getFluidValue(from);

      if (!is.und(from)) {
        this._set(from);
      } else if (!getAnimated(this)) {
        this._set(to);
      }
    }

    return range;
  }

  _update(_ref, isLoop) {
    let props = _extends({}, _ref);

    const {
      key,
      defaultProps
    } = this;
    if (props.default) Object.assign(defaultProps, getDefaultProps(props, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value));
    mergeActiveFn(this, props, 'onProps');
    sendEvent(this, 'onProps', props, this);

    const range = this._prepareNode(props);

    if (Object.isFrozen(this)) {
      throw Error('Cannot animate a `SpringValue` object that is frozen. ' + 'Did you forget to pass your component to `animated(...)` before animating its props?');
    }

    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            flushCalls(state.pauseQueue);
            sendEvent(this, 'onPause', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);

            if (isAnimating(this)) {
              this._resume();
            }

            flushCalls(state.resumeQueue);
            sendEvent(this, 'onResume', getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then(result => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);

        if (nextProps) {
          return this._update(nextProps, true);
        }
      }

      return result;
    });
  }

  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }

    const hasToProp = !is.und(range.to);
    const hasFromProp = !is.und(range.from);

    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }

    const {
      key,
      defaultProps,
      animation: anim
    } = this;
    const {
      to: prevTo,
      from: prevFrom
    } = anim;
    let {
      to = prevTo,
      from = prevFrom
    } = range;

    if (hasFromProp && !hasToProp && (!props.default || is.und(to))) {
      to = from;
    }

    if (props.reverse) [to, from] = [from, to];
    const hasFromChanged = !isEqual(from, prevFrom);

    if (hasFromChanged) {
      anim.from = from;
    }

    from = getFluidValue(from);
    const hasToChanged = !isEqual(to, prevTo);

    if (hasToChanged) {
      this._focus(to);
    }

    const hasAsyncTo = isAsyncTo(props.to);
    const {
      config
    } = anim;
    const {
      decay,
      velocity
    } = config;

    if (hasToProp || hasFromProp) {
      config.velocity = 0;
    }

    if (props.config && !hasAsyncTo) {
      mergeConfig(config, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
    }

    let node = getAnimated(this);

    if (!node || is.und(to)) {
      return resolve(getFinishedResult(this, true));
    }

    const reset = is.und(props.reset) ? hasFromProp && !props.default : !is.und(from) && matchProp(props.reset, key);
    const value = reset ? from : this.get();
    const goal = computeGoal(to);
    const isAnimatable = is.num(goal) || is.arr(goal) || isAnimatedString(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));

    if (hasToChanged) {
      const nodeType = getAnimatedType(to);

      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
      }
    }

    const goalType = node.constructor;
    let started = hasFluidValue(to);
    let finished = false;

    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;

      if (hasToChanged || hasValueChanged) {
        finished = isEqual(computeGoal(value), goal);
        started = !finished;
      }

      if (!isEqual(anim.immediate, immediate) && !immediate || !isEqual(config.decay, decay) || !isEqual(config.velocity, velocity)) {
        started = true;
      }
    }

    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
        this._stop(prevTo);
      }
    }

    if (!hasAsyncTo) {
      if (started || hasFluidValue(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = hasFluidValue(to) ? null : goalType == AnimatedString ? [1] : toArray(goal);
      }

      if (anim.immediate != immediate) {
        anim.immediate = immediate;

        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }

      if (started) {
        const {
          onRest
        } = anim;
        each(ACTIVE_EVENTS, type => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        flushCalls(this._pendingCalls, result);

        this._pendingCalls.add(resolve);

        if (anim.changed) raf.batchedUpdates(() => {
          anim.changed = !reset;
          onRest == null ? void 0 : onRest(result, this);

          if (reset) {
            callProp(defaultProps.onRest, result);
          } else {
            anim.onStart == null ? void 0 : anim.onStart(result, this);
          }
        });
      }
    }

    if (reset) {
      this._set(value);
    }

    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
      this._start();
    } else if (isAnimating(this) && !hasToChanged) {
      this._pendingCalls.add(resolve);
    } else {
      resolve(getNoopResult(value));
    }
  }

  _focus(value) {
    const anim = this.animation;

    if (value !== anim.to) {
      if (getFluidObservers(this)) {
        this._detach();
      }

      anim.to = value;

      if (getFluidObservers(this)) {
        this._attach();
      }
    }
  }

  _attach() {
    let priority = 0;
    const {
      to
    } = this.animation;

    if (hasFluidValue(to)) {
      addFluidObserver(to, this);

      if (isFrameValue(to)) {
        priority = to.priority + 1;
      }
    }

    this.priority = priority;
  }

  _detach() {
    const {
      to
    } = this.animation;

    if (hasFluidValue(to)) {
      removeFluidObserver(to, this);
    }
  }

  _set(arg, idle = true) {
    const value = getFluidValue(arg);

    if (!is.und(value)) {
      const oldNode = getAnimated(this);

      if (!oldNode || !isEqual(value, oldNode.getValue())) {
        const nodeType = getAnimatedType(value);

        if (!oldNode || oldNode.constructor != nodeType) {
          setAnimated(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }

        if (oldNode) {
          raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }

    return getAnimated(this);
  }

  _onStart() {
    const anim = this.animation;

    if (!anim.changed) {
      anim.changed = true;
      sendEvent(this, 'onStart', getFinishedResult(this, checkFinished(this, anim.to)), this);
    }
  }

  _onChange(value, idle) {
    if (!idle) {
      this._onStart();

      callProp(this.animation.onChange, value, this);
    }

    callProp(this.defaultProps.onChange, value, this);

    super._onChange(value, idle);
  }

  _start() {
    const anim = this.animation;
    getAnimated(this).reset(getFluidValue(anim.to));

    if (!anim.immediate) {
      anim.fromValues = anim.values.map(node => node.lastPosition);
    }

    if (!isAnimating(this)) {
      setActiveBit(this, true);

      if (!isPaused(this)) {
        this._resume();
      }
    }
  }

  _resume() {
    if (globals.skipAnimation) {
      this.finish();
    } else {
      frameLoop.start(this);
    }
  }

  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      each(anim.values, node => {
        node.done = true;
      });

      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = undefined;
      }

      callFluidObservers(this, {
        type: 'idle',
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
      flushCalls(this._pendingCalls, result);

      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, 'onRest', result, this);
      }
    }
  }

}

function checkFinished(target, to) {
  const goal = computeGoal(to);
  const value = computeGoal(target.get());
  return isEqual(value, goal);
}

function createLoopUpdate(props, loop = props.loop, to = props.to) {
  let loopRet = callProp(loop);

  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate(_extends({}, props, {
      loop,
      default: false,
      pause: undefined,
      to: !reverse || isAsyncTo(to) ? to : undefined,
      from: reset ? props.from : undefined,
      reset
    }, overrides));
  }
}

function createUpdate(props) {
  const {
    to,
    from
  } = props = inferTo(props);
  const keys = new Set();
  if (is.obj(to)) findDefined(to, keys);
  if (is.obj(from)) findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}

function declareUpdate(props) {
  const update = createUpdate(props);

  if (is.und(update.default)) {
    update.default = getDefaultProps(update);
  }

  return update;
}

function findDefined(values, keys) {
  eachProp(values, (value, key) => value != null && keys.add(key));
}

const ACTIVE_EVENTS = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];

function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : undefined;
}

function sendEvent(target, type, ...args) {
  var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;

  (_target$animation$typ = (_target$animation = target.animation)[type]) == null ? void 0 : _target$animation$typ.call(_target$animation, ...args);
  (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type]) == null ? void 0 : _target$defaultProps$.call(_target$defaultProps, ...args);
}

const BATCHED_EVENTS = ['onStart', 'onChange', 'onRest'];
let nextId = 1;

class Controller {
  constructor(props, flush) {
    this.id = nextId++;
    this.springs = {};
    this.queue = [];
    this.ref = void 0;
    this._flush = void 0;
    this._initialProps = void 0;
    this._lastAsyncId = 0;
    this._active = new Set();
    this._changed = new Set();
    this._started = false;
    this._item = void 0;
    this._state = {
      paused: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._events = {
      onStart: new Map(),
      onChange: new Map(),
      onRest: new Map()
    };
    this._onFrame = this._onFrame.bind(this);

    if (flush) {
      this._flush = flush;
    }

    if (props) {
      this.start(_extends({
        default: true
      }, props));
    }
  }

  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every(spring => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }

  get item() {
    return this._item;
  }

  set item(item) {
    this._item = item;
  }

  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }

  set(values) {
    for (const key in values) {
      const value = values[key];

      if (!is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }

  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }

    return this;
  }

  start(props) {
    let {
      queue
    } = this;

    if (props) {
      queue = toArray(props).map(createUpdate);
    } else {
      this.queue = [];
    }

    if (this._flush) {
      return this._flush(this, queue);
    }

    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }

  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }

    if (keys) {
      const springs = this.springs;
      each(toArray(keys), key => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each(spring => spring.stop(!!arg));
    }

    return this;
  }

  pause(keys) {
    if (is.und(keys)) {
      this.start({
        pause: true
      });
    } else {
      const springs = this.springs;
      each(toArray(keys), key => springs[key].pause());
    }

    return this;
  }

  resume(keys) {
    if (is.und(keys)) {
      this.start({
        pause: false
      });
    } else {
      const springs = this.springs;
      each(toArray(keys), key => springs[key].resume());
    }

    return this;
  }

  each(iterator) {
    eachProp(this.springs, iterator);
  }

  _onFrame() {
    const {
      onStart,
      onChange,
      onRest
    } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;

    if (active && !this._started || changed && !this._started) {
      this._started = true;
      flush(onStart, ([onStart, result]) => {
        result.value = this.get();
        onStart(result, this, this._item);
      });
    }

    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;

    if (changed && onChange.size) {
      flush(onChange, ([onChange, result]) => {
        result.value = values;
        onChange(result, this, this._item);
      });
    }

    if (idle) {
      this._started = false;
      flush(onRest, ([onRest, result]) => {
        result.value = values;
        onRest(result, this, this._item);
      });
    }
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._changed.add(event.parent);

      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == 'idle') {
      this._active.delete(event.parent);
    } else return;

    raf.onFrame(this._onFrame);
  }

}

function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map(props => flushUpdate(ctrl, props))).then(results => getCombinedResult(ctrl, results));
}

async function flushUpdate(ctrl, props, isLoop) {
  const {
    keys,
    to,
    from,
    loop,
    onRest,
    onResolve
  } = props;
  const defaults = is.obj(props.default) && props.default;

  if (loop) {
    props.loop = false;
  }

  if (to === false) props.to = null;
  if (from === false) props.from = null;
  const asyncTo = is.arr(to) || is.fun(to) ? to : undefined;

  if (asyncTo) {
    props.to = undefined;
    props.onRest = undefined;

    if (defaults) {
      defaults.onRest = undefined;
    }
  } else {
    each(BATCHED_EVENTS, key => {
      const handler = props[key];

      if (is.fun(handler)) {
        const queue = ctrl['_events'][key];

        props[key] = ({
          finished,
          cancelled
        }) => {
          const result = queue.get(handler);

          if (result) {
            if (!finished) result.finished = false;
            if (cancelled) result.cancelled = true;
          } else {
            queue.set(handler, {
              value: null,
              finished: finished || false,
              cancelled: cancelled || false
            });
          }
        };

        if (defaults) {
          defaults[key] = props[key];
        }
      }
    });
  }

  const state = ctrl['_state'];

  if (props.pause === !state.paused) {
    state.paused = props.pause;
    flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
    props.pause = true;
  }

  const promises = (keys || Object.keys(ctrl.springs)).map(key => ctrl.springs[key].start(props));
  const cancel = props.cancel === true || getDefaultProp(props, 'cancel') === true;

  if (asyncTo || cancel && state.asyncId) {
    promises.push(scheduleProps(++ctrl['_lastAsyncId'], {
      props,
      state,
      actions: {
        pause: noop,
        resume: noop,

        start(props, resolve) {
          if (cancel) {
            stopAsync(state, ctrl['_lastAsyncId']);
            resolve(getCancelledResult(ctrl));
          } else {
            props.onRest = onRest;
            resolve(runAsync(asyncTo, props, state, ctrl));
          }
        }

      }
    }));
  }

  if (state.paused) {
    await new Promise(resume => {
      state.resumeQueue.add(resume);
    });
  }

  const result = getCombinedResult(ctrl, await Promise.all(promises));

  if (loop && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop, to);

    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }

  if (onResolve) {
    raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }

  return result;
}

function getSprings(ctrl, props) {
  const springs = _extends({}, ctrl.springs);

  if (props) {
    each(toArray(props), props => {
      if (is.und(props.keys)) {
        props = createUpdate(props);
      }

      if (!is.obj(props.to)) {
        props = _extends({}, props, {
          to: undefined
        });
      }

      prepareSprings(springs, props, key => {
        return createSpring(key);
      });
    });
  }

  setSprings(ctrl, springs);
  return springs;
}

function setSprings(ctrl, springs) {
  eachProp(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      addFluidObserver(spring, ctrl);
    }
  });
}

function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;

  if (observer) {
    addFluidObserver(spring, observer);
  }

  return spring;
}

function prepareSprings(springs, props, create) {
  if (props.keys) {
    each(props.keys, key => {
      const spring = springs[key] || (springs[key] = create(key));
      spring['_prepareNode'](props);
    });
  }
}

function prepareKeys(ctrl, queue) {
  each(queue, props => {
    prepareSprings(ctrl.springs, props, key => {
      return createSpring(key, ctrl);
    });
  });
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
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

const _excluded$3 = ["children"];

const SpringContext = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$3);

  const inherited = React.useContext(ctx);
  const pause = props.pause || !!inherited.pause,
        immediate = props.immediate || !!inherited.immediate;
  props = useMemoOne(() => ({
    pause,
    immediate
  }), [pause, immediate]);
  const {
    Provider
  } = ctx;
  return React__namespace.createElement(Provider, {
    value: props
  }, children);
};

const ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;

function makeContext(target, init) {
  Object.assign(target, React__namespace.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}

const SpringRef = () => {
  const current = [];

  const SpringRef = function SpringRef(props) {
    deprecateDirectCall();
    const results = [];
    each(current, (ctrl, i) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update = _getProps(props, ctrl, i);

        if (update) {
          results.push(ctrl.start(update));
        }
      }
    });
    return results;
  };

  SpringRef.current = current;

  SpringRef.add = function (ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };

  SpringRef.delete = function (ctrl) {
    const i = current.indexOf(ctrl);
    if (~i) current.splice(i, 1);
  };

  SpringRef.pause = function () {
    each(current, ctrl => ctrl.pause(...arguments));
    return this;
  };

  SpringRef.resume = function () {
    each(current, ctrl => ctrl.resume(...arguments));
    return this;
  };

  SpringRef.set = function (values) {
    each(current, ctrl => ctrl.set(values));
  };

  SpringRef.start = function (props) {
    const results = [];
    each(current, (ctrl, i) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update = this._getProps(props, ctrl, i);

        if (update) {
          results.push(ctrl.start(update));
        }
      }
    });
    return results;
  };

  SpringRef.stop = function () {
    each(current, ctrl => ctrl.stop(...arguments));
    return this;
  };

  SpringRef.update = function (props) {
    each(current, (ctrl, i) => ctrl.update(this._getProps(props, ctrl, i)));
    return this;
  };

  const _getProps = function _getProps(arg, ctrl, index) {
    return is.fun(arg) ? arg(index, ctrl) : arg;
  };

  SpringRef._getProps = _getProps;
  return SpringRef;
};

function useSprings(length, props, deps) {
  const propsFn = is.fun(props) && props;
  if (propsFn && !deps) deps = [];
  const ref = React.useMemo(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const layoutId = React.useRef(0);
  const forceUpdate = useForceUpdate();
  const state = React.useMemo(() => ({
    ctrls: [],
    queue: [],

    flush(ctrl, updates) {
      const springs = getSprings(ctrl, updates);
      const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs).some(key => !ctrl.springs[key]);
      return canFlushSync ? flushUpdateQueue(ctrl, updates) : new Promise(resolve => {
        setSprings(ctrl, springs);
        state.queue.push(() => {
          resolve(flushUpdateQueue(ctrl, updates));
        });
        forceUpdate();
      });
    }

  }), []);
  const ctrls = React.useRef([...state.ctrls]);
  const updates = [];
  const prevLength = usePrev(length) || 0;
  React.useMemo(() => {
    each(ctrls.current.slice(length, prevLength), ctrl => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  React.useMemo(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);

  function declareUpdates(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
      const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
      const update = propsFn ? propsFn(i, ctrl) : props[i];

      if (update) {
        updates[i] = declareUpdate(update);
      }
    }
  }

  const springs = ctrls.current.map((ctrl, i) => getSprings(ctrl, updates[i]));
  const context = React.useContext(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const {
      queue
    } = state;

    if (queue.length) {
      state.queue = [];
      each(queue, cb => cb());
    }

    each(ctrls.current, (ctrl, i) => {
      ref == null ? void 0 : ref.add(ctrl);

      if (hasContext) {
        ctrl.start({
          default: context
        });
      }

      const update = updates[i];

      if (update) {
        replaceRef(ctrl, update.ref);

        if (ctrl.ref) {
          ctrl.queue.push(update);
        } else {
          ctrl.start(update);
        }
      }
    });
  });
  useOnce(() => () => {
    each(state.ctrls, ctrl => ctrl.stop(true));
  });
  const values = springs.map(x => _extends({}, x));
  return ref ? [values, ref] : values;
}

function useSpring(props, deps) {
  const isFn = is.fun(props);
  const [[values], ref] = useSprings(1, isFn ? props : [props], isFn ? deps || [] : deps);
  return isFn || arguments.length == 2 ? [values, ref] : values;
}

let TransitionPhase;

(function (TransitionPhase) {
  TransitionPhase["MOUNT"] = "mount";
  TransitionPhase["ENTER"] = "enter";
  TransitionPhase["UPDATE"] = "update";
  TransitionPhase["LEAVE"] = "leave";
})(TransitionPhase || (TransitionPhase = {}));

function useTransition(data, props, deps) {
  const propsFn = is.fun(props) && props;
  const {
    reset,
    sort,
    trail = 0,
    expires = true,
    exitBeforeEnter = false,
    onDestroyed,
    ref: propsRef,
    config: propsConfig
  } = propsFn ? propsFn() : props;
  const ref = React.useMemo(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const items = toArray(data);
  const transitions = [];
  const usedTransitions = React.useRef(null);
  const prevTransitions = reset ? null : usedTransitions.current;
  useIsomorphicLayoutEffect(() => {
    usedTransitions.current = transitions;
  });
  useOnce(() => {
    each(transitions, t => {
      ref == null ? void 0 : ref.add(t.ctrl);
      t.ctrl.ref = ref;
    });
    return () => {
      each(usedTransitions.current, t => {
        if (t.expired) {
          clearTimeout(t.expirationId);
        }

        detachRefs(t.ctrl, ref);
        t.ctrl.stop(true);
      });
    };
  });
  const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  const expired = reset && usedTransitions.current || [];
  useIsomorphicLayoutEffect(() => each(expired, ({
    ctrl,
    item,
    key
  }) => {
    detachRefs(ctrl, ref);
    callProp(onDestroyed, item, key);
  }));
  const reused = [];
  if (prevTransitions) each(prevTransitions, (t, i) => {
    if (t.expired) {
      clearTimeout(t.expirationId);
      expired.push(t);
    } else {
      i = reused[i] = keys.indexOf(t.key);
      if (~i) transitions[i] = t;
    }
  });
  each(items, (item, i) => {
    if (!transitions[i]) {
      transitions[i] = {
        key: keys[i],
        item,
        phase: TransitionPhase.MOUNT,
        ctrl: new Controller()
      };
      transitions[i].ctrl.item = item;
    }
  });

  if (reused.length) {
    let i = -1;
    const {
      leave
    } = propsFn ? propsFn() : props;
    each(reused, (keyIndex, prevIndex) => {
      const t = prevTransitions[prevIndex];

      if (~keyIndex) {
        i = transitions.indexOf(t);
        transitions[i] = _extends({}, t, {
          item: items[keyIndex]
        });
      } else if (leave) {
        transitions.splice(++i, 0, t);
      }
    });
  }

  if (is.fun(sort)) {
    transitions.sort((a, b) => sort(a.item, b.item));
  }

  let delay = -trail;
  const forceUpdate = useForceUpdate();
  const defaultProps = getDefaultProps(props);
  const changes = new Map();
  const exitingTransitions = React.useRef(new Map());
  const forceChange = React.useRef(false);
  each(transitions, (t, i) => {
    const key = t.key;
    const prevPhase = t.phase;
    const p = propsFn ? propsFn() : props;
    let to;
    let phase;
    let propsDelay = callProp(p.delay || 0, key);

    if (prevPhase == TransitionPhase.MOUNT) {
      to = p.enter;
      phase = TransitionPhase.ENTER;
    } else {
      const isLeave = keys.indexOf(key) < 0;

      if (prevPhase != TransitionPhase.LEAVE) {
        if (isLeave) {
          to = p.leave;
          phase = TransitionPhase.LEAVE;
        } else if (to = p.update) {
          phase = TransitionPhase.UPDATE;
        } else return;
      } else if (!isLeave) {
        to = p.enter;
        phase = TransitionPhase.ENTER;
      } else return;
    }

    to = callProp(to, t.item, i);
    to = is.obj(to) ? inferTo(to) : {
      to
    };

    if (!to.config) {
      const config = propsConfig || defaultProps.config;
      to.config = callProp(config, t.item, i, phase);
    }

    delay += trail;

    const payload = _extends({}, defaultProps, {
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p.immediate,
      reset: false
    }, to);

    if (phase == TransitionPhase.ENTER && is.und(payload.from)) {
      const _p = propsFn ? propsFn() : props;

      const from = is.und(_p.initial) || prevTransitions ? _p.from : _p.initial;
      payload.from = callProp(from, t.item, i);
    }

    const {
      onResolve
    } = payload;

    payload.onResolve = result => {
      callProp(onResolve, result);
      const transitions = usedTransitions.current;
      const t = transitions.find(t => t.key === key);
      if (!t) return;

      if (result.cancelled && t.phase != TransitionPhase.UPDATE) {
        return;
      }

      if (t.ctrl.idle) {
        const idle = transitions.every(t => t.ctrl.idle);

        if (t.phase == TransitionPhase.LEAVE) {
          const expiry = callProp(expires, t.item);

          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t.expired = true;

            if (!idle && expiryMs > 0) {
              if (expiryMs <= 0x7fffffff) t.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }

        if (idle && transitions.some(t => t.expired)) {
          exitingTransitions.current.delete(t);

          if (exitBeforeEnter) {
            forceChange.current = true;
          }

          forceUpdate();
        }
      }
    };

    const springs = getSprings(t.ctrl, payload);

    if (phase === TransitionPhase.LEAVE && exitBeforeEnter) {
      exitingTransitions.current.set(t, {
        phase,
        springs,
        payload
      });
    } else {
      changes.set(t, {
        phase,
        springs,
        payload
      });
    }
  });
  const context = React.useContext(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect(() => {
    if (hasContext) {
      each(transitions, t => {
        t.ctrl.start({
          default: context
        });
      });
    }
  }, [context]);
  each(changes, (_, t) => {
    if (exitingTransitions.current.size) {
      const ind = transitions.findIndex(state => state.key === t.key);
      transitions.splice(ind, 1);
    }
  });
  useIsomorphicLayoutEffect(() => {
    each(exitingTransitions.current.size ? exitingTransitions.current : changes, ({
      phase,
      payload
    }, t) => {
      const {
        ctrl
      } = t;
      t.phase = phase;
      ref == null ? void 0 : ref.add(ctrl);

      if (hasContext && phase == TransitionPhase.ENTER) {
        ctrl.start({
          default: context
        });
      }

      if (payload) {
        replaceRef(ctrl, payload.ref);

        if ((ctrl.ref || ref) && !forceChange.current) {
          ctrl.update(payload);
        } else {
          ctrl.start(payload);

          if (forceChange.current) {
            forceChange.current = false;
          }
        }
      }
    });
  }, reset ? void 0 : deps);

  const renderTransitions = render => React__namespace.createElement(React__namespace.Fragment, null, transitions.map((t, i) => {
    const {
      springs
    } = changes.get(t) || t.ctrl;
    const elem = render(_extends({}, springs), t.item, t, i);
    return elem && elem.type ? React__namespace.createElement(elem.type, _extends({}, elem.props, {
      key: is.str(t.key) || is.num(t.key) ? t.key : t.ctrl.id,
      ref: elem.ref
    })) : elem;
  }));

  return ref ? [renderTransitions, ref] : renderTransitions;
}

let nextKey = 1;

function getKeys(items, {
  key,
  keys = key
}, prevTransitions) {
  if (keys === null) {
    const reused = new Set();
    return items.map(item => {
      const t = prevTransitions && prevTransitions.find(t => t.item === item && t.phase !== TransitionPhase.LEAVE && !reused.has(t));

      if (t) {
        reused.add(t);
        return t.key;
      }

      return nextKey++;
    });
  }

  return is.und(keys) ? items : is.fun(keys) ? items.map(keys) : toArray(keys);
}

class Interpolation extends FrameValue {
  constructor(source, args) {
    super();
    this.key = void 0;
    this.idle = true;
    this.calc = void 0;
    this._active = new Set();
    this.source = source;
    this.calc = createInterpolator(...args);

    const value = this._get();

    const nodeType = getAnimatedType(value);
    setAnimated(this, nodeType.create(value));
  }

  advance(_dt) {
    const value = this._get();

    const oldValue = this.get();

    if (!isEqual(value, oldValue)) {
      getAnimated(this).setValue(value);

      this._onChange(value, this.idle);
    }

    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }

  _get() {
    const inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
    return this.calc(...inputs);
  }

  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      each(getPayload(this), node => {
        node.done = false;
      });

      if (globals.skipAnimation) {
        raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        frameLoop.start(this);
      }
    }
  }

  _attach() {
    let priority = 1;
    each(toArray(this.source), source => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this);
      }

      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }

        priority = Math.max(priority, source.priority + 1);
      }
    });
    this.priority = priority;

    this._start();
  }

  _detach() {
    each(toArray(this.source), source => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this);
      }
    });

    this._active.clear();

    becomeIdle(this);
  }

  eventObserved(event) {
    if (event.type == 'change') {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);

        this._start();
      }
    } else if (event.type == 'idle') {
      this._active.delete(event.parent);
    } else if (event.type == 'priority') {
      this.priority = toArray(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
    }
  }

}

function isIdle(source) {
  return source.idle !== false;
}

function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}

function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    each(getPayload(self), node => {
      node.done = true;
    });
    callFluidObservers(self, {
      type: 'idle',
      parent: self
    });
  }
}

globals.assign({
  createStringInterpolator,
  to: (source, args) => new Interpolation(source, args)
});

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

const _excluded$2 = ["style", "children", "scrollTop", "scrollLeft"];
const isCustomPropRE = /^--/;

function dangerousStyleValue(name, value) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (typeof value === 'number' && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px';
  return ('' + value).trim();
}

const attributeCache = {};

function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }

  const isFilterElement = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';

  const _ref = props,
        {
    style,
    children,
    scrollTop,
    scrollLeft
  } = _ref,
        attributes = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  const values = Object.values(attributes);
  const names = Object.keys(attributes).map(name => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase())));

  if (children !== void 0) {
    instance.textContent = children;
  }

  for (let name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);

      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }

  names.forEach((name, i) => {
    instance.setAttribute(name, values[i]);
  });

  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }

  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
}

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);
const _excluded$1 = ["x", "y", "z"];
const domTransforms = /^(matrix|translate|scale|rotate|skew)/;
const pxTransforms = /^(translate)/;
const degTransforms = /^(rotate|skew)/;

const addUnit = (value, unit) => is.num(value) && value !== 0 ? value + unit : value;

const isValueIdentity = (value, id) => is.arr(value) ? value.every(v => isValueIdentity(v, id)) : is.num(value) ? value === id : parseFloat(value) === id;

class AnimatedStyle extends AnimatedObject {
  constructor(_ref) {
    let {
      x,
      y,
      z
    } = _ref,
        style = _objectWithoutPropertiesLoose(_ref, _excluded$1);

    const inputs = [];
    const transforms = [];

    if (x || y || z) {
      inputs.push([x || 0, y || 0, z || 0]);
      transforms.push(xyz => [`translate3d(${xyz.map(v => addUnit(v, 'px')).join(',')})`, isValueIdentity(xyz, 0)]);
    }

    eachProp(style, (value, key) => {
      if (key === 'transform') {
        inputs.push([value || '']);
        transforms.push(transform => [transform, transform === '']);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (is.und(value)) return;
        const unit = pxTransforms.test(key) ? 'px' : degTransforms.test(key) ? 'deg' : '';
        inputs.push(toArray(value));
        transforms.push(key === 'rotate3d' ? ([x, y, z, deg]) => [`rotate3d(${x},${y},${z},${addUnit(deg, unit)})`, isValueIdentity(deg, 0)] : input => [`${key}(${input.map(v => addUnit(v, unit)).join(',')})`, isValueIdentity(input, key.startsWith('scale') ? 1 : 0)]);
      }
    });

    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }

    super(style);
  }

}

class FluidTransform extends FluidValue {
  constructor(inputs, transforms) {
    super();
    this._value = null;
    this.inputs = inputs;
    this.transforms = transforms;
  }

  get() {
    return this._value || (this._value = this._get());
  }

  _get() {
    let transform = '';
    let identity = true;
    each(this.inputs, (input, i) => {
      const arg1 = getFluidValue(input[0]);
      const [t, id] = this.transforms[i](is.arr(arg1) ? arg1 : input.map(getFluidValue));
      transform += ' ' + t;
      identity = identity && id;
    });
    return identity ? 'none' : transform;
  }

  observerAdded(count) {
    if (count == 1) each(this.inputs, input => each(input, value => hasFluidValue(value) && addFluidObserver(value, this)));
  }

  observerRemoved(count) {
    if (count == 0) each(this.inputs, input => each(input, value => hasFluidValue(value) && removeFluidObserver(value, this)));
  }

  eventObserved(event) {
    if (event.type == 'change') {
      this._value = null;
    }

    callFluidObservers(this, event);
  }

}

const primitives = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
const _excluded = ["scrollTop", "scrollLeft"];
globals.assign({
  batchedUpdates: reactDom.unstable_batchedUpdates,
  createStringInterpolator,
  colors
});
const host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: style => new AnimatedStyle(style),
  getComponentProps: _ref => {
    let props = _objectWithoutPropertiesLoose(_ref, _excluded);

    return props;
  }
});
const animated = host.animated;

const {
  useStyleRewriter: useStyleRewriter$1
} = hooks;

const ModalComponent = ({
  show = false,
  //required
  setShow = () => {},
  //required
  RenderCard = () => /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null),
  //required
  popupWindowClasses = ``,
  renderCardContainerClasses = ``,
  renderCardProps = {},
  onCloseModalCb = () => {},
  zIndex = 50
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);
  const [scrollActive, setScrollActive] = React.useState(false);
  const srPopupWindowClasses = useStyleRewriter$1(`fixed z-40 w-full h-95vh bg-white`, popupWindowClasses);
  const srRenderCardContainerClasses = useStyleRewriter$1(`w-full h-full mt-1 overflow-visible`, renderCardContainerClasses);
  const modalHeight = screenHeight ? screenHeight * 0.9 : 0;
  const [{
    y
  }, set] = useSpring(() => ({
    y: modalHeight
  }));

  const open = ({
    canceled
  }) => {
    if (!isOpen) setIsOpen(true);
    set({
      y: 0,
      immediate: false,
      config: canceled ? config.wobbly : config.stiff
    });
    document.querySelector(`body`).style.overflow = `hidden`;
  };

  const close = (velocity = 0) => {
    document.querySelector(`body`).style.overflow = `auto`;
    onCloseModalCb();
    setShow(false);
    set({
      y: modalHeight,
      immediate: false,
      config: { ...config.stiff,
        velocity
      }
    });
    setIsOpen(false);
  };

  const bind = reactUseGesture.useDrag(({
    last,
    vxvy: [, vy],
    movement: [, my],
    cancel,
    canceled
  }) => {
    if (scrollActive) return;
    if (my < -50) cancel();

    if (last) {
      my > modalHeight * 0.5 || vy > 0.35 ? close(vy) : open({
        canceled
      });
    } else {
      set({
        y: my,
        immediate: true
      });
    }
  }, {
    initial: () => [0, y.get()],
    filterTaps: true,
    bounds: {
      top: 0
    },
    rubberband: true
  });
  const bgStyle = {
    opacity: y.to([0, modalHeight], [0.5, 0], `clamp`),
    zIndex: y.to([0, modalHeight], [zIndex, -1], `clamp`)
  };
  React.useEffect(() => {
    setRect({
      setScreenHeight
    });

    const setRectListener = () => setRect({
      setScreenHeight
    });

    window.addEventListener(`resize`, setRectListener);
    return () => {
      window.removeEventListener(`resize`, setRectListener);
      document.querySelector(`body`).style.overflow = `auto`;
    };
  }, []);
  React.useEffect(() => {
    if (!show && !isOpen) return;
    if (show) setIsOpen(true);
    show ? open({}) : close();
  }, [show]);
  if (!isOpen) return null;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React__default["default"].createElement(animated.div, {
    onClick: close,
    className: "fixed inset-0 bg-zinc-900 opacity-50",
    style: bgStyle
  }), /*#__PURE__*/React__default["default"].createElement(animated.div, _extends$3({
    className: srPopupWindowClasses
  }, bind(), {
    style: {
      display: show ? `block` : `none`,
      bottom: `calc(-100vh + ${modalHeight}px)`,
      touchAction: `none`,
      height: `100vh`,
      zIndex: `110`,
      y
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `relative w-screen h-[90vh] bg-white  rounded-t-2xl pt-5`
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute bg-white w-12 h-2 -top-4 left-1/2 transform -translate-x-1/2 rounded-full"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: srRenderCardContainerClasses,
    onTouchStart: () => setScrollActive(true),
    onTouchEnd: () => setScrollActive(false),
    onMouseDown: () => setScrollActive(true),
    onMouseLeave: () => setScrollActive(false)
  }, /*#__PURE__*/React__default["default"].createElement(RenderCard, _extends$3({
    setShow: setShow,
    show: show
  }, renderCardProps))))));
};

const setRect = ({
  setScreenHeight
}) => {
  const height = window.innerHeight;
  setScreenHeight(height);
};
// const baseContainerClasses = `@pre pointer-events-none @dy flex @pn fixed @ow overflow-hidden @it bottom-0 inset-0 @ani items-end @jyc justify-end`;

const ModalPortal = ({
  targetId = `modal`,
  ...props
}) => {
  return document.querySelector(`#${targetId}`) ? /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(ModalComponent, props), document.querySelector(`#${targetId}`)) : null;
};

const {
  useStyleRewriter,
  useBreakpoint
} = hooks;

const Modal = ({
  children,
  showEffect = () => {},
  ...props
}) => {
  const [show, setShow] = React.useState(false);
  const srChildContainerClasses = useStyleRewriter(`@cr cursor-pointer @wh w-full @ht h-full`, props.childContainerClasses);
  const modalComponentId = React.useMemo(() => {
    const name = props.RenderCard.name;

    if (!name || name === `anonymous`) {
      return `component${Math.round(Math.random() * 10e5)}`;
    }

    return name;
  }, []);
  React.useEffect(() => {
    showEffect({
      show,
      setShow
    });
  }, [children ? show : props.show, props]);
  const useDesktopModal = useBreakpoint(`md`);
  const Component = useDesktopModal ? ModalPortal$1 : ModalPortal;
  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(Component, _extends$3({
    modalComponentId: props.modalComponentId ? props.modalComponentId : modalComponentId,
    setShow: children ? setShow : props.setShow,
    show: children ? show : props.show
  }, props)), children ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: srChildContainerClasses,
    onClick: () => setShow(true)
  }, children) : null);
};

const InputError = ({
  error
}) => {
  return error.message ? /*#__PURE__*/React__default["default"].createElement("p", {
    className: baseClasses
  }, error.message) : null;
};
const baseClasses = `@ttc text-red-500 @fts text-[12px] @ttt normal-case @wh w-fit @leh leading-none text-left`;

const InputOverlay = props => {
  const {
    children,
    label,
    labelContainerClassName = ``,
    labelClassName = ``,
    labelInputContainerClassName = ``,
    error,
    ErrorComponent,
    PairComponent,
    LabelComponent
  } = props;
  const srLabelContainerClassName = useStyleRewriter$6(baseLabelContainerClasses, labelContainerClassName);
  const srLabelClassName = useStyleRewriter$6(baseLabelClassName$1, labelClassName);
  const srLabelInputContainerClassName = useStyleRewriter$6(baseLabelInputContainerClassName, labelInputContainerClassName);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: srLabelContainerClassName
  }, typeof LabelComponent === "function" && label ? /*#__PURE__*/React__default["default"].createElement(LabelComponent, props) : label ? /*#__PURE__*/React__default["default"].createElement("p", {
    className: srLabelClassName
  }, label) : null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srLabelInputContainerClassName
  }, children, typeof PairComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(PairComponent, props) : null), typeof ErrorComponent === "function" && error ? /*#__PURE__*/React__default["default"].createElement(ErrorComponent, props) : error ? /*#__PURE__*/React__default["default"].createElement(InputError, props) : null);
};
const baseLabelContainerClasses = `
  @pn relative
  @dy flex
  @gp gap-2
  @fxd flex-col
  @wh w-full
`;
const baseLabelClassName$1 = `
  @mn mb-0`;
const baseLabelInputContainerClassName = `
  @wh w-full
  @dy flex
  @jyc justify-start
  @ani items-center
  @pn relative
`;

const CheckboxInput = props => {
  const {
    value = false,
    label,
    error,
    onChange,
    id = Math.floor(Math.random() * 10000),
    inputContainerClassName,
    labelClassName,
    inputClassName,
    checkedInputClassName = ``,
    Icon,
    InnerComponent
  } = props;
  const [localValue, setLocalValue] = React.useState(value);
  const srInputContainerClassName = useStyleRewriter$6(baseInputContainerClassName$2, inputContainerClassName);
  const srLabelClassName = useStyleRewriter$6(baseLabelClassName, labelClassName);
  const srInputClassName = useStyleRewriter$6(baseInputClassName$5, inputClassName, false);
  const resInputlassName = useStyleRewriter$6(srInputClassName, value ? checkedInputClassName : "");
  React.useEffect(() => {
    if (value !== localValue) {
      setLocalValue(value);
    }

    if (value == ``) {
      setLocalValue(false);
    }
  }, [value]);
  React.useEffect(() => {
    const e = {
      target: {}
    };
    handleChange(e);
  }, [localValue]);

  const handleChange = e => {
    e.target.type = `checkbox`;
    e.target.checked = localValue;
    e.target.id = id;
    onChange(e);
  };

  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, _extends$3({}, props, {
    label: null,
    error: error
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: srInputContainerClassName
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: id,
    className: resInputlassName
  }, localValue && typeof Icon === "function" ? /*#__PURE__*/React__default["default"].createElement(Icon, _extends$3({}, props, {
    isChecked: localValue
  })) : null, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "checkbox",
    id: id,
    className: "hidden",
    onChange: () => {},
    onClick: () => setLocalValue(!localValue),
    checked: localValue
  })), typeof InnerComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(InnerComponent, _extends$3({}, props, {
    onClick: () => setLocalValue(!localValue),
    isChecked: localValue
  })) : label ? /*#__PURE__*/React__default["default"].createElement("p", {
    onClick: () => setLocalValue(!localValue),
    className: srLabelClassName
  }, label) : null));
};
const baseInputContainerClassName$2 = `
  @dy flex
  @gp gap-2
  @ani items-center
`;
const baseInputClassName$5 = `
  @dy flex
  @fxsk shrink-0
  @ani items-center
  @jyc justify-center
  @cr cursor-pointer
`;
const baseLabelClassName = `
  @cr cursor-pointer
  @ttc text-black
  @mn mb-0
`;

const Input = /*#__PURE__*/React.forwardRef(({
  children,
  dropdownItems: DropdownItems,
  value = ``,
  type = `text`,
  placeholder,
  onChange = () => null,
  disabled = false,
  Icon,
  inputClassName = ``,
  inputDisabledClassName = ``,
  inputErrorClassName = ``,
  dropdownContainerClasses = ``,
  inputContainerClassName = ``,
  autoComplete = null,
  id = null,
  error,
  dropdownPosition = `left`,
  maxLength,
  name
}, ref) => {
  const dropdownRef = React.useRef(null);
  const inputContainerRef = React.useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useDetectOutsideClick$1(inputContainerRef, false);

  const onClick = e => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const typeClasses = classesByType[type];
  const baseClasses = useStyleRewriter$6(baseClassName, typeClasses, false);
  const statusClasses = disabled ? useStyleRewriter$6(baseClasses, inputDisabledClassName, false) : error ? useStyleRewriter$6(baseClasses, inputErrorClassName, false) : baseClasses;
  const srClasses = useStyleRewriter$6(statusClasses, inputClassName);
  const srInputContainerClassName = useStyleRewriter$6(baseContainerClassName$3, inputContainerClassName);
  const baseDropdownContainerClasses = `@wh w-full @mn mt-1 @ht h-200px @ow overflow-y-scroll ${dropdownPosition === `right` ? `@it left-auto right-0` : `@it inset-x-0`}`;
  const srDropdownContainerClasses = useStyleRewriter$6(baseDropdownContainerClasses, dropdownContainerClasses, true);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: inputContainerRef,
    className: srInputContainerClassName
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    placeholder: placeholder,
    autoComplete: autoComplete,
    id: id,
    type: type == `select` ? `button` : type,
    className: srClasses,
    disabled: disabled ? true : false,
    onChange: onChange,
    onClick: onClick,
    value: value,
    ref: ref,
    maxLength: maxLength,
    name: name
  }), typeof Icon === `function` ? /*#__PURE__*/React__default["default"].createElement(Icon, {
    onClick: onClick
  }) : null, children ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute h-full right-0 top-0 cursor-pointer"
  }, children) : null, DropdownItems ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: `transition duration-200 ${isDropdownOpen ? `opacity-100` : `pointer-events-none opacity-0`}`
  }, /*#__PURE__*/React__default["default"].createElement(DropdownContainer, {
    className: srDropdownContainerClasses,
    dropdownRef: dropdownRef
  }, /*#__PURE__*/React__default["default"].createElement(DropdownItems, {
    setIsDropdownOpen: setIsDropdownOpen
  }))) : null);
});
const classesByType = {
  select: `@cr cursor-pointer`,
  text: `@cr cursor-text`
};
const baseContainerClassName$3 = `w-full relative`;
const baseClassName = `
  @bdc bg-transparent
  @ttc text-black
  @pn relative
  @wh w-full
  @brw border
  @brs border-solid
  @brc border-transparent
  @tndn duration-200
  @oe outline-none focus:outline-none hover:outline-none
  @dy flex
  @pg p-3
`;

const TextInput = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    value,
    id,
    onChange,
    placeholder,
    type,
    disabled,
    enableTypeChanging = false,
    inputClassName,
    Icon,
    name,
    ChangeInputTypeButton,
    inputErrorClassName = `@brc border-red-500`,
    inputDisabledClassName,
    inputContainerClassName
  } = props;
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, _extends$3({}, props, {
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
    name: name
  }));
});

const RangeInput = ({
  id = Math.random(),
  value = 0,
  onChange = () => {},
  minValue = 0,
  maxValue = 100,
  minLimit = minValue,
  maxLimit = maxValue,
  range = [0, maxValue * 0.25, maxValue * 0.5, maxValue * 0.75, maxValue],
  tooltip = false,
  disabled,
  onMouseUp = () => {},
  inputClassName,
  rangeClassName,
  activeRangeClassName,
  Comp,
  step = 0.01,
  containerClassName
}) => {
  const rangeRef = React.useRef(null);

  const onMouseUpHandler = e => {
    let value = +e.target.value;
    rangeRef.current.style.cursor = `grab`;
    onMouseUp(e, value);
  };

  const onChangeHandler = e => {
    const value = +e.target.value;
    onChange(e, value);
  };

  const srContainerClassName = useStyleRewriter$6(baseContainerClassName$2, containerClassName);
  const valueDividedByMaxValue = value / maxValue * 100 || 0;
  const srRangeClassName = useStyleRewriter$6(baseRangeClassName, rangeClassName);
  const srActiveRangeClassName = useStyleRewriter$6(baseActiveRangeClassName, activeRangeClassName);
  const srInputClassName = useStyleRewriter$6(baseInputClassName$4, inputClassName);
  const draggedItemStyle = React.useMemo(() => {
    return {
      left: `${value / maxValue * 100 <= maxLimit / maxValue * 100 ? value / maxValue * 100 : maxLimit / maxValue * 100}%`
    };
  }, [value]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: srContainerClassName
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: circleStyle,
    className: srRangeClassName
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: `${value / maxValue * 100 <= maxLimit / maxValue * 100 ? value / maxValue * 100 : maxLimit / maxValue * 100}%`
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
      left: `${valueDividedByMaxValue}%`
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
    onMouseDown: () => rangeRef.current.style.cursor = `grabbing`,
    onMouseUp: e => onMouseUpHandler(e),
    onInput: e => onChangeHandler(e),
    type: "range",
    className: "w-full absolute h-full opacity-0 z-20",
    id: id,
    style: {
      width: `${(maxLimit - minLimit) / maxValue * 100}%`,
      left: `calc(${minLimit / maxValue * 100}% )`,
      cursor: `grab`,
      minWidth: `2%`
    },
    value: value
  }), range && /*#__PURE__*/React__default["default"].createElement(Datalist, {
    id: id,
    value: value,
    range: range
  }));
};

const baseContainerClassName$2 = `
  @wh w-full
  @dy flex
  @ani items-center
  @jyc justify-center
  @gp group
  @ht h-[8px] 
  @fxd flex-col
  @pn relative
`;
const baseInputClassName$4 = `
  @ht h-6
  @wh w-6
  @brr rounded-full
  @bdc bg-white
  @pn absolute
  @it top-1/2
  @tndn -translate-y-1/2 -translate-x-1/2
  @zi z-50
  @bxsw shadow-md
`;
const baseRangeClassName = `
  @ht h-[8px]
  @wh w-full
  @it left-0
  @brr rounded-full
  @pn absolute
  @zi z-10`;
const baseActiveRangeClassName = `
  @ht h-[8px]
  @brr rounded-full
  @pn absolute
  @zi z-40`;
const circleStyle = {
  width: `calc(100% - 12px)`,
  left: `6px`
};
const datalistStyle = {
  borderRadius: `50%`,
  minHeight: `12px`,
  minWidth: `12px`
};

const Datalist = ({
  id,
  range,
  value
}) => /*#__PURE__*/React__default["default"].createElement("div", {
  className: "absolute flex justify-between left-0 w-full h-full top-0 z-0",
  id: id
}, range.map((item, index) => {
  const isAchived = value >= item;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: datalistStyle,
    className: `relative top-1/2 -translate-y-1/2 flex-shrink-0 ${isAchived ? `bg-primary-700` : `bg-primary-200`} ${isAchived ? `border-primary-700` : `border-primary-200`}`,
    key: index
  });
}));

function usePrevious(value) {
  const ref = React.useRef(); // Store current value in ref

  React.useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
}

function SingleOTPInputComponent(props) {
  const {
    focus,
    autoFocus,
    ...rest
  } = props;
  const inputRef = React.useRef(null);
  const prevFocus = usePrevious(!!focus);
  React.useEffect(() => {
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
  return /*#__PURE__*/React__default["default"].createElement("input", _extends$3({
    ref: inputRef
  }, rest));
}

const SingleOTPInput = /*#__PURE__*/React.memo(SingleOTPInputComponent);

const OtpInput = props => {
  const {
    length = 6,
    isNumberInput = true,
    autoFocus,
    disabled,
    onChange: onChangeOTP,
    inputStyle,
    error,
    containerClassName,
    inputClassName,
    id
  } = props;
  const [activeInput, setActiveInput] = React.useState(0);
  const [otpValues, setOTPValues] = React.useState(Array(length).fill(``)); // Helper to return OTP from inputs

  const handleOtpChange = (e, otp) => {
    const otpValue = otp.join(``);
    e.target.id = id;
    e.target.value = otpValue;
    onChangeOTP(e);
  }; // Helper to return value with the right type: 'text' or 'number'


  const getRightValue = React.useCallback(str => {
    let changedValue = str;

    if (!isNumberInput) {
      return changedValue;
    }

    return !changedValue || /\d/.test(changedValue) ? changedValue : ``;
  }, [isNumberInput]); // Change OTP value at focussing input

  const changeCodeAtFocus = React.useCallback((e, str) => {
    const updatedOTPValues = [...otpValues];
    updatedOTPValues[activeInput] = str[0] || ``;
    setOTPValues(updatedOTPValues);
    handleOtpChange(e, updatedOTPValues);
  }, [activeInput, handleOtpChange, otpValues]); // Focus `inputIndex` input

  const focusInput = React.useCallback(inputIndex => {
    const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
    setActiveInput(selectedIndex);
  }, [length]);
  const focusPrevInput = React.useCallback((clean = false) => {
    if (activeInput <= 0) return;
    focusInput(activeInput - 1);

    if (clean) {
      const updatedOTPValues = [...otpValues];
      updatedOTPValues[activeInput - 1] = ``;
      setOTPValues(updatedOTPValues);
    }
  }, [activeInput, focusInput, otpValues]);
  const focusNextInput = React.useCallback(() => {
    if (activeInput === length - 1) return;
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]); // Handle onFocus input

  const handleOnFocus = React.useCallback(index => () => {
    focusInput(index);
  }, [focusInput]); // Handle onChange value for each input

  const handleOnChange = React.useCallback(e => {
    const val = getRightValue(e.currentTarget.value);

    if (!val) {
      e.preventDefault();
      return;
    }

    changeCodeAtFocus(e, val);
    focusNextInput();
  }, [changeCodeAtFocus, focusNextInput, getRightValue]); // Hanlde onBlur input

  const onBlur = React.useCallback(() => {
    setActiveInput(-1);
  }, []); // Handle onKeyDown input

  const handleOnKeyDown = React.useCallback(e => {
    switch (e.key) {
      case `Backspace`:
      case `Delete`:
        {
          e.preventDefault();

          if (otpValues[activeInput]) {
            changeCodeAtFocus(e, ``);
          } else {
            focusPrevInput(true);
          }

          break;
        }

      case `ArrowLeft`:
        {
          e.preventDefault();
          focusPrevInput();
          break;
        }

      case `ArrowRight`:
        {
          e.preventDefault();
          focusNextInput();
          break;
        }

      case ` `:
        {
          e.preventDefault();
          break;
        }

      default:
        return e;
    }
  }, [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]);
  const handleOnPaste = React.useCallback(e => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData(`text/plain`).trim().slice(0, length - activeInput).split(``);

    if (pastedData) {
      let nextFocusIndex = 0;
      const updatedOTPValues = [...otpValues];
      updatedOTPValues.forEach((val, index) => {
        if (index >= activeInput) {
          const changedValue = getRightValue(pastedData.shift() || val);

          if (changedValue) {
            updatedOTPValues[index] = changedValue;
            nextFocusIndex = index;
          }
        }
      });
      setOTPValues(updatedOTPValues);
      e.target.id = id;
      e.target.value = updatedOTPValues.join(``);
      onChangeOTP(e);
      setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
    }
  }, [activeInput, getRightValue, length, otpValues]);
  const allInputs = Array(length).fill(``);
  const srContainerClassName = useStyleRewriter$6(baseContainerClassName$1, containerClassName);
  const srInputClassName = useStyleRewriter$6(baseInputClassName$3, inputClassName);
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, props, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srContainerClassName
  }, allInputs.map((_, index) => /*#__PURE__*/React__default["default"].createElement(SingleOTPInput, {
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
    className: srInputClassName,
    disabled: disabled,
    style: {
      appearance: "textfield",
      MozAppearance: "textfield",
      WebkitAppearance: "textfield"
    } // maxlength={1}

  }))));
};
const baseContainerClassName$1 = `
  @dy flex gap-2
  @jyc justify-center
  @ani items-center
`;
const baseInputClassName$3 = `
  @wh w-4/12
  @tta text-center
  @oe outline-none
  @bdc bg-transparent
`;

const TextArea = /*#__PURE__*/React.forwardRef(({
  value = "",
  placeholder,
  onChange = () => null,
  className = "",
  disabled,
  id = null,
  ...props
}, ref) => {
  return /*#__PURE__*/React__default["default"].createElement("textarea", _extends$3({}, props, {
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    className: className,
    disabled: disabled,
    ref: ref,
    id: id
  }));
});

const TextAreaInput = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    value,
    id,
    onChange,
    placeholder,
    disabled,
    error,
    inputClassName = "",
    inputErrorClassName = "",
    rows = 3
  } = props;
  const srInputClassName = useStyleRewriter$6(baseInputClassName$2, inputClassName, false);
  const srStatusClassName = useStyleRewriter$6(srInputClassName, error ? inputErrorClassName : "");
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
const baseInputClassName$2 = `
  @wh w-full
  @bdc bg-transparent
  @tndn duration-200
  @oe outline-none focus:outline-none hover:outline-none
  @dy flex
  @pn relative
`;

const UploadFileInput = props => {
  const {
    uploadTitle = `Click here to upload a file`,
    uploadTitleClassName,
    multiple = false,
    onChange,
    id,
    files = {},
    setFiles,
    error,
    accept = `*/*`,
    DeleteFileButton,
    inputClassName,
    containerClassName,
    BACKEND_URL = "",
    fileCardClassName,
    FileComponent,
    InnerComponent,
    fileCardImageClassName,
    deleteFileButtonCointainerClassName
  } = props;

  const handleUploadImage = e => {
    preventDefaultEvent(e); // setError(null);
    // if (files?.length >= 4) return setError({ message: `Maximum files: 4` });
    // let file;
    // if (e?.dataTransfer) {
    //   file = e.dataTransfer.files[0];
    // } else {
    //   file = e.target.files[0];
    // }
    // console.log(`🚀 ~ handleUploadImage ~ file`, file);

    e.target.multiple = multiple;
    onChange(e); // if (file) {
    //   const sizeInMB = file?.size / (1024 * 1024);
    //   if (sizeInMB > 2.3) return setError({ message: `File too large` });
    //   // setFiles([...files, file]);
    //   onChange(e);
    // }
  };

  const handleDelete = (e, params = {}) => {
    const {
      index,
      file
    } = params;
    e.target.id = id;
    e.target.multiple = multiple; // console.log(`🚀 ~ handleDelete ~ files[id]`, files[id]);
    // Exists files on backend

    if (file?.id || files[id]?.length && files[id].filter(f => f.id)?.length) {
      if (multiple) {
        e.target.value = files[id].filter(backendFile => backendFile.id !== file.id);
      } else {
        e.target.value = {};
      }
    } // console.log(`🚀 ~ handleDelete ~ files`, files[id]);
    // console.log(`🚀 ~ handleDelete ~ handleDelete params`, params);


    setFiles(prev => {
      const newFiles = { ...prev
      };
      let toDeleteFile;

      if (multiple) {
        toDeleteFile = newFiles[id][index];
      } else {
        toDeleteFile = newFiles[id];
      }

      if (toDeleteFile?.url) ;

      if (multiple) {
        newFiles[id] = newFiles[id].filter((file, fIndex) => fIndex !== index);
      } else {
        delete newFiles[id];
      } // console.log(`🚀 ~ setFiles ~ newFiles`, newFiles);


      return newFiles;
    }); // console.log(`🚀 ~ handleDelete ~ files, file`, files, file);

    onChange(e); // console.log(`🚀 ~ handleDelete ~ e`, e, deleteFile);
  };

  const srInputClassName = useStyleRewriter$6(baseInputClassName$1, inputClassName);
  const srInputContainerClassName = useStyleRewriter$6(baseInputContainerClassName$1, containerClassName);
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, _extends$3({}, props, {
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
    type: "file" // name="file"
    ,
    id: id,
    accept: accept,
    onChange: handleUploadImage,
    className: "hidden",
    multiple: true
  }) : /*#__PURE__*/React__default["default"].createElement("input", {
    type: "file" // name="file"
    ,
    id: id,
    accept: accept,
    onChange: handleUploadImage,
    className: "hidden"
  }), typeof InnerComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(InnerComponent, props) : uploadTitle ? /*#__PURE__*/React__default["default"].createElement("p", {
    className: uploadTitleClassName
  }, uploadTitle) : null), /*#__PURE__*/React__default["default"].createElement(FilesRow, {
    handleDelete: (e, params) => handleDelete(e, params),
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

const FilesRow = ({
  files,
  multiple,
  handleDelete = () => {},
  DeleteFileButton,
  fileCardClassName,
  fileCardImageClassName,
  deleteFileButtonCointainerClassName,
  FileComponent,
  BACKEND_URL
}) => {
  // console.log(`🚀 ~ FilesRow ~ files`, files);
  const localFiles = React.useMemo(() => {
    if (!files) {
      return;
    }

    if (multiple) {
      return files;
    } else {
      return [files];
    }
  }, [files]);
  return localFiles?.length > 0 ? localFiles?.map((file, index) => {
    return /*#__PURE__*/React__default["default"].createElement(FileCard, {
      handleDelete: e => handleDelete(e, {
        index,
        file
      }),
      key: index,
      file: file,
      fileCardClassName: fileCardClassName,
      DeleteFileButton: DeleteFileButton,
      fileCardImageClassName: fileCardImageClassName,
      deleteFileButtonCointainerClassName: deleteFileButtonCointainerClassName,
      FileComponent: FileComponent,
      BACKEND_URL: BACKEND_URL
    });
  }) : null;
};

const FileCard = ({
  file,
  handleDelete = () => {},
  BACKEND_URL,
  DeleteFileButton,
  fileCardClassName,
  fileCardImageClassName,
  deleteFileButtonCointainerClassName,
  FileComponent
}) => {
  const src = React.useMemo(() => {
    if (file.url) {
      return `${BACKEND_URL}${file.url}`;
    }

    return URL.createObjectURL(file);
  }, [file]);
  const srFileCardClassName = useStyleRewriter$6(baseFileCardClassName, fileCardClassName);
  const srFileCardImageClassName = useStyleRewriter$6(baseFileCardImageClassName, fileCardImageClassName);
  const srDeleteFileButtonCointainerClassName = useStyleRewriter$6(baseDeleteFileButtonCointainerClassName, deleteFileButtonCointainerClassName);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: srFileCardClassName
  }, file?.type?.includes(`image/`) || file?.mime?.includes(`image/`) ? /*#__PURE__*/React__default["default"].createElement("img", {
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

const preventDefaultEvent = e => e.preventDefault();
const baseInputContainerClassName$1 = `
  @dy flex
  @fxw flex-wrap
  @wh w-full
`;
const baseInputClassName$1 = `
  @cr cursor-pointer
  @pn relative
  @tndn duration-200
`;
const baseFileCardClassName = `
  @pn relative
  @tndn duration-200
  @ow overflow-hidden
`;
const baseFileCardImageClassName = `
  @wh w-full
  @ht h-full
  @pn absolute
  @it inset-0
  @otf object-cover
`;
const baseDeleteFileButtonCointainerClassName = `
  @wh w-full
  @ht h-full
  @pn absolute
  @dy flex
  @ani items-center
  @jyc justify-center
  @it inset-0 
  @oy opacity-0 hover:opacity-100
  @tndn duration-200
`;

const SelectInput = props => {
  const {
    items,
    onChange,
    value,
    id,
    activeMatcher = () => {},
    setter = () => {},
    label,
    error,
    inputContainerClassName,
    activeItemClassName,
    baseItemClassName,
    InnerComponent
  } = props;
  const srInputContainerClassName = useStyleRewriter$6(inputContainerClassName, baseInputContainerClassName);
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, {
    label: label,
    error: error
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srInputContainerClassName
  }, items.map((item, index) => {
    return /*#__PURE__*/React__default["default"].createElement(SmartButton, {
      className: activeMatcher(item, value) ? activeItemClassName : baseItemClassName,
      key: index,
      onClick: e => {
        e.target.value = setter(item);
        e.target.id = id;
        onChange(e);
      }
    }, typeof InnerComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(InnerComponent, _extends$3({
      isSelected: activeMatcher(item, value)
    }, props, {
      item: item
    })) : item.title);
  })));
};
const baseInputContainerClassName = `
  @dy flex
  @fxw flex-wrap
  @gp gap-2`;

const DropdownInput = props => {
  const {
    label,
    error,
    setter,
    id,
    value,
    onChange = () => {},
    onDropdownOpenChange = () => {},
    items,
    activeMatcher,
    placeholder = ``,
    inputContainerClassName,
    inputClassName,
    activeItemClassName,
    dropdownClassName = "",
    baseItemClassName,
    Icon,
    InnerComponent
  } = props;
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);
  const srInputClassName = useStyleRewriter$6(baseInputClassName, inputClassName, false);
  const [activeItem, setActiveItem] = React.useState();
  React.useEffect(() => {
    const active = items?.find(item => activeMatcher(item, value));
    setActiveItem(active);
  }, [items?.length, value]);
  React.useEffect(() => {
    onDropdownOpenChange(isDropdownOpen);
  }, [isDropdownOpen]);
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, {
    label: label,
    error: error
  }, /*#__PURE__*/React__default["default"].createElement(SmartButton, {
    onClick: () => setDropdownOpen(!isDropdownOpen),
    dropdownItems: items?.length ? () => items.map((item, index) => {
      return /*#__PURE__*/React__default["default"].createElement(SmartButton, {
        key: index,
        onClick: e => {
          e.target.value = setter(item, index);
          e.target.id = id;
          onChange(e);
        },
        className: activeMatcher(item, value) ? activeItemClassName : baseItemClassName
      }, typeof InnerComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(InnerComponent, _extends$3({}, props, {
        isSelected: activeMatcher(item, value),
        item: item
      })) : item?.title);
    }) : null,
    dropdownClassName: dropdownClassName,
    dropdownContainerClassName: inputContainerClassName,
    className: srInputClassName
  }, typeof InnerComponent === "function" && activeItem ? /*#__PURE__*/React__default["default"].createElement(InnerComponent, _extends$3({}, props, {
    item: activeItem
  })) : activeItem?.title ? activeItem?.title : placeholder, typeof Icon === "function" ? /*#__PURE__*/React__default["default"].createElement(Icon, _extends$3({}, props, {
    isDropdownOpen: isDropdownOpen
  })) : null));
};
const baseInputClassName = `
  @cr cursor-pointer
  @fx flex
  @wh w-full
`;

const PopupCalendar = ({
  setOpen,
  onClick,
  value,
  setValue,
  setActiveTimeframe,
  LeftArrowIcon = () => {},
  RightArrowIcon = () => {}
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "@dy flex flex-col md:flex-row @bdc bg-white overflow-hidden @pg p-0 divide-x divide-true-gray-150 @bxsw shadow-none rounded-[8px]"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "px-2 flex flex-col items-center text-black"
  }, /*#__PURE__*/React__default["default"].createElement(Calendar__default["default"], _extends$3({}, calendarSettings, {
    nextLabel: RightArrowIcon,
    prevLabel: LeftArrowIcon,
    value: new Date(value),
    onChange: setValue,
    onClickDay: value => {
      setActiveTimeframe(`Custom`);
      setValue(value);
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-row items-center justify-end w-full mb-4 md:mb-7"
  }, /*#__PURE__*/React__default["default"].createElement(SmartButton, {
    className: "@ftf font-roboto @ftw font-medium @bdc bg-primary-900 hover:bg-primary-700 @ttc text-white @brr rounded-[4px] @mn mr-3 @pg px-5 py-1 @cr cursor-pointer @tndn duration-200",
    onClick: () => {
      onClick(value);
      setOpen(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement("h5", {
    className: "@ttc text-current"
  }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C")), /*#__PURE__*/React__default["default"].createElement(SmartButton, {
    className: "@ftf font-roboto @ftw font-medium @bdc bg-primary-200 hover:bg-primary-700 @ttc text-primary hover:text-white @brr rounded-[4px] @pg px-5 py-1 @cr cursor-pointer @tndn duration-200",
    onClick: () => {
      setValue();
      setOpen(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement("h5", {
    className: "@ttc text-current"
  }, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C")))));
};

const calendarSettings = {
  locale: `en`,
  className: `border-none p-3 md:p-6`,
  selectRange: false,
  showNavigation: true,
  returnValue: `start`
};

const DateCalendar = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    value,
    id,
    onChange,
    error,
    LeftArrowIcon,
    RightArrowIcon
  } = props;
  const buttonRef = React.useRef();
  const [localValue, setLocalValue] = React.useState(null);
  const [inputValues, setInputValues] = React.useState();
  const [localError, setLocalError] = React.useState(error);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [activeTimeframe, setActiveTimeframe] = React.useState(`Custom`);
  useOutsideClick(buttonRef, setIsDropdownOpen);
  React.useEffect(() => {
    if (value && value.length !== 0 && (!localValue || typeof localValue === `string`)) {
      const parsedDate = new Date(value).toISOString();
      setLocalValue(new Date(parsedDate));
    }
  }, [value]);
  React.useEffect(() => {
    if (!inputValues) return;
    let couldBeParsed = true;

    if (inputValues.every(value => value === ``)) {
      setLocalValue(null);
      return;
    }

    if (inputValues.every(value => !isNaN(value))) {
      for (const [index, value] of inputValues.entries()) {
        if (!value) {
          couldBeParsed = false;
        }

        if (index === 0 && (+value > 30 || +value < 1)) {
          couldBeParsed = false;
        }

        if (index === 1 && (+value > 11 || +value < 1)) {
          couldBeParsed = false;
        }

        if (index === 2 && (+value < 1900 || +value > 3000)) {
          couldBeParsed = false;
        }
      }

      if (!couldBeParsed) return;
      const newDate = new Date(Date.UTC(inputValues[2], inputValues[1] - 1, inputValues[0]));

      if (!localValue || newDate?.getTime() !== localValue?.getTime()) {
        setLocalValue(newDate);
      }
    }
  }, [inputValues]);
  React.useEffect(() => {
    if (localValue || localValue === null) {
      setLocalError();
      const e = {
        target: {
          id,
          value: localValue ? localValue.toISOString() : null
        }
      };
      onChange(e);
    }
  }, [localValue]);
  React.useEffect(() => {
    if (localValue && typeof localValue === `object`) {
      const date = new Date(localValue).getDate();
      const month = new Date(localValue).getMonth() + 1;
      const year = new Date(localValue).getFullYear();

      if (inputValues?.length === 3) {
        if (inputValues[0] !== date || inputValues[1] !== month || inputValues[2] !== year) {
          setInputValues([date, month, year]);
        }
      } else {
        setInputValues([date, month, year]);
      }
    }
  }, [localValue]);
  return /*#__PURE__*/React__default["default"].createElement(InputOverlay, _extends$3({}, props, {
    error: localError
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex items-center relative z-70 ",
    ref: buttonRef
  }, /*#__PURE__*/React__default["default"].createElement(DateInput, {
    error: localError,
    value: inputValues,
    onChange: setInputValues,
    onClick: () => setIsDropdownOpen(!isDropdownOpen)
  }), /*#__PURE__*/React__default["default"].createElement(transitionComponent.Transition, _extends$3({
    show: isDropdownOpen
  }, contentTransitionProps, {
    className: "absolute top-12 w-fit md:left-0 z-20 overflow-hidden drop-shadow-xl"
  }), /*#__PURE__*/React__default["default"].createElement(PopupCalendar, {
    value: localValue || new Date(),
    setValue: setLocalValue,
    open: isDropdownOpen,
    setOpen: setIsDropdownOpen,
    activeTimeframe: activeTimeframe,
    setActiveTimeframe: setActiveTimeframe,
    onClick: localValue => {
      setIsDropdownOpen(false);
    },
    LeftArrowIcon: LeftArrowIcon,
    RightArrowIcon: RightArrowIcon
  }))));
});
const inputClassName = `@ttc text-black @bdc bg-primary-200 @pg px-0 py-0 @brr rounded-0 @tta text-center @brc border-transparent`;
const containerClassName = `@wh w-fit @tta text-center`;

const DateInput = ({
  value = [],
  onChange = () => {},
  onClick = () => {},
  error
}) => {
  const [date, setDate] = React.useState(value[0]);
  const [month, setMonth] = React.useState(value[1]);
  const [year, setYear] = React.useState(value[2]);
  React.useEffect(() => {
    setDate(value[0]);
    setMonth(value[1]);
    setYear(value[2]);
  }, [value]);
  React.useEffect(() => {
    onChange(() => {
      return [date, month, year];
    });
  }, [date, month, year]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: onClick,
    className: `w-fit pl-[8px] pr-[10px] py-[12px] bg-primary-200 flex justify-start rounded-4px text-black text-base border-[1px] ${error ? `border-red-500 hover:border-red-500 shadow-red-outline` : `border-transparent`}`
  }, /*#__PURE__*/React__default["default"].createElement(Input, {
    type: "number",
    value: date || ``,
    onChange: e => {
      let {
        value
      } = e.target;
      value = +value || ``;
      if (value && value < 0) value = ``;
      if (value > 31) return;
      setDate(`${value}`);
    },
    className: `@wh w-[32px] ${inputClassName}`,
    containerClassName: containerClassName
  }), /*#__PURE__*/React__default["default"].createElement("div", null, "."), /*#__PURE__*/React__default["default"].createElement(Input, {
    type: "number",
    value: month || ``,
    onChange: e => {
      let {
        value
      } = e.target;
      value = +value || ``;
      if (value && value < 0) value = 0;
      if (value > 12) return;
      setMonth(value);
    },
    className: `@wh w-[32px] ${inputClassName}`,
    containerClassName: containerClassName
  }), /*#__PURE__*/React__default["default"].createElement("div", null, "."), /*#__PURE__*/React__default["default"].createElement(Input, {
    type: "number",
    value: year || ``,
    onChange: e => {
      let {
        value
      } = e.target;
      value = +value || ``;
      if (value && value < 0) value = 0;
      if (value > 2100) return;
      setYear(value);
    },
    className: `@wh w-[46px] ${inputClassName}`,
    containerClassName: containerClassName
  }));
};

const contentTransitionProps = {
  enter: `ease-out duration-300`,
  enterFrom: `opacity-0`,
  enterTo: `opacity-100`,
  leave: `ease-in duration-200`,
  leaveFrom: `opacity-100`,
  leaveTo: `opacity-0`
};

const useOutsideClick = (ref, action) => {
  React.useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) action(false);
    };

    document.addEventListener(`mousedown`, handleClickOutside);
    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, [ref]);
};

const FormInput = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    type,
    Comp
  } = props;
  const InputType = Comp || inputComponents[type] || TextInput;
  return /*#__PURE__*/React__default["default"].createElement(InputType, _extends$3({}, props, {
    ref: ref
  }));
});
const inputComponents = {
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

// used to animate *container* div height from 0 <-> auto during enter / leave transition

const Notification = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
  const {
    title = "",
    message = "",
    remove = () => {},
    containerClassName = "",
    contentContainerClassName = "",
    headerClassName = "",
    bodyClassName = "",
    styles,
    Child,
    CloseIcon,
    showDefault = true
  } = props;
  const srContainerClassName = useStyleRewriter$6(alertContainerClassName, containerClassName);
  const srContentContainerClassName = useStyleRewriter$6(contentWrapperClassName, contentContainerClassName);
  const srHeaderClassName = useStyleRewriter$6(alertHeaderClassName, headerClassName);
  const srBodyClassName = useStyleRewriter$6(alertBodyClassName, bodyClassName);
  const CloseIconComp = CloseIcon ? props => /*#__PURE__*/React__default["default"].createElement(CloseIcon, props) : props => /*#__PURE__*/React__default["default"].createElement(CloseButton, props);
  return /*#__PURE__*/React__default["default"].createElement(animated.div, {
    className: srContainerClassName,
    style: { ...styles
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srContentContainerClassName,
    ref: ref
  }, Child ? /*#__PURE__*/React__default["default"].createElement(Child, props) : null, showDefault ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: `flex flex-col items-start ${message ? "gap-2" : ""}`
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: `markdown ${srHeaderClassName}`
  }, /*#__PURE__*/React__default["default"].createElement(ReactMarkdown__default["default"], null, title)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `markdown ${srBodyClassName}`
  }, /*#__PURE__*/React__default["default"].createElement(ReactMarkdown__default["default"], null, message))) : null, /*#__PURE__*/React__default["default"].createElement(CloseIconComp, {
    remove: remove
  })));
});
const alertContainerClassName = `
  @pn relative
  @ow overflow-hidden`;
const contentWrapperClassName = `
  @pn relative
  @dy flex
  @fxd flex-row
  @ani items-start
  @brr rounded-sm
  @bxsw drop-shadow-md
  @pg pr-8 py-2
  @bdc bg-white`;
const alertHeaderClassName = `
  @pg pl-2
  @fts font-sm`;
const alertBodyClassName = `
  @pg pl-2
  @fts text-xs`;

const CloseButton = ({
  remove = () => {}
}) => {
  return /*#__PURE__*/React__default["default"].createElement(SmartButton, {
    onClick: remove,
    className: "@pn absolute @it right-1 top-1 @ttc text-black @wh w-3 @zi z-50 @cr cursor-pointer"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    className: `fill-current w-3`,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5659 5.24616C13.8936 4.91762 14.4257 4.91762 14.7542 5.24616C15.0827 5.57391 15.0827 6.10671 14.7542 6.43442L11.1711 10.0175L14.7042 13.5506C15.0302 13.8758 15.0302 14.4037 14.7042 14.7297C14.379 15.0558 13.8511 15.0558 13.5251 14.7297L9.99199 11.1966L6.43466 14.7539C6.10696 15.0817 5.57493 15.0817 5.2464 14.7539C4.91787 14.4262 4.91787 13.8942 5.2464 13.5656L8.80368 10.0084L5.27056 6.47527C4.94451 6.1501 4.94451 5.62226 5.27056 5.29621C5.59573 4.97016 6.12357 4.97016 6.44962 5.29621L9.98275 8.8293L13.5659 5.24616Z"
  })));
};

const notificationsContainerClassName = `z-50 fixed bottom-0 right-0 flex items-end flex-col mx-4`;

const Overlay = ({
  notifications = [],
  remove = () => {}
}) => {
  // use weakmap to get div height for alert items
  //
  // prevents memory leaks by garbage collecting removed items
  const [refMap] = React.useState(() => new Map());
  const transitionConfigWithHeightAnimation = {
    from: {
      height: 0
    },
    enter: item => async next => {
      await next({
        height: refMap.get(item)?.offsetHeight
      });
    },
    update: item => async next => {
      await next({
        height: refMap.get(item)?.offsetHeight
      });
    },
    leave: () => async next => {
      await next({
        height: 0
      });
    }
  };
  const transitions = useTransition(notifications, transitionConfigWithHeightAnimation);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: notificationsContainerClassName
  }, transitions((styles, item) => {
    return /*#__PURE__*/React__default["default"].createElement(Notification, _extends$3({
      key: item.id,
      styles: styles,
      ref: ref => {
        return ref && refMap.set(item, ref);
      },
      remove: () => remove(item.id)
    }, item));
  }));
};

const NotificationsContext = /*#__PURE__*/React.createContext({
  add: () => null
});

const useNotifications = () => React.useContext(NotificationsContext);

const NotificationsWrapper = ({
  children
}) => {
  const [notifications, setNotifications] = React.useState([]); // use state fns to avoid passing stale alerts array to showAlert and removeAlert functions

  const remove = timestampId => {
    setNotifications(alertNotifications => alertNotifications.filter(alertInfo => alertInfo?.id !== timestampId));
  };

  const add = ({
    duration = 8000,
    ...props
  }) => {
    // use creation timestamp as psuedo-unique alert object ID
    const newNotificationId = new Date().getTime();
    const newNotification = {
      id: newNotificationId,
      ...props
    };
    setNotifications(alertNotifications => [...alertNotifications, newNotification]);

    if (duration !== 0) {
      setTimeout(() => remove(newNotificationId), duration);
    }
  }; // on first render ref is undefined
  // create empty alert helps to fix height error


  React.useEffect(() => {
    add({
      duration: 1
    });
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(NotificationsContext.Provider, {
    value: {
      add
    }
  }, children, /*#__PURE__*/React__default["default"].createElement(Overlay, {
    notifications: notifications,
    remove: remove
  }));
};

var SpringNotification = {
  NotificationsWrapper,
  useNotifications
};

function ReactSpringGallery({
  media,
  galleryClassName = "",
  mediaItemClassName = "",
  imageItemClassName = "",
  videoItemClassName = "",
  activeSlide = 0,
  setActiveSlide,
  PreviousNavItemComponent,
  NextNavItemComponent,
  navItemClassName = "",
  mediaContainerClassName = "",
  children,
  setShow
}) {
  const srGalleryClassName = useStyleRewriter$6(baseGalleryClassName, galleryClassName);
  const srMediaContainerClassName = useStyleRewriter$6(baseMediaContainerClassName, mediaContainerClassName);
  const srMediaItemClassName = useStyleRewriter$6(baseMediaItemClassName, mediaItemClassName);
  const srImageItemClassName = useStyleRewriter$6(baseImageItemClassName, imageItemClassName);
  const srVideoItemClassName = useStyleRewriter$6(baseVideoItemClassName, videoItemClassName);
  const isDesktop = useBreakpoint$1(`md`);
  const [width, setWidth] = React.useState();
  React.useEffect(() => {
    if (typeof window === `undefined`) {
      return;
    }

    if (isDesktop) {
      setWidth(window.innerWidth * 0.8);
    } else {
      setWidth(window.innerWidth);
    }
  }, [isDesktop]);
  const ref = React.useRef(activeSlide);
  const [props, api] = useSprings(media.length, i => ({
    x: i === activeSlide ? 0 : width * (i - activeSlide),
    display: i === activeSlide ? `block` : `none`
  }));
  const bind = react.useDrag(({
    active,
    movement: [mx],
    direction: [xDir],
    cancel
  }) => {
    if (active && Math.abs(mx) > width / 10) {
      ref.current = clamp(ref.current + (xDir > 0 ? -1 : 1), 0, media.length - 1);
      cancel();
    }

    api.start(i => {
      if (i < ref.current - 1 || i > ref.current + 1) return {
        display: `none`
      };
      const x = (i - ref.current) * width + (active ? mx : 0);
      setActiveSlide(ref.current);
      return {
        x,
        display: `block`
      };
    });
  });

  const setSlidePosition = () => api.start(i => {
    if (i < ref.current - 1 || i > ref.current + 1) return {
      display: `none`
    };
    const x = i === ref.current ? 0 : width * (i - ref.current);
    return {
      x,
      display: `block`
    };
  });

  const mediaLength = media.length;
  React.useEffect(() => {
    if (ref.current !== activeSlide) {
      const next = activeSlide > ref.current;
      const dirMultiplier = next ? 1 : -1;

      for (let index = ref.current; next ? index <= activeSlide : index >= activeSlide; index += dirMultiplier) {
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
    onClick: () => {
      ref.current = ref.current ? ref.current - 1 : 0;
      setActiveSlide(ref.current);
      setSlidePosition();
    }
  }) : /*#__PURE__*/React__default["default"].createElement(NavItem, {
    next: false,
    navItemClassName: navItemClassName,
    onClick: () => {
      ref.current = ref.current ? ref.current - 1 : 0;
      setActiveSlide(ref.current);
      setSlidePosition();
    }
  }) : null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srMediaContainerClassName
  }, props.map((item, index) => {
    const {
      x,
      display
    } = item;
    const mediaObj = media[index];
    return /*#__PURE__*/React__default["default"].createElement(animated.div, _extends$3({}, bind(), {
      key: `${mediaObj.id}-${index}`,
      className: srMediaItemClassName,
      style: {
        display,
        x
      }
    }), mediaObj.renderType === `image` ? /*#__PURE__*/React__default["default"].createElement("img", {
      src: mediaObj.url,
      className: srImageItemClassName
    }) : /*#__PURE__*/React__default["default"].createElement("video", {
      src: url,
      controls: true,
      className: srVideoItemClassName
    }));
  })), mediaLength > 1 ? typeof NextNavItemComponent === "function" ? /*#__PURE__*/React__default["default"].createElement(NextNavItemComponent, {
    onClick: () => {
      const lastItem = media.length - 1;
      ref.current = ref.current < lastItem ? ref.current + 1 : lastItem;
      setActiveSlide(ref.current);
      setSlidePosition();
    }
  }) : /*#__PURE__*/React__default["default"].createElement(NavItem, {
    next: true,
    navItemClassName: navItemClassName,
    onClick: () => {
      const lastItem = media.length - 1;
      ref.current = ref.current < lastItem ? ref.current + 1 : lastItem;
      setActiveSlide(ref.current);
      setSlidePosition();
    }
  }) : null);
}

const clamp = (number, lower, upper) => {
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
}; // true = next, false = prev


const NavItem = ({
  next,
  onClick,
  navItemClassName
}) => {
  const srNavItemClassName = useStyleRewriter$6(baseNavItemClassName, navItemClassName);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: `z-10 absolute h-full top-0 ${next ? `right-2` : `left-2`}  flex items-center`
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: onClick,
    className: srNavItemClassName
  }, /*#__PURE__*/React__default["default"].createElement(ChevronIcon, {
    className: `w-[26px] ${next ? `` : `rotate-180`}`
  })));
};

const baseGalleryClassName = `
  @ht h-full
  @wh w-full
  @pn relative
`;
const baseMediaContainerClassName = `
  @ht h-full
  @wh w-full
  @pn relative
  @ow overflow-hidden
  @dy flex
  @jyc justify-center
  @ani items-center
`;
const baseMediaItemClassName = `
  @pn absolute
  @wh w-full
  @ht h-full
  @ow overflow-hidden
  @th touch-none
`;
const baseImageItemClassName = `
  @wh w-full
  @ht h-full
  @pre pointer-events-none
  @th touch-none
  @urs select-none
  @otf object-cover
`;
const baseVideoItemClassName = `
  @wh w-full
  @ht h-full
`;
const baseNavItemClassName = `
  @dy flex
  @jyc justify-center
  @ani items-center
  @wh w-[32px]
  @ht h-[50px]
  @brr rounded-full
  @cr cursor-pointer
  @bdc bg-black
  @bdo bg-opacity-30
  @ttc text-white`;

const ChevronIcon = ({
  className
}) => {
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `fill-current ${className}`
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.3923 17.9512L10.106 4.81458L11.4102 3.61536L26.9999 17.9506L26.8933 18.0487L26.894 18.0493L11.3042 32.3845L10 31.1853L24.3923 17.9512Z"
  }));
};

const MediaGallery = ({
  media,
  containerClassName = "",
  galleryContainerClassName = "",
  mediaItemClassName,
  imageItemClassName,
  videoItemClassName,
  PreviousNavItemComponent,
  mediaContainerClassName,
  NextNavItemComponent,
  galleryClassName
}) => {
  const [show, setShow] = React.useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);
  const localMedia = React.useMemo(() => {
    if (!media) {
      return;
    }

    return media.map(item => {
      return { ...item,
        renderType: parseMimeType$1(item.mime).renderType
      };
    });
  }, [media]);
  if (!localMedia) return null;
  const srContainerClassName = useStyleRewriter$6(baseContainerClassName, containerClassName);
  const srGalleryContainerClassName = useStyleRewriter$6(baseGalleryContainerClassName, galleryContainerClassName);
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
    setActiveSlide: setActiveSlideIndex,
    media: localMedia,
    setShow: setShow
  }))));
};
const baseContainerClassName = `
  @wh w-full
  @ht h-full
  @dy flex
  @fxd flex-row
  @ani items-center md:items-start
  @jyc justify-center
  @pn relative`;
const baseGalleryContainerClassName = `
  @dy flex
  @wh w-full
  @pg pb-screen
  @pn relative`;

const components = {
  SmartButton,
  Modal,
  ModalArray,
  Input: FormInput,
  SpringNotification,
  MediaGallery
};

var index = {
    api: apiUtils,
    formatters: formatters,
    vanilla: vanilla,
    hooks: hooks,
    components: components,
};

exports["default"] = index;
//# sourceMappingURL=index.js.map
