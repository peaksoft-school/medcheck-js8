import { Rating, styled } from '@mui/material'
import Slider from 'react-slick'
import ImgSlider from '../../assets/images/imgSlider.png'
import { ReactComponent as Pagination } from '../../assets/icons/dots.svg'
import { ReactComponent as NextImg } from '../../assets/icons/nextImg.svg'
import { ReactComponent as PreviousImg } from '../../assets/icons/previousImg.svg'

const infoSlide = [
   {
      id: 1,
      img: ImgSlider,
      name: 'Александр',
      rating: 5,
      review:
         'Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!',
   },
   {
      id: 2,
      img: ImgSlider,
      name: 'Александр',
      rating: 5,
      review:
         'Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!',
   },
   {
      id: 3,
      img: ImgSlider,
      name: 'Александр',
      rating: 5,
      review:
         'Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!',
   },
   {
      id: 4,
      img: ImgSlider,
      name: 'Александр',
      rating: 5,
      review:
         'Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!',
   },
]

const NextArrow = ({ className, style, onClick }) => {
   return (
      <NextImg className={className} style={{ ...style }} onClick={onClick} />
   )
}

const PreviousArrow = ({ onClick, className, style }) => {
   return (
      <PreviousImg
         className={className}
         onClick={onClick}
         style={{ ...style }}
      />
   )
}

const customDots = (dots) => <div>{dots}</div>
const customPaging = () => <Pagination />

export const FeedbackSlider = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => customDots(dots),
      customPaging: () => customPaging(),
      nextArrow: <NextArrow />,
      prevArrow: <PreviousArrow />,
   }
   return (
      <MainContainer>
         <StyledSlider {...settings}>
            {infoSlide.map((item) => {
               return (
                  <Container>
                     <Div>
                        <img key={item.id} src={item.img} alt="" />
                        <Wrapper>
                           <Username>{item.name}</Username>
                           <Rating value={item.rating} readOnly />
                        </Wrapper>
                     </Div>
                     <p>{item.review}</p>
                  </Container>
               )
            })}
         </StyledSlider>
      </MainContainer>
   )
}

const MainContainer = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   overflow: 'hidden',
})

const Container = styled('div')({
   boxSizing: 'border-box',
   textAlign: 'left',
   padding: '40px',
   width: '782px',
})

const Wrapper = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   padding: 0,
})

const Username = styled('h3')({
   margin: 0,
})

const Div = styled('div')({
   display: 'flex',
   gap: '14px',
   paddingBottom: '20px',
})

const StyledSlider = styled(Slider)({
   position: 'relative',

   '& .slick-track': {
      display: 'flex',
      gap: '36px',
   },
   '& .slick-list': {
      width: '782px',
   },
   '& .slick-slide': {
      backgroundColor: '#F3F1F1',
      borderRadius: '20px',
   },

   '& .slick-dots': {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'center',
      gap: '14px',
      paddingTop: '43px',
      paddingBottom: '10px',
      '& .slick-active': {
         background: 'none',
         ellipse: {
            fill: '#048741',
         },
      },
   },
   '& .slick-active': {
      backgroundColor: '#DBF0E5',

      ellipse: {
         fill: '#048741',
      },
   },
   '& .slick-arrow': {
      cursor: 'pointer',
   },
   '& .slick-next': {
      position: 'absolute',
      top: '289px',
      zIndex: '8',
      left: '470px',
   },
   '& .slick-prev': {
      position: 'absolute',
      top: '289px',
      zIndex: '8',
      left: '273px',
   },
   '& .slick-next:hover, .slick-prev:hover': {
      circle: {
         fill: 'url(#paint0_linear_92_5157)',
      },
      path: {
         fill: '#fff',
      },
   },
})
