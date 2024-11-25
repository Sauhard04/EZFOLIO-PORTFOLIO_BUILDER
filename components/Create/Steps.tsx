"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useParams } from "next/navigation";
import CreateTopMenu from "./TopMenu";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import Step5 from "../Steps/Step5";
import Step6 from "../Steps/Step6";
import Step7 from "../Steps/Step7";
import Step8 from "../Steps/Step8";
import GenerateHTML from "../Generate/GenerateHTML";

interface StepsProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Steps: React.FC<StepsProps> = ({ step, setStep }) => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [company, setCompany] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [color, setColor] = useState("");
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const [linkForms, setLinkForms] = useState([
    { id: Date.now(), name: "", url: "" },
  ]);
  const [skillForms, setSkillForms] = useState([
    { id: Date.now(), name: "", url: "" },
  ]);
  const [projectForms, setProjectForms] = useState([
    { id: Date.now(), name: "", url: "" },
  ]);

  useEffect(() => {
    const savedName = localStorage.getItem(`${id}_name`);
    const savedJobTitle = localStorage.getItem(`${id}_jobTitle`);
    const savedEmail = localStorage.getItem(`${id}_email`);
    const savedCity = localStorage.getItem(`${id}_city`);
    const savedPhone = localStorage.getItem(`${id}_phone`);
    const savedSchool = localStorage.getItem(`${id}_school`);
    const savedCompany = localStorage.getItem(`${id}_company`);
    const savedJobPosition = localStorage.getItem(`${id}_jobPosition`);
    const savedColor = localStorage.getItem(`${id}_color`);
    const savedProfilePic = localStorage.getItem(`${id}_profilePic`);

    if (savedName) setName(savedName);
    if (savedJobTitle) setJobTitle(savedJobTitle);
    if (savedEmail) setEmail(savedEmail);
    if (savedCity) setCity(savedCity);
    if (savedPhone) setPhone(savedPhone);
    if (savedSchool) setSchool(savedSchool);
    if (savedCompany) setCompany(savedCompany);
    if (savedJobPosition) setJobPosition(savedJobPosition);
    if (savedColor) setColor(savedColor);
    if (savedProfilePic) {
      setProfilePic(savedProfilePic);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      localStorage.setItem(`${id}_name`, name);
      localStorage.setItem(`${id}_jobTitle`, jobTitle);
      localStorage.setItem(`${id}_email`, email);
      localStorage.setItem(`${id}_city`, city);
      localStorage.setItem(`${id}_phone`, phone);
      localStorage.setItem(`${id}_school`, school);
      localStorage.setItem(`${id}_company`, company);
      localStorage.setItem(`${id}_jobPosition`, jobPosition);
      localStorage.setItem(`${id}_color`, color);
      if (profilePic) {
        localStorage.setItem(`${id}_profilePic`, profilePic);
      }
    }
  }, [
    name,
    jobTitle,
    email,
    city,
    phone,
    school,
    company,
    jobPosition,
    color,
    profilePic,
    id,
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfilePic(base64String);
        if (id) {
          localStorage.setItem(`${id}_profilePic`, base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const generateHTML = () => {
    return `
      <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
    <title>${name}</title>
    <style>
      h1 {
        font-size: 40px;
      }
      p {
        font-size: 20px;
        color: #747474;
      }
      
      a {
        text-decoration: none;
        color: #747474;
        
      }
        a:hover{
        color:#DEDEDE
      }
      body {
        min-height: 100vh;
        width: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-color: #202020;
        color: ${color};
        font-family: "Ubuntu",sans-serif;
      }
      .navbar {
        width: 100%;
        height: 60px;
        background-color: #2d2d2d;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .main-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 100px 250px;
      }
      .main-left {
        max-width: 450px;
      }
      .main-email {
        margin-top: 20px;
      }
      .email-btn {
        padding: 15px 30px;
        background-color: ${color};
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor:pointer;
      }
      .email-btn:hover{
      background-color: #DEDEDE;
      transition:0.3s;
      }
      .main-img {
        height: 400px;
        width: 400px;
        border-radius: 50%;
        background-color: #2d2d2d;
        text-align: center;
      }
      .main-img img {
        width: 400px;
        height: 400px;
        object-fit: cover;
        border-radius: 50%;
        transition: 0.3s;
      }
      .main-img img:hover{
        border-radius:15px;
        transform: scale(1.20);
      }
      .main-bottom {
        padding: 70px 250px;
      }
      .skills-container {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        padding: 5px;
        min-height: 550px;
      }
      .skills-title {
        display:flex;
        align-items:center;
        justify-content:center;
      }
      .skills-main {
        display: flex;
        align-items: center;
        justify-content: center;
        gap:60px; 
      }
        @media screen and (max-width: 1200px) {
        .main-container {
          flex-direction: column;
          margin: 50px 100px;
        }
        .main-right {
          margin-top: 50px;
        }
        .main-bottom {
          padding: 50px 100px;
        }
      }

      @media screen and (max-width: 768px) {
        h1 {
          font-size: 32px;
        }
        p {
          font-size: 18px;
        }
        .navbar {
          height: 50px;
        }
        .main-container {
          margin: 50px 50px;
        }
        .main-bottom {
          padding: 50px 50px;
        }
        .main-img {
          height: 300px;
          width: 300px;
        }
        .main-img img {
          height: 300px;
          width: 300px;
        }
        .skills-container {
          padding: 20px;
        }
        .skills-main {
          gap: 30px;
        }
      }

      @media screen and (max-width: 480px) {
        h1 {
          font-size: 28px;
        }
        p {
          font-size: 16px;
        }
        .navbar {
          height: 50px;
        }
        .main-container {
          margin: 20px;
        }
        .main-img {
          height: 250px;
          width: 250px;
        }
        .main-img img {
          height: 250px;
          width: 250px;
        }
        .email-btn {
          padding: 10px 20px;
          font-size: 14px;
        }
        .skills-container {
          padding: 10px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="navbar">
        <h1>${name}'s Portfolio</h1>
      </div>
      <div class="main-container">
        <div class="main-left">
          <div class="main-title">
            <h1>Hi There</h1>
            <h1>I'am ${name}</h1>
            <h1>${jobTitle}</h1>
          </div>
          <div class="main-p">
            <div style="font-family: 'Arial', sans-serif; line-height: 1.6;">
    <p>🌍 <strong>Hi there! I’m based in <span style="color: #3498db;">${city}</span></strong>, a place close to my heart where creativity meets opportunity. 🏙️</p>
    <p>🎓 I had the privilege of studying at <span style="color: #e74c3c; font-weight: bold;">${school}</span>, where I laid the foundation for my passion for innovation and learning. 📚✨</p>
    <p>💼 Currently, I’m part of the amazing team at <span style="color: #2ecc71; font-weight: bold;">${company}</span>, where I contribute to building groundbreaking solutions that make a difference. 🚀</p>
    <p>📱 **Want to connect?** Feel free to reach me at my personal number: <span style="color: #9b59b6; font-weight: bold;">${phone}</span>. I’d love to hear from you! 🤝</p>
    <p>🎯 I’m passionate about technology, creating meaningful projects, and collaborating with amazing people. Let’s make something extraordinary together! 💡</p>
    <p style="text-align: center; color: #34495e;">✨ <em>“Dream big, work hard, and never stop learning.”</em> ✨</p>
</div>

          </div>
          <div class="main-email">
            <a href="mailto:${email}?subject=Subject&body=Message">
              <button class="email-btn">Contact me email</button>
            </a>
          </div>
        </div>
        <div class="main-right">
          <div class="main-img">
            <img src="${profilePic}" alt="${name}'s Profile Picture" />
          </div>
        </div>
      </div>
      <div class="main-bottom">
        <div class="skills-container">
          <h1 class="skills-title">Skills</h1>
          <div class="skills-main">
            ${skillForms
              .map(
                (skill) => `
            <p>${skill.name}</p>
            `
              )
              .join("")}
          </div>
          <h1 class="skills-title">Projects</h1>
          <div class="skills-main">
            ${projectForms
              .map(
                (project) => `
            <p><a href=${project.url}>${project.name} </a></p>
            `
              )
              .join("")}
          </div>
          <h1 class="skills-title">Social Media</h1>
          <div class="skills-main">
            ${linkForms
              .map(
                (link) => `
            <p><a href=${link.url}>${link.name}</a></p>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
    `;
  };

  const handleDownload = () => {
    const htmlContent = generateHTML();
    const blob = new Blob([htmlContent.toString()], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `EZFOLIO_${name}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const addLinkForm = () => {
    setLinkForms([...linkForms, { id: Date.now(), name: "", url: "" }]);
  };

  const removeLinkForm = (id: number) => {
    setLinkForms(linkForms.filter((form) => form.id !== id));
  };

  const updateLinkForm = (id: number, newName: string, newUrl: string) => {
    setLinkForms(
      linkForms.map((form) =>
        form.id === id ? { ...form, name: newName, url: newUrl } : form
      )
    );
  };

  const addSkillForm = () => {
    setSkillForms([...skillForms, { id: Date.now(), name: "", url: "" }]);
  };

  const removeSkillForm = (id: number) => {
    setSkillForms(skillForms.filter((form) => form.id !== id));
  };

  const updateSkillForm = (id: number, newName: string, newUrl: string) => {
    setSkillForms(
      skillForms.map((form) =>
        form.id === id ? { ...form, name: newName, url: newUrl } : form
      )
    );
  };

  const addProjectForm = () => {
    setProjectForms([...projectForms, { id: Date.now(), name: "", url: "" }]);
  };

  const removeProjectForm = (id: number) => {
    setProjectForms(projectForms.filter((form) => form.id !== id));
  };

  const updateProjectForm = (id: number, newName: string, newUrl: string) => {
    setProjectForms(
      projectForms.map((form) =>
        form.id === id ? { ...form, name: newName, url: newUrl } : form
      )
    );
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    if (step === 1) {
      setIsNextDisabled(
        !name || !jobTitle || !profilePic || !email || !city || !phone
      );
    }

    if (step === 2) {
      setIsNextDisabled(!school);
    }

    if (step === 3) {
      setIsNextDisabled(!company || !jobPosition);
    }

    if (step === 4) {
      setIsNextDisabled(linkForms.length === 0);
    }

    if (step === 5) {
      setIsNextDisabled(skillForms.length === 0);
    }

    if (step === 6) {
      setIsNextDisabled(projectForms.length === 0);
    }

    if (step === 7) {
      setIsNextDisabled(!color);
    }
  }, [
    step,
    name,
    jobTitle,
    profilePic,
    email,
    city,
    phone,
    school,
    company,
    jobPosition,
    linkForms,
    skillForms,
    projectForms,
    color,
  ]);

  const shadowColor = `
    ${step === 1 && `shadow-lg shadow-primary`}
    ${step === 2 && `shadow-lg shadow-blue-600`}
    ${step === 3 && `shadow-lg shadow-orange-600`}
    ${step === 4 && `shadow-lg shadow-yellow-500`}
    ${step === 5 && `shadow-lg shadow-cyan-500`}
    ${step === 6 && `shadow-lg shadow-pink-500`}
    ${step === 7 && `shadow-lg shadow-rose-600`}
    ${step === 8 && `shadow-lg shadow-green-600`}
  `;

  const colors = [
    { hex: "#DEDEDE", name: "Default" },
    { hex: "#7c3aed", name: "Purple" },
    { hex: "#2563eb", name: "Ocean" },
    { hex: "#ea580c", name: "Sunset" },
    { hex: "#eab308", name: "Gold" },
    { hex: "#06b6d4", name: "Sea Foam" },
    { hex: "#ec4899", name: "Bubblegum" },
    { hex: "#dc2626", name: "Cherry" },
    { hex: "#16a34a", name: "Mint" },
  ];

  return (
    <div>
      <CreateTopMenu
        isNextDisabled={isNextDisabled}
        setStep={setStep}
        step={step}
      />

      {step === 1 && (
        <Step1
          name={name}
          setName={setName}
          jobTitle={jobTitle}
          setJobTitle={setJobTitle}
          email={email}
          setEmail={setEmail}
          city={city}
          setCity={setCity}
          phone={phone}
          setPhone={setPhone}
          profilePic={profilePic}
          handleImageUpload={handleImageUpload}
          shadowColor={shadowColor}
        />
      )}

      {step === 2 && (
        <Step2
          school={school}
          setSchool={setSchool}
          shadowColor={shadowColor}
        />
      )}

      {step === 3 && (
        <Step3
          company={company}
          setCompany={setCompany}
          jobPosition={jobPosition}
          setJobPosition={setJobPosition}
          shadowColor={shadowColor}
        />
      )}

      {step === 4 && (
        <Step4
          linkForms={linkForms}
          addLinkForm={addLinkForm}
          removeLinkForm={removeLinkForm}
          updateLinkForm={updateLinkForm}
        />
      )}

      {step === 5 && (
        <Step5
          skillForms={skillForms}
          addSkillForm={addSkillForm}
          removeSkillForm={removeSkillForm}
          updateSkillForm={updateSkillForm}
        />
      )}

      {step === 6 && (
        <Step6
          projectForms={projectForms}
          addProjectForm={addProjectForm}
          removeProjectForm={removeProjectForm}
          updateProjectForm={updateProjectForm}
        />
      )}

      {step === 7 && (
        <Step7 color={color} setColor={setColor} colors={colors} />
      )}

      {step === 8 && <Step8 handleDownload={handleDownload} />}

      {step !== 8 && (
        <>
          <div className="absolute bottom-3 left-5">
            <Button
              onClick={handleBack}
              className="text-lg"
              size="lg"
              variant="outline"
              disabled={step === 1}
            >
              Back
            </Button>
          </div>
          <div className="absolute bottom-3 right-5">
            <Button
              onClick={handleNext}
              className="text-white text-lg"
              size="lg"
              disabled={isNextDisabled}
            >
              Next..
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Steps;
