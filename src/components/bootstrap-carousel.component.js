import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class BootstrapCarouselComponent extends React.Component {

    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item interval={6000}>
                                    <img
                                        className="d-block"
                                        src="http://ccumgol.net/elm/img/Banner_1.jpg"
                                        height="auto"
                                        width="auto"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <img
                                            className="d-block w-100"
                                            src="http://ccumgol.net/elm/img/BannerF_1b.png"
                                        />
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item interval={6000}>
                                    <img
                                        className="d-block"
                                        src="http://ccumgol.net/elm/img/Banner_2.jpg"
                                        height="auto"
                                        width="auto"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <img
                                            className="d-block w-100"
                                            src="http://ccumgol.net/elm/img/Banner_2F.png"
                                        />
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item interval={6000}>
                                    <img
                                        className="d-block"
                                        src="http://ccumgol.net/elm/img/Banner_3.jpg"
                                        height="auto"
                                        width="auto"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <img
                                            className="d-block w-100"
                                            src="http://ccumgol.net/elm/img/Banner_3F.png"
                                        />
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default BootstrapCarouselComponent;