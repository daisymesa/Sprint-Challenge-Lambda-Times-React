import React from 'react';
import styled from "styled-components";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const HeaderH1Div = styled.div`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const HeaderDateDiv = styled.div`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;
`;

const HeaderTempDiv = styled.div`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;


const Header = () => {
  return (
    <HeaderDiv>
      <HeaderDateDiv>SMARCH 32, 2018</HeaderDateDiv>
      <HeaderH1Div>Lambda Times</HeaderH1Div>
      <HeaderTempDiv>98°</HeaderTempDiv>
    </HeaderDiv>
  )
}

// const Header = () => {
//   return (
//     <div className="header">
//       <span className="date">SMARCH 32, 2018</span>
//       <h1>Lambda Times</h1>
//       <span className="temp">98°</span>
//     </div>
//   )
// }

export default Header