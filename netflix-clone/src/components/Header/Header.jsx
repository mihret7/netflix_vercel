import React from 'react'
import NetflixLogo from '../../assets/images/NetflixLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// import './header.js'
// import './header.css'
import './header_responsive.css'

const Header = () => {

  function toggleMenu() {
    const header_container = document.querySelector(".header_container");
    header_container.classList.toggle("active");
  }
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header_container");
    if (header.classList.contains("active")) {
      header.classList.remove("active");
    }
  });

  return (
    <div className="header_outer_container">
      <div className="header_container">


        <img className='none' src={NetflixLogo} alt="Netflix Logo " />


        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Games</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>


        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>

            <li>Kids</li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>

        <button class="menu_toggle" onClick={toggleMenu}>
          ☰
        </button>




      </div>
    </div>
  );
}

export default Header
