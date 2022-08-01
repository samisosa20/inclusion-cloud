// Packages
import React from "react";
import { promiseTrackerHoc } from "react-promise-tracker";
import { Oval } from "react-loader-spinner";

// Styles
import { StyledLoader } from "./SpinnerLoading.styles";

// Interface
import { SpinnerLoadingIndicatorInterface } from "./SpinnerLoadingIndicator.interface";

const SpinnerLoadingIndicator = (props: SpinnerLoadingIndicatorInterface) => {
    const { className, color, width, height } = props;
    return (
        <StyledLoader className={className}>
        <Oval color={color} height={height} width={width} />
    </StyledLoader>
);
};

export default promiseTrackerHoc(SpinnerLoadingIndicator);
