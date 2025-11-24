📱 ClinicApp — Sistema de Gestão Clínica

O ClinicApp é um aplicativo mobile moderno para gestão clínica, permitindo acesso rápido a pacientes, agenda de consultas e visualização de fichas detalhadas — tudo com um design limpo e experiência fluida.

🚀 Funcionalidades

✔️ Login funcional com validação

✔️ Home moderna com atalhos rápidos

✔️ Lista de pacientes com busca e avatar

✔️ Ficha completa do paciente

✔️ Layout moderno e intuitivo

✔️ Agenda diária e semanal

✔️ Navegação e estado global com Zustand

✔️ Scroll otimizado com FlatList

✔️ Componentes reutilizáveis

✔️ Design clean usando Tailwind + NativeWind

🧰 Tecnologias Utilizadas

React Native (Expo)

TypeScript

NativeWind / TailwindCSS

Zustand — gerenciamento global de estado

Date-FNS — manipulação de datas

Expo Vector Icons

📁 Estrutura do Projeto
CLINICAPP/my-expo-app
│
├── assets/
│   └── logo/clinicApp.png
│
├── components/
│   ├── Header.tsx
│   ├── BackButton.tsx
│   ├── SectionCard.tsx
│   └── AppointmentCard.tsx
│
├── screens/
│   ├── AgendaScreen.tsx
│   ├── HomeScreen.tsx
│   ├── LoginScreen.tsx
│   ├── PatientDetailsScreen.tsx
│   └── PatientsScreen.tsx
│
├── store/
│   └── useAppStore.ts  ← Zustand
│
├── App.tsx
└── global.css

📝 Como Funciona

O usuário faz login com email e senha.

A home exibe atalhos rápidos para agenda e pacientes.

A lista de pacientes permite busca dinâmica com avatar.

É possível abrir a ficha completa do paciente.

A agenda permite visualizar compromissos por dia ou semana.

Tudo utilizando Zustand para estado global e NativeWind para estilização.

🖥️ Como Rodar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/Carlamagalhaes1/my-expo-app.git
cd my-expo-app
code .

2️⃣ Instalar dependências
npm install

3️⃣ Instalar dependências do Expo
npx expo install react-native-safe-area-context react-native-screens react-native-reanimated

4️⃣ Rodar
npx expo start


📲 Abra o Expo Go no celular e escaneie o QR Code.

🔐 Credenciais padrão de login

Email: admin@teste.com

Senha: 123456
