
import { Card } from "flowbite-react"
// import Image from "next/image"
const ProductCard = () => {
  return (

    <Card
      className=" max-w-xs max-h-xs m-10"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="https://images.ctfassets.net/g8qtv9gzg47d/2zK4vsY5YYIWUS0Si8aimc/d03710c34e43053458c11f82b3ed7bcd/mini-beauty-products-8.JPG?fl=progressive&fm=jpg&q=80"
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
          className="rounded-lg bg-primary hover:bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>


  )

}
export default ProductCard;