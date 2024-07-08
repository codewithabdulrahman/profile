import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from "react-icons/fa";
import capture from '../Assets/Capture.PNG'
import capture1 from '../Assets/Capture1.PNG'
import capture2 from '../Assets/Capture2.PNG'
import capture3 from '../Assets/Capture3.PNG'
const MainContainer = styled.div`
width:87%;

#heading_project{
    font-size: 150px;
    width: 100%;
    text-align: center;
    color: #93d2bd;
    text-transform: uppercase;
    text-shadow: 0px -2px 0 #000, -1px 5px 0 #000, -2px -4px 0 #000;
    height: 226px;
    margin-top: 40px;

    }
    #purple{
        color: #f054af;
    }

    @media (max-width: 750px) {
#heading_project{
    font-size:100px;
}
}
    @media (max-width: 550px) {
#heading_project{
    font-size:80px;
    height: 120px;
}
}
    @media (max-width: 404px) {
#heading_project{
    font-size: 57px;
    height: 100px;
}
}
`;
const ProjectsContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  display: flex;
  gap: 25px;
  @media (max-width: 750px) {
    flex-direction: column;
}
`;
const LeftCards = styled.div`
display:flex;
flex-direction: column;
gap: 25px;
width: 50%;
@media (max-width: 750px) {
width:100%;
}
#check_all_btn{
    width: 175px;
    padding: 11px 0px;
    border: 1.5px solid;
    background: linear-gradient(45deg, #93ddc4, #84eda7);
    display: flex;
    align-items: center;
    justify-content: center;
    word-spacing: -1px;
    letter-spacing: -0.3px;
    -webkit-text-stroke-width: thin;
    font-size: 15px;
    margin: 0 auto;
    transition: transform 0.3s, box-shadow 0.3s;

&:hover {
  transform: scale(1.09); 
  box-shadow: 2px 2px 12px black;
}
    @media (max-width: 750px) {
        display: none;
}
}
`;
const RightCards = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 25px;
margin-top: 100px;
width: 50%;
@media (max-width: 750px) {
width:100%;
margin-top: 10px;

}
#check_all_btn1{
    width: 175px;
    padding: 11px 0px;
    border: 1.5px solid;
    background: linear-gradient(45deg, #93ddc4, #84eda7);
    display: none;
    word-spacing: -1px;
    letter-spacing: -0.3px;
    -webkit-text-stroke-width: thin;
    font-size: 15px;
    margin: 0 auto;
    transition: transform 0.3s, box-shadow 0.3s;


&:hover {
  transform: scale(1.09); 
  box-shadow: 2px 2px 12px black;
}
    @media (max-width: 750px) {
        display: block;
}
}
`;
const ProjectCard = styled.div`
      border: 3px solid black;
    padding: 20px;
    margin-bottom: 15px;
    background-color: #fff;
    width: 100%;
    height: auto;
    background: linear-gradient(170deg, #ffebca, #f6e6f9);
    box-shadow: 2px 2px 0px black;
    transition: transform 0.3s, box-shadow 0.3s;

&:hover {
  box-shadow: 2px 2px 12px black;
}
    #card_heading{
        color: #7CB69E;
        margin: 0;
        margin-top: 20px;
        text-shadow: 0px 0px 0 #000,0px -1px 0 #000,0px 2px 0 #000;

    }
    span{
        color: #EB9F3D;
        font-size: 20px;
        font-weight: 700;
        text-shadow: 0px 1px 0 #000, 1px 1px 0 #000, 1px 2px 0 #000;

    }
    #card_para{
        border: 2.5px solid black;
    background-color: #F6F5F4;
    box-shadow: 2px 2px 0px black;
    padding: 4px 5px;
    -webkit-text-stroke-width: thin;
    word-spacing: -1px;

    }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;



`;

const ProjectSkills = styled.ul`
  list-style: none;
  padding: 0;
  width: 98%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li{
    border: 1px solid black;
    background-color: #F6F5F4;
    box-shadow: 2px 2px 0px black;
    padding: 4px 5px;
    -webkit-text-stroke-width: thin;
    word-spacing: -1px;
font-size: 14px;
@media only screen and (max-width: 890px) and (min-width: 750px)  {
    padding: 4px 0px;
    font-size: 13px;
}

  }
  @media only screen and (max-width: 450px)  {
flex-direction: column;
align-items: start;
justify-content: start;
width: 100%;
gap: 13px;
height: 120px;
margin-top: 12px;
}

`

const ProjectButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #FBB9A2;
  border: 1px solid;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

&:hover {
  transform: scale(1.09); 
  box-shadow: 2px 2px 12px black;
}

`;

const Projects = () => {
  return (
    <MainContainer>
      <h2 id='heading_project'>Proj<span id='purple'>ects</span> </h2>
    <ProjectsContainer>
     <LeftCards>
     <ProjectCard>
        <ProjectImage src={capture2} alt="Card 1" />
        <h3 id='card_heading'>PORTFOLIO SPECIALIST</h3>
        <span>WEBSITE</span>
        <ProjectSkills>
          <li>portfolio website</li>
          <li>webflow</li>
          <li>responsive design</li>
        </ProjectSkills>
        <p id='card_para'>Created a tailored portfolio specialist website to exhibit my specialization in web design. Leveraging my proficiency in HTML/CSS and JavaScript. I created a dynamic plateform that not only displays my projects but also demonstrates my understanding of user interface designe principle and best practices.</p>
        <ProjectButton>Drive into Project <FaArrowRight style={{marginLeft:"5px"}}/></ProjectButton>
      </ProjectCard>
      
      <ProjectCard>
        <ProjectImage src={capture1} alt="Card 2" />
        <h3 id='card_heading'>VEGAN RESTURENT</h3>
        <span>BUSSINESS CARD SITE</span>
        <ProjectSkills>
          <li>Brandldentity</li>
          <li>graphic design</li>
          <li>UI/UX design</li>
        </ProjectSkills>
        <p id='card_para'>Crafted a vibrant online plateform for a vegan resturant, reflecting the essence of plant-based cuisine through intuitive design and engaging visuals. With a focus on sustainability and wellness, the website offers a seamless browsing experience for health-conscious diners seeking delicious meat-free options.</p>
        <ProjectButton>Drive into Project <FaArrowRight style={{marginLeft:"5px"}}/></ProjectButton>
      </ProjectCard>
      <button id='check_all_btn'>Check all the project</button>
     </LeftCards>


     <RightCards>
     <ProjectCard>
        <ProjectImage src={capture3} alt="Card 3" />
        <h3 id='card_heading'>VIP TRAVEL AGENCY LANDING</h3>
        <span>LANDING</span>
        <ProjectSkills>
          <li>Web Design</li>
          <li>Visual Design </li>
          <li>Atractive design</li>
        </ProjectSkills>
        <p id='card_para'>Designed and developed a bespok website for a VIP travel agency, elevating the online presence for match the prestige of their services. With a focus on opulent aesthetics and intuitive navigation, the website offer a seamless journey for discerning clients seeking unparalleled travel experiences.</p>
        <ProjectButton>Drive into Project <FaArrowRight style={{marginLeft:"5px"}}/></ProjectButton>
      </ProjectCard>
     <ProjectCard>
        <ProjectImage src={capture} alt="Card 3" />
        <h3 id='card_heading'>BABYSITTER AGNCY</h3>
        <span>WEBSITE</span>
        <ProjectSkills>
          <li>Responsive Design</li>
          <li>Web flow</li>
          <li>Web Design</li>
        </ProjectSkills>
        <p id='card_para'>Designed a professional and user-friendly website for a babysitter agency, prioritizing safety and trust. With a clean and intuitive layout, the website facilitates easy navigation for parents seeking reliable childcare services, while highlighting the agency's commitment to vetted and qualified babysitters.</p>
        <ProjectButton>Drive into Project <FaArrowRight style={{marginLeft:"5px"}}/></ProjectButton>
      </ProjectCard>
      <button id='check_all_btn1' className='check_all_btns'>Check all the project</button>

     </RightCards>

    </ProjectsContainer>
    </MainContainer>
  );
};

export default Projects;
