// frontend/script.js
async function submitTest() {
    const input = document.getElementById("testInput").value.trim();
    const testBox = document.getElementById("question-box animate");

    if (!input) {
        testBox.innerHTML = "<p> Enter a topic!</p>";
        return;
    }

    testBox.innerHTML = "<p>Wait a moment...</p>";

    try {
        const response = await fetch("http://localhost:8000/ask-test", {
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

        const data = await response.json();
        console.log("Answer: ",data)
        const reply = data?.answer;
        practiceBox.innerHTML = `<p>${reply}</p>`;

    } catch (error) {
        console.error("Error:", error);
        testBox.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

document.getElementById('generateButton').addEventListener('click', submitTest);




