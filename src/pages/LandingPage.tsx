import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Lock, HeartPulse, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-light flex flex-col">
      {/* Top Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-primary border border-teal-100">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-lg text-primary tracking-tight">
              Family Health Guardian
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-primary text-xs font-semibold mb-6">
            <HeartPulse className="w-4 h-4 text-primary" />
            <span>Healthcare Family Privacy Management</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            One Family. One Health Center.{' '}
            <span className="text-primary block mt-1">One Trusted Guardian.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A secure, role-aware, consent-driven healthcare platform designed to help families collectively coordinate medical records with strict privacy boundaries.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/register">
              <Button size="lg" icon={ArrowRight}>
                Get Started Free
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg">
                Sign In to Portal
              </Button>
            </Link>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-primary flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Role-Based Access</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Empower Administrators, Guardians, and Members with precise permission scopes and instant member assignments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-secondary flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Granular Health Consent</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Mutual consent workflows allow members to grant, accept, or immediately revoke read-only or full access permissions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-danger flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Data Leakage</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Supabase Row-Level Security and FastAPI token verification ensure total health data confidentiality.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Family Health Guardian. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
