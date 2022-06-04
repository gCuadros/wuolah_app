import { Heading, SimpleGrid } from '@chakra-ui/react';

import Card from '@/components/Card';
import { FC } from 'react';
import LandingLayout from '@/components/LandingLayout';

export interface DataUniversities {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  logoUrl: string;
}

const CardList: FC<DataUniversities[]> = ({ dataUniversities }) => {
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
        {dataUniversities.map(
          ({ logoUrl, shortName, name, id }: DataUniversities) => (
            <Card
              key={id}
              imageUrl={logoUrl}
              imageAlt={shortName}
              cardTitle={name}
            />
          )
        )}
      </SimpleGrid>
    </LandingLayout>
  );
};

export default CardList;
