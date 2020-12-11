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

const TechType = (props) => {
  const classes = useStyles();
  const [techType, setTechType] = React.useState("");

  const handleChange = (event) => {
    setTechType(event.target.value);
    props.techTypeChangeHandler(event.target.value);
    // props.searchComponentsHandler();
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="techTypeLabel">TechType/Language</InputLabel>
        <Select
          value={techType}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"java"}>Java</MenuItem>
          <MenuItem value={"javascript"}>Javascript</MenuItem>
          <MenuItem value={"react"}>React</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
};

export default TechType;
