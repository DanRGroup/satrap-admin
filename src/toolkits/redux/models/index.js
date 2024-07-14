import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const setModelsSlice = createSlice({
  name: 'models',
  initialState: {
    contractTypes: [
      { const: '2', title: 'natural' },
      { const: '4', title: 'legal' },
    ],
    contractStatuses: [
      { const: 'REGISTERED', title: 'registered' },
      { const: 'DOING', title: 'doing' },
      { const: 'DONED', title: 'done' },
      { const: 'SUSPENDED', title: 'suspend' },
      { const: 'CANCELED', title: 'canceled' },
    ],
    taskTypes: [
      { const: '1', title: 'carrying_cargo' },
      { const: '2', title: 'excavation' },
      { const: '3', title: 'quarrying' },
      { const: '4', title: 'packet' },
      { const: '5', title: 'picor' },
      { const: '6', title: 'leveling' },
      { const: '7', title: 'pit_consolidation' },
      { const: '8', title: 'shot_and_filling' },
      { const: '9', title: 'wiating' },
    ],
    operationTypes: [
      { const: '1', title: 'service' },
      { const: '2', title: 'tonnage' },
      { const: '3', title: 'houry' },
      { const: '4', title: 'shift' },
    ],
    materialTypes: [
      { const: '1', title: 'debris' },
      { const: '2', title: 'rocks' },
      { const: '3', title: 'gravel' },
      { const: '4', title: 'sand_dune' },
      { const: '5', title: 'sand' },
      { const: '6', title: 'pea_gravel' },
      { const: '7', title: 'sandy_loam' },
      { const: '8', title: 'oversize' },
    ],
    shiftTypes: [
      { const: '1', title: 'morning' },
      { const: '2', title: 'night' },
    ],
    userTypes: [
      { const: '1', title: 'user' },
      { const: '2', title: 'manager' },
      { const: '3', title: 'operator' },
      { const: '4', title: 'workshop_manager' },
      { const: '5', title: 'workshop_operator' },
      { const: '6', title: 'workshop_supervisor' },
      { const: '7', title: 'site_manager' },
      { const: '8', title: 'financial_manager' },
      { const: '9', title: 'driver' },
    ],
    userStatuses: [
      { const: '1', title: 'waiting_for_activate' },
      { const: '2', title: 'verified' },
      { const: '3', title: 'deactive' },
      { const: '4', title: 'deleted' },
    ],
    siteTypes: [
      { const: '1', title: 'mine' },
      { const: '2', title: 'furnace' },
      { const: '3', title: 'defile' },
      { const: '4', title: 'desert' },
    ],
    vehicleTypes: [
      { const: '1', title: 'single_truck' },
      { const: '2', title: 'double_truck' },
      { const: '3', title: 'excavator' },
      { const: '4', title: 'loader_truck' },
    ],
  },
  reducers: {
    setModels: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        payload,
      };
    },
  },
});

export const { setModels } = setModelsSlice.actions;

export default setModelsSlice.reducer;
