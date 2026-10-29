// Duba tasarım tokenları. Ana renk: logo yeşili (#168D3F) + sıcak şeftali (#FCEBDF) vurgu; yerleşim/tipografi tasarım PNG'lerinden.
export const colors = {
  bg: '#F6FAF7',
  card: '#FFFFFF',
  border: '#E2E9E8',
  ink: '#16211F',
  ink2: '#4A5856',
  mute: '#667472',
  faint: '#9AA6A4',
  track: '#E6EEED',

  primary: '#168D3F',
  primaryMid: '#3FA866',
  primarySoft: '#E2F3E8',
  primaryTint: '#B7DFC5',
  onPrimary: '#FFFFFF',

  green: '#2E9E5B',
  greenSoft: '#E4F4EA',
  greenInk: '#17512F',

  red: '#C0392B',
  redSoft: '#FBE9E7',

  amber: '#B4540A',
  amberSoft: '#FCEBDF',
  amberLine: '#F5B301',
  orange: '#D97706',
} as const;

export const fonts = {
  heavy: 'PlusJakartaSans_800ExtraBold',
  bold: 'PlusJakartaSans_700Bold',
  semi: 'PlusJakartaSans_600SemiBold',
  body: 'AlbertSans_400Regular',
  bodyMed: 'AlbertSans_500Medium',
  bodySemi: 'AlbertSans_600SemiBold',
  bodyBold: 'AlbertSans_700Bold',
} as const;

export const radius = { sm: 12, md: 16, lg: 22, xl: 28, pill: 999 } as const;
export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 28 } as const;

export const COURSE_COLORS = {
  tc: { fg: colors.primary, bg: colors.primarySoft },
  iy: { fg: colors.red, bg: colors.redSoft },
  at: { fg: colors.amber, bg: colors.amberSoft },
  ta: { fg: colors.green, bg: colors.greenSoft },
} as const;
