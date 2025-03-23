import React from 'react';
import { Formik, FormikConfig, Form as FormikForm, FormikProps, FormikHandlers, FormikHelpers } from 'formik';

import { ExtendedReactFunctionalComponent } from "src/types";

interface FormProps<T = any> extends FormikConfig<T> {
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;
}

export const Form: ExtendedReactFunctionalComponent<FormProps> = ({ children, ...formProps }) => {

  return (
    <Formik {...formProps}>
      <FormikForm className='tw:p-1 tw:rounded'>{children}</FormikForm>
    </Formik>
  )
}