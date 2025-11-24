# ClinicApp — Sistema de Gestão Clínica
O ClinicApp é um aplicativo mobile moderno para gestão clínica, permitindo acesso rápido a pacientes, agenda de consultas e visualização de fichas detalhadas — tudo com um design limpo e experiência fluida.


---

## 🚀 Funcionalidades

- ✔️ Login funcional com validação
- ✔️ Home moderna com atalhos rápidos
- ✔️ Lista de pacientes com busca e avatar
- ✔️ Ficha completa do paciente
- ✔️ Layout moderno  
- ✔️ Agenda diária e semanal
- ✔️ Navegação usando Zustand (estado global)
- ✔️ Scroll em listas (FlatList)
- ✔️ Componentes reutilizávei
- ✔️ Design clean utilizando Tailwind + NativeWind

---

## 🧰 Oque foi usado

- **React Native (Expo)**  
- **TypeScript**  
- **NativeWind / TailwindCSS**
- **Zustand — gerenciamento global de estado**
- **Date-FNS — manipulação de datas**
- **Expo Vector Icons**
  

---

## 📁 Estrutura do Projeto

CLINICAPP/my-expo-app
|├── assets/
│   └── logo/clinicApp.png
|
|── components/
│   ├── Header.tsx
│   ├── BackButton.tsx
│   ├── SectionCard.tsx
│   └── AppointmentCard.tsx
|
|├── screens/
│   ├── AgendaScreen.tsx
│   ├── HomeScreen.tsx
│   ├── LoginScreen.tsx
│   ├── PatientDetailsScreen.tsx
│   └── PatientsScreen.tsx
|
│── App.tsx
│── global.css
│
│
└── store/
    └── useAppStore.ts  ← Zustand


---

## 📝 Como Funciona

1. O usuário preenche os dados do **prestador**, **cliente** e **impostos**.  
2. É possível adicionar quantos itens de serviço forem necessários.  
3. O sistema soma automaticamente o valor total dos itens.  
4. Os percentuais dos impostos são aplicados de forma automática.  
5. A NFS-e completa é exibida na tela.  
6. É possível  **limpar tudo**.

---

## 🖨️ Como rodar:

1. 1️⃣ Clonar o repositório
   -git clone https://github.com/Carlamagalhaes1/my-expo-app.git
   -cd my-expo-app
    -code . (para abrir no vscode)
2.2️⃣ Instalar dependências
   -npm install
3.3️⃣ Instalar dependências do Expo
   -npx expo install react-native-safe-area-context react-native-screens react-native-reanimated
4.4️⃣ Rodar o projeto
   -npx expo start

Abra o Expo Go no celular → Escaneie o QRCode.
- Credenciais padrão para fazer login **email === "admin@teste.com"** && **senha === "123456"**

---



