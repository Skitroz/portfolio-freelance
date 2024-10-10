"use client";

import { Button } from "@/components/ui/button";
import ScrollDownButton from "@/components/ScrollDownButton";
import { useRouter } from "next/navigation";
import SkillProgress from "@/components/SkillProgress";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      { isVisible && (
      <div className="fixed bottom-4 right-4">
        <Button onClick={scrollToTop} variant="outline" size="icon">
          <FaArrowUp className="h-6 w-6" />
        </Button>
      </div>
      )}
      <div className="bg-gray-800 text-gray-300">
        <section className="text-center py-16 md:py-32 lg:py-48">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-16">Salut, je m`&apos;`appelle Mathéo !</h1>
          <p className="text-md md:text-lg lg:text-xl mb-8 mx-4">
            Je crée des sites web réactifs et efficaces qui apportent de la valeur à votre entreprise.
          </p>
          <Button size="lg" variant="btn">Voir mon travail</Button>
          <ScrollDownButton targetId="services" />
        </section>
        <div id="services" className="mb-[100px] mt-[-100px]"></div>
        <section>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12">Mes services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Développement web</h3>
              <p className="mb-4">
                Création de sites web modernes et réactifs, adaptés à tous les appareils.
              </p>
              <Button variant="btn" size="sm" onClick={() => router.push("/developpement-web")}>
                En savoir plus
              </Button>
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Optimisation SEO</h3>
              <p className="text-md md:text-lg lg:text-xl mb-4">
                Optimisation de votre site web pour les moteurs de recherche.
              </p>
              <Button variant="btn" size="sm" onClick={() => router.push("/seo")}>
                En savoir plus
              </Button>
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Développement mobile</h3>
              <p className="text-md md:text-lg lg:text-xl mb-4">
                Création de sites web mobiles compatibles avec iOS et Android.
              </p>
              <Button variant="btn" size="sm" onClick={() => router.push("/developpement-mobile")}>
                En savoir plus
              </Button>
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Intégration de données</h3>
              <p className="text-md md:text-lg lg:text-xl mb-4">
                Intégration de données de votre base de données dans votre site web.
              </p>
              <Button variant="btn" size="sm" onClick={() => router.push("/integration-donnees")}>
                En savoir plus
              </Button>
            </div>
          </div>
        </section>
        <div id="competences" className="mb-[100px]"></div>
        <section className="text-center mt-[60px] md:mt-[80px]] lg:mt-[100px]">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8">Mes compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">HTML5</h3>
              <SkillProgress percentage={95} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">CSS3</h3>
              <SkillProgress percentage={85} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">JavaScript</h3>
              <SkillProgress percentage={80} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">React</h3>
              <SkillProgress percentage={75} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Next.js</h3>
              <SkillProgress percentage={70} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Node.js</h3>
              <SkillProgress percentage={65} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">WordPress</h3>
              <SkillProgress percentage={90} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">MySQL</h3>
              <SkillProgress percentage={80} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">PHP</h3>
              <SkillProgress percentage={75} />
            </div>
          </div>
        </section>
        <div id="competences" className="mb-[100px]"></div>
        <section className="text-center mt-[60px] md:mt-[80px]] lg:mt-[100px] pb-8" id="portfolio">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8">Mes projets récents</h2>
        </section>
      </div>
    </>
  );
}