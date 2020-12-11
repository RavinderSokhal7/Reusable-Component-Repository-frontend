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

const ComponentFuntion = (props) => {
  const classes = useStyles();
  const [componentFunction, setComponentFunction] = React.useState("");

  const handleChange = (event) => {
    setComponentFunction(event.target.value);
    props.componentFunctionChangeHandler(event.target.value);
    // props.searchComponentsHandler();
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="componentFunction">
          Component Function
        </InputLabel> */}
        <TextField
          id="componentFunction"
          label="Component Function"
          variant="outlined"
          value={componentFunction}
          onChange={handleChange}
        />
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
};

export default ComponentFuntion;
