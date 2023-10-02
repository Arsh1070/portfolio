import HeroComponent from './heroSection';
import AboutComponent from './aboutSection';
import SkillsComponent from './skillsSection';
import ResumeComponent from './resumeSection';
import ContactComponent from './contactSection';
import ProjectComponent from './projectSection';

const MainBody = (): JSX.Element => {
  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <SkillsComponent />
      <ResumeComponent />
      <ProjectComponent />
      <ContactComponent />
    </>
  );
};

export default MainBody;
