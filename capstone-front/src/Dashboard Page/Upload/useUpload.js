import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useUpload() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [plainText, setPlainText] = useState("");

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const resumeFileSelection = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size === 0) {
      alert("The selected file is empty. Please upload a valid resume.");
      e.target.value = null;
      return;
    }

    const allowedFormats = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedFormats.includes(file.type)) {
      alert("Invalid file type. Only PDF, DOC, or DOCX files are allowed.");
      e.target.value = null;
      return;
    }

    setResumeFile(file);
    e.target.value = null;
  };

  const resumeFileUpload = () => {
    fileInputRef.current?.click();
  };

  const submitResumeUpload = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      alert("Please upload a resume file.");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please enter a job description.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("jobDescription", jobDescription);

    try {
      const { data: uploadData } = await axios.post(
        "http://localhost:3000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      const { success, message, resumeText } = uploadData;

      if (!success) {
        alert(message || "Upload Failed");
        return;
      }

      const { data: analysis } = await axios.post(
        "http://localhost:3000/api/analyze",
        { resumeText, jobDescription },
        { withCredentials: true }
      );

      setPlainText(resumeText);

      const newEntry = {
        resumeText,
        jobDescription,
        overallScore: analysis.overallScore || 0,
        createdAt: new Date().toISOString(),
      };

      const history = JSON.parse(localStorage.getItem("history") || "[]");
      history.push(newEntry);
      localStorage.setItem("history", JSON.stringify(history));

      alert("Upload & AI analysis successful");
      navigate("/analysis");
    } catch (error) {
      console.error("Upload Failed:", error);
      alert("Upload Failed, Server Error");
    }
  };

  return {
    resumeFile,
    jobDescription,
    setJobDescription,
    resumeFileSelection,
    resumeFileUpload,
    submitResumeUpload,
    fileInputRef,
    plainText,
  };
}
