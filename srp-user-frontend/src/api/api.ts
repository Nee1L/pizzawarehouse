import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Education } from "../types/education";
import { FilterSectionType } from "../types/filter"; 
import { Project } from "../types/project";
import { Sort } from "../types/sort";
import { VacancyCard } from "../types/vacancies";

export const getAllVacancies = createAsyncThunk<VacancyCard[]>(
  'vacancies/findAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:9071/api/vacancies/find-new');
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to fetch all vacancies. ${(error as Error).message}`
      });
    }
  }
);

export const getVacancyById = createAsyncThunk<VacancyCard, string>(
  'vacancies/getById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:9071/api/vacancies/get/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to fetch VacancyCard by ID. ${(error as Error).message}`
      });
    }
  }
);

export const filterVacanciesByEmploymentType = createAsyncThunk<VacancyCard[], string>(
  'vacancies/filterByEmploymentType',
  async (employmentType, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:9071/api/vacancies/filter/${employmentType}`);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to filter vacancies by employment type. ${(error as Error).message}`
      });
    }
  }
);

export const sortVacanciesByDateAsc = createAsyncThunk<VacancyCard[]>(
  'vacancies/sortByDateAsc',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:9071/api/vacancies/sort/by-date/asc');
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to sort vacancies by date (ascending). ${(error as Error).message}`
      });
    }
  }
);

export const sortVacanciesByDateDesc = createAsyncThunk<VacancyCard[]>(
  'vacancies/sortByDateDesc',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:9071/api/vacancies/sort/by-date/desc');
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to sort vacancies by date (descending). ${(error as Error).message}`
      });
    }
  }
);

export const filterVacanciesByTitle = createAsyncThunk<VacancyCard[], string>(
  'vacancies/filterByTitle',
  async (title, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:9071/api/vacancies/filter/${title}`);
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to filter vacancies by title. ${(error as Error).message}`
      });
    }
  }
);

export const testSmth = createAsyncThunk<Education, any>(
  'test/smth',
  async (getAccessTokenSilently, { rejectWithValue }) => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'http://localhost:9071/',
          scope: "read:currentuser",
        },
      });

      const response = await axios.get('http://localhost:9071/api/education/get/1', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to get data from server. ${(error as Error).message}`
      });
    }
  }
);

export const getNewProjects = createAsyncThunk<Project[]>(
  'projects/getNew',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios("/api/public/project/find-new", {
        method: "GET",
      });

      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to fetch new projects. ${(error as Error).message}`
      });
    }
  }
);

export const getTopProjects = createAsyncThunk<Project[]>(
  'projects/getTop',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/public/project/find-all');
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to fetch top projects. ${(error as Error).message}`
      });
    }
  }
);

export const getAscending = createAsyncThunk<FilterSectionType []>(
  'filter/ascending',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:9071/api/projects/filter/ascending');
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to fetch projects in ascending order. ${(error as Error).message}`
      });
    }
  }
);

export const getDescending = createAsyncThunk<Sort[]>(
  'sort/descending',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:9071/api/projects/sort/descending');
      return response.data;
    } catch (error) {
      return rejectWithValue({
        message: `Failed to fetch projects in descending order. ${(error as Error).message}`
      });
    }
  }
);
