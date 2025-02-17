import { TROPHY, PLUS } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { getGames } from "@/assets/games";
import { useNavigate } from "react-router-dom";

interface EmptyResultsProps {
  gameFilters: string[];
}

const EmptyResults = ({ gameFilters }: EmptyResultsProps) => {
  const navigate = useNavigate();
  const games = getGames();
  return (
    <div className="col-span-3 flex flex-col items-center justify-center gap-6 py-20">
      <div className="flex flex-col items-center gap-4">
        <span className="text-retro-green-dark opacity-50 w-20 h-20">
          <TROPHY />
        </span>
        <h3 className="text-2xl font-astronaut text-center">
          No Tournaments Found
        </h3>
        <p className="text-retro-green-dark text-center max-w-md">
          {gameFilters.length > 0
            ? `No tournaments currently available for ${gameFilters
                .map((f) => games[f].name)
                .join(", ")}.`
            : "No tournaments currently available."}
        </p>
      </div>

      <Button
        onClick={() => navigate("/create-tournament")}
        className="flex items-center gap-2"
      >
        <PLUS />
        Create Tournament
      </Button>
    </div>
  );
};

export default EmptyResults;
