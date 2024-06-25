import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './FormActions.scss';

/* 
This file defines a FormActions component that handles form creation and navigation.
It renders a button to create the form, and upon clicking, it triggers the handleCreate function
and navigates to the '/created-form' route using Navigate.
*/

const FormActions = ({ handleCreate }) => {
    const [redirect, setRedirect] = useState(false); // State to manage redirection

    const handleClickCreate = () => {
        handleCreate(); // Call the handleCreate function provided as prop
        setRedirect(true); // Set the state to trigger redirection
    };

    // If redirection is true, navigate to the '/created-form' route
    if (redirect) {
        return <Navigate to="/created-form" />;
    }

    return (
        <div className="form-actions">
            {/* Button to trigger form creation */}
            <Button variant="contained" type="button" onClick={handleClickCreate}>Create Form</Button>
        </div>
    );
};

export default FormActions;
