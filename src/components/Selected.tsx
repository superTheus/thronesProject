import styled from "styled-components";
import colors from "../utils/colors";
import { CharacterInterface } from "../utils/types";
import Load from "./load";

interface SelectedProps {
  Action: () => void;
  Character: CharacterInterface;
  Load: boolean;
}

export default function Selected(SelectedProps: SelectedProps) {
  if (SelectedProps.Load)
    return <Load />

  return (
    <Container>
      <ButtonClose onClick={SelectedProps.Action}>X</ButtonClose>
      {SelectedProps.Load ?
        <Load /> :
        <>
          <Image src={SelectedProps.Character.imageUrl} />
          <TextInfo>
            <p>
              <TextTitle> FirstName: </TextTitle> <TextData> {SelectedProps.Character.firstName} </TextData>
            </p>
            <p>
              <TextTitle> LastName: </TextTitle> <TextData> {SelectedProps.Character.lastName} </TextData>
            </p>
            <p>
              <TextTitle> Title: </TextTitle> <TextData> {SelectedProps.Character.title} </TextData>
            </p>
            <p>
              <TextTitle> Family: </TextTitle> <TextData> {SelectedProps.Character.family} </TextData>
            </p>
          </TextInfo>
        </>
      }
    </Container>
  );
}

const Container = styled.div`
    width: 90%;
    height: 80%;
    z-index: 1000;
    background: linear-gradient(358.3deg,#000000 -23.57%,rgba(39,39,39,0) 240.07%);
    border-radius: 20px;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const ButtonClose = styled.div`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  position: fixed;
  top: 40px;
  right: 5%;
  background-color: ${colors.orange};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  min-width: 200px;
  width: 40%;
  max-width: 350px;
  min-height: 200px;
  height: auto;
  max-height: 430px;
  border-radius: 50%;
`;

const TextInfo = styled.div`
  width: 60%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 550px){
    width: 100%;
    height: 200px;
  }
`;

const TextTitle = styled.span`
  font-size: 30px;
  color: ${colors.white};
  @media only screen and (max-width: 650px){
      font-size: 18px;
  }
`

const TextData = styled(TextTitle)`
  color: ${colors.orange};
`;