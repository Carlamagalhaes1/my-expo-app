import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default function PatientsScreen({ onBack, onSelectPatient }: any) {
  const [search, setSearch] = useState("");

  const patients = [
    {
      id: "1",
      name: "Ana Beatriz",
      age: 29,
      category: "Consulta Geral",
      avatar: "https://i.pravatar.cc/150?img=1",
      history:
        "Paciente realiza acompanhamento desde 2020 com queixas de dor de cabeça e ansiedade.",
      notes: "Recomendada continuidade no acompanhamento psicológico.",
    },
    {
      id: "2",
      name: "João Pedro",
      age: 35,
      category: "Retorno",
      avatar: "https://i.pravatar.cc/150?img=2",
      history:
        "Sem histórico grave. Acompanhamento pós-operatório simples.",
      notes: "Próximo retorno em 30 dias.",
    },
    {
      id: "3",
      name: "Carla Mendes",
      age: 22,
      category: "Pediatria",
      avatar: "https://i.pravatar.cc/150?img=3",
      history:
        "Paciente desde a infância. Histórico de alergias respiratórias.",
      notes: "Avaliar necessidade de novo teste alérgico.",
    },
  ];

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View className="flex-1 bg-white p-5">
      
      <TouchableOpacity onPress={onBack} className="mb-4">
        <Text className="text-blue-600 mt-8 font-semibold text-lg">← Voltar</Text>
      </TouchableOpacity>

      <TextInput
        className="w-full px-4 py-3 bg-gray-100 rounded-xl mb-4 border border-gray-300"
        placeholder="Buscar paciente..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelectPatient(item)}   // 👈 AGORA FUNCIONA!
            className="flex-row items-center bg-gray-100 p-4 rounded-xl mb-3"
          >
            <Image
              source={{ uri: item.avatar }}
              className="w-14 h-14 rounded-full mr-4"
            />

            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-800">
                {item.name}
              </Text>
              <Text className="text-gray-500 text-sm">{item.category}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
