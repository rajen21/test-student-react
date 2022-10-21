import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    loading: false,
    error: null,
}

export const getStudents = createAsyncThunk('students/getStudents', async () => {
    const res = await fetch('http://localhost:8080/student', {
        method: 'GET',
    });
    const data = await res.json();
    return data;
});

const studSlice = createSlice({
    name: 'students',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getStudents.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(getStudents.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        builder.addCase(getStudents.rejected, (state, action) => {
            state.loading = false;
            state.error = 'error'
        })
    }
});

export const studentsData = (state) => state?.studentsReducer;

export default studSlice.reducer;
