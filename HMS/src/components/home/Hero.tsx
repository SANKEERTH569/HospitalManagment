import React, { useState } from 'react';
import { Calendar, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { AppointmentModal } from '../appointments/AppointmentModal';

export function Hero() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <>
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
            alt="Hospital"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Your Health Is Our Top Priority
            </h1>
            <p className="text-xl mb-8">
              Providing world-class healthcare with compassion and excellence.
              Our team of expert doctors and state-of-the-art facilities ensure
              the best medical care for you and your family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                icon={Calendar}
                onClick={() => setIsAppointmentModalOpen(true)}
              >
                Book Appointment
              </Button>
              <Button variant="secondary" icon={Phone}>Emergency Call</Button>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal 
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
}