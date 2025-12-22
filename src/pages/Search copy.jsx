import {useEffect, useState} from 'react';

import {Pagination} from '../components/Pagination.jsx';
import {SearchFormSection} from '../components/SearchFormSection.jsx';
import {JobsListings} from '../components/JobsListings.jsx';

import jobsData from '../data.json';

const RESULTS_PER_PAGE = 4;

const useFilters = () => {
  const [filters, setFilters] = useState({
    technology: '',
    location: '',
    experienceLevel: ''
  });

  const [textToFilter, setTextToFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const jobsFilterredByFilters = jobsData.filter(job => {
    return (
      (filters.technology === '' || job.data.technology === filters.technology)
    )
  });

  const jobsWithTextFilter = textToFilter === ''
    ? jobsFilterredByFilters
    : jobsFilterredByFilters.filter(job => {
      return job.titulo.toLowerCase().includes(textToFilter.toLowerCase());
    });

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE);

  const pageResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE, // Página 1 -> 0, Página 1 -> 5, Página 2 -> 10
    currentPage * RESULTS_PER_PAGE  // Página 1 -> 5, Página 2 -> 10, Página 3 -> 15
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  return {
    jobsWithTextFilter,
    pageResults,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
    handleTextFilter
  };
}

export function SearchPage() {
  const {
    jobsWithTextFilter,
    pageResults,
    totalPages,
    currentPage,
    handlePageChange,
    handleSearch,
    handleTextFilter
  } = useFilters();

  useEffect(() => {
    document.title = `Resultados: ${jobsWithTextFilter.length}, Página ${currentPage} - DevJobs`;
  }, [jobsWithTextFilter, currentPage]);


  return (
    <main>
      <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />
      <section>
        <JobsListings jobs={pageResults} />
        <Pagination currentPage = {currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </main>
  )
}

