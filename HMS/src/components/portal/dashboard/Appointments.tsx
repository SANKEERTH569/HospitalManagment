import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '../../ui/Button';

interface Appointment {
  id: string;
  doctor: string;
  department: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  notes?: string;
}

const mockAppointments: Appointment[] = [
  {
    id: '1',
    doctor: 'Dr. Sarah Johnson',
    department: 'Cardiology',
    date: '2024-03-15',
    time: '10:00',
    location: 'Main Building, Room 205',
    status: 'upcoming',
    notes: 'Please arrive 15 minutes early for registration'
  },
  {
    id: '2',
    doctor: 'Dr. Michael Chen',
    department: 'Neurology',
    date: '2024-03-20',
    time: '14:30',
    location: 'Specialty Wing, Room 103',
    status: 'upcoming'
  }
];

export function Appointments() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Upcoming Appointments</h3>
        <Button variant="secondary" icon={Calendar}>Schedule New</Button>
      </div>

      <div className="space-y-4">
        {mockAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">{appointment.doctor}</h4>
                <p className="text-blue-600">{appointment.department}</p>
                
                <div className="mt-2 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(appointment.date).toLocaleDateString()}
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    {appointment.time}
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {appointment.location}
                  </div>

                  {appointment.notes && (
                    <p className="text-gray-500 italic mt-2">
                      Note: {appointment.notes}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${appointment.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                    appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}
                >
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </span>
                <Button variant="secondary" className="text-sm">
                  Reschedule
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}