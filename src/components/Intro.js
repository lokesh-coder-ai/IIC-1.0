import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';

import './intro.css';

function Intro() {
    return (
        < div id="intro">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>


                {/* try images with aspect ratio~2, SHOULD NOT BE < 1.5 */}
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="false">
                        <div className="carin">

                            <div className="carousel-img-box"><img src="intro/1657534764658.jpg" alt="..." /></div>
                             
                        </div>

                    </div>
                    <div className="carousel-item">
                        <div className="carin">
                            <div className="carousel-img-box"><img src="intro/slide2.JPG" alt="..." /></div>
                             
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carin ">
                            <div className="carousel-img-box"><img src="intro/slide3.JPG" alt="..." /></div>
                             
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carin">
                            <div className="carousel-img-box"><img src="intro/slide4.jpg" alt="..." /></div>
                             
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carin">
                            <div className="carousel-img-box"><img src="intro/1657534843841.jpg" alt="..." /></div>
                             
                        </div>
                    </div>
                </div>



                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Intro;