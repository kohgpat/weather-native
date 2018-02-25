import styled from "styled-components/native";

// box-shadow: 0 0 20px -2px rgba(0,0,0,0.1);

export const City = styled.View`
  height: 320px;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 30px;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: "tail"
})`
  margin: 10px;
  width: 80%;
  font-size: 32px;
  font-family: Roboto-Condensed-Bold;
`;

export const RemoveButton = styled.TouchableOpacity`
  padding: 0;
  background-color: transparent;
  margin: 10px 10px 10px auto;
`;

export const RemoveButtonText = styled.Text`
  font-size: 32px;
  font-family: Roboto-Condensed-Bold;
  color: #333;
`;

export const WeatherIcon = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Stats = styled.View`
  margin: auto 10px 10px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// text-transform: capitalize;
export const Stat = styled.Text`
  margin: 0;
  font-size: 16px;
  font-family: Roboto-Condensed-Bold;

  ${props =>
    props.major &&
    `
    font-size: 48px;
  `};
`;
