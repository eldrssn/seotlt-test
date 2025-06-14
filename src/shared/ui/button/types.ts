import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'danger' | 'outline';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}
