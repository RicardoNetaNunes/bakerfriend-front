import * as React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@chakra-ui/react';
import '../CSS/FrontButtons.css';


 function FrontButtons() {
  return (
    <div className='grid'>
<Box maxW='sm' boxShadow='dark-lg' borderRadius='lg' overflow='hidden'>
<Link to='/calcconv'>
<div className='button b1'>
    <img src='https://res.cloudinary.com/dqaj5cfil/image/upload/v1642351844/scale_pbqxlg.jpg' className='image' alt='tools' />
    <div class="middle">
    <div class="text">Conversors & Calculators</div>
  </div>
    </div>
    </Link>
    </Box>
    <Box maxW='sm' boxShadow='dark-lg' borderRadius='lg' overflow='hidden'>
    <Link to='/ingredients'>
    <div className='button b2'>
    <img src='https://res.cloudinary.com/dqaj5cfil/image/upload/v1642351850/ingredients-for-baking-picjumbo-com_zox6t2.jpg' className='image' alt='tools' />
    <div class="middle">
    <div class="text">Ingredients</div>
  </div>
    </div>
    </Link>
    </Box>

    <Box maxW='sm' boxShadow='dark-lg' borderRadius='lg' overflow='hidden'>
    <Link to='/breadrecipes'>
    <div className='button b3'>
    <img src='https://res.cloudinary.com/dqaj5cfil/image/upload/v1642351851/bread_q4agx7.jpg' className='image' alt='tools' />
    <div class="middle">
    <div class="text">Bread Recipes</div>
  </div>
    </div>
    </Link>
    </Box>
    
   
    </div>
   
  );
}

export default FrontButtons