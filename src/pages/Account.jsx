import React, { useState, useRef } from "react";

export default function Account() {
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("Ayesha Khan");
  const [email, setEmail] = useState("ayesha@email.com");
  const [cnic, setCnic] = useState("");
  const [dob, setDob] = useState("");
  const [motherName, setMotherName] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);
  const fileInput = useRef();

  function handlePicChange(e) {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setPreview(URL.createObjectURL(file));
    }
  }

  function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert("Profile updated successfully! (demo)");
      // Here you would update the user context/global state for the navbar name/pic
    }, 1200);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-lg p-4 sm:p-8 mt-6 mb-10 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-6 text-center">Account Details</h2>
      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Picture */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="relative">
            <img
              src={
                preview ||
                profilePic ||
                "https://i.pravatar.cc/150?img=47"
              }
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-indigo-200"
            />
            <button
              type="button"
              onClick={() => fileInput.current.click()}
              className="absolute bottom-0 right-0 bg-indigo-600 text-white rounded-full p-2 shadow hover:bg-indigo-700 transition"
              title="Change photo"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="#fff" strokeWidth="2"/>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#fff" strokeWidth="2"/>
                <path d="M16 7V5a4 4 0 1 0-8 0v2" stroke="#fff" strokeWidth="2"/>
              </svg>
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInput}
              className="hidden"
              onChange={handlePicChange}
            />
          </div>
          <div className="text-center sm:text-left">
            <div className="font-semibold text-lg text-indigo-800">{name}</div>
            <div className="text-gray-500 text-sm break-all">{email}</div>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Full Name</label>
          <input
            className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Email</label>
          <input
            className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>

        {/* CNIC */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">CNIC Number</label>
          <input
            className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            value={cnic}
            onChange={e => {
              // Only allow numbers, max 13 digits
              const val = e.target.value.replace(/\D/g, "").slice(0, 13);
              setCnic(val);
            }}
            placeholder="13 digit CNIC (e.g. 3520212345678)"
            required
            pattern="\d{13}"
            maxLength={13}
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Date of Birth</label>
          <input
            className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            value={dob}
            onChange={e => setDob(e.target.value)}
            type="date"
            required
          />
        </div>

        {/* Mother's Name */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Mother's Name</label>
          <input
            className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            value={motherName}
            onChange={e => setMotherName(e.target.value)}
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Phone Number</label>
          <input
            className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            type="tel"
            placeholder="e.g. 03001234567"
            required
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className={`w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition text-lg ${saving ? "opacity-60 cursor-not-allowed" : ""}`}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}