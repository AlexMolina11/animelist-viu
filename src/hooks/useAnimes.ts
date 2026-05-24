import { useCallback, useEffect, useState } from "react";
import {
    createAnime,
    deleteAnime,
    getAnimeById,
    getAnimes,
    initAnimeDatabase,
    updateAnime,
} from "../database/animeDatabase";
import { Anime, AnimeFormData } from "../types/anime";

export const useAnimes = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadAnimes = useCallback(() => {
    try {
      initAnimeDatabase();
      const animeList = getAnimes();
      setAnimes(animeList);
    } catch (error) {
      console.error("Error loading animes:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAnimes();
  }, [loadAnimes]);

  const addAnime = (animeData: AnimeFormData) => {
    createAnime(animeData);
    loadAnimes();
  };

  const findAnimeById = (id: number) => {
    return getAnimeById(id);
  };

  const editAnime = (id: number, animeData: AnimeFormData) => {
    updateAnime(id, animeData);
    loadAnimes();
  };

  const removeAnime = (id: number) => {
    deleteAnime(id);
    loadAnimes();
  };

  return {
    animes,
    loading,
    loadAnimes,
    addAnime,
    editAnime,
    removeAnime,
    findAnimeById,
  };
};
