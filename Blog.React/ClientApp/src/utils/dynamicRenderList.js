import React from "react";
import { Link } from "react-router-dom";
import Table from "./../components/Admin/table";
import GridContainer from "./../components/Admin/gridContainer";
import GridItem from "./../components/Admin/gridItem";
import Card from "./../components/Admin/card";
import CardBody from "./../components/Admin/cardBody";
import CardHeader from "./../components/Admin/cardHeader";
import { makeStyles, Icon, TextField, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CheckIcon from '@material-ui/icons/Check';

const styles = {
  cardHeader: {
    display: "flex",
    //justifyContent: "space-between"
  },

  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
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
      lineHeight: "1",
    },
  },
  search: {
    "& input": {
      color: "#FFFFFF",
    },
    "& :hover": {
      border: "none"
    }
  },
  icon: {
    padding: "3px",
    marginLeft: "-30px"
  }
};

const useStyles = makeStyles(styles);

export default function DynamicRenderList(props) {
  const classes = useStyles();
  let {
    tableData,
    config,
    onDelete,
    onPaging,
    totalRows,
    onSort,
    onSearch
  } = props;

  const onSearching = (e) => {
    onSearch(e.target.value);
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <h4 className={classes.cardTitleWhite}>Category List</h4>
                <Link to={config.url.addupdate}>
                  <p className={classes.cardCategoryWhite}>
                    Click here to create new
                  </p>
                </Link>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <TextField
                  className={classes.cardTitleWhite + " " + classes.search}
                  placeholder="Search..."
                  inputProps={{ "aria-label": "Search..." }}
                  fullWidth={true}
                  size="small"
                  onChange={onSearching}
                />
                <SearchIcon className={classes.icon}/>
              </GridItem>
            </GridContainer>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="info"
              tableData={tableData}
              config={config}
              onDelete={onDelete}
              onPaging={onPaging}
              totalRows={totalRows}
              onSort={onSort}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
