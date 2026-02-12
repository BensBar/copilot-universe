export type Stage = 'Plan' | 'Code' | 'Verify' | 'Deploy' | 'Operate';

export const STAGES: Stage[] = ['Plan', 'Code', 'Verify', 'Deploy', 'Operate'];

export const STAGE_COLORS: Record<Stage, string> = {
  Plan: 'bg-stage-plan',
  Code: 'bg-stage-code',
  Verify: 'bg-stage-verify',
  Deploy: 'bg-stage-deploy',
  Operate: 'bg-stage-operate'
};

export const STAGE_TEXT_COLORS: Record<Stage, string> = {
  Plan: 'text-stage-plan',
  Code: 'text-stage-code',
  Verify: 'text-stage-verify',
  Deploy: 'text-stage-deploy',
  Operate: 'text-stage-operate'
};

export const STAGE_BORDER_COLORS: Record<Stage, string> = {
  Plan: 'border-stage-plan',
  Code: 'border-stage-code',
  Verify: 'border-stage-verify',
  Deploy: 'border-stage-deploy',
  Operate: 'border-stage-operate'
};
