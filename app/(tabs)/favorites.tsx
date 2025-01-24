import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import { List, Divider, Checkbox, Avatar, Switch, Button } from 'react-native-paper';
import { Link } from 'expo-router';
import { Feather as Icon, AntDesign as AIcon, MaterialIcons as IOcon } from "react-native-vector-icons";
import CartIcon from "../components/cartIcon";

const CenteredCheckbox = () => (
  <View style={styles.centered}>
    <Checkbox status="checked" />
  </View>
);

export default function Cart() {
  const [qte, setQte] = useState(1)

  // Définition des catégories
  const [evenements, setEvenements] = useState([
    {
      "id": 1,
      "image": require('@/assets/b1.jpeg'),
      "name": "Surprise d'anniversaire",
      "price": 200,
      "advantages": "Source de vitamine C, elle booste le système immunitaire et favorise une peau saine."
    },
    {
      "id": 2,
      "image": require('@/assets/E1.jpeg'),
      "name": "Décoration de l'espace de mariage",
      "price": 100,
      "advantages": "Riche en antioxydants et en énergie, il contribue à une bonne santé cardiovasculaire."
    },
    {
      "id": 3,
      "image": require('@/assets/b3.jpeg'),
      "name": "Fraise",
      "price": 150,
      "advantages": "Riche en vitamine C et antioxydants, elle améliore la santé de la peau et renforce le système immunitaire."
    }]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href={'/'} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="chevron-left" size={24} color="#97969cfa" />
          <View style={{ paddingLeft: 15 }}>
            <Text style={{ fontFamily: 'Bold', color: "#97969cfa", fontSize: 16 }}>Favorites</Text>
          </View>
        </Link>

        <CartIcon />
      </View>

      <FlatList
        data={evenements} style={{ paddingHorizontal: 15, }}
        // contentContainerStyle={{ height: 100, borderWidth: 1 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <List.Item
              title={item.name}
              titleStyle={{ color: '#fff', fontFamily: 'Montserrat', fontSize: 12 }}
              style={{ borderWidth: 1, borderColor: '#433d5bfa', marginTop: 5, borderRadius: 15 }}
              description={() => (
                <View>
                  <Text style={{ color: '#f3d1ad', fontFamily: 'Bold', fontSize: 12 }}>$ {item.price}</Text>
                </View>
              )}
              left={(props) => (
                <List.Image source={item.image} style={{ ...props.style, borderRadius: 5 }} />
              )}
              right={() =>
                <View>
                  <TouchableOpacity style={{ padding: 5 }}>
                    <AIcon name="heart" size={20} color="#f3d1ad" />
                  </TouchableOpacity>

                  <TouchableOpacity style={{ padding: 5 }}>
                    <Icon name="shopping-cart" size={20} color="#97969cfa" />
                  </TouchableOpacity>
                </View>
              }
            />
          </TouchableOpacity>
        )}
      />


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
