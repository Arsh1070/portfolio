interface description {
  descId: string;
  descriptionInfo: string;
}
interface projectLinks {
  linkId: string;
  linkUrl: string;
  linkIcon: string;
}
export interface navBar {
  id: string;
  title: string;
  linkRef: string;
}
export interface socialContacts {
  socialId: string;
  linkUrl: string;
  socialIcon: string;
}

export interface navBarList {
  name: string;
  title: string;
}

export interface skills {
  id: number;
  techName: string;
  techProficiency: number;
}

export interface personalInfo {
  id: number;
  title: string;
  titleInfo: string;
}

export interface resume {
  id: string;
  timePeriod: string;
  designation: string;
  companyName: string;
  jobLocation: string;
  description: description[];
}

export interface education {
  id: string;
  timePeriod: string;
  CertificationName: string;
  institutionName: string;
  instituteLocation: string;
  description: description[];
}

export interface contactInfo {
  id: string;
  title: string;
  contactIcon: string;
  titleInfo: string | socialContacts[];
}

export interface projects {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
  techNames: string[];
  projectLinks: projectLinks[];
}
