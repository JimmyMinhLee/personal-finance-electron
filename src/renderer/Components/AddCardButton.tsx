/* eslint-disable lines-between-class-members */
/* eslint-disable react/destructuring-assignment */
import {
  Box,
  Center,
  Text,
  Heading,
  HStack,
  Input,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import CreditCard from './CreditCard';

class AddCardButtonProps {
  addCardCallback!: () => void;
  removeCardCallback!: () => void;
}

function AddCardButton(props: AddCardButtonProps) {
  const handleAddCard = () => {
    const newCardName = document.getElementById(
      'add-card-name-input'
    ) as HTMLInputElement;
    if (newCardName != null && newCardName.value !== '') {
      const cardToAdd = new CreditCard(newCardName.value, 0, 0);
      const currentCreditCardsString =
        window.DataStore.store.get('credit-cards');

      if (currentCreditCardsString === '') {
        const CreditCardsObjectToInstantiate = {
          creditCards: [cardToAdd],
        };
        window.DataStore.store.set(
          'credit-cards',
          JSON.stringify(CreditCardsObjectToInstantiate)
        );
      } else {
        const currentCreditCardsObject = JSON.parse(currentCreditCardsString);
        const creditCardsList =
          currentCreditCardsObject.creditCards as Array<CreditCard>;
        creditCardsList.push(cardToAdd);
        currentCreditCardsObject.creditCards = creditCardsList;
        window.DataStore.store.set(
          'credit-cards',
          JSON.stringify(currentCreditCardsObject)
        );
      }
      props.addCardCallback();
    }
  };

  const handleResetCards = () => {
    window.DataStore.store.set('credit-cards', '');
    props.removeCardCallback();
  };

  return (
    <Center p={8}>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="xl"
        rounded="lg"
        textAlign="center"
        p={6}
      >
        <Heading fontSize="2xl" fontFamily="body">
          Add Card
        </Heading>
        <HStack py={4}>
          <Heading fontSize="xl" mx={4}>
            Name
          </Heading>
          <Input size="lg" variant="filled" id="add-card-name-input" />
        </HStack>
        <Button onClick={handleAddCard}> Add New Card </Button>
        <Button onClick={handleResetCards} my={4}>
          Get Cards
        </Button>
        <Button onClick={handleResetCards} my={4}>
          Reset Cards
        </Button>
      </Box>
    </Center>
  );
}

export default AddCardButton;
