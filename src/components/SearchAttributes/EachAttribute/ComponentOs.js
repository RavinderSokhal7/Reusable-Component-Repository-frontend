import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ComponentOs = (props) => {
  const classes = useStyles();
  const [componentOs, setComponentOs] = React.useState("");

  const handleChange = (event) => {
    setComponentOs(event.target.value);
    props.componentOsChangeHandler(event.target.value);
    // props.searchComponentsHandler();
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="componentOsLabel">Component OS</InputLabel>
        <Select
          value={componentOs}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value={"any"}>Any</MenuItem>
          <MenuItem value={"windows"}>Windows</MenuItem>
          <MenuItem value={"linux"}>Linux</MenuItem>
          <MenuItem value={"mac"}>Mac</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
};

export default ComponentOs;
