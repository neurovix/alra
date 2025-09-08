import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    const logout = async () => {
        await supabase.auth.signOut();
        router.replace("/(tabs)");
    };

    return (
        <SafeAreaView>
            <Text>Bienvenido al Home</Text>
            <TouchableOpacity onPress={logout}>
                <Text>Cerrar Sesión</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
