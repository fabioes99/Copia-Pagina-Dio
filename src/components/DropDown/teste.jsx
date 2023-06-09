import React, { useState } from 'react';

const Teste = () => {

  const [showDiv, setShowDiv] = useState(false);

  const handleMouseEnter = () => {
    setShowDiv(true);
  };

  const handleMouseLeave = () => {
    setShowDiv(false);
  };

  return (
   
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'lightblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>Passe o mouse aqui</h2>
      </div>
      <div
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: 'lightgreen',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: showDiv ? 1 : 0,
        }}
      >
        <h3>Div adicional</h3>
      </div>
    </div>

  );
};

export default Teste;