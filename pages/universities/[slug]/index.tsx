import { Flex, Image, Text } from '@chakra-ui/react';

import HeroUniversity from '@/components/HeroUniversity';
import SectionLayout from '@/components/Section';
import { useRouter } from 'next/router';

type Data = {
  id: 1;
  slug: string;
  name: string;
  shortName: string;
  logoUrl: string;
};

const Universities = () => {
  const router = useRouter();
  const data: Data = router.query;

  return (
    <SectionLayout>
      <HeroUniversity
        title={data.name}
        subtitle={data.shortName}
        text="comparte, pregunta y estudia. Desde casa."
        image={data.logoUrl}
      />
    </SectionLayout>
  );
};

export default Universities;
