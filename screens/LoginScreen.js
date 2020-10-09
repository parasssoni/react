import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../../component/Screen";
import AppTextInput from "../../component/AppTextInput";
import AppButton from "../../component/AppButton";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen>
      <Image style={styles.logo} source={require("../devlope.png")} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        securetextEntry
        placeholder="password"
      />
      <AppButton
        title="Login"
        color="tomato"
        onPress={() => console.log(email, password)}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo: {
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
