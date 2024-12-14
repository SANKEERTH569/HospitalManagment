import React from 'react';
import { Calendar, Users, Clock, FileText } from 'lucide-react';
import { useDoctorAuthStore } from '../../stores/doctorAuthStore';
import { Section } from '../ui/Section';
import { AppointmentList } from './dashboard/AppointmentList';
import { PatientList } from './dashboard/PatientList';
import { ScheduleManager } from './dashboard/ScheduleManager';

export function DoctorDashboard() {
  const doctor = useDoctorAuthStore(state => state.doctor);

  if (!doctor) return null;

  return (
    <div className="py-8">
      <Section title={`Welcome, Dr. ${doctor.lastName}`} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Today's Appointments"
            icon={Calendar}
            value={doctor.appointments.filter(apt => apt.status === 'scheduled').length.toString()}
          />
          <DashboardCard
            title="Total Patients"
            icon={Users}
            value={doctor.patients.length.toString()}
          />
          <DashboardCard
            title="Available Hours"
            icon={Clock}
            value="8"
          />
          <DashboardCard
            title="Pending Reports"
            icon={FileText}
            value="3"
          />
        </div>
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Section title="Upcoming Appointments" className="mb-8">
          <AppointmentList appointments={doctor.appointments} />
        </Section>

        <Section title="Recent Patients" className="mb-8">
          <PatientList patients={doctor.patients} />
        </Section>
      </div>

      <Section title="Schedule Management">
        <ScheduleManager slots={doctor.availableSlots} />
      </Section>
    </div>
  );
}

function DashboardCard({ 
  title, 
  icon: Icon, 
  value 
}: { 
  title: string; 
  icon: React.ElementType; 
  value: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-8 h-8 text-blue-500" />
        <span className="text-2xl font-bold text-gray-900">{value}</span>
      </div>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
    </div>
  );
}