import React, { useState, useEffect } from "react";

const API_URL = "https://script.google.com/macros/s/AKfycbyS6WZdHmwvWGZ-yI7GlXI3XSwNex1RzcZudVpk9hRNkGJYt_EIN7jfRoSnEaXkSfOC/exec"; // Replace with your actual API URL

export default function MaritimeTranslator() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        console.log("📡 Fetching data from:", API_URL);

        fetch(API_URL)
            .then(response => {
                console.log("✅ Response status:", response.status);
                return response.json();
            })
            .then(data => {
                console.log("📜 Data received:", data);
                if (Array.isArray(data)) {
                    setEntries(data);
                } else {
                    console.error("❌ Unexpected API response:", data);
                }
            })
            .catch(error => console.error("❌ Fetch error:", error));
    }, []);

    return (
        <div>
            <h1>Maritime Translator</h1>
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>{entry[0]} - {entry[1]}</li>
                ))}
            </ul>
        </div>
    );
}
