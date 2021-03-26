import * as Constant from "./contants";
import * as Validations from "./validationRules";

export const UserListConfig = {
  title: "User List",
  url: {
    addupdate: "/admin/users/addupdate",
    details: "/admin/users/details",
    list: "/admin/users",
  },
  apis: {
    delete: "api/users/delete",
  },
  header: [
    { label: "FullName", sortCol: "FullName", isSort: true },
    { label: "UserName", sortCol: "UserName", isSort: true },
    { label: "Address", sortCol: "Address", isSort: true },
    { label: "Email", sortCol: "Email", isSort: true },
    { label: "Phone", sortCol: "Phone", isSort: true },
    { label: "Role", sortCol: "Role", isSort: true },
    { label: "Active", sortCol: "IsActive", isSort: true},
    { label: "Actions", sort: "Actions", isSort: false },
  ],
  refData: [
    {ref: "fullName"},
    {ref: "userName"},
    {ref: "address"},
    {ref: "email"},
    {ref: "phone"},
    {ref: "role"},
    {ref: "isActive", type: Constant.DisplayType.checkBox}
  ]
};

export const UserActionConfig = {
  entry: "User",
  apis: {
    getDetails: "api/users/getbyid",
    addUpdate: "api/users/addupdate",
  },
  url: {
    list: "/admin/users",
  },
  title: "Add/Update User",
  rows: [
    [
      {
        label: "UserName",
        type: "text",
        name: "UserName",
        id: "userName",
        apiText: "userName",
        col: 4,
        validations: [Validations.RequiredValidation],
      },
      {
        label: "FullName",
        type: "text",
        name: "FullName",
        id: "fullName",
        apiText: "fullName",
        col: 4,
        validations: [Validations.RequiredValidation],
      },
      {
        label: "Address",
        type: "text",
        name: "Address",
        id: "address",
        apiText: "address",
        col: 4,
      }
    ],
    [
      
      {
        label: "Email",
        type: "text",
        name: "Email",
        id: "email",
        apiText: "email",
        col: 4,
        validations: [Validations.RequiredValidation],
      },
      {
        label: "Phone",
        type: "text",
        name: "Phone",
        id: "phone",
        apiText: "phone",
        col: 4,
      },
      {
        label: "Active",
        type: "checkbox",
        name: "IsActive",
        id: "isActive",
        col: 4,
        apiText: "isActive",
      }
    ],
    [
      {
        label: "Role",
        type: "select",
        name: "Role",
        id: "role",
        col: 4,
        apiText: "role",
        dataSource: {
          source: Constant.Role,
          url: null,
        },
      },
      {
        label: "Avatar",
        type: "file",
        name: "Avatar",
        id: "avatar",
        col: 4,
        apiText: "avatar",
      }
    ],
  ],
};

export const UserDetailsConfig = {
  apis: {
    details: "api/users/getbyid",
  },
  url: {
    list: "/admin/users",
    update: "/admin/users/addupdate",
  },
  title: "User Details",
  columns: [
    {
      colTitle: "Id",
      colData: "id",
      isNotShow: true,
    },
    {
      colTitle: "FullName",
      colData: "fullName",
    },
    {
      colTitle: "UserName",
      colData: "userName",
    },
    {
      colTitle: "Phone",
      colData: "phone",
    },
    {
      colTitle: "Address",
      colData: "address",
    },
    {
      colTitle: "Email",
      colData: "email",
    },
    {
      colTitle: "Role",
      colData: "role",
    },
    {
      colTitle: "Avatar",
      colData: "avatar",
    },
    {
      colTitle: "Active",
      colData: "isActive",
      type: Constant.DisplayType.checkBox
    },
    {
      colTitle: "Created Date",
      colData: "createdDate",
      type: Constant.DisplayType.dateTime
    },
  ],
};
