import { useMutation, useQueryClient } from "@tanstack/react-query"
import { DeleteMySchool } from "../../../../shared/api/mySchool"

export const useDeleteMySchoolMutation = (Id:string) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:()=>DeleteMySchool(Id),
        mutationKey:["delete-mySchool"],
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["get-mySchool"]})
        }
    })
}