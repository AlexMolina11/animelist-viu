import * as SQLite from "expo-sqlite";
import { Anime, AnimeFormData } from "../types/anime";

const database = SQLite.openDatabaseSync("anime_list_viu.db");

export const initAnimeDatabase = () => {
  database.execSync(`
    CREATE TABLE IF NOT EXISTS animes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      genre TEXT NOT NULL,
      episodes INTEGER NOT NULL,
      rating REAL NOT NULL,
      status TEXT NOT NULL,
      description TEXT NOT NULL
    );
  `);
};

export const getAnimes = (): Anime[] => {
  return database.getAllSync<Anime>("SELECT * FROM animes ORDER BY id DESC;");
};

export const getAnimeById = (id: number): Anime | null => {
  const anime = database.getFirstSync<Anime>(
    "SELECT * FROM animes WHERE id = ?;",
    [id],
  );

  return anime ?? null;
};

export const createAnime = (animeData: AnimeFormData) => {
  database.runSync(
    `
    INSERT INTO animes (title, genre, episodes, rating, status, description)
    VALUES (?, ?, ?, ?, ?, ?);
    `,
    [
      animeData.title,
      animeData.genre,
      Number(animeData.episodes),
      Number(animeData.rating),
      animeData.status,
      animeData.description,
    ],
  );
};

export const updateAnime = (id: number, animeData: AnimeFormData) => {
  database.runSync(
    `
    UPDATE animes
    SET title = ?, genre = ?, episodes = ?, rating = ?, status = ?, description = ?
    WHERE id = ?;
    `,
    [
      animeData.title,
      animeData.genre,
      Number(animeData.episodes),
      Number(animeData.rating),
      animeData.status,
      animeData.description,
      id,
    ],
  );
};

export const deleteAnime = (id: number) => {
  database.runSync("DELETE FROM animes WHERE id = ?;", [id]);
};
