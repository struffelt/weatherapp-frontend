import React from "react";
import styles from "./Searchbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Searchbar: React.FC = () => {
    return (
        <div className={styles.container}>
            <input 
                type="search"
                placeholder="Search a location..."
                className={styles.search}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
    );
};

export default Searchbar;