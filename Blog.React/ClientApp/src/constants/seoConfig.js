export const SeoActionConfig = {
  apis: {
    addUpdate: "api/seo/addupdate",
  },
  title: "SEO Information",
  rows: [
    [
      {
        label: "SEO Url",
        type: "text",
        name: "SeoUrl",
        id: "seoUrl",
        apiText: "seoUrl",
        col: 6,
      },
      {
        label: "SEO Title",
        type: "text",
        name: "title",
        id: "title",
        apiText: "title",
        col: 6,
      },
    ],
    [
      {
        label: "SEO Keywords",
        type: "text",
        name: "Keywords",
        id: "keywords",
        col: 6,
        apiText: "keywords",
      },
      {
        label: "Tags",
        type: "text",
        name: "Tags",
        id: "tags",
        col: 6,
        apiText: "tags",
      },
    ],
    [
      {
        label: "H1",
        type: "text",
        name: "H1",
        id: "h1",
        col: 4,
        apiText: "h1",
      },
      {
        label: "H2",
        type: "text",
        name: "H2",
        id: "h2",
        col: 4,
        apiText: "h2",
      },
      {
        label: "H3",
        type: "text",
        name: "H3",
        id: "h3",
        col: 4,
        apiText: "h3",
      },
    ],
    [
      {
        label: "H4",
        type: "text",
        name: "H4",
        id: "h4",
        col: 4,
        apiText: "h4",
      },
      {
        label: "H5",
        type: "text",
        name: "H5",
        id: "h5",
        col: 4,
        apiText: "h5",
      },
      {
        label: "H6",
        type: "text",
        name: "H6",
        id: "h6",
        col: 4,
        apiText: "h6",
      },
    ],
    [
      {
        label: "SEO Description",
        type: "area",
        name: "Description",
        id: "description",
        apiText: "description",
        col: 12,
      },
    ],
  ],
};

export const SeoDetailsConfig = {
  title: "SEO Information",
  columns: [
    {
      colTitle: "SEO Url",
      colData: "seoUrl",
    },
    {
      colTitle: "Description",
      colData: "description",
    },
    {
      colTitle: "Title",
      colData: "title",
    },
    {
      colTitle: "Keywords",
      colData: "keywords",
    },
    {
      colTitle: "Tags",
      colData: "tags",
    },
    
    {
      colTitle: "H1",
      colData: "h1",
    },
    {
      colTitle: "H2",
      colData: "h2",
    },
    {
      colTitle: "H3",
      colData: "h3",
    },
    {
      colTitle: "H4",
      colData: "h4",
    },
    {
      colTitle: "H5",
      colData: "h5",
    },
    {
      colTitle: "H6",
      colData: "h6",
    },
  ],
};
