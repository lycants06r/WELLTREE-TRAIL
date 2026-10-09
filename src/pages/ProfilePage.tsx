import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { useAuth } from '../hooks/useAuth';
import { Avatar } from '../components/ui/Avatar';

export const ProfilePage: React.FC = () => {
  const { user, profile } = useAuth();

  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader
        title="My Profile Settings"
        description="View and update your personal health guardian profile information."
      />

      <Card className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <Avatar
          src={profile?.avatar_url}
          name={profile?.full_name || user?.email}
          size="xl"
        />

        <div className="flex-1 space-y-2 text-center sm:text-left">
          <h2 className="text-xl font-bold text-slate-900">
            {profile?.full_name || 'Anonymous User'}
          </h2>
          <p className="text-sm text-slate-500">{user?.email}</p>
          <p className="text-xs text-slate-400">User ID (UUID): {user?.id}</p>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
