import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import callApi from "../../utils/callApi";
import * as CategoryAction from "../../redux/actions/adminActions";
import DynamicRenderList from "../../utils/dynamicRenderList";
import * as Config from "../../constants/categoryConfig";

function Category(props) {
  let [paging, setPaging] = useState({
    PageNum: 1,
    PageSize: 10,
    StrOrder: "CreatedDate desc",
    SearchText: '',
  });
  let [sortExp, setSortExp] = useState("asc");

  const onPaging = (pageNum) => {
    paging.PageNum = pageNum;
    props.getCategories(paging);
  };

  const onSort = (strOrder) => {
    paging.StrOrder = strOrder;
    props.getCategories(paging);
  };

  const onSearch = (searchText) => {
    paging.SearchText = searchText;
    props.getCategories(paging);
  }

  const onDelete = (id) => {
    props.deleteCategory(id);
    if (props.categories.length === 1) {
      onPaging(paging.PageNum - 1);
    }
  };

  useEffect(() => {
    props.getCategories(paging);
    return () => {};
  }, {});

  return (
    <DynamicRenderList
      config={Config.CategoryListConfig}
      tableRefs={["name", "type", "parent", "url", "order"]}
      tableData={props.categories || []}
      onDelete={onDelete}
      onPaging={onPaging}
      onSort={onSort}
      onSearch = {onSearch}
      totalRows={props.totalRows}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoryReducer.categories,
    totalRows: state.categoryReducer.totalRows,
  };
};

const mapPropToDispatch = (dispatch) => {
  return {
    getCategories: (params) => {
      callApi("api/category/getall", "post", params).then((res) => {
        dispatch(
          CategoryAction.ActionGetCategoryList(
            res.data.categories,
            res.data.totalRows
          )
        );
      });
    },
    deleteCategory: (id) => {
      if (confirm("Please confirm to delete this record?")) {//eslint-disable-line
        callApi(`api/category/delete/${id}`, "delete")
          .then((res) => {
            dispatch(CategoryAction.ActionDeleteCategory(id));
          })
          .catch((err) => {});
      }
    },
  };
};

export default connect(mapStateToProps, mapPropToDispatch)(Category);
