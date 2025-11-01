import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateTeam, deleteTeam, UpdateTeam } from "../../../api/mySchoolTeams"

export const useCreateMySchoolTeams = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:CreateTeam,
        mutationKey:["create-mySchoolTeam"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getTeamBySchoolId"]})
        }
    })
}

export const useUpdateMySchoolTeams = (Id:string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(formData:FormData)=>UpdateTeam(Id,formData),
        mutationKey:["update-mySchoolTeam"],
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["getById"]})
        }
    })
}

export const useDeleteMySchoolTeam = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(Id:string)=>deleteTeam(Id),
        mutationKey:["delete-mySchoolTeam"],
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["getById"]})
        }
    })
}