import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Config/firebase";

{/* Telas */}
import Cadastro from "../screens/Cadastro";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Perfil from "../screens/Perfil";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUsuario(user);
        setCarregando(false);
      }
    );

    return unsubscribe;

  }, []);

  if (carregando) {
    return null;
  }

  return (
    <NavigationContainer>

      <Stack.Navigator>

        {!usuario ? (

          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Cadastro"
              component={CadastroScreen}
              options={{
                title: "Criar conta",
              }}
            />
          </>

        ) : (

          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Pet Shop",
              }}
            />

            <Stack.Screen
              name="Pets"
              component={PetsScreen}
            />

            <Stack.Screen
              name="Produtos"
              component={ProdutosScreen}
            />

            <Stack.Screen
              name="Agendamentos"
              component={AgendamentosScreen}
            />

            <Stack.Screen
              name="Perfil"
              component={PerfilScreen}
            />
          </>

        )}

      </Stack.Navigator>

    </NavigationContainer>
  );
}