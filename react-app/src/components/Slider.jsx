import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <Slider className="container slider" {...settings}>
            <div className="container">
                <div>
                    <span className="eyebrow">COACHING • MINDSET • PERFORMANCE</span>
                    <h1 className="headline">Providers of <span
                        className="gradient-text">Holistic Education </span></h1>
                    <p className="subhead">Personalized coaching that blends clarity, accountability, and proven
                        systems—so you move from stuck to unstoppable in work and life.</p>
                    <div className="hero-actions">
                        <a href="#programs" className="btn-ghost">Explore Programs</a>
                    </div>
                    <div className="trust" aria-label="Trusted by list">
                        <span>Founders</span>
                        <span>Leaders</span>
                        <span>Creators</span>
                        <span>Students</span>
                        <span>Teams</span>
                    </div>
                </div>

                <aside className="centered-section hero-card" aria-label="Quick stats">
                    <div className="score">
                        <div className="chip"><strong>25 Years</strong><small> Teaching Experience</small></div>
                        <div className="chip"><strong>4.9★</strong><small>Average Rating</small></div>
                    </div>
                </aside>
            </div>
            <div className="container">
                <div>
                    <span className="eyebrow">SLIDE 2</span>
                    <h1 className="headline">Second Slide Content</h1>
                    <p className="subhead">This is the second slide of the slider.</p>
                </div>
            </div>
            <div className="container">
                <div>
                    <span className="eyebrow">SLIDE 3</span>
                    <h1 className="headline">Third Slide Content</h1>
                    <p className="subhead">This is the third slide of the slider.</p>
                </div>
            </div>
        </Slider>
    );
};

export default SimpleSlider;
