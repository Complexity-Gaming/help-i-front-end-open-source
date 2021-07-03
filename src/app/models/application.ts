import {Player} from "./player";
import {Tittle} from "./tittle";
import {ApplicationDetails} from "./applicationDetails";

export interface Application {
  id: number;
  player: Player;
  tittle: Tittle;
  applicationDetails: ApplicationDetails;
  reviewComment: string;
  status: string;
}
