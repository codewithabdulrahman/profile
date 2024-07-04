import React from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { boxData } from "./data";
import { MdArrowDownward } from "react-icons/md";
import Projects from "./Projects";
import About from "./About";
import EdactionStudies from "./EducationStudies";
const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 39px;
  width: 100%;

  #home_top_heading {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #93d2bd;
    text-shadow: 3px 3px 2px black;
    height: 200px;
    text-align: center;
    margin: 0px auto;
    margin-top: 85px;
    letter-spacing: -1px;
    h1 {
      margin: 0px;
      font-size: 60px;
      @media (max-width:550px) {
font-size:40px;
    }
    }
  }
  #purple {
    color: #f054af;
  }
  .home_project_btn {
    width: 175px;
    margin: 45px 0px;
    padding: 6px 0px;
    border: 1.5px solid;
    background: linear-gradient(45deg, #93ddc4, #84eda7);
    display: flex;
    align-items: center;
    justify-content: center;
    word-spacing: -1px;
    letter-spacing: -0.3px;
    -webkit-text-stroke-width: thin;
    font-size: 14px;

  }
  .home_footer_section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: #93d2bd;
    margin-top: 20px;
    text-transform:uppercase;
    letter-spacing: 0.8px;
    font-size: 17px;
    @media (max-width:601px) {
      flex-direction: column;
      gap: 15px;  
      }
  }
  .home_footer_section>h4 {
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      2px 1px 0 #000;
    margin: 9px;
    font-size: 19px;
    font-weight: 500;
  }
  h3,
  .section_top {
    color: #f4f3f2;
  }
  h3,
  .section_bottom {
    color: #f054af;
  }
  #working_feature {
    background-color: #feefcb;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 53px;
  }
  #working_feature > h4 {
    color: #93d2bd;
    width: 84%;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      2px 1px 0 #000;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 31px;
      font-weight: 500;
  }

  #inner_box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    margin: 0 auto;
  }
  @media (max-width:940px) {
    #inner_box {
      flex-direction: column;
  }
    }
`;
const TextContent = styled.div`
  border: 2px solid black;
  width: fit-content;
  padding: 0px 11px;
  background: white;
  box-shadow: 2px 4px 0px 0px black;
  text-align: center;
  margin-top: 20px;
  line-height: 0.9;
  -webkit-text-stroke-width: thin;
  word-spacing: -1px;
  @media (max-width:550px) {
    margin: 0px 13px
      }
  p{
    margin-top:10px;
    margin-bottom: 10px;
  }
`;
const ContainerBox = styled.div`
  border: 1px solid black;
  border-radius: 0;
  padding: 20px;
  margin: 10px;
  text-align: center;
  background: linear-gradient(170deg, #ffebca, #f6e6f9);
  text-align: start;
  height: 410px;
  display: flex;
  align-items: start;
  justify-content: end;
  flex-direction: column;
  box-shadow: 2px 2px 1px black;

  @media (max-width:940px) {
width:80%;
    }
  @media (max-width:430px) {
width:95%;
    }
  .box_image {
    font-size: 26px;
    box-shadow: 2px 2px 1px black;
    border: 1px solid;
    padding: 7px 14px;
    background: #f6f5f4;
  }
  .card_text {
    border: 1px solid;
    background-color: #f6f5f4;
    padding: 0px 8px;
    margin: 16px 1px;
    box-shadow: 2px 2px 1px black;
    -webkit-text-stroke: thin;
    height: 170px;
   
  }
 

  #card_button {
    width: 96px;
    height: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    border: 1.5px solid;
    box-shadow: 2px 2px 1px black;
    background: linear-gradient(45deg, #93ddc4, #84eda7);
  }
  h4{
    margin: 8px 0px;
  }


`;

function Home() {
  return (
    <HomeContainer>
      <div id="home_top_heading">
        <h1>
          SALES <span id="purple">ENSURED</span> BY
        </h1>
        <h1>
          <span id="purple">REMARKABLE</span> DESIGN{" "}
        </h1>
      </div>
      <TextContent>
        <p>
          I specialize in crafting websites that not only look amazing but also{" "}
        </p>
        <p>are optimized for performance and user experience </p>
      </TextContent>
      <button className="home_project_btn">
        Click The Projects <FaArrowRight style={{marginLeft:"5px"}}/>
      </button>

      <div className="home_footer_section">
        <h4>
          <span className="section_top">Animations &</span>
          <br />
          <span className="section_bottom">intractions</span>
        </h4>
        <h4>
          <span className="section_top">Responsive</span>
          <br />
          <span className="section_bottom" style={{ color: "#D9943A" }}>
            Design
          </span>
        </h4>
        <h4>
          <span className="section_top">Branding &</span>
          <br />
          <span className="section_bottom">Identity</span>
        </h4>
        <h4>
          <span className="section_top">Webflow &</span>
          <br />
          <span className="section_bottom" style={{ color: "#D9943A" }}>
            Development
          </span>
        </h4>
      </div>
      <div id="working_feature">
        <h4>
          Working <span id="purple">Features</span>
        </h4>
        <div id="inner_box">
          {boxData.map((box, index) => (
            <ContainerBox key={index} className="box card">
              <span className="box_image">{box.icon}</span>
              <div className="card_text">
                <h4>{box.innerBox.heading}</h4>
                <p>{box.innerBox.para}</p>
              </div>

              <button id="card_button">
                {box.button} <MdArrowDownward style={{marginTop:'3px'}} />
              </button>
            </ContainerBox>
          ))}
        </div>
      </div>
      <Projects />
      <About />
      <EdactionStudies />
          </HomeContainer>
  );
}

export default Home;
