import React from 'react';
import './button.css'

const CustomButton = ({action,type,children}) =>{
      if ({type} === 'rounded'){
        var button = <div className="btn"><button onClick={action} className={type} >{children}</button></div>;
        return button;      
      }
      var button = <div className="btn"><button onClick={action} className='round'>{children}</button></div>;
      return button;
};

export default CustomButton;