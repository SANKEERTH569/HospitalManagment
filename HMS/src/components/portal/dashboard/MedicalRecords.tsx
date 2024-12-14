import React from 'react';
import { FileText, Download, Calendar } from 'lucide-react';
import { Button } from '../../ui/Button';

interface Record {
  id: string;
  type: string;
  date: string;
  doctor: string;
  description: string;
  fileUrl: string;
}

const mockRecords: Record[] = [
  {
    id: '1',
    type: 'Lab Results',
    date: '2024-03-01',
    doctor: 'Dr. Sarah Johnson',
    description: 'Complete Blood Count (CBC)',
    fileUrl: '#'
  },
  {
    id: '2',
    type: 'X-Ray Report',
    date: '2024-02-15',
    doctor: 'Dr. Michael Chen',
    description: 'Chest X-Ray Analysis',
    fileUrl: '#'
  }
];

export function MedicalRecords() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Medical Records</h3>
        <Button variant="secondary" icon={FileText}>Request Records</Button>
      </div>

      <div className="space-y-4">
        {mockRecords.map((record) => (
          <div
            key={record.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">{record.type}</h4>
                <div className="text-sm text-gray-600 space-y-1 mt-1">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(record.date).toLocaleDateString()}
                  </div>
                  <p>Doctor: {record.doctor}</p>
                  <p>{record.description}</p>
                </div>
              </div>
              <Button
                variant="secondary"
                icon={Download}
                className="text-sm"
                onClick={() => window.open(record.fileUrl, '_blank')}
              >
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}