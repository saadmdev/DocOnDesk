// Import icons
import {
  FaUserMd,
  FaTint,
  FaTooth,
  FaWeight,
  FaDeaf,
  FaBone,
  FaBrain,
  FaChild,
  FaLungs,
  FaEye,
  FaStethoscope,
  FaHeartbeat,
  FaClinicMedical,
} from "react-icons/fa";

import {
  MdOutlineHealthAndSafety,
  MdRestaurant,
  MdBloodtype,
} from "react-icons/md";

export const specialties = [
  {
    key: "Dermatologist",
    name: "Dermatologist",
    icon: MdOutlineHealthAndSafety,
    description: "Specialist in skin, hair, and nail conditions.",
  },
  {
    key: "Cardiologist",
    name: "Cardiologist",
    icon: FaHeartbeat,
    description: "Heart and cardiovascular disease specialist.",
  },
  {
    key: "Urologist",
    name: "Urologist",
    icon: FaTint,
    description: "Expert in urinary tract and male reproductive health.",
  },
  {
    key: "Gastroenterologist",
    name: "Gastroenterologist",
    icon: MdRestaurant,
    description: "Specialist for digestive system and liver diseases.",
  },
  {
    key: "Dentist",
    name: "Dentist",
    icon: FaTooth,
    description: "Oral health and dental care expert.",
  },
  {
    key: "Obesity Specialist",
    name: "Obesity Specialist",
    icon: FaWeight,
    description: "Weight management and obesity treatment.",
  },
  {
    key: "ENT Specialist",
    name: "ENT Specialist",
    icon: FaDeaf,
    description: "Ear, nose, and throat disorders specialist.",
  },
  {
    key: "Orthopedic Surgeon",
    name: "Orthopedic Surgeon",
    icon: FaBone,
    description: "Bone, joint, and muscle care specialist.",
  },
  {
    key: "Nephrologist",
    name: "Nephrologist",
    icon: MdBloodtype,
    description: "Kidney and renal disease specialist.",
  },
  {
    key: "Neurologist",
    name: "Neurologist",
    icon: FaBrain,
    description: "Expert in brain and nervous system disorders.",
  },
  {
    key: "Child Specialist",
    name: "Child Specialist",
    icon: FaChild,
    description: "Pediatric care for children and infants.",
  },
  {
    key: "Pulmonologist",
    name: "Pulmonologist",
    icon: FaLungs,
    description: "Lung and respiratory system specialist.",
  },
  {
    key: "Eye Specialist",
    name: "Eye Specialist",
    icon: FaEye,
    description: "Expert in vision and eye care.",
  },
  {
    key: "General Physician",
    name: "General Physician",
    icon: FaStethoscope,
    description: "Primary care for common illnesses and checkups.",
  },
  {
    key: "Oncologist",
    name: "Oncologist",
    icon: FaClinicMedical,
    description: "Cancer diagnosis and treatment specialist.",
  },
];
