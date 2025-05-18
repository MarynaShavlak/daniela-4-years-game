import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { IonIcon } from '@ionic/react';
import clx from './Button.module.css';

type IconPosition = 'left' | 'right';
type ButtonSize = 's' | 'm' | 'l';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    children: ReactNode;
    icon?: string;
    className?: string;
    iconPosition?: IconPosition;
    size?: ButtonSize;
}

export const Button = (props: ButtonProps ) => {
    const {
        onClick,
        children,
        icon,
        className = '',
        iconPosition = 'left',
        size = 's',
        ...otherProps
    } = props;
    const sizeClass = clx[`size_${size}`] || clx.size_m;

    return (
        <button
            onClick={onClick}
            className={`${clx.btn} ${sizeClass} ${className}`}
            {...otherProps}
        >
            {icon && iconPosition === 'left' && (
                <IonIcon icon={icon} className={clx.icon} />
            )}
            {children}
            {icon && iconPosition === 'right' && (
                <IonIcon icon={icon} className={clx.icon} />
            )}
        </button>
    );
};
