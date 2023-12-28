import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo.svg";
import Camera from "../images/camera.svg";

const ProfilePage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [storedProfileData, setStoredProfileData] = useState(null);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [yearOfBirthError, setYearOfBirthError] = useState(false);

  const navigate = useNavigate();

  const handleEditImage = () => {
    navigate("/edit");
  };

  useEffect(() => {
    // Check if profile data is available in local storage
    const storedData = localStorage.getItem("userProfile");
    if (storedData) {
      setStoredProfileData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (storedProfileData) {
      setFirstName(storedProfileData.firstName || "");
      setLastName(storedProfileData.lastName || "");
      setYearOfBirth(storedProfileData.yearOfBirth || "");
    }
    const storedProfileImage = localStorage.getItem("profileImage");
    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
  }, [storedProfileData]);

  const handleSave = () => {
    // Validation - check if required fields are empty
    if (!firstName || !lastName || !yearOfBirth) {
      setFirstNameError(!firstName);
      setLastNameError(!lastName);
      setYearOfBirthError(!yearOfBirth);
      alert("Please fill in all required fields!");
      return;
    }

    setFirstNameError(false);
    setLastNameError(false);
    setYearOfBirthError(false);

    // Prepare the profile object with all details
    const profileData = {
      firstName: firstName,
      lastName: lastName,
      yearOfBirth: yearOfBirth,
      profileImage: profileImage,
    };

    // Save the profile data to local storage
    localStorage.setItem("userProfile", JSON.stringify(profileData));
    // Logic to save profile changes (API calls, etc.)
    // After saving, you can redirect or show a success message
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 }, (_, index) => (
    <option key={index} value={currentYear - index}>
      {currentYear - index}
    </option>
  ));

  return (
    <section className="">
      <div className="container w-full mx-auto max-w-full sm:max-w-screen-md px-5 pt-[91px]">
        <p className="text-xl text-main font-normal pb-2">
          Let’s get to know you
        </p>
        <p className="text-base text-secondery font-normal mb-6">
          Let us get to know you a bit better so you can get the best out of us
        </p>
        <div className="profile_form">
          <div className="flex items-center mb-10 flex-col relative">
            <div className="w-full max-w-40 h-40 flex items-center justify-center bg-gray-300 border-1 border-slate-950 border-opacity-5 border-gray-300 rounded-full overflow-hidden">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="object-cover rounded-full w-full h-full"
                />
              ) : (
                <img
                  src={Logo}
                  alt="Profile"
                  className="object-cover rounded-full w-full h-full"
                />
              )}
            </div>
            <button
              onClick={handleEditImage}
              className="edit_btn py-2 px-3 bg-slate-50  text-white rounded-primary border border-solid border-gray-950 border-opacity-10 absolute top-[90%] flex flex-row  gap-2"
            >
              <img
                src={Camera}
                alt="Edit Profile"
                className="h-5 w-full max-w-5 "
              />
              <span className="text-sm text-main font-normal ">Edit</span>
            </button>
          </div>

          <div className="mb-4">
            <label
              htmlFor="firstName"
              className=" font-normal mb-1 flex gap-1 text-sm text-slate-950 opacity-70"
            >
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setFirstNameError(false);
              }}
              className={`border border-gray-300 bg-gray-50 rounded-xl  py-2.5 px-4 w-full text-base font-normal text-main leading ${
                firstNameError && !firstName ? "border-red-500" : ""
              }`}
            />
            {firstNameError && !firstName && (
              <span className="text-red-500 text-sm">
                First Name is Required
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className=" font-normal mb-1 flex gap-1 text-sm text-sm text-slate-950 opacity-70"
            >
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setLastNameError(false);
              }}
              className={`border border-gray-300  bg-gray-50 rounded-xl  py-2.5 px-4 w-full text-base font-normal text-main leading ${
                lastNameError && !lastName ? "border-red-500" : ""
              }`}
            />
            {lastNameError && !lastName && (
              <span className="text-red-500 text-sm">
                Last Name is Required
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="yearOfBirth"
              className=" font-normal mb-1 flex gap-1 text-sm text-sm text-slate-950 opacity-70"
            >
              {" "}
              Year of Birth <span className="text-red-600">*</span>
            </label>
            <select
              id="yearOfBirth"
              value={yearOfBirth}
              onChange={(e) => {
                setYearOfBirth(e.target.value);
                setYearOfBirthError(false);
              }}
              className={`border border-gray-300 bg-gray-50 rounded-xl  py-2.5 px-4 w-full text-base font-normal text-main birth_date ${
                yearOfBirthError && !yearOfBirth ? "border-red-500" : ""
              }`}
            >
              <option value="">Select Year</option>
              {years}
            </select>
            {yearOfBirthError && !yearOfBirth && (
              <span className="text-red-500 text-sm">
                Date of Birth is Required
              </span>
            )}
          </div>
          <button
            onClick={handleSave}
            className="bg-teal-light w-full sm:w-2/12 text-base font-normal py-3 mt-28  mb-3 sm:mt-6 px-4 text-white  rounded-xl "
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
