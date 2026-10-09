import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowLeft, UserPlus } from 'lucide-react';

export const FamilyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader
        title="Family Details & Members"
        description={`Manage roster and permissions for Family ID: ${id}`}
        action={
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              icon={ArrowLeft}
              onClick={() => navigate('/families')}
            >
              Back
            </Button>
            <Button variant="primary" size="sm" icon={UserPlus}>
              Add Member
            </Button>
          </div>
        }
      />

      <Card>
        <p className="text-sm text-slate-500">
          Member roster and RBAC controls will be displayed here.
        </p>
      </Card>
    </div>
  );
};

export default FamilyDetailPage;
