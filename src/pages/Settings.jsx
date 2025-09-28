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
    <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-lg p-4 sm:p-8 mt-6 mb-10 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-6 text-center">Settings</h2>
      <form onSubmit={handleSave} className="space-y-6">
        {/* Notifications */}
        <div className="flex items-center justify-between">
          <label className="font-semibold text-gray-700">Enable Notifications</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={e => setNotifications(e.target.checked)}
            className="w-5 h-5 accent-indigo-600"
          />
        </div>
        {/* Dark Mode */}
        <div className="flex items-center justify-between">
          <label className="font-semibold text-gray-700">Dark Mode</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={e => setDarkMode(e.target.checked)}
            className="w-5 h-5 accent-indigo-600"
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
            className="w-5 h-5 accent-indigo-600"
          />
        </div>
        {/* Language */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Language</label>
          <select
            className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
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
            className={`w-full sm:w-auto py-3 px-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition text-lg ${saving ? "opacity-60 cursor-not-allowed" : ""}`}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Settings"}
          </button>
          <button
            type="button"
            className="w-full sm:w-auto py-3 px-8 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-semibold transition text-lg border border-red-200"
            onClick={() => alert("Account deactivation is a demo only.")}
          >
            Deactivate Account
          </button>
        </div>
      </form>
    </div>
  );
}