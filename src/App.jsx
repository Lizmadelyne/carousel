import { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import './App.css';


function App(){
  const slides = [
    {
      url:'https://www.serfadu.com/wp-content/uploads/2020/10/mariposa-monarca-el-alma-de-los-muertos.jpg'
    },
    { 
      url:'https://images.unsplash.com/photo-1533048324814-79b0a31982f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyaXBvc2FzfGVufDB8fDB8fHww',
    },
    {
     url:'https://i0.wp.com/laderasur.com/wp-content/uploads/2022/12/mariposa-suicida.jpeg?resize=1919%2C1080&ssl=1',
    },
    {
      url:'https://www.culturarecreacionydeporte.gov.co/sites/default/files/styles/870_x_540/public/2023-06/butterflies-g5304b8912_640.jpg?itok=-fFuMNcV'
    },
{
      url:'https://www.worldanimalprotection.cr/cdn-cgi/image/fit=cover,width=800,format=auto/siteassets/article/gettyimages-527950221.jpg'
    },
    {
      url:'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/ciudades-sin-mariposas-por-la-sequia-y-el-calor/11051323-2-esl-MX/Ciudades-sin-mariposas-por-la-sequia-y-el-calor.jpg'
    },
    {
      url:'https://i0.wp.com/ecoosfera.com/wp-content/uploads/2022/11/LK65L76I3ZDO5NYEODX56NY3YI-1.jpg?ssl=1'
    },
    {
      url:'https://humanidades.com/wp-content/uploads/2018/09/mariposas-1-e1579802223127.jpg',
    },
    {
      url:'https://www.mariposas.wiki/Imagenes/mariposa-de-colores-oscuras.jpg'
    },
    {
      url: 'https://www.hogarmania.com/archivos/201409/mariposa-liuchiou-blue-spotted-milkweed-1280x720x80xX.jpg'
    }

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = ()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () =>{
    const isLastSlide = currentIndex === slides.length - 1;
     const newIndex = isLastSlide ? 0 : currentIndex + 1;
     setCurrentIndex(newIndex)
  }
  const  goToSlide =(slideIndex) =>{
    setCurrentIndex(slideIndex)
  };

  return(

      <div className= " m-auto py-16 px-4 relative lg:max-w-[600px] h-[500px]   sm:max-w-4 ">
        <h1 className=" text-blue-600 mb-6 text-center sm:text-6xl md:text-4xl lg:text-8xl">Butterflyes</h1>
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <img
        src={slides[currentIndex].url}
        alt="slide"
        className="w-full h-full object-cover duration-500"
        />
         <div className='absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BiChevronLeft onClick={prevSlide} size={30} />
        </div>
        <div className='absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BiChevronRight onClick={nextSlide} size={30} />
        </div>
        </div>

        <div className=" flex mt-4 justify-center ">
          {slides.map((slide, slideIndex) =>(
            <div 
            key={slideIndex}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              slideIndex === currentIndex ? 'bg-orange-500' :  'bg-gray-500'
            }`}
            onClick={() => goToSlide(slideIndex)}
            >
            <RxDotFilled className="text-gray-500"/>
            </div>
          ))}

        </div>
       
      </div> 
  )
  }

  
  export default App;
