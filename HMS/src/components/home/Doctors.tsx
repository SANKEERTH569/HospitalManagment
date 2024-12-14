import React from 'react';
import { Star, Calendar } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { doctors } from '../../constants/doctors';

export function Doctors() {
  return (
    <Section
      title="Our Expert Doctors"
      description="Meet our team of experienced healthcare professionals dedicated to providing exceptional medical care with expertise and compassion."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-blue-600 mb-3">{doctor.specialty}</p>
              <div className="flex items-center mb-3">
                {[...Array(doctor.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">Experience: {doctor.experience}</p>
              <Button icon={Calendar} className="w-full">Book Appointment</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}