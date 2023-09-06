import {configureStore} from '@reduxjs/toolkit'
import TicketReducer  from './TicketReducer'

export const store  = configureStore({
    reducer:{
        ticket:TicketReducer
    }
}) 