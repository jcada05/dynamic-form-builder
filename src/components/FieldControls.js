import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './FieldControls.scss';

/* 
This file defines a FieldControls component which provides UI controls 
to add new fields to the form, including text, number, and select fields.
*/

const FieldControls = ({ addField }) => {
  const [label, setLabel] = useState(''); // State to manage the label of the input field
  const [fieldType, setFieldType] = useState('text'); // State to manage the selected field type
  const [options, setOptions] = useState(['']); // State to manage the options for select fields

  // Handle the addition of a new field
  const handleAddField = () => {
    if (label) {
      if (fieldType === 'select' && options.some(option => option.trim() === '')) {
        alert('Please fill out all options.');
        return;
      }
      addField(fieldType, label, options); // Call the addField prop function with the current state
      setLabel(''); // Reset the label input
      setOptions(['']); // Reset the options array
    } else {
      alert('Please enter a label for the field.');
    }
  };

  // Handle the change in an option's value
  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions); // Update the options state
  };

  // Add a new option input field
  const addOption = () => {
    if (options.some(option => option.trim() === '')) {
      alert('Please fill out all options.');
      return;
    }
    setOptions([...options, '']); // Add a new empty option to the options array
  };

  // Remove an option input field
  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions); // Update the options state by removing the specified index
  };

  return (
    <div className="field-controls">
      <h2>Form Builder</h2>
      <TextField
        required
        id="outlined-required"
        placeholder="Enter label"
        value={label}
        onChange={(e) => setLabel(e.target.value)} // Update the label state on change
        sx={{ width: "100%" }}
      />
      <FormControl component="fieldset" className="field-type-radio">
        <FormLabel component="legend"><br />Field Type<br /></FormLabel>
        <RadioGroup
          row
          aria-label="field-type"
          name="field-type"
          value={fieldType}
          onChange={(e) => setFieldType(e.target.value)} // Update the fieldType state on change
        >
          <FormControlLabel value="text" control={<Radio />} label="Text" />
          <FormControlLabel value="number" control={<Radio />} label="Number" />
          <FormControlLabel value="select" control={<Radio />} label="Select" />
        </RadioGroup>
      </FormControl>
      {fieldType === 'select' && (
        <div className="select-options">
          {options.map((option, index) => (
            <div key={index} className="option-group">
              <TextField
                required
                id={`option-${index}`}
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)} // Update the option value on change
                sx={{width: "80%"}}
              />
              <div className="btns-grp">
                <Button 
                    className="remove-btn" 
                    variant="outlined" 
                    onClick={() => removeOption(index)} // Remove the option on click
                    size="small" 
                    sx={{ margin: "0px 10px 0px 0px", width: "100px" }}>
                        Remove
                </Button>

                <Button 
                    className="add-btn" 
                    variant="outlined" 
                    onClick={addOption} // Add a new option on click
                    size="small"
                    sx={{width: "100px"}}
                >
                    Add
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Button
        variant="outlined"
        type="button"
        onClick={handleAddField} // Add the field on click
        sx={{ width: '180px', margin: '10px' }}
        disabled={!label.trim()} // Disable the button if the label is empty
      >
        Add Field
      </Button>
    </div>
  );
};

export default FieldControls;
