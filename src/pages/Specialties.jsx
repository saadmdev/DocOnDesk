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
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-12 text-hospital-blue text-center">
        {selected ? `Browse ${selected} Specialists` : "Consult Best Doctors Online"}
      </h2>

      {!selected && (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mb-12">
            {specialties.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.key}
                  onClick={() => handleSelect(s.key)}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center border-2 border-hospital-blue/10 hover:border-hospital-orange transform hover:scale-105"
                >
                  <Icon className="text-4xl sm:text-5xl text-hospital-blue mb-3" />
                  <div className="font-bold text-base sm:text-lg text-gray-800 mb-2">
                    {s.name}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">
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
            className="mb-6 px-4 py-2 bg-hospital-cream hover:bg-hospital-gold text-hospital-blue font-bold rounded-lg transition-all duration-200 transform hover:scale-105"
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
