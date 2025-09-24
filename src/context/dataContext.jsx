import { createContext, useState } from "react";

export const DriverData = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@fleetmanager.com",
    phone: "+1 (555) 123-4567",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    available: true,
    status: "online",
    rating: 4.8,
    totalTrips: 156,
    completedTrips: 148,
    workingHours: {
      start: "06:00",
      end: "18:00",
      timezone: "EST",
    },
  },
  {
    id: 6,
    name: "Nada Essam",
    email: "NadaEssam@fleetmanager.com",
    phone: "+1 (555) 123-4567",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    available: false,
    status: "break",
    rating: 4.8,
    totalTrips: 156,
    completedTrips: 148,
    workingHours: {
      start: "04:00",
      end: "01:00",
      timezone: "EST",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@fleetmanager.com",
    phone: "+1 (555) 987-6543",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",

    available: true,
    status: "on-route",
    rating: 4.9,
    totalTrips: 203,
    completedTrips: 198,
    workingHours: {
      start: "05:30",
      end: "17:30",
      timezone: "EST",
    },
  },
  {
    id: 3,
    name: "Mike Wilson",
    email: "mike.wilson@fleetmanager.com",
    phone: "+1 (555) 456-7890",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    available: false,
    status: "break",
    rating: 4.7,
    totalTrips: 89,
    completedTrips: 85,
    workingHours: {
      start: "07:00",
      end: "19:00",
      timezone: "EST",
    },
  },
  {
    id: 4,
    name: "Emma Davis",
    email: "emma.davis@fleetmanager.com",
    phone: "+1 (555) 321-0987",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    available: true,
    status: "online",
    rating: 5.0,
    totalTrips: 278,
    workingHours: {
      start: "06:30",
      end: "18:30",
      timezone: "EST",
    },
  },
  {
    id: 5,
    name: "David Rodriguez",
    email: "david.rodriguez@fleetmanager.com",
    phone: "+1 (555) 654-3210",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    available: true,
    status: "online",
    rating: 4.6,
    totalTrips: 134,
    completedTrips: 128,
    cancelledTrips: 6,
    joinDate: "2022-07-12",
    licenseNumber: "DL654321098",
    licenseExpiry: "2025-07-12",

    workingHours: {
      start: "08:00",
      end: "20:00",
      timezone: "EST",
    },
    performance: {
      onTimeDelivery: 94,
      customerRating: 4.6,
      fuelEfficiency: 15.3,
      accidentFree: true,
      totalDistance: 12400,
      hoursWorked: 980,
    },
    specializations: ["School Transport", "Event Shuttle"],
    languages: ["English", "Spanish", "Portuguese"],
  },
];



//roads data 
const RoadsData = [
  {
    id: 1,
    name: "Express Downtown",
    code: "RT-001",
    startLocation: "Central Station",
    endLocation: "Business District",
    assignedDriverId: 1,
    time: "08:00",
    duration: "45 min",
    distance: 12.5,
    priority: "high",
    passengers: 24,
    status: "active",
    fare: 25.0,
    category: "commuter",
  },
  {
    id: 2,
    name: "Airport Shuttle",
    code: "RT-002",
    startLocation: "Central Station",
    endLocation: "International Airport",
    assignedDriverId: 2,
    time: "06:30",
    duration: "60 min",
    distance: 25.0,
    priority: "high",
    passengers: 18,
    status: "active",
    fare: 40.0,
    category: "shuttle",
  },
  {
    id: 3,
    name: "University Loop",
    code: "RT-003",
    startLocation: "Downtown Plaza",
    endLocation: "City University",
    assignedDriverId: 3,
    time: "09:15",
    duration: "35 min",
    distance: 10.2,
    priority: "medium",
    passengers: 32,
    status: "active",
    fare: 20.0,
    category: "commuter",
  },
  {
    id: 4,
    name: "Suburban Express",
    code: "RT-004",
    startLocation: "Greenfield Suburbs",
    endLocation: "Central Station",
    assignedDriverId: 4,
    time: "07:45",
    duration: "50 min",
    distance: 20.5,
    priority: "high",
    passengers: 27,
    status: "active",
    fare: 30.0,
    category: "commuter",
  },
  {
    id: 5,
    name: "Night Owl Service",
    code: "RT-005",
    startLocation: "Central Station",
    endLocation: "Old Town",
    assignedDriverId: 5,
    time: "23:00",
    duration: "40 min",
    distance: 15.0,
    priority: "low",
    passengers: 12,
    status: "inactive",
    fare: 18.0,
    category: "night",
  },
  {
    id: 6,
    name: "Tourist City Ride",
    code: "RT-006",
    startLocation: "City Museum",
    endLocation: "Seaside Park",
    assignedDriverId: 6,
    time: "10:00",
    duration: "70 min",
    distance: 30.0,
    priority: "medium",
    passengers: 20,
    status: "active",
    fare: 50.0,
    category: "tourist",
  },
  {
    id: 7,
    name: "Industrial Line",
    code: "RT-007",
    startLocation: "Central Station",
    endLocation: "Industrial Zone",
    assignedDriverId: 2,
    time: "05:30",
    duration: "55 min",
    distance: 22.0,
    priority: "high",
    passengers: 35,
    status: "active",
    fare: 28.0,
    category: "worker",
  },
];




export const AppContext=createContext();

export function AppProvider({children}){
const [drivers,setDrivers]=useState(DriverData);
const [roads,setRoads]=useState(RoadsData);

const addDriver = (driverForm) => {
   if (
     driverForm.name.trim() &&
     driverForm.phone.trim() &&
     driverForm.email.trim()&&
     driverForm.status.trim()
   ) {
     const newDriver = {
       id: Date.now(),
       ...driverForm,
       rating: 0,
       totalTrips: 0,
     };
     setDrivers([...drivers, newDriver]);
    
   }
};

const updateDriver = (id, updatedData) => {
  setDrivers((prev) =>
    prev.map((driver) =>
      driver.id === id ? { ...driver, ...updatedData } : driver
    )
  );
};

const deleteDriver = (id) => {
  setDrivers((prev) => prev.filter((d) => d.id !== id));
};

const toggleStatus = (id) => {
  setDrivers((prev) =>
    prev.map((driver) =>
      driver.id === id
        ? {
            ...driver,
            available: driver.available  ? false : true,
          }
        : driver
    )
  );
};

// Roads activity

const addRoad = (RoadForm) => {
  
  
    const newRoad = {
      id: Date.now(),
      ...RoadForm
    };
    setRoads([...roads, newRoad]);
  
};
const deleteRoad = (id) => {
  setRoads((prev) => prev.filter((d) => d.id !== id));
};

  const stats = {
    totalRoutes: roads.length,
    assignedRoutes: roads.filter((r) => r.assignedDriverId).length,
    availableDrivers: drivers.filter((d) => d.available).length,
    totalDrivers: drivers.length,
    highPriorityRoutes: roads.filter((r) => r.priority === "high").length,
  };

return (
  <AppContext.Provider
    value={{
      deleteRoad,
      drivers,
      setDrivers,
      addDriver,
      updateDriver,
      deleteDriver,
      toggleStatus,
      roads,
      addRoad,
      setRoads,
      stats
    }}
  >
    {children}
  </AppContext.Provider>
);




}



