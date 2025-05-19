import clx from "../ProgressSection.module.css";

interface ProgressImageProps {
    src: string;
    index: number;
    isVisible: boolean;
    className?: string;
}

export const ProgressImage = (props: ProgressImageProps ) => {
const { src, index, isVisible, className = "",  } = props;
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
