import './GoalsList.css';
import { Pagination } from './Pagination.tsx';
import { useState } from 'react';
import { GoalListItem } from './GoalListItem.tsx';
import { goals } from '../data/goals.json';

export function GoalsList() {

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    };

    return (
        <section>
            <h1>Estos son tus objetivos 🎯</h1>
            {
                goals.map((goal) => {
                    return (
                        <GoalListItem
                            key={goal.id}
                            title={goal.title}
                            description={goal.description}
                            dueDate={goal.dueDate}
                        />
                    )
                })
            }
            <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange}></Pagination>
        </section >
    )
}