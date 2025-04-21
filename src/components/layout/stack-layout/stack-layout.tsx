import React from 'react';
import { CustomCssVariables, ExtendedReactFunctionalComponent } from 'src/types';

import './stack-layout.scss';

interface StackLayoutProps {
  space?: string;
  justifyContent?: string;
  alignItems?: string;
  className?: string;
}

export const StackLayout: ExtendedReactFunctionalComponent<StackLayoutProps> = ({
  children,
  alignItems = 'initial',
  justifyContent = 'initial',
  className,
  space = '1rem'
}) => (
  <div className={`stack-layout ${className ?? ''}`} style={{
    '--space': space,
    '--justify-content': justifyContent,
    '--align-items': alignItems
  } as CustomCssVariables}>{children}</div>
)

