import styled from "styled-components";

interface CharacterProps {
  id: number;
  image: string;
  legend: string;
  Action: (id: number) => void;
}

export default function Characte(CharacterProps: CharacterProps) {
  return (
    <View onClick={() => CharacterProps.Action(CharacterProps.id)}>
      <Image src={CharacterProps.image} />
      <Legend> {CharacterProps.legend} </Legend>
    </View>
  );
}

const View = styled.button`
  min-width: 300px;
  width: 100%;
  max-width: 360px;
  overflow: hidden;
  height: 400px;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
  border: none;
  &:hover {
    cursor: pointer;
  }
`

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
  &:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const Legend = styled.div`
  position: relative;
  bottom: 40px;
  width: 100%;
  height: 40px;
  background: linear-gradient(358.3deg,#000000 -23.57%,rgba(39,39,39,0) 240.07%);
  color: #F9F9F9;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-weight: 600;
`