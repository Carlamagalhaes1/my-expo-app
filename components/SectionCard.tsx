import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SectionCard({
  title,
  subtitle,
  icon,
  onPress,
}: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white w-full flex-row items-center p-5 rounded-2xl mb-4 border border-gray-300 shadow-sm"
    >
      
      <View className="w-12 h-12 rounded-full bg-blue-100 items-center justify-center mr-4">
        <Ionicons name={icon} size={26} color="#3b82f6" />
      </View>

      
      <View className="flex-1">
        <Text className="text-lg font-semibold text-gray-800">
          {title}
        </Text>
        {subtitle && (
          <Text className="text-gray-500 text-sm">{subtitle}</Text>
        )}
      </View>

      <Ionicons name="chevron-forward" size={22} color="#888" />
    </TouchableOpacity>
  );
}
