import React from "react";

interface ButtonProps {
  type?: string;
  loading?: boolean;
  title: string;
  isFull: boolean;
  isPrimary: boolean;
  disabled?: boolean;
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function Button(props: ButtonProps) {
  return props.type && props.type === "submit" ? (
    <div className="relative flex w-full">
      {props.loading ? (
        <div className=" lds-ellipsis absolute right-20 top-3 ">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : null}
      <input
        disabled={props.loading ?? props.disabled}
        className={`${
          props.loading ?? props.disabled
            ? " cursor-not-allowed border-gray-500 bg-gray-100 text-gray-800"
            : props.isPrimary
            ? "border-purple-600 bg-purple-600 text-white hover:bg-white hover:text-purple-600"
            : "border-purple-600 bg-white text-purple-600 hover:bg-purple-600 hover:text-white"
        } ${
          props.isFull ? "w-full" : ""
        } cursor-pointer whitespace-nowrap rounded border  px-5 py-2 text-center text-base font-semibold outline-0`}
        value={props?.title}
        type="submit"
      />
    </div>
  ) : (
    <div
      onClick={props.handleClick}
      className={`${
        props.isPrimary
          ? "bg-purple-600 text-white hover:bg-white hover:text-purple-600"
          : "bg-white text-purple-600 hover:bg-purple-600 hover:text-white"
      } ${
        props.isFull ? "w-full" : "w-p150"
      } cursor-pointer whitespace-nowrap rounded border border-purple-600 px-5 py-3 text-center text-base font-semibold`}
    >
      {props?.title}
    </div>
  );
}

export default Button;
