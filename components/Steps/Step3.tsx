import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import DateSelector from "../Create/DateSelector";

interface Step3Props {
  company: string;
  setCompany: (company: string) => void;
  jobPosition: string;
  setJobPosition: (jobPosition: string) => void;
  shadowColor: string;
}

const Step3: React.FC<Step3Props> = ({
  company,
  setCompany,
  jobPosition,
  setJobPosition,
  shadowColor,
}) => {
  const [errors, setErrors] = useState({
    company: "",
    jobPosition: "",
  });

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/[^a-zA-Z\s]/.test(input)) {
      setErrors((prev) => ({
        ...prev,
        company: "Invalid: Only letters and spaces allowed",
      }));
    } else {
      setErrors((prev) => ({ ...prev, company: "" }));
      setCompany(input);
    }
  };

  const handleJobPositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/[^a-zA-Z\s]/.test(input)) {
      setErrors((prev) => ({
        ...prev,
        jobPosition: "Invalid: Only letters and spaces allowed",
      }));
    } else {
      setErrors((prev) => ({ ...prev, jobPosition: "" }));
      setJobPosition(input);
    }
  };

  return (
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex flex-col w-full gap-10">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input
                className={`${shadowColor} ${
                  errors.company ? "border-red-500 placeholder-red-500" : ""
                }`}
                type="text"
                id="company"
                placeholder={errors.company || "abc Ltd"}
                value={errors.company ? "" : company}
                onChange={handleCompanyChange}
              />
            </div>
            <div>
              <Label htmlFor="jobposition">Job Position</Label>
              <Input
                className={`${shadowColor} ${
                  errors.jobPosition ? "border-red-500 placeholder-red-500" : ""
                }`}
                type="text"
                id="jobposition"
                placeholder={errors.jobPosition || "position"}
                value={errors.jobPosition ? "" : jobPosition}
                onChange={handleJobPositionChange}
              />
            </div>
          </div>
          <div>
            <DateSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
