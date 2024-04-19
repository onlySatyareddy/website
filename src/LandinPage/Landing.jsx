import React, { useEffect, useState } from "react";
import "./Landing.css";

function Landing() {
  const [textToShow, setTextToShow] = useState("");

  useEffect(() => {
    const text = "Welcome To Hotel";
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setTextToShow((prevText) => prevText + text[currentIndex]);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 300);


    setTimeout(() => {
      setTextToShow(text);
    }, text.length * 300); 

    return () => {
      clearInterval(intervalId);
    };
  }, []); 
  return (
    <React.Fragment>
      <div className="Landing">
        <div className="wrapper">
          <div className="d-flex flex-column text-center align-items-center justify-content-center h-100">
            <h2 className="display-3"style={{ fontWeight: 'bold' }}>{textToShow}</h2>
            <p className="display-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              nesciunt ea, vitae magnam iure expedita eveniet aliquid unde, eos,
              nobis quia. Amet veritatis fugiat perferendis culpa voluptas,
              aliquam ducimus asperiores iste facilis cum laborum? Ex dolorum
              iusto rem cumque dicta? Consectetur eum, dolores rerum perspiciatis
              ipsam nemo fuga esse perferendis!
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Landing;
