import { useId } from 'react';
import styles from './SearchForm.module.css';

function useSearchForm({ idType, idSearch, onSearch }: { idType: string, idSearch: string, onSearch: (filters: { type?: string, search?: string }) => void }) {
    const handleChange = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const filters = {
            type: formData.get(idType) as string,
            search: formData.get(idSearch) as string
        }
        onSearch(filters);
    }
    return handleChange;
}

export function SearchForm(
    { onSearch }:
        { onSearch: (filters: { type?: string, search?: string }) => void }) {

    const idType = useId();
    const idSearch = useId();
    const handleChange = useSearchForm({ idType, idSearch, onSearch });

    return (
        <form onChange={handleChange} className={styles.searchForm}>
            <input
                className={styles.searchInput}
                type="text"
                placeholder='Busca un objetivo...'
                name={idSearch}
                id={idSearch}
            />
            <select className={styles.searchSelect} name={idType} id={idType}>
                <option value="">Todos</option>
                <option value="personal">Personal</option>
                <option value="profesional">Profesional</option>
            </select>
        </form>
    )
}