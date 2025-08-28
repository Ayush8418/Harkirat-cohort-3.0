import React from 'react'
// this child class is litera child of App.jsx and i being passed child componet

const Card = ({children}) => {
  return (
        <div style={{
            border: '20px solid #909090ff',
            borderRadius: '20px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(65, 62, 62, 0.1)',
        }}>
            {children}
        </div>
    );
}

export default Card;
