'use client'

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface ScrollProps {
  targetId: string;
}

export default function ScrollDownButton({ targetId }: ScrollProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="mx-auto mt-[80px] w-12 h-12 bg-gray-700/80 backdrop-blur-sm border border-gray-500 hover:bg-gray-600/20 transition-all duration-300 rounded-full flex items-center justify-center shadow-lg"
      onClick={handleClick}
    >
      <ChevronDown className="w-6 h-6 text-gray-300" />
      <span className="sr-only">Défiler vers le bas</span>
    </Button>
  )
}