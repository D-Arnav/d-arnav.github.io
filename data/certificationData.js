import { VscAzure } from "react-icons/vsc";
import { SiMongodb, SiGithub } from 'react-icons/si';
import { PiCodeSimpleBold } from "react-icons/pi";

export const certificationData = [
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Apr 2024',
    credentialId: '8B2EBBDB971B107B',
    icon: VscAzure,
    color: '#ffffff',
  },
  {
    name: 'MongoDB Certified Developer, Associate (C100DEV)',
    issuer: 'MongoDB',
    date: 'Mar 2025',
    icon: SiMongodb,
    color: '#FFFFFF',
    link: 'https://www.credly.com/badges/1555a74a-b449-4820-b76d-8727c67645ef/print'
  },
  {
    name: 'GitHub Foundations Certificate',
    issuer: 'GitHub',
    date: 'Nov 2024', // needs update
    icon: SiGithub,
    color: '#FFFFFF',
    link: 'https://www.credly.com/badges/852a69fa-01c9-44d7-952a-431262f1222c'
  },
  {
    name: 'National Scholar Development Program',
    issuer: 'The Dexterity Global Group',
    date: 'Jan 2024',
    icon: PiCodeSimpleBold,
    color: '#FFFFFF',
  },
];
