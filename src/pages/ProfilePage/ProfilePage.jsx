import React from "react";
import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
    const [user, token] = useAuth();
    const [moviesList, setMoviesList] = useState([]);
  
    useEffect (() => {
        fetchMoviesList();
    }, []);

    const fetchMoviesList = async () => {
        try {
            let response = await axios.get("https://localhost:5001/api/media"
            );
            console.log(response.data);
            setMoviesList(response.data);
            
        }
        catch (error) {
            console.log("Error in fetchMoviesList: ", error);
        }
    }

    const moviesArchived = moviesList.length;

    //Number of movies the user has completed
    const moviesCompleted = moviesList.filter(movie => movie.status === "Completed");
    const moviesCompletedLength = moviesCompleted.length;
    
    //Number of movies the user is planning to watch
    const moviesPlanned = moviesList.filter(movie => movie.status === "Plan to watch");
    const moviesPlannedLength = moviesPlanned.length;

    

    const runtimes =  moviesCompleted.map(movie => movie.runtime);
    const sum = moviesCompletedLength > 0 ? runtimes.reduce((acc, curr) => acc + curr) : 0;
    const sumInHours = sum/60;

    console.log(sumInHours);

    console.log(user);
    return (
        <div style={{marginLeft:35}}>
            <h1>{user.userName}'s Profile Page</h1>
            <h1>User Information</h1>
            <div>
                UserName: {user.userName}
            </div>
                Email: {user.email}
            <h1>
                User Statistics
            </h1>
            <div>
                Movies Archived: {moviesArchived}
            </div>
            <div>
                Movies Completed: {moviesCompletedLength}
            </div>
            <div>
                Total Runtime Watched (hrs): {sumInHours}
            </div>
            <div>
                Movies Planned: {moviesPlannedLength}
            </div>
        </div>
    );
};

export default ProfilePage;
