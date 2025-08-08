function fetchDataWithCallback(callback) {
    setTimeout(() => {
        try {
            let error = true; // Simulate an error condition

            if (error) {
                throw new Error("Fetch failed");
            }

            // If no error, call the callback with data
            callback("Data fetched");
        } catch (err) {
            console.error("Error: " + err.message);
        }
    }, 2000); // 2 seconds delay
}

// Example usage:
fetchDataWithCallback((data) => {
    console.log(data);
});
