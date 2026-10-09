import React from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/layout/AuthLayout';
import { Button } from '../components/ui/Button';

export const ForgotPasswordPage: React.FC = () => {
  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email to receive recovery instructions"
    >
      <div className="space-y-4">
        <p className="text-sm text-slate-500 text-center">
          Password recovery form will be integrated here.
        </p>

        <Button variant="primary" fullWidth>
          Send Reset Link
        </Button>

        <div className="text-center text-xs text-slate-500 pt-3 border-t border-slate-100">
          Remember your password?{' '}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
