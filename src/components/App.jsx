import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header.jsx";
import Textbox from "./Card.jsx";
import Introduction from "./Introduction.jsx";
import hints from "../hints";
import Popup from "./Popup.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles.js";
import Ending from "./Ending.jsx";
import Confetti from "./Confetti.jsx";

function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let pop_status = localStorage.getItem("pop_status");
    if (!pop_status) {
      setVisible(true);
      localStorage.setItem("pop_status", 1);
    }
  }, []);

  function updateScroll() {
    return window.scrollTo(0, document.body.scrollHeight);
  }

  const [onStart, setOnStart] = useState(false);

  function showFirstHint(event) {
    setOnStart(true);
    setTimeout(updateScroll, 100);
    event.preventDefault();
  }

  const [goClicked1, setGoClicked1] = useState(false);

  function showNextHint(writtenPassword) {
    if (writtenPassword === hints[0].password) {
      setGoClicked1(true);
      setTimeout(updateScroll, 100);
    } else {
      alert("Wrong password, try again");
    }
  }

  const [goClicked2, setGoClicked2] = useState(false);

  function showNextHint1(writtenPassword) {
    if (writtenPassword === hints[1].password) {
      setGoClicked2(true);
      setTimeout(updateScroll, 100);
    } else {
      alert("Wrong password, try again");
    }
  }

  const [goClicked3, setGoClicked3] = useState(false);

  function showNextHint2(writtenPassword) {
    if (writtenPassword === hints[2].password) {
      setGoClicked3(true);
      setTimeout(updateScroll, 100);
    } else {
      alert("Wrong password, try again");
    }
  }

  const [goClicked4, setGoClicked4] = useState(false);

  function showNextHint3(writtenPassword) {
    if (writtenPassword === hints[3].password) {
      setGoClicked4(true);
      setTimeout(updateScroll, 100);
    } else {
      alert("Wrong password, try again");
    }
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const closeFinalPopup = () => setOpen(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Popup
          visible={visible}
          setVisible={setVisible}
          closeOnClick={() => setVisible(false)}
        />
        <Header />
        <main>
          <Introduction handleStartClick={showFirstHint} />
          {onStart && (
            <Textbox
              hintNumber={hints[0].id}
              hintDescription={hints[0].description}
              handleGoClick={showNextHint}
            />
          )}
          {goClicked1 ? (
            <Textbox
              hintNumber={hints[1].id}
              hintDescription={hints[1].description}
              handleGoClick={showNextHint1}
            />
          ) : null}

          {goClicked2 ? (
            <Textbox
              hintNumber={hints[2].id}
              hintDescription={hints[2].description}
              handleGoClick={showNextHint2}
            />
          ) : null}

          {goClicked3 ? (
            <Textbox
              hintNumber={hints[3].id}
              hintDescription={hints[3].description}
              handleGoClick={showNextHint3}
            />
          ) : null}

          {goClicked4 ? (
            <Textbox
              hintNumber={hints[4].id}
              hintDescription={hints[4].description}
              handleGoClick={handleOpen}
            />
          ) : null}
        </main>
        <Ending trigger={open} close={closeFinalPopup} />
        {open ? <Confetti /> : ""}
      </ThemeProvider>
    </>
  );
}

export default App;
