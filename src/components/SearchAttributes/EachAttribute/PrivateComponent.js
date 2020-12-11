import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const PrivateComponent = (props) => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.privateComponentChangeHandler(event.target.checked);
    // props.searchComponentHandler();
  };
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="PrivateComponent"
            color="primary"
          />
        }
        label="Private Component"
        labelPlacement="start"
      />
    </div>
  );
};

export default PrivateComponent;
