import icons from "@/constants/icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const router = useRouter();

  const [role, setRole] = useState("operador");

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="pt-4 pl-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={icons.backArrow} className="w-10 h-10" />
        </TouchableOpacity>
      </View>
      <View className="px-5 flex-1 justify-center">
        <View className="w-full flex items-center">
          <Image
            source={require("@/assets/images/logo_alra.png")}
            resizeMode="contain"
            className="w-40 h-40"
          />
          <Text className="font-ibm-condensed-bold text-4xl pt-10">
            Inicio de sesion
          </Text>
        </View>
        
        <View className="space-y-4">
          <View className="pb-3 pt-20">
            <Text className="text-xl font-ibm-condensed-bold mb-2">Email</Text>
            <View className="bg-white flex flex-row items-center border border-black rounded-2xl px-3 py-1">
              <Image
                source={icons.email}
                resizeMode="contain"
                className="w-6 h-6 mr-3"
              />
              <TextInput
                keyboardType="email-address"
                className="font-ibm-devanagari-regular flex-1"
                placeholder="Ingresa tu email"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>
          
          <View className="pb-3">
            <Text className="text-xl font-ibm-condensed-bold mb-2">
              Contraseña
            </Text>
            <View className="bg-white flex flex-row items-center border border-black rounded-2xl px-3 py-1">
              <Image
                source={icons.password}
                resizeMode="contain"
                className="w-6 h-6 mr-3"
              />
              <TextInput
                secureTextEntry={true}
                className="font-ibm-devanagari-regular flex-1"
                placeholder="Ingresa tu contraseña"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>
          
          <View className="pt-2">
            <TouchableOpacity 
              className="bg-green-700 rounded-2xl py-4"
              onPress={() => {
                // Aquí puedes agregar la lógica de registro
                console.log('Registrando usuario con rol:', role);
              }}
            >
              <Text className="text-white text-center text-2xl font-ibm-condensed-semibold">
                Iniciar sesion
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}