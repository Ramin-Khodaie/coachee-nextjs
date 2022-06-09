import { createSlice } from "@reduxjs/toolkit";


interface IAvailableOn {
  telegram: boolean;
  whatsapp: boolean;
}

export interface INewResume {
  name: string;
  phonenumber: string;
  availbleOn: IAvailableOn;
  resume: "";
  email: string;
  status:string
}

interface ICoachee {
  coache: Array<INewResume>;
}
const initialstate: ICoachee = {
    coache: [],
};

const coacheeSlice = createSlice({
  name: "coachee",
  initialState:initialstate,
  reducers: {
    uploadResume: (state, { payload }) => {
      console.log(1122, payload)
      state.coache = [...state.coache, payload];
    },
  },
});

export const { uploadResume } = coacheeSlice.actions;
export default coacheeSlice.reducer;
