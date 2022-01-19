import * as React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/FrontButtons.css';



 function FrontButtons() {
  return (
    <div className='grid'>
<div className='group'>
<Link to='/calcconv'>
<div className='button b1'>
    <img src='https://res.cloudinary.com/dqaj5cfil/image/upload/v1642351844/scale_pbqxlg.jpg' className='image' alt='tools' />
    <div class="middle">
    <div class="text">Conversors & Calculators</div>
  </div>
    </div>
    </Link>
    </div>
    <div className='group'>
    <Link to='/ingredients'>
    <div className='button b2'>
    <img src='https://res.cloudinary.com/dqaj5cfil/image/upload/v1642351850/ingredients-for-baking-picjumbo-com_zox6t2.jpg' className='image' alt='tools' />
    <div class="middle">
    <div class="text">Ingredients</div>
  </div>
    </div>
    </Link>
    </div>

    <div className='group'>
    <Link to='/breadrecipes'>
    <div className='button b3'>
    <img src='https://res.cloudinary.com/dqaj5cfil/image/upload/v1642351851/bread_q4agx7.jpg' className='image' alt='tools' />
    <div class="middle">
    <div class="text">Bread Recipes</div>
  </div>
    </div>
    </Link>
    </div>
    
    </div>
   
  );
}

export default FrontButtons