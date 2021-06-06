//react
import React ,{useState, useEffect, useRef} from 'react';

// style
import styled from "styled-components";


const App = (props) => {
    const gridRef = useRef();
    const [scrollHeight, setScrollHeight] = useState(2000);

    const setHeight = () => {
      setScrollHeight((gridRef.current.offsetWidth - window.innerWidth) + (1027 - (937 - window.innerHeight))  );
    }

    // 초기 height 값 조정
    useEffect(() => {
      setHeight();
    }, [])

    // resize 시 height 값 조정
    window.addEventListener("resize", () => {
        if(!gridRef.current){return}
        setHeight();
    }, [])

    // 스크롤 이벤트
    window.addEventListener("scroll", (e) => {
        if(!gridRef.current){return}
        let currentScroll = window.scrollY;
        gridRef.current.style.left=`${-1 * currentScroll}px`;
    })


    return(
        <Container>
            <GridWrap ref={gridRef}>
              Hello
            </GridWrap>

            {/* 스크롤을 위한 컨텐츠입니다. */}
            <ForScroll scrollHeight={scrollHeight}></ForScroll>
        </Container>
    )
};

export default App;

const Container = styled.div`
    &::-webkit-scrollbar {
        display: none;
    }
`
const ForScroll = styled.div`
    ${({scrollHeight})=>{
    return (`height:${scrollHeight}px`)
    }}

`

const GridWrap = styled.div`
    z-index:1;
    position: fixed;
    width:8772px;
    height: 100vh;
    background-color: salmon;
    text-align: right;
    margin: 0 0 0 76px;
`