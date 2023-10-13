import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Menu = () => {


  return (
    <>
        <Row className="justify-content-md-center row-cols-md-5 mt-50">
        <Col xs={12}>
            <a href='' className='menu-tab' style={{borderBottom: "2px solid #134E47"}}>
                    <div className='position-relative w-100'>
                        <h6 className='position-absolute bottom-0'>Pharmacy</h6>
                    </div>
                    <div>
                        <img src="images/pharmacy.png" alt=""/>
                    </div>
            </a>
        </Col>
        <Col xs={12}>
            <a href='' className='menu-tab'>
                    <div className='position-relative w-100'>
                        <h6 className='position-absolute bottom-0'>Medicine</h6>
                    </div>
                    <div>
                        <img src="images/med.png" alt=""/>
                    </div>
            </a>
        </Col>
        <Col xs={12}>
            <a href='' className='menu-tab'>
                    <div className='position-relative w-100'>
                        <h6 className='position-absolute bottom-0'>Paramedics</h6>
                    </div>
                    <div>
                        <img src="images/paramed.png" alt=""/>
                    </div>
            </a>
        </Col>
        <Col xs={12}>
            <a href='' className='menu-tab'>
                    <div className='position-relative w-100'>
                        <h6 className='position-absolute bottom-0'>Ambulance</h6>
                    </div>
                    <div>
                        <img src="images/ambulance.png" alt=""/>
                    </div>
            </a>
        </Col>
        <Col xs={12}>
            <a href='' className='menu-tab'>
                    <div className='position-relative w-100'>
                        <h6 className='position-absolute bottom-0'>Allied Health</h6>
                    </div>
                    <div>
                        <img src="images/allied.png" alt=""/>
                    </div>
            </a>
        </Col>
      </Row>
    </>
  )
}

export default Menu