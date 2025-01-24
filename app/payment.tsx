import React,{ useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import { List, Divider, Checkbox, Avatar, RadioButton, Button, TextInput } from 'react-native-paper';
import { Link } from 'expo-router';
import { Feather as Icon, FontAwesome6 as FIcon6, MaterialIcons as IOcon } from "react-native-vector-icons";

const CenteredCheckbox = () => (
  <View style={styles.centered}>
    <Checkbox status="checked" />
  </View>
);

export default function Cart () {
  const [qte, setQte] = useState(1)
  const [checkedMethod, setCheckedMethod] = useState("Mobile");
  const [codeCard, setCodeCard] = useState("");
  const [method, setMethod] = useState([
    {
      "id": 1,
      "name": "Mobile",
    },
    {
      "id": 2,
      "name": "Card",
    },
  ])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Link href={'/panier'} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="chevron-left" size={24} color="#97969cfa" />
          <View style={{ paddingLeft: 15 }}>
            <Text style={{ fontFamily: 'Bold', color: "#97969cfa", fontSize: 16 }}>Moyen de paiement</Text>
          </View>
        </Link>

        {/* <TouchableOpacity style={{ padding: 5 }}>
          <Icon name="shopping-cart" size={18} color="#97969cfa" />
          <View style={{ backgroundColor: "#f3d1ad", borderRadius: 50, position: 'absolute', height: 15, paddingHorizontal: 5, right: -5, top: 1 }}>
            <Text style={{ fontFamily: 'Montserrat', color: "#1e1c2a", fontSize: 12 }}>3</Text>
          </View>
        </TouchableOpacity> */}
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
        <RadioButton.Item
          label={method[0].name}
          style={{ width: 120 }}
          labelStyle={{ color: "#fff" }}
          status={checkedMethod == method[0].name ? 'checked' : 'unchecked'}
          onPress={() => setCheckedMethod(method[0].name)}
          value={method[0].name}
          position="leading"
        />
        <RadioButton.Item
          label={method[1].name}
        style={{ width: 120 }}
        labelStyle={{ color: "#fff" }}
          status={checkedMethod == method[1].name ? 'checked' : 'unchecked'}
          onPress={() => setCheckedMethod(method[1].name)}
          value={method[1].name}
          position="leading"
        />
      </View>

      <Divider style={{ marginVertical: 10, marginHorizontal: 30 }} />

      <View>

        <View style={{ marginHorizontal: '5%', flexDirection: 'row', }}>
          {checkedMethod === "Mobile" && <Text style={{ color: '#fff', fontFamily: 'Montserrat', fontSize: 14, textAlign: "justify" }}>Valider votre numéro pour finaliser le processus de paiement.</Text>}
          {checkedMethod === "Card" && <Text style={{ color: '#fff', fontFamily: 'Montserrat', fontSize: 14, textAlign: "justify" }}>Cliquez sur continuer pour finaliser le processus de paiement.</Text>}
        </View>
        
        {checkedMethod === "Mobile" && <View style={{ paddingHorizontal: '5%' }}>
          <TextInput
            mode="outlined"
            style={{ ...styles.inputContainerStyle, backgroundColor: 'transparent' }}
            outlineStyle={{ borderColor: "#433d5bfa", borderWidth: 1, }}
            contentStyle={{ fontFamily: "Montserrat", fontSize: 12, color: "#97969cfa" }}
            placeholder="243892733908"
            value={codeCard}
            keyboardType='number-pad'
            onChangeText={setCodeCard}
            left={
              <TextInput.Icon
                icon="phone"
              // color={outlineLeftIcon}
              />
            }
            maxLength={12}
            right={<TextInput.Affix text={`${codeCard.length}/12`} />}
          />
        </View>}
        
        <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, paddingVertical: 10, borderRadius: 10, backgroundColor: "#433d5bfa" }}>
          <Text style={{ color: '#fff', fontFamily: 'Bold', fontSize: 14 }}>Montant à payer</Text>
          <Text style={{ color: '#f3d1ad', fontFamily: 'Bold', fontSize: 12 }}>$ 451.8</Text>
        </View>

        <View style={{ marginHorizontal: '5%', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 35, marginBottom: 15 }}>
          <Button mode="contained" onPress={() => { }} style={{ backgroundColor: '#efd1b15d', borderRadius: 5, width: "100%" }} labelStyle={{ fontFamily: 'Bold' }}>
            {checkedMethod === "Card" ? 'Continuer': 'Valider'}
          </Button>
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
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    // backgroundColor: '#2e2c3696',
    height: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  inputContainerStyle: {
    marginVertical: 8,
    backgroundColor: 'transparent',
    width: '100%',
  },
  inputContentStyle: {
    paddingLeft: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
