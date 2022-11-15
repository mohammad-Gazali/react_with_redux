import { Bank, Products, ProductsFetch } from './components';

function App() {
  return (
    <main className='flex justify-center flex-col w-full h-full gap-16 bg-gradient-to-tr from-teal-300 via-sky-300 relative to-emerald-400 bg-contain p-20 min-w-[500px]'>
      <Bank />
      <Products />
      <ProductsFetch />
    </main>
  )
}

export default App
