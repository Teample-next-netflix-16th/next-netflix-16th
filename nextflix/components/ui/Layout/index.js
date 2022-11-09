import styled from 'styled-components'
import TopNav from '../TopNav';
import Footer from '../Footer';

const Box = styled.div`
  position: relative;
  display: flex;
  width: 30%;
  height: 812px;
  //   추후에 100%로 수정 -> 걍 position을 absol로 바꿔야하나 ㄱ-
  background-color: black;
  border-style: dotted;
  border-color: white;
  margin: auto;
`;


const Layout = ({children}) => {
  return (
    <Box>
        <TopNav/>
        {children}
        <Footer/>
    </Box>
  )
}

export default Layout
