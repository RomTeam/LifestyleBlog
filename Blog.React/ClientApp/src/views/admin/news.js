import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import callApi from "../../utils/callApi";
import * as NewsActions from "../../redux/actions/adminActions";
import DynamicRenderList from "../../utils/dynamicRenderList";
import * as Config from "../../constants/newsConfig";

function News(props) {
  let [paging, setPaging] = useState({
    PageNum: 1,
    PageSize: 10,
    StrOrder: "CreatedDate desc",
    SearchText: '',
  });

  const onPaging = (pageNum) => {
    paging.PageNum = pageNum;
    props.getNews(paging);
  };

  const onSort = (strOrder) => {
    paging.StrOrder = strOrder;
    props.getNews(paging);
  };

  const onSearch = (searchText) => {
    paging.PageNum = 1;
    paging.SearchText = searchText;
    props.getNews(paging);
  }

  const onDelete = (id) => {
    props.deleteNews(id);
    if (props.categories.length === 1) {
      onPaging(paging.PageNum - 1);
    }
  };

  useEffect(() => {
    props.getNews(paging);
    return () => {};
  }, []);

  return (
    <DynamicRenderList
      config={Config.NewsListConfig}
      tableData={props.newses || []}
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
    newses: state.newsReducer.newses,
    totalRows: state.newsReducer.totalRows,
  };
};

const mapPropToDispatch = (dispatch) => {
  return {
    getNews: (params) => {
      callApi("api/news/getall", "post", params).then((res) => {
        console.log(res);
        dispatch(
            NewsActions.ActionNewsList(
            res.data.newses,
            res.data.totalRows
          )
        );
      });
    },
    deleteNews: (id) => {
      if (confirm("Please confirm to delete this record?")) {//eslint-disable-line
        callApi(`api/news/delete/${id}`, "delete")
          .then((res) => {
            dispatch(NewsActions.ActionDeleteNews(id));
          })
          .catch((err) => {});
      }
    },
  };
};

export default connect(mapStateToProps, mapPropToDispatch)(News);
