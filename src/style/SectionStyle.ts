import styled from "styled-components";

export const ContainerSection = styled.div`
   width: 100%;
   height: 800px;
   display: flex;
   padding: 30px;
   background: rgb(250,100,30);
   background: linear-gradient(95deg, rgba(250,100,30,1) 35%, rgba(255,136,31,1) 100%);
   position: relative; 
   overflow: hidden;  
`;

export const TitleSection = styled.h1`
   color: #fff;
   font-weight: bold;
   width: 70%;
   font-size: 35px;
   height: 200px;
`;

export const ImageSection = styled.img`
   position: absolute;
   right: -60px;
   background-repeat: no-repeat;
   width: 250px;
   height: 220px; 
   top: 0px;
`;

export const TextSection = styled.p`
  width: 90%;
  color: #fff;
  position: absolute;
  top: 270px;
  opacity: 0.8;
`;