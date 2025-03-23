
import React, { useContext } from 'react';

import { ExtendedReactFunctionalComponent } from "src/types";
import { FormError } from "../form-error/form-error";
import { FieldContext } from '../field-context/field-context';

export const FormControlError: ExtendedReactFunctionalComponent = ({ children }) => {
  const { errors } = useContext(FieldContext);

  return <FormError>{ errors ? children : null }</FormError>
}