import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const LandingLayout: FC<FlexProps> = (props) => {
  return (
    <Flex
      direction="column"
      align="center"
      maxWidth={{ xl: '1200px' }}
      margin="0 auto"
      {...props}
    >
      {props.children}
    </Flex>
  );
};
export default LandingLayout;
