import React, { createContext, useContext, useState } from 'react';

// Create a context for managing form fields
const FormContext = createContext();

// FormProvider component to provide the form context to its children
export const FormProvider = ({ children }) => {
  // State to manage form fields
  const [fields, setFields] = useState([]);

  return (
    // Provide the form context value to its children
    <FormContext.Provider value={{ fields, setFields }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to access the form context
export const useFormContext = () => {
  return useContext(FormContext);
};
