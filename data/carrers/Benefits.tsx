import {
  Home,
  UtensilsCrossed,
  Heart,
  Calendar,
  Award,
  Umbrella,
} from 'lucide-react';
export const benefits = [
  {
    icon: <Home className="w-12 h-12 text-primary" />,
    title: 'Free accommodation with all benefits',
    description:
      'Enjoy free stay near our office with all the benefits and experience a stress free commute.',
  },
  {
    icon: <UtensilsCrossed className="w-12 h-12 text-primary" />,
    title: 'Access to free food from our kitchen',
    description:
      'Have a delightful breakfast, lunch, dinner, tea/coffee from our hygienic kitchen.',
  },
  {
    icon: <Heart className="w-12 h-12 text-primary" />,
    title: 'Health insurance for you and your family',
    description:
      'Your health comes first and we got you covered with a comprehensive package to support you.',
  },
  {
    icon: <Calendar className="w-12 h-12 text-primary" />,
    title: 'Pre approved leaves by default',
    description:
      'Sick leave? Time to relax, rejuvenate? All your leaves are pre approved so that you can come back refreshed.',
  },
  {
    icon: <Award className="w-12 h-12 text-primary" />,
    title: 'Instant reward for your performance',
    description:
      'We recognize the works of our employees immediately and effectively.',
  },
  {
    icon: <Umbrella className="w-12 h-12 text-primary" />,
    title: 'Well protected term insurance',
    description:
      'We provide a great backup for your loved ones and their future.',
  },
];

export const headings = {
  tag: 'Our Benefits',
  title: ['Benefits and ', 'Perks'],
  subtitle:"Our employees are the pillars of our company and here's how we take care of their well-being!"
  
};