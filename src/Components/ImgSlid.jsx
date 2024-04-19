import React from 'react';
import './ImgSlider/Img.css'
function ImgSlid() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col">
          <div className="cont">
            <div className="slider" style={{ height: '300px', textAlign: 'center', justifyContent: 'center', display: 'flex' }}></div>
            <ul className="nav">
           
            </ul>
          </div>
        </div>
        <div data-target='right' className="side-nav side-nav--right"></div>
        <div data-target='left' className="side-nav side-nav--left"></div>
      </div>
    </div>
  );
}

export default  ImgSlid;
