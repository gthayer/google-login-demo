const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

console.log(process.env.GOOGLE_CLIENT_ID);

// Serve config.js with actual client ID
app.get('/config.js', (req, res) => {
	res.setHeader('Content-Type', 'text/javascript');
	res.send(`window.GOOGLE_CLIENT_ID = '${process.env.GOOGLE_CLIENT_ID}';`);
});

// Serve static files from public directory
app.use(express.static('public'));

// API endpoint to verify token (optional - for server-side verification)
app.post('/api/verify', express.json(), (req, res) => {
	const { token } = req.body;
	
	if (!token) {
		return res.status(400).json({ error: 'Token is required' });
	}
	
	// In a production app, you would verify the token with Google's servers
	// For this simple demo, we'll just return success
	res.json({ message: 'Token received', verified: true });
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
	console.log(`Make sure you've set GOOGLE_CLIENT_ID in your .env file`);
});

