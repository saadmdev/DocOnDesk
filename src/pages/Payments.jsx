import React, { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaPaypal, FaCreditCard, FaMobileAlt } from "react-icons/fa";

export default function Payments() {
  const [method, setMethod] = useState("visa");
  const [cardNumber, setCardNumber] = useState("");
  const [holder, setHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [account, setAccount] = useState("");
  const [saving, setSaving] = useState(false);

  function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert("Payment method added! (demo)");
      setCardNumber("");
      setHolder("");
      setExpiry("");
      setCvc("");
      setAccount("");
    }, 1200);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10 mb-10">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Payment Methods</h2>
      <form onSubmit={handleSave} className="space-y-6">
        {/* Payment Method Selection */}
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Select Payment Method</label>
          <div className="grid grid-cols-3 gap-4">
            <button
              type="button"
              className={`flex flex-col items-center border rounded-lg p-3 transition ${method === "visa" ? "border-indigo-600 bg-indigo-50" : "border-gray-200 bg-white"}`}
              onClick={() => setMethod("visa")}
            >
              <FaCcVisa className="text-3xl text-blue-700" />
              <span className="text-xs mt-1">Visa</span>
            </button>
            <button
              type="button"
              className={`flex flex-col items-center border rounded-lg p-3 transition ${method === "master" ? "border-indigo-600 bg-indigo-50" : "border-gray-200 bg-white"}`}
              onClick={() => setMethod("master")}
            >
              <FaCcMastercard className="text-3xl text-red-600" />
              <span className="text-xs mt-1">Mastercard</span>
            </button>
            <button
              type="button"
              className={`flex flex-col items-center border rounded-lg p-3 transition ${method === "paypal" ? "border-indigo-600 bg-indigo-50" : "border-gray-200 bg-white"}`}
              onClick={() => setMethod("paypal")}
            >
              <FaPaypal className="text-3xl text-blue-500" />
              <span className="text-xs mt-1">PayPal</span>
            </button>
            <button
              type="button"
              className={`flex flex-col items-center border rounded-lg p-3 transition ${method === "easypaisa" ? "border-indigo-600 bg-indigo-50" : "border-gray-200 bg-white"}`}
              onClick={() => setMethod("easypaisa")}
            >
              <FaMobileAlt className="text-3xl text-green-600" />
              <span className="text-xs mt-1">EasyPaisa</span>
            </button>
            <button
              type="button"
              className={`flex flex-col items-center border rounded-lg p-3 transition ${method === "jazzcash" ? "border-indigo-600 bg-indigo-50" : "border-gray-200 bg-white"}`}
              onClick={() => setMethod("jazzcash")}
            >
              <FaMobileAlt className="text-3xl text-yellow-600" />
              <span className="text-xs mt-1">JazzCash</span>
            </button>
            <button
              type="button"
              className={`flex flex-col items-center border rounded-lg p-3 transition ${method === "credit" ? "border-indigo-600 bg-indigo-50" : "border-gray-200 bg-white"}`}
              onClick={() => setMethod("credit")}
            >
              <FaCreditCard className="text-3xl text-indigo-600" />
              <span className="text-xs mt-1">Credit Card</span>
            </button>
          </div>
        </div>

        {/* Payment Details */}
        {(method === "visa" || method === "master" || method === "credit") && (
          <>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Card Number</label>
              <input
                className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                value={cardNumber}
                onChange={e => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
                placeholder="XXXX XXXX XXXX XXXX"
                required
                maxLength={16}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-semibold text-gray-700 mb-1">Card Holder</label>
                <input
                  className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                  value={holder}
                  onChange={e => setHolder(e.target.value)}
                  placeholder="Name on Card"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Expiry</label>
                <input
                  className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                  value={expiry}
                  onChange={e => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  required
                  maxLength={5}
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-1">CVC</label>
                <input
                  className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
                  value={cvc}
                  onChange={e => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                  placeholder="CVC"
                  required
                  maxLength={4}
                />
              </div>
            </div>
          </>
        )}

        {(method === "paypal") && (
          <div>
            <label className="block font-semibold text-gray-700 mb-1">PayPal Email</label>
            <input
              className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              value={account}
              onChange={e => setAccount(e.target.value)}
              placeholder="your@email.com"
              type="email"
              required
            />
          </div>
        )}

        {(method === "easypaisa" || method === "jazzcash") && (
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              {method === "easypaisa" ? "EasyPaisa" : "JazzCash"} Account Number
            </label>
            <input
              className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              value={account}
              onChange={e => setAccount(e.target.value.replace(/\D/g, "").slice(0, 11))}
              placeholder="03XXXXXXXXX"
              required
              maxLength={11}
            />
          </div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            className={`w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition text-lg ${saving ? "opacity-60 cursor-not-allowed" : ""}`}
            disabled={saving}
          >
            {saving ? "Saving..." : "Add Payment Method"}
          </button>
        </div>
      </form>
    </div>
  );
}