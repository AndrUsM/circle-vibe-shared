import React from 'react';
interface ComponentWithChilren {
    readonly children?: React.ReactNode;
}
interface WhenComponentProps extends ComponentWithChilren {
    readonly isTrue: boolean;
}
export declare const Show: {
    ({ children }: ComponentWithChilren): string | number | bigint | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined;
    When({ children, isTrue }: WhenComponentProps): React.JSX.Element | null;
    Else({ children }: ComponentWithChilren): React.JSX.Element;
};
export {};
