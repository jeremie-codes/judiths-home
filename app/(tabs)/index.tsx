import React, {useState} from 'react';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList, Dimensions } from 'react-native';
import { Feather as Icon, FontAwesome6 as FIcon6, MaterialIcons as IOcon } from "react-native-vector-icons";
const { width, height } = Dimensions.get('window');
import Header from '../components/header';
import RenderItem from '../components/RenderItem';
import RenderEvent from '../components/RenderEvent';
import RenderBanner from '../components/RenderBanner';

export default function Index() {
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

  const [cadeaux, setCadeaux] = useState([
    {
      "id": 1,
      "image": require('@/assets/cad3.jpg'),
      "name": "Cadeaux Romantica",
      "price": 100,
      "categorie": "Cadeaux",
      "description": "Riche en fibres et antioxydants, elle favorise une bonne digestion et réduit le risque de maladies chroniques."
    },
    {
      "id": 2,
      "image": require('@/assets/b2.jpeg'),
      "name": "Cadeaux Sugar",
      "price": 200,
      "categorie": "Cadeaux",
      "description": "Excellente source de potassium, elle aide à maintenir une bonne santé cardiaque et musculaire."
    },
    {
      "id": 3,
      "image": require('@/assets/cad2.jpg'),
      "name": "Cadeaux Amour Fou",
      "price": 150,
      "categorie": "Cadeaux",
      "description": "Riche en vitamine C et antioxydants, elle améliore la santé de la peau et renforce le système immunitaire."
    },

  ])

  const [searchText, setSearchText] = useState('');

  // Définition des catégories
  const [evenements, setEvenements] = useState([
    {
      "id": 1,
      "image": require('@/assets/b1.jpeg'),
      "name": "Surprise d'anniversaire",
      "categorie":"Évenement",
      "price": 75,
      "video": 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      "description": "Source de vitamine C, elle booste le système immunitaire et favorise une peau saine."
    },
    {
      "id": 2,
      "image": require('@/assets/E1.jpeg'),
      "name": "Décoration de l'espace de mariage",
      "categorie": "Évenement",
      "price": 150,
      "video": 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      "description": "Riche en antioxydants et en énergie, il contribue à une bonne santé cardiovasculaire."
    },
    {
      "id": 3,
      "image": require('@/assets/b3.jpeg'),
      "name": "Démande en mariage",
      "categorie":"Évenement",
      "price": 50,
      "video": 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      "description": "Riche en vitamine C et antioxydants, elle améliore la santé de la peau et renforce le système immunitaire."
  }]);
  // Définition des catégories
  const [banners, setBanners] = useState([
    {
      "id": 1,
      "image": require('@/assets/cad2.jpg'),
      "name": "Surprise d'anniversaire",
      "action": "Découvrez",
      "description": "Source de vitamine C, elle booste le système immunitaire et favorise une peau saine."
    },
    {
      "id": 2,
      "image": require('@/assets/ban.jpeg'),
      "name": "Décoration de l'espace de mariage",
      "action": "Envoyez",
      "description": "Riche en antioxydants et en énergie, il contribue à une bonne santé cardiovasculaire."
    },
    {
      "id": 3,
      "image": require('@/assets/cad3.jpg'),
      "name": "Démande en mariage",
      "action": "Créez un évenement",
      "description": "Riche en vitamine C et antioxydants, elle améliore la santé de la peau et renforce le système immunitaire."
  }]);

  return (
    <View style={styles.container}>
      {/* Entête fixe */}
      <Header/>

      {/* Contenu principal */}
      <FlatList showsVerticalScrollIndicator={false} style={{ ...styles.movieScroll, width: width }}
        data={['']}
        renderItem={({ item, index }) => (
          searchText.length == 0 ? (
            <View style={{ width: width }}>
              {/* Section des catégories */}
              <FlatList horizontal showsHorizontalScrollIndicator={false} style={{ width: (width*90) / 100, marginHorizontal: '5%' }}
                data={banners}
                renderItem={({ item, index }) => <RenderBanner item={item} index={index} />}
              />

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, paddingHorizontal: "5%" }}>
                <Text style={{ color: "#fff", fontSize: 14, marginTop: 10, fontFamily: 'Bold' }}>Bouquets</Text>
                <TouchableOpacity style={{ padding: 5 }}>
                  <Icon name="chevron-down" size={18} color="#97969cfa" />
                </TouchableOpacity>
              </View>

              {/* Section films */}
              <FlatList horizontal showsHorizontalScrollIndicator={false}
                data={movies} style={{ paddingHorizontal: "5%", width: width }}
                renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
              />

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, paddingHorizontal: "5%" }}>
                <Text style={{ color: "#fff", fontSize: 14, marginTop: 10, fontFamily: 'Bold' }}>Cadeaux</Text>
                <TouchableOpacity style={{ padding: 5 }}>
                  <Icon name="chevron-down" size={18} color="#97969cfa" />
                </TouchableOpacity>
              </View>

              <FlatList horizontal showsHorizontalScrollIndicator={false}
                data={cadeaux} style={{ paddingHorizontal: "5%", width: width }}
                renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
              />

              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, paddingHorizontal: "5%" }}>
                <Text style={{ color: "#fff", fontSize: 14, marginTop: 10, fontFamily: 'Bold' }}>Évenenements</Text>
                <TouchableOpacity style={{ padding: 5 }}>
                  <Icon name="chevron-down" size={18} color="#97969cfa" />
                </TouchableOpacity>
              </View>

                <FlatList horizontal showsHorizontalScrollIndicator={false} style={{ width: (width * 90) / 100, marginBottom: 50, marginHorizontal: '5%' }}
                  data={evenements}
                  renderItem={({ item, index }) => <RenderEvent item={item} index={index} video />}
                />


            </View>
          ) : (
            <View style={styles.content}></View>
          )
        )} />
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1c2a',
    paddingTop: 35,
    // paddingBottom: 15
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#212429',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  hero: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  movieScroll: {
    marginTop: 0,
  },
  movieCard: {
    // width: '100%',
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
  logo: {
    width: 85,
    height: 40,
  },
  liveLabel: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    zIndex: 1,
  },
  liveText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Montserrat',
  },
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
