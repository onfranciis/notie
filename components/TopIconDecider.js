import { BsInfoLg } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { MdEdit } from "react-icons/md";

export const TopIconDecider = ({
  Mode,
  setMode,
  setMetaTitle,
  setSave,
  setInfo,
}) => {
  if (Mode == "View") {
    return (
      <div
        className="bg-primary h-fit w-fit p-1 rounded-lg hover:bg-primary2 transition-all duration-100 col-start-3 "
        onClick={() => {
          setMode("Edit");
        }}
      >
        <MdEdit size="1.7em" title="Add New Note" className="text-tertiary " />
      </div>
    );
  } else if (Mode == "Edit" || Mode == "EditNote") {
    return (
      <div
        className="bg-primary h-fit w-fit p-1 rounded-lg hover:bg-primary2 transition-all duration-100 col-start-3 "
        onClick={() => {
          setMode("View");
          setMetaTitle("Notie By Onfranciis");
          setSave();
        }}
      >
        <IoMdCheckmark size="1.7em" title="Done" className="text-tertiary " />
      </div>
    );
  } else if (Mode == "Preview") {
    return (
      <>
        <div
          className="bg-primary h-fit w-fit p-1 rounded-lg hover:bg-primary2 transition-all duration-100 col-start-3 "
          onClick={() => {
            setMode("Edit");
          }}
        >
          <MdEdit size="1.7em" title="Done" className="text-tertiary " />
        </div>

        <div
          className="bg-primary h-fit w-fit p-1 rounded-lg hover:bg-primary2 transition-all duration-100 col-start-3 "
          onClick={() => {
            setInfo(true);
          }}
        >
          <BsInfoLg size="1.7em" title="Done" className="text-tertiary " />
        </div>
      </>
    );
  }
};
