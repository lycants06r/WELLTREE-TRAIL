import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Users, ShieldCheck, HeartPulse, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const DashboardPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Main Health Hub"
        description="Monitor active family circles, guardian permissions, and consent alerts."
        action={
          <Link to="/families/create">
            <Button variant="primary" icon={Users}>
              Create Family
            </Button>
          </Link>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-primary flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase">Families</p>
            <h3 className="text-xl font-bold text-slate-800">My Circles</h3>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-secondary flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase">Consents</p>
            <h3 className="text-xl font-bold text-slate-800">Permissions</h3>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-warning flex items-center justify-center">
            <HeartPulse className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase">Health Vitals</p>
            <h3 className="text-xl font-bold text-slate-800">Records Hub</h3>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase">Profile</p>
            <h3 className="text-xl font-bold text-slate-800">Guardian ID</h3>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
