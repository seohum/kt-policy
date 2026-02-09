import { POLICY } from './policy-data.js';

export function calcPolicy({ type, settop, wireless }) {
  let total = 0;

  if (type.includes('T')) {
    total += POLICY.settop['I+T'][settop] || 0;
  }

  if (type.startsWith('U')) {
    total += POLICY.wireless[wireless] || 0;
  }

  return total;
}
