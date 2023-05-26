import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Ganre {
    id: number;
    name: string;
}

interface GanresResponse {
  count: number;
  results: Ganre[];
}

const useGanres = () =>{
  const [ganres, setGanres] = useState<Ganre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);


  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<GanresResponse>("/genres",{signal: controller.signal})
      .then((res) => {
        setGanres(res.data.results);
        setLoading(false);
    })
      .catch((err) => {
        if(err instanceof CanceledError ) return;
        setError(err.message)
        setLoading(false);
    });
      return () => controller.abort();
  }, []);
  return {ganres ,error , isLoading};
}

export default useGanres;