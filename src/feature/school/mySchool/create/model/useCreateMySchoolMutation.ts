import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Create } from "../../../../../shared/api/mySchool"

export const useCreateMySchoolMutation = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:Create,
        mutationKey:["create-mySchool"],
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["get-mySchool"]})
        }
    })
}
