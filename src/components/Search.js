import React from 'react';
import { Row, Col, Dropdown, Form } from 'react-bootstrap';
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const Search = () => {
  return (
    <>
        <Row className='mt-50'>
          <Col md={4}>
            <div className='search-tab'> 
              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <HiOutlineAdjustmentsHorizontal/> 
                  Filter
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Pharmacy</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Medicine</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Paramedics</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">Ambulance</Dropdown.Item>
                  <Dropdown.Item href="#/action-5">Allied Health</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
          </Col>
          <Col md={8}>
            <div className='search-tab'>
              <div className='d-flex'>
                <AiOutlineSearch className='mt-2'/> 
                <Form.Control
                  type="text"
                  id="inputKeyword"
                  placeholder='Search for Pharmacy, Medicine, Paramedics, Ambulance and Allied Health'
                />
              </div>
            </div>
          </Col>
        </Row>
    </>
  )
}

export default Search