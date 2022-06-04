import { Heading, SimpleGrid } from '@chakra-ui/react';

import Card from '@/components/Card';
import LandingLayout from '@/components/LandingLayout';

type Props = {};

const CardList = (props: Props) => {
  return (
    <LandingLayout>
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="primary.800"
        textAlign={['center', 'center', 'left', 'left']}
        marginTop="20px"
      >
        Universidades.
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
        ¿En qué universidad estudias?
      </Heading>
      <SimpleGrid columns={2} spacing={10} marginTop={20} marginBottom={20}>
        <Card
          imageUrl={'@/public/assets/mainImg.jpg'}
          imageAlt={'university'}
          cardTitle={'Universidad Autónoma de Barcelona'}
        />
      </SimpleGrid>
    </LandingLayout>
  );
};

export default CardList;
