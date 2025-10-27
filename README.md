# Google Login Test App

A simple Node.js application for testing Google Identity Services.

## Setup Instructions

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Get Google Client ID

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** > **Credentials**
3. Click **Create Credentials** > **OAuth client ID**
4. Select **Web application** as the application type
5. Add authorized JavaScript origins:
   - `http://localhost:3000`
6. Add authorized redirect URIs:
   - `http://localhost:3000`
7. Copy your **Client ID**

### 3. Configure Environment

Create a \`.env\` file in the root directory:

\`\`\`bash
cp .env.example .env
\`\`\`

Then edit \`.env\` and add your Google Client ID:
\`\`\`
GOOGLE_CLIENT_ID=your-client-id-here.apps.googleusercontent.com
PORT=3000
\`\`\`

**Important**: Replace \`your-client-id-here.apps.googleusercontent.com\` with the actual Client ID you copied from Google Cloud Console.

### 4. Run the Application

\`\`\`bash
npm start
\`\`\`

Or run in development mode with auto-reload:

\`\`\`bash
npm run dev
\`\`\`

Visit \`http://localhost:3000\` in your browser.

## How It Works

- Click the "Sign in with Google" button
- Authenticate with your Google account
- See a personalized "Hello [Your Name]!" message
- View your user information

## Tech Stack

- **Node.js** - Server runtime
- **Express** - Web server
- **Google Identity Services** - Authentication
- **dotenv** - Environment variable management

