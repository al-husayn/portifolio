import React, { useEffect, useState } from 'react';
import { urlFor, client } from '../../client';

const Post = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const query = '*[_type == "post"]';

        client.fetch(query).then((data) => {
            setPost(data);
            // console.log("Blog Post Data =====>", data);

        })

    }, [])
    console.log("Blog Post", post)


    return (
        <div>Blog Post</div>
    )
}

export default Post