import React, { useRef } from "react";
import styles from "./Searchbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'

type SearchbarProps = {
    search: string,
    setSearch: (search: string) => void
};

const Searchbar: React.FC<SearchbarProps> = ({search, setSearch}: SearchbarProps) => {
    const searchInput = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchInput.current?.blur();
        setSearch(search);
        console.log("submit: " + search);
    }

    return (
        <form 
            className={styles.container}
            onSubmit={handleSubmit}
            onClick={() => searchInput.current?.focus()}
        >
            <input 
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search a location..."
                className={styles.search}
                ref={searchInput}
            />
            {search?.length == 0 ? 
                <FontAwesomeIcon 
                    icon={faMagnifyingGlass} 
                    onClick={() => searchInput.current?.focus()}
                    className={styles.icon}
                />
            :
                <FontAwesomeIcon
                    icon={faX}
                    onClick={() => setSearch("")}
                    className={styles.icon}
                />
            }
        </form>
    );
};

export default Searchbar;