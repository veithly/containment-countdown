create table if not exists evidence_events (
  id integer primary key autoincrement,
  sessionId text not null,
  entityId text not null,
  ownerId text not null,
  eventId text not null,
  signal text not null,
  confidence integer not null,
  payload text not null,
  createdAt text not null default (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

create table if not exists approvals (
  id integer primary key autoincrement,
  sessionId text not null,
  approvalId text not null,
  entityId text not null,
  ownerId text not null,
  decision text not null,
  payload text not null,
  createdAt text not null default (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

create table if not exists containment_actions (
  id integer primary key autoincrement,
  sessionId text not null,
  executionId text not null,
  entityId text not null,
  ownerId text not null,
  fromState text not null,
  toState text not null,
  payload text not null,
  createdAt text not null default (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

create table if not exists verification_runs (
  id integer primary key autoincrement,
  sessionId text not null,
  verificationId text not null,
  entityId text not null,
  ownerId text not null,
  status text not null,
  payload text not null,
  createdAt text not null default (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

create table if not exists dossiers (
  id integer primary key autoincrement,
  sessionId text not null,
  dossierId text not null,
  entityId text not null,
  roleId text not null,
  ownerId text not null,
  createdBy text not null,
  payload text not null,
  createdAt text not null default (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

create index if not exists idx_evidence_session on evidence_events (sessionId, createdAt);
create index if not exists idx_approvals_session on approvals (sessionId, createdAt);
create index if not exists idx_actions_session on containment_actions (sessionId, createdAt);
create index if not exists idx_verification_session on verification_runs (sessionId, createdAt);
create index if not exists idx_dossiers_session on dossiers (sessionId, createdAt);
