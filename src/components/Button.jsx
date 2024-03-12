import { Button } from '@chakra-ui/react';

export const Btn = ({ children, onClick }) => {
  return (
    <Button size="sm" colorScheme="purple" onClick={onClick}>
      {children}
    </Button>
  );
};