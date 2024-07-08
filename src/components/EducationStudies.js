import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import styled, { keyframes } from 'styled-components';

// move the dive from left to actual position
const moveLeft = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
`;
const EducationContainer = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background-color: rgba(246, 167, 209, 0.7);

  #page_heading{
    color: #97D8C2;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 1px 0 #000;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 31px;
    font-weight: 500;
    width: 83%;
    margin:  12px auto;
  }
  `

const StyledCardContainer = styled.div`
  width: 85%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  animation: ${moveLeft} 2s linear ;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardContainer = styled.div`
  margin: 0px 20px;
  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

const StudiesYear = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const YearHeading = styled.h1`
  padding: 0;
  color: #FEAD42;
  margin-top: 30px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 1px 0 #000;
`;

const BorderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 20px 0px;
  justify-content: center;
`;

const Border = styled.div`
  width: 50%;
  height: 10px;
  background-color: #FEF2CC;
`;

const Circle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #F054AF;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background: linear-gradient(185deg, #DDEFFE, #FBDCFB);
  box-shadow: 2px 2px 0px black;
  padding: 20px;
  gap: 20px;
  border: 1.5px solid black;
  height: 520px;
  &:hover {
  transition: all 0.3s ease;
  box-shadow: 6px 8px 9px 10px rgba(0, 0, 0, 0.6);
}
`;

const ImageBox = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid black;
  box-shadow: 2px 2px 0px black;
  padding: 10px;
  height: 50px;
`;

const Icon = styled(FaUserGraduate)`
  font-size: 45px;
  background-color: blue;
  color: white;
`;

const ContentBox = styled.div`

  padding: 12px;
  border: 1.5px solid black;
  box-shadow: 2px 2px 0px black;
  background-color: #F6F5F4;
  
  h5 {
    margin: 5px 0px;
    padding: 0;
  }
`;

const DurationStudy = styled.div`
  width: fit-content;
  padding: 10px;
  border: 1px solid black;
  box-shadow: 2px 2px 0px black;
  background-color: #FBB9A2;
  &:hover {
  transition: all 0.3s ease;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
}
  span {
    font-size: 15px;
    font-weight: 600;
  }
`;

function EducationStudies() {
  return (
    <EducationContainer>
      <h1 id="page_heading">
        <span  >EDUCATION</span> <span style={{color:'#FAA941'}}>&</span> <span style={{color:'#F756B4'}}>STUDIES</span>
      </h1>
      <StyledCardContainer>
        <CardContainer>
          <StudiesYear>
            <YearHeading>2016</YearHeading>
            <BorderContainer>
              <Border />
              <Circle />
              <Border />
            </BorderContainer>
          </StudiesYear>

          <CardBox>
            <ImageBox>
              <Icon />
            </ImageBox>
            <ContentBox>
              <h5>Bachelor of Science in Web Design</h5>
              <p>
                This comprehensive education provided both theoretical knowledge and practical skills in web design and development.
              </p>
            </ContentBox>
            <DurationStudy>
              <span>5 Years</span>
            </DurationStudy>
          </CardBox>
        </CardContainer>

        <CardContainer>
          <StudiesYear>
            <YearHeading>2018</YearHeading>
            <BorderContainer>
              <Border />
              <Circle />
              <Border />
            </BorderContainer>
          </StudiesYear>

          <CardBox>
            <ImageBox>
              <Icon />
            </ImageBox>
            <ContentBox>
              <h5>Responsive Web Design</h5>
              <p>
                This specialized training focused on responsive design techniques, CSS frameworks, and a mobile-first approach.
              </p>
            </ContentBox>
            <DurationStudy>
              <span>6 Months</span>
            </DurationStudy>
          </CardBox>
        </CardContainer>

        <CardContainer>
          <StudiesYear>
            <YearHeading>2021</YearHeading>
            <BorderContainer>
              <Border />
              <Circle />
              <Border />
            </BorderContainer>
          </StudiesYear>

          <CardBox>
            <ImageBox>
              <Icon />
            </ImageBox>
            <ContentBox>
              <h5>VerVaunt Part-time Internship</h5>
              <p>
                During this internship, we worked on real-world web design projects and applied our knowledge in a professional setting.
              </p>
            </ContentBox>
            <DurationStudy>
              <span>1 Year</span>
            </DurationStudy>
          </CardBox>
        </CardContainer>
      </StyledCardContainer>
    </EducationContainer>
  );
}

export default EducationStudies;
