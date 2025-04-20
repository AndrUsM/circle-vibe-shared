import { FormikContextType, useFormikContext } from "formik";

export const useFormContext = () => {
  const formikContext = useFormikContext();

  return formikContext as FormikContextType<unknown>;
}