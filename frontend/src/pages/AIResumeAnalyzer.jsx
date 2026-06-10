import { useState, useEffect } from "react";

import { uploadResume, analyzeResume } from "../api/applicationApi";

import Button from "../components/ui/Button";

import { toast } from "react-toastify";

function AIResumeAnalyzer() {
  const [resume, setResume] = useState(null);

  const [detectedSkills, setDetectedSkills] = useState([]);

  const [atsScore, setAtsScore] = useState(0);

  const [jobDescription, setJobDescription] = useState("");

  const [matchedSkills, setMatchedSkills] = useState([]);

  const [missingSkills, setMissingSkills] = useState([]);

  const [suggestions, setSuggestions] = useState([]);
  const [matchScore, setMatchScore] = useState(0);

  useEffect(() => {
    const savedAnalysis = localStorage.getItem("resumeAnalysis");

    if (savedAnalysis) {
      const parsed = JSON.parse(savedAnalysis);

      setDetectedSkills(parsed.detectedSkills || []);

      setMatchedSkills(parsed.matchedSkills || []);

      setMissingSkills(parsed.missingSkills || []);

      setSuggestions(parsed.suggestions || []);

      setAtsScore(parsed.atsScore || 0);

      setMatchScore(parsed.matchScore || 0);

      setJobDescription(parsed.jobDescription || "");
    }
  }, []);

  const handleResumeUpload = async () => {
    if (!resume) {
      toast.error("Select resume first");

      return;
    }

    try {
      const uploadFormData = new FormData();

      uploadFormData.append("resume", resume);

      await uploadResume(uploadFormData);

      const analyzeFormData = new FormData();

      analyzeFormData.append("resume", resume);

      analyzeFormData.append("jobDescription", jobDescription);

      const analysis = await analyzeResume(analyzeFormData);

      setDetectedSkills(analysis.detectedSkills || []);

      setAtsScore(analysis.atsScore || 0);

      setMatchedSkills(analysis.matchedSkills || []);

      setMissingSkills(analysis.missingSkills || []);
      setSuggestions(analysis.suggestions || []);

      setMatchScore(analysis.matchScore || 0);

      localStorage.setItem(
        "resumeAnalysis",

        JSON.stringify({
          detectedSkills: analysis.detectedSkills || [],

          matchedSkills: analysis.matchedSkills || [],

          missingSkills: analysis.missingSkills || [],

          suggestions: analysis.suggestions || [],

          atsScore: analysis.atsScore || 0,

          matchScore: analysis.matchScore || 0,

          jobDescription: jobDescription,
        }),
      );

      toast.success("Resume Analyzed");
    } catch (error) {
      console.log(error);

      toast.error("Analysis Failed");
    }
  };

  return (
    <div
      className="
        max-w-5xl
        mx-auto

        space-y-6

        py-8
      "
    >
      <h1
        className="
          text-5xl
          font-extrabold
          tracking-tight
        "
      >
        AI Resume Analyzer
      </h1>

      <div
        className="
          bg-white
          border
          rounded-3xl
          p-6
          space-y-4
        "
      >
        <h2
          className="
            text-2xl
            font-bold
          "
        >
          Upload Resume
        </h2>

        <input
          type="file"
          accept="
          .pdf,.doc,.docx
          "
          onChange={(e) => setResume(e.target.files[0])}
        />

        <textarea
          placeholder="
          Paste Job Description
          "
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="
            w-full
            border
            rounded-2xl
            p-4
            h-40
            outline-none
          "
        />

        <Button text="Analyze Resume" onClick={handleResumeUpload} />
      </div>

      {atsScore > 0 && (
        <div
          className="
              bg-black
              text-white

              rounded-3xl

              p-8
            "
        >
          <p
            className="
                text-lg
                text-gray-300
              "
          >
            ATS Resume Score
          </p>

          <h1
            className="
                text-6xl
                font-extrabold
                mt-4
              "
          >
            {atsScore}%
          </h1>
        </div>
      )}

      {matchScore > 0 && (
        <div
          className="
              bg-white
              border

              rounded-3xl

              p-8
            "
        >
          <p
            className="
                text-lg
                text-gray-500
              "
          >
            Job Match Score
          </p>

          <h1
            className="
                text-6xl
                font-extrabold
                mt-4
              "
          >
            {matchScore}%
          </h1>
        </div>
      )}

      {matchedSkills.length > 0 && (
        <div
          className="
              bg-white
              border

              rounded-3xl

              p-6

              space-y-4
            "
        >
          <h2
            className="
                text-2xl
                font-bold
              "
          >
            Matched Skills
          </h2>

          <div
            className="
                flex
                flex-wrap
                gap-3
              "
          >
            {matchedSkills.map((skill) => (
              <div
                key={skill}
                className="
                        bg-green-100
                        text-green-700

                        px-4
                        py-2

                        rounded-full
                      "
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}

      {missingSkills.length > 0 && (
        <div
          className="
              bg-white
              border

              rounded-3xl

              p-6

              space-y-4
            "
        >
          <h2
            className="
                text-2xl
                font-bold
              "
          >
            Missing Skills
          </h2>

          <div
            className="
                flex
                flex-wrap
                gap-3
              "
          >
            {missingSkills.map((skill) => (
              <div
                key={skill}
                className="
                        bg-red-100
                        text-red-700

                        px-4
                        py-2

                        rounded-full
                      "
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}

      {suggestions.length > 0 && (
        <div
          className="
        bg-white
        border
        rounded-3xl
        p-6
        space-y-4
      "
        >
          <h2
            className="
          text-2xl
          font-bold
        "
          >
            Resume Suggestions
          </h2>

          <div
            className="
          space-y-3
        "
          >
            {suggestions.map((item, index) => (
              <div
                key={index}
                className="
                  bg-gray-100
                  p-4
                  rounded-2xl
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {detectedSkills.length > 0 && (
        <div
          className="
              bg-white
              border
              rounded-3xl
              p-6
              space-y-4
            "
        >
          <h2
            className="
                text-2xl
                font-bold
              "
          >
            Detected Skills
          </h2>

          <div
            className="
                flex
                flex-wrap
                gap-3
              "
          >
            {detectedSkills.map((skill) => (
              <div
                key={skill}
                className="
                        bg-black
                        text-white

                        px-4
                        py-2

                        rounded-full
                      "
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AIResumeAnalyzer;
