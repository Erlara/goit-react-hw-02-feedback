import { Container, Title } from './Feedback.styled';
import PropTypes from 'prop-types';

export const Feedback = ({ onAddGood, onAddNeutral, onAddBad }) => {
  return (
    <Container>
      <Title>Please leave feedback</Title>
      <button
        onClick={() => {
          onAddGood();
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          onAddNeutral();
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          onAddBad();
        }}
      >
        Bad
      </button>
    </Container>
  );
};

Feedback.protoTypes = {
  onClick: PropTypes.func.isRequired,
};
