export interface ProjectType {
  id: number;
  title: string;
  shortDescr: string;
  deployedVersionUrl?: string;
  clientRepoUrl?: string;
  serverRepoUrl?: string;
  longDescr: string;
  thumbNail: string;
  technologiesUsed: string[];
}
