import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Paper,
  Typography,
  Divider,
  Button,
  Box,
  Grid,
  withTheme
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

export default function FormInput() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="div" spacing={2}>
        <Typography variant="h5" component="h3">
          Thêm / Cập nhật
        </Typography>
      </Box>

      <Divider />
      <form noValidate autoComplete="off">
        <Grid
          container
          spacing={1}
          m={5}
          direction="row"
          justify="space-around"
        >
          <Grid item xs={3}>
            <TextField label="Standard secondary" color="secondary" />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Standard secondary" color="secondary" />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Standard secondary" color="secondary" />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Standard secondary" color="secondary" />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          m={5}
          direction="row"
          justify="space-around"
        >
          <Grid item xs={4}>
            {/* <TextField
              id="standard-secondary"
              label="Standard secondary"
              color="secondary"
            /> */}
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Standard secondary" color="secondary" />
          </Grid>
          <Grid item xs={4}>
            <TextField label="Standard secondary" color="secondary" />
          </Grid>
        </Grid>
        <Divider />
        <Box variant="h4" component="h4">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Box>
      </form>
    </div>
  );
}
