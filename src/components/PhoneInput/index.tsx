import React, { useRef } from 'react';
import { IconContainer, ErrorText, InputContainer,  WrapContainer} from '../Input/styles'
import { Controller } from "react-hook-form";
import InputMask, { ReactInputMask } from 'react-input-mask'; // Adicione a importação do tipo ReactInputMask aqui

interface InputI extends React.InputHTMLAttributes<HTMLInputElement>{
  leftIcon: React.ReactNode;
  name: string;
  control: any;
  errorMessage?: string;
}

export default function PhoneInput({ leftIcon, name, control, errorMessage, ...rest }: InputI) {
  const inputRef = useRef<ReactInputMask>(null); // Agora o TypeScript sabe sobre o tipo ReactInputMask

  return (
    <WrapContainer>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          control={control}
          name={name}
          rules={{ required: true }}
          render={({ field: { value, onBlur, onChange } }) => ( 
            <InputMask
              mask="(99) 99999-9999"
              maskChar=" "
              placeholder="(00) 00000-0000"
              defaultValue=""
              ref={inputRef} 
              value={value}
              onBlur={onBlur}
              onChange={onChange} 
              style={{
                backgroundColor: 'transparent',
                color: '#fff',
                width: '100%',
                border: '0',
                height: '30px',
              }}
              {...rest}
            />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </WrapContainer>
  )
}
