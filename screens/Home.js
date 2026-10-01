import { View, Text, Button, StyleSheet } from "react-native";

export default function Home ({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Paw Center
      </Text>

      <Text style={styles.subtitulo}>
        Tudo para cuidar do seu melhor amigo!
      </Text>

      <Button
        title="Agende o banho"
        onPress={() => navigation.navigate("Banho")}
      />

      <View style={styles.espaco} />

      <Button
        title="Agende a tosa"
        onPress={() => navigation.navigate("Tosa")}
      />

      <View style={styles.espaco} />

      <Button
        title="Agende a consulta"
        onPress={() => navigation.navigate("Consulta")}
      />

      <View style={styles.espaco} />

      <Button
        title=" Compre nossos produtos!"
        onPress={() => navigation.navigate("Produtos")}
      />

      <View style={styles.espaco} />

      <Button
        title="Perfil"
        onPress={() => navigation.navigate("Perfil")}
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
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitulo: {
    textAlign: "center",
    marginBottom: 30,
  },

  espaco: {
    height: 15,
  },
});