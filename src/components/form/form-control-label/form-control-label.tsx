
import React, { useContext } from 'react';

import { ExtendedReactFunctionalComponent } from "src/types";
import { FieldContext } from '../field-context/field-context';
import { Label } from '../label/label';
import { useFormContext } from 'src/hooks';
import { isFieldRequired } from 'src/utils';

export const FormControlLabel: ExtendedReactFunctionalComponent = ({ children }) => {
  const { errors, name } = useContext(FieldContext);
  const {validationSchema} = useFormContext();
  const isRequired = isFieldRequired(validationSchema, name as string);

  return <Label isRequired={isRequired} hasErrors={Boolean(errors?.length)}>{children}</Label>
}