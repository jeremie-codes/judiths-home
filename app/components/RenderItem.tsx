import React, {useState} from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList, Dimensions } from 'react-native';
import { Feather as Icon, FontAwesome6 as FIcon6, MaterialIcons as IOcon } from "react-native-vector-icons";

const { width, height } = Dimensions.get('window');

const truncateText = (text: any, maxLength: any) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

export default function Index({ item, index }: any) {

  return (
    <Link key={index} href={{ pathname: '/detail', params: { name: item.name, image: item.image, price: item.price, description: item.description, categorie: item.categorie } }}
      style={{ backgroundColor: 'transparent', marginRight: 15, marginTop: 10, }} >
      <View style={{ ...styles.movieCard, width: 240, marginHorizontal: 10 }}>
        <Image source={item.image} style={{ ...styles.movieImage }} />
        <Text style={{ fontFamily: "Montserrat", textAlign: "left", color: '#fff', top: 10, left: 10 }}>{truncateText(item.name, 20)}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "90%" }}>
          <Text style={{ ...styles.movieDescription, top: 10, }}>$ <Text style={{ ...styles.movieDescription, top: 15, color: "#f3d1ad" }}> {item.price}</Text></Text>
          <TouchableOpacity style={{ top: 5, }}>
            <Icon name="shopping-cart" size={18} color="#97969cfa" />
          </TouchableOpacity>
        </View>
      </View>
    </Link>
  );
}


const styles = StyleSheet.create({
  movieCard: {
    height: 215,
    backgroundColor: '#2e2c3696',
    borderRadius: 10,
    position: 'relative',
    elevation: 0
  },
  movieImage: {
    width: '100%',
    height: 110,
    borderRadius: 15
  },
  movieDescription: {
    fontSize: 14,
    color: '#CCCCCC',
    marginTop: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    fontFamily: 'Bold',
  },
});
