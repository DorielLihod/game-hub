import useData from "./useData";

export interface Ganre {
    id: number;
    name: string;
}


const useGanres = () => useData<Ganre>("/genres");

export default useGanres;