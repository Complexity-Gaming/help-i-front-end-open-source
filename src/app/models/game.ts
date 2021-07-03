import {ProviderInformation} from "./providerInformation";

export interface Game {
  id: number;
  providerId: number;
  name: string;
  providerName: string;
  coverUrl: string;
  coverHeight: number;
  coverWidth: number;
  storyLine: string;
  summary: string;
  backgroundImageUrl: string;
}
