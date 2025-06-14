import { type FC } from 'react';

import { CardProps } from './types';
import styles from './card.module.scss';

export const Card: FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};
