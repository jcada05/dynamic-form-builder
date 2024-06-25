import React from 'react';
import Field from './Field';
import './FieldList.scss';

/* 
This file defines a FieldList component that renders a list of fields based on the provided fields array.
Each field is rendered using the Field component.
*/

const FieldList = ({ fields, updateFieldValue, removeField }) => {
  return (
    <div className="field-list">
      {/* Map through the fields array and render a Field component for each field */}
      {fields.map(field => (
        <Field
          key={field.id}
          field={field}
          updateFieldValue={updateFieldValue}
          removeField={removeField}
        />
      ))}
    </div>
  );
};

export default FieldList;
