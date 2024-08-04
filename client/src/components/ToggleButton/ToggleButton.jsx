import { useState } from "react";
import { MdOutlineToggleOff, MdOutlineToggleOn } from "react-icons/md";
import styled from 'styled-components';
// import styled from "@emotion/styled/macro";

const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <Button onClick={handleToggle} isToggled={isToggled}>
            {isToggled ? <MdOutlineToggleOn size={50} /> : <MdOutlineToggleOff size={50} />}
        </Button>
    )
}

export default ToggleButton;

const Button = styled.div`
    transition: background-color 0.3s ease;

    svg {
        color: ${props => props.isToggled ? 'black' : 'white'};
    }
`;
