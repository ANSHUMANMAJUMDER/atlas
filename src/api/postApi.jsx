import axios from "axios";

const api =axios.create({
       baseURL:"https://restcountries.com/v3.1",
});

// HTTP GET METHOD 

export const getCountryData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
  };


//   HTTP GET METHOD TO GET SEPERATE INDIVISUAL COUNTRY NAME 

export const getCountryIndData = async (name) => {
       try {
         const response = await api.get(`/name/${name}?fullText=true&fields=name,population,region,capital,flags`);
         return response; // Return the actual data from the response
       } catch (error) {
         console.error("Error fetching country data:", error);
         throw error; // Re-throw the error for the calling function to handle
       }
     };
