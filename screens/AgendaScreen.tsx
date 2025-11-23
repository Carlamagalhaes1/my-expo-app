import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { addDays, format, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";

import AppointmentCard from "../components/AppointmentCard";
import BackButton from "../components/BackButton";
import { MaterialIcons } from "@expo/vector-icons";

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
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => addDays(currentDate, i - 3));
  }, [currentDate]);

  const appointmentsForDate = (date: Date) => {
    const key = format(date, "yyyy-MM-dd");
    return MOCK_APPOINTMENTS.filter((a) => a.date === key).sort((A, B) =>
      A.time.localeCompare(B.time)
    );
  };


  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.substring(1);


  return (
    <View className="flex-1 bg-[#c8f1f7] px-5 pt-12">

      <BackButton onPress={onBack} />

      <View className="flex-row items-center gap-2">
        <View className="w-12 h-12 bg-white rounded-full shadow items-center justify-center">
          <MaterialIcons name="event-note" size={28} color="#0ea5e9" />
        </View>

        <Text className="text-2xl font-bold text-slate-700">
          Agenda de Consultas
        </Text>
      </View>

      <Text className="text-md font-bold text-slate-600 mt-8 mb-2 ml-1">
        Pesquisar por:
      </Text>

      <View className="flex-row gap-1 items-center mb-2">
        <TouchableOpacity
          onPress={() => setViewMode("day")}
          className={`px-4 py-2 rounded-xl ${
            viewMode === "day"
              ? "bg-blue-600"
              : "bg-white border border-gray-300"
          }`}
        >
          <Text
            className={`font-semibold ${
              viewMode === "day" ? "text-white" : "text-gray-700"
            }`}
          >
            Dia
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setViewMode("week")}
          className={`px-4 py-2 rounded-xl ${
            viewMode === "week"
              ? "bg-blue-600"
              : "bg-white border border-gray-300"
          }`}
        >
          <Text
            className={`font-semibold ${
              viewMode === "week" ? "text-white" : "text-gray-700"
            }`}
          >
            Semana
          </Text>
        </TouchableOpacity>
      </View>

      {viewMode === "day" && (
        <View className="flex-row items-center justify-between mb-4">
          <TouchableOpacity
            className="px-4 py-2 bg-white rounded-xl border border-gray-300"
            onPress={() => setCurrentDate(subDays(currentDate, 1))}
          >
            <Text className="text-gray-700 font-semibold">Anterior</Text>
          </TouchableOpacity>

          <View className="items-center">
            <Text className="text-lg font-bold text-gray-800">
              {capitalize(format(currentDate, "EEEE", { locale: ptBR }))}
            </Text>
            <Text className="text-gray-600">
              {format(currentDate, "dd/MM")}
            </Text>
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-4"
        >
          <View className="flex-row space-x-3">
            {weekDays.map((d) => (
              <TouchableOpacity
                key={String(d)}
                onPress={() => setCurrentDate(d)}
                className={`px-4 py-2 rounded-xl ${
                  format(d, "yyyy-MM-dd") ===
                  format(currentDate, "yyyy-MM-dd")
                    ? "bg-blue-600"
                    : "bg-white border border-gray-300"
                }`}
              >
                <Text
                  className={`text-center ${
                    format(d, "yyyy-MM-dd") ===
                    format(currentDate, "yyyy-MM-dd")
                      ? "text-white"
                      : "text-gray-700"
                  }`}
                >
                  {format(d, "dd/MM")}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      <Text className="text-lg font-semibold mb-2 ml-1">
        Consultas de hoje
      </Text>

      <FlatList
        data={appointmentsForDate(currentDate)}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View className="items-center mt-10">
            <Text className="text-gray-600">
              Nenhuma consulta para este dia.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <AppointmentCard appointment={item} onPress={() => {}} />
        )}
      />
    </View>
  );
}
