import { Flex, Image, Text } from '@chakra-ui/react';

import { FC } from 'react';
import { ICardProps } from '@/lib/interfaces/ICard.vm';
import Link from 'next/link';

const Card: FC<ICardProps> = (props) => {
  return (
    <Link
      href={{
        pathname: `/universities/${encodeURIComponent(props.slug)}`,
        query: props,
      }}
      as={`/universities/${encodeURIComponent(props.slug)}`}
    >
      <a>
        <Flex
          direction="column"
          justifyContent="center"
          backgroundColor="#ffff"
          width={{ base: 'sm', md: 'lg', lg: 'xs' }}
          height="xs"
          borderRadius="1rem"
          borderWidth="1px"
          boxShadow="0 1px 4px rgba(55,73,87,.06),0 10px 20px rgba(55,73,87,.1)"
          padding="30px"
        >
          <Image
            src={props.logoUrl}
            alt={props.shortName}
            width={120}
            style={{ margin: 'auto' }}
          />

          <Text marginTop="20" fontWeight="semibold" as="h4" lineHeight="tight">
            {props.name}
          </Text>
        </Flex>
      </a>
    </Link>
  );
};

export default Card;
