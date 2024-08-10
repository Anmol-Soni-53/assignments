const fs = require("fs").promises;

async function getContent() {
    try {
        return await fs.readFile("test.txt", "utf-8");
    } catch (err) {
        console.error("Error reading file:", err);
        throw err;  
    }
}

async function modifyFile(data) {
    try {
        const new_data = data.split("  "); 
        console.log("Splitted data:", new_data);
        
        const result = new_data.join(" "); 
        console.log("Resulting data:", result);
        
        await fs.writeFile("test.txt", result);
        console.log("File has been written");
    } catch (err) {
        console.error("Error modifying file:", err);
    }
}

async function main() {
    try {
        const data = await getContent();
        await modifyFile(data);
    } catch (err) {
        console.error("An error occurred in the main function:", err);
    }
}
main();
