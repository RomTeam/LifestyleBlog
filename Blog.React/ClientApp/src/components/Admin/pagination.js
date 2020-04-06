import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { PAGE_SIZE } from "../../constants/config";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "10px",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function CustomPagination(props) {
  const caculateTotalRow = () => {
    let odd = totalRows % PAGE_SIZE;
    if (odd === 0) return (totalRows - odd) / PAGE_SIZE;
    return (totalRows - odd) / PAGE_SIZE + 1;
  };

  let { onPaging, totalRows } = props;
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    onPaging(value);
  };
  
  return (
    <div className={classes.root}>
      <Pagination
        count={caculateTotalRow()}
        page={page}
        onChange={handleChange}
        variant="outlined"
        color="primary"
      />
    </div>
  );
}
