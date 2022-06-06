import { Flex, FlexProps } from '@chakra-ui/react';

const LandingLayout = (props: FlexProps) => {
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
