export enum Team {
  CORE = "Core Team",
  MEDIA = "Media Team",
  TECH = "Tech Team"
}

export enum Role {
  FOUNDER = "Founder",
  COORDINATOR = "Coordinator",
  CO_COORDINATOR = "Co-coordinator",
  TEAM_LEAD = "Team Lead",
  MENTOR = "Mentor",
  FACULTY = "Faculty Advisor",
  MEMBER = "Member",
}

export enum Status {
  ACTIVE = "Active",
  ALUMNI = "Alumni",
  RESIGNED = "Resigned",
  REMOVED = "Removed",
}

export interface Member {
  id: string;
  name: string;
  teams: Team[];
  roles: Role[];
  status: Status;
  linkedin?: string;
  email?: string;
  reason: string;
}

export const members: Member[] = [
  // FACULTY ADVISORS
  {
    id: "sanjeev-kumar",
    name: "Prof. Sanjeev Kumar",
    teams: [],
    roles: [Role.FACULTY],
    status: Status.ACTIVE,
    reason: "Chairperson of CSE Department",
  },
  {
    id: "anupma-sangwan",
    name: "Dr. Anupma Sangwan",
    teams: [],
    roles: [Role.FACULTY],
    status: Status.ACTIVE,
    reason: "Faculty in-charge of CyberPhoenix Club",
  },

  // ACTIVE MEMBERS
  {
    id: "uday",
    name: "Uday",
    teams: [Team.CORE, Team.TECH],
    roles: [Role.FOUNDER, Role.COORDINATOR, Role.TEAM_LEAD],
    status: Status.ACTIVE,
    reason:
      "Pioneering the club's technical direction and overseeing core infrastructure.",
  },
  {
    id: "harsh-sharma",
    name: "Harsh Sharma",
    teams: [Team.CORE],
    roles: [Role.COORDINATOR, Role.TEAM_LEAD],
    status: Status.ACTIVE,
    reason:
      "Driving organizational strategy and ensuring seamless collaboration across all divisions.",
  },
  {
    id: "yash-raj",
    name: "Yash Raj",
    teams: [Team.MEDIA],
    roles: [Role.CO_COORDINATOR],
    status: Status.ACTIVE,
    reason:
      "Bridging the gap between technical execution and visual communication.",
  },
  {
    id: "ashish",
    name: "Ashish",
    teams: [Team.CORE],
    roles: [Role.MEMBER],
    status: Status.ACTIVE,
    reason:
      "Managing foundational operations and facilitating club-wide initiatives.",
  },
  {
    id: "harsh-raj-ranjan",
    name: "Harsh Raj Ranjan",
    teams: [Team.CORE],
    roles: [Role.MEMBER],
    status: Status.ACTIVE,
    reason:
      "Strengthening the core framework and streamlining event management processes.",
  },
  {
    id: "priyanshi-singh",
    name: "Priyanshi Singh",
    teams: [Team.MEDIA],
    roles: [Role.MEMBER],
    status: Status.ACTIVE,
    reason:
      "Crafting engaging digital content and elevating the club's visual presence.",
  },
  {
    id: "dushyant-yadav",
    name: "Dushyant Yadav",
    teams: [Team.MEDIA],
    roles: [Role.MEMBER],
    status: Status.ACTIVE,
    reason:
      "Documenting club milestones and amplifying our reach across social platforms.",
  },
  {
    id: "yachika",
    name: "Yachika",
    teams: [Team.TECH],
    roles: [Role.MEMBER],
    status: Status.ACTIVE,
    reason:
      "Developing robust technical solutions and participating in competitive cybersecurity challenges.",
  },
  {
    id: "saniya-yadav",
    name: "Saniya Yadav",
    teams: [Team.TECH],
    roles: [Role.MEMBER],
    status: Status.ACTIVE,
    reason:
      "Analyzing vulnerabilities and contributing to hands-on security workshops.",
  },
  {
    id: "vikas",
    name: "Vikas",
    teams: [Team.TECH],
    roles: [Role.MEMBER],
    status: Status.ACTIVE,
    reason:
      "Building secure architectures and guiding junior members in technical labs.",
  },
  {
    id: "kunal",
    name: "Kunal",
    teams: [Team.TECH],
    roles: [Role.MEMBER],
    status: Status.ACTIVE,
    reason:
      "Optimizing web performance and implementing secure coding practices.",
  },

  {
    id: "prajwal-yadav",
    name: "Prajwal Yadav",
    teams: [Team.MEDIA],
    roles: [Role.MEMBER],
    status: Status.ACTIVE,
    reason:
      "Crafting engaging digital content and elevating the club's visual presence.",
  },

  // FOUNDERS
  {
    id: "lakshika",
    name: "Lakshika",
    teams: [Team.MEDIA],
    roles: [Role.FOUNDER, Role.MENTOR],
    status: Status.ALUMNI, // Treated as Mentor in UI due to Role.MENTOR
    reason:
      "Actively guiding the current cohort and shaping the club's long-term vision.",
  },
  {
    id: "aakash",
    name: "Aakash",
    teams: [Team.CORE],
    roles: [Role.FOUNDER, Role.MENTOR],
    status: Status.ALUMNI,
    reason:
      "Established the club's foundational principles and initial operating structure.",
  },
  {
    id: "piyush",
    name: "Piyush",
    teams: [Team.CORE],
    roles: [Role.FOUNDER, Role.MENTOR],
    status: Status.ALUMNI,
    reason:
      "Fostered the early community and initiated our first major technical events.",
  },
  {
    id: "kartik",
    name: "Kartik",
    teams: [Team.CORE],
    roles: [Role.FOUNDER, Role.MENTOR],
    status: Status.ALUMNI,
    reason:
      "Spearheaded the integration of practical cybersecurity labs into the curriculum.",
  },
  {
    id: "anuj-kumar",
    name: "Anuj Kumar",
    teams: [Team.CORE],
    roles: [Role.FOUNDER, Role.MENTOR],
    status: Status.ALUMNI,
    reason:
      "Drafted the original charter and built relationships with industry professionals.",
  },
  {
    id: "nishant",
    name: "Nishant",
    teams: [Team.CORE],
    roles: [Role.FOUNDER, Role.MENTOR],
    status: Status.ALUMNI,
    reason:
      "Architected the initial club infrastructure and recruitment protocols.",
  },
  {
    id: "kanishka",
    name: "Kanishka",
    teams: [Team.MEDIA],
    roles: [Role.FOUNDER, Role.MENTOR],
    status: Status.ALUMNI,
    reason:
      "Designed the original brand identity and launched our first digital campaigns.",
  },
  {
    id: "arpita",
    name: "Arpita",
    teams: [Team.TECH],
    roles: [Role.FOUNDER, Role.MENTOR],
    status: Status.ALUMNI,
    reason:
      "Developed the very first iteration of the CyberPhoenix digital platform.",
  },
  {
    id: "abhinav",
    name: "Abhinav",
    teams: [Team.TECH],
    roles: [Role.FOUNDER, Role.MENTOR],
    status: Status.ALUMNI,
    reason:
      "Laid the groundwork for our web presence and external communications.",
  },

  // PAST CONTRIBUTORS
  {
    id: "harshit-raj-mishra",
    name: "Harshit Raj Mishra",
    teams: [Team.MEDIA],
    roles: [Role.MEMBER],
    status: Status.REMOVED,
    reason: "",
  },
  {
    id: "dev",
    name: "Dev",
    teams: [Team.TECH],
    roles: [Role.MEMBER],
    status: Status.REMOVED,
    reason: "",
  },
  {
    id: "nitya",
    name: "Nitya",
    teams: [Team.CORE],
    roles: [Role.MEMBER],
    status: Status.RESIGNED,
    reason: "",
  },
  {
    id: "rudrakshi",
    name: "Rudrakshi",
    teams: [Team.CORE],
    roles: [Role.MEMBER],
    status: Status.RESIGNED,
    reason: "",
  },
  {
    id: "parshant",
    name: "Parshant",
    teams: [Team.CORE],
    roles: [Role.MEMBER],
    status: Status.RESIGNED,
    reason: "",
  },
  {
    id: "lakshya",
    name: "Lakshya",
    teams: [Team.MEDIA],
    roles: [Role.MEMBER],
    status: Status.RESIGNED,
    reason: "",
  },
  {
    id: "aaryan",
    name: "Aaryan",
    teams: [Team.MEDIA],
    roles: [Role.MEMBER],
    status: Status.RESIGNED,
    reason: "",
  },
  {
    id: "meera",
    name: "Meera",
    teams: [Team.TECH],
    roles: [Role.MEMBER],
    status: Status.RESIGNED,
    reason: "",
  },
];

export async function getMembers(): Promise<Member[]> {
  return members.sort((a, b) => a.name.localeCompare(b.name));
}
