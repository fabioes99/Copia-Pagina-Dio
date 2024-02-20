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
       FormaçãoJava Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formação .NET Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPython Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoTypeScript Fullstack Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPHP Experience
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPHP Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoRuby Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoProgramacao Reativa com Spring WebFlux
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoC/C++ Developer
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
          FormaçãoJava Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formação .NET Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPython Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoTypeScript Fullstack Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPHP Experience
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPHP Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoRuby Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoProgramacao Reativa com Spring WebFlux
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoC/C++ Developer
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
          FormaçãoJava Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formação .NET Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPython Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoTypeScript Fullstack Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPHP Experience
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPHP Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoRuby Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoProgramacao Reativa com Spring WebFlux
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoC/C++ Developer
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
          FormaçãoJava Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formação .NET Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPython Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoTypeScript Fullstack Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPHP Experience
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPHP Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoRuby Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoProgramacao Reativa com Spring WebFlux
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoC/C++ Developer
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
          FormaçãoJava Developer
        </SpanCarrossel>
        <SpanCarrossel>
          Formação .NET Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPython Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoTypeScript Fullstack Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPHP Experience
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoPHP Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoRuby Developer
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoProgramacao Reativa com Spring WebFlux
        </SpanCarrossel>
        <SpanCarrossel>
          FormaçãoC/C++ Developer
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
