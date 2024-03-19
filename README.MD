# URL Shortening CLI Tool

## Description
This CLI tool shortens URLs using a MongoDB database for storage. It uses Express.js for the API, Zod for URL schema validation, and Python's argparse module for the CLI interface. Sensitive information is stored in environment variables and a config file.

## Installation
1. Clone the repository: `git clone https://github.com/frumptiousclone/url-shortener-cli-tool.git`
2. Install dependencies: `npm install`

## Configuration
1. Rename `.env.example` to `.env` and fill in the required environment variables.
2. Edit `config.js` to customize settings like port and database URL.

## Usage
1. Shorten a URL:
   ```
   python cli.py <url-to-shorten>
   ```
   
2. Start the Express server:
   ```
   npm start
   ```

## API Endpoints
- `POST /url-shortner`: Shorten a URL
- `GET /:key`: Redirect to the original URL

## License
This project is licensed under the ISC License.
```