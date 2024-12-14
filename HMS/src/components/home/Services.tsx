import React from 'react';
import { Section } from '../ui/Section';
import { services } from '../../constants/services';

export function Services() {
  return (
    <Section
      title="Our Services"
      description="We offer a wide range of medical services to meet all your healthcare needs. Our experienced team ensures you receive the best possible care."
      background="gray"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <Icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}