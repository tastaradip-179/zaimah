import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='mt-50'>
        <div className='dashed'></div>
        <div className='footer1 my-50'>
          <div className='d-flex flex-row flex-wrap justify-content-between'>
            <div>
              <h4>Great Pharma</h4>
            </div>
            <div className='d-flex gap-3'>
              <div>
              <FaFacebookF/>
              </div>
              <div>
              <FaLinkedinIn/>
              </div>
              <div>
              <FaTwitter/>
              </div>
            </div>
          </div>
        </div>
        <div className='dashed'></div>
        <div className='footer2 my-50'>
          <div className='d-flex flex-row flex-wrap justify-content-between'>
            <div className='mb-25'>
              <h6><span>c</span>2022 Great Pharma</h6>
            </div>
            <div>
              <ul>
                <li>
                  <a href=''>Press</a>
                </li>
                <li>
                  <a href=''>Help center</a>
                </li>
                <li>
                  <a href=''>Terms and conditions</a>
                </li>
                <li>
                  <a href=''>Privacy policy</a>
                </li>
                <li>
                  <a href=''>Refund Account Terms & Conditions</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=''>Cashback Program</a>
                </li>
                <li>
                  <a href=''>Security</a>
                </li>
                <li>
                  <a href=''>Partner with us</a>
                </li>
                <li>
                  <a href=''>How Greatpharma works</a>
                </li>
                <li>
                  <a href=''>Careers</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href=''>Download Greatpharma Apps</a>
                </li>
                <li>
                  <a href=''>Corporate Customer</a>
                </li>
                <li>
                  <a href=''>Request a rider</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='dashed'></div>
        <div className='footer3 my-50'>
          <div className='d-flex flex-row flex-wrap justify-content-between'>
            <div>
              <h6>
              © 2021 Copyright <span>Great Pharma</span>. All Rights Reserved
              </h6>
            </div>
            <div>
              <h6>
              Design and Devloped by Zaimah Technologies Ltd.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer