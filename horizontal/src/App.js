import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import LocomotiveScroll from 'locomotive-scroll';
import Header from './components/header/header';


function App() {





  
  return (
    <Container>
      {/* 헤더 */}
      <Header />

      <Main>
        <Scroll>
          <Content>

            <Gallery>

            </Gallery>


          </Content>
        </Scroll>
      </Main>


    </Container>
  );
}

export default App;


const Container = styled.div`
    width: 100%;
`

const Main = styled.div`
  width: 100%;
`

const Scroll = styled.div`
  width: 100%;
`

const Content = styled.div`
  width: 100%;
`

const Gallery = styled.div`
  width: 100%;
`

