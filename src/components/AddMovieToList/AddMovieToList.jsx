import { Button, Hidden } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "../AddMovieToList/AddMovieToList.css";



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



const AddMovieToList = ({MediaTitle, Runtime}) => {
        const [user,token] = useAuth();

       console.log(Runtime);

        const [mediaValues, setMediaValues] = useState({
         MediaTitle: MediaTitle,
         Runtime: Runtime,
          Status: "Unwatched",
          Score: undefined,
          Note: undefined,
          TypeOfMedia: "movie",
          Episodes: 1,
          Progress: 0,
          DateCompleted: ""
          
          // Add more fields as needed
        });

        
       console.log(mediaValues.runtime);
        
    
        const handleInputChange = (event) => {
            const {name, value} = event.target;
            console.log(mediaValues);
            setMediaValues((prevValues) => ({
                ...prevValues,
                [name]: value,
                
            }));
        };


        const handleSubmit = (event) => {
            console.log("Form values:", mediaValues);
            event.preventDefault();
          
            //post endpoint for mediacontroller
            console.log(token)

            axios.post('https://localhost:5001/api/media', mediaValues, {
                headers:{ Authorization: "Bearer " + token}
            }) 
            .then((response) => {
                //Handle the response data
                console.log('Media Post request successful', response);
                window.location.href="/movielist"

                
            })
            .catch((error) => {
                //Handle the error
                console.error('Error making POST request', error);
            });

            
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
            defaultValue={mediaValues.Status}
            helperText="Please Choose a Status"
            label="Status"
            onChange={handleInputChange}
            color="error"
            focused
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
            defaultValue={mediaValues.Score}
            InputProps={{ inputProps: {min: 0, max: 10}}}
            InputLabelProps={{
                shrink:true
            
            }}
            onChange={handleInputChange}
            color="error"
            focused
        
        />
        <TextField 
        // Note
            variant="filled" 
            label="Note" 
            name="Note"
            defaultValue={mediaValues.Note}
            onChange={handleInputChange}
            color="error"
            focused 
        />
        <TextField
        // MediaTitle
            type="hidden"
            defaultValue={MediaTitle}
            name="MediaTitle"
            onChange={handleInputChange}
        />
        <TextField 
        // Runtime
            type="hidden"
            defaultValue={Runtime}
            name="Runtime"
            onChange={handleInputChange}
        />
        <TextField
        // TypeOfMedia
            type="hidden"
            defaultValue={mediaValues.TypeOfMedia}
            name="TypeOfMedia"
            onChange={handleInputChange}
        />
        <TextField
        // Episodes
            type="hidden"
            defaultValue={mediaValues.Episodes}
            name="Episodes"
            onChange={handleInputChange}
        />
        
        </div>
        
            <Button variant="outlined" type="submit" color="error">Save</Button>
            
            
            
        </form>
    );
   
};

export default AddMovieToList;