import React from 'react';


function Introduction(props) { 

  return (
  <div>
    <form>
      <h3>Hello! Welcome to your birthday treasure hunt!</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ullamcorper ipsum, quis porttitor turpis. Suspendisse non nisi erat. Proin vestibulum leo lorem, rhoncus luctus mauris imperdiet quis. Sed id feugiat ex, sed iaculis lacus. Vestibulum at augue lectus. Integer condimentum maximus dolor, sit amet efficitur ex porttitor eu. Aenean sit amet ultricies metus. Maecenas congue vehicula gravida.</p>
      <button className = "startButton" onClick={props.handleStartClick}>Start</button>
    </form>
  </div>
);
}
export default Introduction