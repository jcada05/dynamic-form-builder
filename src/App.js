import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DynamicFormBuilder from './components/DynamicFormBuilder';
import CreatedForm from './components/CreatedForm';
import { FormProvider } from './components/FormContext';

function App() {
  return (
    <Router>
      <FormProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<DynamicFormBuilder />} />
            <Route path="/created-form" element={<CreatedForm />} />
          </Routes>
        </div>
      </FormProvider>
    </Router>
  );
}

export default App;
