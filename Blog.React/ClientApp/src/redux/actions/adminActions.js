export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const DELETE_CATEGORY = "DELETE_CATEGORY";


export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export function ActionGetCategoryList(categories, totalRows) {
  return {
    type: GET_CATEGORY_LIST,
    categories,
    totalRows
  };
}

export function ActionDeleteCategory(id) {
  return {
    type: DELETE_CATEGORY,
    id
  };
}

// export function ActionGetProductList(products) {
//   return {
//     type: GET_PRODUCT_LIST,
//     products
//   };
// }

// export function ActionDeleteProduct(id) {
//   return {
//     type: DELETE_PRODUCT,
//     id
//   };
// }
