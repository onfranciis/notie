import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { BsInfoLg } from "react-icons/bs";
import { TopIconDecider } from "./TopIconDecider";

const Top = ({ Mode, setMode, setMetaTitle, setSave }) => {
  const Logo = 10;

  return (
    <div className=" items-center grid grid-cols-3 py-4">
      <div className="col-start-2 col-span-1  justify-center">
        <Image
          alt="Notie Logo"
          src="/Notie_Logo2.svg"
          height={85 + Logo}
          width={208 + Logo}
          onClick={() => setMode("View")}
        />
      </div>
      <div className="flex justify-center gap-2">
        <TopIconDecider
          Mode={Mode}
          setMode={(data) => setMode(data)}
          setMetaTitle={(data) => setMetaTitle(data)}
          setSave={setSave}
        />
      </div>
    </div>
  );
};

export default Top;
