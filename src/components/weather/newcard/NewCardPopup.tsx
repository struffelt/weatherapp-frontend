import React from "react";
import styles from "./NewCardPopup.module.css";

import close from "./../../../assets/close.png";

type NewCardPopupProps = {
    onClick: (isOpen: boolean) => void;
    addCity: (city: string) => void;
};

const NewCardPopup: React.FC<NewCardPopupProps> = ({onClick, addCity}) => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            city: { value: string };
        };
        addCity(target.city.value);
        onClick(false);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h3>Eingabe</h3>
                <img 
                    src={close}
                    className={styles.close}
                    onClick={() => onClick(false)}
                />
            </header>
            <form 
                className={styles.form}
                onSubmit={(e: React.SyntheticEvent) => handleSubmit(e)}
            >
                <input 
                    type="text" 
                    name="city" 
                    placeholder="Stadt eingeben..." 
                />
                <input
                    className={styles.button}
                    type="submit"
                    value="Hinzufügen"
                />
            </form>
        </div>
    );
};

export default NewCardPopup;