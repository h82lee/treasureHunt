import React, { useState } from 'react';
import Header from "./Header.jsx"
import Card from "./Card.jsx"
import Introduction from "./Introduction.jsx"
import hints from "../hints"

function App(){

const [onStart, setOnStart]=useState(false)

function showFirstHint(event){
    setOnStart(true)
    event.preventDefault()
}

const [goClicked1, setGoClicked1]=useState(false)

function showNextHint(writtenPassword){
   if (writtenPassword===hints[0].password){
    setGoClicked1(true) 
   }else {
       alert("Wrong password, try again")
   }
}

const [goClicked2, setGoClicked2]=useState(false)

function showNextHint1(writtenPassword){
    if (writtenPassword===hints[1].password){
     setGoClicked2(true) 
    }else {
        alert("Wrong password, try again")
    }
 }



return (<div>
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