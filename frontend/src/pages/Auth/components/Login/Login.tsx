import React from 'react';
import { Button, Wrap } from '@chakra-ui/react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
const Login: React.FC = () => {
  return (
    <Wrap spacing="10px">
      <FormControl isRequired>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" />
      </FormControl>
      <Button colorScheme="blue" w="100%">
        Login
      </Button>
      <Button colorScheme="blue" w="100%">
        Login With Test Credentials
      </Button>
    </Wrap>
  );
};

export { Login };
