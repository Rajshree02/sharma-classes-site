import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 🚀 UPDATED: Accepting userName as a prop alongside isPaused
const SimpleSlider = ({ isPaused, userName }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5,
        arrows: false,
        slidesToShow: 1,
        autoplay: !isPaused,
        autoplaySpeed: 5000
    };

    return (
        <Slider className="container slider" {...settings}>
            <div className="container">
                <div>
                    <span className="eyebrow">COACHING • MINDSET • PERFORMANCE</span>
                    
                    {/* 👑 DYNAMIC HEADLINE: Changes to Welcome [Name] when registered! */}
                    <h1 className="headline">
                        {userName ? (
                            <>Welcome <span className="gradient-text">{userName} !</span></>
                        ) : (
                            <>Providers of <span className="gradient-text">Holistic Education </span></>
                        )}
                    </h1>

                    <p className="subhead">Personalized coaching that blends clarity, accountability, and proven
                        systems—so you move from stuck to unstoppable in work and life.</p>
                    <div className="hero-actions">
                        <a href="#programs" className="btn-ghost">Explore Programs</a>
                    </div>
                    <div className="trust" aria-label="Trusted by list">
                        <span>Teachers</span>
                        <span>Leaders</span>
                        {/* <span>Creators</span> */}
                        <span>Students</span>
                        {/* <span>Teams</span> */}
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
                    <span className="eyebrow">EXPERT GUIDANCE • PROVEN RESULTS</span>
                    <h1 className="headline">Crack JEE/BOARDS/BITSAT/NDA under highly experienced Faculties</h1>
                    <p className="subhead">Learn from experienced educators who break down complex physics, chemistry, and math into simple, structured concepts built for competitive success.</p>
                </div>
            </div>
            
            <div className="container">
                <div>
                    <span className="eyebrow">SMALL BATCHES • PERSONAL ATTENTION</span>
                    <h1 className="headline">Transforming Potential into Performance</h1>
                    <p className="subhead">With limited students per batch, daily doubt-clearing sessions, and regular test series, we ensure no student gets left behind in their preparation journey.</p>
                </div>
            </div>
        </Slider>
    );
};

export default SimpleSlider;