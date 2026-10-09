import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/layout/AuthLayout';
import { Button } from '../components/ui/Button';

export const RegisterPage: React.FC = () => {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join Family Health Guardian to manage care circles securely"
    >
      <div className="space-y-4">
        <p className="text-sm text-slate-500 text-center">
          Registration form component will be integrated here.
        </p>

        <Link to="/dashboard" className="block">
          <Button variant="primary" fullWidth>
            Create Account
          </Button>
        </Link>

        <div className="text-center text-xs text-slate-500 pt-3 border-t border-slate-100">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
