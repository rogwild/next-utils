import { useMemo, useState, useEffect } from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useExpanded,
  useRowSelect,
} from "react-table";

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
  const data = useMemo(() => {
    return passedData;
  }, [passedData.length]);

  const [sortBy, setSortBy] = useState(config.sortBy);
  const [filters, setFilters] = useState(initialFiltersState);
  const [localGlobalFilter, setLocalGlobalFilter] = useState(
    config.globalFilter || ``
  );

  const [localSelectedRowIds, setLocalSelectedRowIds] = useState(
    config.selectedRowIds || undefined
  );

  const shouldUseRowSelect = useMemo(() => config.useRowSelect ?? false, []);

  /**
   * State memoization to prevent data erasure when `data` changes
   * */
  const initialState = useMemo(() => {
    const state = {};
    if (sortBy) state.sortBy = sortBy;

    if (filters) state.filters = filters;

    if (localGlobalFilter) state.globalFilter = localGlobalFilter;

    if (localSelectedRowIds) state.selectedRowIds = localSelectedRowIds;

    return state;
  }, [sortBy, filters, localSelectedRowIds]);

  const filterTypes = useMemo(() => {
    return { ...baseFilters, ...config.filterTypes };
  }, []);

  useEffect(() => {
    if (data.length && config.selectedRowIds) {
      setLocalSelectedRowIds(config.selectedRowIds);
    }
  }, [data]);

  const tableInstance = useTable(
    {
      columns,
      data,
      filterTypes,
      initialState,
      getRowId,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    useRowSelect
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
  useEffect(() => {
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
  useEffect(() => {
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

  useEffect(() => {
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

  const [inputValue, setInputValue] = useState(state.globalFilter);

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

export default useLookupTable;

/**
 * `columns` documentation for `Storybook`
 */
const columnsDoc = createArgDocumentation({
  title: `columns`,
  description: `An array of objects \`ColumnItemObject\` that characterizes the display of columns for sorting and filtering items. It combines rendering, filtering and sorting parameters.`,
  type: `array`,
  detail: `Header: string,\naccessor: string,\n[hidden]: Boolean,\n[Filter]: Function,\n[filter]: string,\n[className]: string`,
  defaultValue: `[]`,
  isRequired: true,
});

/**
 * `data` documentation for `Storybook`
 */
const dataDoc = createArgDocumentation({
  title: `data`,
  description: `An array of objects`,
  type: `array`,
  detail: `Any type of arrays, where placed objects`,
  defaultValue: `[]`,
  isRequired: true,
});

/**
 * `config` documentation for `Storybook`
 */
const configDoc = createArgDocumentation({
  title: `config`,
  description: `A hook configuration object and setting the initial value of the data used in the hook functions. Used when working with realtime data. Since if you do not set \`initialState\`, then when the input data changes, filtering and sorting take an init value`,
  type: `object`,
  detail: `sortBy: [{ id: string }],\nfilters: [{ id: string, value: any }],\nglobalFilter: string,\nselectedRowIds: [{ rowId: string }],\nuseRowSelect: boolean,\nfilterTypes: { string: function }`,
  defaultValue: `{ selectedRowIds: [] }`,
  isRequired: false,
});

/**
 * `return` documentation for `Storybook`
 */
const returnDoc = createArgDocumentation({
  title: `return`,
  description: `Object returned from the hook. All information on the returned data can be found in the documentation React Table (https://react-table.tanstack.com/docs/api/overview), by entering the corresponding key in the search (\`onInputChange\`, \`headerGroups\`).`,
  type: `object`,
  detail: `inputValue: string\nonInputChange: function\nheaderGroups: array\nrows: array\nprepareRow: function\nstate: object\ntoggleRowExpanded: function`,
  isRequired: false,
});

/**
 * `Storybook` default export object with documentation for `props` and `return`
 */
export const sbDocumentation = {
  component: useLookupTable,
  title: `Hooks/useLookupTable`,
  argTypes: {
    ...columnsDoc,
    ...dataDoc,
    ...configDoc,
    ...returnDoc,
  },
  parameters: {
    docs: {
      description: {
        component: `Hook that transforms data suitable for display in a table. Adds handlers to work with sorting, filtering and searching.`,
      },
    },
  },
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
const createArgDocumentation = ({
  title,
  description,
  type,
  detail,
  defaultValue,
  isRequired = false,
}) => {
  const documentation = {
    [title]: {
      description,
      table: {
        type: {
          summary: type,
          detail,
        },
        defaultValue: {
          summary: defaultValue,
          detail: undefined,
        },
      },
      type: {
        name: type,
        required: isRequired,
      },
    },
  };

  return documentation;
};
