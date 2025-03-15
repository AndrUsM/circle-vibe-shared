import React from 'react';

import { CustomCssVariables, ExtendedReactFunctionalComponent } from 'src/types';

import './cluster-layout.scss';

interface ClusterLayoutProps {
  space?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const ClusterLayout: ExtendedReactFunctionalComponent<ClusterLayoutProps> = ({
  children,
  alignItems = 'initial',
  justifyContent = 'initial',
  space = '1rem'
}) => (
  <div className="stack-layout" style={{
    '--space': space,
    '--justify-content': justifyContent,
    '--align-items': alignItems
  } as CustomCssVariables}>{children}</div>
)
