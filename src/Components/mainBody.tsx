import { Button, Card, Form, Image, Input, Progress } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import myPic from '../assets/arshPic(1).jpg';
import myPortfolioPic from '../assets/myPortfolio.png';
import myNewsAppPic from '../assets/newsApp.png';
import myStayTunePic from '../assets/stayTune.png';
import myTipCalculatorPic from '../assets/tipCalculator.png';

const MainBody = (): JSX.Element => {
  return (
    <>
      <section className='section-1' id='home'>
        <div className='section-1-left'>
          <strong className='res'>HELLO!</strong>
          <strong>
            I&#39;m <span>Arshdeep Singh</span>
          </strong>
          <strong>A Full Stack Web Developer</strong>
          <div className='section-1-left-icons'>
            <a href='#' className='social-icons'>
              <i className='bi bi-twitter'></i>
            </a>
            <a href='#' className='social-icons'>
              <i className='bi bi-facebook'></i>
            </a>
            <a href='#' className='social-icons'>
              <i className='bi bi-instagram'></i>
            </a>
            <a href='#' className='social-icons'>
              <i className='bi bi-linkedin'></i>
            </a>
          </div>
        </div>
        <div>
          <Image src={myPic} alt='pic' preview={false} />
        </div>
      </section>
      <section id='about'>
        <h1 className='about-heading1'>About Me</h1>
        <div className='about'>
          <div>
            <li className='about-subheading'>
              <strong>Name:</strong>
              <span>Arshdeep Singh</span>
            </li>
            <li className='about-subheading'>
              <strong>Phone:</strong>
              <span>+919587975348</span>
            </li>
            <li className='about-subheading'>
              <strong>Email:</strong>
              <span>arshbrarasb626@gmail.com</span>
            </li>
            <li className='about-subheading'>
              <strong>Address:</strong>
              <span>Vpo. 25f, Sriganganagar, Rajasthan(India)</span>
            </li>
          </div>

          <div>
            <h2 style={{ color: 'white' }}>Hello There !</h2>
            <p className='heading-right'>
              My name is Arshdeep Singh, I am a Full Stack Web Developer. An Open Source enthusiast
              and self-learned developer from India.
            </p>
            <p className='heading-right-1'>
              I love working on new and exciting technologies emerging nowadays. I have good work
              experience as a MERN Stack Developer in startup(s) and have a Knowledge about MERN
              stack technologies.
            </p>
            <button className='cv'>DOWNLOAD CV</button>
          </div>
        </div>
      </section>
      <section id='skills'>
        <h1 className='about-heading'>My Skills</h1>
        <div className='skills'>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>HTML5</strong>
              <strong>95%</strong>
            </div>
            <Progress percent={95} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>CSS</strong>
              <strong>85%</strong>
            </div>
            <Progress percent={85} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>JavaScript</strong>
              <strong>75%</strong>
            </div>

            <Progress percent={75} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>TypeScript</strong>
              <strong>70%</strong>
            </div>

            <Progress percent={70} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>React.js</strong>
              <strong>80%</strong>
            </div>

            <Progress percent={80} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Node.js</strong>
              <strong>80%</strong>
            </div>

            <Progress percent={80} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Express.js</strong>
              <strong>85%</strong>
            </div>

            <Progress percent={85} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>MongoDB</strong>
              <strong>80%</strong>
            </div>

            <Progress percent={80} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Git</strong>
              <strong>85%</strong>
            </div>

            <Progress percent={85} />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <strong>Docker</strong>
              <strong>70%</strong>
            </div>

            <Progress percent={70} />
          </div>
        </div>
      </section>
      <section id='resume'>
        <h1 className='about-heading'>My Resume</h1>
        <div className='resume'>
          <h3>WORK EXPERIENCE</h3>
          <Card className='card'>
            <div className='title'>
              <h1 className='title-1'>2022-Present</h1>
              <h3 className='title-2'>Software Engineer</h3>
              <h6 className='title-3'>Perpetual Block AG | Pune, India</h6>
            </div>
            <ul className='content'>
              <li className='content-1'>
                <span className='dot'></span>
                Developed the user interface for artworks which shows 400k+ artworks, 100 artists,
                auction events, news with searchable filters which increase results accuracy to 80%.
              </li>

              <li className='content-1'>
                Worked on project’s FDA calendar, historical readouts, Analysis module, using d3
                library for creating charts which improve data visualization. This project gives
                approximate idea for trading investing in bio-stocks.
              </li>
              <li className='content-1'>
                Implemented the image reverse search engine to find out duplicates images of
                artworks using python imageHash library which help to reduce data redundancy on
                database by 80-85%.
              </li>
              <li className='content-1'>
                Developed the report generate feature for artwork fields to checking missing fields,
                html tags, symbols etc. which improve data quality by 90%.
              </li>
            </ul>
          </Card>
          <Card className='card'>
            <div className='title'>
              <h1 className='title-1'>2021-2022</h1>
              <h3 className='title-2'> Full Stack Web Development Intern</h3>
              <h6 className='title-3'>Newton School | India</h6>
            </div>
            <ul className='content'>
              <li className='content-1'>
                <span className='dot'></span>
                Full Stack Web Development along with problem solving.
              </li>

              <li className='content-1'>
                Participated in various codding contest organized by the platform.
              </li>
              <li className='content-1'>
                Worked on various projects like spotify clone,Newsapp,Tip Calculator,Personal
                portfolio etc.
              </li>
            </ul>
          </Card>
          <h3 className='education'>EDUCATION</h3>
          <Card className='card'>
            <div className='title'>
              <h1 className='title-1'>2015-2020</h1>
              <h3 className='title-2'>Bachelor&#39;s Degree in Mechanical Engineering</h3>
              <h6 className='title-3'>Rajasthan Technical University | Kota, India</h6>
            </div>
            <ul className='content'>
              <li className='content-1'>
                <span className='dot'></span>
                Graduated with first grade with all branch subjects.
              </li>

              <li className='content-1'>
                Learned basic programming language like c, c++ etc. & participated in codding
                contest during the graduation.
              </li>
            </ul>
          </Card>
          <Card className='card'>
            <div className='title'>
              <h1 className='title-1'>2013</h1>
              <h3 className='title-2'>High School, Board of Secondary Education, Rajasthan</h3>
              <h6 className='title-3'>BHOPALWALA ARYA SR. SEC. SCHOOL | Sriganganagar, India</h6>
            </div>
            <ul className='content'>
              <li className='content-1'>
                <span className='dot'></span>
                Scored 76.80% in PCM (Non-Medical) with Informatics Practices.
              </li>
            </ul>
          </Card>
        </div>
      </section>
      <section id='projects'>
        <h1 className='about-heading'>My Projects</h1>
        <div className='projects'>
          <Card
            cover={
              <Image
                alt='example'
                src={myStayTunePic}
                className='projects-card-img'
                preview={false}
              />
            }
            className='projects-card'
          >
            <div className='projects-card-content'>
              <h1 className='appName'>StayTune</h1>

              <p className='appInfo'>
                StayTune app provides real spotify app user experience. In this app you can add
                playlists, control your real spotify app, play-pause, prev-next a song, volume
                control etc.
              </p>
              <p className='appTech'>
                <span className='tech'>HTML</span>
                <span className='tech'>CSS</span>
                <span className='tech'>JavaScript</span>
                <span className='tech'>React.js</span>
              </p>

              <p className='appIcon'>
                <a
                  href='https://arsh1070.github.io/StayTune/'
                  target='_blank'
                  rel='noreferrer'
                  className='social-icons'
                >
                  <i className='bi bi-display'></i>
                </a>
                <a
                  href='https://github.com/Arsh1070/StayTune'
                  target='_blank'
                  rel='noreferrer'
                  className='social-icons'
                >
                  <i className='bi bi-github'></i>
                </a>
              </p>
            </div>
          </Card>
          <Card
            cover={
              <Image
                alt='example'
                src={myNewsAppPic}
                className='projects-card-img'
                preview={false}
              />
            }
            className='projects-card'
          >
            <div className='projects-card-content'>
              <h1 className='appName'>NewsApp</h1>

              <p className='appInfo'>
                Individual user login & signup facility. This app provides more than 6 different
                category news like general, sports etc. with 20 articles per category. User also
                read full article just click at link.
              </p>
              <p className='appTech'>
                <span className='tech'>React.js</span>
                <span className='tech'>Node.js</span>
                <span className='tech'>Express.js</span>
                <span className='tech'>MongoDB</span>
              </p>
              <p className='appIcon'>
                <a
                  href='https://newsappbyarsh.herokuapp.com/dashboard'
                  target='_blank'
                  rel='noreferrer'
                  className='social-icons'
                >
                  <i className='bi bi-display'></i>
                </a>
                <a
                  href='https://github.com/Arsh1070/NewsApp'
                  target='_blank'
                  rel='noreferrer'
                  className='social-icons'
                >
                  <i className='bi bi-github'></i>
                </a>
              </p>
            </div>
          </Card>
          <Card
            cover={
              <Image
                alt='example'
                src={myPortfolioPic}
                className='projects-card-img'
                preview={false}
              />
            }
            className='projects-card'
          >
            <div className='projects-card-content'>
              <h1 className='appName'>PortFolio</h1>

              <p className='appInfo'>
                This app shows 6 different sections, each section shows information related about me
                like download cv, my rseume, my skills, my projects & contact details.
              </p>
              <p className='appTech'>
                <span className='tech'>HTML</span>
                <span className='tech'>CSS</span>
                <span className='tech'>TypeScript</span>
                <span className='tech'>React.js</span>
              </p>
              <p className='appIcon'>
                <a
                  href='https://github.com/Arsh1070/NewsApp'
                  target='_blank'
                  rel='noreferrer'
                  className='social-icons'
                >
                  <i className='bi bi-display'></i>
                </a>
                <a
                  href='https://github.com/Arsh1070/NewsApp'
                  target='_blank'
                  rel='noreferrer'
                  className='social-icons'
                >
                  <i className='bi bi-github'></i>
                </a>
              </p>
            </div>
          </Card>
          <Card
            cover={
              <Image
                alt='example'
                src={myTipCalculatorPic}
                className='projects-card-img'
                preview={false}
              />
            }
            className='projects-card'
          >
            <div className='projects-card-content'>
              <h1 className='appName'>Tip Calculator</h1>

              <p className='appInfo'>
                This app calculate the tip amount by entering the final bill, selecting service type
                & enter the number of peoples sharing the final bill.
              </p>
              <p className='appTech'>
                <span className='tech'>HTML</span>
                <span className='tech'>CSS</span>
                <span className='tech'>JavaScript</span>
              </p>
              <p className='appIcon'>
                <a
                  href='https://arsh1070.github.io/Tip-Calculator/'
                  target='_blank'
                  rel='noreferrer'
                  className='social-icons'
                >
                  <i className='bi bi-display'></i>
                </a>
                <a
                  href='https://github.com/Arsh1070/Tip-Calculator'
                  target='_blank'
                  rel='noreferrer'
                  className='social-icons'
                >
                  <i className='bi bi-github'></i>
                </a>
              </p>
            </div>
          </Card>
        </div>
      </section>
      <section id='contact'>
        <h1 className='about-heading'>Contact Me</h1>
        <div className='contact-upper'>
          <div className='address'>
            <i className='bi bi-geo-alt location'></i>
            <div className='address-right'>
              <strong className='address-title'>My Address</strong>
              <p className='address-des'>25f, Sriganganagar, Rajasthan 335027</p>
            </div>
          </div>
          <div className='address'>
            <i className='bi bi-envelope location'></i>
            <div className='address-right'>
              <strong className='address-title'>Email Me</strong>
              <p className='address-des'>arshbrarasb626@gmail.com</p>
            </div>
          </div>
          <div className='address'>
            <i className='bi bi-telephone location'></i>
            <div className='address-right'>
              <strong className='address-title'>Call Me</strong>
              <p className='address-des'>+91 9587975348</p>
            </div>
          </div>
          <div className='address'>
            <i className='bi bi-share location'></i>
            <div className='address-right'>
              <strong className='address-title'>Social Profiles</strong>
              <p className='address-des'>
                <a href='#' className='social-icons'>
                  <i className='bi bi-twitter'></i>
                </a>
                <a href='#' className='social-icons'>
                  <i className='bi bi-facebook'></i>
                </a>
                <a href='#' className='social-icons'>
                  <i className='bi bi-instagram'></i>
                </a>
                <a href='#' className='social-icons'>
                  <i className='bi bi-linkedin'></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className='contact-form'>
          <Form
            name='basic'
            // labelCol={{ span: 8 }}
            //  wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            //  onFinishFailed={onFinishFailed}
            autoComplete='off'
            className='form'
          >
            <div className='form-name'>
              <Form.Item
                name='name'
                //  rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input type='text' placeholder='Your Name' className='inputTag' />
              </Form.Item>

              <Form.Item
                name='email'
                // rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input type='email' placeholder='Your Email' className='inputTag' />
              </Form.Item>
            </div>
            <Form.Item
              name='subject'
              className='form-sub'
              // rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input type='text' placeholder='Subject' className='inputTag' />
            </Form.Item>

            <Form.Item name='message' className='form-sub'>
              <TextArea rows={6} placeholder='Message' className='inputTag' />
            </Form.Item>

            <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
              <Button type='primary' htmlType='submit' className='submit'>
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  );
};

export default MainBody;
