import styled from "styled-components";
const StyledCardDiv=styled.div`
  width: 300px;
  border: 1px solid black;
  box-sizing: border-box;
  > img{
    height: 70%;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
  >div{
    padding: 10px;
  }
`;