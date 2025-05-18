declare module '*.css' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module 'react-step-progress-bar' {
    interface ProgressBarProps {
        percent?: number;
        filledBackground?: any;
        height?: string | number;
        width?: string | number;
        stepPositions?: number;
    }

    interface StepProps {
        transition?: any;
        position?: any;
    }
    class ProgressBar extends React.Component<ProgressBarProps, any> {}
    class Step extends React.Component<StepProps, any> {}
}
