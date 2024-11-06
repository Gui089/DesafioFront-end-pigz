import { ContainerSection, ImageSection, TextSection, TitleSection } from "../style/SectionStyle";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FormSection } from "./FormSection";

export const SectionComponent = () => {

    useEffect(() =>{
        AOS.init();
    }, []);


    return (
        <ContainerSection data-aos="fade-up">
           <TitleSection data-aos="fade-up">
              Pigz: tudo que você precisa pra vender ainda mais!
           </TitleSection>

           <ImageSection
               data-aos="fade-up" 
               src="/img/burguer_2.png" 
               alt="imagem de Hamburguer" 
            />

            <TextSection data-aos="fade-up">
                Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.
            </TextSection>

            <FormSection />
        </ContainerSection>
    );
}
