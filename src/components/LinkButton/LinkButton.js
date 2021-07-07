import { Button, Link } from '@material-ui/core';
import React, { forwardRef } from 'react';

const CustomLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <Link {...props} />
  </div>
));

const LinkButton = props => {
  const { size, color, variant, href, children } = props;
  return (
    <Button size={size} color={color} variant={variant} component={CustomLink} href={href}>
      {children}
    </Button>
  );
};

export default LinkButton;
