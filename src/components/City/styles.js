import styled from "styled-components/native";

// box-shadow: 0 0 20px -2px rgba(0,0,0,0.1);

export const City = styled.View`
  height: 280px;
  width: 280px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 30px;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: "tail"
})`
  margin: 10px;
  width: 80%;
`;

export const RemoveButton = styled.Button`
  padding: 0;
  font-weight: bold;
  font-size: 32px;
  background-color: transparent;
  border: 0;
  margin: 10px 10px 10px auto;
`;

export const WeatherIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Stats = styled.View`
  margin: auto 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// text-transform: capitalize;
export const Stat = styled.Text`
  margin: 0;

  ${props =>
    props.major &&
    `
    font-size: 48px;
  `};
`;
