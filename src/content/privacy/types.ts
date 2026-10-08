export type PrivacyCopy = {
  title: string;
  intro: string;
  updated: string;
  contents: string;
  contact: string;
  contactText: string;
  email: string;
  copy: string;
  copied: string;
  copyFailed: string;
  deletion: string;
  deletionSteps: [string, string, string];
  deletionNote: string;
  providers: string;
  sections: { id: string; title: string; paragraphs: string[] }[];
};
