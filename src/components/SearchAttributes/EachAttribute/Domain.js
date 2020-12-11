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

const Domain = (props) => {
  const classes = useStyles();
  const [domain, setdomain] = React.useState("");

  const handleChange = (event) => {
    setdomain(event.target.value);
    props.domainChangeHandler(event.target.value);
    // props.searchComponentsHandler();
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="domain">
          Component Function
        </InputLabel> */}
        <TextField
          id="domain"
          label="Component Domain"
          variant="outlined"
          value={domain}
          onChange={handleChange}
        />
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
};

export default Domain;
