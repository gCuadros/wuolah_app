import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

import { FC } from 'react';
import LandingLayout from '@/components/LandingLayout';

interface HeroProps {
  title: string;
  subtitle: string;
  text: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  text,
  image,
  ctaLink,
  ctaText,
  ...rest
}) => {
  return (
    <LandingLayout>
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
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
            as="h1"
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
        <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
          <Image src={image} boxSize="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>
    </LandingLayout>
  );
};
