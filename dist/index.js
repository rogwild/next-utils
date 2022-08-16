Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var reactTable = require('react-table');

// import qs from "qs";

const getImageUrl = (obj, size = `medium`, BACKEND_URL) => {
  if (!obj) {
    return null;
  }

  const url = obj.formats?.[size]?.url || obj.url;

  return `${BACKEND_URL}${url}`;
};

const transformResponseItem = (resItem) => {
  if (isArray(resItem)) {
    return resItem.map((item) => transformResponseItem(item));
  }

  if (isObject(resItem)) {
    if (isArray(resItem.data)) {
      resItem = [...resItem.data];
    } else if (isObject(resItem.data)) {
      resItem = transformEntriesInObj(flatItemAttributes(resItem.data));
    } else if (resItem.data === null) {
      resItem = null;
    } else {
      resItem = transformEntriesInObj(flatItemAttributes(resItem));
    }

    for (const key in resItem) {
      resItem[key] = transformResponseItem(resItem[key]);
    }

    return resItem;
  }

  return resItem;
};

const transformPageBlock = (block, transformers) => {
  const key = block?._Component;

  if (!transformers?.[key]) {
    return null;
  }

  return transformers[key](block);
};

const isObject = (data) => data && typeof data === `object`;

const isArray = (data) => data && Array.isArray(data);

const flatItemAttributes = (data) => {
  if (!data?.attributes) return data;

  return {
    id: data?.id,
    ...data.attributes,
  };
};

const combineHeaders = ({ withAuth }) => {
  const headers = {};

  if (withAuth) {
    const token = localStorage.getItem(`jwt`);
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

const snakeToCamel = (str) => {
  return str.replace(/([-_][a-z])/gi, (char) => {
    return char.toUpperCase().replace(`-`, ``).replace(`_`, ``);
  });
};

const transformEntriesInObj = (item) => {
  if (isObject(item) && !isArray(item)) {
    const entries = Object.entries(item).map((entry) => {
      const key = snakeToCamel(entry[0]);

      let value = entry[1];

      if (isObject(value)) {
        value = transformEntriesInObj(value);
      } else if (isArray(value)) {
        value = value.map((elem) => transformEntriesInObj({ item: elem }));
      }

      return [key, value];
    });

    return Object.fromEntries(entries);
  }

  return item;
};

const removeEmptyFields = ({ data, passKey, files }) => {
  // console.log(`🚀 ~ removeEmptyFields ~ files`, files);
  let modified;
  if (typeof data === `object` && data !== null) {
    modified = {};
    if (Array.isArray(data)) {
      modified = [];
      for (const element of data) {
        modified.push(removeEmptyFields({ data: element, passKey, files }));
      }
    } else {
      for (const key of Object.keys(data)) {
        if (data[key] === `` && key !== `publishedAt`) {
          continue;
        }
        modified[key] = removeEmptyFields({
          data: data[key],
          passKey: `${passKey ? `${passKey}.` : ``}${key}`,
          files,
        });
      }
    }
  } else {
    modified = data;
  }
  return modified;
};

const appendFilesToFormData = (formData, files) => {
  // console.log(`🚀 ~ appendFilesToFormData ~ formData`, formData);
  if (Object.keys(files).length) {
    for (const key of Object.keys(files)) {
      // console.log(`🚀 ~ key`, key);
      if (Array.isArray(files[key])) {
        for (const [_, file] of files[key].entries()) {
          // console.log(`🚀 ~ file`, file, files[key]);
          formData.append(`files.${key}`, file);
        }
      } else {
        // console.log(`🚀 ~ appendFilesToFormData ~ key`, key);
        // console.log(`🚀 ~ file`, file, files[key]);
        formData.append(`files.${key}`, files[key]);
      }
    }
  }
};

var apiUtils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getImageUrl: getImageUrl,
  transformResponseItem: transformResponseItem,
  transformPageBlock: transformPageBlock,
  isObject: isObject,
  isArray: isArray,
  flatItemAttributes: flatItemAttributes,
  combineHeaders: combineHeaders,
  snakeToCamel: snakeToCamel,
  transformEntriesInObj: transformEntriesInObj,
  removeEmptyFields: removeEmptyFields,
  appendFilesToFormData: appendFilesToFormData
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

var index$1 = {
  useLookupTable,
};

var hooksUtils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': index$1
});

var index = {
  api: apiUtils,
  hooks: hooksUtils,
};

exports["default"] = index;
//# sourceMappingURL=index.js.map
