import React, { useState, useRef, useEffect } from 'react';
import { IconContainer, ErrorText, InputContainer, InputText} from './styles'
import { Controller } from "react-hook-form";

export default function Input({leftIcon, name , control, errorMessage, mudacor,  ...rest}) {
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    setClicked(true);
  };

  const handleBlur = () => {
    setClicked(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setClicked(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  return (
    <>
      <InputContainer ref={inputRef} className={clicked ? 'clicked' : ''}>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          control={control}
          name={name}
          rules={{ required: true }}
          render={({ field }) => (
            <InputText
              onClick={handleClick}
              onBlur={handleBlur}
              {...field}
              {...rest}
            />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
      
  )
}
