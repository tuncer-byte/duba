import type { Raw } from '../rawTypes';
import { OFFICIAL_SETS } from '../official.generated';
import { RAW_AT } from './at';
import { RAW_IY } from './iy';
import { RAW_SIGNS } from './signs';
import { RAW_SCENES } from './scenes';
import { RAW_VISUAL } from './visual';
import { RAW_TA } from './ta';
import { RAW_TC1 } from './tc1';
import { RAW_TC2 } from './tc2';
import { RAW_MORE_TC } from './more-tc';
import { RAW_MORE_OTHER } from './more-other';
import { RAW_MORE_VISUAL } from './more-visual';

export const RAW_EXTRA: Raw[] = [...RAW_TC1, ...RAW_TC2, ...RAW_IY, ...RAW_AT, ...RAW_TA, ...RAW_SIGNS, ...RAW_SCENES, ...RAW_VISUAL, ...RAW_MORE_TC, ...RAW_MORE_OTHER, ...RAW_MORE_VISUAL, ...OFFICIAL_SETS.flatMap((s) => s.questions)];
