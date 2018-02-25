import styled from "styled-components/native";

export const Cities = styled.FlatList`
  padding: 0 20px 20px;
  flex: 1;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
`;

export const NoCitiesMessage = styled.Text`
  margin-top: 20px;
  padding: 20px;
  font-family: Roboto-Condensed-Regular;
  font-size: 16px;
`;
