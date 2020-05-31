import * as Constant from "./contants";
import * as Validations from "./validationRules";

export const CategoryListConfig = {
  title: "Category List",
  url: {
    addupdate: "/admin/category/addupdate",
    details: "/admin/category/details",
    list: "/admin/category"
  },
  apis: {
    delete: "api/category/delete"
  },
  header: [
    { label: "Name", sortCol: "Name", isSort: true },
    { label: "Type", sortCol: "Type", isSort: true },
    { label: "Parent", sortCol: "Parent", isSort: true },
    { label: "Url", sortCol: "Url", isSort: true },
    { label: "Order", sortCol: "Order", isSort: true },
    { label: "Actions", sort: "Actions", isSort: false }
  ],
  refData: [
    {ref: "name"},
    {ref: "type"},
    {ref: "parentName"},
    {ref: "url"},
    {ref: "order"}
  ]
};

export const CategoryActionConfig = {
  entry: "Category",
  apis: {
    getDetails: "api/category/getbyid",
    addUpdate: "api/category/addupdate"
  },
  url: {
    list: "/admin/category"
  },
  title: "Add/Update Category",
  rows: [
    [
      {
        label: "Category Name",
        type: "text",
        name: "Name",
        id: "name",
        apiText: "name",
        col: 6,
        validations: [Validations.RequiredValidation]
      },
      {
        label: "Category Type",
        type: "select",
        name: "Type",
        id: "type",
        apiText: "type",
        col: 6,
        dataSource: {
          source: Constant.CategoryType,
          url: null
        },
        validations: [Validations.RequiredValidation]
      }
    ],
    [
      {
        label: "Parent",
        type: "select",
        name: "Parent",
        id: "parent",
        apiText: "parent",
        col: 4,
        dataType: "int",
        dataSource: {
          source: null,
          url: "api/category/getparent"
        }
      },
      {
        label: "Url",
        type: "text",
        name: "Url",
        id: "url",
        col: 4,
        apiText: "url"
      },
      {
        label: "Order",
        type: "text",
        dataType: "int",
        name: "Order",
        id: "order",
        col: 4,
        apiText: "order"
      }
    ]
  ]
};

export const CateogryDetailsConfig = {
  apis: {
    details: "api/category/getbyid"
  },
  url: {
    list: "/admin/category",
    update: "/admin/category/addupdate"
  },
  title: "Category Details",
  columns: [
    {
      colTitle: "Id",
      colData: "id",
      isNotShow: true
    },
    {
      colTitle: "Category Name",
      colData: "name"
    },
    {
      colTitle: "Category Type",
      colData: "type"
    },
    {
      colTitle: "Category Parent",
      colData: "parentName"
    },
    {
      colTitle: "Url",
      colData: "url"
    },
    {
      colTitle: "Order",
      colData: "order"
    },
    {
      colTitle: "Created By",
      colData: "createdBy"
    },
    {
      colTitle: "Created Date",
      colData: "createdDate"
    }
  ]
};
