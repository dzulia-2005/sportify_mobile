import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateMyTournamentTeams, DeleteTeam, UpdateTeam } from "../../../api/myTournamentTeams"

export const useCreateTournamentTeamsMutation = (tournamentId:string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(formData:FormData)=>CreateMyTournamentTeams(tournamentId,formData),
        mutationKey:["createTournamentTeams"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getMySchoolAllTournaments"]})
        }
    })
}

export const useUpdateTournamentTeamsMutation = (teamId:string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(formData:FormData)=>UpdateTeam(teamId,formData),
        mutationKey:["updateTournamentTeams"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getMySchoolAllTournaments"]})
        }
    })
}

export const useDeleteTournamentTeamsMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:DeleteTeam,
        mutationKey:["deleteTournamentTeams"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getMySchoolAllTournaments"]})
        }
    })
}