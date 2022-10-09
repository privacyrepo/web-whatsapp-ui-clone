import { useContext, useState } from "react";
import { JobContext } from "../../context/JobContext";
import Avatar from "../Avatar";
import { JobListData } from "../../types/Job";
import Moment from "react-moment";

interface JobListProps {
  isFirstJob?: boolean;
  data: JobListData;
}

export default function JobList(props: JobListProps) {
  const { isFirstJob, data } = props;
  const { setJob } = useContext(JobContext);
  const {
    title: jobTitle,
    company: companyName,
    location,
    type: typeOfPosition,
    createdOn,
    logo,
    isFeatured,
  } = data;
  const borderHeight = isFirstJob ? "0px" : "1px";
  const [isHover, setHover] = useState(false);

  return (
    <div
      className="flex items-center w-full h-[4.5rem] bg-[#111B21] pl-3 pr-4 hover:bg-[#2A3942] cursor-pointer"
      onMouseMove={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setJob(data)}
    >
      <div className="flex w-[4.8rem]">
        <Avatar width="w-12" height="h-12" image={logo} />
      </div>
      <div className="flex flex-col w-full">
        <hr
          style={{ borderTop: `${borderHeight} solid rgba(134,150,160,0.15)` }}
        />
        <div className="flex py-2">
          <div className="flex flex-col w-full h-full ">
            <span className="overflow-y-hidden text-ellipsis text-white text-base">
              <h1 className="text-sm">{jobTitle}</h1>
            </span>
            <span className="overflow-y-hidden text-ellipsis text-[#aebac1] text-sm">
              {companyName}
            </span>
          </div>
          <div className="flex flex-col w-full text-[#aebac1]">{location}</div>
          <div className="flex flex-col w-auto text-[#aebac1]">
            <h1 className="text-xs">
              <Moment fromNow ago>
                {createdOn}
              </Moment>
            </h1>
            {isHover ? (
              <span className="flex cursor-pointer h-full items-center justify-center">
                <svg viewBox="0 0 19 20" width="19" height="20" className="">
                  <path
                    fill="currentColor"
                    d="m3.8 6.7 5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"
                  ></path>
                </svg>
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
