// frontend/script.js
async function submitDoubt() {
    const input = document.getElementById("doubtInput").value.trim();
    const solutionBox = document.getElementById("solutionBox");

    if (!input) {
        solutionBox.innerHTML = "<p>Please enter a doubt!</p>";
        return;
    }

    solutionBox.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch("http://localhost:8000/ask-doubt", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: input }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch solution.');
        }

        // const data = await response.json();
        // console.log("Answer: ",data)
        // const reply = data?.answer;
        // solutionBox.innerHTML = `<p>${reply}</p>`;
        const data = await response.json();
        console.log("Answer: ", data);

        let reply = data?.answer;

        // If it's an array, join into one string
        if (Array.isArray(reply)) {
             reply = reply.join('').replace(/\*/g, '\n');
            }       
        else if (typeof reply !== "string") {
            reply = String(reply);
        } 
        else {
            reply = reply.replace(/\*/g, '\n');
        }

        // Display the formatted string
        solutionBox.innerHTML = `<pre>${reply.trim()}</pre>`;


    } catch (error) {
        console.error("Error:", error);
        solutionBox.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

document.getElementById('generateButton').addEventListener('click', submitDoubt);




// async function submitDoubt() {
//     const input = document.getElementById("doubtInput").value.trim();
//     const solutionBox = document.getElementById("solutionBox");
  
//     if (!input) {
//       solutionBox.innerHTML = "<p>Please enter a doubt!</p>";
//       return;
//     }
  
//     solutionBox.innerHTML = "<p>Loading...</p>";
  
//     try {
//       const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YAIzaSyDIrLNvDcCSCwWtJvfGUrdu0Biv2WyCHVI", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [{ text: input }]
//             }
//           ]
//         })
//       });
  
//       const data = await res.json();
//       console.log("API Response:", data);
  
//       if (
//         data &&
//         data.candidates &&
//         data.candidates.length > 0 &&
//         data.candidates[0].content &&
//         data.candidates[0].content.parts &&
//         data.candidates[0].content.parts.length > 0
//       ) {
//         const reply = data.candidates[0].content.parts[0].text;
//         solutionBox.innerHTML = `<p>${reply}</p>`;
//       } else {
//         solutionBox.innerHTML = "<p>No response from AI.</p>";
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//       solutionBox.innerHTML = "<p>Error fetching solution. Try again.</p>";
//     }
//   }
  
// const { GoogleGenerativeAI } = require('@google-ai/generativelanguage');
// require('dotenv').config();
// async function submitDoubt() {
//     const input = document.getElementById("doubtInput").value.trim();
//     const solutionBox = document.getElementById("solutionBox");
  
//     if (!input) {
//       solutionBox.innerHTML = "<p>Please enter a doubt!</p>";
//       return;
//     }
  
//     solutionBox.innerHTML = "<p>Loading...</p>";
  
//     try {
//       const res = await fetch(
//        "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyDIrLNvDcCSCwWtJvfGUrdu0Biv2WyCHVI", // REPLACE WITH YOUR KEY!
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [{ text: input }],
//               },
//             ],
//           }),
//         }
//       );
  
//       if (!res.ok) {
//         const errorData = await res.json();
//         console.error("API Error:", errorData);
//         solutionBox.innerHTML = `<p>API Error: ${errorData?.error?.message || 'Failed to get response.'}</p>`;
//         return; // Stop further processing
//       }
  
//       const data = await res.json();
//       console.log("Full API response:", data); // Debugging log
  
//       const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  
//       if (reply) {
//         solutionBox.innerHTML = `<p>${reply}</p>`;
//       } else {
//         solutionBox.innerHTML = "<p>No response from AI.</p>";
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//       solutionBox.innerHTML = "<p>Error fetching solution. Try again.</p>";
//     }
//     console.log(reply);
    
//   }