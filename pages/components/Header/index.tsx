import { Flex, FlexProps } from '@chakra-ui/react';

import { FC } from 'react';
import Logo from '../Logo';

const Header: FC<FlexProps> = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="flex-start"
      w="100%"
      p={8}
      {...props}
    >
      <Logo />
    </Flex>
  );
};

export default Header;
