import React, {useState} from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Index({item, index}: any) {

  return (
    <View 
      style={{ backgroundColor: 'transparent', marginRight: 10, marginTop: 10, width: (width * 89) / 100 }} >
      <View style={{ ...styles.categoryCard, width: "100%" }}>
        <Image source={item.image} style={{ width: "100%", height: 180, borderRadius: 15 }} resizeMode="cover" />
        <View style={styles.categoryOverlay}>
          <Text style={styles.categoryTitle}>{item.name}</Text>
          <View style={{ backgroundColor: "#fff", marginLeft: 10, borderRadius: 15, padding: 10, maxWidth: 100 }}>
            <Text style={styles.categoryButton}>{item.action}</Text>
          </View>
        </View>
      </View>
    </View>
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
    height: 170,
    backgroundColor: 'transparent'
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryOverlay: {
    flex: 1,
    // backgroundColor: 'rgb(0,0,0,0)',
    position: 'absolute',
    top: 35,
    left: 15,
    borderRadius: 10,
  },
  categoryButton: {
    fontSize: 13,
    color: '#2e2c3696',
    fontFamily: 'Montserrat',
  },
  categoryTitle: {
    fontSize: 16,
    color: 'white',
    padding: 10,
    fontFamily: 'Bold',
  },
});
