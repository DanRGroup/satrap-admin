import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import graph from 'layouts/AppLayout/graph';
import client from 'config/apolloClient';

import { result } from 'validate.js';

export const fetchContractTypes = createAsyncThunk('models/fetchContractTypes', async () => {
  const response = await client.query({
    query: graph.list.query,
    fetchPolicy: 'no-cache',
  });
  return response.data.contractType.data;
});

export const setModelsSlice = createSlice({
  name: 'models',
  initialState: {
    test: [],
    contractTypes: [
      { const: '1', title: 'natural_official' },
      { const: '2', title: 'natural_agreement' },
      { const: '3', title: 'legal_official' },
      { const: '4', title: 'legal_agreement' },
    ],
    contractStatuses: [
      { const: 'REGISTERED', title: 'registered' },
      { const: 'DOING', title: 'doing' },
      { const: 'DONED', title: 'done' },
      { const: 'SUSPENDED', title: 'suspend' },
      { const: 'CANCELED', title: 'canceled' },
    ],
    siteStatuses: [
      { const: 'READY', title: 'ready' },
      { const: 'UNREADY', title: 'unready' },
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
    taskStatuses: [
      { const: '1', title: 'doing' },
      { const: '2', title: 'done' },
      { const: '3', title: 'reviewed' },
      { const: '4', title: 'supervisor_confirmed' },
      { const: '5', title: 'workshop_manager_confirmed' },
      { const: '6', title: 'canceled_by_driver' },
      { const: '7', title: 'canceled_by_supervisor' },
      { const: '8', title: 'suspended' },
      { const: '9', title: 'finished' },
    ],
    limitedTaskStatuses: [
      { const: '2', title: 'done' },
      { const: '6', title: 'canceled_by_driver' },
      { const: '8', title: 'suspended' },
    ],
    supervisorTaskStatuses: [
      { const: '2', title: 'done' },
      { const: '3', title: 'reviewed' },
      { const: '4', title: 'supervisor_confirmed' },
      { const: '7', title: 'canceled_by_supervisor' },
      { const: '8', title: 'suspended' },
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
      // { const: '1', title: 'user' },
      { const: '2', title: 'manager' },
      { const: '3', title: 'operator' },
      { const: '4', title: 'workshop_manager' },
      { const: '5', title: 'workshop_operator' },
      { const: '6', title: 'workshop_supervisor' },
      { const: '7', title: 'site_manager' },
      { const: '8', title: 'financial_manager' },
      { const: '9', title: 'driver' },
      { const: '13', title: 'employer' },
    ],
    userRoles: [
      { const: '3', title: 'company_ceo' },
      { const: '4', title: 'company_operator' },
      { const: '5', title: 'company_financial' },
      { const: '6', title: 'workshop_manager' },
      { const: '8', title: 'workshop_supervisor' },
      { const: '9', title: 'site_manager' },
      { const: '10', title: 'owner' },
      { const: '11', title: 'driver' },
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
      { const: '5', title: 'displacement' },
    ],
    vehicleTypes: [
      { const: '1', title: 'single_truck' },
      { const: '2', title: 'double_truck' },
      { const: '3', title: 'excavator' },
      { const: '4', title: 'loader_truck' },
    ],
    vehicleStatuses: [
      { const: 'RUNING', title: 'runing' },
      { const: 'REPAIRING', title: 'repairing' },
      { const: 'STOPED', title: 'stoped' },
      { const: 'IDLE', title: 'idle' },
    ],
    workshopStatuses: [
      { const: '1', title: 'in_pending' },
      { const: '2', title: 'in_operation' },
      { const: '3', title: 'finished' },
    ],
  },
  reducers: {
    setModels: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContractTypes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContractTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.test = action.payload;
      })
      .addCase(fetchContractTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setModels } = setModelsSlice.actions;

export default setModelsSlice.reducer;
