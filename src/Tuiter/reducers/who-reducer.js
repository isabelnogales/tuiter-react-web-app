import {createSlice} from "@reduxjs/toolkit";
import whoArray from "../data/who.json";

const tuitsSlice = createSlice ({
    name:"who",                     // name the reducer
    initialState: whoArray          // initialize the reducer state
});

export default tuitsSlice.reducer;