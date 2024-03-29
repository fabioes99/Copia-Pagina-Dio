import React, { useRef } from 'react';
import { IconContainer, ErrorText, InputContainer, InputText, WrapContainer} from './styles'
import { Controller } from "react-hook-form";

interface InputI extends React.InputHTMLAttributes<HTMLInputElement>{
  leftIcon: React.ReactNode;
  name: string;
  control: any;
  errorMessage?: string;
}

export default function Input({ leftIcon, name, control, errorMessage, ...rest }: InputI) {
  const inputRef = useRef<HTMLInputElement>(null); // Corrigido o tipo de refer�ncia

  return (
    <WrapContainer>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          control={control}
          name={name}
          rules={{ required: true }}
          render={({ field: { value, onBlur, onChange } }) => ( 
            <InputText
              ref={inputRef} 
              value={value}
              onBlur={onBlur}
              onChange={onChange} 
              {...rest}
            />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </WrapContainer>
  )
}
