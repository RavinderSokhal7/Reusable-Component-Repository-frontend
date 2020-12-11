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

const ComponentInput = (props) => {
  const classes = useStyles();
  const [ComponentInput, setComponentInput] = React.useState("");

  const handleChange = (event) => {
    setComponentInput(event.target.value);
    props.componentInputChangeHandler(event.target.value);
    // props.searchComponentsHandler();
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="ComponentInput">
          Component Function
        </InputLabel> */}
        <TextField
          id="ComponentInput"
          label="Component Input"
          variant="outlined"
          value={ComponentInput}
          onChange={handleChange}
        />
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
};

export default ComponentInput;
