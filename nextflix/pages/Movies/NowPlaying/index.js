import axios from "axios";
import styled from "styled-components";
import { getNowPlaying,getImg } from "../../api/api";


export const getServerSideProps = async () =>{
    const res =  await getNowPlaying();
    const data = res.data.results;
    return { props: { data } }
}


const NowPlaying =({data}) =>{
  return (
  <div>
    {data.map((movie) =>  (
      <div>
        <div>{movie.title}</div>
        <img src={getImg(movie.id)} alt='now playing img' />
      </div>
    ))}
  </div>
  // console.log(data)
  )
}

export default NowPlaying;