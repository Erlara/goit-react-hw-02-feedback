import { Container, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  onAddGood,
  onAddNeutral,
  onAddBad,
  onTotal,
}) => {
  return (
    <Container>
      <Button
        onClick={() => {
          onAddGood();
          onTotal();
        }}
      >
        Good
      </Button>
      <Button
        onClick={() => {
          onAddNeutral();
          onTotal();
        }}
      >
        Neutral
      </Button>
      <Button
        onClick={() => {
          onAddBad();
          onTotal();
        }}
      >
        Bad
      </Button>
    </Container>
  );
};

FeedbackOptions.protoTypes = {
  onClick: PropTypes.func.isRequired,
};
