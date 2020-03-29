import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import CustomInput from "../../components/Admin/customInput";
import Button from "../../components/Admin/button";
// import CardAvatar from "components/Card/CardAvatar.js";
import CardFooter from "../../components/Admin/cardFooter";
import GridContainer from "../../components/Admin/gridContainer";
import GridItem from "../../components/Admin/gridItem";
import Card from "../../components/Admin/card";
import CardBody from "../../components/Admin/cardBody";
import CardHeader from "../../components/Admin/cardHeader";
import { useState } from "react";
import callApi from "../../utils/callApi";
import { CategoryType } from "../../contants/contants";
import { FormGroup } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function CategoryActions() {
  const classes = useStyles();
  const [parents, setParent] = useState([]);
  useEffect(() => {
    callApi("api/category/getparent")
      .then(res => {
        setParent(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Add/Update Category</h4>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Category Name"
                    id="name"
                    isRequired={true}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Type"
                    id="type"
                    type="select"
                    dataSource={CategoryType}
                    isRequired={true}
                    defaultValue="Main"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Parent"
                    id="parent"
                    type="select"
                    dataSource={parents}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Url"
                    id="url"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Order"
                    id="order"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <FormGroup row={true}>
                <Button color="success">Submit</Button>
                <Link to="/admin/category"><Button color="gray">Cancel</Button></Link>
              </FormGroup>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
