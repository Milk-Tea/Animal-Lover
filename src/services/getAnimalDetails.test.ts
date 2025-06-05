import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock environment variables
process.env.VITE_API_BASE_URL = "https://api.example.com";
process.env.VITE_API_TOKEN = "test-token";

describe("getAnimalDetails", () => {

  test("should return empty array when no favorite animals in localStorage", async () => {
  });
});