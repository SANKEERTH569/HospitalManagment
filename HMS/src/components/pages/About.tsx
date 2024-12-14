import React from 'react';
import { Section } from '../ui/Section';
import { Award, Users, Building2, Target } from 'lucide-react';

export function About() {
  return (
    <div>
      <Section title="About MediCare" description="Leading the way in healthcare excellence since 1970">
        <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
          <p>
            MediCare has been at the forefront of medical excellence for over 50 years. 
            Our commitment to providing exceptional healthcare services, combined with 
            cutting-edge technology and compassionate care, makes us a trusted name in 
            the healthcare industry.
          </p>
          <p>
            We believe in a patient-first approach, ensuring that every individual 
            receives personalized attention and the highest standard of medical care.
          </p>
        </div>
      </Section>

      <Section title="Our Values" background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              title: 'Patient-Centered Care',
              description: 'Putting patients first in everything we do'
            },
            {
              icon: Award,
              title: 'Excellence',
              description: 'Maintaining the highest standards in healthcare'
            },
            {
              icon: Target,
              title: 'Innovation',
              description: 'Embracing advanced medical technologies'
            },
            {
              icon: Building2,
              title: 'Integrity',
              description: 'Operating with transparency and ethical principles'
            }
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Our Achievements">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: '50+', label: 'Years of Excellence' },
            { value: '200+', label: 'Expert Doctors' },
            { value: '50,000+', label: 'Patients Served' },
            { value: '99%', label: 'Patient Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}