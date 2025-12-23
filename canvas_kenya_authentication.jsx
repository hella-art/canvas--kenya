import { useState } from "react";

export default function CanvasKenyaAuth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Canvas Kenya</h1>
        <p className="text-center text-gray-600 mb-6">
          {isLogin ? "Login to your artist account" : "Create your artist account"}
        </p>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-xl"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-xl"
          />

          {!isLogin && (
            <input
              type="text"
              placeholder="Country"
              className="w-full p-3 border rounded-xl"
            />
          )}

          {!isLogin && (
            <textarea
              placeholder="Short Artist Bio"
              className="w-full p-3 border rounded-xl"
            />
          )}

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-xl"
          />

          <button
            type="button"
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-blue-600 hover:underline"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Login"}
          </button>
        </div>

        <p className="text-xs text-center text-gray-400 mt-6">
          Admin approval required before artworks go live
        </p>
      </div>
    </div>
  );
}