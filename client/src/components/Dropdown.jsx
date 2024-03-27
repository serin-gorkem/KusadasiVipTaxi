import { IoMdArrowDropdown } from "react-icons/io";

export default function Dropdown() {
  return (
    <div className="flex justify-center items-center gap-1">
      <p className="text-light-text"> ENG </p>
      <IoMdArrowDropdown className=" text-highlight-color cursor-pointer" />
    </div>
  );
}
