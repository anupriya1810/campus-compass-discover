
import { useState } from "react";
import { Search, TrendingUp, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const HeroSection = ({ searchTerm, onSearchChange }: HeroSectionProps) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Find Your Perfect
            <span className="text-yellow-300"> College</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Discover top universities worldwide and start your journey to success
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search colleges, courses, or locations..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-full border-0 shadow-lg text-gray-900"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-yellow-300">13+</div>
              <div className="text-sm text-blue-100">Top Universities</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-yellow-300">95%</div>
              <div className="text-sm text-blue-100">Success Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-yellow-300">50k+</div>
              <div className="text-sm text-blue-100">Students Helped</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
