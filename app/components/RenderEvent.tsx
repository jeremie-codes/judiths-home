import React, {useState} from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList, Dimensions } from 'react-native';
import { Feather as Icon, FontAwesome6 as FIcon6, MaterialIcons as IOcon } from "react-native-vector-icons";

const { width, height } = Dimensions.get('window');

export default function Index({item, video, article, index}: any) {

  return (
    <Link key={index} href={{ pathname: video || article ? '/detail': '..', params: { name: item.name, image: item.image, price: item.price, description: item.description, categorie: item.categorie, video: video && item.video } }}
      style={{ backgroundColor: 'transparent', marginRight: 10, marginTop: 10, width: (width * 89) / 100 }} >
      <View style={{ ...styles.categoryCard, width: "100%" }}>
        <Image source={item.image} style={{ width: "100%", height: 180, borderRadius: 15 }} resizeMode="cover" />
        {video && <View style={{ position: "absolute", opacity: 0.4, width: "100%", height: "100%", backgroundColor: '#000' }}></View>}
        {video && <Link key={index} href={{ pathname: video || article ? '/detail' : '..', params: { name: item.name, image: item.image, price: item.price, description: item.description, categorie: item.categorie, video: video && item.video } }}
          style={{ padding: 5, position: 'absolute', alignSelf: 'center', top: 65 }}>
          <Icon name="play-circle" size={45} color="#f3d1ad" />
        </Link>}
        <View style={styles.categoryOverlay}>
          <Text style={styles.categoryTitle}>{item.name}</Text>
        </View>
      </View>
    </Link>
  );
}


const styles = StyleSheet.create({
  categoryScroll: {
    marginTop: 10,
    width: '100%'
  },
  categoryCard: {
    // marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    height: 195,
    backgroundColor: 'transparent'
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryOverlay: {
    // flex: 1,
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
    borderRadius: 10,
  },
  categoryTitle: {
    fontSize: 14,
    color: 'white',
    padding: 10,
    fontFamily: 'Montserrat',
  },
});
