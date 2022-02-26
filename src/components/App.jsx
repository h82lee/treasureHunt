import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
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


// const [onStart, setOnStart]=useState(false)
const [hintsArray,setHintsArray]=useState([])
const [num, setNum]=useState("")

function showFirstHint(event){
    setNum(0)
    setHintsArray(()=>{
        return [hints[num]]
    })
    setTimeout(updateScroll,100)
    event.preventDefault()
}


function showNextHint(writtenPassword){
   if (writtenPassword===hints[num].password){
    setNum(num+1)
    setHintsArray((prevHints)=>{
        return [...prevHints, hints[num]]
    })
    console.log(num)
    setTimeout(updateScroll,100)
   }else {
       alert("Wrong password, try again")
   }
}

return (<>
<CssBaseline />
<Popup trigger={timedPopup} setTrigger={setTimedPopup}>
<h3>Let the game begin 🤡</h3>
<img src = "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/04/saw-10.png" alt = "saw-img" width="500" height="250"/>
</Popup>
<Header/>
<Introduction handleStartClick={showFirstHint}/>

{hintsArray.map(()=>{
    return <Card 
    key={hints[num].id}
    hintNumber={hints[num].id}
    hintDescription={hints[num].description}
    handleGoClick = {showNextHint} 
    />
})}

</>
)
}

export default App