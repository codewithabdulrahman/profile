import { IoRocketOutline } from "react-icons/io5";
import { BsVectorPen } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";
import logo from '../Assets/WhatsApp Image 2024-07-02 at 12.33.21_9e4338b7.jpg'

export const boxData = [
  {
    icon: <IoRocketOutline />,
    innerBox: {
      heading: "Markeeting Implements",
      para: "I'II Desing your product base on markeeting and promotions",
    },
    button: "see more",
  },
  {
    icon: <BsVectorPen />,
    innerBox: {
      heading: "UI/UX",
      para: "I'II Desing as intractive sleek and intutive user interface",
    },
    button: "see more",
  },
  {
    icon: <RiCodeSSlashFill />,
    innerBox: {
      heading: "Frontend Development ",
      para: "I'II create you site optimized creative and responsive",
    },
    button: "see more",
  },
];

export const projectsData = [
  {
    title: "Card 1",
    description: "Description for card 1",
    image:logo,
    skills: {
      skill1:"HTML", 
      skill2:"CSS", 
      skill3:"JavaScript"
    },
    specialties: "Web Development",
    experience: "Portfolio",
  },
  {
    title: "Card 2",
    description: "Description for card 2",
    image: "../Assets/contact us.jpg",
    skills: {
      skill1:"react ", 
      skill2:"web", 
      skill3:"Angular"
    },    specialties: "Frontend Development",
    experience: "Web Application",
  },
  {
    title: "Card 3",
    description: "Description for card 3",
    image: "../Assets/contact us 2.jpg",
    skills: {
      skill1:"Angular", 
      skill2:"php", 
      skill3:"ruby"
    },    specialties: "Backend Development",
    experience: "API Development",
  },
];

