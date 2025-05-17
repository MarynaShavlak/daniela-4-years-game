import React from 'react';
import { IonIcon } from '@ionic/react';
import clx from './Button.module.css'

export const Button = ({
                           onClick,
                           children,
                           icon,
                           className = '',
                           iconPosition = 'left',
                           ...props
                       }) => {
    return (
        <button
            onClick={onClick}
            className={`${clx.btn} ${className}`}
            {...props}
        >
            {icon && iconPosition === 'left' && <IonIcon icon={icon} className={clx.icon} />}
            {children}
            {icon && iconPosition === 'right' && <IonIcon icon={icon} className={clx.icon} />}
        </button>
    );
};
