import axios from "axios";
import type { Animal } from "../types";

/**
 * - Reads the list of favorite animal names from localStorage that was added by the user.
 * - Use the names of the favourite animals to access each animal's info in API ninja's endpoint.
 * - Reads the API url and token from .env.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

let client: ReturnType<typeof axios.create> | null = null;

function getClient() {
  if (!client) {
    client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "X-Api-Key": API_TOKEN,
      },
    });
  }
  return client;
}

function loadFavoriteNames(): string[] {
  try {
    const favouriteAnimalsFromLocalStorage =
      localStorage.getItem("favoriteAnimals");

    if (!favouriteAnimalsFromLocalStorage) return [];

    const transformedData = JSON.parse(favouriteAnimalsFromLocalStorage);

    if (Array.isArray(transformedData)) {
      return transformedData
        .map((entry) => {
          //only use the entry if the name exists otherwise it will not be able to retrieve details from the endpoint
          if (typeof entry === "object" && entry !== null && "name" in entry) {
            return String((entry as Animal).name)
              .toLowerCase()
              .trim();
          }
          return null;
        })
        .filter((n): n is string => typeof n === "string" && n.length > 0);
    }
    return [];
  } catch {
    return [];
  }
}

export const getAnimalDetails = async (): Promise<Animal[]> => {
  const client = getClient();
  const allAnimals: Animal[] = [];

  const favoriteAnimalNames = loadFavoriteNames();
  if (favoriteAnimalNames.length === 0) {
    return [];
  }

  // For each favorite name, fetch from `/animals?name=<name>`
  const requests = favoriteAnimalNames.map((favoriteAnimalName) =>
    client
      .get<Animal[]>(`/animals?name=${encodeURIComponent(favoriteAnimalName)}`)
      .then((response) => {
        const data = response.data;
        if (Array.isArray(data)) {
          return data;
        }
        return [];
      })
      .catch(() => []),
  );

  const results = await Promise.all(requests);
  console.log(results, "results");
  results.forEach((arr) => {
    if (Array.isArray(arr)) {
      allAnimals.push(...arr);
    }
  });

  return allAnimals;
};

export default getAnimalDetails;
