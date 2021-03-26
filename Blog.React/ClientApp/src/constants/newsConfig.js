import * as Constant from "./contants";
import * as Validations from "./validationRules";

export const NewsListConfig = { 
    title: "News List",
    url: {
      addupdate: "/admin/news/addupdate",
      details: "/admin/news/details",
      list: "/admin/news",
    },
    apis: {
      delete: "api/news/delete",
    },
    header: [
      { label: "Title", sortCol: "Title", isSort: true },
      // { label: "Introduction", sortCol: "Introduction", isSort: false },
      // { label: "Content", sortCol: "Content", isSort: false },
      // { label: "MainImg", sortCol: "MainImg", isSort: false },
      { label: "Views", sortCol: "Views", isSort: true },
      { label: "Popular", sortCol: "IsPopular", isSort: false },
      { label: "Approved", sortCol: "IsApproved", isSort: false},
      { label: "Actions", sort: "Actions", isSort: false },
    ],
    refData: [
      {ref: "title"},
      // {ref: "introduction"},
      // {ref: "content"},
      // {ref: "mainImg"},
      {ref: "views"},
      {ref: "isPopular", type: `${Constant.DisplayType.checkBox}`},
      {ref: "isApproved", type: `${Constant.DisplayType.checkBox}`}
    ]
}

export const NewsActionConfig = {
    entry: "News",
    apis: {
      getDetails: "api/news/getbyid",
      addUpdate: "api/news/addupdate",
    },
    url: {
      list: "/admin/news",
    },
    title: "Add/Update News",
    rows: [
      [
        {
          label: "Title",
          type: "text",
          name: "Title",
          id: "title",
          apiText: "title",
          col: 4,
          validations: [Validations.RequiredValidation],
        },
        {
          label: "Introduction",
          type: "text",
          name: "Introduction",
          id: "introduction",
          apiText: "introduction",
          col: 8,
          validations: [Validations.RequiredValidation],
        }
      ],
      [
        {
            label: "Content",
            type: "text",
            name: "Content",
            id: "content",
            apiText: "content",
            col: 12,
            validations: [Validations.RequiredValidation],
          }
      ],
      [
        
        {
          label: "Main Img",
          type: "file",
          name: "MainImg",
          id: "mainImg",
          apiText: "mainImg",
          col: 3,
          validations: [Validations.RequiredValidation],
        },
        {
          label: "Sub Img",
          type: "text",
          name: "SubImg",
          id: "subImg",
          apiText: "subImg",
          col: 3,
        },
        {
          label: "Popular",
          type: "checkbox",
          name: "IsPopular",
          id: "isPopular",
          col: 3,
          apiText: "isPopular",
        }
      ],
      [
        {
          label: "Approved",
          type: "checkbox",
          name: "IsApproved",
          id: "isApproved",
          col: 3,
          apiText: "isApproved"
        },
      ],
    ],
  };


  export const NewsDetailsConfig = {
    apis: {
      details: "api/news/getbyid",
    },
    url: {
      list: "/admin/news",
      update: "/admin/news/addupdate",
    },
    title: "News Details",
    columns: [
      {
        colTitle: "Id",
        colData: "id",
        isNotShow: true,
      },
      {
        colTitle: "Title",
        colData: "title",
      },
      {
        colTitle: "Introduction",
        colData: "introduction",
      },
      {
        colTitle: "Content",
        colData: "content",
      },
      {
        colTitle: "MainImg",
        colData: "mainImg",
        type: Constant.DisplayType.img
      },
      {
        colTitle: "SubImg",
        colData: "subImg",
        type: Constant.DisplayType.img
      },
      {
        colTitle: "Views",
        colData: "views",
      },
      {
        colTitle: "Avatar",
        colData: "avatar",
      },
      {
        colTitle: "Popular",
        colData: "isPopular",
        type: Constant.DisplayType.checkBox
      },
      {
        colTitle: "Approved",
        colData: "isApproved",
        type: Constant.DisplayType.checkBox
      },
      {
        colTitle: "CreatedDate",
        colData: "createdDate",
        type: Constant.DisplayType.dateTime
      }
    ],
  };