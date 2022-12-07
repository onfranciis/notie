import Image from "next/image";
import { MdEdit } from "react-icons/md";

const Top = () => {
  const Logo = 0;

  return (
    <div className=" items-center grid grid-cols-3 py-4">
      <div className="col-start-2 col-span-1  justify-center">
        <Image
          alt="Notie Logo"
          src="/Notie_Logo2.svg"
          height={85 + Logo}
          width={208 + Logo}
        />
      </div>
      <div className="flex justify-center">
        <div className="bg-primary h-fit w-fit p-1 rounded-lg hover:bg-primary2 transition-all duration-100 col-start-3 ">
          <MdEdit size="1.7em" title="New Note" className="text-tertiary " />
        </div>
      </div>
    </div>
  );
};

export default Top;
