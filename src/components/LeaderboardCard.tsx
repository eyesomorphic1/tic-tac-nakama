import { Card } from "@/components/ui/card";

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
}

interface LeaderboardCardProps {
  entries: LeaderboardEntry[];
}

export const LeaderboardCard = ({ entries }: LeaderboardCardProps) => {
  return (
    <Card className="glass-card p-4 w-full max-w-md">
      <h2 className="text-xl font-orbitron mb-4 text-center">Top Players</h2>
      <div className="space-y-2">
        {entries.map((entry) => (
          <div
            key={entry.rank}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg font-orbitron text-cyber-blue">#{entry.rank}</span>
              <span>{entry.name}</span>
            </div>
            <span className="font-orbitron text-cyber-pink">{entry.score}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};