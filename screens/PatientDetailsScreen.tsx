import BackButton from "components/BackButton";
import { View, Text, Image, ScrollView} from "react-native";

export default function PatientDetailsScreen({ patient, onBack }: any) {
  if (!patient) return null;

  return (
    <ScrollView className="flex-1 bg-[#c8f1f7] p-6 ">

      <View className="mb-4">
        <BackButton  onPress={onBack}  />
      </View>

      <View className="items-center mb-6">
        <View className="w-36 h-36 rounded-full bg-white shadow-md items-center justify-center">
          <Image
            source={{ uri: patient.avatar }}
            className="w-32 h-32 rounded-full"
          />
        </View>

        <Text className="text-3xl font-bold text-slate-800 mt-4">
          {patient.name}
        </Text>

        <Text className="text-slate-500 text-lg">{patient.age} anos</Text>
      </View>

      {/* Histórico Clínico */}
      <View className="bg-white p-5  rounded-2xl shadow mb-5">
        <Text className="text-xl font-bold text-slate-800 mb-3">
          Histórico Clínico:
        </Text>

        <Text className="text-slate-600 leading-relaxed">
          {patient.history}
        </Text>
      </View>

      {/* Observações */}
      <View className="bg-white p-5 rounded-2xl shadow mb-10">
        <Text className="text-xl font-bold text-slate-800 mb-3">
          Observações:
        </Text>

        <Text className="text-slate-600 leading-relaxed">
          {patient.notes}
        </Text>
      </View>
    </ScrollView>
  );
}
