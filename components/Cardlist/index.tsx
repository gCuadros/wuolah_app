import { Heading, SimpleGrid } from '@chakra-ui/react';
import {
  IDataUniversities,
  IUniversities,
} from '@/lib/interfaces/IUniversities.vm';

import Card from '@/components/Card';
import LandingLayout from '@/components/LandingLayout';

const CardList = ({ universities }: IUniversities) => {
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
      <SimpleGrid
        columns={{ base: 2, xl: 2, xs: 1 }}
        spacing={10}
        marginTop={20}
        marginBottom={20}
      >
        {universities.map(
          ({ logoUrl, shortName, name, slug, id }: IDataUniversities) => (
            <Card
              key={id}
              id={id}
              logoUrl={logoUrl}
              slug={slug}
              shortName={shortName}
              name={name}
            />
          )
        )}
      </SimpleGrid>
    </LandingLayout>
  );
};

export default CardList;
