import './GoalsList.css';

export function GoalsList() {
    return (
        <section>
            <h1>Estos son tus objetivos.</h1>
            <div className='goal-list-item'>
                <p>Objetivo 1</p>
                <p>Correr la maratón</p>
                <div>
                    Fecha de meta: 31 de diciembre de 2024
                </div>
            </div>
            <div className='goal-list-item'>
                <p>Objetivo 2</p>
                <p>Aprender a programar</p>
                <div>
                    Fecha de meta: 31 de diciembre de 2024
                </div>
            </div>
            <div className='goal-list-item'>
                <p>Objetivo 3</p>
                <p>Viajar a Japón</p>
                <div>
                    Fecha de meta: 31 de diciembre de 2024
                </div>
            </div>
        </section>
    )
}