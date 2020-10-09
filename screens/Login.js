import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Text,
  ScrollView,
} from "react-native";
import AppButton from "../../component/AppButton";

export default function Login() {
  return (
    <View style={styles.main}>
      <View style={styles.styleViewfirst}>
        <ImageBackground
          style={styles.background}
          source={require("../../assets/barber_logo.png")}
        ></ImageBackground>
      </View>
      <View style={styles.styleViewsecond}>
        <ScrollView>
          <Text style={styles.textView}> Get On Board!</Text>
          <TextInput style={styles.textformate} placeholder="Name" />
          <TextInput style={styles.textformate} placeholder="Email" />
          <TextInput style={styles.textformate} placeholder="Address" />
          <TextInput style={styles.textformate} placeholder="Zip Code" />
          <TextInput style={styles.textformate} placeholder="Password" />
          <TextInput style={styles.textformate} placeholder="Retype Password" />
          <AppButton title="Register -- >" />
        </ScrollView>
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
  // textView: {
  //   fontSize: 20,
  //   textAlign: "center",
  //   color: "#3AB6E3",
  //   marginTop: "10%",
  //   fontWeight:'bold',
  // },
  styleViewsecond: {
    height: "55%",
    width: "100%",
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
  textformate: {
    fontSize: 20,
    backgroundColor: "#B2BABB",
    borderRadius: 25,
    width: "90%",
    padding: 20,
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
    justifyContent: "flex-end",
  },
  check: {
    justifyContent: "center",
    height: 10,
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%",
    marginTop: "10%",
    borderRadius: 25,
  },
});
