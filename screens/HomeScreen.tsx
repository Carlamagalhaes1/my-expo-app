import { View, Text } from "react-native";
import CardButton from "../components/CardButton";

export default function HomeScreen({ onNavigate, userName = "Carla" }: any) {
  return (
    <View className="flex-1 bg-white px-6 pt-20">

      
      <View className="mb-10">
        <Text className="text-3xl font-bold text-gray-800">
          Olá, {userName} 👋
        </Text>
        <Text className="text-gray-500 text-lg">
          Bem-vinda de volta à clínica!
        </Text>
      </View>

  
      <CardButton
        title="Lista de Pacientes"
        icon="people-outline"
        onPress={() => onNavigate("patients")}
      />

      <CardButton
        title="Agenda de Consultas"
        icon="calendar-outline"
        onPress={() => onNavigate("agenda")}
      />
    </View>
  );
}
