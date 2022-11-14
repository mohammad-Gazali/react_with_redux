import { WITHDRAW_MONEY, DEPOSITE_MONEY } from "../actions/bank-actions";

export const bankReducer = (state = 1000, action) => {
  switch (action.tpye) {
    case WITHDRAW_MONEY:
      return state - action.payload;
    case DEPOSITE_MONEY:
      return state + action.payload;
    default:
      return state;
  }
};
