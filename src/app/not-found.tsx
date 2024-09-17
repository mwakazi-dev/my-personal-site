import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center p-4 md:w-[50%] mx-auto  gap-2 ">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl">Page not found</h1>
        <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
