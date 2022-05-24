import React, { Dispatch, FC, SetStateAction } from 'react';
import { Container, Text, Button } from './styles';

interface IErrorMessage {
  errorMessage: string | undefined | null;
  setMockedValues: Dispatch<SetStateAction<boolean>>;
}

const ErrorMessage: FC<IErrorMessage> = ({ errorMessage, setMockedValues }) => {
  return (
    <Container>
      {errorMessage?.includes('Maximum usage') ? (
        <>
          <Text>{errorMessage}</Text>
          <Text>Se ha alcanzado el número máximo de usos por día.</Text>
          <Button onClick={() => setMockedValues(true)}>
            Usar componentes de prueba
          </Button>
        </>
      ) : (
        <Text>{errorMessage}</Text>
      )}
    </Container>
  );
};

export default ErrorMessage;
