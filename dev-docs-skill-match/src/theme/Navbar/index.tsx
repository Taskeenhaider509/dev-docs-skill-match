import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
// import NavbarComponent from '@site/src/components/NavbarComponent/NavbarComponent';

export default function Navbar(): JSX.Element {
  return (
     <NavbarLayout>
      {/* <div> */}
      {/* <NavbarComponent /> */}
       <NavbarContent />
       {/* </div>  */}
     </NavbarLayout> 
  );
}
