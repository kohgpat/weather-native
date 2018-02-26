import styled from "styled-components/native";

// box-shadow: 0 0 20px -2px rgba(0,0,0,0.1);

export const City = styled.View`
  height: 320px;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 30px;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SubHeader = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubHeaderText = styled.Text`
  margin: 0 10px;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto-Condensed-Bold;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: "tail"
})`
  margin: 10px 10px 0;
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

export const WeatherMain = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Stats = styled.View`
  margin: 10px;
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
