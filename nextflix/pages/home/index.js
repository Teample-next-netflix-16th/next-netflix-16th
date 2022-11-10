import styled from "styled-components";
import {getNowPlaying,getPopular,getTopRated,getUpcoming} from '../api/api';


export const getServerSideProps = async () =>{
    const nowPlayingRes =  await getNowPlaying();
    const nowPlayingData = nowPlayingRes.data.results;

    const getPopularRes =  await getPopular();
    const popularData = getPopularRes.data.results;

    const getTopRatedRes =  await getTopRated();
    const topRatedData = getTopRatedRes.data.results;

    const getUpcomingRes =  await getUpcoming();
    const upcomingData = getUpcomingRes.data.results;

  return { props: { nowPlayingData, popularData, topRatedData, upcomingData } }
}


const home = ({ nowPlayingData, popularData, topRatedData, upcomingData }) => {

    return (
        <MoviesContainer>
            <Category style={{color:'white'}}>Previews</Category>
            <PosterContainer>
                {upcomingData.map((movie)=>(    
                    <div key={movie.id}>
                        <PreviewMoviePoster src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
                    </div>
                ))}
            </PosterContainer>

            <Category style={{color:'white'}}>Now Playing</Category>
            <PosterContainer>
                {nowPlayingData.map((movie)=>(    
                    <div key={movie.id}>
                        <MoviePoster src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
                    </div>
                ))}
            </PosterContainer>

            <Category style={{color:'white'}}>Top Rated</Category>
            <PosterContainer>
                {topRatedData.map((movie)=>(    
                    <div key={movie.id}>
                        <MoviePoster src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
                    </div>
                ))}
            </PosterContainer>

            <Category style={{color:'white'}}>Popular</Category>
            <PosterContainer>
                {popularData.map((movie)=>(    
                    <div key={movie.id}>
                        <MoviePoster src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
                    </div>
                ))}
            </PosterContainer>
        </MoviesContainer>
    );
};

export default home;

const MoviesContainer = styled.div`
    
`

const Category = styled.h3`

`;

const PosterContainer = styled.div`
    display: float;
    overflow-y: auto;
`;

const MoviePoster = styled.img`
    width: 100px;
    height: 100px;
`

const PreviewMoviePoster = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

