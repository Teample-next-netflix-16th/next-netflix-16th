import axios from "axios";
import styled from "styled-components";
import { getNowPlaying } from "../../api/api";


export const getServerSideProps = async () =>{
    const res =  await getNowPlaying();
    const data = res.data;

  return { props: { data } }
}


const NowPlaying =({data}) =>{
    console.log(data);
}

export default NowPlaying;