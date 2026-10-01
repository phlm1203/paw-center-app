import { View, Text, Button, StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../Config/firebase";


export default function Perfil () {

  const usuario = auth.currentUser;

  async function sair() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
         Meu Perfil
      </Text>

      <Text style={styles.email}>
        {usuario?.email}
      </Text>

      <Button
        title="Sair da conta"
        onPress={sair}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },

  email: {
    marginBottom: 30,
  },
});