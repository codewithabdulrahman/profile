import React from 'react'
import styled from 'styled-components'
import { workExperienceData } from './data';
const  OuterMainContainer= styled.div`
width:100%;
background-color: rgba(246, 167, 209, 0.7);
#page_heading{
    color: #93d2bd;
    width: 83%;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 1px 0 #000;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 31px;
    font-weight: 500;
    display: block;
    margin: 30px auto;
    span{
    color:rgb(247, 86, 180);
}
}

`;
const WorkExperienceContainer = styled.div`
width: 83%;
display: grid;
margin:0 auto;

grid-template-columns: repeat(2, 1fr);
@media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ExperienceCards = styled.div`
border: 1px solid black;
    border-radius: 0;
    padding: 20px;
    margin: 10px;
    text-align: center;
    background: linear-gradient(170deg, #ffebca, #f6e6f9);
    text-align: start;
    display: flex;
    align-items: start;
    justify-content: end;
    flex-direction: column;
    box-shadow: 2px 2px 1px black;
    transition: transform 0.3s, box-shadow 0.3s;

&:hover {
  box-shadow: 2px 2px 12px black;
}`
const StartEndDate = styled.div`
    border: 1px solid black;
    background-color: #F6F5F4;
    box-shadow: 2px 2px 0px black;
    padding: 4px 5px;
    -webkit-text-stroke-width: thin;
    word-spacing: -1px;
    font-size: 14px;
    `;
const Position = styled.div`
margin: 8px 0px;
h3{
    color: #7CB69E;
    margin: 0;
    margin: 25px 0px;
    text-shadow: 0px 0px 0 #000, 0px -1px 0 #000, 0px 2px 0 #000;
    span{
        color:rgb(247, 86, 180);
    } 
}
`;
const TextContent = styled.div`
    padding: 12px;
    border: 1.5px solid black;
    box-shadow: 2px 2px 0px black;
    background-color: #F6F5F4;
    
li{
    list-style: none;
    line-height: 1.4;
    font-size: 14px;
    margin-left: 17px;
}
li::before{
    content: '';
    height: 15px;
    width: 15px;
    border: 1px solid;
    border-radius: 50%;
    background-color: purple;
    display: block;
    position: relative;
    left: -22px;
    top: 19px;
}

`;

const CardButton = styled.div`
button {
  border: 1px solid black;
  background-color: #FBB9A2;
  padding: 7px;
  -webkit-text-stroke-width: thin;
  word-spacing: -1px;
  font-size: 14px;
  margin-top: 22px;
  transition: transform 0.3s, box-shadow 0.3s;

}
@media (max-width: 600px) {
    button{
        font-size:12px;

    }
  }

button:hover {
  transform: scale(1.09); 
  box-shadow: 2px 2px 12px black;
}
`;
function WorkExperience() {
  return (
    <OuterMainContainer>
         <h1 id='page_heading' >WORK <span>EXPERIENCE</span></h1>
<WorkExperienceContainer>
    {workExperienceData.map((box, index) => (
            <ExperienceCards >
        <StartEndDate>
     <span>{box.StartEndDate}</span>
        </StartEndDate>
        <Position>
            <h3 style={{color:'#7CB69E'}}>{box.title1} <span>{box.title2}</span></h3>
        </Position>
        <TextContent>
            <h4>Resposiblities</h4>

<li>{box.responsibility.point1}</li>
<li>{box.responsibility.point2}</li>
<li>{box.responsibility.point3}</li>
        </TextContent>
        <CardButton>
            <button>{box.buttonText}</button>
        </CardButton>
    </ExperienceCards>
        
))}
</WorkExperienceContainer>
</OuterMainContainer>

  )
}

export default WorkExperience