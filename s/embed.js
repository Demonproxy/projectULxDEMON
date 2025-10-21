let destination = "";

try {
    destination = new URL(location.hash.slice(1));

    if (!destination.protocol) {
        destination = new URL("https://" + destination.href);
    }
} catch (err) {
    console.error("Bad # string or bad URL:", err);
    throw err; // Optional: remove if you don't want to stop execution
}

registerSW()
    .then(() => {
        window.open(
            __uv$config.prefix + __uv$config.encodeUrl(destination.toString()),
            "_self",
        );
    })
    .catch((err) => {
        console.error("Encountered error:", err);
    });
