import React from "react";
import './home.css';
import { MDBView, MDBMask, MDBRow, MDBContainer,MDBAnimation} from "mdbreact";

function Home() {
    return(
        <div id='homePage' className='bg'>
            <MDBView>
                <MDBMask className="d-flex justify-content-center align-items-center gradient">
                    <MDBContainer>
                        <MDBRow>
                            <MDBAnimation
                                type="fadeInLeft"
                                delay=".3s"
                                className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                                >
                                <h1 className="h1-responsive font-weight-bold">
                                    Full Stack Web Developer
                                </h1>
                                <hr className="hr-light" />
                                <h6 className="mb-4">
                                    React | Javascript | Express | MySQL | MongoDB | Python | Bootstrap 
                                </h6>
                                <div className ='socialLinks'>
                                    <a href='https://www.linkedin.com/in/tyler-collins-0a5ab6162/' rel='noopener noreferrer' target='blank'>
                                        <i className=' fab fa-linkedin' aria-hidden='true'/>
                                    </a>
                                    <a href='https://github.com/tcollins2011' target='blank'>GitHub</a>
                                </div>
                            </MDBAnimation>
                        </MDBRow>
                        <MDBAnimation type="bounce" infinite>
                                <img className="img-fluid" alt="" src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png" />
                            </MDBAnimation>
                    </MDBContainer>
                </MDBMask>
            </MDBView>
        </div>
    )
}


export default Home;