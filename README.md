# Everglade National Park Wading Bird Sighting App

## Author
**Alison Case**

## Description
This interactive web application allows users to submit and view wading bird sightings in Everglades National Park. The app features a dynamic map where users can explore points of interest, filter sightings by species and date, and contribute their own observations. The project leverages modern web technologies to provide an engaging and user-friendly experience for bird enthusiasts and researchers.

This project was created as part of my coursework at the University of Wisconsin-Madison for GEOG 777 and does not represent the views of my employer.

## Features
- Submit bird sightings with species, date, time, and location.
- Interactive map with zoom, pan, and locate functionality.
- Filter sightings by species and date range.
- Toggle visibility of points of interest (POIs) and sightings layers.
- Pre-populated date and time fields for convenience.
- Responsive design for desktop and mobile devices.

## Dependencies
- [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) (v4.25.0)
- [React](https://reactjs.org/) (v18.0.0)
- [React Router DOM](https://reactrouter.com/) (v6.30.0)
- [Supabase](https://supabase.com/) (v2.0.0)
- [CRACO](https://github.com/dilanx/craco) (v7.1.0)

## Code Version
**Last Updated:** April 11, 2025

## Installation and Deployment
### Prerequisites
- Node.js and npm installed on your machine.
- A Supabase project set up with a `sightings` table.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/alisoncase/ever_wading_birds.git
   cd ever_wading_birds