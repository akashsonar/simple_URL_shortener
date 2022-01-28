import React, {useState} from 'react';
import "./input.scss";
import db from './firebase';
const tinyid = require('tiny-unique-id');

export default function Input() {
    const [input,
        setInput] = useState('');
    const [shorten,
        setShorten] = useState('');

    const handleDb = async() => {
        const slug = tinyid.unique();
        await db
            .collection('urls')
            .add({url: input, slug: slug});
        setShorten(`${window.location.origin}/${slug}`);
    };

    // useEffect(() => {     let query = db         .collection("urls")
    // .where("slug", "==", slug)     query.onSnapshot((data) => {         if
    // (data.empty) {             alert("URL not found!!");         }         let
    // finalData = data             .docs[0]             .data();
    // window.location.href = finalData.url;     }); }, [slug]);

    function handleChange(e) {
        setInput(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className='container'>
            <h1>URL Shortener</h1>

            <center>
                <div className='mt-4 main'>
                    <input type="text" value={shorten} placeholder="Shortened URL"/>
                    <input
                        type="url"
                        value={input}
                        onChange={handleChange}
                        className='form-control mt-3'
                        placeholder='Enter URL'/>
                    <button onClick={handleDb} className='btn btn-dark mt-3'>Shorten URL</button>
                </div>
            </center>
        </div>
    )
}                                                                                                                           