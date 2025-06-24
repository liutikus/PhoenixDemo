// components/LanguageGuard.tsx
import { useParams, Navigate, Outlet } from 'react-router-dom';

const allowedLanguages = ['ro', 'en'];

const LanguageGuard = () => {
  const { lng } = useParams();

  if (!lng || !allowedLanguages.includes(lng)) {
    return <Navigate to="/ro" replace />;
  }

  return <Outlet />;
};

export default LanguageGuard;
