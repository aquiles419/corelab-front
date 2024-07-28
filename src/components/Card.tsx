import React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  description: string;
}

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
`;

const CardTitle = styled.h3`
  margin: 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 14.2px;
  font-weight: 700; /* Negrito */
  line-height: 15.73px;
`;

const CardDescription = styled.p`
  flex: 1;
  margin: 16px 0 0 0;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.73px;
`;

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <StyledCard>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </StyledCard>
  );
};

export default Card;
