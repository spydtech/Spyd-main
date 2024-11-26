import React from "react";

import ServicesTopSection from "./ServicesTopSection";
import ServiceGroupsSection from "./ServiceGroupsSection";
import OurServices from "./OurServices";
import ServiceMicrosoftSection from "./ServiceMicrisoftSection";
import ServiceKeyBenefits from "./ServiceKeyBenefits";
import ServiceTechTransform from "./ServiceTechTransform";
import GetStartedInfo from "./GetStartedInfo";
import CallToAction from './CallToAction'




function Services() {
    return(
        <div>
        <ServicesTopSection/>
        <ServiceGroupsSection/>
        <OurServices/>
        <ServiceMicrosoftSection/>
        <ServiceKeyBenefits/>
        <ServiceTechTransform/>
        <GetStartedInfo/>
        <CallToAction />
        {/* <Footer /> */}
        </div>
    )
}

export default Services