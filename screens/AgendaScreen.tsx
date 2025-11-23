import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { format, addDays, subDays, startOfWeek } from "date-fns";
import { ptBR } from "date-fns/locale";

interface AgendaProps {
  onBack: () => void;
}

export default function AgendaScreen({ onBack }: AgendaProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"day" | "week">("day");

  const handleNext = () => {
    if (viewMode === "day") {
      setCurrentDate(addDays(currentDate, 1));
    } else {
      setCurrentDate(addDays(currentDate, 7));
    }
  };

  const handlePrevious = () => {
    if (viewMode === "day") {
      setCurrentDate(subDays(currentDate, 1));
    } else {
      setCurrentDate(subDays(currentDate, 7));
    }
  };

  const getWeekDays = () => {
    const start = startOfWeek(currentDate, { weekStartsOn: 1 });
    return Array.from({ length: 7 }).map((_, i) => addDays(start, i));
  };

  const isToday = (dateA: Date, dateB: Date) =>
    format(dateA, "yyyy-MM-dd") === format(dateB, "yyyy-MM-dd");

  return (
    <View className="flex-1 p-4 bg-gray-100">

      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-gray-800 font-semibold text-lg">
          Pesquisar por:
        </Text>

        <View className="flex-row space-x-2">
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
      </View>

      {/* Botões de navegação */}
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity
          onPress={handlePrevious}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          <Text className="font-semibold text-gray-700">Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNext}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          <Text className="font-semibold text-gray-700">Próximo</Text>
        </TouchableOpacity>
      </View>

      {/* Modo Dia */}
      {viewMode === "day" && (
        <View className="items-center p-4 bg-white rounded-xl shadow">
          <Text className="text-xl font-bold text-gray-900">
            {format(currentDate, "EEEE", { locale: ptBR })}
          </Text>

          <Text className="text-gray-600 text-lg">
            {format(currentDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
          </Text>
        </View>
      )}

      {/* Modo Semana */}
      {viewMode === "week" && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row space-x-3">
            {getWeekDays().map((d) => (
              <View
                key={String(d)}
                className={`p-4 rounded-xl w-20 items-center ${
                  isToday(d, currentDate)
                    ? "bg-blue-600"
                    : "bg-white border border-gray-300"
                }`}
              >
                <Text
                  className={`text-sm font-semibold ${
                    isToday(d, currentDate) ? "text-white" : "text-gray-700"
                  }`}
                >
                  {format(d, "EEE", { locale: ptBR })}
                </Text>

                <Text
                  className={`mt-1 text-lg ${
                    isToday(d, currentDate) ? "text-white" : "text-gray-700"
                  }`}
                >
                  {format(d, "dd/MM", { locale: ptBR })}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
