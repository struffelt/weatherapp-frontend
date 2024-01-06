import Popup from "reactjs-popup";

import NewCardButton from "./NewCardButton";
import NewCardPopup from "./NewCardPopup";
import { useState } from "react";

type NewCardProps = {
    addCity: (city: string) => void;
};

const NewCard: React.FC<NewCardProps> = ({addCity}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (isOpen: boolean) => {
      setIsOpen(isOpen);
    };
    
    return (
        <>
            <NewCardButton onClick={handleClick}/>
            <Popup 
                open={isOpen}
                onClose={() => handleClick(false)}
                modal
            >
              <NewCardPopup onClick={handleClick} addCity={addCity} />
            </Popup>
        </>
      );
};

export default NewCard;