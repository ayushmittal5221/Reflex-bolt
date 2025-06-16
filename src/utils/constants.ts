import { Feature, Plan, SocialLink, Testimonial } from '../types';
import { BookText, Brain, BarChartIcon as ChartMixedIcon, Laptop, Layout, LineChart, Monitor, Smartphone, TestTube, TestTubes, Trophy, Zap } from 'lucide-react';

export const APP_LINKS = {
  GOOGLE_PLAY: 'https://play.google.com/store/apps/details?id=com.gooded.pgpyqs&hl=en_IN',
  APP_STORE: 'https://apps.apple.com/in/app/reflex-neet-pg-preparation/id6449163339',
  WEB_APP: 'https://app.reflexprep.com/',
};

export const PLANS: Plan[] = [
  {
    id: 1,
    title: '6 Months Plan',
    duration: 6,
    price: 999,
    features: [
      'Access to 10,000+ PYQs',
      'Basic handwritten notes',
      'Custom test creation',
      'Mobile & web access',
    ],
    buttonText: 'Buy for 6 months',
    link: 'https://www.neetprep.com/PayNow?courseOfferId=216413&app=reflex&courseId=2135',
  },
  {
    id: 2,
    title: '12 Months Plan',
    duration: 12,
    price: 1799,
    features: [
      'Access to 10,000+ PYQs',
      'Complete handwritten notes',
      'Custom test creation',
      'Mobile & web access',
      'Performance analytics',
    ],
    buttonText: 'Buy for 12 months',
    link: 'https://www.neetprep.com/PayNow?courseOfferId=216414&app=reflex&courseId=2135',
    popular: true,
  },
  {
    id: 3,
    title: '24 Months Plan',
    duration: 24,
    price: 2099,
    features: [
      'Access to 10,000+ PYQs',
      'Complete handwritten notes',
      'Custom test creation',
      'Mobile & web access',
      'Performance analytics',
      'Priority support',
    ],
    buttonText: 'Buy for 24 months',
    link: 'https://www.neetprep.com/PayNow?courseOfferId=6934605&app=reflex&courseId=2135',
  },
  {
    id: 4,
    title: '36 Months Plan',
    duration: 36,
    price: 2399,
    features: [
      'Access to 10,000+ PYQs',
      'Complete handwritten notes',
      'Custom test creation',
      'Mobile & web access',
      'Performance analytics',
      'Priority support',
      'Lifetime updates',
    ],
    buttonText: 'Buy for 36 months',
    link: 'https://www.neetprep.com/PayNow?courseOfferId=12277243&app=reflex&courseId=2135',
  },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Practice Real Exam Questions',
    description: '10,000+ topic-wise PYQs with high-yield focus to maximize accuracy and retention.',
    icon: 'TestTubes',
  },
  {
    id: 2,
    title: 'Create Custom Tests',
    description: 'Build your own mini or full-length tests by topic, subject, or chapter.',
    icon: 'Layout',
  },
  {
    id: 3,
    title: 'Access Concise & Focused Notes',
    description: 'Expert handwritten notes with clear visuals and clinical insights.',
    icon: 'BookText',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Avantika Badhana',
    text: 'Really thankful… now we don\'t need to buy expensive subscriptions.',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 2,
    name: 'Promod Kumar',
    text: 'Reflex is the perfect start for NEET PG.',
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 3,
    name: 'Sania Satkhed',
    text: 'Worth every rupee if even 30 of these questions show up!',
    image: 'https://images.pexels.com/photos/5214956/pexels-photo-5214956.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 4,
    name: 'Tanmay Gautam',
    text: 'I switched to Reflex when my other app expired—game changer.',
    image: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 5,
    name: 'Dr. Soumya Viswanath Nair',
    text: 'Affordable and focused. Reflex rescued my prep.',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export const WHY_REFLEX: Feature[] = [
  {
    id: 1,
    title: 'Legacy of Excellence',
    description: 'Built on the success of NEETprep.com (NEET UG)',
    icon: 'Trophy',
  },
  {
    id: 2,
    title: 'Anytime, Anywhere',
    description: 'Available on Android, iOS, and Web',
    icon: 'Smartphone',
  },
  {
    id: 3,
    title: 'Track Your Progress',
    description: 'In-depth analytics to identify strengths and weaknesses',
    icon: 'LineChart',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 1,
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'Facebook',
  },
  {
    id: 2,
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter',
  },
];

export const LEGAL_LINKS = [
  { id: 1, name: 'Terms of Use', url: '#' },
  { id: 2, name: 'Privacy Policy', url: '#' },
  { id: 3, name: 'Refund Policy', url: '#' },
];