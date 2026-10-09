// Enums
export type FamilyRole = 'ADMIN' | 'GUARDIAN' | 'MEMBER';
export type ConsentStatus = 'PENDING' | 'ACTIVE' | 'REVOKED' | 'DENIED';
export type ConsentPermission = 'READ_ONLY' | 'FULL_ACCESS';

// Profile
export interface Profile {
  id: string; // UUID
  full_name: string;
  date_of_birth?: string | null; // YYYY-MM-DD
  gender?: string | null;
  phone_number?: string | null;
  avatar_url?: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProfileUpdateInput {
  full_name?: string;
  date_of_birth?: string | null;
  gender?: string | null;
  phone_number?: string | null;
  avatar_url?: string | null;
}

// Family Member
export interface FamilyMember {
  id: string; // UUID
  family_id: string;
  user_id: string;
  role: FamilyRole;
  joined_at: string;
}

// Family
export interface Family {
  id: string; // UUID
  name: string;
  description?: string | null;
  created_by: string;
  created_at: string;
  updated_at: string;
  members?: FamilyMember[];
}

export interface FamilyCreateInput {
  name: string;
  description?: string;
}

export interface FamilyMemberAddInput {
  user_id: string;
  role: FamilyRole;
}

// Consent
export interface Consent {
  id: string; // UUID
  granter_id: string;
  grantee_id: string;
  family_id: string;
  permission_level: ConsentPermission;
  status: ConsentStatus;
  notes?: string | null;
  created_at: string;
  updated_at: string;
}

export interface ConsentCreateInput {
  grantee_id: string;
  family_id: string;
  permission_level: ConsentPermission;
  notes?: string;
}

export interface ConsentUpdateInput {
  status: ConsentStatus;
  permission_level?: ConsentPermission;
  notes?: string;
}
