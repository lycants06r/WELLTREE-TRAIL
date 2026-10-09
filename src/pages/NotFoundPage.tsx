import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-light flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-12 rounded-2xl border border-slate-200/80 shadow-lg">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 text-danger flex items-center justify-center mx-auto mb-6">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          404 - Not Found
        </h1>
        <p className="text-sm text-slate-500 mb-8 leading-relaxed">
          The healthcare page or record you are trying to access does not exist or may have been moved.
        </p>

        <Link to="/dashboard">
          <Button variant="primary" icon={ArrowLeft} fullWidth>
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
