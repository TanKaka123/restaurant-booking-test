import { useEffect, useState } from "react";
import {
    CREATE_RESTAURANT,
    READ_RESTAURANT,
    READ_RESTAURANT_BY_ID,
    DELETE_RESTAURANT_BY_ID,
    CREATE_RESERVATION,
    READ_RESERVATION,
    READ_RESERVATION_BY_ID,
    DELETE_RESERVATION_BY_ID
} from "../constants/action"
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Restaurant } from "../types/restaurant";

interface FetchResult<T> {
    data: any | null;
    error: any;
    loading: boolean;
    startFetching:any;
}

interface ActionUrlAPIParams {
    action: string;
    id?: string;
}

export const actionUrlAPI = ({ action, id }: ActionUrlAPIParams): { type: string; url: string } => {
    switch (action) {
        case CREATE_RESTAURANT:
            return {
                type: "POST",
                url: `${process.env.REACT_APP_API_CREATE_RESTAURANT}`
            };
        case READ_RESTAURANT:
            return {
                type: "GET",
                url: `${process.env.REACT_APP_API_READ_RESTAURANT}`
            };
        case READ_RESTAURANT_BY_ID:
            return {
                type: "GET",
                url: `${process.env.REACT_APP_API_READ_RESTAURANT}/${id}`
            };
        case DELETE_RESTAURANT_BY_ID:
            return {
                type: "DELETE",
                url: `${process.env.REACT_APP_API_DELETE_RESTAURANT}/${id}`
            };
        case CREATE_RESERVATION:
            return {
                type: "POST",
                url: `${process.env.REACT_APP_API_CREATE_RESERVATION}`
            };
        case READ_RESERVATION:
            return {
                type: "GET",
                url: `${process.env.REACT_APP_API_READ_RESERVATION}`
            };
        case READ_RESERVATION_BY_ID:
            return {
                type: "GET",
                url: `${process.env.REACT_APP_API_READ_RESERVATION}}/${id}`
            };
        case DELETE_RESERVATION_BY_ID:
            return {
                type: "DELETE",
                url: `${process.env.REACT_APP_API_DELETE_RESERVATION}}/${id}`
            };
        default:
            return {
                type: " ",
                url: ` `
            };
    }

};


interface UseFetchParameters {
    type: string;
    url: string;
}

export default function useFetch<T>(
    { type, url }: UseFetchParameters,
    dataRequest?: any,
    shouldFetch: boolean = true // New parameter to determine whether to make the API call
): FetchResult<T> {
    const [data, setData] = useState<Restaurant | null>(null);
    const [error, setError] = useState<AxiosError | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(dataRequest)
                if (shouldFetch) { // Check whether to make the API call
                    setLoading(true);
                    let response: AxiosResponse<T>;
                    try {
                        switch (type.toUpperCase()) {
                            case 'GET':
                                response = await axios.get<T>(url);
                                break;
                            case 'POST':
                                response = await axios.post<T>(url, dataRequest);
                                break;
                            case 'DELETE':
                                response = await axios.delete<T>(url);
                                break;
                            default:
                                throw new Error(`Unsupported HTTP method: ${type}`);
                        }

                        setData(response.data as Restaurant);
                    } catch (error: any) {
                        // Handle errors
                        console.error(`An error occurred: ${error.message}`);
                        // You might want to rethrow the error or handle it differently based on your requirements
                    } finally {
                        setLoading(false);
                    }
                }
            } catch (err) {
                setError(err as AxiosError);
            }
        };

        fetchData();
    }, [type, url, shouldFetch]);

    const startFetching = () => { 
        shouldFetch=true;
    }

    return { data, error, loading, startFetching };
}