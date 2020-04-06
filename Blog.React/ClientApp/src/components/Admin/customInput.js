import React, { useState, useEffect, Fragment } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { REQUIRED_RULE } from "../../constants/validationRules";
// @material-ui/core components
import {
  makeStyles,
  TextField,
  FormControl,
  InputLabel,
  Input,
  Select,
  FormHelperText
} from "@material-ui/core";
// @material-ui/icons
import { Clear, Check } from "@material-ui/icons";
// core components
import styles from "../../assets/jss/admin-theme/components/customInputStyle";
import callApi from "../../utils/callApi";
import { useParams } from "react-router-dom";
import CheckValidation from "../../utils/validation";

const useStyles = makeStyles(styles);

export default function CustomInput(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    type,
    dataSource,
    dataType,
    name,
    value,
    onChange,
    validations
  } = props;

  //-------STATE----------------------------------
  const [error, setError] = useState(false);
  const [success, setSucess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  let [dsDropDown, setDsDropDown] = useState([]);
  //-------END STATE------------------------------
  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
    [" " + classes.labelRoot]: true
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true
  });
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined
  });
  //-------FUNCTION---------------------------------
  const onTextChange = e => {
    let target = e.target;
    if (validations) {
      let rule = CheckValidation(validations, target.value);
      setError(!!rule?.ruleName);
      setErrorMsg(rule?.errorMessage);
    }
    onChange(e);
  };
  useEffect(() => {
    setIsRequired(false);
    if (validations) {
      let hasRequiredRule = validations.findIndex(
        r => r.ruleName === REQUIRED_RULE
      );
      setIsRequired(hasRequiredRule !== -1);
    }
    if (dataSource) {
      if (dataSource.source) setDsDropDown(dataSource.source);
      else {
        callApi(dataSource.url)
          .then(res => {
            setDsDropDown(res.data.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }, []);
  const renderControl = () => {
    switch (type) {
      case "select": {
        return (
          <Fragment>
            {labelText !== undefined ? (
              <InputLabel
                error={error}
                required={isRequired}
                shrink
                htmlFor={id}
                {...labelProps}
                className={classes.labelRoot}
              >
                {labelText}
              </InputLabel>
            ) : null}
            <Select
              native
              required={isRequired}
              error={error}
              value={value}
              name={name}
              onChange={onTextChange}
              // classes={{
              //   root: marginTop,
              //   disabled: classes.disabled,
              //   underline: underlineClasses
              // }}
              id={id}
              inputProps={{
                datatype: dataType
              }}
            >
              <option aria-label="None" value=""></option>
              {dsDropDown.map((item, key) => {
                return (
                  <option key={key} value={item.value}>
                    {item.text}
                  </option>
                );
              })}
            </Select>
            <FormHelperText error={true}>
              {error ? errorMsg : ""}
            </FormHelperText>
          </Fragment>
        );
      }
      default: {
        return (
          <TextField
            label={labelText}
            value={value}
            required={isRequired}
            error={error}
            name={name}
            classes={{
              //root: marginTop,
              //disabled: classes.disabled,
              //underline: underlineClasses
            }}
            inputProps={{
              datatype: dataType
            }}
            id={id}
            onChange={onTextChange}
            InputLabelProps={{
              shrink: true
            }}
            helperText={error ? errorMsg : ""}
          />
        );
      }
    }
  };
  //-------END FUNCTION------------------------------
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      {renderControl()}
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  onChange: PropTypes.func
};
