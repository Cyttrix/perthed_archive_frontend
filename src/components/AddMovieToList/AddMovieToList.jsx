import { Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { TextField } from "@mui/material";
import React, { useState } from "react";


const statuses = [
    {
        value: 'Unwatched',
        label: 'Unwatched'
    },
    {
        value: 'Completed',
        label: 'Completed'

    },
    {
        value: 'Plan to watch',
        label: 'Plan to watch'
    },
    
];

const AddMovieToList = ({}) => {
        const [values, setValues] = useState({
          Status: "Unwatched",
          Score: undefined,
          Notes: undefined,
          // Add more fields as needed
        });
    
        const handleInputChange = (event) => {
            const {name, value} = event.target;
            setValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        };

        const handleSubmit = (event) => {
            event.preventDefault();

            console.log("Form values:", values);
        };
    

    return (
        <form onSubmit={handleSubmit}>
            <div>
        <TextField 
        // Status
            id="outlined-select-status"
            select
            name="Status"
            variant="filled"
            defaultValue={values.Status}
            helperText="Please Choose a Status"
            label="Status"
            onChange={handleInputChange}
        >
            {statuses.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            

            ))}
        </TextField>
        <TextField 
        // Score
            variant="filled"
            label="Score"
            type="number"
            name="Score"
            defaultValue={values.Score}
            InputProps={{ inputProps: {min: 0, max: 10}}}
            InputLabelProps={{
                shrink:true
            
            }}
            onChange={handleInputChange}
        
        />
        <TextField 
        // Notes
            variant="filled" 
            label="Note" 
            name="Notes"
            defaultValue={values.Notes}
            onChange={handleInputChange} 
        />
        </div>
            <Button variant="outlined" type="submit">Save</Button>
            <div>Status: {values.Status}</div>
            <div>Score: {values.Score}</div>
            <div>Notes: {values.Notes}</div>
        </form>
    );
};

export default AddMovieToList;