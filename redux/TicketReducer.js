import { createSlice } from "@reduxjs/toolkit";

export const TicketReducer = createSlice({
    name:"Ticket",
    initialState:{
        tickets:[]
    },

    reducers:{
        addTicket:(state,action) => {
            state.tickets.push(action.payload)
        }
    }
})

export const {addTicket} = TicketReducer.actions
export default TicketReducer.reducer