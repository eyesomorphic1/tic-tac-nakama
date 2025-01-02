import { Card } from "@/components/ui/card";

interface PlayerCardProps {
  name: string;
  score?: number;
  isActive?: boolean;
  symbol?: 'X' | 'O';
}

export const PlayerCard = ({ name, score = 0, isActive = false, symbol }: PlayerCardProps) => {
  return (
    <Card className={cn(
      "glass-card p-4 transition-all duration-300",
      isActive && "ring-2 ring-accent animate-pulse-glow"
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-orbitron",
            symbol === 'X' ? "text-cyber-pink" : "text-cyber-blue"
          )}>
            {symbol}
          </span>
          <span className="font-orbitron">{name}</span>
        </div>
        <span className="text-xl font-orbitron">{score}</span>
      </div>
    </Card>
  );
};