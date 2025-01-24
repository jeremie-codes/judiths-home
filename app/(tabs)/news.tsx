import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import { List, Divider, Checkbox, Avatar, Switch, Button } from 'react-native-paper';
import { Link } from 'expo-router';
import { Feather as Icon, FontAwesome6 as FIcon6, MaterialIcons as IOcon } from "react-native-vector-icons";
import RenderItem from '../components/RenderItem';
import RenderEvent from '../components/RenderEvent';
const { width, height } = Dimensions.get('window');

const CenteredCheckbox = () => (
  <View style={styles.centered}>
    <Checkbox status="checked" />
  </View>
);

export default function Cart() {
  const [qte, setQte] = useState(1)
  // Définition des catégories
  const [movies, setMovies] = useState([
    {
      "id": 1,
      "image": require('@/assets/b1.jpeg'),
      "name": "Bouquet FILI",
      "price": 100,
      "categorie": "Bouquet",
      "description": "Riche en fibres et antioxydants, elle favorise une bonne digestion et réduit le risque de maladies chroniques."
    },
    {
      "id": 2,
      "image": require('@/assets/b2.jpeg'),
      "name": "Bouquet Sugar",
      "price": 200,
      "categorie": "Bouquet",
      "description": "Excellente source de potassium, elle aide à maintenir une bonne santé cardiaque et musculaire."
    },
    {
      "id": 3,
      "image": require('@/assets/b3.jpeg'),
      "name": "Bouquet Amour Fou",
      "price": 150,
      "categorie": "Bouquet",
      "description": "Riche en vitamine C et antioxydants, elle améliore la santé de la peau et renforce le système immunitaire."
    },
    {
      "id": 4,
      "image": require('@/assets/b4.jpeg'),
      "name": "Bouquet Bouquet GOZAK",
      "price": 120,
      "categorie": "Bouquet",
      "description": "Riche en antioxydants et en énergie, il contribue à une bonne santé cardiovasculaire."
    },
    {
      "id": 5,
      "image": require('@/assets/b5.jpeg'),
      "name": "Bouquet Bouquet Parfin",
      "price": 105,
      "categorie": "Bouquet",
      "description": "Source de vitamine C, elle booste le système immunitaire et favorise une peau saine."
    },

  ])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href={'/'} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="chevron-left" size={24} color="#97969cfa" />
          <View style={{ paddingLeft: 15 }}>
            <Text style={{ fontFamily: 'Bold', color: "#97969cfa", fontSize: 16 }}>Nouveautés</Text>
          </View>
        </Link>

        <TouchableOpacity style={{ padding: 5 }}>
          <Icon name="shopping-cart" size={18} color="#97969cfa" />
          <View style={{ backgroundColor: "#f3d1ad", borderRadius: 50, position: 'absolute', height: 15, paddingHorizontal: 5, right: -5, top: -3 }}>
            <Text style={{ fontFamily: 'Montserrat', color: "#1e1c2a", fontSize: 12 }}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList showsVerticalScrollIndicator={false} style={{ ...styles.movieScroll, width: width }}
        data={['']}
        renderItem={({ item, index }) => (
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, paddingHorizontal: "5%" }}>
              <Text style={{ color: "#fff", fontSize: 14, marginTop: 10, fontFamily: 'Bold' }}>Bouquets</Text>
              <TouchableOpacity style={{ padding: 5 }}>
                <Icon name="chevron-down" size={18} color="#97969cfa" />
              </TouchableOpacity>
            </View>

            <FlatList horizontal showsHorizontalScrollIndicator={false}
              data={movies} style={{ paddingHorizontal: "5%", width: width, }}
              renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, paddingHorizontal: "5%" }}>
              <Text style={{ color: "#fff", fontSize: 14, marginTop: 10, fontFamily: 'Bold' }}>Cadeaux</Text>
              <TouchableOpacity style={{ padding: 5 }}>
                <Icon name="chevron-down" size={18} color="#97969cfa" />
              </TouchableOpacity>
            </View>

            <FlatList horizontal showsHorizontalScrollIndicator={false} style={{ width: (width * 90) / 100, marginBottom: 50, marginHorizontal: '5%' }}
              data={[...movies].reverse()}
              renderItem={({ item, index }) => <RenderEvent item={item} index={index} article />}
            />
          </View>
        )} />

    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    alignSelf: 'center',
  },
  container: {
    flex: 1,
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
});
