import { Box, BoxProps } from '@chakra-ui/react';

const SectionLayout = (props: BoxProps) => {
  return (
    <Box padding={'20px'} backgroundColor={props.background} {...props}>
      {props.children}
    </Box>
  );
};
export default SectionLayout;
