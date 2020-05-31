import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";
import Button from "../../components/Admin/button";
// core components
import styles from "../../assets/jss/admin-theme/components/tableStyle";
import CustomPagination from "./pagination";
import * as Constant from "../../constants/contants";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const {
    tableData,
    tableHeaderColor,
    config,
    onPaging,
    totalRows,
    onDelete,
    onSort,
  } = props;

  let [sortExp, setSortExp] = useState({
    col: "CreatedDate",
    sortClick: 0,
  });

  const onSortClick = (colName) => {
    let strOrder = "CreatedDate Asc";
    if (sortExp.col != colName) sortExp.sortClick = 0;
    if (sortExp.sortClick < 2) {
      sortExp.col = colName;
      sortExp.sortClick += 1;
      strOrder =
        sortExp.sortClick === 1 ? `[${colName}] asc` : `[${colName}] desc`;
    } else {
      setSortExp({
        col: "CreatedDate",
        sortClick: 0,
      });
      strOrder = "CreatedDate desc";
    }
    onSort(strOrder);
  };

  const classes = useStyles();

  const getDisplayContent = (prop, refData) => {
    let val = prop[refData.ref];
    switch (refData.type) {
      case Constant.DisplayType.checkBox: {
        return (val ? <CheckCircleIcon color="primary"/> : <CancelIcon color="secondary"/>);
      }
      default:
        return val;
    }
  };

  const generateListContent = () => {
    if(tableData.length != 0)
    {
      return tableData.map((prop, key) => {
        return (
          <TableRow key={key} className={classes.tableBodyRow}>
            {config.refData.map((item, key) => {
              return (
                <TableCell className={classes.tableCell} key={key}>
                  {getDisplayContent(prop, item)}
                </TableCell>
              );
            })}
            <TableCell>
              <Link to={`${config.url.details}/${prop.id}`}>
                <Button color="success" size="sm">
                  Details
                </Button>
              </Link>
              <Link to={`${config.url.addupdate}/${prop.id}`}>
                <Button color="warning" size="sm">
                  Update
                </Button>
              </Link>
              <Button
                color="danger"
                size="sm"
                onclick={onDelete.bind(this, prop.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        );
      })
    }
  }

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
          <TableRow className={classes.tableHeadRow}>
            {config.header.map((prop, key) => {
              return (
                <TableCell
                  className={classes.tableCell + " " + classes.tableHeadCell}
                  key={key}
                >
                  {prop.isSort ? (
                    <div
                      className={classes.dflex}
                      onClick={() => {
                        onSortClick(prop.sortCol);
                      }}
                    >
                      {prop.label}
                    </div>
                  ) : (
                    prop.label
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {generateListContent()}
        </TableBody>
      </Table>
      <CustomPagination onPaging={onPaging} totalRows={totalRows} />
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  //tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
