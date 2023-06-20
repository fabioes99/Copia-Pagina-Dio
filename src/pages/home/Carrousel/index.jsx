import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ButtonRight, ButtonLeft } from './styles'
import Item from './Item';


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

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group">
        <ButtonLeft onClick={() => previous()} ><FontAwesomeIcon icon={faChevronLeft} size='lg' style={{color: "#ededed",}} /></ButtonLeft>
        <ButtonRight onClick={() => next()} ><FontAwesomeIcon icon={faChevronRight} size='lg' style={{color: "#ededed",}} /></ButtonRight>
      </div>
    );
  };

  return (
    <Carousel 
    responsive={responsive}
    centerMode={false}
    swipeable={true}
    draggable={true}
    showDots={false}
    infinite={true}
    keyBoardControl={true}
    arrows={false} 
    renderButtonGroupOutside={true}
    customButtonGroup={<ButtonGroup />}
    itemClass="carousel-item"
    containerClass="carousel-container"
    >        

    <Item title="Python Developer" src="https://hermes.dio.me/tracks/aa71615b-e701-4cec-bb64-71ba6974c5fe.png" />
    <Item title="SQL Database Specialist" src="https://hermes.dio.me/tracks/bc454148-6e72-4047-95cc-d516706ae405.png" />
    <Item title="Flutter Specialist" src="https://hermes.dio.me/tracks/6d21f240-a85a-4570-a217-c3b9a37d1924.png"/>
    <Item title="Linux Fundamentals" src="https://hermes.dio.me/tracks/d33ee9c3-8a34-4913-8bfa-d21bdc2109b0.png"/>
    <Item title="Android Developer" src="https://hermes.dio.me/tracks/ae048a51-04ee-4853-9deb-46b9fc113a92.png"/>
    <Item title="Java Developer" src="https://hermes.dio.me/tracks/da6041a9-80ef-409e-bd50-5e7be4dfadf6.png" />

    </Carousel>
  );
}

export default Teste;
