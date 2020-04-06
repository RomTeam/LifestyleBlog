
// export const CategoryActionConfig = {
//     apis: {
//       getDetails: "api/category/getbyid",
//       addUpdate: "api/category/addupdate"
//     },
//     url: {
//       list: "/admin/category"
//     },
//     title: "Add/Update Category",
//     rows: [
//       [
//         {
//           label: "Category Name",
//           type: "text",
//           name: "Name",
//           id: "name",
//           apiText: "name",
//           col: 6,
//           validations: [Validations.RequiredValidation]
//         },
//         {
//           label: "Category Type",
//           type: "select",
//           name: "Type",
//           id: "type",
//           apiText: "type",
//           col: 6,
//           dataSource: {
//             source: Constant.CategoryType,
//             url: null
//           },
//           validations: [Validations.RequiredValidation]
//         }
//       ],
//       [
//         {
//           label: "Parent",
//           type: "select",
//           name: "Parent",
//           id: "parent",
//           apiText: "parent",
//           col: 4,
//           dataType: "int",
//           dataSource: {
//             source: null,
//             url: "api/category/getparent"
//           }
//         },
//         {
//           label: "Url",
//           type: "text",
//           name: "Url",
//           id: "url",
//           col: 4,
//           apiText: "url"
//         },
//         {
//           label: "Order",
//           type: "text",
//           dataType: "int",
//           name: "Order",
//           id: "order",
//           col: 4,
//           apiText: "order"
//         }
//       ]
//     ]
//   };