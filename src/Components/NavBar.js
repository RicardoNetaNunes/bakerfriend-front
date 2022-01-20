import React from 'react';
import '../CSS/NavBar.css';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

function NavBar() {
    

    return (
        <div>
            <Box  w='100%'  className="topnav" id="myTopnav">
            <Box display='flex' alignItems='baseline'>
            <h4 class="name">BakerFriend</h4>
  <Link to="/" class="active">Home</Link>

  <Link to="/about" class="active">About</Link>
  </Box>
  </Box>
</div>
    )
}

export default NavBar;
