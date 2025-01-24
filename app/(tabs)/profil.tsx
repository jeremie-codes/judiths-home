import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import { List, Divider, Checkbox, Avatar, Button, Menu, TextInput } from 'react-native-paper';
import { Link } from 'expo-router';
import { Feather as Icon, AntDesign as AIcon, EvilIcons as EIcon } from "react-native-vector-icons";

type MenuVisibility = {
  [key: string]: boolean | undefined;
};

export default function Cart() {
  const [number, setNumber] = useState("");
  const [visible, setVisible] = React.useState<MenuVisibility>({});
  const [country, setCountry] = React.useState({
    pays: "République Démocratique du Congo (RDC)",
    symbole: "(RDC)",
    code: "+243",
    drapeau: "https://flagcdn.com/w320/cd.png"
  });

  const _toggleMenu = (name: string) => () =>
    setVisible({ ...visible, [name]: !visible[name] });
  const _getVisible = (name: string) => !!visible[name];

  const countries = [
    {
      pays: "République Démocratique du Congo (RDC)",
      symbole: "(RDC)",
      code: "+243",
      drapeau: "https://flagcdn.com/w320/cd.png"
    },
    {
      pays: "États-Unis (USA)",
      symbole: "(USA)",
      code: "+1",
      drapeau: "https://flagcdn.com/w320/us.png"
    },
    {
      pays: "France (FR)",
      symbole: "(FR)",
      code: "+33",
      drapeau: "https://flagcdn.com/w320/fr.png"
    },
    {
      pays: "Belgique (BE)",
      symbole: "(BE)",
      code: "+32",
      drapeau: "https://flagcdn.com/w320/be.png"
    },
    {
      pays: "Canada (CA)",
      symbole: "(CA)",
      code: "+1",
      drapeau: "https://flagcdn.com/w320/ca.png"
    }
  ];

  return (
    <View style={styles.container}>
      
      <View style={{ marginHorizontal: '5%', flexDirection: 'row', }}>
      </View>

      <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, marginVertical: 15, width: "100%" }}>
        <Text style={{ color: '#fff', fontFamily: 'Bold', fontSize: 16, textAlign: "center" }}>Connectez-vous pour beneficier de nos services</Text>
        <Text style={{ color: '#fff', fontFamily: 'Montserrat', fontSize: 12, textAlign: "center" }}>Entrez votre numéro de téléphone pour une authentification.</Text>
      </View>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      
        <Menu
          visible={_getVisible('menu4')}
          onDismiss={_toggleMenu('menu4')}
          anchor={
            <Button mode="outlined" onPress={_toggleMenu('menu4')}
              style={{ ...styles.inputContainerStyle, backgroundColor: 'transparent', borderColor: "#433d5bfa", borderWidth: 1, paddingVertical: 10, borderRadius: 10, marginHorizontal: 5}}
              labelStyle={{ fontFamily: 'Montserrat', fontSize: 12, color: "#f3d1ad" }}>
              {country.code} {country.symbole}
            </Button>
          }
        >
          {countries.map((country, index) => (<Menu.Item key={index} onPress={() => {
            setCountry(country)
            _toggleMenu('menu4')
          }} title={country.pays} />))}
        </Menu>
      
        <TextInput
          mode="outlined"
          style={{ ...styles.inputContainerStyle, backgroundColor: 'transparent' }}
          outlineStyle={{ borderColor: "#433d5bfa", borderWidth: 1, borderRadius: 10 }}
          contentStyle={{ fontFamily: "Montserrat", fontSize: 12, color: "#97969cfa" }}
          placeholder="243892733908"
          value={number}
          keyboardType='number-pad'
          onChangeText={setNumber}
          left={
            <TextInput.Icon
              icon="phone"
            />
          }
          maxLength={12}
          right={<TextInput.Affix text={`${number.length}/12`} />}
        />
      </View>

      <Button mode='contained' onPress={()=> {}}
        style={{ width: "84%", backgroundColor: '#edb579ce', paddingVertical: 5, borderRadius: 10, marginVertical:  15, marginLeft: 5}}
        labelStyle={{ fontFamily: 'Bold', fontSize: 14, color: "#fff" }}>
        Continuer
      </Button>

      <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, marginVertical: 15, width: "100%", flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
        <Divider style={{ height: 5, width: 60 }} />
        <Text style={{ color: '#fff', fontFamily: 'Montserrat', fontSize: 13, textAlign: "center", paddingHorizontal: 10 }}>Se connecter avec</Text>
        <Divider style={{ height: 5, width: 60 }} />
      </View>

      <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, marginVertical: 15, width: "100%", flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 50, height: 50, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, borderRadius: 10 }}>
          <AIcon name="google" size={24} color={'red'} />
        </View>
        <View style={{ width: 50, height: 50, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, borderRadius: 10 }}>
          <EIcon name="sc-facebook" size={34} color={'blue'} />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1c2a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    // backgroundColor: '#2e2c3696',
    height: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  inputContainerStyle: {
    marginVertical: 8,
    backgroundColor: 'transparent',
  },
  inputContentStyle: {
    paddingLeft: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
