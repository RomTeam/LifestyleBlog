import React, { Fragment } from "react";
import { useTheme, makeStyles, withStyles } from "@material-ui/styles";
import * as Theme from './../themes/theme'

const useStyle = makeStyles(theme => ({
    root: {
      background: theme.background,
      border: 0,
      fontSize: 16,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px"
    }
  }));

function MaterialUi(props) {
    console.log(props);
    console.log(useTheme());
  let stylese = useStyle();
  
  return (
      <Fragment>
      <button type="button" className={stylese.root}></button>
      <div className={props.classes.root}>Demo material ui - class {props.classes.root}</div></Fragment>
  );
}

export default withStyles(Theme.styles)(MaterialUi);
