import React from "react";
import styled from "styled-components";
import { ReactComponent as EditIcon } from "../assets/edit.svg";
import { ReactComponent as ColorIcon } from "../assets/color.svg";
import { ReactComponent as FavoriteOnIcon } from "../assets/favorite-on.svg";
import { ReactComponent as FavoriteOffIcon } from "../assets/favorite-off.svg";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";
interface CardProps {
  id: number;
  title: string;
  description: string;
  favorite: boolean;
  onToggleFavorite: (id: number, favorite: boolean) => void;
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
  position: relative; /* Necessário para posicionar os ícones */
`;

const CardTitleContainer = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente o título e o ícone */
  justify-content: space-between; /* Espaça o título e o ícone */
`;

const CardTitle = styled.h3`
  margin: 0;
  font-family: "Inter", sans-serif;
  font-size: 14.2px;
  font-weight: 700; /* Negrito */
  line-height: 15.73px;
  flex: 1; /* Ocupa o espaço disponível */
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
  margin: 15px 0; /* Ajustar margem superior para posicionar a linha mais para cima */
  width: calc(
    100% + 32px
  ); /* Garantir que a linha ocupe toda a largura do cartão, incluindo o padding */
  position: relative;
  left: -16px; /* Ajustar para alinhar com o conteúdo do cartão */
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
  left: 16px; /* Posicionar à esquerda do cartão */
  display: flex;
  align-items: center; /* Alinha verticalmente os ícones */
  gap: 8px;
`;

const IconContainerRight = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px; /* Posicionar à direita do cartão */
  display: flex;
  align-items: center; /* Alinha verticalmente os ícones */
  gap: 8px;
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
  opacity: 1;
  margin-bottom: -4px; /* Subir o ícone de exclusão */

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
      <Divider /> {/* Linha divisória */}
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

export default Card;
