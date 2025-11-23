import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

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
    <View className="flex-1 bg-white items-center justify-center px-6">

      <Text className="text-3xl font-bold text-gray-800 mb-10">
        Bem-vindo(a)
      </Text>

      <View className="w-full mb-4">
        <Text className="text-gray-700 mb-1">E-mail</Text>
        <TextInput
          className={`w-full px-4 py-3 rounded-xl border 
            ${email === "" ? "border-gray-300" : "border-blue-500"}
            bg-gray-100`}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View className="w-full mb-4">
        <Text className="text-gray-700 mb-1">Senha</Text>
        <TextInput
          className={`w-full px-4 py-3 rounded-xl border 
            ${senha === "" ? "border-gray-300" : "border-blue-500"}
            bg-gray-100`}
          placeholder="Digite sua senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      {erro !== "" && (
        <Text className="text-red-500 mb-3">{erro}</Text>
      )}

      <TouchableOpacity
        className="w-full bg-blue-600 py-3 rounded-xl mt-2 items-center"
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white font-semibold text-lg">Entrar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
