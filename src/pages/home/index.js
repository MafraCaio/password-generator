import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import { ModalPassword } from '../../components/modal'

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$-';  

export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword() {
    let password = "";

    for(let i = 0, n = charset.length; i < size; i ++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo}/>
    
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider 
          style={{ height: 50 }} 
          minimumValue={6} 
          maximumValue={30} 
          maximumTrackTintColor='#FF0000' 
          minimumTrackTintColor='#000' 
          thumbTintColor='#392de9' 
          value={size}
          onValueChange={ (value) => setSize(value.toFixed(0)) }
        />

      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText} >Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false)} />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    marginBottom: 60
  }, 

  title: {
    fontSize: 35,
    fontWeight: "bold"
  },

  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 5
  },

  button: {
    width: "80%",
    backgroundColor: "#392de9", 
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 50,
    marginBottom: 18
  },

  buttonText: {
    color: "#FFF",
    fontSize: 20
  }
});
