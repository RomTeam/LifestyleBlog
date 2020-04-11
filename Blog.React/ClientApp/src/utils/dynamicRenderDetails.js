import React, { useState, useEffect } from "react";
import GridContainer from "../components/Admin/gridContainer";
import GridItem from "../components/Admin/gridItem";
import Card from "../components/Admin/card";
import CardBody from "../components/Admin/cardBody";
import CardHeader from "../components/Admin/cardHeader";
import { makeStyles, FormGroup, Divider } from "@material-ui/core";
import CardFooter from "../components/Admin/cardFooter";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Admin/button";
import callApi from "./callApi";
import * as SeoConfig from "../constants/seoConfig";

const styles = {
  typo: {
    // paddingLeft: "25%",
    marginBottom: "40px",
    display: 'flex'
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#a39ba5",
    display: "block",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "13px",
    left: "0",
    width: "25%",
    margin: "auto 0"
  },
  noteContent: {
    maxWidth: "75% !important"
  },
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
};

const useStyles = makeStyles(styles);

export default function DynamicRenderDetails(props) {
  let params = useParams();
  let [sources, setSource] = useState({});
  useEffect(() => {
    callApi(`${apis.details}\\${params.id}`)
      .then((res) => {
        setSource(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);

  const classes = useStyles();
  const { title, url, columns, apis } = props.config;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={props.hasSeo ? 6 : 12}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>{title}</h4>
          </CardHeader>
          <CardBody>
            {columns.map((col, idx) => {
              if (!col.isNotShow) {
                return (
                  <div className={classes.typo} key={idx}>
                    <div className={classes.note}>{col.colTitle}</div>
                    <div className={classes.noteContent}>{sources[col.colData] ?? "N/A"}</div>
                  </div>
                );
              }
            })}
          </CardBody>
          <Divider />
          <CardFooter>
            <FormGroup row={true}>
              <Link to={`${url.update}/${params.id}`}>
                <Button color="success">Update</Button>
              </Link>
              <Link to={url.list}>
                <Button color="gray">Back</Button>
              </Link>
            </FormGroup>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>{SeoConfig.SeoDetailsConfig.title}</h4>
          </CardHeader>
          <CardBody>
            {SeoConfig.SeoDetailsConfig.columns.map((col, idx) => {
              if (!col.isNotShow) {
                return (
                  <div className={classes.typo} key={idx}>
                    <div className={classes.note}>{col.colTitle}</div>
                    <div className={classes.noteContent}>{sources[col.colData] ?? "N/A"}</div>
                  </div>
                );
              }
            })}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
