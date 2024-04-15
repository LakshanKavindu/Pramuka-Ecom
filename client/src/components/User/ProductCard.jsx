
import { Card } from "flowbite-react"
const ProductCard=()=>{
    return(
        <Card
      className="max-w-sm m-10"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="https://www.johnsonsbaby.com/sites/jbaby_us_3/files/styles/product_image/public/product-images/jns_381371175024_600ml_00000_1000wx1000h.jpeg"
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>
     
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">$599</span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>

    )

}
export default ProductCard;