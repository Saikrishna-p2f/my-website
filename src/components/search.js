// import React, { useState, useEffect } from 'react';

// function search() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('https://my-database.com/data.json')
//       .then(response => response.json())
//       .then(json => setData(json));
//   }, []);

//   const handleSearch = event => {
//     setSearchTerm(event.target.value);
//   };

//   const searchResults = data.filter(item =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input type="text" onChange={handleSearch} />
//       <ul>
//         {searchResults.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }