import { Box, BoxProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const SectionLayout: FC<BoxProps> = (props) => {
  return (
    <Box padding={'20px'} backgroundColor={props.background} {...props}>
      {props.children}
    </Box>
  );
};
export default SectionLayout;
