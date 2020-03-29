import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import styles from "../../assets/jss/admin-theme/components/customInputStyle";
import { Select } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function CustomInput(props) {
  const [error, setError] = useState(false);
  const [success, setSucess] = useState(false);
  const onChange = e => {
    let val = e.target.value;
    if (isRequired) {
      setError(!val);
      setSucess(val);
    }
  };

  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    type,
    dataSource,
    isRequired,
    defaultValue
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true
  });
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined
  });

  const renderControl = () => {
    switch (type) {
      case "select": {
        return (
          <Select
            onChange={onchange}
            classes={{
              root: marginTop,
              disabled: classes.disabled,
              underline: underlineClasses
            }}
            id={id}
            //{...inputProps}
          >
            <option aria-label="None" value=""></option>
            {dataSource.map((item, key) => {
              return (
                <option key={key} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </Select>
        );
      }
      default: {
        return (
          <Input
            classes={{
              root: marginTop,
              disabled: classes.disabled,
              underline: underlineClasses
            }}
            id={id}
            {...inputProps}
            onChange={onChange}
          />
        );
      }
    }
  };
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}

      {renderControl()}
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
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
  success: PropTypes.bool
};
