//check it all small single property work or not like

//->check Icon component file working or not
import React, { useState } from "react";
import {} from "react-native";
import Screen from "../../component/Screen";
import { TextInput, Switch } from "react-native-gesture-handler";

export default function TimePass() {
  //no 2 set text default value const value
  //const [firstname, setFirstName] = useState("");

  //no 3 set switch  default value const value
  const [isnew, setIsNew] = useState(false);
  return (
    //1 Icon check
    //<Screen>
    //  <ListItem title="Edit Setting" ImageComponent={<Icon name="email" />} />
    //</Screen>

    //2 set text value is bydefault you can remove value and set default
    //<Screen>
    //  <TextInput
    //    onChangeText={(text) => setFirstName(text)}
    //    placeholder="first name"
    //    style={{
    //      borderBottomColor: color.black,
    //      borderBottomWidth: 1,
    //    }}
    //  />
    //</Screen>

    //3 switch button code
    <Screen>
      <Switch value={isnew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}
