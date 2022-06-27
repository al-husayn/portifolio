import React, { useEffect, useState } from 'react';
import { urlFor, client } from '../../client';

const Post = () => {
    const [post, setPost] = useState([]);
    const [author, setAuthor] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const postQuery = '*[_type == "post"]';
        const authorQuery = '*[_type == "author"]';
        const categoryQuery = '*[_type == "category"]';

        client.fetch(postQuery).then((data) => {
            setPost(data);
            // console.log("Blog Post Data =====>", data);

        })
        client.fetch(authorQuery).then((data) => {
            setPost(data);

        })
        client.fetch(categoryQuery).then((data) => {
            setPost(data);
            // console.log("Blog Post Category Data =====>", data);

        })

    }, [])
    console.log("Blog Post", post)
    // console.log("Blog Post Author Data =====>", author);
    // console.log("Blog Post Category Data =====>", category);





    return (
        <div>Blog Post</div>
    )
}

export default Post