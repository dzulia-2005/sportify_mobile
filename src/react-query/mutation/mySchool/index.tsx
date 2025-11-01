import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Create, DeleteMySchool, Update } from "../../../api/mySchool"

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