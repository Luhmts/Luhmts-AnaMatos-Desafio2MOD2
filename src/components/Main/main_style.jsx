/** @format */

import styled from "styled-components";

export const Section = styled.section`
  /* border: solid 3px pink; */
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  background: #FFC72C;
  ;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 20vw;
  }

  .bigmac {
    width: 10vw;
  }
`;

export const ContainerPromocao = styled.div`

`

export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Card = styled.div`
  border: solid;
  width: 20vw;
  border-radius: 7px;
  img {
    width: 100%;
  }
`;