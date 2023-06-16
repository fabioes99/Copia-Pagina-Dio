import React from 'react'

import { IconContainer, ErrorText, InputContainer, InputText} from './styles'

import { Controller } from "react-hook-form";

export default function Input({leftIcon, name , control, errorMessage,  ...rest}) {
  return (
    <>
    <InputContainer>
          {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
          <Controller
              control={control}
              name={name}
              rules={{required: true}}
              render={({
                field 
              }) => (
                <InputText {...field} {...rest}/>
              )}
            />
        </InputContainer>
        { errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null }
    </>
      
  )
}
