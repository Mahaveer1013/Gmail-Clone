
import { useMutation } from "react-query";
import { useStore } from "./useStore";
import { postData } from "../components/api/postData";

export const useApiPost = (url: string, options: RequestInit = {}) => {
    const { setData, setLoading, setError } = useStore();

    const mutation = useMutation(
        (body: unknown) => postData(url, body, options),
        {
            onMutate: () => {
                setLoading(true);
                setError(null);
            },
            onSuccess: (data) => {
                setData(data);
                setLoading(false);
            },
            onError: (error: Error) => {
                setError(error.message);
                setLoading(false);
            },
            onSettled: () => {
                setLoading(false);
            },
        }
    );

    return mutation;
};
