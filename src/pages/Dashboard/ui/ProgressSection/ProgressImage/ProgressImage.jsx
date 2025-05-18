import React, {useEffect, useRef} from "react";
import clx from "../ProgressSection.module.css";


export const ProgressImage = ({ src, index, isVisible, className = "",  }) => {

    return  (
        <img
            src={src}
            alt={`Girl ${index + 1} Photo`}
            className={`
        ${clx.progressImg}
        ${className}
        ${isVisible ? clx.fadeIn : clx.fadeOut}
      `}
        />
    );
};
