import React, { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [newsletter, setNewsletter] = useState(true);
  const [language, setLanguage] = useState("en");
  const [saving, setSaving] = useState(false);

  function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert("Settings saved! (demo)");
    }, 1000);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-4 sm:p-8 lg:p-10 mt-6 mb-10 w-full border-2 border-hospital-blue/20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-hospital-blue mb-8 text-center">Settings</h2>
      <form onSubmit={handleSave} className="space-y-6">
        {/* Notifications */}
        <div className="flex items-center justify-between">
          <label className="font-semibold text-gray-700">Enable Notifications</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={e => setNotifications(e.target.checked)}
            className="w-5 h-5 accent-hospital-orange"
          />
        </div>
        {/* Dark Mode */}
        <div className="flex items-center justify-between">
          <label className="font-semibold text-gray-700">Dark Mode</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={e => setDarkMode(e.target.checked)}
            className="w-5 h-5 accent-hospital-orange"
            disabled
            title="Demo only"
          />
        </div>
        {/* Newsletter */}
        <div className="flex items-center justify-between">
          <label className="font-semibold text-gray-700">Subscribe to Newsletter</label>
          <input
            type="checkbox"
            checked={newsletter}
            onChange={e => setNewsletter(e.target.checked)}
            className="w-5 h-5 accent-hospital-orange"
          />
        </div>
        {/* Language */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Language</label>
          <select
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-hospital-cream focus:border-hospital-blue transition text-gray-800"
            value={language}
            onChange={e => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ur">Urdu</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
        {/* Account Actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className={`w-full sm:w-auto py-3.5 px-8 bg-hospital-orange hover:bg-[#B84200] text-white rounded-lg font-bold transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 ${saving ? "opacity-60 cursor-not-allowed" : ""}`}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Settings"}
          </button>
          <button
            type="button"
            className="w-full sm:w-auto py-3.5 px-8 bg-red-50 hover:bg-red-100 text-hospital-orange rounded-lg font-bold transition-all duration-200 text-lg border-2 border-red-200 hover:border-red-300"
            onClick={() => alert("Account deactivation is a demo only.")}
          >
            Deactivate Account
          </button>
        </div>
      </form>
    </div>
  );
}