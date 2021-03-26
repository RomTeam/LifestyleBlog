import React, { useState, useEffect } from "react";
import callApi from "../../utils/callApi";
import Button from "@material-ui/core/Button";
import * as FileUploadAction from "../../redux/actions/adminActions";
import { connect } from "react-redux";

export default function Upload(props) {

  let {name, onUploadCompleted} = props;
  const saveFile = (e) => {
    console.log(e.target.files[0]);
    onUploadCompleted(e.target.files[0])
    // setFile(e.target.files[0]);
    // setFileName(e.target.files[0].name);
  };
  return (
    <div>
      <input name={name} type="file" onChange={saveFile}/>
    </div>
  );
}
