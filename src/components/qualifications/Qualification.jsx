import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>
    

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active-button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active-button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>

            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Continuing Education</h3>
                            <span className="qualification__subtitle">Self-Learning</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022-Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>                                                                                                            
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>                                                                                                            
                        </div>
                        <div>
                            <h3 className="qualification__title">Full Stack Bootcamp</h3>
                            <span className="qualification__subtitle">Chicago - Coding Temple</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Medical Lab Technologist</h3>
                            <span className="qualification__subtitle">Chicago - Jesse Brown VA</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020-2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Clinical Lab Sciences</h3>
                            <span className="qualification__subtitle">Milwaukee, WI - Marquette University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2020
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Engineer</h3>
                            <span className="qualification__subtitle">Coding Temple - Chicago</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>                                                                                                            
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Medical Lab Technologist</h3>
                            <span className="qualification__subtitle">Jesse Brown VA - Chicago, IL</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2020-2022
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Math Tutor, Gym Service Staff</h3>
                            <span className="qualification__subtitle">Marquette University - Milwaukee, WI</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification