import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles.css';

import { ContainerCarrossel, TituloCarrossel, SpanCarrossel, Atividade, ContainerAtividade, LinkBotao } from './styles'

function Teste() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel 
    responsive={responsive}
    centerMode={true}
    swipeable={true}
    draggable={true}
    showDots={false}
    infinite={false}
    keyBoardControl={true}
    itemClass="carousel-item"
    >
      <ContainerCarrossel>
        <TituloCarrossel>
        Carreira <br />Back-end
        </TituloCarrossel>
        <SpanCarrossel>
       Formacao Java Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao .NET Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Python Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao TypeScript Fullstack Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao PHP Experience
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao PHP Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Ruby Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Programacao Reativa com Spring WebFlux
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao C/C++ Developer
        </SpanCarrossel>
        <ContainerAtividade>
          <Atividade>
           0 atividades
          </Atividade>
          <Atividade>
            0 projetos
          </Atividade>
        </ContainerAtividade>
        <LinkBotao>
          VerCarreira
        </LinkBotao>
      </ContainerCarrossel>


      <ContainerCarrossel>
        <TituloCarrossel>
        Carreira <br />Back-end
        </TituloCarrossel>
        <SpanCarrossel>
          Formacao Java Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao .NET Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Python Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao TypeScript Fullstack Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao PHP Experience
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao PHP Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Ruby Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Programacao Reativa com Spring WebFlux
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao C/C++ Developer
        </SpanCarrossel>
        <ContainerAtividade>
          <Atividade>
            0 atividades
          </Atividade>
          <Atividade>
            0 projetos
          </Atividade>
        </ContainerAtividade>
        <LinkBotao>
          VerCarreira
        </LinkBotao>
      </ContainerCarrossel>
      <ContainerCarrossel>
        <TituloCarrossel>
        Carreira <br />Back-end
        </TituloCarrossel>
        <SpanCarrossel>
          Formacao Java Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao .NET Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Python Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao TypeScript Fullstack Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao PHP Experience
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao PHP Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Ruby Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Programacao Reativa com Spring WebFlux
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao C/C++ Developer
        </SpanCarrossel>
        <ContainerAtividade>
          <Atividade>
            0 atividades
          </Atividade>
          <Atividade>
            0 projetos
          </Atividade>
        </ContainerAtividade>
        <LinkBotao>
          VerCarreira
        </LinkBotao>
      </ContainerCarrossel>

      <ContainerCarrossel>
        <TituloCarrossel>
        Carreira <br />Back-end
        </TituloCarrossel>
        <SpanCarrossel>
          Formacao Java Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao .NET Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Python Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao TypeScript Fullstack Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao PHP Experience
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao PHP Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Ruby Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Programacao Reativa com Spring WebFlux
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao C/C++ Developer
        </SpanCarrossel>
        <ContainerAtividade>
          <Atividade>
            0 atividades
          </Atividade>
          <Atividade>
            0 projetos
          </Atividade>
        </ContainerAtividade>
        <LinkBotao>
          VerCarreira
        </LinkBotao>
      </ContainerCarrossel>

      <ContainerCarrossel>
        <TituloCarrossel>
        Carreira <br />Back-end
        </TituloCarrossel>
        <SpanCarrossel>
          Formacao Java Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao .NET Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Python Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao TypeScript Fullstack Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao PHP Experience
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao PHP Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Ruby Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao Programacao Reativa com Spring WebFlux
        </SpanCarrossel>
        <SpanCarrossel>
          Formacao C/C++ Developer
        </SpanCarrossel>
        <ContainerAtividade>
          <Atividade>
            0 atividades
          </Atividade>
          <Atividade>
            0 projetos
          </Atividade>
        </ContainerAtividade>
        <LinkBotao>
          VerCarreira
        </LinkBotao>
      </ContainerCarrossel>

    </Carousel>
  );
}

export default Teste;
