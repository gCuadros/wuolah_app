import { Flex, Image, Text } from '@chakra-ui/react';

type Props = {
  imageUrl: string;
  imageAlt: string;
  cardTitle: string;
};

const Card = (props: Props) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      backgroundColor="#ffff"
      maxWidth="lg"
      borderRadius="1rem"
      borderWidth="1px"
      boxShadow="0 1px 4px rgba(55,73,87,.06),0 10px 20px rgba(55,73,87,.1)"
      padding="30px"
    >
      <Image
        src={
          'https://s3-eu-west-1.amazonaws.com/wuolah-public/imagenes/universidades/5/universidad-alfonso-x-el-sabio-logo.jpg'
        }
        alt={props.imageAlt}
        width={120}
        style={{ margin: 'auto' }}
      />

      <Text marginTop="20" fontWeight="semibold" as="h4" lineHeight="tight">
        {props.cardTitle}
      </Text>
    </Flex>
  );
};

export default Card;
