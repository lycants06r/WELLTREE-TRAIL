import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const CreateFamilyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto">
      <PageHeader
        title="Create New Family"
        description="Establish a new health management hub where you serve as the primary Admin."
        action={
          <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={() => navigate('/families')}>
            Back to Families
          </Button>
        }
      />

      <Card>
        <p className="text-sm text-slate-500 mb-4">
          Family creation form will be integrated here.
        </p>
        <Button variant="outline" onClick={() => navigate('/families')}>
          Cancel
        </Button>
      </Card>
    </div>
  );
};

export default CreateFamilyPage;
