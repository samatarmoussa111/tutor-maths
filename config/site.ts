import {
  AlarmClock,
  Lightbulb,
  LucideIcon,
  Sparkles,
  Star,
} from "lucide-react";

export const siteConfig = {
  name: "Samatar Barkadleh",
  title: "Prof de Mathématiques ",
  about_me: `Diplômé d'un Master 2 en mathématiques fondamentales à
              l'Université de Besançon, j'ai enseigné les
              mathématiques à l'Université de Djibouti, à l'Université
              de EMD, et aux classes préparatoires aux grandes écoles (CPGE) du
              Lycée d'Excellence à Djibouti. Actuellement je donne des cours particuliers en ligne. Je vis aux États-Unis.`,
  links: {
    twitter: "https://twitter.com/samatarmoussa11",
    github: "https://github.com/samatarmoussa111",
    linkedin: "https://www.linkedin.com/in/samatar-barkadleh-1155b528a/",
    youtube: "https://www.youtube.com/channel/UCdQdNHEc4L84BXa-3CPS64A",
    portfolio: "https://portolio-ochre.vercel.app/",
  },
};

export type SiteConfig = typeof siteConfig;

export type adventages = {
  id: number;
  title: string;
  description: string;
  iconName?: LucideIcon;
  image?: string;
};

export const ADVENTAGES: adventages[] = [
  {
    id: 1,
    title: "Des Résultats Qui Parlent",
    description:
      "Imaginez maîtriser les sujets qui vous posent problème et améliorer vos notes de façon significative. J'ai déjà aidé plusieurs élèves à réaliser ce rêve.",

    iconName: Sparkles,
  },
  {
    id: 2,
    title: "Un Plan Juste Pour Vous",
    description: ` Chaque élève a ses propres défis. Je vous aiderai à établir un plan d'études sur-mesure pour atteindre vos objectifs personnels.`,

    iconName: Lightbulb,
  },
  {
    id: 3,
    title: "Plus de Liberté, Moins de Stress",
    description: `Entre les devoirs, les activités et la vie de famille, votre temps est précieux. C'est pourquoi j'offre des horaires flexibles pour vous accommoder.`,

    iconName: AlarmClock,
  },
];
