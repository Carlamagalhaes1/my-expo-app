import { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Header from "../components/Header"; 

export default function PatientsScreen({ onBack, onSelectPatient }: any) {
  const [search, setSearch] = useState("");

  const patients = [
    {
      id: "1",
      name: "Ana Beatriz",
      age: 29,
      category: "Consulta Geral",
      avatar: "https://i.pravatar.cc/150?img=5",
      history:
        "Paciente realiza acompanhamento desde 2020 com queixas de dor de cabeça e ansiedade.",
      notes: "Recomendada continuidade no acompanhamento psicológico.",
    },
    {
      id: "2",
      name: "João Pedro",
      age: 35,
      category: "Retorno",
      avatar: "https://i.pravatar.cc/150?img=12",
      history: "Sem histórico grave. Acompanhamento pós-operatório simples.",
      notes: "Próximo retorno em 30 dias.",
    },
    {
      id: "3",
      name: "Carla Mendes",
      age: 22,
      category: "Pediatria",
      avatar: "https://i.pravatar.cc/150?img=32",
      history:
        "Paciente desde a infância. Histórico de alergias respiratórias.",
      notes: "Avaliar necessidade de novo teste alérgico.",
    },
    {
      id: "4",
      name: "Lucas Silva",
      age: 40,
      category: "Clínico Geral",
      avatar: "https://i.pravatar.cc/150?img=52",
      history: "Paciente com histórico de hipertensão controlada.",
      notes: "Monitorar pressão semanalmente.",
    },
    {
      id: "5",
      name: "Bianca Rocha",
      age: 19,
      category: "Nutrição",
      avatar: "https://i.pravatar.cc/150?img=26",
      history: "Acompanhamento nutricional desde 2023.",
      notes: "Reavaliar plano alimentar dia 12.",
    },
    {
      id: "6",
      name: "Mariana Costa",
      age: 31,
      category: "Psicologia",
      avatar: "https://i.pravatar.cc/150?img=48",
      history: "Acompanhamento psicológico desde 2022.",
      notes: "Retorno agendado para próxima semana.",
    },
  ];

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View className="flex-1 bg-[#c8f1f7] px-5 pt-12">

      <Header
        title="Lista de Pacientes"
        icon="people-sharp"
        onBack={onBack}
      />

      {/* 🔍 Barra de busca */}
      <View className="flex-row items-center bg-white rounded-2xl px-4 mb-6 shadow-sm border border-gray-200">
        <Ionicons name="search-outline" size={22} color="#4b5563" />
        <TextInput
          className="flex-1 ml-3 py-3 text-gray-700 text-base"
          placeholder="Buscar paciente..."
          placeholderTextColor="#9ca3af"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* 📜 Lista de pacientes */}
      <FlatList
        data={filtered}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelectPatient(item)}
            className="flex-row items-center bg-white p-4 rounded-2xl mb-4 shadow-sm border border-gray-200"
          >
            <Image
              source={{ uri: item.avatar }}
              className="w-16 h-16 rounded-full mr-4"
            />

            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-800">
                {item.name}
              </Text>
              <Text className="text-gray-500">{item.category}</Text>
            </View>

            <Ionicons name="chevron-forward" size={22} color="#999" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
