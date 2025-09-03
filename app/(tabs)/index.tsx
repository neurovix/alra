import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-[#f6f6f6] h-full">
      <View className="w-full pt-40 flex items-center h-2/3">
        <Image
          source={require("@/assets/images/logo_alra.png")}
          className="w-64 h-64"
          resizeMode="contain"
        />
        <Text className="font-roboto-semibold text-5xl mt-5">ALRA</Text>
        <Text className="font-roboto-bold text-3xl text-green-700">PLASTIC RECICLING</Text>
      </View>
      <View className="h-1/3 pt-40 flex items-center px-7">
        <TouchableOpacity className="bg-green-700 w-full flex items-center py-5 rounded-xl">
          <Text className="text-white font-roboto-bold text-3xl">Registrarme</Text>
        </TouchableOpacity>
        <View className="flex flex-row w-full justify-evenly pt-3">
          <Text className="text-xl">¿Ya tienes una cuenta?</Text>
          <TouchableOpacity>
            <Text className="text-green-700 underline text-xl">Iniciar sesion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
