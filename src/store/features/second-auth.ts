import { getRegions, getSchools, getSubjects } from '@/services/SecondService';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

export const GetRegions = createAsyncThunk(
    'user/location/regions/',
    async (_, { rejectWithValue }) => {
        return await getRegions({ rejectWithValue });
    },
);

export const GetSubjects = createAsyncThunk(
    'user/subjects/',
    async (_, { rejectWithValue }) => {
        return await getSubjects({ rejectWithValue });
    },
);

export const GetSchools = createAsyncThunk(
    'user/location/schools',
    async (region: string, { rejectWithValue }) => {
        return await getSchools(region, { rejectWithValue });
    },
);

const user = createSlice({
    name: 'user',
    initialState: {
        regions: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetRegions.pending, (state: any) => {
                state.status = 'loading';
            })
            .addCase(GetRegions.fulfilled, (state: any, action) => {
                state.status = 'succeeded';
                state.regions = action.payload.data;
            })
            .addCase(GetRegions.rejected, (state: any, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

const forsubjects = createSlice({
    name: 'forsubjects',
    initialState: {
        subjects: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(GetSubjects.pending, (state: any) => {
            state.status = 'loading';
        })
        .addCase(GetSubjects.fulfilled, (state: any, action) => {
            state.status = 'succeeded';
            state.subjects = action.payload.data;
        })
        .addCase(GetSubjects.rejected, (state: any, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

const forschools = createSlice({
    name: 'forschools',
    initialState: {
        schools: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(GetSubjects.pending, (state: any) => {
            state.status = 'loading';
        })
        .addCase(GetSubjects.fulfilled, (state: any, action) => {
            state.status = 'succeeded';
            state.schools = action.payload.data;
        })
        .addCase(GetSubjects.rejected, (state: any, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export const userReducer = user.reducer;
export const forsubjectsReducer = forsubjects.reducer;
export const forschoolsReducer = forschools.reducer;