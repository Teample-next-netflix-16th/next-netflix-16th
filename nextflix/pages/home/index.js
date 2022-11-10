import styled from "styled-components";
import {useEffect,useState} from 'react';
import {getNowPlaying,getPopular,getTopRated,getUpcoming} from '../api/api';
import Layout from "../../components/ui/Layout";
import TopNav from "../../components/ui/TopNav";
import MidBtn from "../../components/ui/MidBtn";


export const getServerSideProps = async () =>{
    const nowPlayingRes =  await getNowPlaying();
    const nowPlayingData = nowPlayingRes.data.results;

    const getPopularRes =  await getPopular();
    const popularData = getPopularRes.data.results;

    const getTopRatedRes =  await getTopRated();
    const topRatedData = getTopRatedRes.data.results;

    const getUpcomingRes =  await getUpcoming();
    const upcomingData = getUpcomingRes.data.results;

    const randomId = popularData[Math.floor(Math.random()*popularData.length)].id;

  return { props: { nowPlayingData, popularData, topRatedData, upcomingData, randomId } }
}


const home = ({ nowPlayingData, popularData, topRatedData, upcomingData, randomId }) => {
    const [randomMovie, setRandomMovie] = useState('')
    useEffect(() => {
        setRandomMovie(popularData[Math.floor(Math.random()*popularData.length)]);
    },[]);
    
    return (
        <Layout>
            <TopNav/>
            <RandomImg key={randomId} src={`https://image.tmdb.org/t/p/w185/${randomMovie.poster_path}`} ></RandomImg>
            <MidBtn/>
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
        </Layout>
    );
};

export default home;

const RandomImg  = styled.img`
    top: 0;
    width: 100%;
    max-height: 51%
    
`;

const MoviesContainer = styled.div`
    margin-left: 10px;
`

const Category = styled.h3`

    font-size: 27px;
    margin-left: 12px;

    font-size: 24px;
    margin-left: 15px;

`;

const PosterContainer = styled.div`
    display: float;
    overflow-y: auto;
`;

const MoviePoster = styled.img`

    width: 100px;
    height: 100px;
    margin-right: 7px;

    width: 103px;
    height: 161px;
    margin-left: 5px;

`

const PreviewMoviePoster = styled.img`
    width: 102px;
    height: 102px;
    border-radius: 50%;
    margin-right: 7px;

    margin-left: 5px;


`

