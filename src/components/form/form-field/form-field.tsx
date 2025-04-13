import React from 'react';

import { ExtendedReactFunctionalComponent } from 'src/types';
import { Label } from '../label/label';
import { FormikFormControl } from '../formik-form-control';
import { Show } from 'src/components/show';
import { FormControlError } from '../form-control-error';

interface FormFieldProps {
  label?: string;
  formFieldName: string;
}

export const FormField: ExtendedReactFunctionalComponent<FormFieldProps> = ({
  label,
  formFieldName,
  children,
}) => {
  return (
    <FormikFormControl formFieldName={formFieldName}>
      <Show.When isTrue={Boolean(label)}>
        <Label>{label}</Label>
      </Show.When>

      {children}

      <FormControlError />
    </FormikFormControl>
  );
};
