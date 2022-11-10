import styled from 'styled-components'
import Footer from '../Footer'

const Box = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  height: 812px;
  //   추후에 100%로 수정 -> 걍 position을 absol로 바꿔야하나 ㄱ-
  background-color: black;
  margin: auto;


`
const Children = styled.div`
position: absolute;
width: 100%;
height: 100%;
overflow: scroll;
z-index: 997;
`;

const Layout = ({ children }) => {
  return (
    <Box>
      <Children>{children}</Children>
      <Footer />
    </Box>
  )
}

export default Layout
