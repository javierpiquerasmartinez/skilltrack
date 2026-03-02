import { useId } from 'react';
import styles from './SearchForm.module.css';

export function SearchForm(
    { onSearch }:
        { onSearch: (filters: { type?: string, search: string }) => void }) {

    const idType = useId();
    const idSearch = useId();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const filters = {
            type: formData.get(idType) as string,
            search: formData.get(idSearch) as string
        }

        onSearch(filters);
    }

    function handleTextFilter(event: React.ChangeEvent<HTMLInputElement>) {
        onSearch({ search: event.target.value });
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <input
                className={styles.searchInput}
                type="text"
                placeholder='Busca un objetivo...'
                name={idSearch}
                id={idSearch}
                onChange={handleTextFilter}
            />
            <select className={styles.searchSelect} name={idType} id={idType}>
                <option value="">Todos</option>
                <option value="personal">Personal</option>
                <option value="profesional">Profesional</option>
            </select>
            <button className={styles.searchButton} type='submit'>Buscar</button>
        </form>
    )
}