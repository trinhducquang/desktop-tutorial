import React from 'react'
import styled from 'styled-components'
import { GrLinkNext } from 'react-icons/gr'

const StyledButton = styled.button`
    margin: 0 auto !important;
    margin-top: 70px;
    padding: 15px 30px;
    border-radius: 50px;
    width: 280px;
    border: ${(props) => (props.borderColor === 'none' ? 'none' : `1.2px solid ${props.borderColor || props.color || 'black'}`)};
    color: ${(props) => props.color || 'black'};
    font-size: 11px;
    letter-spacing: 0.16666666em;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s ease, opacity 0.3s ease;
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        transition: transform 0.3s ease;
        text-transform: uppercase;
    }

    .arrow {
        position: absolute;
        top: 50%;
        right: 50px;
        transform: translateY(-50%) translateX(0);
        font-size: 20px;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 1;
    }

    &:hover {
        opacity: 0.9;

        span {
            transform: translateX(-20px);
        }

        .arrow {
            opacity: 0.9;
            transform: translateY(-50%) translateX(10px);
        }
    }
`;

const Button = ({ color, borderColor, label, style }) => {
    return (
        <StyledButton color={color} borderColor={borderColor} style={style}>
            <span>{label}</span>
            <GrLinkNext className="arrow" />
        </StyledButton>
    )
}

export default Button;
