import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import { createJob } from "../services/jobsService";

type JobTypeUI = "Full-time" | "Part-time" | "Internship" | "Remote";
type CategoryUI = "IT" | "Marketing" | "Healthcare" | "Finance" | "Design" | "Sales";

type FormData = {
  jobTitle: string;
  company: string;
  location: string;
  jobType: JobTypeUI;
  salary: string;
  experience: string;
  category: CategoryUI;
  description: string;
  skills: string;
};

const INITIAL_FORM: FormData = {
  jobTitle: "",
  company: "",
  location: "",
  jobType: "Full-time",
  salary: "",
  experience: "",
  category: "IT",
  description: "",
  skills: "",
};

const mapJobType = (v: JobTypeUI) => {
  if (v === "Full-time") return "FULL_TIME";
  if (v === "Part-time") return "PART_TIME";
  if (v === "Internship") return "INTERNSHIP";
  return "REMOTE";
};

const mapCategory = (v: CategoryUI) => {
  // UI values are Title-case; backend enums usually uppercase
  return v.toUpperCase(); // IT, MARKETING, HEALTHCARE, FINANCE, DESIGN, SALES
};

const parseExperienceYears = (text: string) => {
  // supports "3-5 years" -> {min:3,max:5}, "2 years" -> {min:2,max:2}
  const nums = text.match(/\d+/g);
  if (!nums || nums.length === 0) return { min: null as number | null, max: null as number | null };
  const a = Number(nums[0]);
  const b = nums[1] ? Number(nums[1]) : a;
  return { min: Math.min(a, b), max: Math.max(a, b) };
};

const parseSalaryMinMax = (text: string) => {
  // supports: "$100k - $130k", "100000-130000", "₹5L - ₹8L", "12-18 lpa" (basic)
  const cleaned = text.replace(/,/g, "").trim().toLowerCase();

  const nums = cleaned.match(/\d+(\.\d+)?/g);
  if (!nums || nums.length === 0) return { salaryMin: null as number | null, salaryMax: null as number | null };

  // multiplier detection (simple, practical)
  // lakh / l / lac => 100000, crore / cr => 10000000, k => 1000, m => 1000000
  let multiplier = 1;
  if (/(crore|cr)\b/.test(cleaned)) multiplier = 10000000;
  else if (/(lakh|lac|\bl\b)/.test(cleaned)) multiplier = 100000;
  else if (/\bk\b/.test(cleaned)) multiplier = 1000;
  else if (/\bm\b/.test(cleaned)) multiplier = 1000000;

  const a = Number(nums[0]) * multiplier;
  const b = (nums[1] ? Number(nums[1]) : Number(nums[0])) * multiplier;

  return {
    salaryMin: Number.isFinite(a) ? Math.min(a, b) : null,
    salaryMax: Number.isFinite(b) ? Math.max(a, b) : null,
  };
};

const toSkillsArray = (skillsText: string) =>
  skillsText
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

export default function PostJob() {
  const [submitted, setSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);

  const resetForm = () => setFormData(INITIAL_FORM);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value } as FormData));
  };

  const publishOrDraft = async (status: "PUBLISHED" | "DRAFT") => {
    const { salaryMin, salaryMax } = parseSalaryMinMax(formData.salary);
    const exp = parseExperienceYears(formData.experience);

    // If your backend expects a SINGLE number: we send minimum years (common)
    const experienceRequiredYears = exp.min;

    // If your backend expects requiredSkills as STRING, change to formData.skills
    // If it expects ARRAY, keep toSkillsArray(...)
    const requiredSkills = toSkillsArray(formData.skills);

    await createJob({
      jobTitle: formData.jobTitle.trim(),
      companyName: formData.company.trim(),
      location: formData.location.trim(),
      jobType: mapJobType(formData.jobType),
      category: mapCategory(formData.category),
      salaryMin,
      salaryMax,
      experienceRequiredYears,
      jobDescription: formData.description.trim(),
      requiredSkills,
      status,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      await publishOrDraft("PUBLISHED");

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        resetForm();
      }, 2500);
    } catch (err) {
      console.error(err);
      alert("Failed to publish job. Make sure backend is running on http://localhost:8080");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      await publishOrDraft("DRAFT");
      alert("Saved as draft!");
    } catch (err) {
      console.error(err);
      alert("Failed to save draft. Make sure backend is running on http://localhost:8080");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post a Job</h1>
          <p className="text-xl text-gray-600">Find the perfect candidate for your team</p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Job Posted Successfully!</h2>
            <p className="text-gray-600 mb-8">
              Your job posting is now live and candidates can start applying.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                resetForm();
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Post Another Job
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    id="jobTitle"
                    type="text"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Senior Frontend Developer"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Tech Corp"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., San Francisco, CA or Remote"
                  />
                </div>

                <div>
                  <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type *
                  </label>
                  <select
                    id="jobType"
                    name="jobType"
                    required
                    value={formData.jobType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Range *
                  </label>
                  <input
                    id="salary"
                    type="text"
                    name="salary"
                    required
                    value={formData.salary}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., $100k - $130k / ₹5L - ₹8L"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Tip: use a range like 100k-130k or ₹5L-₹8L
                  </p>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Required *
                  </label>
                  <input
                    id="experience"
                    type="text"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 3-5 years"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="IT">IT</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Design">Design</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe the role, responsibilities, and what you're looking for in a candidate..."
                />
              </div>

              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                  Required Skills *
                </label>
                <input
                  id="skills"
                  type="text"
                  name="skills"
                  required
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., React, TypeScript, Node.js (comma separated)"
                />
                <p className="text-sm text-gray-500 mt-2">Separate skills with commas</p>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  disabled={isSaving}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:opacity-60"
                >
                  {isSaving ? "Saving..." : "Save as Draft"}
                </button>

                <button
                  type="submit"
                  disabled={isSaving}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-60"
                >
                  {isSaving ? "Publishing..." : "Publish Job"}
                </button>
              </div>

              <p className="text-xs text-gray-500 pt-2">
                If you still get errors, the mismatch is usually in backend DTO field names/types
                or the jobsService URL.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
