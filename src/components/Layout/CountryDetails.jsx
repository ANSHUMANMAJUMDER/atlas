// import { useEffect, useState, useTransition } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { getCountryIndData } from "../../api/postApi";
// import { Loader } from "../UI/Loader";

// export const CountryDetails = () => {
//   const params = useParams();

//   const [isPending, startTransition] = useTransition();
//   const [country, setCountry] = useState();

//   useEffect(() => {
//     startTransition(async () => {
//       const res = await getCountryIndData(params.id);
//       console.log(res);
//       if (res.status === 200) {
//         setCountry(res.data[0]);
//       }

//       console.log(Object.keys(res.data[0].name.nativeName));
//     });
//   }, []);

//   if (isPending) return <Loader />;

//   console.log(params);
//   return (
//     <section className="card country-details-card container">
//       <div className="container-card bg-white-box">
//         {country && (
//           <div className="country-image grid grid-two-cols">
//             <img
//               src={country.flags.svg}
//               alt={country.flags.alt}
//               className="flag"
//             />
//             <div className="country-content">
//               <p className="card-title"> {country.name.official} </p>

//               <div className="infoContainer">
//                 <p>
//                   <span className="card-description"> Native Names:</span>
//                   {Object.keys(country.name.nativeName)
//                     .map((key) => country.name.nativeName[key].common)
//                     .join(", ")}
//                 </p>
//                 <p>
//                   <span className="card-description"> Population: </span>
//                   {country.population.toLocaleString()}
//                 </p>
//                 <p>
//                   <span className="card-description"> Region:</span>
//                   {country.region}
//                 </p>
//                 <p>
//                   <span className="card-description"> Sub Region:</span>
//                   {country.subregion}
//                 </p>
//                 <p>
//                   <span className="card-description"> Capital:</span>
//                   {country.capital}
//                 </p>

//                 <p>
//                   <span className="card-description">Top Level Domain:</span>
//                   {country.tld[0]}
//                 </p>
//                 <p>
//                   <span className="card-description"> Currencies: </span>
//                   {Object.keys(country.currencies)
//                     .map((curElem) => country.currencies[curElem].name)
//                     .join(", ")}
//                 </p>
//                 <p>
//                   <span className="card-description">Languages: </span>
//                   {Object.keys(country.languages)
//                     .map((key) => country.languages[key])
//                     .join(", ")}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="country-card-backBtn">
//           <NavLink to="/country" className="backBtn">
//             <button>Go Back</button>
//           </NavLink>
//         </div>
//       </div>
//     </section>
//   );
// };
import { useParams, NavLink } from "react-router-dom";
import { useTransition, useState, useEffect } from "react";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null); // Initialize country to null

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndData(params.id);
        if (res && res.status === 200 && res.data && res.data.length > 0) {
          console.log(res.data[0]);
          setCountry(res.data[0]);
          console.log(Object.keys(res.data[0]?.name?.nativeName || {})); // Safe access
        } else {
          console.error("Error fetching country data:", res);
          // Optionally set an error state to display an error message
          setCountry(null); // Reset country state on error
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
        // Optionally set an error state
        setCountry(null); // Reset country state on error
      }
    });
  }, [params.id, startTransition]); // Add params.id and startTransition as dependencies

  if (isPending || country === null) return <Loader />; // Show loader or handle null state

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title"> {country.name.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {Object.keys(country.name.nativeName || {}) // Safe access
                    .map((key) => country.name.nativeName[key]?.common) // Safe access
                    .filter(Boolean) // Remove any undefined common names
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {country.population?.toLocaleString()} {/* Safe access */}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {country.capital}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.tld?.[0]} {/* Safe access with optional chaining */}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(country.currencies || {}) // Safe access
                    .map((curElem) => country.currencies[curElem]?.name) // Safe access
                    .filter(Boolean)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(country.languages || {}) // Safe access
                    .map((key) => country.languages[key]) // Safe access
                    .filter(Boolean)
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};