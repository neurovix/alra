import icons from "@/constants/icons";
import { Picker } from "@react-native-picker/picker";
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
            className="w-28 h-28"
          />
          <Text className="font-ibm-devanagari-bold text-4xl mt-4">
            REGISTRO
          </Text>
        </View>
        
        <View className="space-y-4">
          <View className="pb-3">
            <Text className="text-xl font-ibm-condensed-bold mb-2">Nombre</Text>
            <View className="bg-white flex flex-row items-center border border-black rounded-2xl px-3 py-1">
              <Image
                source={icons.user}
                resizeMode="contain"
                className="w-6 h-6 mr-3"
              />
              <TextInput
                className="font-ibm-devanagari-regular flex-1"
                placeholder="Ingresa tu nombre"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>
          
          <View className="pb-3">
            <Text className="text-xl font-ibm-condensed-bold mb-2">
              Apellidos
            </Text>
            <View className="bg-white flex flex-row items-center border border-black rounded-2xl px-3 py-1">
              <Image
                source={icons.user}
                resizeMode="contain"
                className="w-6 h-6 mr-3"
              />
              <TextInput
                keyboardType="default"
                className="font-ibm-devanagari-regular flex-1"
                placeholder="Ingresa tu apellido"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>
          
          <View className="pb-3">
            <Text className="text-xl font-ibm-condensed-bold mb-2">Rol</Text>
            <View className="bg-white flex flex-row items-center border border-black rounded-2xl px-3">
              <Image
                source={icons.role}
                resizeMode="contain"
                className="w-6 h-6 mr-3"
              />
              <View className="flex-1">
                <Picker
                  selectedValue={role}
                  onValueChange={(itemValue) => setRole(itemValue)}
                  style={{
                    height: 60,
                    color: '#000000',
                  }}
                  mode="dropdown"
                >
                  <Picker.Item label="Operador" value="operador" />
                  <Picker.Item label="Administrador" value="administrador" />
                </Picker>
              </View>
            </View>
          </View>
          
          <View className="pb-3">
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
              className="bg-blue-600 rounded-3xl py-4"
              onPress={() => {
                // Aquí puedes agregar la lógica de registro
                console.log('Registrando usuario con rol:', role);
              }}
            >
              <Text className="text-white text-center text-xl font-ibm-devanagari-semibold">
                REGISTRARSE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}