import './GoalsList.css';
import ButtonSecondary from './ButtonSecondary.tsx';
import { Pagination } from './Pagination.tsx';
import { useState } from 'react';
import { GoalListItem } from './GoalListItem.tsx';

export function GoalsList() {

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    };

    return (
        <section>
            <h1>Estos son tus objetivos 🎯</h1>
            <GoalListItem
                title="Objetivo 1"
                description="Ahorrar $10,000 dólares"
                dueDate="30 de junio de 2026"></GoalListItem>

            <div className='goal-list-item'>
                <p>Objetivo 2</p>
                <p>Aprender inglés avanzado</p>
                <div>
                    Fecha de meta: 15 de diciembre de 2026
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 3</p>
                <p>Viajar a Japón</p>
                <div>
                    Fecha de meta: 31 de diciembre de 2026
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 4</p>
                <p>Comprar una casa</p>
                <div>
                    Fecha de meta: 1 de agosto de 2027
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 5</p>
                <p>Iniciar mi propio negocio</p>
                <div>
                    Fecha de meta: 1 de marzo de 2027
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 6</p>
                <p>Leer 24 libros en un año</p>
                <div>
                    Fecha de meta: 31 de diciembre de 2026
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 7</p>
                <p>Aprender a programar en React</p>
                <div>
                    Fecha de meta: 30 de septiembre de 2026
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 8</p>
                <p>Correr un maratón</p>
                <div>
                    Fecha de meta: 15 de noviembre de 2026
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 9</p>
                <p>Mejorar mi alimentación</p>
                <div>
                    Fecha de meta: 1 de mayo de 2026
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 10</p>
                <p>Aprender a tocar guitarra</p>
                <div>
                    Fecha de meta: 20 de octubre de 2026
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 11</p>
                <p>Viajar por Europa</p>
                <div>
                    Fecha de meta: 30 de julio de 2027
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 12</p>
                <p>Obtener una certificación profesional</p>
                <div>
                    Fecha de meta: 15 de abril de 2027
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 13</p>
                <p>Reducir deudas personales</p>
                <div>
                    Fecha de meta: 31 de enero de 2027
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 14</p>
                <p>Practicar meditación diaria</p>
                <div>
                    Fecha de meta: 1 de junio de 2026
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 15</p>
                <p>Aprender francés</p>
                <div>
                    Fecha de meta: 10 de diciembre de 2027
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 16</p>
                <p>Crear un fondo de emergencia</p>
                <div>
                    Fecha de meta: 30 de septiembre de 2026
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 17</p>
                <p>Hacer ejercicio 4 veces por semana</p>
                <div>
                    Fecha de meta: 31 de diciembre de 2026
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 18</p>
                <p>Lanzar un canal de YouTube</p>
                <div>
                    Fecha de meta: 1 de febrero de 2027
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 19</p>
                <p>Ahorrar para un auto nuevo</p>
                <div>
                    Fecha de meta: 15 de agosto de 2027
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>

            <div className='goal-list-item'>
                <p>Objetivo 20</p>
                <p>Tomar un curso de liderazgo</p>
                <div>
                    Fecha de meta: 30 de noviembre de 2026
                </div>
                <ButtonSecondary>+</ButtonSecondary>
            </div>
            <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange}></Pagination>
        </section >
    )
}