import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Text,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "../../component/AppButton";
import color from "../../config/color";

export default function Check() {
  return (
    <View style={styles.main}>
      <View style={styles.styleViewfirst}>
        <ImageBackground
          style={styles.background}
          source={require("../../assets/barber_logo.png")}
        ></ImageBackground>
      </View>
      <View style={styles.styleViewsecond}>
        <Text style={styles.textView}> Welcome Back!</Text>
        <View style={styles.textviewproperty}>
          <MaterialCommunityIcons
            name={"account-outline"}
            size={24}
            style={styles.icon}
            placeholder={"Email Id"}
          />
          <TextInput placeholder={"Email Id"} />
        </View>
        <View style={styles.textviewproperty}>
          <MaterialCommunityIcons
            size={24}
            style={styles.icon}
            name="textbox-password"
          />
          <TextInput placeholder={"password"} />
        </View>
        <View style={styles.signin}>
          <AppButton title="Sign In" />
        </View>
        <View style={{ backgroundColor: color.white }}>
          <Text style={styles.forgetpassword}>Forgot Your Password?</Text>
          <Text style={styles.notregister}>
            Not registered yet?
            <Text style={styles.register}> Registerd here</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#3AB6E3",
  },
  styleViewfirst: {
    height: "45%",
    width: "100%",
  },
  textView: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "#3AB6E3",
    marginTop: "10%",
  },
  styleViewsecond: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 25,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  background: {
    height: "100%",
    width: "100%",
  },
  textviewproperty: {
    flexDirection: "row",
    fontSize: 20,
    backgroundColor: "#B2BABB",
    textDecorationColor: color.black,
    borderRadius: 40,
    width: "90%",
    padding: 15,
    left: 20,
    marginVertical: 20,
  },
  icon: {
    marginRight: 10,
    justifyContent: "flex-end",
  },
  signin: {
    flexDirection: "row",
    fontSize: 10,
    backgroundColor: color.blue,
    borderRadius: 40,
    width: "90%",
    padding: 10,
    left: 20,
    //marginVertical: 5,
  },
  forgetpassword: {
    justifyContent: "center",
    fontSize: 15,
    color: "#000",
    marginTop: "5%",
  },
  notregister: {
    color: "#000",
    marginTop: "3%",
  },
  register: {
    color: "#5EC8EE",
    textDecorationLine: "underline",
    marginBottom: "10%",
  },
  subarea: {
    marginTop: "10%",
  },
});
