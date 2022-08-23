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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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
            resItem = __spreadArray([], resItem.data, true);
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

// import qs from "qs";
var getImageUrl = function (obj, size, BACKEND_URL) {
    var _a, _b;
    if (size === void 0) { size = "medium"; }
    if (!obj) {
        return null;
    }
    var url = ((_b = (_a = obj.formats) === null || _a === void 0 ? void 0 : _a[size]) === null || _b === void 0 ? void 0 : _b.url) || obj.url;
    return "".concat(BACKEND_URL).concat(url);
};
var transformPageBlock = function (block, transformers) {
    var key = block === null || block === void 0 ? void 0 : block._Component;
    if (!(transformers === null || transformers === void 0 ? void 0 : transformers[key])) {
        return null;
    }
    return transformers[key](block);
};
var removeEmptyFields = function (_a) {
    var data = _a.data, passKey = _a.passKey, files = _a.files;
    // console.log(`🚀 ~ removeEmptyFields ~ files`, files);
    var modified;
    if (typeof data === "object" && data !== null) {
        modified = {};
        if (Array.isArray(data)) {
            modified = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var element = data_1[_i];
                modified.push(removeEmptyFields({ data: element, passKey: passKey, files: files }));
            }
        }
        else {
            for (var _b = 0, _c = Object.keys(data); _b < _c.length; _b++) {
                var key = _c[_b];
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
    }
    else {
        modified = data;
    }
    return modified;
};
var appendFilesToFormData = function (formData, files) {
    // console.log(`🚀 ~ appendFilesToFormData ~ formData`, formData);
    if (Object.keys(files).length) {
        for (var _i = 0, _a = Object.keys(files); _i < _a.length; _i++) {
            var key = _a[_i];
            // console.log(`🚀 ~ key`, key);
            if (Array.isArray(files[key])) {
                for (var _b = 0, _c = files[key].entries(); _b < _c.length; _b++) {
                    var _d = _c[_b]; _d[0]; var file = _d[1];
                    // console.log(`🚀 ~ file`, file, files[key]);
                    formData.append("files.".concat(key), file);
                }
            }
            else {
                // console.log(`🚀 ~ appendFilesToFormData ~ key`, key);
                // console.log(`🚀 ~ file`, file, files[key]);
                formData.append("files.".concat(key), files[key]);
            }
        }
    }
};
var ApiClient = Api;
var transformResponseItem = transformResponseItem$1;

var apiUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getImageUrl: getImageUrl,
    transformPageBlock: transformPageBlock,
    removeEmptyFields: removeEmptyFields,
    appendFilesToFormData: appendFilesToFormData,
    ApiClient: ApiClient,
    transformResponseItem: transformResponseItem
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
  return rows.filter((row) => {
    const rowValue = row[prefix][accessor];

    return rowValue !== undefined
      ? String(rowValue)
          .toLowerCase()
          .startsWith(String(filterValue).toLowerCase())
      : true;
  });
};

const baseFilters = {
  text,
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
  config = { selectedRowIds: [] },
  initialFiltersState = [],
}) => {
  const data = react.useMemo(() => {
    return passedData;
  }, [passedData.length]);

  const [sortBy, setSortBy] = react.useState(config.sortBy);
  const [filters, setFilters] = react.useState(initialFiltersState);
  const [localGlobalFilter, setLocalGlobalFilter] = react.useState(
    config.globalFilter || ``
  );

  const [localSelectedRowIds, setLocalSelectedRowIds] = react.useState(
    config.selectedRowIds || undefined
  );

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
    return { ...baseFilters, ...config.filterTypes };
  }, []);

  react.useEffect(() => {
    if (data.length && config.selectedRowIds) {
      setLocalSelectedRowIds(config.selectedRowIds);
    }
  }, [data]);

  const tableInstance = reactTable.useTable(
    {
      columns,
      data,
      filterTypes,
      initialState,
      getRowId,
    },
    reactTable.useGlobalFilter,
    reactTable.useFilters,
    reactTable.useSortBy,
    reactTable.useExpanded,
    reactTable.useRowSelect
  );

  const {
    headerGroups,
    rows,
    setGlobalFilter,
    prepareRow,
    toggleRowExpanded,
    getTableBodyProps,
    getTableProps,
    state,
    toggleAllRowsSelected,
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
    rows?.map((row) => {
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

    headerGroups[0].headers.map((header) => {
      if (header?.isSorted) {
        setSortBy([{ id: header.id, desc: !!header.isSortedDesc }]);
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

    headerGroups[0].headers.map((header) => {
      if (header.filterValue) {
        setFilters([{ id: header.id, value: header.filterValue }]);
        foundFiltered = true;
      }
    });

    if (!foundFiltered) setFilters([]);
  }, [rows]);

  const [inputValue, setInputValue] = react.useState(state.globalFilter);

  const onGlobalFilterChange = (value) => {
    setGlobalFilter(value || undefined);
  };

  const onInputChange = (e) => {
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
    toggleAllRowsSelected,
  };
};

const hooks = {
  useLookupTable,
};

var index = {
    api: apiUtils,
    hooks: hooks,
};

exports["default"] = index;
//# sourceMappingURL=index.js.map
