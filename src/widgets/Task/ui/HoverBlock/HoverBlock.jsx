import React, { useState } from "react";
import clx from './HoverBlock.module.css';

import questionSign from '../../../../shared/assets/images/decor/question.gif';
import {capitalizeFirstLetter} from "../../../../shared/utils/capitalizeFirstLetter";

export const HoverBlock = ({ imageSrc, taskName }) => {
    const [show, setShow] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    const capitalizedTaskName = capitalizeFirstLetter(taskName);
    const questionClassBlock = `${clx.hoverBlock} ${clx[`question${capitalizedTaskName}__hoverBlock`] || ''}`;

    const handleClick = () => setFadeOut(true);
    const handleTransitionEnd = () => {
        if (fadeOut) setShow(false);
    };

    if (!show) return null;

    return (
        <div
            className={`${questionClassBlock} ${fadeOut ? clx.fadeOut : ''}`}
            onClick={handleClick}
            onTransitionEnd={handleTransitionEnd}
        >
            <img src={imageSrc} className={clx.hoverImg} alt="Hover Image" />
            <img src={questionSign} className={clx.questionSign} alt="Question Sign" />
        </div>
    );
};
