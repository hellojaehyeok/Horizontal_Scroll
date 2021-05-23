import React ,{useState, useEffect, useRef} from 'react';

// style
import styled from "styled-components"



const Main = (props) => {
    const gridRef = useRef();
    const scrollRef = useRef();
    const [heightGap, setHeightGap] = useState(2500);

    useEffect(() => {
      // setHeightGap((window.innerWidth * 2.5) - (window.innerWidth - window.innerHeight));
      setHeightGap(window.innerWidth * 2.5);
      console.log(scrollRef.current.clientWidth);
      // console.log(gridRef.current.clientWidth);
      // console.log(window.innerWidth * 2.5);
      // console.log(window.innerWidth - window.innerHeight);
      // console.log((window.innerWidth * 2.5) - (window.innerWidth - window.innerHeight));
    }, []);

    window.addEventListener("scroll", (e) => {
        if(gridRef.current){
            let currentScroll = window.scrollY;
            // 이계산식을 손봐야함  
            gridRef.current.style.left=`${-1 * currentScroll}px`;
            // console.log(gridRef.current.getBoundingClientRect());
            // console.log(gridRef.current.getBoundingClientRect().x);
            // console.log(gridRef.current.getBoundingClientRect().left);
        }
    })


    return(
        <Container>

          <GridWrap className="test" ref={gridRef}> 
            qweqwe
          </GridWrap>

          <ForScroll ref={scrollRef} heightGap={heightGap}></ForScroll>
        </Container>
    )
};

export default Main;

const Container = styled.div`
`

const ForScroll = styled.div`

  /* ${({heightGap})=>{
      return(` height:${heightGap}px;`)
  }} */
  height:2000px;
  border: 1px solid slateblue;
`

const GridWrap = styled.div`
  height:100%;
  width:2500px;
  z-index:1;
  position: fixed;
  border:10px solid salmon;
`