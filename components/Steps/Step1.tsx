import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface Step1Props {
  name: string;
  setName: (name: string) => void;
  jobTitle: string;
  setJobTitle: (jobTitle: string) => void;
  email: string;
  setEmail: (email: string) => void;
  city: string;
  setCity: (city: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  profilePic: any;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  shadowColor: string;
}

const Step1: React.FC<Step1Props> = ({
  name,
  setName,
  jobTitle,
  setJobTitle,
  email,
  setEmail,
  city,
  setCity,
  phone,
  setPhone,
  profilePic,
  handleImageUpload,
  shadowColor,
}) => {
  const [errors, setErrors] = useState({
    name: "",
    jobTitle: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/\d/.test(input)) {
      setErrors((prev) => ({ ...prev, name: "Name cannot contain numbers" }));
    } else {
      setErrors((prev) => ({ ...prev, name: "" }));
      setName(input);
    }
  };

  const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/\d/.test(input)) {
      setErrors((prev) => ({
        ...prev,
        jobTitle: "Job Title cannot contain numbers",
      }));
    } else {
      setErrors((prev) => ({ ...prev, jobTitle: "" }));
      setJobTitle(input);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setEmail(input);
    if (input && !input.endsWith("@gmail.com")) {
      setErrors((prev) => ({
        ...prev,
        email: "Email must contain '@gmail.com'",
      }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };
  

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/[^a-zA-Z\s]/.test(input)) {
      setErrors((prev) => ({
        ...prev,
        city: "City name can only contain alphabets and spaces",
      }));
    } else {
      setErrors((prev) => ({ ...prev, city: "" }));
      setCity(input);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (input.length > 10) input = input.substring(0, 10); // Limit to 10 digits

    if (input.length !== 10) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number must contain exactly 10 digits",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
    setPhone(input);
  };

  return (
    <div className="p-5">
      <div className="flex flex-col gap-10 md:gap-5">
        <div className="flex items-center gap-4 justify-between">
          <div className="w-1/2 flex flex-col gap-5">
            <div>
              <Label htmlFor="name">Name & Surname</Label>
              <Input
                className={shadowColor}
                type="text"
                id="name"
                placeholder="name"
                value={name}
                onChange={handleNameChange}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="JobTitle">Job Title</Label>
              <Input
                className={shadowColor}
                type="text"
                id="JobTitle"
                placeholder="position"
                value={jobTitle}
                onChange={handleJobTitleChange}
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-sm">{errors.jobTitle}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1.5 items-center justify-center">
            <Label htmlFor="profilePic">Profile Picture</Label>
            <img
              className="h-[80px] w-[80px] object-cover rounded-full"
              src={profilePic ? profilePic : "profile"}
              alt=""
            />
            <Input
              className={shadowColor}
              type="file"
              id="profilePic"
              accept="image/*"
              onChange={(e) => handleImageUpload(e)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex gap-3">
            <div>
              <Label htmlFor="Email">Email</Label>
              <Input
                className={shadowColor}
                type="text"
                id="Email"
                placeholder="user@gmail.com"
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="City">City</Label>
              <Input
                className={shadowColor}
                type="text"
                id="City"
                placeholder="city"
                value={city}
                onChange={handleCityChange}
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
          </div>
          <div className="w-1/2">
            <Label htmlFor="Phone">Phone</Label>
            <Input
              className={shadowColor}
              type="text"
              id="Phone"
              placeholder="0000000000"
              value={phone}
              onChange={handlePhoneChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
