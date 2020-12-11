import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ComponentDescription = (props) => {
  const classes = useStyles();
  const [componentDescription, setComponentDescription] = React.useState("");

  const handleChange = (event) => {
    setComponentDescription(event.target.value);
    props.componentDescriptionChangeHandler(event.target.value);
    // props.searchComponentsHandler();
  };

  return (
    <div>
      <FormControl classDescription={classes.formControl}>
        {/* <InputLabel id="componentDescription">
          Component Description
        </InputLabel> */}
        <TextField
          id="componentDescription"
          label="Component Description"
          multiline
          variant="outlined"
          value={componentDescription}
          onChange={handleChange}
        />
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
};

export default ComponentDescription;
