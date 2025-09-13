import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";


export default function VetForm() {
 const [form, setForm] = useState({
   name: "",
   specialization: "",
   phone: "",
   email: "",
 });
 const [errors, setErrors] = useState({});
 const [imagePreview, setImagePreview] = useState(null);
 const fileInputRef = useRef(null);
 const navigate = useNavigate();


 // Prevent numbers in Name field
 const handleNameKeyDown = (e) => {
   if (/\d/.test(e.key)) e.preventDefault();
 };


 const handleChange = (e) => {
   const { name, value } = e.target;
   setForm((prev) => ({ ...prev, [name]: value }));
 };


 const handleImageChange = (e) => {
   const file = e.target.files && e.target.files[0];
   if (!file) return;
   const reader = new FileReader();
   reader.onload = (ev) => setImagePreview(ev.target.result);
   reader.readAsDataURL(file);
 };


 const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);


 const validate = () => {
   const newErrors = {};
   if (!form.name.trim()) newErrors.name = "Name is required.";
   if (!form.specialization.trim())
     newErrors.specialization = "Specialization is required.";
   if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
   if (!form.email.trim() || !isValidEmail(form.email))
     newErrors.email = "Valid email is required.";
   if (!imagePreview) newErrors.image = "Profile image is required.";


   setErrors(newErrors);
   return Object.keys(newErrors).length === 0;
 };


 const handleSubmit = (e) => {
   e.preventDefault();
   if (!validate()) return;


   // All validations passed → navigate
   navigate("/vet-profile-page", { state: { ...form, image: imagePreview } });
 };


 return (
   <div className="ct-main-body">
     <section>
       <div className="main-hd">
         <div className="col-1">
           <div className="contact-title">
             <h5 className="sub-title">Veterinarian Registration</h5>
             <h2 className="titles">
               Enter Vet Details<span className="exclimation">.</span>
             </h2>
           </div>


           <div className="contact-wrap-content">
             <form className="contact-form" onSubmit={handleSubmit} noValidate>
               {/* Name */}
               <div className="form-grp">
                 <label className="form-label" htmlFor="name">
                   Full Name <span className="exclimation">*</span>
                 </label>
                 <input
                   type="text"
                   name="name"
                   placeholder="Dr. John Doe"
                   value={form.name}
                   onChange={handleChange}
                   onKeyDown={handleNameKeyDown}
                 />
                 {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
               </div>


               {/* Specialization */}
               <div className="form-grp">
                 <label className="form-label" htmlFor="specialization">
                   Specialization <span className="exclimation">*</span>
                 </label>
                 <input
                   type="text"
                   name="specialization"
                   placeholder="e.g. Surgery, Dentistry"
                   value={form.specialization}
                   onChange={handleChange}
                 />
                 {errors.specialization && (
                   <small style={{ color: "red" }}>{errors.specialization}</small>
                 )}
               </div>


               {/* Phone */}
               <div className="form-grp">
                 <label className="form-label" htmlFor="phone">
                   Phone Number <span className="exclimation">*</span>
                 </label>
                 <input
                   type="text"
                   name="phone"
                   placeholder="+92 300 1234567"
                   value={form.phone}
                   onChange={handleChange}
                 />
                 {errors.phone && <small style={{ color: "red" }}>{errors.phone}</small>}
               </div>


               {/* Email */}
               <div className="form-grp">
                 <label className="form-label" htmlFor="email">
                   Email <span className="exclimation">*</span>
                 </label>
                 <input
                   type="email"
                   name="email"
                   placeholder="vet@example.com"
                   value={form.email}
                   onChange={handleChange}
                 />
                 {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
               </div>


               {/* Image Upload */}
               <div className="form-grp">
                 <label className="form-label">Profile Image</label>
                 <div className="flex items-center gap-3">
                   <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                     {imagePreview ? (
                       <img
                         src={imagePreview}
                         alt="Preview"
                         className="w-full h-full object-cover"
                       />
                     ) : (
                       <Camera className="w-6 h-6 text-gray-400" />
                     )}
                   </div>
                   <input
                     ref={fileInputRef}
                     type="file"
                     accept="image/*"
                     onChange={handleImageChange}
                   />
                 </div>
                 {errors.image && <small style={{ color: "red" }}>{errors.image}</small>}
               </div>


               <button type="submit" className="btn rounded-btn">
                 Save & Continue
               </button>
             </form>
           </div>
         </div>


         {/* Right Column (Optional Image / Info) */}
         <div className="col-2">
           <div className="contact-info-wrap">
             <div className="contact-img">
               <img src="../public/contact_img.png" alt="Vet Illustration" />
             </div>
           </div>
         </div>
       </div>
     </section>
   </div>
 );
}



