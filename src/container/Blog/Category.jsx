// import React, { useEffect, useState } from 'react';
// import { urlFor, client } from '../../client';

// const Category = () => {
//     const [category, setCategory] = useState([]);
//     useEffect(() => {
//         const query = '*[_type == "category"]';

//         client.fetch(query).then((data) => {
//             setCategory(data);
//             // console.log("Blog Category Data =====>", data);


//         })

//     }, [])
//     // console.log("Category", category)


//     return (
//         <div>Category</div>
//     )
// }

// export default Category;