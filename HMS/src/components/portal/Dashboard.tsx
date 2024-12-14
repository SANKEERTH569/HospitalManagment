import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import { Section } from '../ui/Section';
import { HealthMetrics } from './dashboard/HealthMetrics';
import { Appointments } from './dashboard/Appointments';
import { Prescriptions } from './dashboard/Prescriptions';
import { MedicalRecords } from './dashboard/MedicalRecords';

export function Dashboard() {
  const user = useAuthStore(state => state.user);

  if (!user) return null;

  return (
    <div className="py-8">
      <Section title={`Welcome, ${user.firstName}!`} className="mb-8">
        <HealthMetrics />
      </Section>

      <div className="container mx-auto px-4 space-y-8">
        <Appointments />
        <Prescriptions />
        <MedicalRecords />
      </div>
    </div>
  );
}