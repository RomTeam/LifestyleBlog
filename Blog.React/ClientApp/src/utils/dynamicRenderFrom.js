import React, { useState, useEffect, Fragment } from "react";
import Button from "../components/Admin/button";
import CardFooter from "../components/Admin/cardFooter";
import GridContainer from "../components/Admin/gridContainer";
import GridItem from "../components/Admin/gridItem";
import Card from "../components/Admin/card";
import CardBody from "../components/Admin/cardBody";
import CardHeader from "../components/Admin/cardHeader";
import { makeStyles, FormGroup, Divider } from "@material-ui/core";
import CustomInput from "../components/Admin/customInput";
import { Link, useParams } from "react-router-dom";
import callApi from "./callApi";
import * as SeoConfig from "../constants/seoConfig";

const styles = makeStyles((theme) => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
}));

export default function DynamicRenderForm(props) {
  let params = useParams();
  let id = params?.id;
  let color = id ? "warning" : "info";
  let { history, config, hasSeo } = props;
  const classes = styles();
  let { url, apis, title, rows, entry } = props.config;
  //State
  let [itemDetails, setItemDetails] = useState();

  useEffect(() => {
    if (id) {
      callApi(`${apis.getDetails}\\${id}`)
        .then((res) => {
          console.log(res.data.data);
          setItemDetails(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    let params = {};
    let seoParams = {};
    let target = e.target;
    //Collect parameters on form for Entry
    let inputs = target.querySelectorAll("input,select");
    inputs.forEach((input) => {
      let value = input.value;
      if (input.getAttribute("datatype") === "int")
        value = parseInt(!!value ? value : 0);
      params[input.name] = value;
    });
    params["ID"] = id ? parseInt(id) : 0;
    let res = await callApi(apis.addUpdate, "post", params);
    //Collect params from SEO section
    if (hasSeo) {
      let seoSection = target.querySelectorAll("div[id=seoSecion]")[0];
      let seoInputs = seoSection.querySelectorAll("input,textarea");
      seoInputs.forEach((input) => {
        seoParams[input.name] = input.value;
      });
      seoParams[entry] = parseInt(res.data.data);
      seoParams["ID"] = id ? parseInt(itemDetails.seoID) : 0;
      await callApi(
        SeoConfig.SeoActionConfig.apis.addUpdate,
        "post",
        seoParams
      );
    }
    history.push(url.list);
  };

  const onChange = (e) => {
    let target = e.target;
    let tempItem = { ...itemDetails };
    tempItem[target.id] = target.value;
    setItemDetails(tempItem);
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={hasSeo ? 6 : 12}>
            <Card>
              <CardHeader color={color}>
                <h4 className={classes.cardTitleWhite}>{title}</h4>
                <p className={classes.cardCategoryWhite}></p>
              </CardHeader>
              <CardBody>
                {rows.map((row, index) => {
                  return (
                    <GridContainer key={index}>
                      {row.map((col, index) => {
                        let colVal = itemDetails
                          ? itemDetails[col.apiText] || ""
                          : "";
                        return (
                          <GridItem xs={12} sm={12} md={col.col} key={index}>
                            <CustomInput
                              value={colVal}
                              labelText={col.label}
                              id={col.id}
                              name={col.name}
                              type={col.type}
                              dataSource={col.dataSource}
                              validations={col.validations}
                              dataType={col.dataType}
                              formControlProps={{
                                fullWidth: true,
                              }}
                              onChange={onChange}
                            />
                          </GridItem>
                        );
                      })}
                    </GridContainer>
                  );
                })}
              </CardBody>
              <CardFooter>
                <FormGroup row={true}>
                  <Button type="submit" color={color}>
                    Submit
                  </Button>
                  <Link to={config.url.list}>
                    <Button color="gray">Cancel</Button>
                  </Link>
                </FormGroup>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card id="seoSecion">
              <CardHeader color={color}>
                <h4 className={classes.cardTitleWhite}>{SeoConfig.SeoActionConfig.title}</h4>
                <p className={classes.cardCategoryWhite}></p>
              </CardHeader>
              <CardBody>
                {SeoConfig.SeoActionConfig.rows.map((row, index) => {
                  return (
                    <GridContainer key={index}>
                      {row.map((col, index) => {
                        let colVal = itemDetails
                          ? itemDetails[col.apiText] || ""
                          : "";
                        return (
                          <GridItem xs={12} sm={12} md={col.col} key={index}>
                            <CustomInput
                              value={colVal}
                              labelText={col.label}
                              id={col.id}
                              name={col.name}
                              type={col.type}
                              dataSource={col.dataSource}
                              validations={col.validations}
                              dataType={col.dataType}
                              formControlProps={{
                                fullWidth: true,
                              }}
                              onChange={onChange}
                            />
                          </GridItem>
                        );
                      })}
                    </GridContainer>
                  );
                })}
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </form>
    </Fragment>
  );
}
