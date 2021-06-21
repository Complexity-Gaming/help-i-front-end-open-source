import {ProviderInformation} from "./providerInformation";

export interface Game {
  id: number;
  providerId: number;
  providerInformation: ProviderInformation
}
