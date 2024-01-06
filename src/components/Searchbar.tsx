import React from "react";
import styles from "./Searchbar.module.css";

const Searchbar: React.FC = () => {
    return (
        <>
            <input 
                type="search"
                placeholder="Search a location..."
                className={styles.search}
            />
        </>
    );
};

export default Searchbar;