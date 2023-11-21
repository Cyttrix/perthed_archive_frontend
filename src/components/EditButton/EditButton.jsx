import React, { useState } from 'react';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from "@mui/material";
import useAuth from "../../hooks/useAuth";



const EditButton = (id) => {
  const [editMode, setEditMode] = useState(false);
  const [user, token] = useAuth();
 

  const theme = createTheme({
    palette: {
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
  });


 

  const [putValues] = useState({
    MediaTitle: id.title,
    TypeOfMedia: id.typeOfMedia,
    Episodes: id.episodes,
    Status: "",
    Progress: 0,
    DateCompleted: "",
    Score: 0,
    Note: "",
    


})

  const handleEditClick = () => {
    putValues.Status = window.prompt('Enter a new Status (Completed or Plan to Watch):')
    putValues.Progress = window.prompt('Enter a new Progress (Numbers Only):');
    putValues.DateCompleted = window.prompt('Enter a new Date Completed (if completed):');
    putValues.Score = window.prompt('Enter a new score (1-10):');
    putValues.Note = window.prompt('Enter a new note:');

    if (putValues.Status === "" || putValues.Progress === 0 || putValues.DateCompleted === "" || putValues.Score === 0 || putValues.Note === "" ) {
      // User clicked Cancel on any prompt
      return;
    }

    

    // Validation
    //const nameRegex = "Watched";

    // if (!nameRegex.test(newFirstName) || !nameRegex.test(newLastName)) {
    //   alert('Please enter a valid status (Watched or Plan to Watch).');
    //   return;
    // }

    // Call the PUT endpoint using Axios to update the values

    console.log(id.id);

   

    axios
      .put(`https://localhost:5001/api/media/${id.id}`, putValues,   {
        
      })
      .then((response) => {
        // Handle the response, e.g., show a success message
        console.log('Values updated successfully:', response.data);
    })
    .catch((error) => {
      // Handle errors, e.g., show an error message
      console.error('Error updating values:', error);
      })
      .finally(() => {
        // Set edit mode back to false after the update is complete
        setEditMode(false);
      });
  };

  

  return (
    
        <ThemeProvider theme={theme}>
            <Button color="ochre" onClick={handleEditClick}>
                Edit
            </Button>
        </ThemeProvider>
  );
};

export default EditButton;