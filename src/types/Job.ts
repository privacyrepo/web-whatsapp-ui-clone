interface Message {
  me: boolean;
  message: string;
}

interface Job {
  title: string;
  description: string;
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
  title: string;
  company: string;
  location: string;
  createdOn: string;
  type: string;
  logo: string;
  isFeatured: boolean;
  description: string;
}
export type { Message, Job, JobListData };
