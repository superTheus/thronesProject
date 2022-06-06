import styled from 'styled-components';
import colors from '../utils/colors';

export default function Header() {
  return (
    <HeaderArea>
      <Title>ThronesProject</Title>
    </HeaderArea>
  );
}

const HeaderArea = styled.header`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
`;

const Title = styled.p`
  color: #F9F9F9;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 196.19%;
`;