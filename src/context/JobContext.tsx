import { createContext, ReactNode, useState } from "react";
import { Message, Job } from "../types/Job";

interface JobProviderProps {
  children: ReactNode;
}

interface JobContextType {
  job: Job;
  message: Message[];
  setJob: (job: Job) => void;
  setMessage: (message: Message[]) => void;
}

export const JobContext = createContext({} as JobContextType);

export const JobProvider = ({ children }: JobProviderProps) => {
  const [job, setJobData] = useState<Job>({} as Job);
  const [message, setMessageData] = useState<Message[]>([]);

  function setJob(job: Job) {
    setJobData(job);
  }

  function setMessage(message: Message[]) {
    console.log(message);
    setMessageData(message);
  }

  return (
    <JobContext.Provider
      value={{
        job,
        message,
        setJob,
        setMessage,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
