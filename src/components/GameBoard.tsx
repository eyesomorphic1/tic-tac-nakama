import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GameBoardProps {
  onMove?: (index: number) => void;
  board?: string[];
  disabled?: boolean;
}

export const GameBoard = ({ onMove, board = Array(9).fill(''), disabled = false }: GameBoardProps) => {
  const renderCell = (index: number) => {
    const value = board[index];
    return (
      <Button
        key={index}
        onClick={() => onMove?.(index)}
        disabled={disabled || value !== ''}
        className={cn(
          "w-24 h-24 text-4xl font-bold rounded-lg glass-card transition-all duration-300",
          "hover:bg-accent/20 disabled:opacity-80 disabled:cursor-not-allowed",
          "animate-fade-in"
        )}
      >
        {value === 'X' && <span className="text-cyber-pink">X</span>}
        {value === 'O' && <span className="text-cyber-blue">O</span>}
      </Button>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-4 rounded-xl glass-card">
      {Array(9).fill(null).map((_, index) => renderCell(index))}
    </div>
  );
};