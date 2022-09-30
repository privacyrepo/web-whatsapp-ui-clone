interface Message {
  me: boolean;
  message: string;
}

interface Job {
  contactName: string;
  messageHistory: Message[];
  image: string;
}

interface JobListData {
  contactName: string;
  lastMessage: string;
  lastTime: string;
  image: string;
  messageHistory: Message[];
}
interface JobListData {
  jobTitle: string;
  companyName: string;
  location: string;
  postTime: string;
  typeOfPosition: string;
  logo: string;
  isFeatured: boolean;
}
export type { Message, Job, JobListData };
