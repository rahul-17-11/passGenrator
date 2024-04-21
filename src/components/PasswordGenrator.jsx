import { useState } from "react";
import ReactSwitch from "react-switch";

const PasswordGenrator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const specialChars = "!@#$%^&*()-_=+[{]}\\|;:,<.>/?";

    let validChars = lowercaseChars;

    if (includeUppercase) {
      validChars += uppercaseChars;
    }
    if (includeNumbers) {
      validChars += numbers;
    }
    if (includeSpecialChars) {
      validChars += specialChars;
    }

    let generatePassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars.charAt(randomIndex);
    }
    setPassword(generatePassword);
  };

  return (
    <div className="text-white pt-4">
      <div className="flex flex-col m-2 p-4 shadow-2xl hover:shadow-rose-600 hover:duration-500 items-center justify-center bg-[#4b49cc] rounded-md w-[350px]">
        <label>Length of Password : </label>
        <input
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          type="number"
          className="w-12 rounded border-gray-100 border-2 bg-gray-600"
        />
        <br />
        <label>Include Upper case : </label>
        <ReactSwitch
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
          width={40}
          height={20}
          handleDiameter={18}
        />
        <br />

        <label>Include Number : </label>
        <ReactSwitch
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
          width={40}
          height={20}
          handleDiameter={18}
        />
        <br />
        <label>Include Special Character : </label>
        <ReactSwitch
          checked={includeSpecialChars}
          onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          width={40}
          height={20}
          handleDiameter={18}
        />
        <br />
        <button
          onClick={generatePassword}
          className="rounded font-bold p-2 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-700 hover:from-fuchsia-500 hover:via-fuchsia-400 hover:to-fuchsia-700"
        >
          Genrate Password
        </button>
        {password && (
          <p className="pt-2 font-semibold">
            Genrated Password :{" "}
            <span className="bg-fuchsia-950 p-1 rounded">{password}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordGenrator;
