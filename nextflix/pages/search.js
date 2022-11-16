import styled from 'styled-components';
import Layout from '../components/ui/Layout'
import {AiOutlineSearch} from 'react-icons/ai';
import {GrClose} from 'react-icons/gr';
import {FaRegPlayCircle} from 'react-icons/fa';


const search = () => {
    
    return (
      <Layout>
        <InputBox>
          <AiOutlineSearch style={{color: '#C4C4C4', fontSize: '30px', height:'100%', textAlign:'center', padding:'5px', marginLeft:'15px'}} />
          <Input placeholder="Search for a show, movie, genre, e.t.c." />
          <GrClose style={{color: '#C4C4C4', fontSize: '30px', height:'100%', textAlign:'right', padding:'5px', marginRight:'15px'}} />
        </InputBox>
        <Category>Top Searches</Category>
        <MovieContainer>
          <Movie>
            <Poster />
            <Title>title</Title>
            <FaRegPlayCircle className='play' />
          </Movie>
        </MovieContainer>
      </Layout>
    )
}

const InputBox =  styled.div`
  background-color: #424242;
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  margin-top: 44px;
`;

const Input = styled.input`
  background-color: #424242;
  width: 100%;
  height: 52px;
  border: none;
  outline: none;
  color: white;
  font-size: 15.21px;
  ::placeholder  {
    color: #C4C4C4;
    font-size: 15.21px;
  }

`;

const Category = styled.h3`
  font-size: 27px;
  margin-left: 12px;
  color: white;
  font-size: 24px;
  margin-left: 15px;
`

const MovieContainer = styled.div`

`

const Movie = styled.div`
  width: 100%;
  background-color: #424242;
  margin-bottom: 5px;
  height: 76px;
  display: flex;
  flex-direction: row;
  .play {
    color: white;
    width: 23px;
    height: 23px;
    margin-right: 20px;
    margin-top: 10px;
  }
`;

const Poster = styled.div`
  background-color: white;
  width: 146px;
  height: 76px;
`;

const Title = styled.div`
  font-size:  14.72px;
  color: white;
`;

export default search;