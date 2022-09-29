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

export type { Message, Job, JobListData };
