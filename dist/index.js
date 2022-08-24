Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');
var qs = require('qs');
var react = require('react');
var reactTable = require('react-table');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

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
  const data = react.useMemo(() => {
    return passedData;
  }, [passedData.length]);
  const [sortBy, setSortBy] = react.useState(config.sortBy);
  const [filters, setFilters] = react.useState(initialFiltersState);
  const [localGlobalFilter, setLocalGlobalFilter] = react.useState(config.globalFilter || ``);
  const [localSelectedRowIds, setLocalSelectedRowIds] = react.useState(config.selectedRowIds || undefined);
  react.useMemo(() => config.useRowSelect ?? false, []);
  /**
   * State memoization to prevent data erasure when `data` changes
   * */

  const initialState = react.useMemo(() => {
    const state = {};
    if (sortBy) state.sortBy = sortBy;
    if (filters) state.filters = filters;
    if (localGlobalFilter) state.globalFilter = localGlobalFilter;
    if (localSelectedRowIds) state.selectedRowIds = localSelectedRowIds;
    return state;
  }, [sortBy, filters, localSelectedRowIds]);
  const filterTypes = react.useMemo(() => {
    return { ...baseFilters,
      ...config.filterTypes
    };
  }, []);
  react.useEffect(() => {
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

  react.useEffect(() => {
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

  react.useEffect(() => {
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

  react.useEffect(() => {
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
  const [inputValue, setInputValue] = react.useState(state.globalFilter);

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
    var _f = __read(react.useState(passedState), 2), localState = _f[0], setLocalState = _f[1];
    var _g = __read(react.useState(passedFiles), 2), localFiles = _g[0], setLocalFiles = _g[1];
    // console.log(`🚀 ~ passedFiles`, passedFiles, localFiles);
    react.useEffect(function () {
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
    react.useEffect(function () {
        // console.log(`🚀 ~ useEffect ~ localFiles`, localFiles);
        setParentFiles(localFiles);
    }, [localFiles]);
    react.useEffect(function () {
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

const useBreakpoint = breakpoint => {
  const [width, setWidth] = react.useState(undefined);
  react.useEffect(() => {
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

const useStyleRewriter = (baseClassName, className, cleared = true) => {
  return react.useMemo(() => {
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

const useDetectMouseover = (el, initialState) => {
  const [isActive, setIsActive] = react.useState(initialState);
  const handleOver = react.useCallback(e => {
    setIsActive(true);
  }, [el.current]);
  const handleOut = react.useCallback(e => {
    setIsActive(false);
  }, [el.current]);
  react.useEffect(() => {
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

const useDetectOutsideClick = (trigger, initialState) => {
  const [isActive, setIsActive] = react.useState(initialState);
  react.useEffect(() => {
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
  useDetectMouseover,
  useDetectOutsideClick,
  useLookupTable,
  useBreakpoint,
  useSetParentsInput,
  useStyleRewriter
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

// import * as components from "./components";
var index = {
    api: apiUtils,
    formatters: formatters,
    vanilla: vanilla,
    hooks: hooks,
};

exports["default"] = index;
//# sourceMappingURL=index.js.map
