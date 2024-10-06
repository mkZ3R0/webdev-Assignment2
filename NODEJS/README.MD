


Part A: `Invoke-WebRequest -Uri http://localhost:3000/hello/amjad -Method GET`

Part B:
$body = @{
    name = "Amjad"
    title = "Software Engineer"
    targeted_keywords = @("JavaScript", "Node.js")
    education = "BSc in Computer Science"
    certification = "AWS Certified Developer"
    contact = "amjad@example.com"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/profile" -Method Post -ContentType "application/json" -Body $body

