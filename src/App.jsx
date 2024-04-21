import PasswordGenrator from "./components/PasswordGenrator";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-tr from-fuchsia-300 via-pink-200 to-rose-300 ">
      <h1 className="text-4xl py-1 rounded-sm w-full justify-center items-center flex bg-[#d100625e] font-bold border-y-2 border-rose-900 text-violet-900 ">
        Password Genrator
      </h1>
      <PasswordGenrator />
    </div>
  );
}

export default App;
