import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ReactComponent as EditIcon } from "../assets/edit.svg";
import { ReactComponent as ColorIcon } from "../assets/color.svg";
import { ReactComponent as FavoriteOnIcon } from "../assets/favorite-on.svg";
import { ReactComponent as FavoriteOffIcon } from "../assets/favorite-off.svg";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";

const StyledCard = styled.div`
  width: 390px;
  height: 437.59px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  margin: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.73px;
  text-align: left;
  position: relative;
`;

const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 14.2px;
  font-weight: 700;
  line-height: 15.73px;
  flex: 1;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 15px 0;
  width: calc(100% + 32px);
  position: relative;
  left: -16px;
`;

const CardDescription = styled.p`
  flex: 1;
  margin: 0;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.73px;
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconContainerRight = styled.div`
  position: absolute;
  bottom: 24px;
  right: 16px;
  display: flex;
  align-items: flex-end;
`;

const EditIconStyled = styled(EditIcon)`
  width: 24px;
  height: 24px;
  padding: 3.5px;
  opacity: 1;

  &:hover {
    opacity: 0.7;
  }
`;

const ColorIconStyled = styled(ColorIcon)`
  width: 18px;
  height: 17px;
  opacity: 1;

  &:hover {
    opacity: 0.7;
  }
`;

const DeleteIconStyled = styled(DeleteIcon)`
  width: 18px;
  height: 18px;
  padding: 3.5px;
  opacity: 1;

  &:hover {
    opacity: 0.7;
  }
`;

const FavoriteIconStyled = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
`;

const FormContainer = styled.div`
  width: 530.52px;
  height: 103.36px;
  background-color: #fff;
  border-radius: 3px 0 0 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 16px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

interface CardData {
  id: number;
  name: string;
  description: string;
  favorite: boolean;
}

interface CardProps {
  id: number;
  title: string;
  description: string;
  favorite: boolean;
  onToggleFavorite: (id: number, favorite: boolean) => void;
}

interface AddCardFormProps {
  onAddCard: (newCard: CardData) => void;
}

const AddCardForm: React.FC<AddCardFormProps> = ({ onAddCard }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCard = {
      id: Date.now(),
      name: title,
      description,
      favorite: false,
    };

    axios
      .post("http://localhost:3333/v1/tasks", newCard)
      .then((response) => {
        setTitle("");
        setDescription("");
        onAddCard(response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the card!", error);
      });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button type="submit">Add Card</Button>
      </Form>
    </FormContainer>
  );
};

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  favorite,
  onToggleFavorite,
}) => {
  return (
    <StyledCard>
      <CardTitleContainer>
        <CardTitle>{title}</CardTitle>
        <FavoriteIconStyled onClick={() => onToggleFavorite(id, !favorite)}>
          {favorite ? <FavoriteOnIcon /> : <FavoriteOffIcon />}
        </FavoriteIconStyled>
      </CardTitleContainer>
      <Divider />
      <CardDescription>{description}</CardDescription>
      <IconContainer>
        <EditIconStyled />
        <ColorIconStyled />
      </IconContainer>
      <IconContainerRight>
        <DeleteIconStyled />
      </IconContainerRight>
    </StyledCard>
  );
};

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

  const handleToggleFavorite = (id: number, favorite: boolean) => {
    axios
      .put(`http://localhost:3333/v1/tasks/${id}`, { favorite })
      .then(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === id ? { ...card, favorite } : card
          )
        );
      })
      .catch((error) => {
        console.error(
          "There was an error updating the favorite status!",
          error
        );
      });
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
            id={card.id}
            title={card.name}
            description={card.description}
            favorite={card.favorite}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </CardRow>
      <SectionTitle>Other Cards</SectionTitle>
      <CardRow>
        {nonFavoriteCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.name}
            description={card.description}
            favorite={card.favorite}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </CardRow>
    </DashboardContainer>
  );
};

export default Dashboard;
