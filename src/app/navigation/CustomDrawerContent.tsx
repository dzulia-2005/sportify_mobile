import React from "react";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { View, StyleSheet, Alert } from "react-native";

const CustomDrawerContent = (props: any) => {
  const handleLogout = () => {
    Alert.alert("გასვლა", "გინდა რომ ანგარიშიდან გამოხვიდე?", [
      { text: "გაუქმება", style: "cancel" },
      {
        text: "გასვლა",
        onPress: () => {
          console.log("User logged out");
          props.navigation.replace("Login");
        },
      },
    ]);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.bottomSection}>
        <DrawerItem
          label="გასვლა"
          labelStyle={styles.logoutLabel}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.1)",
    paddingVertical: 10,
    marginBottom: 20,
  },
  logoutLabel: {
    color: "#fff",
    backgroundColor:'red',
    fontWeight: "bold",
    fontSize:16,
    borderRadius:10,
    textAlign:'center',
    paddingVertical:5
  },
});

export default CustomDrawerContent;
