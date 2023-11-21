import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import AddMovieToList from "../../components/AddMovieToList/AddMovieToList";
import "../MediaDetailsPage/MediaDetailsPage.css";



const MediaDetailsPage = () => {
   const { mediaTitle, mediaId } = useParams();
   const [mediaDetails, setMediaDetails] = useState([]);
   const [mediaOverview, setMediaOverview] = useState([]);
   const [mediaGenreNames, setMediaGenreNames] = useState('');
   const runTime = mediaDetails.runtime;




    useEffect(() => {
        fetchMediaDetails();
        //fetchMediaGenres();
    }, []);
    
    const fetchMediaDetails = async () => 
    {
        try {

            const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOiIiLCJhcGlrZXkiOiJmOWQ4ZjUzMS1kYzZkLTQzMzEtODliOC02ZThmOTM4Njk1ZjAiLCJjb21tdW5pdHlfc3VwcG9ydGVkIjpmYWxzZSwiZXhwIjoxNzAxMDY0OTMwLCJnZW5kZXIiOiIiLCJoaXRzX3Blcl9kYXkiOjEwMDAwMDAwMCwiaGl0c19wZXJfbW9udGgiOjEwMDAwMDAwMCwiaWQiOiIyNDQzOTY1IiwiaXNfbW9kIjpmYWxzZSwiaXNfc3lzdGVtX2tleSI6ZmFsc2UsImlzX3RydXN0ZWQiOmZhbHNlLCJwaW4iOm51bGwsInJvbGVzIjpbXSwidGVuYW50IjoidHZkYiIsInV1aWQiOiIifQ.Bh_dLbDv0PHksEDiHVDXgZr6xnFLBDdEoX3It6H0FMGmE1IRFggPscJ5ybukBxSP5_FL_x89kNT_x_1PAyH4ymHarQf0mG5Ori8V0nKPI28aGCOhSw2qCM_yg9vgmynTNKnbH6IaxcIBxkbjvcFqdRuN-hsQLr2m8glytnDb6xqlmafZOBKD7jaDK3k8RWdVLUDKrahKIbl26dk2YyYnKMJc8BBQmsFsCGig-_F5V7yMua9v8tk4rBnHu-0KtCf8ofxhCYxk1jXgO7EP2y1xZ1sev9eFauWVMYVcD5M50PVmo-dpD6F3Yaml1gOyuHgA7BilZKa7UL-tilsZEjP83hiwDxPExkDcOcs9uA4FiwZgGwKLwrc6e4v5c--TL9BdO9JvmFViAzqOP3NrEoe1lYSfwHqVNDSOVq118IdBWFkI7L9GuuqW3tS3s0pvBvoDSs4CdCM_W21X0CILuX3zIwahrROaziMLpGcEFLiU10VYr8ST3jp9wGpRI0pmfeVCpN0Xip7KjWj2Cr-wPVNWly_3PYX0FLmUvaUv82WbzSk57tu36H9cNJtvp3US0zQNE0SlDrVKkYSHqIQfQvhXWuW_XUWAbABadxKQ-heTd9lp-uKY7gWBdx8rfkcbDxC4TNvlFX7h9V00JfpS2lDsZt6D7UJecLC2jdob5u23_3c';

            
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
            //let mediaGenres = mediaDetails.genres.map(obj => obj.name);
            //mediaGenresString = mediaGenres.join(', ');
            //console.log(mediaGenresString);

            //recordType Specific Detail
            
            //Runtime specific detail
           
            

            
            
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
            <div className="container">
                
                <div>
                        <h2>{mediaTitle}</h2>
                        <img src={mediaDetails.image} width={272} height={400} />
                    
                    
                        
                        <h3>Synopsis: {mediaOverview.overview}</h3>
                </div>
                    
                <p/>&nbsp;
                
                <div>
                    <h2>More Information</h2>
                    <h3>Year: {mediaDetails.year}</h3>
                    <h3>Runtime: {mediaDetails.runtime} mins</h3>
                    {/* <h3>Genres: {mediaGenreNames}</h3> */}
                    <h3>Media Type: {mediaDetails?.status?.recordType}</h3> 
                    {/* <h3>Trailer:{mediaDetails?.trailers?.url}</h3>) */}
                    </div>
                    <p/>&nbsp;
                    <div>Add to Movie List
                    <p/>&nbsp;
                    <AddMovieToList 
                    MediaTitle={mediaTitle}
                    Runtime={runTime}
            
                />
                </div>
            </div>
            
            
        </div>
    )

};

export default MediaDetailsPage;