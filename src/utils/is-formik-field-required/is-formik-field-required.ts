import { ObjectSchema } from 'yup';

export const isFieldRequired = (schema: ObjectSchema<any>, key: string) => {
  const fieldSchema = schema?.fields[key];

  // @ts-ignore
  return fieldSchema?.exclusiveTests?.required === true;
};
