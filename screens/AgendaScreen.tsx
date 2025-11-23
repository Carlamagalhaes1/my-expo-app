import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import AppointmentCard from "../components/AppointmentCard";
import { addDays, format, subDays } from "date-fns";

type Appointment = {
  id: string;
  patientName: string;
  specialty: string;
  time: string;
  date: string; 
  avatar?: string;
};

const MOCK_APPOINTMENTS: Appointment[] = [
  { id: "a1", patientName: "Ana Beatriz", specialty: "Clínica Geral", time: "09:00", date: format(new Date(), "yyyy-MM-dd"), avatar: "https://i.pravatar.cc/150?img=1" },
  { id: "a2", patientName: "João Pedro", specialty: "Cardiologia", time: "10:30", date: format(new Date(), "yyyy-MM-dd"), avatar: "https://i.pravatar.cc/150?img=2" },
  { id: "a3", patientName: "Carla Mendes", specialty: "Pediatria", time: "14:00", date: format(addDays(new Date(), 1), "yyyy-MM-dd"), avatar: "https://i.pravatar.cc/150?img=3" },

];

export default function AgendaScreen({ onBack }: { onBack: () => void }) {
  const [viewMode, setViewMode] = useState<"day" | "week">("day");
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => addDays(currentDate, i - 3));
  }, [currentDate]);

  const appointmentsForDate = (date: Date) => {
    const key = format(date, "yyyy-MM-dd");
    return MOCK_APPOINTMENTS.filter((a) => a.date === key).sort((A,B) => A.time.localeCompare(B.time));
  };

  const handlePrev = () => setCurrentDate((d) => subDays(d, 1));
  const handleNext = () => setCurrentDate((d) => addDays(d, 1));

  return (
    <View className="flex-1 bg-white p-4 pt-12">

      <View className="flex-row items-center justify-between mb-4">
        <TouchableOpacity onPress={onBack}>
          <Text className="text-blue-600 font-semibold">← Voltar</Text>
        </TouchableOpacity>

        <View className="flex-row items-center space-x-3">
          <TouchableOpacity
            onPress={() => setViewMode("day")}
            className={`px-3 py-2 rounded-xl ${viewMode === "day" ? "bg-blue-600" : "bg-gray-100"}`}
          >
            <Text className={`${viewMode === "day" ? "text-white" : "text-gray-700"} font-semibold`}>Dia</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setViewMode("week")}
            className={`px-3 py-2 rounded-xl ${viewMode === "week" ? "bg-blue-600" : "bg-gray-100"}`}
          >
            <Text className={`${viewMode === "week" ? "text-white" : "text-gray-700"} font-semibold`}>Semana</Text>
          </TouchableOpacity>
        </View>
      </View>

      {viewMode === "day" && (
        <View className="flex-row items-center justify-between mb-4">
          <TouchableOpacity onPress={handlePrev} className="px-3 py-2 rounded-xl bg-gray-100">
            <Text className="text-gray-700 font-semibold">Anterior</Text>
          </TouchableOpacity>

          <View className="items-center">
            <Text className="text-lg font-semibold">{format(currentDate, "EEEE, dd MMM")}</Text>
            <Text className="text-sm text-gray-500">{format(currentDate, "yyyy-MM-dd")}</Text>
          </View>

          <TouchableOpacity onPress={handleNext} className="px-3 py-2 rounded-xl bg-gray-100">
            <Text className="text-gray-700 font-semibold">Próximo</Text>
          </TouchableOpacity>
        </View>
      )}

      {viewMode === "week" && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
          <View className="flex-row space-x-3">
            {weekDays.map((d) => {
              const key = format(d, "yyyy-MM-dd");
              const isToday = format(d, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => setCurrentDate(d)}
                  className={`items-center px-3 py-2 rounded-xl ${format(d, "yyyy-MM-dd") === format(currentDate, "yyyy-MM-dd") ? "bg-blue-600" : "bg-gray-100"}`}
                >
                  <Text className={`${isToday ? "text-white" : "text-gray-700"} font-semibold`}>{format(d, "dd/MM")}</Text>
                  <Text className={`${isToday ? "text-white" : "text-gray-500"} text-xs`}>{format(d, "EEE")}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      )}

      <View className="flex-1 mt-2">
        <Text className="text-lg font-semibold mb-3">Consultas</Text>

        <FlatList
          data={appointmentsForDate(currentDate)}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <View className="items-center mt-8">
              <Text className="text-gray-500">Nenhuma consulta para este dia.</Text>
            </View>
          }
          renderItem={({ item }) => (
            <AppointmentCard
              appointment={{
                id: item.id,
                patientName: item.patientName,
                specialty: item.specialty,
                time: item.time,
                avatar: item.avatar,
              }}
              onPress={() => {
              }}
            />
          )}
        />
      </View>
    </View>
  );
}
