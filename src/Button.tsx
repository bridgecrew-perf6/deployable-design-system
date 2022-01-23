import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide text for the button */
  children: ReactNode;

  /** Which variant look would you like to use */
  variant: 'primary' | 'secondary';
}

const ButtonStyle = styled.button`
  background: orange;
  border-radius: 3px;
  border: none;
  font-family: 'Matter';
`;

/** This is a button */
const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return <ButtonStyle {...props}></ButtonStyle>;
};

export { Button };
