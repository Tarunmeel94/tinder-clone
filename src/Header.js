import React from "react";
import "./Header.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
function Header() {
    return (
        <div className="header"> 
           <IconButton>
           <AccountCircleIcon fontSize="large" className="header_icon"/>
           </IconButton>
           <img className="tinder_logo" src="https://www.globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531-940x647.png" alt="Tinder_logo"/>
          <IconButton>
           <ForumIcon fontSize="large" className="header_icon"/>
           </IconButton>
        </div>
    );
}

export default Header
  