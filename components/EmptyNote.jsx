import Link from "next/link";
import { MdEdit } from "react-icons/md";
import { receiveNote } from "./HandleNote";

const EmptyNote = ({ mode, setMode }) => {
  return (
    mode == "View" &&
    receiveNote()?.length == 0 && (
      <div className=" max-w-[90%] text-center text-primary bg-[white] py-4 px-4  drop-shadow-[0_0_2px_black] rounded-md mt-5">
        <h2 className="mb-5">
          Welcome to{" "}
          <em className="font-bold">
            Notie by{" "}
            <Link
              href="https://www.onfranciis.dev"
              target="_blank"
              className="underline"
            >
              onfranciis
            </Link>
          </em>
        </h2>

        <div className="flex w-full justify-center items-center flex-wrap gap-4">
          <p className="">You can get started by clicking on the </p>

          <div
            className="bg-primary h-fit w-fit p-1 rounded-lg hover:bg-primary2 transition-all duration-100"
            onClick={() => {
              setMode("Edit");
            }}
          >
            <MdEdit
              size="1em"
              title="Create New Note"
              className="text-tertiary "
            />
          </div>

          <p>icon.</p>
        </div>
        <br />
        <p>You can save it in your bookmark for easy access.</p>
        <br />
        <p>
          For feedbacks, support or enquiries, reach out to me at{" "}
          <Link href="mailto:hello@onfranciis.dev">hello@onfranciis.dev</Link>{" "}
        </p>
      </div>
    )
  );
};

export default EmptyNote;
