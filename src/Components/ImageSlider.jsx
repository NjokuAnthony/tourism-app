import React, { useState } from 'react'
import {BsChevronCompactRight, BsChevronCompactLeft} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const ImageSlider = () => {

    const slides = [
        {
            url: "https://images.pexels.com/photos/3510248/pexels-photo-3510248.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Desert"
        },

        {
            url: "https://images.pexels.com/photos/3843225/pexels-photo-3843225.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Crispy"
        },

        {
            url: "https://media.istockphoto.com/id/517168031/photo/delicious-gourmet-food.jpg?b=1&s=612x612&w=0&k=20&c=e5Tl0OY0jRL8-09_uyr7SLbRndug61DyJqQjkcCUUQg=",
            title: "Basmati"
        },

        {
            url: "https://images.pexels.com/photos/5490148/pexels-photo-5490148.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Lobster"
        },

        {
            url: "https://images.pexels.com/photos/5491014/pexels-photo-5491014.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Oyster"
        },

        {
            url: "https://images.pexels.com/photos/4871279/pexels-photo-4871279.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "sushi"
        },

        {
            url: "https://images.pexels.com/photos/4344431/pexels-photo-4344431.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Shrimp"
        },

        {
            url: "https://images.pexels.com/photos/5171016/pexels-photo-5171016.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Hamburger"
        },

        {
            url: "https://images.pexels.com/photos/10312840/pexels-photo-10312840.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Seafood"
        },

        {
            url: "https://images.pexels.com/photos/8753676/pexels-photo-8753676.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Turkey"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const IsFirstSlide = currentIndex === 0;
        const newIndex = IsFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }



  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{backgroundImage: `url(${slides[currentIndex].url})`}}>

        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>

        <div className="flex top-4 justify-center py-2">
            {
                slides.map((slide, slideIndex) => (
                    <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                        <RxDotFilled />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ImageSlider