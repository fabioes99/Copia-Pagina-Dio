import React, { useState, useRef, useEffect } from 'react';
import { IconContainer, ErrorText, InputContainer, InputText} from './styles'
import { Controller } from "react-hook-form";

interface InputI extends React.InputHTMLAttributes<HTMLInputElement>{
  leftIcon: React.ReactNode;
  name: string;
  control: any;
  errorMessage?: string;
  mudacor?: string;
}

export default function Input({leftIcon, name , control, errorMessage, mudacor, ...rest}:InputI) {
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setClicked(true);
  };

  const handleBlur = () => {
    setClicked(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setClicked(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, []);


  return (
    <>
      <InputContainer ref={inputRef} className={clicked ? 'clicked' : ''}>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          control={control}
          name={name}
          rules={{ required: true }}
          render={({ field: { value, onBlur} }) => (
            <InputText
              onBlur={handleBlur}
              onClick={handleClick}
              value={value}
              {...rest}
            />
          )}
        />
         { errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
      </InputContainer>
     
    </>
      
  )
}
