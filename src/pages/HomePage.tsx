import { useEffect } from "react";
import { HeaderHomeComponent } from "../components/HeaderHome"
import { SectionComponent } from "../components/SectionHome"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const HomePage = () => {

    useEffect(() =>{
        AOS.init();
    }, []);

    return (
        <>
            <HeaderHomeComponent />
            <SectionComponent data-aos="fade-up"/>
        </>
    )
}