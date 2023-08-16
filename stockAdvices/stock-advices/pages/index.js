import { useClient } from 'react';
import CardContainer from '../components/CardContainer';

const cards = ['Card 1', 'Card 2', 'Card 3'];

export default function Home() {
  return (
    <div>
      <h1>Card Sliding App</h1>
      <CardContainer cards={cards} />
    </div>
  );
}
