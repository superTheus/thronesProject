import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api";
import Character from "../components/Character";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Load from "../components/load";
import Selected from "../components/Selected";
import { CharacterInterface } from "../utils/types";

export default function Home() {
  const [load, setLoad] = useState(true);
  const [loadCharacter, setLoadCharacter] = useState(false);
  const [charactersView, setCharactersView] = useState(false);

  const [characterSelected, setCharacterSelected] = useState<CharacterInterface>({
    id: 0,
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    family: "",
    image: "",
    imageUrl: ""
  });
  const [characters, setCharacters] = useState<CharacterInterface[]>([]);

  async function handlerCharacter() {
    const response = await api.get("/api/v2/Characters");

    if (response.status === 200) {
      setCharacters(response.data);
    }

    setLoad(false);
  }

  async function selectedCharacter(id: number) {
    setLoadCharacter(true);
    setCharactersView(true);
    const response = await api.get(`/api/v2/Characters/${id}`);

    if (response.status === 200) {
      setCharacterSelected(response.data);
    }

    setLoadCharacter(false);
  }

  useEffect(() => {
    handlerCharacter();
  }, [characters]);

  if (load)
    return <Load />

  return (
    <>
      <Header />
      <Main>
        {charactersView &&
          <Selected
            Action={() => setCharactersView(false)}
            Character={characterSelected}
            Load={loadCharacter}
          />
        }
        {characters.map((element) => {
          return <Character
            key={element.id}
            id={element.id}
            image={element.imageUrl}
            legend={element.fullName}
            Action={selectedCharacter}
          />
        })}
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  width: 100%;
  padding: 10px 70px;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-y: scroll;
  gap: 20px;

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;