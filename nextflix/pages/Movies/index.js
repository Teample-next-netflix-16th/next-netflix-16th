// import axios from 'axios';
// import React, { useState,useEffect } from 'react';
// import { use } from 'react';

// // const Movies = () =>{
// //     console.log(getMovies());

// //     return(
// //         <div>
// //             {/* {Movie.data} */}
// //         </div>
// //     );
// // }

// // export const getMovies = async () =>{
// //     // const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=f85ba1745021cb0f98ac340407ad592b`);
// //     const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=f85ba1745021cb0f98ac340407ad592b`);
// //     // const data = await response.json();
// //     console.log(response);
// //     // return data;
// // }


// // const api = axios.create({
// //     baseURL: 'https://api.themoviedb.org/3/movie/',
// //     params: {
// //       api_key: '761b201bf66269aa06a33c1d922810c2',
// //       language: 'ko'
// //     }
// //   });
  
// //   export const movieApi = {
// //     nowPlaying: () => api.get('now_playing'),
// //     // popular: () => api.get('popular'),
// //     // topRated: () => api.get('top_rated'),
// //     // upcoming: () => api.get('upcoming'),
// //   }

// //   export const getMovies = async () =>{
// //     const response = await  api.get('now_playing');
// //     // console.log(movieApi);
// //     return response.data.results;
// //   }

// export const getServerSideProps = async () =>{
//     const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=f85ba1745021cb0f98ac340407ad592b`)
//      const data = res.data

//   return { props: { data } }
// }

// const Movies = ({movies}) =>{
//     console.log(movies);
// }

// export default Movies;