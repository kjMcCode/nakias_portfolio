import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {

  return (
    <MDBFooter bgColor='light' className='mt-5 text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} :{' '} Pictures and UX by Nakia McNeil, Developed with ❤️️ by my mom, Alicia McNeil
      </div>
    </MDBFooter>
  );}

export default Footer;  