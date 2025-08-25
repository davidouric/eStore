import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Music() {
    const [music, setMusic] = useState([])


    const getMusic = async () => {
        try {
            const url = "https://api.restful-api.dev/objects"
            const response = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:5173"
                }
            });

            setMusic(response.data)

        } catch (error) {
            console.log("could not fetch music brainz")


        }

    }
    useEffect(() => {
        getMusic();
    }, [])
    console.log(music)

    return (
        <div>
            <h1>Electronics List</h1>
            <div className='grid grid-cols-12 gap-4 rounded-4xl text-gray-500 bg-gray-600'>
                {music.map((item) => (
                    <div key={item.id} className='col-span-4 bg-blue-200 gap-2 rounded-2xl flex items-center p-4'>
                        <div>{item.name}</div>
                        <div>
                            {item.data ? (
                                <div>
                                    {Object.entries(item.data).map(([key, value]) => (
                                        <div key={key}>
                                            {key}: {value}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>No extra data</div>
                            )}

                        </div>

                    </div>

                ))}
            </div>
        </div>
    )
}

export default Music
