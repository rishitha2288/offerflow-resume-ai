const fs = require("fs");

const pdfParse = require("pdf-parse");

const mammoth = require("mammoth");

const authMiddleware = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

const express = require("express");

const router = express.Router();

const Application = require("../models/Application");

router.post(
  "/",

  authMiddleware,

  async (req, res) => {
    try {
      const { company, status } = req.body;

      const userId = req.user._id;

      const newApplication = await Application.create({
        company,

        status,

        user: userId,
      });

      res.status(201).json(newApplication);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

router.get(
  "/",

  authMiddleware,

  async (req, res) => {
    try {
      const applications = await Application.find({
        user: req.user._id,
      });

      res.json(applications);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

router.delete(
  "/:id",

  authMiddleware,

  async (req, res) => {
    try {
      await Application.findByIdAndDelete(req.params.id);

      res.json({
        message: "Application deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

router.put(
  "/:id",

  authMiddleware,

  async (req, res) => {
    try {
      const updatedApplication = await Application.findByIdAndUpdate(
        req.params.id,

        req.body,

        {
          new: true,
        },
      );

      res.json(updatedApplication);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

router.post(
  "/upload-resume",

  authMiddleware,

  upload.single("resume"),

  async (req, res) => {
    try {
      res.json({
        message: "Resume uploaded",

        file: req.file.filename,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
);

router.post(
  "/analyze-resume",

  authMiddleware,

  upload.single("resume"),

  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          message: "No file uploaded",
        });
      }

      const filePath = req.file.path;

      let extractedText = "";

      if (req.file.mimetype === "application/pdf") {
        const dataBuffer = fs.readFileSync(filePath);

        const data = await pdfParse(dataBuffer);

        extractedText = data.text;
      } else if (
        req.file.mimetype.includes("word") ||
        req.file.originalname.endsWith(".docx")
      ) {
        const result = await mammoth.extractRawText({
          path: filePath,
        });

        extractedText = result.value;
      } else {
        return res.status(400).json({
          message: "Unsupported file type",
        });
      }

      const skills = [
        "Java",

        "JavaScript",

        "React",

        "Node.js",

        "MongoDB",

        "Python",

        "SQL",

        "HTML",

        "CSS",

        "AWS",

        "Docker",

        "Kubernetes",

        "DevOps",

        "Git",

        "Testing",

        "CI/CD",
      ];

      const detectedSkills = skills.filter((skill) =>
        extractedText.toLowerCase().includes(skill.toLowerCase()),
      );

      const jobDescription = req.body.jobDescription || "";

      const matchedSkills = skills.filter(
        (skill) =>
          extractedText.toLowerCase().includes(skill.toLowerCase()) &&
          jobDescription.toLowerCase().includes(skill.toLowerCase()),
      );

      const missingSkills = skills.filter(
        (skill) =>
          jobDescription.toLowerCase().includes(skill.toLowerCase()) &&
          !extractedText.toLowerCase().includes(skill.toLowerCase()),
      );

      const suggestions = missingSkills.map(
        (skill) => `Add ${skill} related projects or experience`,
      );

      const matchScore = Math.min(matchedSkills.length * 20, 100);

      const atsScore = Math.round(
        (matchedSkills.length / (matchedSkills.length + missingSkills.length)) *
          100,
      );

      res.json({
        detectedSkills,

        matchedSkills,

        missingSkills,

        suggestions,

        matchScore,

        atsScore,

        extractedText,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: error.message,
      });
    }
  },
);

module.exports = router;
