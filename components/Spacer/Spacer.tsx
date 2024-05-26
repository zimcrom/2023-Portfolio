import React from "react";

const Spacer: React.FunctionComponent<{
  small?: boolean;
}> = ({ small }) => {
  return (
    <div
      className={`mx-auto flex flex-col items-center justify-center ${
        small ? "py-16" : "py-32"
      } md:flex-row h-auto w-full relative`}
    >
      &nbsp;
    </div>
  );
};

export default Spacer;
