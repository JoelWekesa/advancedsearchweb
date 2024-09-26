import ApiClient from "@/config/axios"
import { Movie } from "@/models/movie"

interface Props {
    id: string
}

const getMovie = async ({ id }: Props) => {
    const response: Movie | null = await ApiClient().get(`/movie?id=${id}`).then(res => res.data)

    return response
}

export default getMovie