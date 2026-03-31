# SafeHer – Safety Route Navigation System

SafeHer is a web application that helps users find safer travel routes by analyzing nearby incident data. Unlike traditional navigation systems that only suggest the shortest path, SafeHer considers safety by identifying areas with reported incidents and recommending safer alternative routes.

## Problem Statement
Many people feel unsafe while traveling, especially at night or in unfamiliar areas. Current navigation systems focus only on distance and travel time and do not consider safety factors. SafeHer addresses this problem by analyzing incident reports along routes and helping users choose safer paths for their journey.

## Features
- Safety-based route recommendation
- Incident reporting system
- Interactive map visualization
- Route safety classification (Safe / Moderate / Unsafe)
- Display of nearby incidents along the route
- Alternative route comparison

## Tech Stack
Frontend: React.js  
Backend: Node.js, Express.js  
Database: MongoDB  
Maps & Navigation: Google Maps API, OSRM Routing  
Geocoding: OpenStreetMap Nominatim

## System Architecture
The system consists of two main components:

Frontend (React)
- Displays interactive map
- Allows users to search locations
- Shows route safety visualization
- Enables incident reporting

Backend (Node.js / Express)
- Handles API requests
- Stores incident data in MongoDB
- Processes route safety analysis
- Serves location and incident data

## Project Structure
client/ – React frontend  
server/ – Node.js backend  

## How to Run the Project

### 1. Clone the repository
git clone https://github.com/khushimaity/SafeHer-safety-navigation-system.git

### 2. Install backend dependencies
cd server  
npm install  

### 3. Start backend server
npm start  

### 4. Install frontend dependencies
cd ../client  
npm install  

### 5. Run frontend
npm start  

Frontend runs on: http://localhost:3000  
Backend runs on: http://localhost:5000  

## Future Improvements
- Real-time crime data integration
- AI-based safety prediction
- Mobile application version
- Emergency contact integration
- Live user safety alerts

## Author
Khushi 

B.Tech Computer Science Engineering  
TKM College of Engineering
