import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreatePlayer, DeletePlayerById, UpdatePlayerById } from "../../../api/player";
import type { GetTeamResponse } from "../../../api/team/index.type";

export const CreatePlayerMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn:CreatePlayer,
        mutationKey:["create-player"],
        onSuccess:(newPlayer)=>{
            queryclient.invalidateQueries({ queryKey: ["getall"] });

            queryclient.setQueryData<GetTeamResponse[]>(["getall"], (old) => {
                if (!old) return [];
                return old.map((team) =>
                  team.id === newPlayer.teamId
                    ? { ...team, players: [...team.players, newPlayer] }
                    : team
                );
              });
        }
    });
}

export const UpdatePlayerMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn:UpdatePlayerById,
        mutationKey:["update-player"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["getplayerbyId"]});
        }
    });
}

export const DeletePlayerMutation = () => {
    const queryclient = useQueryClient()
    return useMutation({
        mutationFn:DeletePlayerById,
        mutationKey:["delete-player"],
        onSuccess:()=>{
            queryclient.invalidateQueries({queryKey:["getplayerbyId"]});
        }
    })
}
