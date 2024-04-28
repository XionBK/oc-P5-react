import { useRef, useEffect, useState } from "react";
/**
 * 
 * @param {Object} logement 
 * @returns 
 */
export function Card ({logement}) {

    /***
     * Amelioration visuel possible
     * avec IntersectionObserver
     */
    /*const cardRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(cardRef.current)
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1, // Ajustez ce seuil selon vos besoins
        }
      );
  
      if (cardRef.current) {
        observer.observe(cardRef.current)
      }
  
      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current)
        }
      };
    }, []);*/

    // <a href={'/fiche-logement/' + logement.id} ref={cardRef} className={`card-anime ${isVisible ? 'visible' : ''}`}>
    return <a href={'/fiche-logement/' + logement.id} >
        <article className="card">
            <img src={logement.cover} alt={logement.title} />
            <h2 className="card-title">{logement.title}</h2>
        </article>
    </a>
}