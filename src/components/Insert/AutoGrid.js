import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import UploadImage from "../SearchAttributes/EachAttribute/UploadImage";
import UploadButton from "../SearchAttributes/EachAttribute/UploadButton";
import Button from "@material-ui/core/Button";
import ComponentName from "../SearchAttributes/EachAttribute/ComponentName";
import ComponentDescription from "../SearchAttributes/EachAttribute/ComponentDescription";
import ComponentOs from "../SearchAttributes/EachAttribute/ComponentOs";
import ComponentVersion from "../SearchAttributes/EachAttribute/ComponentVersion";
import Domain from "../SearchAttributes/EachAttribute/Domain";
import ComponentInput from "../SearchAttributes/EachAttribute/ComponentInput";
import ComponentOutput from "../SearchAttributes/EachAttribute/ComponentOutput";
import TechType from "../SearchAttributes/EachAttribute/TechType";
import ComponentFunction from "../SearchAttributes/EachAttribute/ComponentFunction";
import PrivateComponent from "../SearchAttributes/EachAttribute/PrivateComponent";

import { Row, Col } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const AutoGrid = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Row className="show-grid">
        <Col xs={2} md={2}></Col>
        <Col xs={8} md={8}>
          <Grid container alignItems={"center"}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <label>
                  <p style={{ color: "black" }}>Fill Details of Component</p>
                  <p style={{ color: "black" }}>
                    click submit to post the component to the repository
                  </p>
                </label>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <ComponentName
                  componentNameChangeHandler={props.componentNameChangeHandler}
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <ComponentDescription
                  componentDescriptionChangeHandler={
                    props.componentDescriptionChangeHandler
                  }
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <TechType
                  searchComponentsHandler={props.searchComponentsHandler}
                  techTypeChangeHandler={props.techTypeChangeHandler}
                />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <ComponentFunction
                  searchComponentsHandler={props.searchComponentsHandler}
                  componentFunctionChangeHandler={
                    props.componentFunctionChangeHandler
                  }
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <PrivateComponent
                  searchComponentsHandler={props.searchComponentsHandler}
                  privateComponentChangeHandler={
                    props.privateComponentChangeHandler
                  }
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Domain domainChangeHandler={props.domainChangeHandler} />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <ComponentVersion
                  componentVersionChangeHandler={
                    props.componentVersionChangeHandler
                  }
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <ComponentInput
                  componentInputChangeHandler={
                    props.componentInputChangeHandler
                  }
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <ComponentOutput
                  componentOutputChangeHandler={
                    props.componentOutputChangeHandler
                  }
                />
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <ComponentOs
                  componentOsChangeHandler={props.componentOsChangeHandler}
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <UploadImage imageSelectHandler={props.imageSelectHandler} />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                <UploadButton fileSelectHandler={props.fileSelectHandler} />
              </Paper>
            </Grid>
          </Grid>
          <Grid container alignItems={"center"}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <label>
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    onClick={props.componentUploadHandler}
                  >
                    Submit
                  </Button>
                </label>
              </Paper>
            </Grid>
          </Grid>
        </Col>
        <Col xs={2} md={2}></Col>
      </Row>
    </div>
  );
};

export default AutoGrid;
