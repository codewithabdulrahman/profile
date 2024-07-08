import React from "react";
import styled from 'styled-components';
import { easyDreamsData } from './data'

const DreamEasyContainer = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
  padding: 50px 60px;
  position: relative;
  z-index: 1;
  background: linear-gradient(170deg, #DCF0FF, #FDDCFB);

  @media (max-width:660px){
    padding: 15px;
  }
  @media (max-width:380px){
    padding: 5px;
  }
  #page_heading{
    color: #97D8C2;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 1px 0 #000;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 31px;
    gap: 8px;
    font-weight: 500;
    width: 100%;
    height: 190px;
    @media (max-width:544px){
        justify-content: start;

}
    .MainHeading{
        display: flex;
        flex-direction: column;
    }
    #StepDigits{
        font-size: 7rem;
    }
  }
`;

const InnerContainer = styled.div`
  display:flex;
  width: 100%;
  @media (max-width:660px){
    width: 92%;
}
`;

const LeftBox = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;


    @media (max-width:544px){
    align-items: start;
    width: 20%;
}

  h1{
    color: #97D8C2;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 1px 0 #000;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 31px;
    font-weight: 500;
    @media (max-width:544px){
        font-size:16px;
        z-index:1;
}
    @media (max-width:400px){
        font-size:11px;
}
  }
`;

const MiddleBox = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  width: 100px;
  @media (max-width:544px){
    width: 30px;
}
  .line{
    height:50%;
    width: 8px;
    background-color: purple;
    @media (max-width:544px){
    width: 7px;
}
  }
  .dot{
    width: 20px;
    height: 40px;
    margin: 3px 0px;
    border-radius: 50%;
    background-color: black;
    @media (max-width:544px){
        width: 15px;
        height: 30px;
}
  }
`;

const RightBox = styled.div`
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width:544px){
    width: 70%;
}
`;

const CardContent = styled.div`
  margin-top:20px;
  display: flex;
  flex-direction:column;
  gap: 20px;
  .cardPara{
    padding: 12px;
    border: 1.5px solid black;
    box-shadow: 2px 2px 0px black;
    background-color: #F6F5F4;
    width: 100%;
    @media (max-width:544px){
        width: 100%;
    }

  }
  img{
    width: 100%;

  }
`;

function DreamEasy() {
  return (
    <DreamEasyContainer>
      <h1 id="page_heading">
        <div className="MainHeading">
          <span style={{color:'#F756B4'}}>DREAM</span>
          <span>SITE IN</span>
        </div>
        <span style={{color:'#FAA941'}} id="StepDigits">3</span>
        <div className="MainHeading">
          <span style={{color:'#F756B4'}}>EASY</span>
          <span>STEPS</span>
        </div>
      </h1>

        <InnerContainer >
          <LeftBox>
          {easyDreamsData.map((item, index) => (

              <h1 key={index}>
                <span>{item.left_Text.text1}</span><br /> 
                <span style={{color:'rgb(250, 169, 65)'}}>{item.left_Text.text2}</span> <br />
                <span style={{color:'rgb(247, 86, 180)'}}>{item.left_Text.text3}</span> <br />
              </h1>
                  ))}

          </LeftBox>

          <MiddleBox>
            <div className="line" style={{backgroundColor:'#C263FB'}}></div>
            <span className="dot" style={{backgroundColor:'#F054AF'}}></span>
            <div className="line" style={{backgroundColor:'#D079DC'}}></div>
            <span className="dot"style={{backgroundColor:'#F054AF'}}></span>
            <div className="line" style={{backgroundColor:'#E9A4A1'}}></div>
            <span className="dot"style={{backgroundColor:'#F054AF'}}></span>
            <div className="line" style={{backgroundColor:'#F7BB81'}}></div>
          </MiddleBox>

          <RightBox>
          {easyDreamsData.map((item, index) => (

            <CardContent key={index}>
              <div className="cardPara">
                {item.para}
              </div>
              <img src={item.image} alt="Description" />
            </CardContent>
                  ))}
          </RightBox>
        </InnerContainer>
    </DreamEasyContainer>
  );
}

export default DreamEasy;
