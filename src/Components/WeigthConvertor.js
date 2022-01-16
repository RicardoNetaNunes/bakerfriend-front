import React, {useState} from 'react';
import '../CSS/WeigthConvertor.css'

function WeigthConvertor() {

    const [weigth, updateWeigth] = useState({ k: 0, g: 0, o:0 })

    const updateK = e => updateWeigth({
      k: e.target.value,
      g: (+e.target.value *1000).toFixed(3),
      o: (+e.target.value *35.274).toFixed(3),
      p: (+e.target.value *2.20462).toFixed(3),
    })
    
    const updateG = e => updateWeigth({
      k: (+e.target.value /1000).toFixed(3),
      g: e.target.value,
      o: (+e.target.value *0.03527).toFixed(3),
      p: (+e.target.value *0.00220462).toFixed(3),
    })

    const updateO = e => updateWeigth({
        g: (+e.target.value *28.35).toFixed(3),
        k: (+e.target.value *28350).toFixed(3),
        o: e.target.value,
        p: (+e.target.value *0.0625).toFixed(3),
      })

      const updateP = e => updateWeigth({
        g: (+e.target.value *453.592).toFixed(3),
        k: (+e.target.value *0.4535924).toFixed(3),
        o: (+e.target.value *16).toFixed(3),
        p: e.target.value
      })

    return (
        <div id="container">
      <div id="box">
        <p>Kilograms</p>
        <input
            type = "number"
            value = {weigth.k}
            onChange = {updateK} >
          </input>
      </div>
      <div id="box">
          <p>Grams</p>
          <input
            type = "number" 
            value = {weigth.g} 
            onChange = {updateG}>
          </input>
          <div id="box">
          <p>Ounce</p>
          <input
            type = "number" 
            value = {weigth.o} 
            onChange = {updateO}>
          </input>
          </div>
          <div id="box">
          <p>Pound</p>
          <input
            type = "number" 
            value = {weigth.p} 
            onChange = {updateP}>
          </input>
          </div>
          </div>
    </div>
    )
}

export default WeigthConvertor
