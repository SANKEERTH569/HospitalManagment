import React from 'react';
import { Pill, RefreshCw, Clock } from 'lucide-react';
import { Button } from '../../ui/Button';

interface Prescription {
  id: string;
  medication: string;
  dosage: string;
  frequency: string;
  prescribedBy: string;
  startDate: string;
  endDate: string;
  refillsLeft: number;
  status: 'active' | 'expired' | 'pending-refill';
}

const mockPrescriptions: Prescription[] = [
  {
    id: '1',
    medication: 'Amoxicillin',
    dosage: '500mg',
    frequency: 'Twice daily',
    prescribedBy: 'Dr. Sarah Johnson',
    startDate: '2024-03-01',
    endDate: '2024-03-14',
    refillsLeft: 2,
    status: 'active'
  },
  {
    id: '2',
    medication: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    prescribedBy: 'Dr. Michael Chen',
    startDate: '2024-02-15',
    endDate: '2024-05-15',
    refillsLeft: 1,
    status: 'pending-refill'
  }
];

export function Prescriptions() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Current Prescriptions</h3>
        <Button variant="secondary" icon={RefreshCw}>Request Refill</Button>
      </div>

      <div className="space-y-4">
        {mockPrescriptions.map((prescription) => (
          <div
            key={prescription.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center">
                  <Pill className="w-5 h-5 text-blue-500 mr-2" />
                  <h4 className="font-semibold text-lg">{prescription.medication}</h4>
                </div>
                
                <div className="mt-2 space-y-1 text-sm text-gray-600">
                  <p>Dosage: {prescription.dosage}</p>
                  <p>Frequency: {prescription.frequency}</p>
                  <p>Prescribed by: {prescription.prescribedBy}</p>
                  <div className="flex items-center mt-2">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>
                      {new Date(prescription.startDate).toLocaleDateString()} - {new Date(prescription.endDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="ml-4 text-right">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${prescription.status === 'active' ? 'bg-green-100 text-green-800' :
                    prescription.status === 'expired' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {prescription.status === 'active' ? 'Active' :
                    prescription.status === 'expired' ? 'Expired' :
                    'Refill Needed'
                  }
                </span>
                <p className="text-sm text-gray-600 mt-2">
                  Refills left: {prescription.refillsLeft}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}