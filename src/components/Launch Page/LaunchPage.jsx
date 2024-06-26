import React from "react";
import LaunchpageSm from "./LaunchSm";
import LaunchpageMd from "./LaunchMd";

const LaunchPage = () =>{
    return(
        <>
        <div className="sm:hidden block">
                <LaunchpageSm />
        </div>
        <div className="hidden sm:block">
                <LaunchpageMd />
        </div>
        </>
    )
}

export default LaunchPage;
