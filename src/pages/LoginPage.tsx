import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/layout/AuthLayout';
import { Button } from '../components/ui/Button';

export const LoginPage: React.FC = () => {
  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle="Access your family healthcare portal and guardian consents"
    >
      <div className="space-y-4">
        <p className="text-sm text-slate-500 text-center">
          Login form component will be integrated here.
        </p>

        <Link to="/dashboard" className="block">
          <Button variant="primary" fullWidth>
            Continue to Dashboard
          </Button>
        </Link>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
          <Link
            to="/forgot-password"
            className="text-primary font-medium hover:underline"
          >
            Forgot password?
          </Link>
          <Link to="/register" className="text-primary font-medium hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
