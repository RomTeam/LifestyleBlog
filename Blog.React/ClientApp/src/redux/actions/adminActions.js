export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const GET_USER_LIST = "GET_USER_LIST";
export const DELETE_USER = "DELETE_USER";
export const SAVE_FILES_TEMPORARY = "SAVE_FILES_TEMPORARY";
export const DELETE_FILES = "DELETE_FILES";
export const GET_NEWS_LIST = "GET_NEWS_LIST";
export const DELETE_NEWS = "DELETE_NEWS";

export function ActionGetUserList(users, totalRows) {
  return {
    type: GET_USER_LIST,
    users,
    totalRows
  };
}

export function ActionDeleteUser(id) {
  return {
    type: DELETE_USER,
    id
  };
}

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

export function ActionNewsList(newses, totalRows) {
  return {
    type: GET_NEWS_LIST,
    newses,
    totalRows
  };
}

export function ActionDeleteNews(id) {
  return {
    type: DELETE_NEWS,
    id
  };
}

export function ActionSaveFiles(files) {
  return {
    type: SAVE_FILES_TEMPORARY,
    files
  };
}

export function ActionRemoveFiles() {
  return {
    type: DELETE_FILES,
  };
}
