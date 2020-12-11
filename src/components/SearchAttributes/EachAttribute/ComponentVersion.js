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

const ComponentVersion = (props) => {
  const classes = useStyles();
  const [componentVersion, setComponentVersion] = React.useState("");

  const handleChange = (event) => {
    setComponentVersion(event.target.value);
    props.componentVersionChangeHandler(event.target.value);
    // props.searchComponentsHandler();
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="componentFunction">
          Component Function
        </InputLabel> */}
        <TextField
          id="componentVersion"
          label="Component Version"
          variant="outlined"
          value={componentVersion}
          onChange={handleChange}
        />
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
};

export default ComponentVersion;
