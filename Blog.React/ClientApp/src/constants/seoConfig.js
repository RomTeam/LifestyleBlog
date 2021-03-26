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
        name: "Seotitle",
        id: "seoTitle",
        apiText: "seoTitle",
        col: 6,
      },
    ],
    [
      {
        label: "SEO Keywords",
        type: "text",
        name: "SeoKeywords",
        id: "seoKeywords",
        col: 6,
        apiText: "seoKeywords",
      },
      {
        label: "Tags",
        type: "text",
        name: "SeoTags",
        id: "seoTags",
        col: 6,
        apiText: "seoTags",
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
        name: "SeoDescription",
        id: "seoDescription",
        apiText: "seoDescription",
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
      colData: "seoDescription",
    },
    {
      colTitle: "Title",
      colData: "seoTitle",
    },
    {
      colTitle: "Keywords",
      colData: "seoKeywords",
    },
    {
      colTitle: "Tags",
      colData: "seoTags",
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
