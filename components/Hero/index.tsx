import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { IHeroProps } from '@/lib/interfaces/IHero.vm';
import LandingLayout from '@/components/LandingLayout';

const Hero = ({ title, subtitle, text, ...rest }: IHeroProps) => {
  return (
    <LandingLayout>
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-around', lg: 'space-between' }}
        direction={{ base: 'column-reverse', md: 'row' }}
        wrap="nowrap"
        minH="70vh"
        px={8}
        mb={16}
        {...rest}
      >
        <Stack
          spacing={4}
          w={{ base: '80%', md: '40%' }}
          align={['center', 'center', 'flex-start', 'flex-start']}
        >
          <Heading
            as="h2"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={['center', 'center', 'left', 'left']}
          >
            {title}
          </Heading>
          <Heading
            as="h2"
            size="md"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={['center', 'center', 'left', 'left']}
          >
            {subtitle}
          </Heading>
          <Text
            fontSize="sm"
            mt={2}
            textAlign="center"
            color="primary.800"
            opacity="0.6"
          >
            {text}
          </Text>
        </Stack>
      </Flex>
    </LandingLayout>
  );
};

export default Hero;
