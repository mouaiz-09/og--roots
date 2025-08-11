import React, { useState } from "react";

function AddProductForm() {
  const [Admin, SetAdmin] = useState(false);
  

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.name || !product.price) {
      setMessage("الاسم والسعر مطلوبين");
      return;
    }

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    if (image) formData.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("تمت إضافة المنتج بنجاح");
        setProduct({ name: "", description: "", price: "" });
        setImage(null);
        // لتنظيف input file
        e.target.reset();
      } else {
        setMessage(data.message || "حدث خطأ");
      }
    } catch (error) {
      setMessage("خطأ في الاتصال بالخادم");
    }
  };

  return (
    <>
    <div className="nav">

    </div>
      <div style={{ maxWidth: 400, margin: "auto" }}>
        <h2>OG Roots - أضف منتج جديد</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>اسم المنتج:</label>
            <br />
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>الوصف:</label>
            <br />
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>السعر:</label>
            <br />
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
            />
          </div>
          <div>
            <label>صورة المنتج:</label>
            <br />
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <button type="submit" style={{ marginTop: "10px" }}>
            أضف المنتج
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProductForm;
