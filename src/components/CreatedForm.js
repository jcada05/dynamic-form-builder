import React from 'react';
import { Link } from 'react-router-dom';
import { useFormContext } from './FormContext';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import './CreatedForm.scss';

/* This file renders the created form */

const CreatedForm = () => {
  const { fields, setFields } = useFormContext(); // Access fields and setFields from the form context

  // Handle form submission
  const handleSubmit = () => {
    alert('Form submitted!');
  };

  // Handle clearing the form
  const handleClear = () => {
    setFields(fields.map(field => ({ ...field, value: '' }))); // Clear the values of all fields
    console.log('Form cleared');
  };

  return (
    <div className="created-form">
      <h2>Created Form</h2>
      <form>
        {fields.map(field => (
          <div key={field.id}>
            {/* Render text field when the field type is equal to "text" */}
            {field.type === 'text' && (
              <TextField
                required
                id={`text-${field.id}`}
                label={field.label}
                value={field.value}
                placeholder={field.label}
                onChange={(e) => setFields(fields.map(f => f.id === field.id ? { ...f, value: e.target.value } : f))}
                sx={{ width: "300px", margin: '15px 0px 0px 0px'}}
              />
            )}
            {/* Render number field when the field type is equal to "number" */}
            {field.type === 'number' && (
              <TextField
                required
                type="number"
                id={`number-${field.id}`}
                label={field.label}
                value={field.value}
                placeholder={field.label}
                onChange={(e) => setFields(fields.map(f => f.id === field.id ? { ...f, value: e.target.value } : f))}
                sx={{ width: "300px", margin: '15px 0px 0px 0px'}}
              />
            )}
            {/* Render select field when the field type is equal to "select" */}
            {field.type === 'select' && (
              <FormControl sx={{ width: "300px", margin: '15px 0px 0px 0px'}}>
                <InputLabel id={`select-label-${field.id}`}>{field.label}</InputLabel>
                <Select
                  labelId={`select-label-${field.id}`}
                  id={`select-${field.id}`}
                  label={field.label}
                  value={field.value}
                  onChange={(e) => setFields(fields.map(f => f.id === field.id ? { ...f, value: e.target.value } : f))}
                >
                  {field.options.map((option, index) => (
                    <MenuItem key={index} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </div>
        ))}
        {/* Submit Button */}
        <Button variant="contained" type="button" sx={{ margin: '20px 10px'}} onClick={handleSubmit}>Submit</Button>
        {/* Clear Button */}
        <Button variant="outlined" type="button" sx={{ margin: '20px 10px'}} onClick={handleClear}>Clear</Button>
        <Link to="/">
          {/* Back to Form Builder Button */}
          <Button variant="outlined" sx={{ margin: '20px 10px'}}>Back to Form Builder</Button>
        </Link>
      </form>
    </div>
  );
};

export default CreatedForm;
