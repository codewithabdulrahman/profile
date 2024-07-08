import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ClientFeedBack } from './data';

const moveLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const OuterContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  #client_page_heading{
    color: #97D8C2;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 1px 0 #000;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 31px;
    font-weight: 500;
    width: 83%;
    margin: 0 auto;
    height: 130px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

const FeedbackWrapper = styled.div`
  display: flex;
  animation: ${moveLeft} 50s linear infinite;
  width: calc(400px * ${ClientFeedBack.length}); 
`;

const FeedbackCard = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 8px;
  margin: 10px;
  width: 400px;
  height: fit-content;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(170deg, #DDF0FF, #FDDBFA);

  .leftBox {
    width: 40%;
    object-fit: cover;
    margin-top: -40px;
  }

  img {
    width: 60%;
    height: 70%;
    box-shadow:2px 2px 0px black;
    border: 1px solid black;
  }

  .rightBox {
    width: 60%;
    border: 1px solid;
    background-color: #f6f5f4;
    padding: 0px 8px;
    box-shadow: 2px 2px 1px black;
    -webkit-text-stroke: thin;
  }
  .rightBox h5 {
    width: 100%;
    text-align: end;
    font-size: 15px;
  }
`;

// Q&A css is starting from here 

const QAContainer = styled.div`
width:85%;
display: block;
margin: 0 auto;
#QA_heading{
    font-size: 150px;
    width: 100%;
    text-align: center;
    color: #93d2bd;
    text-transform: uppercase;
    text-shadow:-4px 4px 0 #000,4px 4px 0 #000,2px 2px 0 #000;
    height: 226px;
    margin-top: 40px;
}
    @media (max-width: 750px) {
#QA_heading{
    font-size:100px;
}
}
    @media (max-width: 550px) {
#QA_heading{
    font-size:80px;
    height: 120px;
}
}
    @media (max-width: 404px) {
#QA_heading{
    font-size: 57px;
    height: 100px;
}
}

`
const QAinnerContainer = styled.div`
display: flex;
align-items:center;
justify-content:center;
width: 100%;
gap: 13px;
margin-bottom: 22px;

@media(max-width:500px){
    flex-direction:column;

}
`;
const QuestionBox = styled.div`
    width: 50%;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap: 10px;
    @media(max-width:500px){
        width: 100%;
        align-items: start;
}
#question{

    border: 1px solid black;
    background-color: #F6F5F4;
    box-shadow: 2px 2px 0px black;
    padding: 8px 5px;
    -webkit-text-stroke-width: thin;
    word-spacing: -1px;
    font-size: 14px;
    width: 100%;
}
`;
const AnswerBox = styled.div`
width: 40%;
display: flex;
 align-items:start;
    justify-content:center;
    @media(max-width:500px){
        width: 100%;

}
#answer{
    border: 2.5px solid black;
    background-color: #F6F5F4;
    box-shadow: 2px 2px 0px black;
    padding: 7px;
    -webkit-text-stroke-width: thin;
    word-spacing: -1px;
    position: relative;
    top: -45px;
    @media(max-width:500px){
        position: inherit;
}
}
`;

function ClientFeedback() {
    const navigate = useNavigate();
    return (
    <OuterContainer>
        <h1 id="client_page_heading">WHAT CLIENT<span style={{color:' rgb(247, 86, 180)'}}>THINK ABOUT </span> <span style={{color:' rgb(250, 169, 65)'}}>ME</span></h1>
      <FeedbackWrapper>
        {ClientFeedBack.map((feedback, index) => (
          <FeedbackCard key={index} onClick = {()=> navigate('/https://www.linkedin.com/feed/')}>
            <div className="leftBox">
              <img src={feedback.profile} alt="" />
            </div>
            <div className="rightBox">
              <p>{feedback.message}</p>
              <h5>{feedback.clientName}</h5>
            </div>
          </FeedbackCard>
        ))}
      </FeedbackWrapper>
      <QAContainer>
        <h1 id="QA_heading" style={{color:'#93D2BD'}}>Q <span style={{color:'#F1A33F'}}>&</span> <span style={{color:'#F054AF'}}>A</span></h1>
        <QAinnerContainer>
            <QuestionBox>
                <li id="question">How long does it typically take to complete a website design project?</li>
                <li id="question">Can you assist with search engine optimization (SEO) for my website?</li>
                <li id="question">What happens if I want to make changes in design during the project?</li>
                <li id="question">Will my website be mobile-friendly and responsive?</li>
                <li id="question">Can you assist with website maintenance after the design is complete?</li>
            </QuestionBox>
            <AnswerBox>
<div id="answer">The timeline for each project varies depending on its
complexity and the client's specific needs. However,
on average, a typical website design project takes
around 4-6 weeks from start to finish.</div>
            </AnswerBox>
        </QAinnerContainer>
      </QAContainer>
    </OuterContainer>
  );
}

export default ClientFeedback;
