import { httpClient } from "..";
import { PlanResponse } from "./index.type";

export const getPlan = (): Promise<PlanResponse[]> => {
  return httpClient.get<PlanResponse[]>('/plan').then((res) => res.data);
};