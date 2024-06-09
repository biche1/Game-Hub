import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import Genres from "../assets/Data/Genres";
import { Game } from "./useGames";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: Genres, isLoading: false, error: null})

export default useGenres;