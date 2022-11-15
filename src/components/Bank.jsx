import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdraw, deposite } from "../store/actions/bank-actions";


const Bank = () => {
  const bank = useSelector((state) => state.bank);
  const dispatch = useDispatch();

  const inputElement = useRef(null);
  return (
    <section className="text-center text-xl flex justify-center flex-col items-center gap-6 bg-white/30 w-full p-10 rounded-lg shadow-lg backdrop-blur">
      <h2 className="font-bold text-3xl border-2 rounded-lg border-white px-4 py-1 bg-white text-gray-900">Bank</h2>
      <p className="text-gray-800 text-2xl font-bold w-full bg-cyan-600/20 rounded-lg py-5 shadow-inner">
        bank account balance: {bank}$
      </p>
      <input
        ref={inputElement}
        type="number"
        className="w-full py-3 px-2 rounded-lg focus:outline-none"
        placeholder="amount"
      />
      <div className="flex gap-3 justify-evenly items-center w-full bg-cyan-600/20 rounded-lg py-6 px-2 shadow-inner">
        <button
          onClick={() => dispatch(withdraw(+inputElement.current.value))}
          className="rounded-lg px-4 py-2 bg-cyan-500 text-white hover:bg-cyan-800 transition-all duration-200"
        >
          Withdraw
        </button>
        <button
          onClick={() => dispatch(deposite(+inputElement.current.value))}
          className="rounded-lg px-4 py-2 bg-cyan-500 text-white hover:bg-cyan-800 transition-all duration-200"
        >
          Depoisite
        </button>
      </div>
    </section>
  );
};

export default Bank;
