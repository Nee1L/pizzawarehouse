export interface SortProps {
    name: string;
    onSortChange?: (sortOption: SortOption) => void;
  }
  
export interface SortOption {
    date: string;
    alphabet: string;
    popularity: string;
  }
