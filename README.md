[Uploading canvasimport { useState } from "react";

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
}_kenya_authentication.jsx…]()
import { useState } from "react";

export default function ArtistDashboard() {
  const [artworks, setArtworks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    type: "Digital",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const submitArtwork = () => {
    if (!form.title || !form.price || !form.image) return alert("Fill all required fields");

    setArtworks([
      ...artworks,
      { ...form, status: "Pending Admin Approval" },
    ]);

    setForm({ title: "", price: "", type: "Digital", description: "", image: null });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Artist Dashboard – Canvas Kenya</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Upload New Artwork</h2>

          <input
            name="title"
            placeholder="Artwork Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl mb-3"
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl mb-3"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl mb-3"
          >
            <option>Digital</option>
            <option>Physical</option>
          </select>

          <textarea
            name="description"
            placeholder="Artwork Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl mb-3"
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mb-4"
          />

          <button
            onClick={submitArtwork}
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800"
          >
            Submit Artwork
          </button>

          <p className="text-sm text-gray-500 mt-3">*Artwork will appear after admin approval</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">My Artworks</h2>

          {artworks.length === 0 && (
            <p className="text-gray-500">No artworks uploaded yet.</p>
          )}

          <ul className="space-y-4">
            {artworks.map((art, index) => (
              <li key={index} className="border p-4 rounded-xl">
                <h3 className="font-semibold">{art.title}</h3>
                <p>Type: {art.type}</p>
                <p>Price: {art.price}</p>
                <p className="text-orange-600 font-medium">{art.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}import { useState } from "react";

export default function Checkout({ price }) {
  const commissionRate = 0.2;
  const platformFee = price * commissionRate;
  const artistEarnings = price - platformFee;

  const [method, setMethod] = useState("M-Pesa");

  const pay = () => {
    alert(`Payment Method: ${method}\nTotal: ${price}\nPlatform (20%): ${platformFee}\nArtist (80%): ${artistEarnings}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Checkout – Canvas Kenya</h1>

        <p className="mb-2">Artwork Price: <strong>${price}</strong></p>
        <p className="text-sm text-gray-600 mb-4">20% platform commission applied</p>

        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input type="radio" checked={method === "M-Pesa"} onChange={() => setMethod("M-Pesa")} />
            M-Pesa
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" checked={method === "PayPal"} onChange={() => setMethod("PayPal")} />
            PayPal / Cards
          </label>
        </div>

        <button
          onClick={pay}
          className="w-full bg-black text-white py-3 rounded-xl mt-6 hover:bg-gray-800"
        >
          Pay Now
        </button>

        <div className="text-xs text-gray-500 mt-4">
          <p>Platform earns: ${platformFee}</p>
          <p>Artist receives: ${artistEarnings}</p>
        </div>
      </div>
    </div>
  );
}
 { useState } from "react";

export default function AdminDashboard() {
  const [artists, setArtists] = useState([
    { id: 1, name: "Jane Artist", country: "Kenya", status: "Pending" },
    { id: 2, name: "Mark Painter", country: "USA", status: "Approved" },
  ]);

  const [artworks, setArtworks] = useState([
    { id: 1, title: "Sunset Dreams", artist: "Jane Artist", price: 100, status: "Pending" },
    { id: 2, title: "Abstract Flow", artist: "Mark Painter", price: 250, status: "Approved" },
  ]);

  const approveArtist = (id) => {
    setArtists(artists.map(a => a.id === id ? { ...a, status: "Approved" } : a));
  };

  const approveArtwork = (id) => {
    setArtworks(artworks.map(a => a.id === id ? { ...a, status: "Approved" } : a));
  };

  const totalSales = artworks.filter(a => a.status === "Approved").reduce((sum, a) => sum + a.price, 0);
  const platformEarnings = totalSales * 0.2;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard – Canvas Kenya</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="font-semibold">Total Sales</h2>
          <p className="text-2xl font-bold">${totalSales}</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="font-semibold">Platform Earnings (20%)</h2>
          <p className="text-2xl font-bold">${platformEarnings}</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow">
          <h2 className="font-semibold">Approved Artworks</h2>
          <p className="text-2xl font-bold">{artworks.filter(a => a.status === "Approved").length}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Artists Approval</h2>
          <ul className="space-y-3">
            {artists.map(artist => (
              <li key={artist.id} className="flex justify-between items-center border p-3 rounded-xl">
                <div>
                  <p className="font-semibold">{artist.name}</p>
                  <p className="text-sm text-gray-500">{artist.country}</p>
                </div>
                {artist.status === "Pending" ? (
                  <button onClick={() => approveArtist(artist.id)} className="bg-green-600 text-white px-4 py-2 rounded-xl">Approve</button>
                ) : (
                  <span className="text-green-600 font-semibold">Approved</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Artwork Approval</h2>
          <ul className="space-y-3">
            {artworks.map(art => (
              <li key={art.id} className="flex justify-between items-center border p-3 rounded-xl">
                <div>
                  <p className="font-semibold">{art.title}</p>
                  <p className="text-sm text-gray-500">By {art.artist} – ${art.price}</p>
                </div>
                {art.status === "Pending" ? (
                  <button onClick={() => approveArtwork(art.id)} className="bg-blue-600 text-white px-4 py-2 rounded-xl">Approve</button>
                ) : (
                  <span className="text-blue-600 font-semibold">Approved</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
