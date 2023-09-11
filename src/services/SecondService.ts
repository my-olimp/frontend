import $api from '@/axios';

export async function getRegions({ rejectWithValue }) {
    try {
        const response = await $api.get('user/location/regions/');
        console.log(response)
        return response;
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function getSubjects({ rejectWithValue }) {
    try {
        const response = await $api.get('user/subjects/');
        console.log(response)
        return response;
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}

export async function getSchools(region: string, { rejectWithValue }) {
    try {
        const response = await $api.get(`user/location/schools/?region=${region}`);
        console.log(response);
        return response;
    } catch (error: any) {
        console.error(error);
        return rejectWithValue(error);
    }
}