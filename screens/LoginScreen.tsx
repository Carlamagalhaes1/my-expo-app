import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../assets/logo/clinicApp.png"

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = () => {
    setErro("");

    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (email === "admin@teste.com" && senha === "123456") {
        onLogin();
      } else {
        setErro("E-mail ou senha inválidos.");
      }
    }, 1200);
  };

  return (
    <View className="flex-1 bg-[#E0F7FA] items-center justify-center px-6">

      <View className="w-full bg-white rounded-3xl p-8 shadow-xl">

        <View className="items-center">
          <Image
            source={Logo}
            className="w-[100px] h-[100px]"
          />
        </View>
        <Text className="text-2xl text-center font-bold text-gray-800 mb-6">
          Login
        </Text>

        <View className="w-full mb-4">
          <View className="flex-row items-center bg-gray-100 border border-gray-300 rounded-xl px-4">
            <Ionicons name="mail-outline" size={20} color="#888" />
            <TextInput
              className="flex-1 ml-2 py-3"
              placeholder="Email address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View className="w-full mb-3">
          <View className="flex-row items-center bg-gray-100 border border-gray-300 rounded-xl px-4">
            <Ionicons name="lock-closed-outline" size={20} color="#888" />

            <TextInput
              className="flex-1 ml-2 py-3"
              placeholder="Password"
              secureTextEntry={!showPassword}  
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}  
                size={22}
                color="#888"
              />
            </TouchableOpacity>
          </View>
        </View>


        <Text className="text-blue-500  text-right mb-4">
          Esqueceu sua senha?
        </Text>

        {erro !== "" && (
          <Text className="text-red-500 mb-3 text-center">{erro}</Text>
        )}

        <TouchableOpacity
          className="w-full bg-[#00ACC1] py-3 rounded-xl items-center"
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white font-semibold text-lg">Entrar</Text>
          )}
        </TouchableOpacity>

        <View className="flex-row items-center my-5">
          <View className="flex-1 h-[1px] bg-gray-300" />
          <View className="flex-1 h-[1px] bg-gray-300" />
        </View>

        <Text className="text-center text-gray-600">
          Não tem conta?{" "}
          <Text className="text-blue-500 font-semibold">Inscreva-se</Text>
        </Text>

      </View>
    </View>
  );
}
