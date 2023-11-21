import React from "react";
import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Button } from "@mui/material";
import "./MoviesListPage.css";
import { Link } from "react-router-dom";
import CreatePost from "../../components/CreatePost/CreatePost";
import EditButton from "../../components/EditButton/EditButton";

const MovieListPage = () => {
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

    const handleDelete = (id) => {
        axios
          .delete(`https://localhost:5001/api/media/${id}`)
          .then((response) => {
            // Handle the response data
            console.log('Delete request successful', response);
          })
          .catch((error) => {
            // Handle the error
            console.error('Error making DELETE request', error);
          });
      };

      
    //movies completed list
    const moviesCompletedList = moviesList.filter(movie => movie.status === "Completed");
    //movies planned list
    const moviesPlannedList = moviesList.filter(movie => movie.status === "Plan to watch");
   
    


    return (
        <div className="MoviesListPage" style={{marginLeft:20}}>
            
        
        <div className="body">
        <h1 style={{marginLeft:15}}>{user.userName}'s Movie List Page</h1>
            <h1 style={{marginLeft:15}}>Movies Watched</h1>
            <table className="table, td, th"> 
                <tr>
                    <th>Title</th>
                    <th>Score</th>
                    <th>Progress</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Date Completed</th>
                    <th>Note</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>Post</th>
                </tr>
                {moviesCompletedList.map((movies, index) => (
                    <tr key={index}>
                    <td>{movies.mediaTitle}</td>
                    <td>{movies.score}</td>
                    <td>{movies.progress}/{movies.episodes}</td>
                    <td>{movies.typeOfMedia}</td>
                    <td>{movies.status}</td>
                    <td>{movies.dateCompleted}</td>
                    <td>{movies.note}</td>
                    <td><Button color="error" onClick={() => handleDelete(movies.id)}>Delete</Button></td>
                    <td>
                        
                    <EditButton 
                    id={movies.id}
                    title={movies.mediaTitle}
                    typeOfMedia={movies.typeOfMedia}
                    episodes={movies.episodes}
                        
                    />
                    </td>
                    <td><CreatePost
                    id = {movies.id}
                    status = {movies.status}
                    title = {movies.mediaTitle}
                    
                    />
                    </td>
                    </tr>
                ))}
                </table>
                <h1 style={{marginLeft:15}}>Movies Planned</h1>
            <table className="table, td, th">
                <tr>
                    <th>Title</th>
                    <th>Score</th>
                    <th>Progress</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Note</th>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>Post</th>
                </tr>
                {moviesPlannedList.map((movies, index) => (
                    <tr key={index}>
                    <td>{movies.mediaTitle}</td>
                    <td>{movies.score}</td>
                    <td>{movies.progress}/{movies.episodes}</td>
                    <td>{movies.typeOfMedia}</td>
                    <td>{movies.status}</td>
                    <td>{movies.note}</td>
                    <td><Button color="error" onClick={() => handleDelete(movies.id)}>Delete</Button></td>
                    <td>
                        
                    <EditButton 
                    id={movies.id}
                    title={movies.mediaTitle}
                    typeOfMedia={movies.typeOfMedia}
                    episodes={movies.episodes}
                        
                    />
                    </td>
                    <td><CreatePost
                    id = {movies.id}
                    status = {movies.status}
                    title = {movies.mediaTitle}
                    
                    />
                    </td>
                    </tr>
                ))}
                
            </table>

           
        </div>
            
        </div>
    );
};

export default MovieListPage;