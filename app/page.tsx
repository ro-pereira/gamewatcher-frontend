// "use client";

// import { Hero } from "@/src/Layout/Hero";
// import { Main } from "@/src/Layout/Main";
// import { Games } from "@/src/Types/type";
// import { useEffect, useMemo, useState } from "react";
// const url = "http://localhost:3001";
// const today = new Date();

// const Home = () => {
//   const [gamesResult, setGamesResult] = useState<Games[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function loadGsap() {
//       const gsap = (await import("gsap")).default;
//       const { ScrollTrigger } = await import("gsap/ScrollTrigger");
//       const { ScrollSmoother } = await import("gsap/ScrollSmoother");

//       gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//       ScrollSmoother.create({
//         wrapper: "#smooth-wrapper",
//         content: "#smooth-content",
//         smooth: 2,
//         effects: true,
//       });
//     }
//     loadGsap();
//   }, []);

//   useEffect(() => {
//     const fetchDataGames = async () => {
//       try {
//         const result = await fetch(`${url}/allMatchs`);
//         const responseData: Games[] = await result.json();

//         setGamesResult(responseData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchDataGames();
//   }, []);

//   const upcomingGamesList = useMemo(() => {
//     return gamesResult
//       .filter((game) => new Date(game.date) >= today)
//       .sort((a, b) => {
//         return new Date(a.date).getTime() - new Date(b.date).getTime();
//       });
//   }, [gamesResult]);

//   return (
//     <div id="smooth-wrapper">
//       <div id="smooth-content">
//         <Hero upcomingGamesList={upcomingGamesList} />
//         <Main upcomingGamesList={upcomingGamesList} isLoading={isLoading} />
//       </div>
//     </div>
//   );
// };

// export default Home;

"use client";

import { Hero } from "@/src/Layout/Hero";
import { Main } from "@/src/Layout/Main";
import { Games } from "@/src/Types/type";
import { useEffect, useMemo, useState } from "react";

const getApiUrl = () => {
  if (typeof window === "undefined") {
    return "http://localhost:3001";
  }

  return `http://${window.location.hostname}:3001`;
};

const today = new Date();

const Home = () => {
  const [gamesResult, setGamesResult] = useState<Games[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadGsap() {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollSmoother } = await import("gsap/ScrollSmoother");

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
      });
    }

    loadGsap();
  }, []);

  useEffect(() => {
    const fetchDataGames = async () => {
      try {
        const url = getApiUrl();

        const result = await fetch(`${url}/allMatchs`);

        const responseData: Games[] = await result.json();

        setGamesResult(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataGames();
  }, []);

  const upcomingGamesList = useMemo(() => {
    return gamesResult
      .filter((game) => new Date(game.date) >= today)
      .sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
  }, [gamesResult]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
          <Hero upcomingGamesList={upcomingGamesList} />
          <Main upcomingGamesList={upcomingGamesList} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Home;
