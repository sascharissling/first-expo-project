import React from "react";
import { Button } from "react-native";
import styled from "@emotion/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: black;
`;

const AppText = styled.Text`
  color: #707070;
  font-size: 30px;
`;

export default function App() {
  const [text, setText] = React.useState("First React App");

  return (
    <Container>
      <AppText>{text}</AppText>
      <Button
        title="Change Text"
        onPress={() => setText("the text has been changed!")}
      />
    </Container>
  );
}
