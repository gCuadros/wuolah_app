import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

import { FC } from 'react';
import LandingLayout from '@/components/LandingLayout';
import { useRouter } from 'next/router';

interface HeroProps {
  title: string;
  subtitle: string;
  text: string;
  image: string;
}

const HeroUniversity: FC<HeroProps> = ({
  title,
  subtitle,
  text,
  image,
  ...rest
}) => {
  const router = useRouter();

  return (
    <LandingLayout>
      <button onClick={() => router.back()}>Back</button>
      <Flex
        width="100%"
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
          width={{ base: '80%', md: '40%' }}
          align={['center', 'center', 'flex-start', 'flex-start']}
        >
          <Box width="25%" mb={{ base: 12, md: 0 }}>
            <Image src={image} boxSize="100%" rounded="1rem" />
          </Box>
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
        <Box
          width={{ base: '80%', sm: '60%', md: '50%' }}
          mb={{ base: 12, md: 0 }}
        >
          <Image
            src="https://img.freepik.com/free-vector/students-lecture-hall-with-teacher-explain-information-learning-process-university-auditorium-with-scholars-professor-seminar-education-studying-concept-line-art-vector-illustration_107791-11109.jpg?t=st=1654390063~exp=1654390663~hmac=a1958fbfbe59bb812ee31a74706ee698017508f2e38696d6813d7cc96c8d08f5&w=1380"
            boxSize="100%"
            rounded="1rem"
          />
        </Box>
      </Flex>
    </LandingLayout>
  );
};

export default HeroUniversity;
