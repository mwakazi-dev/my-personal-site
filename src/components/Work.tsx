import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Work } from "@/types/work";

type Props = {
  work: Work;
};

const WorkItem: FC<Props> = ({
  work: { id, companyName, summary, images },
}) => {
  return (
    <Link href={`/works/${id}`} className="w-full align ">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="relative w-[100%] min-h-[250px]">
          <Image
            src={images[0]}
            fill
            style={{ objectFit: "contain" }}
            alt="me"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center items-center my-4">
          <h2 className="text-md  font-bold antialiased">{companyName}</h2>
          <p className="text-sm text-center w-[90%] antialiased">{summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default WorkItem;
