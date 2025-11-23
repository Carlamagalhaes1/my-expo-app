import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import PatientsScreen from "./screens/PatientsScreen";
import PatientDetailsScreen from "./screens/PatientDetailsScreen";
import AgendaScreen from "./screens/AgendaScreen";

import { useAppStore } from "./store/useAppStore";
import "./global.css";

export default function App() {
  const {
    auth,
    screen,
    selectedPatient,
    login,
    navigate,
    setPatient,
  } = useAppStore();

  // 🔐 LOGIN
  if (!auth) {
    return <LoginScreen onLogin={login} />;
  }

  // 🏠 HOME
  if (screen === "home") {
    return <HomeScreen />;
  }

  // 📋 LISTA DE PACIENTES
  if (screen === "patients") {
    return (
      <PatientsScreen
        onBack={() => navigate("home")}
        onSelectPatient={(patient: any) => {
          setPatient(patient);
          navigate("details");
        }}
      />
    );
  }

  // 🧾 FICHA DO PACIENTE
  if (screen === "details") {
    return (
      <PatientDetailsScreen
        patient={selectedPatient}
        onBack={() => navigate("patients")}
      />
    );
  }

  // 📅 AGENDA
  if (screen === "agenda") {
    return <AgendaScreen onBack={() => navigate("home")} />;
  }

  return null;
}
