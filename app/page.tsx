import Header from "@/components/header/header";
import { ADVENTAGES } from "../config/site";
import { Goal, Laptop, Rocket, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdventagesCard from "@/components/cards/adventages-card";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col space-y-6 md:space-y-10 mt-6 pb-10">
        <div className="flex flex-col  md:px-6">
          <div className="flex flex-col space-y-2">
            <span className="font-semibold flex items-center gap-x-2 text-green-400">
              {" "}
              <UserRound className="h-4 w-4 " /> Qui suis-je ?
            </span>
            <span className="text-foreground/90 leading-7">
              Diplômé d&apos;un <span className="text-primary">Master 2</span>{" "}
              en mathématiques fondamentales à l&apos;Université de Besançon
              (France), j&apos;ai enseigné les mathématiques à l&apos;Université
              de Djibouti, à l&apos;Université de EMD, et aux{" "}
              <span className="text-primary">
                classes préparatoires aux grandes écoles
              </span>{" "}
              (CPGE) du Lycée d&apos;Excellence à Djibouti. Actuellement je
              donne des
              <span className="text-primary"> cours particuliers</span> en
              ligne. Je vis aux États-Unis.
            </span>
          </div>
        </div>
        <div className="flex flex-col  md:px-6">
          <div className="flex flex-col space-y-2">
            <span className="font-semibold flex items-center gap-x-2 text-green-400">
              {" "}
              <Laptop className="h-4 w-4 " /> Ce que je fais
            </span>

            <span className="text-foreground/90 leading-7">
              Vous cherchez à booster vos notes en maths ou à aider votre enfant
              à réussir ? Vous êtes au bon endroit. Je donne des cours
              particuliers en mathématiques, allant du niveau primaire
              jusqu&apos;au BAC, en utilisant les nouvelles technologies et les
              outils numériques.
            </span>
          </div>
        </div>
        <div className="flex flex-col  md:px-6">
          <div className="flex flex-col space-y-4">
            <span className="font-semibold flex items-center gap-x-2 text-green-400">
              {" "}
              <Goal className="h-4 w-4 " /> Ce que vous allez gagner
            </span>

            <div className="flex flex-col space-y-8 md:space-y-4 md:px-2">
              {ADVENTAGES.map((adventage) => (
                <AdventagesCard
                  key={adventage.id}
                  title={adventage.title}
                  description={adventage.description}
                  iconName={adventage.iconName}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col  md:px-6">
          <div className="flex flex-col space-y-2">
            <span className="font-semibold flex items-center gap-x-2 text-green-400">
              {" "}
              <Rocket className="h-4 w-4 " /> Passer à l&apos;action
            </span>

            <span className="text-foreground/90 leading-7">
              Le temps file, et chaque moment compte. Ne manquez pas cette
              opportunité de changer la trajectoire de votre réussite ou celle
              de votre enfant. Contactez-moi dès maintenant pour démarrer cette
              transformation.
            </span>
            <Button>Réserver une séance gratuite</Button>
          </div>
        </div>
      </div>
    </>
  );
}
