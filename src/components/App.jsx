import React, { useState, useEffect } from 'react';
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import Introduction from "./Introduction.jsx"
import hints from "../hints"
import Popup from "./Popup.jsx"

function App(){

const [timedPopup, setTimedPopup]= useState(false)
 useEffect ( ()=> {
    setTimeout( ()=>{
        setTimedPopup (true);
    },100)
}, []);
   


function updateScroll(){  
    return window.scrollTo(0,document.body.scrollHeight)
}


const [onStart, setOnStart]=useState(false)

function showFirstHint(event){
    setOnStart(true)
    setTimeout(updateScroll,100)
    event.preventDefault()
}

const [goClicked1, setGoClicked1]=useState(false)

function showNextHint(writtenPassword){
   if (writtenPassword===hints[0].password){
    setGoClicked1(true) 
    setTimeout(updateScroll,100)
   }else {
       alert("Wrong password, try again")
   }
}

const [goClicked2, setGoClicked2]=useState(false)

function showNextHint1(writtenPassword){
    if (writtenPassword===hints[1].password){
     setGoClicked2(true) 
     setTimeout(updateScroll,100)
    }else {
        alert("Wrong password, try again")
    }
 }

return (<div>
<Popup trigger={timedPopup} setTrigger={setTimedPopup}>
<h3>Let the game begin 🤡</h3>
<img src = "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/04/saw-10.png" alt = "saw-img" width="500" height="250"/>
</Popup>
<Header/>
<Introduction handleStartClick={showFirstHint}/>
{onStart && <Card 
    hintNumber={hints[0].id}
    hintDescription={hints[0].description}
    handleGoClick = {showNextHint}
/>}
{goClicked1? <Card 
    hintNumber={hints[1].id}
    hintDescription={hints[1].description}
    handleGoClick = {showNextHint1}
/>:null}

{goClicked2? <Card 
    hintNumber={hints[2].id}
    hintDescription={hints[2].description}
 
/>:null}

</div>
)
}

export default App