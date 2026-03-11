import { useMemo } from "react";
import { Games } from "../components/Types/type";

const useSearchResult = (games: Games[], search: string | null) => {
  const searchResult = useMemo(() => {
    const today = new Date();

    const gameFiltered = games.filter((game: Games) => {
      return new Date(game.date) >= today;
    });

    const sortByDateGames = [...gameFiltered].sort(
      (a: Games, b: Games): number => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateA - dateB;
      },
    );
    
    if (!search) return sortByDateGames;

    return sortByDateGames.filter((game: Games) => {
      return (
        game.team_1_name.toLowerCase().includes(search.toLowerCase()) ||
        game.team_2_name.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [games, search]);

  return searchResult;
};

export default useSearchResult;
