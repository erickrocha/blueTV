import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

const LinkButton = props => {
  const { size, color, variant, to, children } = props;
  return (
    <Button size={size} color={color} variant={variant} component={CustomRouterLink} to={to}>
      {children}
    </Button>
  );
};

export default LinkButton;
