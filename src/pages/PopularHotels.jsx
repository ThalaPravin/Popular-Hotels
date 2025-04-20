import React, { useState } from 'react';
import TabNavigation from '../components/TabNavigation.jsx';
import HotelSection from '../components/HotelSection.jsx';
import MapComponent from '../components/MapComponent.jsx';
import hotelData from '../data/hotels.json';

const PopularHotels = () => {
  const [activeTab, setActiveTab] = useState('Hotels');
  const jaipurLocation = { 
    lat: 26.9124, 
    lng: 75.7873, 
    name: "Jaipur, Rajasthan" 
  };
  
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container  mx-auto px-4 py-6 w-full min-h-screen">
      <div className="flex flex-col lg:flex-row [@media(max-width:1385px)]:flex-col md:flex-col gap-6">
        <div className="w-full ">
          <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
          
          {activeTab === 'Hotels' && (
            <HotelSection hotels={hotelData.hotels} />
          )}
          
          {activeTab === 'Restaurants' && (
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800">Restaurants content will go here</h2>
            </div>
          )}
          
          {activeTab === 'Places' && (
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800">Places content will go here</h2>
            </div>
          )}
        </div>

       <MapComponent location={jaipurLocation} />
        
     
      </div>

    </div>
  );
};

export default PopularHotels;