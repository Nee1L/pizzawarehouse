import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFilterDataAc, getFilterDataDc, getFilterJobAc, getFilterJobDc, getFilterViews } from "../../../api/api";
import { updateLoadStatus } from "../../../functions/update-status";
import { Education } from "../../../types/education";
import { Project } from "../../../types/project";
import { StatusEnum } from "../../../types/status-enum";

export type SortSlice = {
    education: Education | null;
    newProjects: Project[] | null;  
    topProjects: Project[] | null; 
    loadStatus: StatusEnum[];
    allRequestsComplete: boolean;
};

const initialState: SortSlice = {
  education: null,
  newProjects: [],
  topProjects: [],
  loadStatus: [StatusEnum.LOADING],
  allRequestsComplete: false
};

const sortSlice = createSlice({
  name: "sortSlice",
  initialState,
  reducers: {
    resetState: (state) => {
      state.education = null;
      state.newProjects = [];
      state.topProjects = [];
      state.loadStatus = state.loadStatus.map(()=> StatusEnum.LOADING)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilterDataAc.fulfilled, (state) => {
        updateLoadStatus(state, StatusEnum.DONE)
      })
      .addCase(getFilterDataAc.pending, (state) => {
        updateLoadStatus(state, StatusEnum.LOADING)
      })
      .addCase(getFilterDataAc.rejected, (state) => {
        updateLoadStatus(state, StatusEnum.REJECTED)
      })
      .addCase(getFilterDataDc.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.newProjects = action.payload;  
        updateLoadStatus(state, StatusEnum.DONE)
      })
      .addCase(getFilterDataDc.pending, (state) => {
        updateLoadStatus(state, StatusEnum.LOADING)
      })
      .addCase(getFilterDataDc.rejected, (state) => {
        updateLoadStatus(state, StatusEnum.REJECTED)
      })
      .addCase(getFilterJobAc.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.topProjects = action.payload; 
        updateLoadStatus(state, StatusEnum.DONE)
      })
      .addCase(getFilterJobAc.pending, (state) => {
        updateLoadStatus(state, StatusEnum.LOADING)
      })
      .addCase(getFilterJobAc.rejected, (state) => {
        updateLoadStatus(state, StatusEnum.REJECTED)
      })
      .addCase(getFilterJobDc.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.newProjects = action.payload;  
        updateLoadStatus(state, StatusEnum.DONE)
      })
      .addCase(getFilterJobDc.pending, (state) => {
        updateLoadStatus(state, StatusEnum.LOADING)
      })
      .addCase(getFilterJobDc.rejected, (state) => {
        updateLoadStatus(state, StatusEnum.REJECTED)
      })
      .addCase(getFilterViews.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.topProjects = action.payload; 
        updateLoadStatus(state, StatusEnum.DONE)
      })
      .addCase(getFilterViews.pending, (state) => {
        updateLoadStatus(state, StatusEnum.LOADING)
      })
      .addCase(getFilterViews.rejected, (state) => {
        updateLoadStatus(state, StatusEnum.REJECTED)
      });
  },
});

export const { resetState } = sortSlice.actions;
export default sortSlice.reducer;
