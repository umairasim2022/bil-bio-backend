import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../assets';

// ----------------------------------------------------------------------

const LICENSES = ['Free', '39 Usd', 'TBD'];

export const _homePlans = [...Array(3)].map((_, index) => ({
  license: LICENSES[index],
  commons: [
    'One end products',
    '12 months updates',
    '6 months of support',
    '25 Biolink Pages',
    '10 Biolink Blocks',
    'All Biolink Blocks',
    '250 Shortened Links',
    '2 File Links',
    '2 Vcard Links',
    ' 5 QR Codes ',
    '50 Projects',
    ' 5 Pixels',
    'Custom Domains',
    ' 365 days statistics retention',
    '  Additional Global Domains ',
    'Custom Back-half',
    'Deep linking',
    'Removable branding',
    'Custom Backgrounds',
    'Custom colors',
    'Dofollow links',
    'Leap link',
    ' SEO Features',
    'Extra fonts ',
    'Custom CSS',
    'Custom JS',
    'No ads',
    'Api access',
  ],
  // options: ['JavaScript version', 'TypeScript version', 'Design Resources', 'Commercial applications'],  // options  removed from here alo pricing plan page
  icons: [
    'https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_sketch.svg',
    'https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_figma.svg',
    'https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_js.svg',
    'https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_ts.svg',
  ],
}));

export const _pricingPlans = [
  {
    subscription: 'basic',
    icon: <PlanFreeIcon />,
    price: 0,
    caption: 'forever',
    lists: [
      { text: '3 prototypes', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: false },
      { text: 'Advanced security', isAvailable: false },
      { text: 'Permissions & workflows', isAvailable: false },
    ],
    labelAction: 'current plan',
  },
  {
    subscription: 'starter',
    icon: <PlanStarterIcon />,
    price: 4.99,
    caption: 'saving $24 a year',
    lists: [
      { text: '3 prototypes', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: true },
      { text: 'Advanced security', isAvailable: false },
      { text: 'Permissions & workflows', isAvailable: false },
    ],
    labelAction: 'choose starter',
  },
  {
    subscription: 'premium',
    icon: <PlanPremiumIcon />,
    price: 9.99,
    caption: 'saving $124 a year',
    lists: [
      { text: '3 prototypes', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: true },
      { text: 'Advanced security', isAvailable: true },
      { text: 'Permissions & workflows', isAvailable: true },
    ],
    labelAction: 'choose premium',
  },
];
