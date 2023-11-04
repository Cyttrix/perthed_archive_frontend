import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import AddMovieToList from "../../components/AddMovieToList/AddMovieToList";



const MediaDetailsPage = () => {
    const { mediaTitle, mediaId } = useParams();
   const [mediaDetails, setMediaDetails] = useState([]);
   const [mediaOverview, setMediaOverview] = useState([]);
   const [mediaGenreNames, setMediaGenreNames] = useState('');
   

    useEffect(() => {
        fetchMediaDetails();
        fetchMediaGenres();
    }, []);
    
    const fetchMediaDetails = async () => 
    {
        try {

            const token = ''
            
            const config = {
                headers: {Authorization: `Bearer ${token}` },
            };

            //Overall details
            let detailsResponse = await axios.get(`https://api4.thetvdb.com/v4/movies/${mediaId}/extended`, config)
            console.log(detailsResponse.data.data);
            setMediaDetails(detailsResponse.data.data);
            //Overview Specific Detail
            let overviewResponse = await axios.get(`https://api4.thetvdb.com/v4/movies/${mediaId}/translations/eng`, config);
        console.log(overviewResponse.data.data);
        setMediaOverview(overviewResponse.data.data);
            //Genres Specific Detail
            //let data = mediaDetails.genres;
            //let arrayOfGenres = data.map(obj => obj.name);
            //let commaSeparatedGenres = arrayOfGenres.join(', ');
            //setMediaGenreNames(commaSeparatedGenres);
            //Trailers Specific Detail



            

            //let mediaGenres = mediaDetails.genres.map(obj => obj.name);
            //mediaGenresString = mediaGenres.join(', ');
            //console.log(mediaGenresString);
            
        } catch (error) {
            console.log("Error in fetchMediaDetails: ", error);
        }

        
    }

    const fetchMediaGenres = async () => {
        try {
            //Genres
            let data = mediaDetails.genres;
            let arrayOfGenres = data.map(obj => obj.name);
            let commaSeparatedGenres = arrayOfGenres.join(', ');
            setMediaGenreNames(commaSeparatedGenres);
        } catch (error) {
            console.log("Error in fetchMediaGenres", error);
        }
    }


   

    return (
        <div>
            <img src={mediaDetails.image} width={272} height={400} />

            <h2>{mediaTitle}</h2>
            <h3>{mediaOverview.overview}</h3>
            <h3>Year: {mediaDetails.year}</h3>
            <h3>Runtime: {mediaDetails.runtime} mins</h3>
            {/* <h3>Genres: {mediaGenreNames}</h3> */}
            <h3>Media Type: {mediaDetails?.status?.recordType}</h3> 
            {/* <h3>Trailer:{mediaDetails?.trailers?.url}</h3>) */}
            <p/>&nbsp;
            <div>Add to Movie List</div>
            <AddMovieToList/>
            
        </div>
    )

};

export default MediaDetailsPage;