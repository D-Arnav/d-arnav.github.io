import { HiBeaker, HiLightningBolt, HiCube, HiAcademicCap } from "react-icons/hi";

export const heroData = {
  name: "Arnav.",
  intro: "Hi, I'm",
  title: "I'm interested in Building perception systems for robots.",
  description: "My background spans award-winning competition robots, computer vision research, and real-world ML systems."
};

export const aboutMeData = {
  eyebrow: "Get to know me",
  title: "About",
  titleGlow: "Me",
  resume: {
    viewText: "View Résumé",
    downloadText: "Download résumé",
    filePath: "/resume.pdf"
  }
};

export const highlightsData = {
  eyebrow: "Focus Areas",
  heading: "What I ",
  headingGlow: "spend my time",
  headingContinued: " thinking about",
  highlights: [
    {
      icon: HiBeaker,
      label: "RESEARCH",
      title: "Advancing Computer Vision with impactful research",
      desc: "Designing methods for unlearning concepts from perception models."
    },
    {
      icon: HiLightningBolt,
      label: "IMPACT",
      title: "AI that performs under real constraints",
      desc: "Building accurate, large-scale, and low-latency ML systems for production."
    },
    {
      icon: HiCube,
      label: "PROJECTS",
      title: "Ideas built end-to-end",
      desc: "From LLM-powered applications to embedded systems and core algorithms."
    },
    {
      icon: HiAcademicCap,
      label: "BEYOND CODE",
      title: "Competition, leadership, and mentoring",
      desc: "World-level robotics, hackathons, and community-driven learning."
    }
  ]
};

export const consistencyData = {
  eyebrow: "Consistency",
  heading: "Development work over time.",
  description: "Progress isn't always linear, there are bursts of activity and quieter periods. I believe in showing up regularly, but also recognize that creativity and learning sometimes require breaks and reflection.",
  github: {
    username: "D-Arnav",
    years: [2026, 2025, 2024, 2023, 2022],
    chartConfig: {
      blockSize: 16,
      blockMargin: 5,
      fontSize: 14,
      showWeekdayLabels: false,
      showMonthLabels: true,
      hideColorLegend: false,
      hideTotalCount: false,
      theme: {
        light: [
          "#1a1a1a",
          "#b7053a5d",
          "#b7053a81",
          "#b7053ac7",
          "#B70539",
        ],
        dark: [
          "#1a1a1a",
          "#b7053a5d",
          "#b7053a81",
          "#cd2255b4",
          "#cd2256ff",
        ],
      }
    }
  }
};
