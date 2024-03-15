import classes from './Button.module.css'
import React from "react";

type ButtonProps = React.PropsWithChildren<{
    isActive?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties;
}>;

const Button : React.FC<ButtonProps> = ({ children, isActive, ...props }) => {
    return (
        <button
            {...props}
            className={isActive ? `${classes.button} ${classes.active}` : classes.button}>
            {children}
        </button>
    )
};

export default Button;