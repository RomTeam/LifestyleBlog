import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import callApi from "../../utils/callApi";
import * as UserActions from "../../redux/actions/adminActions";
import DynamicRenderList from "../../utils/dynamicRenderList";
import * as Config from "../../constants/userConfig";

function Users(props) {
  let [paging, setPaging] = useState({
    PageNum: 1,
    PageSize: 10,
    StrOrder: "CreatedDate desc",
    SearchText: '',
  });

  const onPaging = (pageNum) => {
    paging.PageNum = pageNum;
    props.getUsers(paging);
  };

  const onSort = (strOrder) => {
    paging.StrOrder = strOrder;
    props.getUsers(paging);
  };

  const onSearch = (searchText) => {
    paging.PageNum = 1;
    paging.SearchText = searchText;
    props.getUsers(paging);
  }

  const onDelete = (id) => {
    props.deleteCategory(id);
    if (props.categories.length === 1) {
      onPaging(paging.PageNum - 1);
    }
  };

  useEffect(() => {
    props.getUsers(paging);
    return () => {};
  }, []);

  return (
    <DynamicRenderList
      config={Config.UserListConfig}
      tableData={props.users || []}
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
    users: state.userReducer.users,
    totalRows: state.userReducer.totalRows,
  };
};

const mapPropToDispatch = (dispatch) => {
  return {
    getUsers: (params) => {
      callApi("api/users/getall", "post", params).then((res) => {
        dispatch(
            UserActions.ActionGetUserList(
            res.data.users,
            res.data.totalRows
          )
        );
      });
    },
    deleteCategory: (id) => {
      if (confirm("Please confirm to delete this record?")) {//eslint-disable-line
        callApi(`api/users/delete/${id}`, "delete")
          .then((res) => {
            dispatch(UserActions.ActionDeleteUser(id));
          })
          .catch((err) => {});
      }
    },
  };
};

export default connect(mapStateToProps, mapPropToDispatch)(Users);
