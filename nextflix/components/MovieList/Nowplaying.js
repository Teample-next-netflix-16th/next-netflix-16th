// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import { getNowPlaying } from '../../pages/api/api'

// const MoviePoster = styled.img`
//   width: 100px;
//   height: 100px;
// `

// export const getServerSideProps = async () => {
//   const res = await getNowPlaying()
//   const data = res.data

//   return { props: { data } }
// }

// const NowPlaying = ({ data }) => {
//   const [movies, setMovies] = useState([])

//   useEffect(() => {
//     setMovies(data.results)
//   }, [movies])

//   return (
//     <div>
//       {movies.map((movie) => (
//         <div key={movie.id}>
//           <MoviePoster
//             src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
//           />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default NowPlaying
