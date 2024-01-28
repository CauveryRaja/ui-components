import { useEffect, useRef, useState } from "react";
import "./styles.css";
import CardGrid from "../CardGrid";

const Home = () => {
  //   const [isIntersecting, setIsIntersecting] = useState();
  //   const ref = useRef(null);

  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       ([item]) => {
  //         setIsIntersecting(item.isIntersecting);
  //       },
  //       {
  //         rootMargin: "-200px",
  //       }
  //     );
  //     observer.observe(ref.current);
  //     return () => observer.disconnect();
  //   }, []);

  //   useEffect(() => {
  //     console.log("Is Intersecting", isIntersecting);
  //   }, [isIntersecting]);

  return (
    <main className="container">
      <section className="banner" />
      <CardGrid />
      <section className="contact" />
    </main>
  );
};

export default Home;
