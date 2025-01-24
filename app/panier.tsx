import React,{ useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import { List, Divider, Checkbox, Avatar, Switch, Button } from 'react-native-paper';
import { Link } from 'expo-router';
import { Feather as Icon, FontAwesome6 as FIcon6, MaterialIcons as IOcon } from "react-native-vector-icons";
import CartIcon from "./components/cartIcon";

const CenteredCheckbox = () => (
  <View style={styles.centered}>
    <Checkbox status="checked" />
  </View>
);

export default function Cart () {
  const [qte, setQte] = useState(1)
  const [panier, setPanier] = useState([
    {
      "id": 1,
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
      "name": "Bouquet Sugar",
      "price": 100,
      "qte": 1,
    },
    {
      "id": 2,
      "image": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
      "name": "Bouquet Fili",
      "price": 200,
      "qte": 2,
    },
    {
      "id": 3,
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg",
      "name": "Bouquet Amour Fou",
      "price": 150,
      "qte": 1,
    }
  ])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href={'/'} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="chevron-left" size={24} color="#97969cfa" />
          <View style={{ paddingLeft: 15 }}>
            <Text style={{ fontFamily: 'Bold', color: "#97969cfa", fontSize: 16 }}>Panier</Text>
          </View>
        </Link>

        <CartIcon />
      </View>

      <FlatList
        data={panier} style={{ paddingHorizontal: 15, }}
        // contentContainerStyle={{ height: 100, borderWidth: 1 }}
        renderItem={({ item, index }) => (
          <List.Item
            title={item.name}
            titleStyle={{ color: '#fff', fontFamily: 'Montserrat', fontSize: 12 }}
            style={{ borderWidth: 1, borderColor: '#433d5bfa', marginTop: 5, borderRadius: 15 }}
            description={() => (
              <View>
                <Text style={{ color: '#fff', fontFamily: 'Montserrat', fontSize: 12 }}>$ {item.price}</Text>
                <View style={{ flexDirection: 'row', alignItems: "center", }}>
                  <TouchableOpacity style={{ height: 20, width: 20, borderWidth: 1, borderColor: '#433d5bfa', flexDirection: 'row', justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
                    <Icon name="minus" size={12} color="#97969cfa"/>
                  </TouchableOpacity>
                  <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ color: '#fff', fontFamily: 'Montserrat' }}>{item.qte}</Text>
                  </View>
                  <TouchableOpacity style={{ height: 20, width: 20, borderWidth: 1, borderColor: '#433d5bfa', flexDirection: 'row', justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
                      <Icon name="plus" size={12} color="#97969cfa"/>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            left={(props) => (
              <List.Image source={{ uri: item.image }} style={{ ...props.style, borderRadius: 5 }} size={40} />
            )}
            right={() =>
              <TouchableOpacity style={{ padding: 10 }}>
                <Icon name="trash-2" size={14} color="#97969cfa" />
              </TouchableOpacity>}
          />
        )}
      />

      <Divider style={{ marginVertical: 10 }} />
      <View>
        <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#fff', fontFamily: 'Bold', fontSize: 14 }}>Sous-total</Text>
          <Text style={{ color: '#f3d1ad', fontFamily: 'Bold', fontSize: 14 }}>$ 450</Text>
        </View>
        
        <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingVertical: 10, borderRadius: 10, backgroundColor: "#433d5bfa" }}>
          <Text style={{ color: '#fff', fontFamily: 'Bold', fontSize: 14 }}>Livraison</Text>
          <Text style={{ color: '#f3d1ad', fontFamily: 'Bold', fontSize: 12 }}>(CDF 5.000) $ 1.8</Text>
        </View>
        
        <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, paddingVertical: 10, borderRadius: 10, backgroundColor: "#433d5bfa" }}>
          <Text style={{ color: '#fff', fontFamily: 'Bold', fontSize: 14 }}>Total</Text>
          <Text style={{ color: '#f3d1ad', fontFamily: 'Bold', fontSize: 12 }}>$ 451.8</Text>
        </View>

        <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ color: '#fff', fontFamily: 'Bold', fontSize: 14 }}>Livraison à l'adresse</Text>
          <Text style={{ color: '#f3d1ad', fontFamily: 'Bold', fontSize: 12 }}>changer l'adresse</Text>
        </View>

        <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between',marginTop: 5 }}>
          <Text style={{ color: '#fff', fontFamily: 'Montserrat', fontSize: 12 }}>45 Avenue Flambeau, commune de la Gombe</Text>
        </View>

        <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
          <Text style={{ color: '#fff', fontFamily: 'Bold', fontSize: 14 }}>Numéro à contacter sur place</Text>
          <Text style={{ color: '#f3d1ad', fontFamily: 'Bold', fontSize: 12 }}>changer numéro</Text>
        </View>

        <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between',marginTop: 5 }}>
          <Text style={{ color: '#fff', fontFamily: 'Montserrat', fontSize: 14 }}>+243 825 937 168</Text>
        </View>

        <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginBottom: 20 }}>
          <Link href={'/payment'} style={{ borderRadius: 5, width: "100%", backgroundColor: '#efd1b15d', paddingVertical: 12 }} >
            <Text style={{ color: '#fff', fontFamily: 'Bold', fontSize: 14, textAlign: 'center' }}>Continuer</Text>
          </Link>
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
