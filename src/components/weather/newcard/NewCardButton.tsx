import React from "react";
import styles from "./NewCardButton.module.css";

import plus from "./../../../assets/plus.png";

type NewCardButtonProps = {
    onClick: (isOpen: boolean) => void;
};

const NewCardButton: React.FC<NewCardButtonProps> = ({onClick}) => {
    return (
        <button
            className={styles.button}
            onClick={() => onClick(true)}
        >
            <img 
                src={plus}
                className={styles.plus}
            />
        </button>
    );
};

export default NewCardButton;