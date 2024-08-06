import { create } from 'zustand';
import data from './data.json';

const useStore = create((set) => ({
  data: data,
  filteredData: data,
  searchTerm: '',
  dynamicSearchTerm: '',
  idRange: { min: 1, max: data.length },
  setSearchTerm: (term) => set({ searchTerm: term }),
  setDynamicSearchTerm: (term) => set((state) => {
    const newFilteredData = state.data.filter((item) => 
      (item.id >= state.idRange.min && item.id <= state.idRange.max) &&
      (item.name.toLowerCase().includes(term.toLowerCase()) ||
       item.details.toLowerCase().includes(term.toLowerCase()))
    );
    return { dynamicSearchTerm: term, filteredData: newFilteredData };
  }),
  setIdRange: (range) => set({ idRange: range }),
  filterData: () => set((state) => ({
    filteredData: state.data.filter((item) => 
      (item.id >= state.idRange.min && item.id <= state.idRange.max) &&
      (item.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
       item.details.toLowerCase().includes(state.searchTerm.toLowerCase()))
    )
  })),
}));

export default useStore;