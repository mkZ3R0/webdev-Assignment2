import express from "express";
import fs from "fs";
import path from "path";  // Import path at the top level
import { fileURLToPath } from "url"; 

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);  

// Part A Will use get method to retrieve it
app.get('/hello/amjad', (req, res) => {
  res.send('Hello, Amjad');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Part b + c
app.use(express.json());

app.post('/profile', (req, res) => {
  const { name, title, targeted_keywords, education, certification, contact } = req.body;

  // Validation for missing fields
  if (!name || !title || !targeted_keywords || !education || !certification || !contact) {
    return res.status(400).json({ error: 'All fields are required: Name, Title, Targeted Keywords, Education, Certification, Contact' });
  }

  const filePath = path.join(__dirname, 'profiles.json');

  // Read the existing file content
  // Read the existing file content
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).json({ error: 'Unable to read file' });
    }

    let profiles = data ? JSON.parse(data) : [];
    profiles.push(req.body);

    // Append the new profile
    fs.writeFile(filePath, JSON.stringify(profiles, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Unable to save profile' });
      res.status(200).json({ message: 'Profile saved successfully' });
    });
  });
});