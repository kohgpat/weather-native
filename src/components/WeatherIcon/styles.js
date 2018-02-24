import styled from "styled-components/native";

const ENDPOINT = "https://openweathermap.org/img/w/";

export const Icon = styled.Image.attrs({
  source: props => {
    {
      uri: `${ENDPOINT}${props.icon}.png`;
    }
  }
})`
  width: 50px;
  height: 50px;
`;
