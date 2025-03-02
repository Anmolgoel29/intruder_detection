import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/UserContext';
import avatar from '../../assets/avtar_image.png';
import profile_image from '../../assets/profile2_image.jpg';

// filepath: /c:/Users/nisha/Desktop/project_new1/intruder_detection/src/frontend/src/components/Profile/Profile.jsx
function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);  // empty values are there

  const [name, setName] = useState(user.name);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [birthday, setBirthday] = useState(user.birthday);
  const [profilePic, setProfilePic] = useState(user.profilePic || avatar);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !firstName || !lastName || !email || !phone || !birthday || !profilePic) {
      alert("Please fill out all fields and upload a profile picture.");
      return;
    }
    console.log("Saved Data", { name, firstName, lastName, email, phone, birthday });
    dispatch(updateUser({ name, firstName, lastName, email, phone, birthday, profilePic }));
    setIsSubmitted(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePic(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-200 p-4'>
      {isSubmitted ? (
        // Success Message after Submission
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-green-600">Profile Updated Successfully! 🎉</h2>
          <p className="text-gray-700 mt-2">Thank you for updating your profile.</p>
        </div>
      ) : (
        <>
          <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md m-4'>
            <div className='flex flex-col items-center'>
              <h2 className='text-2xl hover:underline font-bold mb-2'>PROFILE PICTURE</h2>
              <img src={profilePic} alt="Profile" className='w-32 h-32 rounded-full mb-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' />
              <p className='text-gray-600 mb-4 hover:underline'>JPG or png no larger than 5MB</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="fileInput"
                onChange={handleImageUpload}
              />
              <label htmlFor="fileInput" className='px-4 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer'>
                Upload Picture
              </label>
            </div>
          </div>

          <form
            className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md m-4'
            style={{
              backgroundImage: `url(${profile_image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onSubmit={handleFormSubmit}
          >
            <div className='mb-4'>
              <p className='text-center font-bold text-2xl hover:underline'>Account Information</p>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Username
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                value={name}
                placeholder='Username'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>
                First Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='firstName'
                type='text'
                value={firstName}
                placeholder='First Name'
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastName'>
                Last Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='lastName'
                type='text'
                value={lastName}
                placeholder='Last Name'
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email Address
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                value={email}
                placeholder='Email Address'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phone'>
                Phone Number
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='phone'
                type='tel'
                value={phone}
                placeholder='Phone Number'
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='birthday'>
                Birthday
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='birthday'
                type='date'
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Profile;