interface Message {
  me: boolean;
  message: string;
}

interface Job {
  jobTitle: string;
  jobDescription: string;
  logo: string;
}

// interface JobListData {
//   contactName: string;
//   lastMessage: string;
//   lastTime: string;
//   image: string;
//   messageHistory: Message[];
// }
interface JobListData {
  jobTitle: string;
  companyName: string;
  location: string;
  postTime: string;
  typeOfPosition: string;
  logo: string;
  isFeatured: boolean;
  jobDescription: string;
}
export type { Message, Job, JobListData };
