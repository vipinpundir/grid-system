import React from 'react';

function Col({ size, sm, md, children }) {

  let width = '25%'; 

  if (size === '12') {
    width = '100%';
  } else if (size === '6') {
    width = '50%';
  } else if (size === '3') {
    width = '25%';
  }


   if (window.innerWidth <= 600){
     if (sm === 3){
      width = '25%'; 
     }else if (sm === 6) {
      width = '50%';
     }else if (sm === 9) {
      width = '75%';
     }
     else if (sm === 12) {
      width = '100%';
     }
   }

   if (window.innerWidth <= 900 && window.innerWidth > 600){
    if (md === 3){
     width = '25%'; 
    }else if (md === 6) {
     width = '50%';
    }else if (md === 9) {
     width = '75%';
    }
    else if (md === 12) {
     width = '100%';
    }
  }

  return (
    <div className={`col-${size}`} style={{ width, border: '1px solid black',margin: '10px 0' }}>
      {children}
    </div>
  );
}

export default Col;

