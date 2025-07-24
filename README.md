# 🗺️ Doctor-Patient Location Finder (React + Node + MongoDB + Google Maps)

A full-stack web application that allows **doctors to mark their clinic location on a map** and lets **patients search for nearby doctors** using Google Maps and MongoDB geolocation queries.


##  Tech Stack

- **Frontend**: ReactJS
- **Backend**: Node.js + Express
- **Database**: MongoDB (GeoJSON + $near queries)
- **Maps**: Google Maps API

---

##  Features

### 👨‍⚕️ Doctor Side
- Drop a pin on the map to mark clinic location
- Submit doctor name and specialization
- Location is saved in MongoDB as GeoJSON (Point format)

### 🧑‍🤝‍🧑 Patient Side
- Click on map to choose area
- See nearby doctors within 5 km radius
- Display markers and list of matched doctors

### 🔁 Toggle Views
- Switch between Doctor and Patient modes using simple buttons

---

## 📁 Project Structure
doctor-patient-location-app
├── client/ # React frontend
│ └── src/components/
│ ├── MapDoctor.js
│ └── MapPatient.js
├── server/ # backend
│ ├── routes/doctorRoutes.js
│ └── models/Doctor.js
└── README.md


---

## 🌍 MongoDB Geolocation Query Used

```js
location: {
  $near: {
    $geometry: {
      type: "Point",
      coordinates: [longitude, latitude],
    },
    $maxDistance: 5000 // 5km
  }
}

**DOCTOR SIDE**
<img width="1907" height="918" alt="image" src="https://github.com/user-attachments/assets/73727745-b2a0-4c96-a300-88404bc8e0cd" />

Patient side
<img width="1901" height="913" alt="image" src="https://github.com/user-attachments/assets/29433486-976f-4460-b2ae-cae202c736b0" />


Ok Thanks 
Mohin
