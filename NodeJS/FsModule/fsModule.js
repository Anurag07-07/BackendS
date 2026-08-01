// For MJS
import { readFile, writeFile } from "fs/promises";
import { Server } from "http";

console.log(import.meta.url);
console.log(process.cwd());

// Current file ke relative index.html ka path
const pathToFile = new URL("./index.html", import.meta.url);
console.log(pathToFile);

// File ko string ke roop me read karo
let template = await readFile(pathToFile, "utf-8");

console.log(template);

const obj = {
  name: "AJ",
  message: "This is Aj Here",
};

// Template ke placeholders replace karo
for (const [key, value] of Object.entries(obj)) {
  template = template.replace(`{{${key}}}`, value);
}

// Output file me likh do
await writeFile(
  new URL("./output.html", import.meta.url),
  template
);

console.log("output.html created successfully!");

// CJS
// console.log(__dirname+"index.html");


// Static IP to Server
// Dynamic IPs to Client 

