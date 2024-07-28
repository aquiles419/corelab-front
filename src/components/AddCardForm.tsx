import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

interface AddCardFormProps {
  onAddCard: (newCard: {
    id: number;
    name: string;
    description: string;
    favorite: boolean;
  }) => void;
}

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

const AddCardForm: React.FC<AddCardFormProps> = ({ onAddCard }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCard = {
      name: title,
      description,
      favorite: false,
    };

    axios
      .post("http://localhost:3333/v1/tasks", newCard)
      .then((response) => {
        setTitle("");
        setDescription("");
        onAddCard(response.data); // Chama a função de callback com o novo card
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

export default AddCardForm;
