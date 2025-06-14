import { FC } from 'react';

import { ButtonProps } from './types';
import styles from './button.module.scss';

export const Button: FC<ButtonProps> = (props) => {
  const { children, variant = 'primary', className = '', ...rest } = props;

  const buttonClasses = `${styles.button} ${styles[variant]} ${className}`;

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};
