import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const dayOptions = Array.from({ length: 31 }, (_, i) => ({
  value: i + 1,
  label: i + 1,
}));

const monthOptions = Array.from({ length: 12 }, (_, i) => ({
  value: i + 1,
  label: i + 1,
}));

const yearOptions = Array.from({ length: 50 }, (_, i) => ({
  value: 1980 + i,
  label: 1980 + i,
}));

const customStyles = {
  control: (base: any) => ({
    ...base,
    color: "black", // Text color in the input field
    backgroundColor: "white", // Background color of the dropdown
  }),
  singleValue: (base: any) => ({
    ...base,
    color: "black", // Text color for the selected value
  }),
  option: (base: any, state: any) => ({
    ...base,
    color: "black", // Text color in the options list
    backgroundColor: state.isFocused ? "#f0f0f0" : "white", // Highlight background on focus
  }),
};

const DateSelector = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:flex-row gap-5 md:gap-0 justify-between"
    >
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold">Start Date</h2>
        <div className="flex gap-4">
          <Controller
            name="startDay"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={dayOptions}
                placeholder="Day"
                className="w-28"
                styles={customStyles} // Apply custom styles
              />
            )}
          />
          <Controller
            name="startMonth"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={monthOptions}
                placeholder="Month"
                className="w-28"
                styles={customStyles} // Apply custom styles
              />
            )}
          />
          <Controller
            name="startYear"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={yearOptions}
                placeholder="Year"
                className="w-28"
                styles={customStyles} // Apply custom styles
              />
            )}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-semibold">End Date</h2>
        <div className="flex gap-4">
          <Controller
            name="endDay"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={dayOptions}
                placeholder="Day"
                className="w-28"
                styles={customStyles} // Apply custom styles
              />
            )}
          />
          <Controller
            name="endMonth"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={monthOptions}
                placeholder="Month"
                className="w-28"
                styles={customStyles} // Apply custom styles
              />
            )}
          />
          <Controller
            name="endYear"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={yearOptions}
                placeholder="Year"
                className="w-28"
                styles={customStyles} // Apply custom styles
              />
            )}
          />
        </div>
      </div>
    </form>
  );
};

export default DateSelector;
