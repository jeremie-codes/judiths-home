import React, {useState} from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import { Feather as Icon, FontAwesome6 as FIcon6, MaterialIcons as IOcon } from "react-native-vector-icons";
import CartIcon from "./cartIcon";

type ButtonVisibility = {
  [key: string]: boolean | undefined;
};

export default function HomeScreen( { navigation }: any ) {
  const [searchText, setSearchText] = useState('');
  const [visible, setVisible] = React.useState<ButtonVisibility>({});

  const _toggleDialog = (name: string) => () => setVisible({ ...visible, [name]: !visible[name] });
  const _getVisible = (name: string) => !!visible[name];

  return (
    <View style={styles.container}>
      <View style={{ ...styles.header, height: 70 }}>
        <TouchableOpacity>
          <Image source={require('../../assets/logos.png')} style={{ width: 70, height: 40 }} />
        </TouchableOpacity>
        
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 80, }}>
          <CartIcon/>

          <TouchableOpacity style={{ padding: 5 }}>
            <Icon name="bell" size={18} color="#97969cfa" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBar}>
        <TouchableOpacity>
          <Icon name="search" size={18} color="#97969cfa" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBarInput}
          placeholder="Rechercher"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#888888"
        />
      </View>
    </View>
  );



}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edb5790a',
    height: 140,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  searchBar: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 0,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#433d5bfa",
    paddingHorizontal: 15,
  },
  searchBarInput: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    width: '95%',
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
  },
});
