import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { GameBoard } from "@/components/GameBoard";
import { PlayerCard } from "@/components/PlayerCard";
import { LeaderboardCard } from "@/components/LeaderboardCard";

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);
  
  // Mockup data - replace with real data from Nakama
  const leaderboardEntries = [
    { rank: 1, name: "CyberMaster", score: 2400 },
    { rank: 2, name: "PixelWarrior", score: 2250 },
    { rank: 3, name: "NeonPlayer", score: 2100 },
  ];

  return (
    <div className="min-h-screen p-8">
      {!gameStarted ? (
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <h1 className="text-6xl font-orbitron font-bold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent">
            Cyber TicTacToe
          </h1>
          <p className="text-xl text-white/80">
            Challenge players worldwide in this cyberpunk-themed multiplayer game
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setGameStarted(true)}
              className="bg-cyber-pink hover:bg-cyber-pink/80 text-white px-8 py-6 text-lg font-orbitron"
            >
              Quick Play
            </Button>
            <Button
              variant="outline"
              className="border-cyber-blue hover:bg-cyber-blue/20 text-cyber-blue px-8 py-6 text-lg font-orbitron"
            >
              Create Room
            </Button>
          </div>
          <div className="mt-12">
            <LeaderboardCard entries={leaderboardEntries} />
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
            <PlayerCard name="Player 1" score={0} isActive={true} symbol="X" />
            <GameBoard />
            <PlayerCard name="Player 2" score={0} symbol="O" />
          </div>
          <div className="mt-8 text-center">
            <Button
              onClick={() => setGameStarted(false)}
              variant="outline"
              className="border-cyber-pink hover:bg-cyber-pink/20 text-cyber-pink"
            >
              Leave Game
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;