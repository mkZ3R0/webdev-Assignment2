


Part A: `Invoke-WebRequest -Uri http://localhost:3000/hello/amjad -Method GET`
For linux
`curl http://localhost:3000/hello/amjad`

Part B,C,D:
for windows
$body = @{
    name = "Amjad"
    title = "Software Engineer"
    targeted_keywords = @("JavaScript", "Node.js")
    education = "BSc in Computer Science"
    certification = "AWS Certified Developer"
    contact = "amjad@example.com"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/profile" -Method Post -ContentType "application/json" -Body $body

for linux

curl -X POST http://localhost:3000/profile \
     -H "Content-Type: application/json" \
     -d '{
           "name": "John Doe",
           "title": "Software Engineer",
           "targeted_keywords": ["JavaScript", "Node.js", "Express"],
           "education": "B.Sc. in Computer Science",
           "certification": "Certified JavaScript Developer",
           "contact": "john.doe@example.com"
         }'

Part E:
curl http://localhost:3000/profiles

