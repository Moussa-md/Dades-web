import image1 from "../images/section1.png";
import image2 from "../images/section2.png"
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const introRef = useRef(null);
  const textRef = useRef(null);

  const [introVisible, setIntroVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const introElement = introRef.current;
    const textElement = textRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIntroVisible(true);
      },
      { threshold: 0.2 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTextVisible(true);
      },
      { threshold: 0.2 }
    );

    if (introElement) observer.observe(introElement);
    if (textElement) textObserver.observe(textElement);

    return () => {
      if (introElement) observer.unobserve(introElement);
      if (textElement) textObserver.unobserve(textElement);
    };
  }, []);

  return (
    <div>
      <div className="hero">
        <h1>Bienvenue sur Dades Web</h1>
        <h4>Construire. <span>Croître.</span> Élever.</h4>
      </div>

      <section className="sct1">
        <div
          ref={introRef}
          className={`intro ${introVisible ? "zoomInDown" : ""}`}
        >
          <h1>Que faisons-nous ?</h1>
          <img src={image1} alt="what we do?" className="image1" />
        </div>

        <p
          ref={textRef}
          className={`intro-text ${textVisible ? "flipInX" : ""}`}
        >
              Chez Dades Web, nous concevons des solutions digitales modernes 
              et adaptées aux besoins spécifiques de chaque entreprise. Nous créons
              des sites web professionnels, à la fois esthétiques, rapides et faciles
              à utiliser, afin d’offrir une expérience utilisateur fluide et agréable.
              Notre travail ne se limite pas au design : nous aidons également nos
              clients à améliorer leur visibilité en ligne grâce à des stratégies d’optimisation efficaces,
              un meilleur référencement et une structure de site bien pensée. L’objectif
              est de permettre à chaque marque de développer sa présence sur internet,
              d’attirer plus de visiteurs et de transformer cette visibilité en véritable opportunité de croissance.
        </p>
      </section>
      <section className="sct2">
        <div
          className="intro2" >
        <h1>
          Pourquoi nous ?
        </h1>
        <img src={image2}  alt="Why us?" className="image2" />
        </div>
        <p
          className="intro2-text">
          Dades Web ne se limite pas à créer des sites web, mais construit de véritables
          expériences digitales. Chaque projet est conçu sur mesure pour répondre aux
          objectifs du client, en combinant design moderne, performance et simplicité.
          L’objectif est de proposer des solutions efficaces qui améliorent la visibilité
          et l’impact des marques sur le web. Travailler avec nous, c’est choisir une approche claire
          , créative et orientée résultats, où chaque détail est pensé pour faire évoluer votre présence en ligne.
        </p>
      </section>
    </div>
  );
}