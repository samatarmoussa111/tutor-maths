import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import MaxWidthWrapper from "@/components/max-width-wrapper/max-width-wrapper";
import Footer from "@/components/footer/footer";

const poppins = Space_Grotesk({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prof de Maths - Cours particuliers",
  description:
    "Découvrez une approche unique des cours particuliers de mathématiques en ligne. Je propose des leçons personnalisées, adaptées à votre niveau, de la primaire au BAC. Grâce à l'utilisation de nouvelles technologies et d'outils numériques, vous bénéficierez d'un apprentissage interactif et efficace. Rejoignez-moi pour booster votre réussite en mathématiques !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className}>
        <main className="min-h-screen flex flex-col items-center">
          <MaxWidthWrapper>
            <div className="flex-1 w-full flex flex-col gap-8 items-center">
              {children}
              <Footer />
            </div>
          </MaxWidthWrapper>
        </main>
      </body>
    </html>
  );
}
