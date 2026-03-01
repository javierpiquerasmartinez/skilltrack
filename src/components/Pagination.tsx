import './Pagination.css';

export function Pagination({ currentPage = 1, totalPages = 1, onPageChange }: { currentPage?: number, totalPages?: number, onPageChange?: (page: number) => void }) {
    let pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    const handlePageChange = (event: React.MouseEvent<HTMLAnchorElement>, page: number) => {
        event.preventDefault();
        page !== currentPage && onPageChange?.(page);
    }

    const handlePrevPage = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        currentPage > 1 && onPageChange?.(currentPage - 1);
    }

    const handleNextPage = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        currentPage < totalPages && onPageChange?.(currentPage + 1);
    }

    return (
        <nav className='pagination'>
            <a className='nav-item' href="" onClick={handlePrevPage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
            </a>
            {pages.map(page => {
                return (
                    <a href="" className={`nav-item ${currentPage === page ? 'is-active' : ''}`} onClick={(event) => handlePageChange?.(event, page)}>{page}</a>
                )
            })}
            <a className='nav-item' href="" onClick={handleNextPage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
            </a>
        </nav>
    )
}