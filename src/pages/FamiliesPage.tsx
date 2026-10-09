import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { EmptyState } from '../components/ui/EmptyState';
import { Users, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const FamiliesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader
        title="Families Directory"
        description="View all family health circles you belong to and manage role memberships."
        action={
          <Link to="/families/create">
            <Button variant="primary" icon={Plus}>
              Create New Family
            </Button>
          </Link>
        }
      />

      <EmptyState
        icon={Users}
        title="No family circles found"
        description="Create your primary family hub to invite family members, assign guardians, and share health vitals."
        actionLabel="Create First Family"
        onAction={() => navigate('/families/create')}
      />
    </div>
  );
};

export default FamiliesPage;
