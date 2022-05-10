import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	type: "Rentals",
};

export const propertiesSlice = createSlice({
	name: "properties",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setType: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.type = action.payload;
		},
	},
});

export const { setType } = propertiesSlice.actions;

export default propertiesSlice.reducer;
