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

import { useState } from 'react';
import AddCardButton from 'renderer/Components/AddCardButton';
import CreditCardCard from 'renderer/Components/CreditCardCard';

const CreditCards = (props: any) => {
  const [numCards, setNumCards] = useState(0);

  const setNumberOfCards = () => {
    const numberOfCards = document.getElementById('number-of-cards');
    window.DataStore.store.set('credit-cards', numberOfCards!.value);
  };

  const getNumberOfCards = () => {
    const heading = document.getElementById('number-of-cards-in-data-store');
    setNumCards(window.DataStore.store.get('credit-cards'));
  };

  return (
    <Box w="3xl" boxShadow="3xl" p={6}>
      <Center p={6}>
        <Box
          maxW="lg"
          w="2xl"
          boxShadow="2xl"
          rounded="lg"
          textAlign="center"
          bg={useColorModeValue('white', 'gray.900')}
          p={6}
        >
          <Heading fontSize="2xl" fontFamily="body">
            Credit Cards
          </Heading>
          <HStack py={4}>
            <Heading fontSize="xl" mx={4}>
              Total Balance
            </Heading>
            <Input size="lg" variant="filled" />
          </HStack>
          <Button my={4}> Calculate </Button>
          <AddCardButton />
        </Box>
      </Center>
    </Box>
  );
};

export default CreditCards;
