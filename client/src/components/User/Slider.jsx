import { Carousel } from "flowbite-react";
const Slider=()=>{
 return(

    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-20">
    <Carousel slideInterval={2000} >
      <img src="https://www.choicemarthawaii.com/wp-content/uploads/2017/06/slider-1-min-1.jpg" alt="..." />
      <img src="https://www.yogo.lk/assets/img-temp/1200x480/slide5.jpg" alt="..." />
      <img src="https://senuonline.com/image/cache/catalog/Slider/cash-on-delivery-srilanka-1140x400.jpg" alt="..." />
      <img src="https://cdn.youcan.shop/stores/4ad2e2e5f0fe2ee3890b51f2e169e1bf/others/fZ6aJm8LshscAVMvj7VnEE0smJL36Ls6vgxydHjv.jpeg" alt="..." />
 
    </Carousel>
  </div>

 )   
}
export default Slider;