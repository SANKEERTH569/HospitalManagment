import React from 'react';
import { Quote } from 'lucide-react';
import { Section } from '../ui/Section';
import { testimonials } from '../../constants/testimonials';

export function Testimonials() {
  return (
    <Section
      title="Patient Testimonials"
      description="Read what our patients say about their experience with our healthcare services and dedicated medical team."
      background="gray"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md relative"
          >
            <Quote className="w-8 h-8 text-blue-500 mb-4" />
            <p className="text-gray-600 mb-4">{testimonial.text}</p>
            <div className="mt-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-blue-600">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}