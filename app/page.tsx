"use client";

import { Button } from "@/components/ui/button";
import ScrollDownButton from "@/components/ScrollDownButton";
import { useRouter } from "next/navigation";
import SkillProgress from "@/components/SkillProgress";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import Ordinateur from "./images/ordinateur.png";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

export default function Home() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");

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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3003/contact", {
        prenom: prenom,
        nom: nom,
        telephone: telephone,
        email: email,
        objet: objet,
        message: message,
      });
      console.log(response);
      toast({
        variant: "default",
        title: "Succès",
        description: response.data.message,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description:
            error.response?.data?.message || "Une erreur est survenue",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Une erreur inattendue s'est produite",
        });
      }
    }
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4">
          <Button onClick={scrollToTop} variant="outline" size="icon">
            <FaArrowUp className="h-6 w-6" />
          </Button>
        </div>
      )}
      <div className="bg-gray-800 text-gray-300">
        <section className="text-center py-16 md:py-32 lg:py-48">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-16">
            Salut, je m&apos;appelle Mathéo !
          </h1>
          <p className="text-md md:text-lg lg:text-xl mb-8 mx-4">
            Je crée des sites web réactifs et efficaces qui apportent de la
            valeur à votre entreprise.
          </p>
          <Button size="lg" variant="btn">
            Voir mon travail
          </Button>
          <ScrollDownButton targetId="services" />
        </section>
        <div id="services" className="mb-[100px] mt-[-100px]"></div>
        <section className="text-center mt-[60px] md:mt-[80px] lg:mt-[100px]">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-12">
            Mes services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                Développement web
              </h3>
              <p className="mb-4">
                Création de sites web modernes et réactifs, adaptés à tous les
                appareils.
              </p>
              <Button
                variant="btn"
                size="sm"
                onClick={() => router.push("/developpement-web")}
              >
                En savoir plus
              </Button>
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                Optimisation SEO
              </h3>
              <p className="text-md md:text-lg lg:text-xl mb-4">
                Optimisation de votre site web pour les moteurs de recherche.
              </p>
              <Button
                variant="btn"
                size="sm"
                onClick={() => router.push("/seo")}
              >
                En savoir plus
              </Button>
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                Développement mobile
              </h3>
              <p className="text-md md:text-lg lg:text-xl mb-4">
                Création de sites web mobiles compatibles avec iOS et Android.
              </p>
              <Button
                variant="btn"
                size="sm"
                onClick={() => router.push("/developpement-mobile")}
              >
                En savoir plus
              </Button>
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                Intégration de données
              </h3>
              <p className="text-md md:text-lg lg:text-xl mb-4">
                Intégration de données de votre base de données dans votre site
                web.
              </p>
              <Button
                variant="btn"
                size="sm"
                onClick={() => router.push("/integration-donnees")}
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </section>
        <div id="competences" className="mb-[100px]"></div>
        <section className="text-center mt-[60px] md:mt-[80px] lg:mt-[100px]">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8">
            Mes compétences
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                HTML5
              </h3>
              <SkillProgress percentage={95} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                CSS3
              </h3>
              <SkillProgress percentage={85} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                JavaScript
              </h3>
              <SkillProgress percentage={80} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                React
              </h3>
              <SkillProgress percentage={75} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                Next.js
              </h3>
              <SkillProgress percentage={70} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                Node.js
              </h3>
              <SkillProgress percentage={65} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                WordPress
              </h3>
              <SkillProgress percentage={90} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                MySQL
              </h3>
              <SkillProgress percentage={80} />
            </div>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                PHP
              </h3>
              <SkillProgress percentage={75} />
            </div>
          </div>
        </section>
        <div id="portfolio" className="mb-[100px]"></div>
        <section className="text-center mt-[60px] md:mt-[80px] lg:mt-[100px] pb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8">
            Mes projets récents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
            {[
              {
                title: "Mon portfolio",
                description:
                  "Portfolio personnel pour présenter mes compétences et mes projets.",
                technologies: [
                  {
                    name: "Next.js",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Tailwind CSS",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path
                          className="fill-gray-400"
                          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "TypeScript",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path d="M22.67 47h99.67v73.67H22.67z" />
                        <path
                          data-name="original"
                          className="fill-gray-400"
                          d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                        />
                      </svg>
                    ),
                  },
                ],
                link: "/portfolio",
              },
              {
                title: "Panel administrateur - Jwin",
                description:
                  "Panel administrateur pour gérer les différentes applications dans mon entreprise.",
                technologies: [
                  {
                    name: "Next.js",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Tailwind CSS",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path
                          className="fill-gray-400"
                          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "TypeScript",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path d="M22.67 47h99.67v73.67H22.67z" />
                        <path
                          data-name="original"
                          className="fill-gray-400"
                          d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Express",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" />
                      </svg>
                    ),
                  },
                  {
                    name: "MySQL",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Node.js",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z" />
                      </svg>
                    ),
                  },
                ],
                link: "/portfolio",
              },
              {
                title: "Application - Jwin",
                description:
                  "Cahier de liaison pour les différents types d'établissement (CHR).",
                technologies: [
                  {
                    name: "React Native",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <g>
                          <circle cx="64" cy="64" r="11.4" />
                          <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
                        </g>
                      </svg>
                    ),
                  },
                  {
                    name: "Tailwind CSS",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path
                          className="fill-gray-400"
                          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Express",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" />
                      </svg>
                    ),
                  },
                  {
                    name: "MySQL",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Node.js",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z" />
                      </svg>
                    ),
                  },
                ],
                link: "/portfolio",
              },
              {
                title: "Plugin - Minecraft",
                description:
                  "Plugin pour le jeu Minecraft pour la construction d'un mode de jeu inédit.",
                technologies: [
                  {
                    name: "Java",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                        className="h-6 w-6 fill-white"
                      >
                        <path d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" />
                        <path
                          className="fill-gray-400"
                          d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
                        />
                        <path
                          className="fill-gray-400"
                          d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
                        />
                        <path
                          className="fill-gray-400"
                          d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
                        />
                        <path
                          className="fill-gray-400"
                          d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
                        />
                      </svg>
                    ),
                  },
                ],
                link: "/portfolio",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[60%] p-8 rounded-lg shadow-lg flex flex-col justify-between"
                style={{ minHeight: "300px" }}
              >
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-md md:text-lg lg:text-xl mb-4">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center mb-4">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center"
                      >
                        {tech.icon}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  variant="btn"
                  size="sm"
                  className="w-[150px] mx-auto"
                  onClick={() => router.push(project.link)}
                >
                  Voir le projet
                </Button>
              </div>
            ))}
          </div>
        </section>
        <div id="a-propos" className="mb-[100px]"></div>
        <section className="text-center mt-[60px] md:mt-[80px] lg:mt-[100px] pb-8">
          <div className="flex flex-col gap-8 justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold">À propos</h2>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[70%] p-8 gap-6 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex md:flex-row justify-between gap-10">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                    Un développeur web passionné !
                  </h3>
                  <p className="text-sm md:text-md lg:text-lg mb-4 text-left">
                    Jeune développeur web depuis mes 13 ans, j&apos;ai toujours
                    adoré travailler, m&apos;informer dans ce domaine,
                    l&apos;informatique, pour pouvoir concrétiser mes idées.
                  </p>
                </div>
                <div>
                  <Image src={Ordinateur} alt="Ordinateur" width={2000} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                    Expérience en développement
                  </h3>
                  <p className="text-sm md:text-md lg:text-lg mb-4 text-left">
                    J&apos;ai développé de nombreux sites web, applications
                    mobiles. Je suis capable de travailler avec les technologies
                    les plus récentes, comme React, Next.js, et TypeScript.
                  </p>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-left">
                    Un tarif adapté à votre porjet
                  </h3>
                  <p className="text-sm md:text-md lg:text-lg mb-4 text-left">
                    Je propose un tarif personnalisé pour vos besoins, en
                    fonction de votre budget, de la complexité de votre projet,
                    et de vos attentes en termes de développement et de support.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex md:flex-row justify-center items-center gap-10 mt-10">
                <div className="flex flex-col md:flex md:flex-row items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-28 w-28"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M16.4425 7.32787C16.7196 7.01999 17.1938 6.99503 17.5017 7.27213L19.2392 8.83587C19.9756 9.49853 20.5864 10.0482 21.0058 10.5468C21.4468 11.071 21.7603 11.6343 21.7603 12.3296C21.7603 13.0249 21.4468 13.5882 21.0058 14.1124C20.5864 14.611 19.9756 15.1607 19.2392 15.8233L17.5017 17.3871C17.1938 17.6642 16.7196 17.6392 16.4425 17.3313C16.1654 17.0234 16.1904 16.5492 16.4983 16.2721L18.1947 14.7453C18.9826 14.0362 19.5138 13.5558 19.8579 13.1468C20.1882 12.7542 20.2603 12.525 20.2603 12.3296C20.2603 12.1342 20.1882 11.905 19.8579 11.5124C19.5138 11.1034 18.9826 10.623 18.1947 9.91389L16.4983 8.38707C16.1904 8.10997 16.1654 7.63576 16.4425 7.32787Z"
                        fill="#ffffff"
                      />
                      <path
                        d="M7.50178 8.38707C7.80966 8.10997 7.83462 7.63576 7.55752 7.32787C7.28043 7.01999 6.80621 6.99503 6.49833 7.27213L4.76084 8.83587C4.0245 9.49853 3.41369 10.0482 2.99428 10.5468C2.55325 11.071 2.23975 11.6343 2.23975 12.3296C2.23975 13.0249 2.55325 13.5882 2.99428 14.1124C3.41369 14.611 4.02449 15.1607 4.76082 15.8233L6.49833 17.3871C6.80621 17.6642 7.28043 17.6392 7.55752 17.3313C7.83462 17.0234 7.80966 16.5492 7.50178 16.2721L5.80531 14.7453C5.01743 14.0362 4.48623 13.5558 4.14213 13.1468C3.81188 12.7542 3.73975 12.525 3.73975 12.3296C3.73975 12.1342 3.81188 11.905 4.14213 11.5124C4.48623 11.1034 5.01743 10.623 5.80531 9.91389L7.50178 8.38707Z"
                        fill="#ffffff"
                      />
                      <path
                        opacity="0.5"
                        d="M14.1816 4.2755C14.5817 4.3827 14.8191 4.79396 14.7119 5.19406L10.7383 20.0238C10.6311 20.4239 10.2198 20.6613 9.81974 20.5541C9.41964 20.4469 9.18221 20.0356 9.28941 19.6355L13.263 4.80583C13.3702 4.40573 13.7815 4.16829 14.1816 4.2755Z"
                        fill="#ffffff"
                      />
                    </g>
                  </svg>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-3xl md:text-4xl font-bold border-b-2 border-gray-400">
                      3
                    </p>
                    <p className="text-sm md:text-md lg:text-lg mt-2 md:mt-0">
                      Années d&apos;expérience
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex md:flex-row items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-28 w-28"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 8.25C9.92894 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92894 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
                        fill="#ffffff"
                      ></path>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9747 1.25C11.5303 1.24999 11.1592 1.24999 10.8546 1.27077C10.5375 1.29241 10.238 1.33905 9.94761 1.45933C9.27379 1.73844 8.73843 2.27379 8.45932 2.94762C8.31402 3.29842 8.27467 3.66812 8.25964 4.06996C8.24756 4.39299 8.08454 4.66251 7.84395 4.80141C7.60337 4.94031 7.28845 4.94673 7.00266 4.79568C6.64714 4.60777 6.30729 4.45699 5.93083 4.40743C5.20773 4.31223 4.47642 4.50819 3.89779 4.95219C3.64843 5.14353 3.45827 5.3796 3.28099 5.6434C3.11068 5.89681 2.92517 6.21815 2.70294 6.60307L2.67769 6.64681C2.45545 7.03172 2.26993 7.35304 2.13562 7.62723C1.99581 7.91267 1.88644 8.19539 1.84541 8.50701C1.75021 9.23012 1.94617 9.96142 2.39016 10.5401C2.62128 10.8412 2.92173 11.0602 3.26217 11.2741C3.53595 11.4461 3.68788 11.7221 3.68786 12C3.68785 12.2778 3.53592 12.5538 3.26217 12.7258C2.92169 12.9397 2.62121 13.1587 2.39007 13.4599C1.94607 14.0385 1.75012 14.7698 1.84531 15.4929C1.88634 15.8045 1.99571 16.0873 2.13552 16.3727C2.26983 16.6469 2.45535 16.9682 2.67758 17.3531L2.70284 17.3969C2.92507 17.7818 3.11058 18.1031 3.28089 18.3565C3.45817 18.6203 3.64833 18.8564 3.89769 19.0477C4.47632 19.4917 5.20763 19.6877 5.93073 19.5925C6.30717 19.5429 6.647 19.3922 7.0025 19.2043C7.28833 19.0532 7.60329 19.0596 7.8439 19.1986C8.08452 19.3375 8.24756 19.607 8.25964 19.9301C8.27467 20.3319 8.31403 20.7016 8.45932 21.0524C8.73843 21.7262 9.27379 22.2616 9.94761 22.5407C10.238 22.661 10.5375 22.7076 10.8546 22.7292C11.1592 22.75 11.5303 22.75 11.9747 22.75H12.0252C12.4697 22.75 12.8407 22.75 13.1454 22.7292C13.4625 22.7076 13.762 22.661 14.0524 22.5407C14.7262 22.2616 15.2616 21.7262 15.5407 21.0524C15.686 20.7016 15.7253 20.3319 15.7403 19.93C15.7524 19.607 15.9154 19.3375 16.156 19.1985C16.3966 19.0596 16.7116 19.0532 16.9974 19.2042C17.3529 19.3921 17.6927 19.5429 18.0692 19.5924C18.7923 19.6876 19.5236 19.4917 20.1022 19.0477C20.3516 18.8563 20.5417 18.6203 20.719 18.3565C20.8893 18.1031 21.0748 17.7818 21.297 17.3969L21.3223 17.3531C21.5445 16.9682 21.7301 16.6468 21.8644 16.3726C22.0042 16.0872 22.1135 15.8045 22.1546 15.4929C22.2498 14.7697 22.0538 14.0384 21.6098 13.4598C21.3787 13.1586 21.0782 12.9397 20.7378 12.7258C20.464 12.5538 20.3121 12.2778 20.3121 11.9999C20.3121 11.7221 20.464 11.4462 20.7377 11.2742C21.0783 11.0603 21.3788 10.8414 21.6099 10.5401C22.0539 9.96149 22.2499 9.23019 22.1547 8.50708C22.1136 8.19546 22.0043 7.91274 21.8645 7.6273C21.7302 7.35313 21.5447 7.03183 21.3224 6.64695L21.2972 6.60318C21.0749 6.21825 20.8894 5.89688 20.7191 5.64347C20.5418 5.37967 20.3517 5.1436 20.1023 4.95225C19.5237 4.50826 18.7924 4.3123 18.0692 4.4075C17.6928 4.45706 17.353 4.60782 16.9975 4.79572C16.7117 4.94679 16.3967 4.94036 16.1561 4.80144C15.9155 4.66253 15.7524 4.39297 15.7403 4.06991C15.7253 3.66808 15.686 3.2984 15.5407 2.94762C15.2616 2.27379 14.7262 1.73844 14.0524 1.45933C13.762 1.33905 13.4625 1.29241 13.1454 1.27077C12.8407 1.24999 12.4697 1.24999 12.0252 1.25H11.9747ZM10.5216 2.84515C10.5988 2.81319 10.716 2.78372 10.9567 2.76729C11.2042 2.75041 11.5238 2.75 12 2.75C12.4762 2.75 12.7958 2.75041 13.0432 2.76729C13.284 2.78372 13.4012 2.81319 13.4783 2.84515C13.7846 2.97202 14.028 3.21536 14.1548 3.52165C14.1949 3.61826 14.228 3.76887 14.2414 4.12597C14.271 4.91835 14.68 5.68129 15.4061 6.10048C16.1321 6.51968 16.9974 6.4924 17.6984 6.12188C18.0143 5.9549 18.1614 5.90832 18.265 5.89467C18.5937 5.8514 18.9261 5.94047 19.1891 6.14228C19.2554 6.19312 19.3395 6.27989 19.4741 6.48016C19.6125 6.68603 19.7726 6.9626 20.0107 7.375C20.2488 7.78741 20.4083 8.06438 20.5174 8.28713C20.6235 8.50382 20.6566 8.62007 20.6675 8.70287C20.7108 9.03155 20.6217 9.36397 20.4199 9.62698C20.3562 9.70995 20.2424 9.81399 19.9397 10.0041C19.2684 10.426 18.8122 11.1616 18.8121 11.9999C18.8121 12.8383 19.2683 13.574 19.9397 13.9959C20.2423 14.186 20.3561 14.29 20.4198 14.373C20.6216 14.636 20.7107 14.9684 20.6674 15.2971C20.6565 15.3799 20.6234 15.4961 20.5173 15.7128C20.4082 15.9355 20.2487 16.2125 20.0106 16.6249C19.7725 17.0373 19.6124 17.3139 19.474 17.5198C19.3394 17.72 19.2553 17.8068 19.189 17.8576C18.926 18.0595 18.5936 18.1485 18.2649 18.1053C18.1613 18.0916 18.0142 18.045 17.6983 17.8781C16.9973 17.5075 16.132 17.4803 15.4059 17.8995C14.68 18.3187 14.271 19.0816 14.2414 19.874C14.228 20.2311 14.1949 20.3817 14.1548 20.4784C14.028 20.7846 13.7846 21.028 13.4783 21.1549C13.4012 21.1868 13.284 21.2163 13.0432 21.2327C12.7958 21.2496 12.4762 21.25 12 21.25C11.5238 21.25 11.2042 21.2496 10.9567 21.2327C10.716 21.2163 10.5988 21.1868 10.5216 21.1549C10.2154 21.028 9.97201 20.7846 9.84514 20.4784C9.80512 20.3817 9.77195 20.2311 9.75859 19.874C9.72896 19.0817 9.31997 18.3187 8.5939 17.8995C7.86784 17.4803 7.00262 17.5076 6.30158 17.8781C5.98565 18.0451 5.83863 18.0917 5.73495 18.1053C5.40626 18.1486 5.07385 18.0595 4.81084 17.8577C4.74458 17.8069 4.66045 17.7201 4.52586 17.5198C4.38751 17.314 4.22736 17.0374 3.98926 16.625C3.75115 16.2126 3.59171 15.9356 3.4826 15.7129C3.37646 15.4962 3.34338 15.3799 3.33248 15.2971C3.28921 14.9684 3.37828 14.636 3.5801 14.373C3.64376 14.2901 3.75761 14.186 4.0602 13.9959C4.73158 13.5741 5.18782 12.8384 5.18786 12.0001C5.18791 11.1616 4.73165 10.4259 4.06021 10.004C3.75769 9.81389 3.64385 9.70987 3.58019 9.62691C3.37838 9.3639 3.28931 9.03149 3.33258 8.7028C3.34348 8.62001 3.37656 8.50375 3.4827 8.28707C3.59181 8.06431 3.75125 7.78734 3.98935 7.37493C4.22746 6.96253 4.3876 6.68596 4.52596 6.48009C4.66055 6.27983 4.74468 6.19305 4.81093 6.14222C5.07395 5.9404 5.40636 5.85133 5.73504 5.8946C5.83873 5.90825 5.98576 5.95483 6.30173 6.12184C7.00273 6.49235 7.86791 6.51962 8.59394 6.10045C9.31998 5.68128 9.72896 4.91837 9.75859 4.12602C9.77195 3.76889 9.80512 3.61827 9.84514 3.52165C9.97201 3.21536 10.2154 2.97202 10.5216 2.84515Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-3xl md:text-4xl font-bold border-b-2 border-gray-400">
                      5
                    </p>
                    <p className="text-sm md:text-md lg:text-lg mt-2 md:mt-0">
                      Projets terminés
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex md:flex-row items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-28 w-28"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M7 14L9.29289 11.7071C9.68342 11.3166 10.3166 11.3166 10.7071 11.7071L12.2929 13.2929C12.6834 13.6834 13.3166 13.6834 13.7071 13.2929L17 10M17 10V12.5M17 10H14.5"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-3xl md:text-4xl font-bold border-b-2 border-gray-400">
                      3
                    </p>
                    <p className="text-sm md:text-md lg:text-lg mt-2 md:mt-0">
                      Clients satisfaits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="contact" className="mb-[100px]"></div>
        <section className="text-center mt-[60px] md:mt-[80px] lg:mt-[100px] pb-8">
          <div className="flex flex-col gap-8 justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
            <div className="bg-gray-700 w-[90%] md:w-[80%] lg:w-[70%] p-8 gap-6 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
                Vous avez un projet ? <br/>Contactez-moi !
              </h3>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Nom"
                  onChange={(e) => setNom(e.target.value)}
                  className="px-4 py-2 bg-gray-800 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Prénom"
                  onChange={(e) => setPrenom(e.target.value)}
                  className="px-4 py-2 bg-gray-800 rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Numéro de téléphone"
                  onChange={(e) => setTelephone(e.target.value)}
                  className="px-4 py-2 bg-gray-800 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 bg-gray-800 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Objet"
                  onChange={(e) => setObjet(e.target.value)}
                  className="px-4 py-2 bg-gray-800 rounded-lg"
                />
                <textarea
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-4 py-2 bg-gray-800 rounded-lg"
                ></textarea>
                <Button
                  variant="btn"
                  onClick={handleSubmit}
                  className="w-[150px] mx-auto"
                >
                  Envoyer
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
