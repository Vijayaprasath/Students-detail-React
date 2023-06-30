import React, { createContext, useState } from 'react';

const Button = ({text, func}) => {
  return (
    <div>
      <button style={{width:'100px', height:'40px'}} onClick={func}>{text}</button>
    </div>
  )
}

export default Button;





// import {createContext} from 'react';

// export const studentsContext = createContext();

// export const studentProvider = (props) => {
//   const [students, setstudents] = useState([]);

//   return (
//     <studentsContext.Provider>
//       {props.children}
//     </studentsContext.Provider>
//   )
// }
