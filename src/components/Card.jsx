import React, { useState } from 'react';

function Card(props) { 

  const [writtenPassword, setWrittenPassword]= useState("")

  function handleChange(event){
    const {value} = event.target
    setWrittenPassword(value)
  }

  return (
  <div>
    <form>
      <h3>Hint #{props.hintNumber}</h3>
      <p>{props.hintDescription} </p>
      <div className= "cardInput"> 
      <input name="password"
      placeholder='password?'
      value={writtenPassword}
      onChange={handleChange}
      /> 
     <button className="goButton" 
      onClick={(e)=>{
        e.preventDefault();
        props.handleGoClick(writtenPassword)
        }}>Go</button>
      </div>
      
    </form>
  </div>
);
}
export default Card