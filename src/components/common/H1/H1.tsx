import React, { ReactElement } from 'react';
import './style/h1.scss';

type H1Type = {
  title: string;
};
export const H1 = ({ title }: H1Type): ReactElement => {
  return <h1 className="h1">{title}</h1>;
};
