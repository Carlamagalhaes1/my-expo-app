import { useState } from "react";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import PatientsScreen from "./screens/PatientsScreen";
import PatientDetailsScreen from "./screens/PatientDetailsScreen";

import "./global.css";
import AgendaScreen from "screens/AgendaScreen";


export default function App() {
  const [auth, setAuth] = useState(false);
  const [screen, setScreen] = useState("home");
  const [selectedPatient, setSelectedPatient] = useState(null);

  // 🔐 LOGIN
  if (!auth) {
    return <LoginScreen onLogin={() => setAuth(true)} />;
  }

  // 🏠 HOME
  if (screen === "home") {
    return (
      <HomeScreen
        onNavigate={(value: string) => setScreen(value)}
        userName="Carla"
      />
    );
  }

  // 📋 LISTA DE PACIENTES
  if (screen === "patients") {
    return (
      <PatientsScreen
        onBack={() => setScreen("home")}
        onSelectPatient={(patient: any) => {
          setSelectedPatient(patient);
          setScreen("details"); // vai para a ficha do paciente
        }}
      />
    );
  }

  // 🧾 FICHA DO PACIENTE
  if (screen === "details") {
    return (
      <PatientDetailsScreen
        patient={selectedPatient}
        onBack={() => setScreen("patients")}
      />
    );
  }

  // 📅 AGENDA
  if (screen === "agenda") {
  return <AgendaScreen onBack={() => setScreen("home")} />;
}

  return null;
}
