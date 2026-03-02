import styles from './SearchForm.module.css';

export function SearchForm() {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('Buscando objetivo...');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <input className={styles.searchInput} type="text" placeholder='Busca un objetivo...' />
            <button className={styles.searchButton} type='submit'>Buscar</button>
        </form>
    )
}