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
import axios from 'axios'

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
  let [entity, setEntity] = useState({});
  let [seo, setSeo] = useState({});
  let [images, setImages] = useState({});
  useEffect(() => {
    if (id) {
      callApi(`${apis.getDetails}\\${id}`)
        .then((res) => {
          setEntity(res.data.entry);
          setSeo(res.data.seo);
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
    let inputs = target.querySelectorAll("input,select,checkbox");
    inputs.forEach((input) => {
      let value = input.type === "checkbox" ? input.checked : input.value;
      if (input.getAttribute("datatype") === "int")
        value = parseInt(!!value ? value : 0);
      if (images) {
        params = {...params, ...images};
      }
      params[input.name] = value;
    });
    params["ID"] = id ? parseInt(id) : 0;
    console.log(params);
    let res = await callApi(apis.addUpdate, "post", params);
    //Collect params from SEO section
    if (hasSeo) {
      let seoSection = target.querySelectorAll("div[id=seoSecion]")[0];
      let seoInputs = seoSection.querySelectorAll("input,textarea");
      seoInputs.forEach((input) => {
        seoParams[input.name] = input.value;
      });
      seoParams[entry] = parseInt(res.data.data);
      seoParams["ID"] = id ? parseInt(entity.seoID) : 0;
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
    let tempItem = { ...entity, ...seo };
    if (target.type === "checkbox") {
      tempItem[target.id] = target.checked;
    } else tempItem[target.id] = target.value;
    setEntity(tempItem);
    setSeo(tempItem);
  };

  const onGetImages = (file) => {
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
      const res = axios.post("https://localhost:44304/api/File/SigleUpload", formData, config);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  const seoInfoPanel = () => {
    if (hasSeo) {
      return (
        <GridItem xs={12} sm={12} md={6}>
          <Card id="seoSecion">
            <CardHeader color={color}>
              <h4 className={classes.cardTitleWhite}>
                {SeoConfig.SeoActionConfig.title}
              </h4>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
              {SeoConfig.SeoActionConfig.rows.map((row, index) => {
                return (
                  <GridContainer key={index}>
                    {row.map((col, index) => {
                      let colVal = seo ? seo[col.apiText] || "" : "";
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
      );
    }
  };

  const contentInfoPanel = () => {
    //if (Object.keys(entry).length) {
    return rows.map((row, index) => {
      return (
        <GridContainer key={index}>
          {row.map((col, index) => {
            let colVal = entity ? entity[col.apiText] || "" : "";
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
                  onGetImages={onGetImages}
                />
              </GridItem>
            );
          })}
        </GridContainer>
      );
    });
    //}
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <GridContainer>
          <GridItem xs={12} sm={12} md={hasSeo ? 6 : 12}>
            <Card>
              <CardHeader color={color}>
                <h4 className={classes.cardTitleWhite}>{title}</h4>
                <p className={classes.cardCategoryWhite}></p>
              </CardHeader>
              <CardBody>{contentInfoPanel()}</CardBody>
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
          {seoInfoPanel()}
        </GridContainer>
      </form>
    </Fragment>
  );
}
