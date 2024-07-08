import React from 'react';
import styled from 'styled-components';
import aboutBkImage from '../Assets/Untitled-1.jpg';
import aboutPic from '../Assets/nikolaMarz.PNG'
import logo1 from '../Assets/Belogo.webp'
import logo2 from '../Assets/instagram.webp'
import logo3 from '../Assets/linkdin.png'
const AboutContainer = styled.div`
  background-image: url(${aboutBkImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 220px 30px;
  background-color: red;
  img{
    width: 65%;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    padding: 170px 0px;
    img{
    width: 100%;
}
}

`;
const LeftBox = styled.div`
width: 50%;
display: flex;
  align-items: center;
  justify-content: end;
  @media (max-width: 750px) {
    width: 83%;
  justify-content: center;
  }
`;
const RightBox = styled.div`
width: 50%;
@media (max-width: 750px) {
    width: 83%;
        display: flex;
        justify-content: center;
        flex-direction: column;

}

h1{
    color: #93d2bd;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 1px 0 #000;
}
span{
    color: #f054af;
}
p{
    border: 2.5px solid black;
    background-color: #FFF0CC;
    box-shadow: 2px 2px 0px black;
    padding: 6px;
    -webkit-text-stroke-width: thin;
    word-spacing: -1px;
    width: 85%;
    margin: 20px 0px;
    @media (max-width: 750px) {
    width: 100%;
}
}
`;
const Logos = styled.div`
display: flex;
gap: 20px;

img{
    width: 50px;
    height: 50px;
    border: 2px solid black;
    padding: 8px;
    background-color: #F6F6F5;
    &:hover {
  transition: all 0.3s ease;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
}
}
`;
function About() {
  return (
    <AboutContainer>
 <LeftBox>
    <img src={aboutPic} alt="about-pic" />

 </LeftBox>
 <RightBox>
<div className="text_box">
    <h1>NIKOLA <span>MRAZ</span></h1>
    <p>Hello! I'm Mikola Mraz, a web designer based in Prague, Czech Republic.
Inspired by Prague's artistic heritage. I've always been passionate about
blending creativity with technology. My journey into design started with a
fascination for digital art and a drive to create impactful online experiences.
Now, I specialize in crafting visually stunning and intuitive websites that
leave a lasting impression.</p>

</div>
<Logos>
<img src={logo1} alt="" />
<img src={logo2} alt="" />
<img src={logo3} alt="" />
</Logos>
 </RightBox>
    </AboutContainer>
  );
}

export default About;
