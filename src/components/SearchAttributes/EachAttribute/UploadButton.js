import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const UploadButton = (props) => {
  const classes = useStyles();
  const [componentName, setComponentName] = React.useState(
    "Please select a file"
  );
  const handleSelect = (event) => {
    console.log(event.target.files);
    setComponentName(event.target.files[0].name);
    // setComponentImage(event.target.files[0]);
    props.fileSelectHandler(event.target.files[0]);
  };

  return (
    <div className={classes.root}>
      <input
        accept="*/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleSelect}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <span>{componentName}</span>
    </div>
  );
};

export default UploadButton;
