import Image from "next/image";
import { Button } from "./ui/button";

const AdBanner = () => {
  return (
    <div className="flex flex-row gap-12 w-full py-6 justify-center">
      <div className=" flex flex-col pt-[2%] gap-5">
        <h1 className="text-[75px] text-center">Tech Katsu</h1>
        <h2 className="text-[40px]">
          {'"Join the '}
          <span className="text-orange-700">tech revolution</span>
          {'"'}
        </h2>
        <Button className="bg-orange-700 mt-10">Explore More</Button>
      </div>
      <Image
        src="laptop-banner.svg"
        alt="laptop pic"
        width={720}
        height={440}
      />
    </div>
  );
};

export default AdBanner;
