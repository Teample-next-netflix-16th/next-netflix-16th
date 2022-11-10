
import { getUpcoming } from "../../pages/api/api";
import { useEffect,useState } from "react";
import styled from "styled-components";

export const getServerSideProps = async () =>{
    const res =  await getUpcoming();
    const data = res.data;
    return { props: { data } }
}

const Previews =({data}) =>{
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        setMovies(data.results);
    },[movies])

    return(
    <PreviewsContainer>
    {movies.map((movie)=>(    
        <span key={movie.id}>
            <MoviePoster src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}/>
        </span>
    ))}
    </PreviewsContainer>
    );

}

export default Previews;

const PreviewsContainer = styled.div`
    display: flex;
    overflow-y: auto;
`

const MoviePoster = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    float: left;
`