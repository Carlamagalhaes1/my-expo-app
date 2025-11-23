import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CardButton({ icon, title, onPress }: any) {
  return (
    <TouchableOpacity
      className="w-full bg-blue-600 p-5 rounded-2xl flex-row items-center mb-4"
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View className="bg-white/20 p-3 rounded-full mr-4">
        <Ionicons name={icon} size={26} color="#fff" />
      </View>

      <Text className="text-white text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
