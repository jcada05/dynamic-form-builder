import React from 'react';
import FieldList from './FieldList';
import FieldControls from './FieldControls';
import FormActions from './FormActions';
import { useFormContext } from './FormContext';
import './DynamicFormBuilder.scss';

/* 
  This is the main file that holds the form builder main components 
  like the left panel and the right panel. 
  It manages the state of the form fields and provides functions to 
  add, remove, and update fields, as well as create and reset the form.
*/

const DynamicFormBuilder = () => {
  const { fields, setFields } = useFormContext(); // Access fields and setFields from the form context

  // Handle the addition of a new field to the form preview panel
  const addField = (type, label, options = []) => {
    const newField = {
      id: Date.now(), // Generate a unique ID for the new field
      type,
      label,
      value: '',
      options,
    };
    setFields([...fields, newField]); // Update the fields state with the new field
  };

  // Handle the removal of a field from the form preview panel by its ID
  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id)); // Update the fields state without the removed field
  };

  // Update the value of a field by its ID
  const updateFieldValue = (id, value) => {
    setFields(fields.map(field => (field.id === id ? { ...field, value } : field))); // Update the value of the specified field
  };

  // Handle form creation
  const handleCreate = () => {
    console.log('Form created with fields:', fields); // Log the created form fields
  };

  // Handle form reset
  const handleReset = () => {
    setFields([]); // Clear all fields
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="label-input">
          <FieldControls addField={addField} /> {/* Component for adding new fields */}
          <FormActions handleCreate={handleCreate} handleReset={handleReset} /> {/* Component for form actions */}
        </div>
      </div>
      <div className="right-panel">
        <div className="form-preview">
          <h2>Form Preview</h2>
          <FieldList 
            fields={fields} 
            updateFieldValue={updateFieldValue} 
            removeField={removeField} 
          /> {/* Component for displaying and managing the list of fields */}
        </div>
      </div>
    </div>
  );
};

export default DynamicFormBuilder;
