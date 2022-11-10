import axios from "axios";
import { useEffect,useState } from "react";
import styled from "styled-components";
import { getNowPlaying } from "../api/api";

const MoviePoster = styled.img`
    width: 40px;
    height: 40px;
`

export const getServerSideProps = async () =>{
    const res =  await getNowPlaying();
    const data = res.data;

  return { props: { data } }
}


const Movies =({data}) =>{
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        setMovies(data.results);
        console.log(movies);
    },[movies])

    return(
    <div>
    {movies.map((movie)=>(    
        <div>
        <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}/>
        </div>
    ))}
    </div>
    );

}

export default Movies;