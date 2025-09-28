// src/pages/Specialties.jsx
import React, { useState, useEffect } from "react";
import { specialties } from "../data/specialties";
import { doctors } from "../data/doctors";
import DoctorCard from "../components/DoctorCard";
import { useNavigate, useLocation } from "react-router-dom";

export default function Specialties() {
  const navigate = useNavigate();
  const location = useLocation();

  // Parse specialty from URL (query param ?s=Cardiologist)
  const params = new URLSearchParams(location.search);
  const specialtyFromUrl = params.get("s");

  const [selected, setSelected] = useState(specialtyFromUrl);

  // Keep state in sync with URL
  useEffect(() => {
    setSelected(specialtyFromUrl);
  }, [specialtyFromUrl]);

  // Filter doctors by selected specialty
  const filteredDoctors = selected
    ? doctors.filter((d) => d.specialty === selected)
    : [];

  const handleSelect = (key) => {
    navigate(`?s=${key}`); // update URL instead of just state
  };

  const handleBack = () => {
    navigate("/specialties"); // clears query param
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-extrabold mb-8 text-teal-700 text-center">
        {selected ? `Browse ${selected} Specialists` : "Consult best doctors online"}
      </h2>

      {!selected && (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
            {specialties.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.key}
                  onClick={() => handleSelect(s.key)}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center border"
                >
                  <Icon className="text-5xl text-teal-700 mb-3" />
                  <div className="font-bold text-lg text-gray-600 mb-1">
                    {s.name}
                  </div>
                  <div className="text-gray-500 text-sm text-center">
                    {s.description}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {selected && (
        <>
          <button
            onClick={handleBack}
            className="mb-6 text-indigo-600 hover:underline text-sm"
          >
            ← Back to Specialties
          </button>
          {filteredDoctors.length === 0 ? (
            <div className="text-gray-400 italic mb-6">
              No doctors found for this specialty.
            </div>
          ) : (
            filteredDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))
          )}
        </>
      )}
    </div>
  );
}
