import React from 'react';

import { ExtendedReactFunctionalComponent } from 'src/types';

export const Label: ExtendedReactFunctionalComponent = ({ children }) => {

  return (
    <div>
      <span>{children}</span>
    </div>
  )
}
