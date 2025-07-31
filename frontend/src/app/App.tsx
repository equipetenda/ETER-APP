// App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "../components/AppLayout/AppLayout";
import { RegisterFormProvider } from "./public/user/register/RegisterContext";
import { RegisterForm } from './private/user/register-form';

import { Register } from "./public/user/register/Register";
import { HomeScreen } from "./private/user/HomeScreen";
import { DiaryHomeProvider } from "./public/user/diary-home/DiaryHomeContext";

const App: React.FC = () => {
  return (
    <Router>
      <RegisterFormProvider> {/* Envolve tudo */}
        <DiaryHomeProvider> {/* Envolve tudo */}
        <AppLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/register" replace />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/user/register-form" element={<RegisterForm />} />

          </Routes>
        </AppLayout>
      </DiaryHomeProvider>
      </RegisterFormProvider>
    </Router>
  );
};

export default App;
