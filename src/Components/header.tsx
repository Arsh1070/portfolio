import { Link } from 'react-scroll';
import { NAVBAR_LINKS } from '../Constants';

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
    <nav className='navbar'>
      <div className='navbar-logo'>
        <strong>
          <Link activeClass='active1' smooth spy to='home' offset={-50}>
            ARSH
          </Link>
        </strong>
      </div>

      <ul className='navbar-menu'>
        {NAVBAR_LINKS.map((navItem) => (
          <li key={navItem.id} className='navbar-item '>
            <Link
              activeClass='active'
              smooth
              spy
              to={navItem.linkRef}
              className='navbar-link'
              offset={-50}
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className='hamburger' onClick={handleClick}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </nav>
  );
};

export default MainHeader;
