import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SectionCard from "../components/SectionCard";
import { useAppStore } from "../store/useAppStore";

export default function HomeScreen() {
  const navigate = useAppStore((state) => state.navigate);  
  const userName = "Carla"; 

  return (
    <View className="flex-1 bg-[#c8f1f7] px-5 pt-20">
      
      <View className="flex-row items-center mb-10">
        <View className="w-12 h-12 bg-white rounded-full shadow items-center justify-center mr-3">
          <Ionicons name="hand-right-outline" size={28} color="#0284c7" />
        </View>

        <View>
          <Text className="text-2xl font-bold text-slate-700">
            Olá, {userName}!
          </Text>
          <Text className="text-gray-600 text-sm">
            Bem-vinda de volta à clínica!
          </Text>
        </View>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-4 ml-1">
        Atalhos rápidos
      </Text>

      <SectionCard 
        title="Lista de Pacientes"
        subtitle="Veja todos os pacientes cadastrados"
        icon="people-outline"
        onPress={() => navigate("patients")}
      />

      <SectionCard
        title="Agenda de Consultas"
        subtitle="Acompanhe os horários do dia"
        icon="calendar-outline"
        onPress={() => navigate("agenda")}
      />
    </View>
  );
}
