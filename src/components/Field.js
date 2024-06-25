import React from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import './Field.scss';

/* 
This file defines a Field component which renders different types of input fields (text, number, select) 
based on the field type and provides functionality to update and remove the field.
*/

const Field = ({ field, updateFieldValue, removeField }) => {
  // Handle the change in the field value and update the field's state
  const handleChange = (e) => {
    updateFieldValue(field.id, e.target.value);
  };

  return (
    <div className="field-grp">
      {field.type === 'text' && (
        /* Renders a text field when the field type is 'text' */
        <TextField
          required
          id="outlined-required"
          label={field.label}
          value={field.value}
          onChange={handleChange} // Update the field value on change
          sx={{ width: '223px', height: '50px', margin: '15px 0px 0px 0px' }}
        />
      )}
      {field.type === 'number' && (
        /* Renders a number field when the field type is 'number' */
        <TextField
          required
          type="number"
          id="outlined-required"
          label={field.label}
          value={field.value}
          onChange={handleChange} // Update the field value on change
          sx={{ width: '223px', height: '50px', margin: '15px 0px 0px 0px' }}
        />
      )}
      {field.type === 'select' && (
        /* Renders a select field when the field type is 'select' */
        <FormControl sx={{ width: '223px', height: '50px', margin: '15px 0px 0px 0px' }}>
          <InputLabel id="demo-simple-select-label">{field.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={field.label}
            value={field.value}
            onChange={handleChange} // Update the field value on change
          >
            {field.options.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <IconButton
        aria-label="delete"
        size="large"
        onClick={() => removeField(field.id)} // Handle field removal on click
        sx={{ margin: '18px 0px 0px 0px' }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Field;
