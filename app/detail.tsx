import { useLocalSearchParams, useGlobalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { Link } from 'expo-router';
import { Feather as Icon, AntDesign as AIcon, MaterialIcons as MIcon } from "react-native-vector-icons";
import { Button } from 'react-native-paper';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';

export default function DetailScreen() {
  const { name, image, description, categorie, price, video } = useLocalSearchParams();
  const [qte, setQte] = useState(1)
  const [addFavorite, setAddFavorite] = useState(false)
  const player = useVideoPlayer(video, player => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  useEffect(() => {
    console.log(video)
  }, [])
  
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Link href={'/'} style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10 }}>
          <Icon name="chevron-left" size={24} color="#97969cfa" />
        </Link>

        {/* <TouchableOpacity style={{ padding: 5 }}>
          <Icon name="shopping-cart" size={18} color="#97969cfa" />
          <View style={{ backgroundColor: "#f3d1ad", borderRadius: 50, position: 'absolute', height: 15, paddingHorizontal: 5, right: -5, top: 1 }}>
            <Text style={{ fontFamily: 'Montserrat', color: "#1e1c2a", fontSize: 12 }}>3</Text>
          </View>
        </TouchableOpacity> */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 130, }}>
          <TouchableOpacity style={{ padding: 5, width: 50 }} onPress={()=> setAddFavorite(!addFavorite)}>
            {!addFavorite && <AIcon name="hearto" size={20} color="#97969cfa" />}
            {addFavorite && <AIcon name="heart" size={20} color="#f3d1ad" />}
          </TouchableOpacity>
          
          <TouchableOpacity style={{ padding: 5, width: 50 }}>
            <Icon name="share-2" size={18} color="#97969cfa" />
          </TouchableOpacity>

          <Link href={'/panier'} style={{ width: 50, padding: 5 }}>
            <View>
              <View style={{ height: 25 }}>
                <Icon name="shopping-cart" size={18} color="#97969cfa" />
              </View>
              <View style={{ backgroundColor: "#f3d1ad", borderRadius: 50, position: 'absolute', height: 15, paddingHorizontal: 5, right: -10, top: -6 }}>
                <Text style={{ fontFamily: 'Montserrat', color: "#1e1c2a", fontSize: 12 }}>3</Text>
              </View>
            </View>
          </Link>
        </View>
      </View>

      {/* Section des événements en direct */}
      <ScrollView style={styles.eventScroll} contentContainerStyle={styles.eventContainer}>
        <View style={styles.eventCard}>
          {!video  && <Image source={image} style={styles.eventImage} />}
          {video && <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />}
          <View style={styles.eventInfo}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 5, height: 30, borderRadius: 10, marginVertical: 5 }}>
              <View style={{ justifyContent: 'center', backgroundColor: "#efd1b15d", paddingHorizontal: 5, height: 30, borderRadius: 10, }}>
                <Text style={styles.eventTitle}>{categorie}</Text>
              </View>
              <Text style={styles.eventTitle}>{name}</Text>
            </View>
            <Text style={styles.eventDescription}>{description}</Text>
          </View>

          <View style={{ ...styles.eventInfo, marginTop: 10, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ ...styles.eventTitle, color: "#f3d1ad", fontSize: 24, paddingVertical: 5 }}>$ {price}</Text>
            <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center", backgroundColor: "#efd1b15d", paddingHorizontal: 5, height: 30, borderRadius: 10 }}>
              <MIcon name="star" size={18} color="#f3d1ad" style={{ paddingRight: 5, }} />
              <Text style={{ ...styles.eventDescription, fontSize: 12, color:"#f3d1ad" }}>5.0</Text>
            </View>
          </View>

          <View style={{ ...styles.eventInfo, marginTop: 10, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent' }}>
            <TouchableOpacity onPress={()=> setQte(qte-1)} style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center", borderWidth: 1, borderColor: "#433d5bfa", paddingHorizontal: 5, height: 25, width: 25, borderRadius: 10 }}>
              <Text style={{ ...styles.eventDescription, fontSize: 18, color:"#f3d1ad" }}>-</Text>
            </TouchableOpacity>
            <Text style={{ color: "#f3d1ad", fontSize: 18, fontFamily: "Montserrat", paddingVertical: 5 }}> {qte} </Text>
            <TouchableOpacity onPress={()=> setQte(qte+1)} style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center", borderWidth: 1, borderColor: "#433d5bfa", paddingHorizontal: 5, height: 25, width: 25, borderRadius: 10 }}>
              <Text style={{ ...styles.eventDescription, fontSize: 18, color:"#f3d1ad" }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 35, marginBottom: 15 }}>
          <Button mode="contained" onPress={() => { }} icon={() => <MIcon name="shopping-cart" size={18} color="#f3d1ad" style={{ paddingRight: 5, }} />} style={{ backgroundColor: '#efd1b15d', borderRadius: 5, width: "100%" }} labelStyle={{ fontFamily: 'Bold' }}>
            Ajouter
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1c2a',
    padding: 20,
    paddingTop: 40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  eventScroll: {
    marginTop: 10,
  },
  eventContainer: {
    paddingBottom: 20,
  },
  eventCard: {
    backgroundColor: 'transparent',
    marginBottom: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  eventImage: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 10
  },
  eventInfo: {
    padding: 10,
    backgroundColor: '#433d5bfa',
    borderRadius: 15
  },
  eventTitle: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Bold',
  },
  eventDescription: {
    fontSize: 18,
    color: '#ccc',
    fontFamily: 'Montserrat',
    textAlign: "justify",
    lineHeight: 20
  },
  video: {
    width: "100%",
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
