import { IoRocketOutline } from "react-icons/io5";
import { BsVectorPen } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";
import capture5 from '../Assets/Capture5.PNG'
import capture6 from '../Assets/Capture6.PNG'
import capture7 from '../Assets/Capture7.PNG'

import client1 from '../Assets/client1.jpeg'
import client2 from '../Assets/client 2.jpeg'
import client3 from '../Assets/client 3.jpeg'
import client4 from '../Assets/client 4.jpeg'
import client5 from '../Assets/client 5.jpg'
import client6 from '../Assets/client 6.avif'
import client7 from '../Assets/client 7.avif'
import client8 from '../Assets/client 8.avif'
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

export const workExperienceData = [
  {
    id:123,
    StartEndDate:'August 2018- October 2020',
    title1: "front-end",
    title2: "web developer",
    responsibility: {
      point1:"Collaborate with design and development teams to create visually appealing and user-friendly websites", 
      point2:"Implement responsive design techniques to ensure optimal viewing experiences across various devices.", 
      point3:"Utilize HTML, CSS, JavaScript, and other front-end technologies to develop engaging web interfaces."
    },
    buttonText: "Sunset Tech Solutions Inc.",
  },
  {
    id:124,
    StartEndDate:'  January - December 2021',
    title1: "WEB DESIGN",
    title2: "INTERN",
    responsibility: {
      point1:"    Assisted senior designers in creating website layouts. graphics, and user interfaces.", 
      point2:"    Contributed to brainstorming sessions and design discussions to generate creative ideas.", 
      point3:"    Conducted research on industry trends, competitors,and target audiences to inform design strategies.",
    },
    buttonText: "Veravaunt: Paid Media Consultancy",
  },
  {
    id:125,
    StartEndDate:'January 2022 - February 2024',
    title1: "UI/UX",
    title2: " DESIGNER",
    responsibility: {
      point1:"Collaborated with clients and stakeholders to define project requirements and objectives.", 
      point2:"Conducted user research and usability testing to inform design decisions and improve user experiences.", 
      point3:"Created wireframes, prototypes, and mockups to visualize design concepts and workflows."
    },
    buttonText: "Digital Creative Agency - Intero",
  },
  {
    id:126,
    StartEndDate:'Jule 2022 - Present',
    title1: "FREELANCE WEB",
    title2: "DESIGNER",
    responsibility: {
      point1:"Develop responsive and user-friendly websites using Figma, Webflow, and other instruments.", 
      point2:"Provide ongoing maintenance and updates to ensure websites remain up-to-date and functional.", 
      point3:"Create custom designs tailored to clients' branding and target audience."
    },
    buttonText: "Veravaunt: Paid Media Consultancy",
  },
  
];


export const easyDreamsData = [
{
left_Text: {
  text1:'ANSWER',
  text2:'SOME',
  text3:'QUESTIONS',
},
para: "I ask you about what you do and use your answers to create the content for your wibute Don't worry you can make changes to what write",
image: capture5,
},
{
left_Text: {
  text1:'CONFIRM',
  text2:'FIGMA',
  text3:'DESIGN',
},
para: "present you with a visual representation of your website using Figma You have the opportunity to provide feedback suggest modifications and make sure the design aligne",
image: capture6,
},
{
left_Text: {
  text1:'MAKE FINAL',
  text2:'WEBFLOW',
  text3:'ADJUSTMENTS',
},
para: "After design approval will breathe life into using Webflow I will enhance the layout incorporate interactive the final adjustment and don",
image: capture7,
},
]


export const SkillsExperienceDetails = [
  {
    heading:"work instruments",
    skil1:'figma',
    skill1_expeience:85,
    skil2:'photoshop',
    skill2_expeience:75,
    skil3:'illustrator',
    skill3_expeience:60,
    skil4:'after effects',
    skill4_expeience:80,
    skil5:'webflow',
    skill5_expeience:100,
  },
  {
    heading:"  WORK SKILLS",
    skil1:'marketing annalise',
    skill1_expeience:76,
    skil2:'ui/ux design',
    skill2_expeience:90,
    skil3:'motion design',
    skill3_expeience:65,
    skil4:'responsive design',
    skill4_expeience:100,
    skil5:'front end',
    skill5_expeience:70,
  },
  {
    heading:"work languages",
    skil1:'english',
    skill1_expeience:80,
    skil2:'russion',
    skill2_expeience:100,
    skil3:'ukrainian',
    skill3_expeience:75,
    skil4:'spanish',
    skill4_expeience:60,
    skil5:'french',
    skill5_expeience:50,
  },

]

export const ClientFeedBack = [
  {
    message: "Excellent work, very professional and thorough in every aspect!",
    clientName: "Sarah Davis",
    profile: client1,
  },
  {
    message: "Great design skills, very responsive and easy to work with.",
    clientName: "Jane Smith",
    profile: client2,

  },
  {
    message: "Delivered on time, exceeded expectations with top-notch quality.",
    clientName: "Emily Farhye",
    profile: client3,

  },

  {
    message: "Highly recommended for web development projects, superb work!",
    clientName: "Michael Brown",
    profile: client4,

  },
  {
    message: "Creative, detail-oriented designer who truly understands our needs.and delivered excellent results ",
    clientName: "John Doe",
    profile: client5,

  },
  {
    message: "Fantastic job, very professional. Will definitely hire again!",
    clientName: "David Wilson",

    profile: client6,

  },
  {
    message: "Understood our requirements perfectly and delivered beyond expectations.",
    clientName: "Linda Garcia",
    profile: client7,

  },
  {
    message: "Very professional, easy to work with, and delivered excellent results.",
    clientName: "Aliza Beth",
    profile: client8,

  },
];
