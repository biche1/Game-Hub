import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import useData from "./UseData";
import { Game } from "./useGames";

export interface Genre {
    id: number;
    name: string;
}

const useGenres = () => useData<Genre>('/genres')

export default useGenres;