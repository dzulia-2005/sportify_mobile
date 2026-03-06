import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Update } from "../../../../../shared/api/mySchool"

export const useUpdateMySchoolMutation = (Id: string | undefined) => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn:(formdata:FormData)=>Update(Id!,formdata),
        mutationKey:["update-mySchool"],
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["get-mySchool"]})
        }
    })
}