import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/ui/Button';
import { EmptyState } from '../components/ui/EmptyState';
import { ShieldCheck, Plus } from 'lucide-react';

export const ConsentsPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Consent Management Center"
        description="Grant, review, accept, or revoke granular access to family medical records."
        action={
          <Button variant="primary" icon={Plus}>
            New Consent Request
          </Button>
        }
      />

      <EmptyState
        icon={ShieldCheck}
        title="No active consents"
        description="You have not granted or received any health record access permissions yet."
        actionLabel="Request Consent"
        onAction={() => {}}
      />
    </div>
  );
};

export default ConsentsPage;
