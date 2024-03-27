let config;

await fetch("config.json")
    .then((response) => response.json())
    .then((data) => {
        config = data;
    })
    .catch((error) => {
        console.error("Error fetching config:", error);
    });

export default config;