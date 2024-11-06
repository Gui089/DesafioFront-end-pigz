import { useEffect } from "react";
import { LogoPigz } from "../icons/LogoPigz"
import { ButtonHeader, ContainerHeader } from "../style/HeaderStyle"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const HeaderHomeComponent = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <ContainerHeader data-aos="fade-up">
           <LogoPigz />

           <ButtonHeader>Já sou parceiro</ButtonHeader>
        </ContainerHeader>
    )
}