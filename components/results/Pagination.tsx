import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  // Generate page numbers array
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // First page
        i === totalPages || // Last page
        (i >= currentPage - 1 && i <= currentPage + 1) // Current page and neighbors
      ) {
        pages.push(i);
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push('...');
      }
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-1.5 py-4">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 
          disabled:opacity-50 disabled:cursor-not-allowed 
          hover:border-black hover:bg-black/5 group
          transition-all duration-300 ease-in-out"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4 transition-all duration-300 
          group-hover:text-black group-hover:-translate-x-0.5" />
      </button>
      
      {getPageNumbers().map((pageNum, index) => (
        <button
          key={index}
          onClick={() => typeof pageNum === 'number' && onPageChange(pageNum)}
          disabled={typeof pageNum !== 'number'}
          className={`w-8 h-8 text-sm rounded-full flex items-center justify-center
            transition-all duration-300 ease-in-out
            ${typeof pageNum === 'number' 
              ? pageNum === currentPage
                ? 'bg-black text-white font-medium shadow-md'
                : 'hover:bg-black/5 hover:text-black hover:border-black border border-transparent'
              : 'cursor-default'
            }`}
        >
          {pageNum}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 
          disabled:opacity-50 disabled:cursor-not-allowed 
          hover:border-black hover:bg-black/5 group
          transition-all duration-300 ease-in-out"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4 transition-all duration-300 
          group-hover:text-black group-hover:translate-x-0.5" />
      </button>
    </div>
  );
};

export default Pagination; 