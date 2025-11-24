import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

interface HeaderProps {
  title: string;
  icon: IoniconName;
  onBack?: () => void;
}

export default function Header({ title, icon, onBack }: HeaderProps) {
  return (
    <View className="flex-row items-center mb-6 mt-6">
      
      {onBack && (
        <TouchableOpacity onPress={onBack} className="mr-3">
          <Ionicons name="arrow-back" size={26} color="#0284c7" />
        </TouchableOpacity>
      )}

      <View className="w-12 h-12 bg-white rounded-full shadow items-center justify-center mr-3">
        <Ionicons name={icon} size={28} color="#0284c7" />
      </View>

      <Text className="text-2xl font-bold text-slate-700">
        {title}
      </Text>
    </View>
  );
}
