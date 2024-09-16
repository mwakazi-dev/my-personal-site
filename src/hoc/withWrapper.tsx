import React, { FC } from "react";

type Props = {
  WrappedComponent: any;
};

const withWrapper = (WrappedComponent: React.ComponentType<any>): FC<Props> => {
  const WithSection: FC<Props> = (props) => {
    return (
      <div className="flex flex-col justify-center p-4 md:w-[50%] mx-auto  ">
        <WrappedComponent {...props} />
      </div>
    );
  };
  return WithSection;
};

export default withWrapper;
