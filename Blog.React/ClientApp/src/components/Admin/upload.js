import React, { useState, useEffect } from "react";
import callApi from "../../utils/callApi";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import * as FileUploadAction from "../../redux/actions/adminActions";
import { connect } from "react-redux";

function Upload(props) {
  const { fileLimit, dropzoneText } = props;
  const [files, setFiles] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const getStream = (files) => {
    let data = [];
    files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (ev) => {
        data.push(ev.target.result);
      }
    });
    return data;
  };

  const handleSave = (files) => {
    //Saving files to state for further use and closing Modal.
    setFiles(files);
    setOpen(false);
    //console.log(getStream(files));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen.bind(this)}>Add Image</Button>
      <DropzoneDialog
        open={open}
        onSave={handleSave.bind(this)}
        acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={handleClose.bind(this)}
        filesLimit={fileLimit}
        dropzoneText={dropzoneText}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    files: state.uploadFileReducer.files,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCurrentFiles: (files) => {
      dispatch(FileUploadAction.ActionSaveFiles(files));
    },
    removeTempFiles: () => {
      dispatch(FileUploadAction.ActionRemoveFiles);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
