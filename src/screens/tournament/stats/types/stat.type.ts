import { Dispatch, SetStateAction } from "react";
import { GetAllPlayerResponse } from "../../../../shared/api/player/index.type";

export type TabWrapperProp = {
    activeTab:"topScorers" | "bestPlayers";
    setActiveTab: Dispatch<SetStateAction<"topScorers" | "bestPlayers">>;
};

export type Prop = {
  label: string;
  isLastIndex: boolean;
  item: GetAllPlayerResponse;
  value: number;
  index:number
};
