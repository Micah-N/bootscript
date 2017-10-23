// Lib
import * as classNames from 'classnames';
import * as React from 'react';

export type ColSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export interface IColProps {
  className?: string;
  lg?: ColSize;
  md?: ColSize;
  sm?: ColSize;
  xl?: ColSize;
}

export const Col: React.SFC<IColProps> = (props) => {
  const { lg, md, sm, xl } = props;
  const className = classNames(
    'col',
    lg && `col-lg-${lg}`,
    md && `col-md-${md}`,
    sm && `col-sm-${sm}`,
    xl && `col-xl-${xl}`,
    props.className,
  );

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};
