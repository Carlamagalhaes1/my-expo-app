import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BackButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center mb-4 mt-8"
    >
      <Ionicons name="chevron-back" size={26} color="#2563eb" />
      <Text className="text-blue-600 font-semibold text-lg ml-1">
       
      </Text>
    </TouchableOpacity>
  );
}
