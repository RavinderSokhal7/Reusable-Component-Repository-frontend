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

const ComponentName = (props) => {
  const classes = useStyles();
  const [componentName, setComponentName] = React.useState("");

  const handleChange = (event) => {
    setComponentName(event.target.value);
    props.componentNameChangeHandler(event.target.value);
    // props.searchComponentsHandler();
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="componentName">
          Component Name
        </InputLabel> */}
        <TextField
          id="componentName"
          label="Component Name"
          variant="outlined"
          value={componentName}
          onChange={handleChange}
        />
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
};

export default ComponentName;
