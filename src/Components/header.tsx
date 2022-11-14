import { Link } from 'react-scroll';

const MainHeader = (): JSX.Element => {
  const handleClick = (): void => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar-menu');

    hamburger?.addEventListener('click', (): void => {
      hamburger.classList.toggle('active');
      navMenu?.classList.toggle('active');
    });
    document.querySelectorAll('navbar-link').forEach((n) =>
      n.addEventListener('click', (): void => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
      })
    );
  };

  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-logo'>
          <strong>
            <Link activeClass='active1' smooth spy to='home' offset={-50}>
              ARSH
            </Link>
          </strong>
        </div>

        <ul className='navbar-menu'>
          <li className='navbar-item '>
            <Link activeClass='active' smooth spy to='home' className='navbar-link' offset={-50}>
              Home
            </Link>
          </li>
          <li className='navbar-item'>
            <Link activeClass='active' smooth spy to='about' className='navbar-link' offset={-50}>
              About
            </Link>
          </li>
          <li className='navbar-item'>
            <Link activeClass='active' smooth spy to='skills' className='navbar-link' offset={-50}>
              Skills
            </Link>
          </li>
          <li className='navbar-item'>
            <Link activeClass='active' smooth spy to='resume' className='navbar-link' offset={-50}>
              Resume
            </Link>
          </li>
          <li className='navbar-item'>
            <Link
              activeClass='active'
              smooth
              spy
              to='projects'
              className='navbar-link'
              offset={-50}
            >
              Projects
            </Link>
          </li>
          <li className='navbar-item'>
            <Link activeClass='active' smooth spy to='contact' className='navbar-link' offset={-50}>
              Contact
            </Link>
          </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
