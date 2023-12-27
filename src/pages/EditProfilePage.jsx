import React, { useState } from "react";
import Avtar1 from "../images/avtar1.png";
import Avtar2 from "../images/avtar2.png";
import Avtar3 from "../images/avtar3.png";
import Avtar4 from "../images/avtar4.png";
import Avtar5 from "../images/avtar5.png";
import Avtar6 from "../images/avtar6.png";
import Avtar7 from "../images/avtar7.png";
import Avtar8 from "../images/avtar8.png";
import Avtar9 from "../images/avtar9.png";
import Avtar10 from "../images/avtar10.png";
import Avtar11 from "../images/avtar11.png";
import Avtar12 from "../images/avtar12.png";
import Avtar13 from "../images/avtar13.png";
import Avtar14 from "../images/avtar14.png";
import Avtar15 from "../images/avtar15.png";
import Avtar16 from "../images/avtar16.png";
import Close from "../images/close.svg";
import Camera from "../images/camera.svg";
import { Link, useNavigate } from "react-router-dom";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState("");
  const [activeTab, setActiveTab] = useState("photo");
  const handleSave = () => {
    // Check if there is a selected image or avatar before saving
    if (selectedImage) {
      localStorage.setItem("profileImage", selectedImage);
    }
    navigate("/"); // Navigate back to the profile page after saving
  };

  const handleImageSelection = (event) => {
    const file = event.target.files[0];
    if (file) {
      const extension = file.name.split(".").pop().toLowerCase();
      const allowedExtensions = [".png", ".svg", ".jpg", ".webp"];
      if (allowedExtensions.includes(`.${extension}`)) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
      } else {
        alert(
          "Please select a file with .png, .svg, .jpg, or .webp extension."
        );
        event.target.value = null;
      }
    }
  };

  const dummyAvatars = [
    Avtar1,
    Avtar2,
    Avtar3,
    Avtar4,
    Avtar5,
    Avtar6,
    Avtar7,
    Avtar8,
    Avtar9,
    Avtar10,
    Avtar11,
    Avtar12,
    Avtar13,
    Avtar14,
    Avtar15,
    Avtar16,
  ];

  const handleAvatarSelection = (avatarUrl) => {
    setSelectedImage(avatarUrl);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <section>
      <div className="container w-full mx-auto max-w-full sm:max-w-screen-md px-5 pt-24">
        <p className="text-xl text-main font-normal pb-2">
          Choose profile photo.
        </p>
        <p className="text-base text-secondery font-normal mb-6">
          Choose a profile photo from your library or select an avatar to add to
          your profile
        </p>
        {/* Tabs for choosing photo and avatars */}
        <div className="tab-container rounded-xl bg-gray-100 p-1 flex mb-6">
          <button
            className={`text-sm text-main font-normal w-6/12 py-1.5 ${
              activeTab === "photo"
                ? "active bg-teal-light rounded-lg text-white "
                : ""
            }`}
            onClick={() => setActiveTab("photo")}
          >
            Choose Photo
          </button>
          <button
            className={`text-sm text-main font-normal w-6/12 py-1.5 ${
              activeTab === "avatar"
                ? "active bg-teal-light rounded-lg text-white "
                : ""
            }`}
            onClick={() => setActiveTab("avatar")}
          >
            Choose Avatars
          </button>
        </div>

        {/* Display content based on active tab */}
        {activeTab === "photo" && (
          <>
            {/* Display selected image or avatar */}
            <div className="profile-image-container max-w-xs w-full h-[320px] mb-6 rounded-full bg-slate-100 border-2 border-gray-300 mx-auto  flex items-center justify-center   overflow-hidden">
              <img
                className="profile-image object-cover rounded-full w-full h-full"
                src={selectedImage}
                alt="Profile"
              />
            </div>
            <div className="custom-file-button flex flex-row relative">
              {/* Choose Photo from local files */}
              <label className="flex flex-row  gap-2 py-2 px-3 justify-center absolute left-2/4 bg-slate-50 mx-auto w-32 text-white rounded-primary border border-solid border-gray-950 border-opacity-10">
                <img
                  src={Camera}
                  alt="Edit Profile"
                  className="h-5 w-full max-w-5 "
                />
                <span className="text-base text-main font-normal ">Edit</span>
              </label>
              <input
                type="file"
                onChange={handleImageSelection}
                className="text-transparent w-full relative z-10"
              />
            </div>
          </>
        )}

        {activeTab === "avatar" && (
          <>
            {/* Dummy Avatars */}
            <div className="avatar-list flex flex-wrap gap-2">
              {dummyAvatars.map((avatarUrl, index) => (
                <img
                  key={index}
                  src={avatarUrl}
                  alt="Avtar_Image"
                  className="avatar "
                  width="90"
                  height="90"
                  onClick={() => handleAvatarSelection(avatarUrl)}
                />
              ))}
            </div>
          </>
        )}

        {/* Save and Cancel buttons */}
        <button
          onClick={handleSave}
          className="bg-white border mx-auto hover:bg-teal-light border-teal-light w-full sm:w-2/12 text-base font-normal py-3 mt-36 sm:mt-6 px-4 text-teal-light hover:text-white rounded-xl "
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className="bg-slate-100 flex items-center justify-center  w-11 h-11 text-base font-normal p-2.5   rounded-full absolute top-7 left-5"
        >
          <img
            src={Close}
            alt="Cancle"
            className="h-5 w-full max-w-5 "
            height="24px"
            width="24px"
          />
        </button>
      </div>
    </section>
  );
};

export default EditProfilePage;
