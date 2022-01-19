import React, { useState } from "react";
 
function RecipeConvertor() {
  const [inputList, setInputList] = useState([{ ingredientName: "", weigth: 0 }]);
  const [newIngredientChange, setNewIngredientChange] = useState([]);
 


  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { Ingredient: "", Quantity: "" }]);
  };
  
  //console.log(inputList)

  const btnSubmit = async (e) => {
    e.preventDefault();
  let change = {
    newIngredient : e.target.newIngredient.value,
    newWeigth : e.target.newWeigth.value
  } ;

  
   // console.log(change)
   // console.log(inputList[0].weigth)
   // console.log(change.newIngredient)
  for (let w = 0; w < inputList.length; w++) {
    console.log(change.newWeigth)
    let oldWeigth = ''
    if (inputList[w].ingredientName == change.newIngredient) {
    oldWeigth =inputList[w].weigth
    }
    console.log(oldWeigth)

    inputList.forEach( function (u){
        const changeWeigth= (u.weigth * change.newWeigth / oldWeigth)
        setNewIngredientChange(changeWeigth)
    })

    /*
    for (let y = 0; y < inputList.length; y++) {
        const changeWeigth= [(inputList[y].weigth * change.newWeigth / oldWeigth)]
      
        setNewIngredientChange(changeWeigth)
      
    }  */ 
    }
  
}





console.log(newIngredientChange)

  return (
    <div className="App">
        
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="ingredientName"
   placeholder="Enter ingredient name"
              value={x.ingredientName}
              onChange={e => handleInputChange(e, i)}
            />
            
            <p>Ingredient: {x.ingredientName}</p>
            
            <input
              type = "number"
              className="ml10"
              name="weigth"
   placeholder="Enter weigth"
              value={x.weigth}
              onChange={e => handleInputChange(e, i)}
            />
           <p>Quantity: {x.weigth}</p> 
           <p>New Quantity: {x.newIngredientChange}</p> 


            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
    <form onSubmit={btnSubmit}>
 <input name="newIngredient"
         placeholder="Enter name of ingredient to change"
              value={setNewIngredientChange.newIngredient}
             
            />
            <input name="newWeigth"
   placeholder="Enter new quantity"
              value={setNewIngredientChange.newWeigth}
              
            />
<div>
                  <button
                    class="button"
                    type="submit"
                    style={{ fontSize: "20px" }}
                  >
                    Submit
                  </button>
                </div>
              </form> 

     {/*} <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>
  );
}
 
export default RecipeConvertor;