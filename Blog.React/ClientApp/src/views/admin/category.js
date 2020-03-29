import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import {Link} from 'react-router-dom'
import Table from "../../components/Admin/table";
import GridContainer from "../../components/Admin/gridContainer";
import GridItem from "../../components/Admin/gridItem";
import Card from "../../components/Admin/card";
import CardBody from "../../components/Admin/cardBody";
import CardHeader from "../../components/Admin/cardHeader";
import { makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import callApi from "../../utils/callApi";
import * as CategoryAction from "../../redux/actions/adminActions";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

function Category(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getCategories();
    return () => {};
  });
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>
              Category List
              <Link to="/admin/category/add">Add</Link>
              {/* <Button color="primary">Add</Button> */}
            </h4>
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Type", "Parent", "Url", "Order", "Created Date", "Created By"]}
              tableRefs = {["name", "type", "parent", "url", "order", "createddate", "createdby"]}
              tableData={props.categories}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.categoryReducer
  };
};

const mapPropToDispatch = dispatch => {
  return {
    getCategories: () => {
      callApi("api/category/getall").then(res => {
        dispatch(CategoryAction.ActionGetCategoryList(res.data));
      });
    }
  };
};

export default connect(mapStateToProps, mapPropToDispatch)(Category);
