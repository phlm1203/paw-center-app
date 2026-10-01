import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebase";

export default function Login ({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function entrar() {
    if (!email || !senha) {
      Alert.alert(
        "Atenção",
        "Preencha o e-mail e a senha."
      );

      return;
    }

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );

      navigation.replace("Home");

    } catch (error) {
      console.log(error);

      Alert.alert(
        "Erro",
        "E-mail ou senha incorretos."
      );
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        Paw Center
      </Text>

      <Text style={styles.titulo}>
        Bem-vindo!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button
        title="Entrar"
        onPress={entrar}
      />

      <View style={styles.espaco} />

      <Button
        title="Criar uma conta"
        onPress={() => navigation.navigate("Cadastro")}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  logo: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 14,
    marginBottom: 15,
    borderRadius: 8,
  },

  espaco: {
    height: 15,
  },
});