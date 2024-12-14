import React from 'react';
import { Activity, Heart, Weight, Ruler } from 'lucide-react';

interface HealthMetric {
  id: string;
  type: string;
  value: string;
  unit: string;
  date: string;
  icon: React.ElementType;
  trend?: 'up' | 'down' | 'stable';
}

const mockMetrics: HealthMetric[] = [
  {
    id: '1',
    type: 'Blood Pressure',
    value: '120/80',
    unit: 'mmHg',
    date: '2024-03-01',
    icon: Heart,
    trend: 'stable'
  },
  {
    id: '2',
    type: 'Weight',
    value: '70',
    unit: 'kg',
    date: '2024-03-01',
    icon: Weight,
    trend: 'down'
  },
  {
    id: '3',
    type: 'Height',
    value: '175',
    unit: 'cm',
    date: '2024-03-01',
    icon: Ruler
  },
  {
    id: '4',
    type: 'Heart Rate',
    value: '72',
    unit: 'bpm',
    date: '2024-03-01',
    icon: Activity,
    trend: 'up'
  }
];

export function HealthMetrics() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6">Health Metrics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-6 h-6 text-blue-500" />
                {metric.trend && (
                  <span className={`text-sm ${
                    metric.trend === 'up' ? 'text-red-500' :
                    metric.trend === 'down' ? 'text-green-500' :
                    'text-gray-500'
                  }`}>
                    {metric.trend === 'up' ? '↑' :
                     metric.trend === 'down' ? '↓' : '→'}
                  </span>
                )}
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-600">{metric.type}</p>
                <p className="text-2xl font-semibold">
                  {metric.value}
                  <span className="text-sm text-gray-500 ml-1">
                    {metric.unit}
                  </span>
                </p>
                <p className="text-xs text-gray-500">
                  Last updated: {new Date(metric.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}