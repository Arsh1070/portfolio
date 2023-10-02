import {
  contactInfo,
  education,
  navBar,
  personalInfo,
  projects,
  resume,
  skills,
  socialContacts,
} from '../index.d';

import calculatorImg from '../assets/tipCalculator.png';
import stayTuneImg from '../assets/stayTune.png';
import portfolioImg from '../assets/myPortfolio.png';
import newsAppImg from '../assets/newsApp.png';

export const NAVBAR_LINKS: navBar[] = [
  { id: 'nav_1', title: 'Home', linkRef: 'home' },
  { id: 'nav_2', title: 'About', linkRef: 'about' },
  { id: 'nav_3', title: 'Skills', linkRef: 'skills' },
  { id: 'nav_4', title: 'Resume', linkRef: 'resume' },
  { id: 'nav_5', title: 'Projects', linkRef: 'projects' },
  { id: 'nav_5', title: 'Contact', linkRef: 'contact' },
];

export const SOCIAL_ICONS: socialContacts[] = [
  {
    socialId: 'twitter_1',
    linkUrl: 'https://twitter.com/ArshBrarAB',
    socialIcon: 'bi bi-twitter',
  },
  {
    socialId: 'facebook_1',
    linkUrl: 'https://www.facebook.com/profile.php?id=100004794289269',
    socialIcon: 'bi bi-facebook',
  },
  {
    socialId: 'instagram_1',
    linkUrl: 'https://www.instagram.com/arsh_1070/',
    socialIcon: 'bi bi-instagram',
  },
  {
    socialId: 'linkedin_1',
    linkUrl: 'https://www.linkedin.com/in/arsh1070',
    socialIcon: 'bi bi-linkedin',
  },
];

export const PERSONAL_INFO: personalInfo[] = [
  { id: 1, title: 'Name', titleInfo: 'Arshdeep Singh' },
  { id: 2, title: 'Phone', titleInfo: '+919587975348' },
  { id: 3, title: 'Email', titleInfo: 'arshdeepsinghofficial1070@gmail.com' },
  { id: 4, title: 'Address', titleInfo: 'Vpo. 25f, Sriganganagar, Rajasthan(India)' },
];
export const SKILLS: skills[] = [
  { id: 1, techName: 'HTML5', techProficiency: 95 },
  { id: 2, techName: 'CSS3', techProficiency: 90 },
  { id: 3, techName: 'JavaScript', techProficiency: 80 },
  { id: 4, techName: 'TypeScript', techProficiency: 75 },
  { id: 5, techName: 'React.js', techProficiency: 85 },
  { id: 6, techName: 'Next.js', techProficiency: 80 },
  { id: 7, techName: 'Redux', techProficiency: 90 },
  { id: 8, techName: 'Node.js', techProficiency: 75 },
  { id: 9, techName: 'Express.js', techProficiency: 80 },
  { id: 10, techName: 'MongoDB', techProficiency: 80 },
  { id: 11, techName: 'Git', techProficiency: 90 },
  { id: 12, techName: 'Jira', techProficiency: 90 },
];

export const RESUME: resume[] = [
  {
    id: 'exp-1',
    timePeriod: '2023-Present',
    designation: 'Frontend Developer',
    companyName: 'AECC India Pvt. Ltd.',
    jobLocation: 'Chennai, India',
    description: [
      {
        descId: 'desc-1',
        descriptionInfo:
          'Developed Healthinsurancenow mobile responsive web app & implemented the mobile OTP user authentication for secure payment process. This app helps students to find & securely purchase the best insurance policies from different insurance companies.',
      },
      {
        descId: 'desc-2',
        descriptionInfo:
          'Implemented the user signin-signup flow in student referral project, integrated with AWS Cognito & used AWS Amplify package for best compatibility.',
      },
    ],
  },
  {
    id: 'exp-2',
    timePeriod: '2022-2023',
    designation: 'Software Engineer',
    companyName: 'Perpetual Block AG',
    jobLocation: 'Pune, India',
    description: [
      {
        descId: 'desc-1',
        descriptionInfo: `Worked on ArtBanx web app which shows antique and historical paintings
with their artists, auction houses, auction prices. Created the automated
filter component, which reduces the efforts at UI by 80%.`,
      },
      {
        descId: 'desc-2',
        descriptionInfo: `Implemented the Image reverse search feature in ArtBanx project to find out duplicates images of artworks which help to reduce data redundancy
on database by 85%.`,
      },
      {
        descId: 'desc-3',
        descriptionInfo: `Implemented the Report generate feature in ArtBanx project for artwork
fields to checking missing fields, HTML tags, symbols, which improve data
quality by 90%.`,
      },
      {
        descId: 'desc-4',
        descriptionInfo: `Developed Bio-Stock Dashboard project from scratch, created charts to
improve data visualization. This project used for Investors to invest in stock of Bio-Pharma companies to understand the drug testing results at different stages, and it's probability of success prediction using AI.`,
      },
      {
        descId: 'desc-5',
        descriptionInfo:
          'Developed ProteanPay project for Curia from scratch.This project will be used to make payments in cryptocurrency and generate payment invoices.',
      },
      {
        descId: 'desc-6',
        descriptionInfo: `Implemented Advance Search filter feature in Driven project which improve result accuracy by 80%. 
        This product keeps the history of top brands' cars with their performance, launch year, speed, and a lot more.`,
      },
    ],
  },
  {
    id: 'exp-3',
    timePeriod: '2021-2022',
    designation: 'Full Stack Web Development Intern',
    companyName: 'Newton School',
    jobLocation: 'India',
    description: [
      {
        descId: 'desc-1',
        descriptionInfo: `Full Stack Web Development along with problem-solving. Learned web
development advance technologies such as HTML5, CSS3, JavaScript,
ReactJS, NodeJS, ExpressJS & MongoDB.`,
      },
      {
        descId: 'desc-2',
        descriptionInfo: `Applied hands on learning & Agile development to build a front-end & full
MERN stack applications.`,
      },
      {
        descId: 'desc-3',
        descriptionInfo: `Learned & practiced Data Structure & Algorithms codding questions at
the platform.`,
      },
      {
        descId: 'desc-4',
        descriptionInfo: `Debugging & unit testing applications using React Testing Library, Jest,
Redux DevTools & debugger.`,
      },
      {
        descId: 'desc-5',
        descriptionInfo: `Use SonarQube for code quality, check repetition lines of code, code
smells & detect bugs in code.`,
      },
      {
        descId: 'desc-6',
        descriptionInfo: `Worked on various projects such as Spotify clone, News app,Tip-
Calculator & Personal portfolio.`,
      },
    ],
  },
];

export const EDUCATION: education[] = [
  {
    id: 'edu-1',
    timePeriod: '2015-2020',
    // eslint-disable-next-line quotes
    CertificationName: "Bachelor's Degree in Mechanical Engineering",
    institutionName: 'Rajasthan Technical University',
    instituteLocation: ' Kota, India',
    description: [
      {
        descId: 'desc-edu-1',
        descriptionInfo: 'Graduated with first grade with all branch subjects.',
      },
      {
        descId: 'desc-edu-1',
        descriptionInfo:
          'Learned basic programming language like c, c++ etc. & participated in codding contest during the graduation.',
      },
    ],
  },
  {
    id: 'edu-2',
    timePeriod: '2013',
    // eslint-disable-next-line quotes
    CertificationName: 'High School, Board of Secondary Education, Rajasthan',
    institutionName: 'BHOPALWALA ARYA SR. SEC. SCHOOL',
    instituteLocation: 'Sriganganagar, India',
    description: [
      {
        descId: 'desc-edu-1',
        descriptionInfo: 'Scored 76.80% in PCM (Non-Medical) with Informatics Practices.',
      },
    ],
  },
];

export const CONTACT_INFO: contactInfo[] = [
  {
    id: 'contact_1',
    title: 'My Address',
    titleInfo: 'Vpo. 25f, Sriganganagar, Rajasthan(India)',
    contactIcon: 'bi bi-geo-alt',
  },
  {
    id: 'contact_2',
    title: 'Email Me',
    titleInfo: 'arshdeepsinghofficial1070@gmail.com',
    contactIcon: 'bi bi-envelope',
  },
  {
    id: 'contact_3',
    title: 'Call Me',
    titleInfo: '+919587975348',
    contactIcon: 'bi bi-telephone',
  },
  {
    id: 'contact_4',
    title: 'Social Profiles',
    contactIcon: 'bi bi-share',
    titleInfo: SOCIAL_ICONS,
  },
];

export const PROJECTS: projects[] = [
  {
    id: 'project_1',
    title: 'StayTune',
    imgUrl: stayTuneImg,
    techNames: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    projectLinks: [
      {
        linkId: 'link_1',
        linkUrl: 'https://arsh1070.github.io/StayTune/',
        linkIcon: 'bi bi-display',
      },
      {
        linkId: 'link_2',
        linkUrl: 'https://github.com/Arsh1070/StayTune',
        linkIcon: 'bi bi-github',
      },
    ],
    description: `StayTune app provides real spotify app user experience. In this app you can add
              playlists, control your real spotify app, play-pause, prev-next a song, volume control
              etc.`,
  },
  {
    id: 'project_2',
    title: 'NewsApp',
    imgUrl: newsAppImg,
    techNames: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    projectLinks: [
      {
        linkId: 'link_1',
        linkUrl: 'https://newsappbyarsh.herokuapp.com/dashboard',
        linkIcon: 'bi bi-display',
      },
      {
        linkId: 'link_2',
        linkUrl: 'https://github.com/Arsh1070/NewsApp',
        linkIcon: 'bi bi-github',
      },
    ],
    description:
      'Individual user login & signup facility. This app provides more than 6 different category news like general, sports etc. with 20 articles per category. User also read full article just click at link.',
  },
  {
    id: 'project_3',
    title: 'PortFolio',
    imgUrl: portfolioImg,
    techNames: ['HTML', 'CSS', 'JavaScript'],
    projectLinks: [
      {
        linkId: 'link_1',
        linkUrl: 'https://arsh1070.github.io/portfolio/',
        linkIcon: 'bi bi-display',
      },
      {
        linkId: 'link_2',
        linkUrl: 'https://github.com/Arsh1070/portfolio',
        linkIcon: 'bi bi-github',
      },
    ],
    description: `This app shows 6 different sections, each section shows information related about me
              like download cv, my rseume, my skills, my projects & contact details.`,
  },
  {
    id: 'project_4',
    title: 'Tip Calculator',
    imgUrl: calculatorImg,
    techNames: ['HTML', 'CSS', 'JavaScript'],
    projectLinks: [
      {
        linkId: 'link_1',
        linkUrl: 'https://arsh1070.github.io/Tip-Calculator/',
        linkIcon: 'bi bi-display',
      },
      {
        linkId: 'link_2',
        linkUrl: 'https://github.com/Arsh1070/Tip-Calculator',
        linkIcon: 'bi bi-github',
      },
    ],
    description: ` This app calculate the tip amount by entering the final bill, selecting service type &
              enter the number of peoples sharing the final bill.`,
  },
];
