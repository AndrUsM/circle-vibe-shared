import { FormikContextType, useFormikContext } from 'formik';

export function useFormContext<T>() {
  const formikContext = useFormikContext<T>();

  return formikContext as FormikContextType<unknown>;
}
