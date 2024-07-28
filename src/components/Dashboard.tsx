import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "./Card";
import AddCardForm from "./AddCardForm";

interface CardData {
  id: number;
  name: string;
  description: string;
  favorite: boolean;
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SectionTitle = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: left;
  margin: 0;
  padding: 8px 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Dashboard: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/v1/tasks")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the cards!", error);
      });
  }, []);

  const handleAddCard = (newCard: CardData) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const favoriteCards = cards.filter((card) => card.favorite);
  const nonFavoriteCards = cards.filter((card) => !card.favorite);

  return (
    <DashboardContainer>
      <AddCardForm onAddCard={handleAddCard} />
      <SectionTitle>Favorite Cards</SectionTitle>
      <CardRow>
        {favoriteCards.map((card) => (
          <Card
            key={card.id}
            title={card.name}
            description={card.description}
          />
        ))}
      </CardRow>
      <SectionTitle>Other Cards</SectionTitle>
      <CardRow>
        {nonFavoriteCards.map((card) => (
          <Card
            key={card.id}
            title={card.name}
            description={card.description}
          />
        ))}
      </CardRow>
    </DashboardContainer>
  );
};

export default Dashboard;
