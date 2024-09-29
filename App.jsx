import { useState } from 'react'
import {InputBox} from './components'
import useinfo  from './customhooks/useinfo'
import './App.css'

function App() {
 
// now we have to create different states because w ehave cxreated a tons of variables in
// inputBox component
const [amount,setamount]=useState(null);
const [from,setfrom]=useState('usd');
const [to,setto]=useState('inr');
const [amountconverted,setamountconverted]=useState(null);



const curencyinfo=useinfo(from);
const options=Object.keys(curencyinfo);

const swap = ()=>{
  setfrom(to);
  setto(from);
  setamountconverted(amount);
  setamount(amountconverted);
}

// now to display the converted values we have to use setamountconverted()

const convert=()=>{
setamountconverted(amount*curencyinfo[to]); // because we have to multiply with the to 
// currency value
}

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-blue-700"
   
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert();
                   
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(curency) => setfrom(curency)}
                        selectCurrency={from}
                        onAmountChange={(amount) => setamount(amount)}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={amountconverted}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setto(currency)}
                        selectCurrency={to}
                        amountDisable
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default App
