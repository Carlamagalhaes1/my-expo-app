import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

type Props = {
  appointment: {
    id: string;
    patientName: string;
    specialty: string;
    time: string; // ex: "09:30"
    avatar?: string;
  };
  onPress?: () => void;
};

export default function AppointmentCard({ appointment, onPress }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className="w-full bg-white rounded-2xl p-4 shadow-sm mb-3 flex-row items-center"
    >
      <Image
        source={{ uri: appointment.avatar ?? "https://i.pravatar.cc/150?img=12" }}
        className="w-14 h-14 rounded-full mr-4"
      />

      <View className="flex-1">
        <Text className="text-base font-semibold text-gray-800">
          {appointment.patientName}
        </Text>
        <Text className="text-sm text-gray-500">{appointment.specialty}</Text>
      </View>

      <View className="ml-3">
        <Text className="text-sm font-semibold text-gray-700">{appointment.time}</Text>
      </View>
    </TouchableOpacity>
  );
}
