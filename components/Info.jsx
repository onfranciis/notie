import { MdDelete } from "react-icons/md";
import { deleteNote, receiveNote } from "./HandleNote";

const Info = ({ Index, setIndex, setInfo }) => {
  const { Created, Date, Body, Title } = receiveNote()[Index];
  return (
    <div
      className="fixed h-screen w-screen top-0 left-0 flex flex-row justify-start items-end px-5 py-7 transition"
      onClick={() => setInfo(false)}
    >
      <div className=" flex-col bg-[white] max-h-[90vh] w-[25rem] py-2 px-4 rounded-lg drop-shadow-[0_0_5px_black] overflow-visible  relative">
        <div
          className="bg-primary h-fit w-fit max-w-fit p-1 rounded-lg hover:bg-primary2 transition-all duration-100 col-start-3 absolute right-[-15px] top-[-12px]"
          onClick={(e) => {
            e.stopPropagation();
            setInfo(false);
            setIndex(false);
            deleteNote(Index);
          }}
        >
          <MdDelete size="1.5em" title="Delete" className="text-tertiary " />
        </div>

        <p className="text-center text-lg font-bold overflow-scroll max-h-[50vh]">
          {Title}
        </p>

        <div className="flex flex-row gap-5 justify-between text-sm">
          <p className="font-bold">Created</p>
          <p className="text-right">{Created}</p>
        </div>

        <div className="flex flex-row gap-5 justify-between text-sm my-2">
          <p className="font-bold">Modified</p>
          <p className="text-right">{Date}</p>
        </div>

        <div className="flex flex-row gap-5 justify-between text-sm">
          <p className="font-bold">Word Count</p>
          <p className="text-right">{Body.split(" ").length}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
