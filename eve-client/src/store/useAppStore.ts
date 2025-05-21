import { create } from 'zustand';

// Define the types of state
interface SearchFormState {
  from: string;
  to: string;
  date: string;
}

interface AppState {
  // Search form data
  searchForm: SearchFormState;
  // Current user language
  language: 'vi' | 'en';
  // Loading state
  isLoading: boolean;
  // Current active tab in the search form
  activeTransportTab: 'bus' | 'plane' | 'train' | 'car';
  
  // Actions
  setSearchForm: (data: Partial<SearchFormState>) => void;
  setLanguage: (lang: 'vi' | 'en') => void;
  setLoading: (loading: boolean) => void;
  setActiveTransportTab: (tab: 'bus' | 'plane' | 'train' | 'car') => void;
}

const useAppStore = create<AppState>((set) => ({
  // Initial state
  searchForm: {
    from: 'Hà Nội',
    to: 'Hải Phòng',
    date: '21/05/2025',
  },
  language: 'vi',
  isLoading: false,
  activeTransportTab: 'bus',
  
  // Actions
  setSearchForm: (data) => 
    set((state) => ({ 
      searchForm: { ...state.searchForm, ...data } 
    })),
  
  setLanguage: (lang) => 
    set({ language: lang }),
  
  setLoading: (loading) => 
    set({ isLoading: loading }),
  
  setActiveTransportTab: (tab) => 
    set({ activeTransportTab: tab }),
}));

export default useAppStore;
