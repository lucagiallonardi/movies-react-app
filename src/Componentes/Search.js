import styles from '../stylesheet/Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { useQuery } from '../Hooks/useQuery';

export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");
    const history = useNavigate ();

    useEffect(() => {
        setSearchText(search || '');
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history('/?search=' + searchText);
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input type='text'
                placeholder='Search Movie'  
                className={styles.searchInput} 
                value={searchText}
                onChange={(e)=> setSearchText(e.target.value)} />
                    <button type='submit' className={styles.searchButton}><FaSearch size={20} /></button>
            </div>
        </form>
        );
}
