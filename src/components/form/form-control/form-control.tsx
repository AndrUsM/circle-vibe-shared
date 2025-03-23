
import React from 'react';

import { ClusterLayout } from "src/components/layout";
import { ExtendedReactFunctionalComponent } from "src/types";

export const FormControl: ExtendedReactFunctionalComponent = ({ children, ...rest }) => {
  return (
    <ClusterLayout space="0.5rem" {...rest}>{children}</ClusterLayout>
  )
}