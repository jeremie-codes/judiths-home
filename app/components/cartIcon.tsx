import React, {useState} from 'react';
import { Link } from 'expo-router';
import { View, Text,} from 'react-native';
import { Feather as Icon, FontAwesome6 as FIcon6, MaterialIcons as IOcon } from "react-native-vector-icons";

export default function CartIcon() {

  return (
    <Link href={'/panier'} style={{ width: 50, padding: 5 }}>
      <View>
        <View style={{ height: 25 }}>
          <Icon name="shopping-cart" size={18} color="#97969cfa" />
        </View>
        <View style={{ backgroundColor: "#edb579ce", borderRadius: 50, position: 'absolute', height: 15, paddingHorizontal: 5, right: -10, top: -6 }}>
          <Text style={{ fontFamily: 'Montserrat', color: "#1e1c2a", fontSize: 12 }}>3</Text>
        </View>
      </View>
    </Link>
  );

}