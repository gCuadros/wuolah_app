import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import { ArrowBackIcon } from '@chakra-ui/icons';
import { IHeroProps } from '@/lib/interfaces/IHero.vm';
import LandingLayout from '@/components/LandingLayout';
import { useRouter } from 'next/router';

const HeroUniversity = ({
  title,
  subtitle,
  text,
  image,
  ...rest
}: IHeroProps) => {
  const router = useRouter();

  return (
    <main>
      <LandingLayout>
        <Button
          id="back-button"
          leftIcon={<ArrowBackIcon />}
          variant="outline"
          onClick={() => router.back()}
        >
          Universidades
        </Button>

        <Flex
          width="100%"
          align="center"
          justify="space-between"
          direction="column"
          wrap="nowrap"
          px={8}
          mb={16}
          {...rest}
        >
          <Stack
            spacing={4}
            align={['center', 'center', 'flex-start', 'flex-start']}
            marginBottom={20}
            marginTop={20}
          >
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              color="primary.800"
              textAlign={['center', 'center', 'left', 'left']}
            >
              Descarga los apuntes de clase gratis.
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
              Disponible también la EBAU. Ver apuntes de EBAU.
            </Heading>
          </Stack>
          <Stack
            spacing={4}
            display="flex"
            width={{ base: '80%', md: '40%' }}
            align={['center', 'center', 'flex-start', 'flex-start']}
            maxWidth="lg"
            borderRadius="1rem"
            borderWidth="1px"
            boxShadow="0 1px 4px rgba(55,73,87,.06),0 10px 20px rgba(55,73,87,.1)"
            padding="30px"
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
        </Flex>
      </LandingLayout>
    </main>
  );
};

export default HeroUniversity;
