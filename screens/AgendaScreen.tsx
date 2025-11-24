import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { addDays, subDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";

import Header from "../components/Header";
import AppointmentCard from "../components/AppointmentCard";

type Appointment = {
  id: string;
  patientName: string;
  specialty: string;
  time: string;
  date: string;
  avatar?: string;
};

const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: "a1",
    patientName: "Ana Beatriz",
    specialty: "Clínica Geral",
    time: "09:00",
    date: format(new Date(), "yyyy-MM-dd"),
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "a2",
    patientName: "João Pedro",
    specialty: "Cardiologia",
    time: "10:30",
    date: format(new Date(), "yyyy-MM-dd"),
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "a3",
    patientName: "Carla Mendes",
    specialty: "Pediatria",
    time: "14:00",
    date: format(addDays(new Date(), 1), "yyyy-MM-dd"),
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function AgendaScreen({ onBack }: { onBack: () => void }) {
  const [viewMode, setViewMode] = useState<"day" | "week">("day");
  const [currentDate, setCurrentDate] = useState(new Date());

  const weekDays = useMemo(
    () => Array.from({ length: 7 }, (_, i) => addDays(currentDate, i - 3)),
    [currentDate]
  );

  const appointmentsForDate = (date: Date) => {
    const key = format(date, "yyyy-MM-dd");
    return MOCK_APPOINTMENTS
      .filter((a) => a.date === key)
      .sort((a, b) => a.time.localeCompare(b.time));
  };

  const isSelected = (d: Date) =>
    format(d, "yyyy-MM-dd") === format(currentDate, "yyyy-MM-dd");

  return (
    <View className="flex-1 bg-[#c8f1f7] px-5 pt-12">
      <Header title="Agenda de Consultas" icon="calendar-outline" onBack={onBack} />
      <Text className="text-md font-bold text-slate-600 mt-2  "> Pesquisar por: </Text>
      <View className="flex-row my-1 gap-2">
        {["day", "week"].map((mode) => (
          <TouchableOpacity
            key={mode}
            onPress={() => setViewMode(mode as any)}
            className={`px-4 py-2 rounded-xl ${
              viewMode === mode ? "bg-blue-500" : "bg-white border border-gray-300"
            }`}
          >
            <Text
              className={`font-semibold ${
                viewMode === mode ? "text-white" : "text-gray-700"
              }`}
            >
              {mode === "day" ? "Dia" : "Semana"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {viewMode === "day" && (
        <View className="flex-row items-center justify-between mb-4 mt-3">
          <TouchableOpacity
            className="px-4 py-2 bg-white rounded-xl border border-gray-300"
            onPress={() => setCurrentDate(subDays(currentDate, 1))}
          >
            <Text className="text-gray-700 font-semibold">Anterior</Text>
          </TouchableOpacity>

          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">
              {format(currentDate, "EEEE", { locale: ptBR })}
            </Text>
            <Text className="text-gray-600">{format(currentDate, "dd/MM")}</Text>
          </View>

          <TouchableOpacity
            className="px-4 py-2 bg-white rounded-xl border border-gray-300"
            onPress={() => setCurrentDate(addDays(currentDate, 1))}
          >
            <Text className="text-gray-700 font-semibold">Próximo</Text>
          </TouchableOpacity>
        </View>
      )}

      {viewMode === "week" && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
          <View className="flex-row gap-3">
            {weekDays.map((d) => (
              <TouchableOpacity
                key={String(d)}
                onPress={() => setCurrentDate(d)}
                className={`px-4 py-2 rounded-xl ${
                  isSelected(d)
                    ? "bg-blue-600"
                    : "bg-white border border-gray-300"
                }`}
              >
                <Text className={`text-center ${isSelected(d) ? "text-white" : "text-gray-700"}`}>
                  {format(d, "dd/MM")}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      <Text className="text-lg font-semibold mb-2 ml-1">Consultas de hoje</Text>

      <FlatList
        data={appointmentsForDate(currentDate)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="text-center text-gray-600 mt-8">
            Nenhuma consulta para este dia.
          </Text>
        }
        renderItem={({ item }) => (
          <AppointmentCard appointment={item} onPress={() => {}} />
        )}
      />
    </View>
  );
}
