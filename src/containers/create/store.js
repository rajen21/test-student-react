import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
    loading: false,
    error: null,
}

export const getStudent = createAsyncThunk('students/getStudent', async (id) => {
    const res = await fetch('http://localhost:8080/student/' + id, {
        method: 'GET',
    });
    const data = await res.json();
    return data;
});

const studSlice = createSlice({
    name: 'student',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getStudent.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(getStudent.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        })
        builder.addCase(getStudent.rejected, (state, action) => {
            state.loading = false;
            state.error = 'error'
        })
    }
});

export const studentData = (state) => state?.studentReducer;

export default studSlice.reducer;
