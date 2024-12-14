import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Services } from './components/home/Services';
import { Doctors } from './components/home/Doctors';
import { Testimonials } from './components/home/Testimonials';
import { LoginForm } from './components/auth/LoginForm';
import { SignupForm } from './components/auth/SignupForm';
import { Dashboard } from './components/portal/Dashboard';
import { DoctorLoginForm } from './components/doctor/DoctorLoginForm';
import { DoctorDashboard } from './components/doctor/DoctorDashboard';
import { Departments } from './components/pages/Departments';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { useAuthStore } from './stores/authStore';
import { useDoctorAuthStore } from './stores/doctorAuthStore';
import { Section } from './components/ui/Section';
import { Tooth } from 'lucide-react/dist/icons'; // Or another valid path



function PrivateRoute({ children, type }: { children: React.ReactNode; type: 'patient' | 'doctor' }) {
  const isPatientAuthenticated = useAuthStore(state => state.isAuthenticated);
  const isDoctorAuthenticated = useDoctorAuthStore(state => state.isAuthenticated);
  
  if (type === 'patient') {
    return isPatientAuthenticated ? <>{children}</> : <Navigate to="/login" />;
  } else {
    return isDoctorAuthenticated ? <>{children}</> : <Navigate to="/doctor-login" />;
  }
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Doctors />
                <Testimonials />
              </>
            } />
            <Route path="/departments" element={<Departments />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={
              <Section title="Login to Patient Portal">
                <div className="max-w-md mx-auto">
                  <LoginForm />
                </div>
              </Section>
            } />
            <Route path="/doctor-login" element={
              <Section title="Doctor Login">
                <div className="max-w-md mx-auto">
                  <DoctorLoginForm />
                </div>
              </Section>
            } />
            <Route path="/signup" element={
              <Section title="Create Patient Account">
                <div className="max-w-2xl mx-auto">
                  <SignupForm />
                </div>
              </Section>
            } />
            <Route path="/patient-portal/*" element={
              <PrivateRoute type="patient">
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/doctor-portal/*" element={
              <PrivateRoute type="doctor">
                <DoctorDashboard />
              </PrivateRoute>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;