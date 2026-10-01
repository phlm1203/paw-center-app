import { useState } from "react";
import { View,Text,TextInput,Button,StyleSheet,Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../Config/firebase";


export default function Cadastro ({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar() {
    if (!nome || !email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    try {
      const resultado = await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

      const user = resultado.user;

      await setDoc(doc(db, "users", user.uid), {
        nome: nome,
        email: email,
        criadoEm: serverTimestamp(),
      });

      Alert.alert("Sucesso", "Conta criada!");

      navigation.replace("Home");

    } catch (error) {
      console.log(error);

      Alert.alert(
        "Erro",
        "Não foi possível criar a conta."
      );
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Criar conta 
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

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
        title="Criar conta"
        onPress={cadastrar}
      />

      <View style={styles.espaco} />

      <Button
        title="Já tenho uma conta"
        onPress={() => navigation.navigate("Login")}
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

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
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