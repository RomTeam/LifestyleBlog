import React, {useState, useEffect} from "react";
import Button from "../components/Admin/button";
import CardFooter from "../components/Admin/cardFooter";
import GridContainer from "../components/Admin/gridContainer";
import GridItem from "../components/Admin/gridItem";
import Card from "../components/Admin/card";
import CardBody from "../components/Admin/cardBody";
import CardHeader from "../components/Admin/cardHeader";
import { makeStyles, FormGroup } from "@material-ui/core";
import CustomInput from "../components/Admin/customInput";
import { Link, useParams } from "react-router-dom";
import callApi from "./callApi";
const styles = makeStyles(theme => ({
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
}));

export default function DynamicRenderForm(props) {
  let params = useParams();
  let id = params?.id;
  let color = id ? "warning": "info";
  let { history, config } = props;
  const classes = styles();
  let {url, apis, title, rows} = props.config;
  //State
  let [itemDetails, setItemDetails] = useState();

  useEffect(()=> {
    if(id){
      callApi(`${apis.getDetails}\\${id}`).then(res=> {
        setItemDetails(res.data.data);
      }).catch(err=> {
        console.log(err);
      })
    }
  },[]);

  const onSubmit = e => {
    e.preventDefault();
    let params = {};
    //Collect parameters on form
    let inputs = e.target.querySelectorAll("input,select");
    inputs.forEach(input => {
      let value = input.value;
      if (input.getAttribute("datatype") === "int") value = parseInt(!!value ? value: 0);
      params[input.name] = value;
    });
    params["ID"] = id ? parseInt(id): 0;
    //Call Api
    callApi(apis.addUpdate, "post", params)
      .then(res => {
        history.push(url.list);
      })
      .catch(err => {
        console.log(err);
      });
  }
  const onChange = (e) => {
    let target = e.target;
    let tempItem = {...itemDetails};
     tempItem[target.id] = target.value;
     setItemDetails(tempItem);
  } 

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <form onSubmit={onSubmit}>
          <Card>
            <CardHeader color={color}>
              <h4 className={classes.cardTitleWhite}>
                {title}
              </h4>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
              {rows.map((row, index) => {
                return (
                  <GridContainer key={index}>
                    {row.map((col, index) => {
                      let colVal = itemDetails ? itemDetails[col.apiText] || "" : "";
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
                              fullWidth: true
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
        </form>
      </GridItem>
    </GridContainer>
  );
}
