import React, { useState } from 'react';
import './styles.css';

const DropdownMenuDemo = () => {

  const [showDiv, setShowDiv] = useState(false);

  const handleMouseEnter = () => {
    setShowDiv(true);
  };

  const handleMouseLeave = () => {
    setShowDiv(false);
  };

  return (
    <>

    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >teste</button>

       <div className="Container" 
        style={{ opacity: showDiv ? 1 : 0, }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
       >
        <div className='Wrapper'>
          <div className='lefthalf'>
            <span className='Carreiras' >Carreira Back-end</span>
            <span className='Carreiras'>Carreira Front-end</span>
            <span className='Carreiras'>Carreira Mobile</span>
            <span className='Carreiras'>Carreira Cloud & DevOps</span>
            <span className='Carreiras'>Carreira Data & Analytics</span>
            <span className='Carreiras'>Carreira Games</span>
            <span className='Carreiras'>Carreira Web3 <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 8 16" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z"></path></svg></span>
            <a href='/login' className='VerMais'>Ver Mais</a>
          </div>
          <div  className='righthalf'>
            <a href='/' className='Cursos'>Curso back</a>
            <a href='/' className='Cursos'>Curso back</a>
            <a href='/' className='Cursos'>Curso back</a>
            <a href='/' className='Cursos'>Curso back</a>
            <a href='/' className='Cursos'>Curso back</a>
            <a href='/login' className='VerMais'>Ver Mais</a>
          </div>
        </div>
        </div>

        </>
    
  );
};

export default DropdownMenuDemo;