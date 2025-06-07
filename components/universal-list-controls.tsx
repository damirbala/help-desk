// components/universal-list-controls.tsx
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, X, Settings2 } from "lucide-react"; // Using Settings2 for filter settings button

interface UniversalListControlsProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
  onAddButtonClick: () => void;
  onFilterSettingsClick: () => void;
  onClearFilterClick?: () => void; 
  showClearFilterButton?: boolean;
  addButtonText?: string;
  filterButtonText?: string;
  searchInputPlaceholder?: string;
}

export function UniversalListControls({
  searchQuery,
  onSearchChange,
  onSearchClear,
  onAddButtonClick,
  onFilterSettingsClick,
  onClearFilterClick,
  showClearFilterButton = false,
  addButtonText = "Добавить",
  filterButtonText = "Настройка фильтрации",
  searchInputPlaceholder = "Поиск",
}: UniversalListControlsProps) {
  return (
    <div className="p-4 bg-[#F0F0F0] flex flex-wrap items-center gap-2 border-b border-[#EBEBEA]"> {/* Added border like tickets filter */}
      <Button
        variant="outline"
        size="sm"
        className="bg-white border-[#EBEBEA] text-[#6B6B6B] hover:bg-gray-50 flex items-center gap-1.5" // Adjusted gap
        onClick={onFilterSettingsClick}
      >
        <Settings2 className="w-4 h-4" /> 
        {filterButtonText}
      </Button>
      {showClearFilterButton && onClearFilterClick && (
        <Button variant="ghost" size="icon" onClick={onClearFilterClick} className="text-[#6B6B6B] h-9 w-9 hover:bg-gray-100">
            <X className="w-5 h-5" />
        </Button>
      )}
      <div className="relative flex-grow min-w-[200px] sm:min-w-[250px]"> {/* Responsive min-width */}
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6B6B]" />
        <Input
          type="search" // Use type search for better semantics
          className="pl-10 pr-10 bg-white border-[#EBEBEA] focus:border-[#2383E2] focus:ring-offset-0 focus:ring-1 focus:ring-[#2383E2] h-9 text-sm"
          placeholder={searchInputPlaceholder}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <button 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B6B] hover:text-[#37352F] p-1" 
            onClick={onSearchClear}
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      <Button 
        size="sm"
        className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white flex items-center gap-1.5" // Adjusted gap
        onClick={onAddButtonClick}
      >
        <Plus className="w-4 h-4" />
        {addButtonText}
      </Button>
    </div>
  );
}