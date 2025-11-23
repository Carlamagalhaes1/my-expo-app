import BackButton from "components/BackButton";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

export default function PatientDetailsScreen({ patient, onBack }: any) {
  if (!patient) return null;

  return (
    <ScrollView className="flex-1 bg-white p-6">

      <TouchableOpacity onPress={onBack} className="mb-4">
        <BackButton onPress={onBack} />
      </TouchableOpacity>

      <View className="items-center mb-6">
        <Image
          source={{ uri: patient.avatar }}
          className="w-32 h-32 rounded-full"
        />
      </View>

      <Text className="text-3xl font-bold text-gray-800 mb-1 text-center">
        {patient.name}
      </Text>

      <Text className="text-gray-500 text-lg text-center mb-6">
        {patient.age} anos
      </Text>

      <View className="mb-6">
        <Text className="text-xl font-semibold text-gray-800 mb-2">
          Histórico Clínico
        </Text>
        <Text className="text-gray-600 leading-relaxed">
          {patient.history}
        </Text>
      </View>

      <View className="mb-10">
        <Text className="text-xl font-semibold text-gray-800 mb-2">
          Observações
        </Text>
        <Text className="text-gray-600 leading-relaxed">
          {patient.notes}
        </Text>
      </View>
    </ScrollView>
  );
}
