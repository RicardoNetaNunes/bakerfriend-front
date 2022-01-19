import React from 'react';
import TempConvertor from './TempConvertor';
import WeigthConvertor from './WeigthConvertor';
import RecipeConvertor from './RecipeConvertor'

function CalcConv() {
    return (
        <div>
            
     <h3>Temperature</h3>     
     <TempConvertor />
     <h3>Volume and weigth converters</h3>
     <WeigthConvertor />
     <h3>Recipe convertor</h3>
     <RecipeConvertor />
        </div>
    )
}

export default CalcConv
