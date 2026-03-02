import './GoalsList.css';
import { Pagination } from './Pagination.tsx';
import { useState } from 'react';
import { GoalListItem } from './GoalListItem.tsx';
import { goals } from '../data/goals.json';
import { SearchForm } from './SearchForm.tsx';

const RESULTS_PER_PAGE = 4;

export function GoalsList() {
    const [textFilter, setTextFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredGoals = goals.filter((goal) => {
        return goal.title.toLowerCase().includes(textFilter.toLowerCase()) ||
            goal.description.toLowerCase().includes(textFilter.toLowerCase());
    });

    const totalPages = Math.ceil(filteredGoals.length / RESULTS_PER_PAGE);
    const pagedGoals = filteredGoals.slice((currentPage - 1) * RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    };

    const handleSearch = (filters: { type: string, search: string }) => {
        console.log(filters);
    }

    const handleTextFilter = (text: string) => {
        setTextFilter(text);
        setCurrentPage(1);
    }

    return (
        <section>
            <h1>Estos son tus objetivos 🎯</h1>
            <SearchForm onSearch={handleSearch} onTextFilter={handleTextFilter}></SearchForm>
            {
                pagedGoals.map((goal) => {
                    return (
                        <GoalListItem
                            key={goal.id}
                            title={goal.title}
                            description={goal.description}
                            type={goal.type}
                            dueDate={goal.dueDate}
                        />
                    )
                })
            }
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
        </section >
    )
}