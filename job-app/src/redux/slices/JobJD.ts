import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface inital {
  loading: boolean;
  error: boolean;
  message: null | string;
}
const initialState: inital = {
  loading: false,
  error: false,
  message: null,
};

const addjd = createAsyncThunk("add/jd", async (addData) => {
  console.log(addData, "adddata");
  try {
    const res = await fetch(`http://localhost:8018/jobdetails`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addData),
    });
    const data = await res.json();
    console.log(data, "data..");
    return data;
  } catch (err) {
    console.log(err, "err");
  }
});
const Jobdata = createSlice({
  name: "JD",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addjd.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addjd.fulfilled, (state) => {
      state.loading = false;
      state.message = "JD added successfully";
    });
    builder.addCase(addjd.rejected, (state) => {
      (state.loading = false),
        (state.error = true),
        (state.message = "something wrong");
    });
  },
});

export { addjd };
export default Jobdata.reducer;
