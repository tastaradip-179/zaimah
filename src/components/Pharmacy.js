import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { AiFillStar } from "react-icons/ai";

const Pharmacy = () => {
  return (
    <>
    <div className='mt-50'>
      <div className='d-flex gap-3'>
        <div>
          <img src="images/fav.png" alt="" className='mt-1'/>
        </div>
        <div>
          <h2>Your Favorite Pharmacy</h2>
        </div>
      </div>
      <Row className='mt-50'>
        <Col>
          <Card>
            <Card.Img variant="top" src="images/grid1.png" />
            <Card.Body>
              <Card.Title className='d-flex justify-content-between'>
                <div className='card-name'>
                  Al Shifa Pharma
                </div>
                <div className='card-rate'>
                  <AiFillStar/> 3.5<span>/5 (120+)</span>
                </div>
              </Card.Title>
              <Card.Text className='d-flex justify-content-between'>
                <div className='card-name2'>
                  <b>Free</b> Delivery
                </div>
                <div className='card-distance'>
                  <img src="images/distance.png" alt="" className='me-4'/>
                  250m
                </div>
              </Card.Text>
            </Card.Body>
            <div className='card-box'>
                  <span>15</span> MIN
            </div>
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img variant="top" src="images/grid2.png" />
            <Card.Body>
              <Card.Title className='d-flex justify-content-between'>
                <div className='card-name'>
                  Popular Medical Store
                </div>
                <div className='card-rate'>
                  <AiFillStar/> 3.5<span>/5 (120+)</span>
                </div>
              </Card.Title>
              <Card.Text className='d-flex justify-content-between'>
                <div className='card-name2'>
                Delivery Fees: <b>$ 2.90</b>
                </div>
                <div className='card-distance'>
                  <img src="images/distance.png" alt="" className='me-4'/>
                  550m
                </div>
              </Card.Text>
            </Card.Body>
            <div className='card-box'>
                  <span>20</span> MIN
            </div>
          </Card>
        </Col>
        <Col>
        <Card>
          <Card.Img variant="top" src="images/grid3.png" />
            <Card.Body>
              <Card.Title className='d-flex justify-content-between'>
                <div className='card-name'>
                Rahman Pharmacy
                </div>
                <div className='card-rate'>
                  <AiFillStar/> 3.5<span>/5 (120+)</span>
                </div>
              </Card.Title>
              <Card.Text className='d-flex justify-content-between'>
                <div className='card-name2'>
                Delivery Fees: <b>$ 1.59</b>
                </div>
                <div className='card-distance'>
                  <img src="images/distance.png" alt="" className='me-4'/>
                  1.2 km
                </div>
              </Card.Text>
            </Card.Body>
            <div className='card-box'>
                  <span>25</span> MIN
            </div>
          </Card>
        </Col>
        <Col>
        <Card>
          <Card.Img variant="top" src="images/grid4.png" />
            <Card.Body>
              <Card.Title className='d-flex justify-content-between'>
                <div className='card-name'>
                Abeed Drugs
                </div>
                <div className='card-rate'>
                  <AiFillStar/> 3.5<span>/5 (120+)</span>
                </div>
              </Card.Title>
              <Card.Text className='d-flex justify-content-between'>
                <div className='card-name2'>
                  <b>Free</b> Delivery
                </div>
                <div className='card-distance'>
                  <img src="images/distance.png" alt="" className='me-4'/>
                  1.5 km
                </div>
              </Card.Text>
            </Card.Body>
            <div className='card-box'>
                  <span>30</span> MIN
            </div>
          </Card>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Pharmacy