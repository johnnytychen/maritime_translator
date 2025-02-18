import React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/card.js";

const API_URL = "https://script.google.com/macros/s/AKfycbyS6WZdHmwvWGZ-yI7GlXI3XSwNex1RzcZudVpk9hRNkGJYt_EIN7jfRoSnEaXkSfOC/exec";

export default function MaritimeTranslator() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setEntries(data);
            })
            .catch(error => console.error("Fetch error:", error));
    }, []);

    return (
        <div className="p-4 w-full max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Maritime Translator</h1>

            <Card>
                <CardContent>
                    <table className="w-full border-collapse border border-gray-300 text-left">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2 text-left">English Term</th>
                                <th className="border border-gray-300 p-2 text-left">Chinese Translation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entries.slice(1).map((row, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 p-2 text-left">{row[0]}</td>
                                    <td className="border border-gray-300 p-2 text-left">{row[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    );
}
