import React from 'react';
import { IonIcon } from '@ionic/react';
import clx from './Button.module.css';

export const Button = ({
                           onClick,
                           children,
                           icon,
                           className = '',
                           iconPosition = 'left',
                           size = 's',
                           ...props
                       }) => {
    const sizeClass = clx[`size_${size}`] || clx.size_m;

    return (
        <button
            onClick={onClick}
            className={`${clx.btn} ${sizeClass} ${className}`}
            {...props}
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
