import ApiClient from "@/config/axios";
import { Movie } from "@/models/movie";


interface Props {
    page: string
    limit: string
}

const getMovies = async ({ page, limit }: Props) => {
    const response: Movie[] = await ApiClient()
        .get(`/movies?page=${page}&limit=${limit}`)
        .then((res) => res.data);

    return response;
};

export default getMovies