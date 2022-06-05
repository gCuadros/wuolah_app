import { Heading, SimpleGrid } from '@chakra-ui/react';

import Card from '@/components/Card';
import LandingLayout from '@/components/LandingLayout';

export interface DataUniversities {
  id: 1;
  slug: string;
  name: string;
  shortName: string;
  logoUrl: string;
}

export interface Universities {
  universities: DataUniversities[];
}

const CardList = ({ universities }: Universities) => {
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
        {universities.map(
          ({ logoUrl, shortName, name, slug, id }: DataUniversities) => (
            <Card
              key={id}
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
