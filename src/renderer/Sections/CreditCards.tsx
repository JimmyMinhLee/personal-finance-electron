import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  list,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { electron } from 'process';

import { useEffect, useState } from 'react';
import AddCardButton from 'renderer/Components/AddCardButton';
import CreditCard from 'renderer/Components/CreditCard';
import CreditCardCard from 'renderer/Components/CreditCardCard';

const CreditCards = (props: any) => {
  const [numCards, setNumCards] = useState(0);
  let creditCardsToRender = <div />;

  const addCardCallback = () => {
    setNumCards(numCards + 1);
  };

  const removeCardCallback = () => {
    setNumCards(0);
  };

  useEffect(() => {}, [numCards]);

  const allCreditCards = window.DataStore.store.get('credit-cards');
  if (allCreditCards !== '') {
    const listOfCreditCards = JSON.parse(allCreditCards);
    creditCardsToRender = listOfCreditCards.creditCards.map(
      (cardObject: CreditCard) => (
        <li key={cardObject.name}>
          <CreditCardCard cardName={cardObject.name} />
        </li>
      )
    );
  }

  return (
    <Container p={6}>
      <Center p={6}>
        <Box
          maxW="lg"
          w="2xl"
          boxShadow="2xl"
          rounded="lg"
          bg={useColorModeValue('white', 'gray.900')}
          p={6}
        >
          <Heading fontSize="2xl" fontFamily="body">
            Credit Cards
          </Heading>
          <VStack py={4}>{creditCardsToRender}</VStack>
          <AddCardButton
            addCardCallback={addCardCallback}
            removeCardCallback={removeCardCallback}
          />
        </Box>
      </Center>
    </Container>
  );
};

export default CreditCards;
