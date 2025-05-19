import React, { useState } from "react";
import clx from './HoverBlock.module.css';
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

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
    const { width, height } = useWindowSize()

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
            {!show && <Confetti
                width={width}
                height={height}
                gravity={0.1}
                numberOfPieces={300}

                drawShape={ctx => {
                    ctx.beginPath()
                    for(let i = 0; i < 22; i++) {
                        const angle = 0.35 * i
                        const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
                        const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
                        ctx.lineTo(x, y)
                    }
                    ctx.stroke()
                    ctx.closePath()
                }}
            />}

        </AnimatePresence>

    );
};
