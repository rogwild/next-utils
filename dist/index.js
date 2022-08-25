Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var qs = require('qs');
var React = require('react');
var reactTable = require('react-table');
var transitionComponent = require('transition-component');
var reactDom = require('react-dom');
var reactSpring = require('react-spring');
var reactUseGesture = require('react-use-gesture');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
var removeEmptyFields = function (_a) {
    var e_1, _b, e_2, _c;
    var data = _a.data, passKey = _a.passKey, files = _a.files;
    // console.log(`🚀 ~ removeEmptyFields ~ files`, files);
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
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_b = data_1.return)) _b.call(data_1);
                }
                finally { if (e_1) throw e_1.error; }
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
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    else {
        modified = data;
    }
    return modified;
};
var appendFilesToFormData = function (formData, files) {
    var e_3, _a, e_4, _b;
    // console.log(`🚀 ~ appendFilesToFormData ~ formData`, formData);
    if (Object.keys(files).length) {
        try {
            for (var _c = __values(Object.keys(files)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                // console.log(`🚀 ~ key`, key);
                if (Array.isArray(files[key])) {
                    try {
                        for (var _e = (e_4 = void 0, __values(files[key].entries())), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var _g = __read(_f.value, 2), _ = _g[0], file = _g[1];
                            // console.log(`🚀 ~ file`, file, files[key]);
                            formData.append("files.".concat(key), file);
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
                else {
                    // console.log(`🚀 ~ appendFilesToFormData ~ key`, key);
                    // console.log(`🚀 ~ file`, file, files[key]);
                    formData.append("files.".concat(key), files[key]);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
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
    var e_5, _d, e_6, _e;
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
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (additionalBlocks_1_1 && !additionalBlocks_1_1.done && (_d = additionalBlocks_1.return)) _d.call(additionalBlocks_1);
                        }
                        finally { if (e_5) throw e_5.error; }
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
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (additionalBlocks_2_1 && !additionalBlocks_2_1.done && (_e = additionalBlocks_2.return)) _e.call(additionalBlocks_2);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                return [2 /*return*/, { pageBlocks: pageBlocks, res: res, additionalBlocks: additionalBlocksData }];
        }
    });
}); };
var ApiClient = Api;
var transformResponseItem = transformResponseItem$1;

var apiUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getImageUrl: getImageUrl,
    transformPageBlock: transformPageBlock,
    removeEmptyFields: removeEmptyFields,
    appendFilesToFormData: appendFilesToFormData,
    getPageData: getPageData,
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
var parseMimeType = function (mime) {
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
    parseMimeType: parseMimeType
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

const hooks = {
  useDetectMouseover: useDetectMouseover$1,
  useDetectOutsideClick: useDetectOutsideClick$1,
  useLookupTable,
  useBreakpoint: useBreakpoint$1,
  useSetParentsInput,
  useStyleRewriter: useStyleRewriter$6
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

var vanilla = /*#__PURE__*/Object.freeze({
    __proto__: null,
    checkIsServer: checkIsServer,
    loadScripts: loadScripts,
    GTMPageView: GTMPageView
});

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

const {
  useStyleRewriter: useStyleRewriter$5
} = hooks;

const DropdownContainer = ({
  children,
  className,
  dropdownRef
}) => {
  const srClasses = useStyleRewriter$5(baseClasses$2, className);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: dropdownRef,
    className: srClasses
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex flex-col relative w-full"
  }, children));
};
const baseClasses$2 = `
    @pn absolute
    @mn mt-2
    @bdc bg-white
    @brc border-gray-light
    @brw border-px
    @brr rounded-8px
    @wh w-200px
    @it top-full left-0
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
  children,
  variant,
  tooltipPosition,
  href = "",
  dropdownItems: DropdownItems,
  dropdownContainerClasses = "",
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
  const variantClasses = useVariant(className, variant);
  const srClasses = useStyleRewriter$3(variantClasses, `${disabled ? disabledClasses : ""} ${className} `);
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
  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(Element, _extends({
    SmartButtonRef: SmartButtonRef,
    onClick: onClick
  }, elementProps), typeof children === "function" ? children({
    isMouseOver
  }) : children, DropdownItems && /*#__PURE__*/React__default["default"].createElement(transitionComponent.Transition, _extends({
    show: isDropdownOpen
  }, contentTransitionProps$1), /*#__PURE__*/React__default["default"].createElement(DropdownContainer, {
    className: dropdownContainerClasses,
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
const baseClasses = "@pn relative @ftf font-family-rubik @oe focus:outline-none @cr cursor-pointer @tndn duration-200 @tta text-center";
const disabledClasses = "@pre pointer-events-none @oy opacity-60 @bdc bg-true-gray-100 @ttc text-true-gray-450";

const useVariant = (defaultClasses, variant) => {
  return variants[variant] || defaultClasses;
};

const variants = {
  primary: `${baseClasses} 
          @bdc bg-blue-primary dark:bg-blue-600
          @bdo hover:bg-opacity-60 dark:hover:bg-opacity-80
          @dy flex 
          @fxd flex-row 
          @ani items-center 
          @pg px-8 py-3 
          @brr rounded-8px 
          @fts text-15px 
          @ttc text-white`,
  white: `${baseClasses} 
          @tnp transition 
          @tntf ease-in-out 
          @bdc bg-white hover:bg-gray-blue 
          @dy flex 
          @fxd flex-row 
          @ani items-center 
          @pg px-8 py-3 
          @brr rounded-8px 
          @fts text-15px 
          @ttc text-blue-base hover:text-white`,
  danger: `${baseClasses} 
          @bdc bg-red-base 
          @bdo hover:bg-opacity-60 
          @dy flex 
          @fxd flex-row 
          @ani items-center 
          @pg px-8 py-3 
          @brr rounded-8px 
          @fts text-15px 
          @ttc text-white`,
  light: `${baseClasses} 
          @bdc bg-white hover:bg-gray-accent 
          @ttc text-black hover:text-blue-primary 
          @pg px-4 py-2 
          @brr rounded-16px 
          @tta text-left`,
  "light-blue": `${baseClasses} 
          @bdc bg-blue-light 
          @bdc hover:bg-blue-primary 
          @ttc text-blue-primary hover:text-white 
          @pg px-8 py-3 
          @brr rounded-16px 
          @tta text-left`,
  text: baseClasses,
  circleLight: `${baseClasses} 
          @brc border-gray-light hover:border-blue-primary 
          @brw border-px 
          @dy flex 
          @jyi justify-center
          @ani items-center
          @ht h-8 
          @ow overflow-visible
          @pn relative 
          @bdc hover:bg-blue-primary 
          @ttc hover:text-white 
          @brr rounded-full 
          @wh w-8
          @zi z-45`,
  circlePrimary: `${baseClasses} 
          @bdc bg-blue-primary 
          @brc border-blue-primary 
          @brw border-px 
          @dy flex 
          @ani items-center
          @jyi justify-center
          @ht h-8 
          @pn relative 
          @brr rounded-full 
          @wh w-8 
          @ttc text-white`,
  transparentOutline: `${baseClasses}
          @dy flex flex-row
          @ani items-center
          @ttc text-blue-650
          @bdo hover:opacity-70
          @jyc justify-center
          @brr rounded-8px 
          @brw border
          @brc border-blue-650
          @pg px-8 py-3`
};

const DivSmartButton = ({
  children,
  SmartButtonRef,
  ...props
}) => /*#__PURE__*/React__default["default"].createElement("div", _extends({
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

  return /*#__PURE__*/React__default["default"].createElement(Link, props, /*#__PURE__*/React__default["default"].createElement("a", _extends({}, linkAttributes, {
    className: className
  }), children));
};

const contentTransitionProps$1 = {
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
    transitionProps: contentTransitionProps
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: srPopupWindowClasses
  }, /*#__PURE__*/React__default["default"].createElement(RenderCard, _extends({}, renderCardProps, {
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
const contentTransitionProps = {
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
}) => /*#__PURE__*/React__default["default"].createElement(transitionComponent.Transition, _extends({
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
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ModalPortal$1, _extends({
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
  }, set] = reactSpring.useSpring(() => ({
    y: modalHeight
  }));

  const open = ({
    canceled
  }) => {
    if (!isOpen) setIsOpen(true);
    set({
      y: 0,
      immediate: false,
      config: canceled ? reactSpring.config.wobbly : reactSpring.config.stiff
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
      config: { ...reactSpring.config.stiff,
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
  }, /*#__PURE__*/React__default["default"].createElement(reactSpring.a.div, {
    onClick: close,
    className: "fixed inset-0 bg-zinc-900 opacity-50",
    style: bgStyle
  }), /*#__PURE__*/React__default["default"].createElement(reactSpring.a.div, _extends({
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
    className: `relative w-screen h-90vh bg-white  rounded-t-2xl pt-5`
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute bg-white w-12 h-2 -top-4 left-1/2 transform -translate-x-1/2 rounded-full"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: srRenderCardContainerClasses,
    onTouchStart: () => setScrollActive(true),
    onTouchEnd: () => setScrollActive(false),
    onMouseDown: () => setScrollActive(true),
    onMouseLeave: () => setScrollActive(false)
  }, /*#__PURE__*/React__default["default"].createElement(RenderCard, _extends({
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
  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(Component, _extends({
    modalComponentId: props.modalComponentId ? props.modalComponentId : modalComponentId,
    setShow: children ? setShow : props.setShow,
    show: children ? show : props.show
  }, props)), children ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: srChildContainerClasses,
    onClick: () => setShow(true)
  }, children) : null);
};

const components = {
  SmartButton,
  Modal,
  ModalArray
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
