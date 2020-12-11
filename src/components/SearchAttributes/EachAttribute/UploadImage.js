import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

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

const UploadImage = (props) => {
  const classes = useStyles();
  const [componentName, setComponentName] = React.useState(
    "Please select a File"
  );

  const handleSelect = (event) => {
    console.log(event.target.files);
    setComponentName(event.target.files[0].name);
    // setComponentImage(event.target.files[0]);
    props.imageSelectHandler(event.target.files[0]);
  };

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={handleSelect}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
      <span>{componentName}</span>
    </div>
  );
};

export default UploadImage;
