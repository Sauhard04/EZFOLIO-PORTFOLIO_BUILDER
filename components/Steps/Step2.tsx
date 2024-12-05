import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import DateSelector from "../Create/DateSelector";

interface Step2Props {
  school: string;
  setSchool: (school: string) => void;
  shadowColor: string;
}

const Step2: React.FC<Step2Props> = ({ school, setSchool, shadowColor }) => {
  const [error, setError] = useState("");

  const handleSchoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // Allow only alphabets and spaces
    if (/[^a-zA-Z\s]/.test(input)) {
      setError("School name can only contain alphabets and spaces");
      // Remove invalid characters
      input = input.replace(/[^a-zA-Z\s]/g, "");
    } else if (!input.trim()) {
      setError("School name cannot be empty");
    } else {
      setError("");
    }

    setSchool(input); // Update the valid input in state
  };

  return (
    <div className="p-5">
      <div className="flex flex-col gap-10 md:gap-3 lg:gap-10">
        <div className="w-full md:w-1/2">
          <Label htmlFor="school">School Name</Label>
          <Input
            className={shadowColor}
            type="text"
            id="school"
            placeholder="abc University"
            value={school}
            onChange={handleSchoolChange}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <div>
          <DateSelector />
        </div>
      </div>
    </div>
  );
};

export default Step2;
