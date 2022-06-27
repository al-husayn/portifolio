// import React, { useEffect, useState } from 'react';
// import { urlFor, client } from '../../client';

// const Author = () => {
//     const [author, setAuthor] = useState([]);


//     useEffect(() => {
//         const query = '*[_type == "author"]';

//         client.fetch(query).then((data) => {
//             setAuthor(data);
//             // console.log("Blog Author Data =====>", data);

//         })

//     }, [])
//     // console.log("author", author)


//     return (
//         <div>Author</div>
//     )
// }

// export default Author