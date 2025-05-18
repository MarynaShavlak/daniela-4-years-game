import React, { useState } from "react";
import clx from './HoverBlock.module.css';

import questionSign from '../../../../shared/assets/images/decor/question.gif';
import { capitalizeFirstLetter } from "../../../../shared/utils/capitalizeFirstLetter";
import { ObjectName } from '@/shared/utils/tasksMediaManager';

import { motion, AnimatePresence } from "framer-motion";

interface HoverBlockProps {
    imageSrc?: string | null;
    taskName: ObjectName;
}

export const HoverBlock = (props: HoverBlockProps) => {
    const { imageSrc, taskName } =  props;
    const [show, setShow] = useState(true);

    const capitalizedTaskName = capitalizeFirstLetter(taskName);
    const questionClassBlock = `${clx.hoverBlock} ${clx[`question${capitalizedTaskName}__hoverBlock`] || ''}`;

    const handleClick = () => setShow(false);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className={questionClassBlock}
                    onClick={handleClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {imageSrc && <img src={imageSrc} className={clx.hoverImg} alt="Hover Image" />}
                    <img src={questionSign} className={clx.questionSign} alt="Question Sign" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
