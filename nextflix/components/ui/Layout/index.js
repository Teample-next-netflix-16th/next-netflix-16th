import styled from 'styled-components'
import logo from './Netflix-logo.png'

const Box = styled.main`
  position: relative;
  display: flex;
  width: 30%;
  height: 812px;
  //   추후에 100%로 수정 -> 걍 position을 absol로 바꿔야하나 ㄱ-
  background-color: black;
  border-style: dotted;
  border-color: white;
  margin: auto;
`

const TopNavbar = styled.nav`
margin-top: 10%;
width: 90%;
height: 8%;
display: flex;
justify-content: space-between;
opacity: 1;
margin-left: auto;
margin-right: auto;

a{
    text-align: center;
    color: white;
    height; 54px;
    margin-right: 25px;
    font-weight: 400;
    font-size: 17.1968px;
    cursor: pointer;
}
`

const Home = styled.img`
  cursor: pointer;
  margin-right: 25px;
`

const Layout = () => {
  return (
    <Box>
      <TopNavbar>
        <Home src="Netflix-logo.png" alt="logo"></Home>
        <a>TV Shows</a>
        <a>Movies</a>
        <a>My List</a>
      </TopNavbar>
    </Box>
  )
}

export default Layout
