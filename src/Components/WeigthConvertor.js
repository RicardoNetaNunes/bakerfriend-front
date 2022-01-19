import React, {useState} from 'react';
import '../CSS/WeigthConvertor.css'

function WeigthConvertor() {

    const [weigth, updateWeigth] = useState({ k: 0, g: 0, o:0, p:0, cw: 0, cs: 0, cf: 0, csa: 0 })

    const updateK = e => updateWeigth({
      k: e.target.value,
      g: (+e.target.value *1000).toFixed(3),
      o: (+e.target.value *35.274).toFixed(3),
      p: (+e.target.value *2.20462).toFixed(3),
      cw: (+e.target.value * 	4.226752838).toFixed(3),
      cf: (+e.target.value *8).toFixed(3),
      cs: (+e.target.value *5).toFixed(3),
      csa: (+e.target.value *3.663 ).toFixed(3),
    })
    
    const updateG = e => updateWeigth({
      k: (+e.target.value /1000).toFixed(3),
      g: e.target.value,
      o: (+e.target.value *0.03527).toFixed(3),
      p: (+e.target.value *0.00220462).toFixed(3),
      cw: (+e.target.value * 	0.004226752838).toFixed(3),
      cf: (+e.target.value *0.008).toFixed(3),
      cs: (+e.target.value *0.005).toFixed(3),
      csa: (+e.target.value *0.00366).toFixed(3),
    })

    const updateO = e => updateWeigth({
        g: (+e.target.value *28.35).toFixed(3),
        k: (+e.target.value *28350).toFixed(3),
        o: e.target.value,
        p: (+e.target.value *0.0625).toFixed(3),
        cw: (+e.target.value * 	0.1198).toFixed(3),
        cf: (+e.target.value *0.226796).toFixed(3),
        cs: (+e.target.value *0.141748).toFixed(3),
        csa: (+e.target.value *0.10384 ).toFixed(3),
      })

      const updateP = e => updateWeigth({
        g: (+e.target.value *453.592).toFixed(3),
        k: (+e.target.value *0.4535924).toFixed(3),
        o: (+e.target.value *16).toFixed(3),
        p: e.target.value,
        cw: (+e.target.value * 1.91722).toFixed(3),
        cf: (+e.target.value *3.628739).toFixed(3),
        cs: (+e.target.value *2.267962).toFixed(3),
        csa: (+e.target.value *0.60186 ).toFixed(3),
      })

      const updateCW = e => updateWeigth({
        g: (+e.target.value * 236.58823648491).toFixed(3),
        k: (+e.target.value *0.236588).toFixed(3),
        o: (+e.target.value *8.345404451488).toFixed(3),
        p: (+e.target.value *0.521588).toFixed(3),
        cw: e.target.value,
        cf: 0,
        cs: 0,
        csa: 0,
      })

      const updateCF = e => updateWeigth({
        g: (+e.target.value * 125).toFixed(3),
        k: (+e.target.value *0.125).toFixed(3),
        o: (+e.target.value *4.409245).toFixed(3),
        p: (+e.target.value *0.275578).toFixed(3),
        cw: 0,
        cf: e.target.value,
        cs: 0,
        csa: 0,
      })

      const updateCS = e => updateWeigth({
        g: (+e.target.value * 200).toFixed(3),
        k: (+e.target.value *0.2).toFixed(3),
        o: (+e.target.value *7.054792).toFixed(3),
        p: (+e.target.value *0.440925).toFixed(3),
        cw: 0,
        cf: 0,
        cs: e.target.value,
        csa: 0,
      })

      const updateCSA = e => updateWeigth({
        g: (+e.target.value * 273).toFixed(3),
        k: (+e.target.value *0.273).toFixed(3),
        o: (+e.target.value *9.62979).toFixed(3),
        p: (+e.target.value *0.60186 ).toFixed(3),
        cw: 0,
        cf: 0,
        cs: 0,
        csa: e.target.value,
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
          <p>Ounce(oz)</p>
          <input
            type = "number" 
            value = {weigth.o} 
            onChange = {updateO}>
          </input>
          </div>
          <div id="box">
          <p>Pound(lb)</p>
          <input
            type = "number" 
            value = {weigth.p} 
            onChange = {updateP}>
          </input>
          </div>
          <div id="box">
          <p>Cup(water)</p>
          <input
            type = "number" 
            value = {weigth.cw} 
            onChange = {updateCW}>
          </input>
          </div>
          <div id="box">
          <p>Cup(flour)</p>
          <input
            type = "number" 
            value = {weigth.cf} 
            onChange = {updateCF}>
          </input>
          </div>
          <div id="box">
          <p>Cup(sugar)</p>
          <input
            type = "number" 
            value = {weigth.cs} 
            onChange = {updateCS}>
          </input>
          </div>
          <div id="box">
          <p>Cup(salt)</p>
          <input
            type = "number" 
            value = {weigth.csa} 
            onChange = {updateCSA}>
          </input>
          </div>
          </div>
    </div>
    )
}

export default WeigthConvertor
