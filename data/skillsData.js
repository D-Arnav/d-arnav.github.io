import {
  SiPython, SiPytorch, SiOpencv, SiNumpy, SiFastapi,
  SiDocker, SiGit, SiLinux, SiCplusplus, SiNvidia, SiRos, SiAmazonwebservices
} from 'react-icons/si';
import SlurmIcon from '../public/icons/SlurmIcon.jsx';

export const skillsData = [
  {
    category: 'Programming',
    items: [
      { name: 'Python', icon: SiPython, color: '#ffffff' },
      { name: 'PyTorch', icon: SiPytorch, color: '#ffffff' },
      { name: 'NumPy', icon: SiNumpy, color: '#ffffff' },
      { name: 'OpenCV', icon: SiOpencv, color: '#ffffff' },
      { name: 'C++', icon: SiCplusplus, color: '#ffffff' },
      { name: 'CUDA', icon: SiNvidia, color: '#ffffff' },
      { name: 'ROS2', icon: SiRos, color: '#ffffff' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Linux/Bash', icon: SiLinux, color: '#ffffff' },
      { name: 'SLURM', icon: SlurmIcon, color: '#ffffff' },
      { name: 'Docker', icon: SiDocker, color: '#ffffff' },
      { name: 'AWS', icon: SiAmazonwebservices, color: '#ffffff' },
      { name: 'FastAPI', icon: SiFastapi, color: '#ffffff' },
      { name: 'Git', icon: SiGit, color: '#ffffff' },
    ],
  }
];


