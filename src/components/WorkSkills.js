import React from 'react';
import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { SkillsExperienceDetails } from "./data";

const OuterMostContainer = styled.div`
    padding: 20px;
    width: 85%;
#skill_page_heading{
    color: #7CB69E;
    margin: 0;
    margin: 25px 0px;
    text-shadow: 0px 0px 0 #000, 0px -1px 0 #000, 0px 2px 0 #000;
    font-weight: 600;
}
`;

const ContainerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  @media (max-width:820px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width:700px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SkillsCard = styled.div`
  width: 100%;
  border: 1px solid black;
    border-radius: 0;
    padding: 20px;
    margin: 5px;
    background: linear-gradient(170deg, #ffebca, #f6e6f9);
    text-align: start;
    box-shadow: 2px 2px 1px black;
    transition: transform 0.3s, box-shadow 0.3s;
    #progress_Bar{
       border-radius:0;
       height:12px;
       border: 1px solid black;
        box-shadow:1.5px 1px 0px black
    }
    #skill_card_heading{
        border: 1px solid black;
    background-color: #F6F5F4;
    box-shadow: 1.5px 1px 0px black;
    padding: 8px 5px;
    -webkit-text-stroke-width: thin;
    word-spacing: -1px;
    font-size: 14px;
    width: fit-content;
    }
`;

const SkillName = styled.div`
border: 1px solid black;
    background-color: #F6F5F4;
    box-shadow: 1.5px 1px 0px black;
    padding: 2px 5px;
    -webkit-text-stroke-width: thin;
    word-spacing: -1px;
    font-size: 13.5px;
    width: fit-content;
    margin: 8px 0px;
    margin-top:20px;
`;


function WorkSkills() {
  return (
    <OuterMostContainer>
      <h1 id='skill_page_heading'>
        Work <span id="purple">Skills</span>
      </h1>
      <ContainerBox >
        {SkillsExperienceDetails.map((skillSet, index) => (
          <SkillsCard key={index}>
            <h5 id="skill_card_heading">{skillSet.heading}</h5>
            <SkillName>{skillSet.skil1}</SkillName>
            <ProgressBar id="progress_Bar" variant="success" now={skillSet.skill1_expeience} />
            <SkillName>{skillSet.skil2}</SkillName>
            <ProgressBar id="progress_Bar" variant="success" now={skillSet.skill2_expeience}  />
            <SkillName>{skillSet.skil3}</SkillName>
            <ProgressBar id="progress_Bar" variant="success" now={skillSet.skill3_expeience} />
            <SkillName>{skillSet.skil4}</SkillName>
            <ProgressBar id="progress_Bar" variant="success" now={skillSet.skill4_expeience}  />
            <SkillName>{skillSet.skil5}</SkillName>
            <ProgressBar id="progress_Bar" variant="success" now={skillSet.skill5_expeience} />
          </SkillsCard>
        ))}
      </ContainerBox>
    </OuterMostContainer>
  );
}

export default WorkSkills;
