import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import CheckBox from "expo-checkbox";
import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Add() {
  const idLote = "LT-1";

  const [date, setDate] = useState(new Date(1598051730000));

  const [checkedVenta, setCheckedVenta] = useState<boolean>(false);
  const [checkedMaquila, setCheckedMaquila] = useState<boolean>(false);

  const toggleVenta = () => setCheckedVenta(!checkedVenta);
  const toggleMaquila = () => setCheckedMaquila(!checkedMaquila);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <SafeAreaView className="bg-green-600">
      <Text className="text-3xl bg-green-600 py-5 text-white font-ibm-condensed-bold px-5">
        Nuevo lote
      </Text>
      <View className="bg-white h-full px-5 pt-5">
        <View className="flex flex-row justify-between">
          <Text className="text-2xl font-ibm-devanagari-bold">Detalles</Text>
          <Text className="text-2xl">ID: {idLote}</Text>
        </View>
        <Text className="mt-5 text-2xl font-ibm-devanagari-bold">Tipo</Text>
        <View className="border-2 border-black rounded-xl mt-2">
          <Picker>
            <Picker.Item label="PET" value={0} />
            <Picker.Item label="PP" value={0} />
            <Picker.Item label="HDPE" value={0} />
          </Picker>
        </View>
        <Text className="mt-3 pb-1 text-2xl font-ibm-devanagari-bold">
          Peso de entrada
        </Text>
        <View className="flex flex-row w-full pb-5">
          <TextInput
            className="border-2 w-8/12 border-black rounded-lg"
            placeholder="Ingresa el peso"
            keyboardType="number-pad"
          />
          <View className="w-1/12"></View>
          <View className="border-2 w-3/12 border-black rounded-lg">
            <Picker>
              <Picker.Item label="kg" value={0} />
              <Picker.Item label="ton" value={1} />
            </Picker>
          </View>
        </View>
        <Button color={"#16a34a"} onPress={showDatepicker} title="Fecha de recibido" />
        <Text className="mt-5 text-2xl font-ibm-devanagari-bold">Cliente</Text>
        <View className="border-2 border-black rounded-lg">
            <Picker>
              <Picker.Item label="Neurovix S. de R.L. de C.V." value={0} />
              <Picker.Item label="Coca Cola S.A. de C.V." value={1} />
            </Picker>
        </View>
        <Text className="mt-5 text-2xl font-ibm-devanagari-bold">Proceso</Text>
        <View className="flex flex-row w-full">
          <TouchableOpacity
            onPress={toggleVenta}
            className="flex flex-row justify-center w-1/2 items-center"
            activeOpacity={0.7}
          >
            <CheckBox
              value={checkedVenta}
              onValueChange={setCheckedVenta} // se mantiene sincronizado
            />
            <Text className="ml-2 text-xl font-ibm-condensed-regular">Venta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleMaquila}
            className="flex flex-row justify-center w-1/2 items-center"
            activeOpacity={0.7}
          >
            <CheckBox
              value={checkedMaquila}
              onValueChange={setCheckedMaquila} // se mantiene sincronizado
            />
            <Text className="ml-2 text-xl font-ibm-condensed-regular">Maquila</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
