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

const ComponentOutput = (props) => {
  const classes = useStyles();
  const [ComponentOutput, setComponentOutput] = React.useState("");

  const handleChange = (event) => {
    setComponentOutput(event.target.value);
    props.componentOutputChangeHandler(event.target.value);
    // props.searchComponentsHandler();
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="ComponentOutput">
          Component Function
        </InputLabel> */}
        <TextField
          id="ComponentOutput"
          label="Component Output"
          variant="outlined"
          value={ComponentOutput}
          onChange={handleChange}
        />
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
};

export default ComponentOutput;
