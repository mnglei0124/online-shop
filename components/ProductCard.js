import Image from "next/image";
import Link from "next/link";

//img, description, price, rating
const ProductCard = (product) => {
  return (
    // <div className="flex flex-col gap-1">
    //   <Image src={product.img} width={250} height={190} alt="item" />
    // </div>
    <Link
      href={`/products/${product._id}`}
      className="flex flex-col justify-center items-center m-auto border border-red-200 p-3 my-2 rounded-xl"
    >
      <div className="flex flex-col">
        <Image src={product.img} alt={product.title} width={250} height={190} />
      </div>
      <div className="flex flex-col gap-3 py-6">
        <h3 className="product-title">{product.title}</h3>

        <div className="flex justify-between">
          <p className="text-black text-sm capitalize">
            {`$ ${product.price}`}
          </p>
          <p className="text-black text-lg font-semibold">
            <span></span>
            <span></span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
