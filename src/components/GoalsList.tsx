import './GoalsList.css';
import { Pagination } from './Pagination.tsx';
import { useState } from 'react';
import { GoalListItem } from './GoalListItem.tsx';
import { goals } from '../data/goals.json';
import { SearchForm } from './SearchForm.tsx';

export function GoalsList() {

    const [currentPage, setCurrentPage] = useState(1);

    const RESULTS_PER_PAGE = 4;
    const totalPages = Math.ceil(goals.length / RESULTS_PER_PAGE);
    const pagedGoals = goals.slice((currentPage - 1) * RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    };

    return (
        <section>
            <h1>Estos son tus objetivos 🎯</h1>
            <SearchForm></SearchForm>
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