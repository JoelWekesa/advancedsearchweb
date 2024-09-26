import ApiClient from "@/config/axios"
import { Movie } from "@/models/movie"
import { useQuery } from "@tanstack/react-query"

interface Props {
    query: string | null

}

interface QueryProps extends Props {
    movies: Movie[]
}

export const getSearchResults = async ({ query }: Props) => {
    const response = await ApiClient().get(`/search?query=${query}&k=${100}`).then(res => res.data)

    return response
}


const useSearchResults = ({ query, movies }: QueryProps) => {
    return useQuery({
        queryKey: ["search", { query }],
        queryFn: async () => await getSearchResults({ query }),
        placeholderData: movies,
        enabled: !!query
    })
}

export default useSearchResults