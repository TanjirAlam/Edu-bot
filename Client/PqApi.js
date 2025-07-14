// frontend/script.js
async function submitTopic() {
    const input = document.getElementById("practiceSearchInput").value.trim();
    const practiceBox = document.getElementById("practice-box");

    if (!input) {
        practiceBox.innerHTML = "<p>Please enter a topic!</p>";
        return;
    }

    practiceBox.innerHTML = "<p>Wait a moment...</p>";

    try {
        const response = await fetch("http://localhost:8000/ask-topic", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: input }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch question.');
        }

        // const data = await response.json();
        // console.log("Answer: ",data)
        // // const reply = data?.answer;
        // const reply = data?.answer?.replace(/\*/g, '\n');
        
        // practiceBox.innerHTML = `<p>${reply}</p>`;
        const data = await response.json();
        console.log("Answer: ", data);
        
        let reply = data?.answer;
        
        // If it's an array, join into one string
        if (Array.isArray(reply)) {
            reply = reply.join('').replace(/\*/g, '\n');
        } else if (typeof reply !== "string") {
            reply = String(reply);
        } else {
            reply = reply.replace(/\*/g, '\n');
        }
        
        // Display the formatted string
        practiceBox.innerHTML = `<pre>${reply.trim()}</pre>`;
        


    } catch (error) {
        console.error("Error:", error);
        practiceBox.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

document.getElementById('generateButton').addEventListener('click', submitTopic);




