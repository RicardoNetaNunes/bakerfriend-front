import React from 'react';
import '../CSS/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    

    return (
        <div class="topnav" id="myTopnav">
            <h4 class="name">BakerFriend</h4>
  <Link to="/" class="active">Home</Link>

  <Link to="/about" class="active">About</Link>
  
  
</div>
    )
}

export default NavBar
