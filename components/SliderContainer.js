import ProductCard from "./ProductCard";

const SliderContainer = (props) => {
  return (
    <div className="flex flex-col">
      <h1 className="flex pl-[2%] py-[1%] border-b-2">{props.head_txt}</h1>
      <div className="flex gap-2 w-full">
        <ProductCard
          img="item.svg"
          title="Iphone 14 promax 256 gig"
          price={950}
          rating={5}
        />
        <ProductCard
          img="item.svg"
          title="Iphone 14 promax 256 gig"
          price={950}
          rating={4.5}
        />
        <ProductCard
          img="item.svg"
          title="Iphone 14 promax 256 gig"
          price={950}
          rating={5}
        />
        <ProductCard
          img="item.svg"
          title="Iphone 14 promax 256 gig"
          price={950}
          rating={1.2}
        />
      </div>
    </div>
  );
};

export default SliderContainer;
