## File Uploader and Downloader Using Node.js Streams

This is a simple Node.js application that allows users to upload files to a server and download them using streams. The project demonstrates how to handle large file uploads and downloads efficiently by processing the data in chunks.#

## Table of Contents

Installation
Usage
Features
API Endpoints
Technologies Used
Contributing

## Installation

1. Clone the repository: `git clone https://github.com/Ajmat-Ali/file-uploader-downloader.git`.
2. Navigate into the project directory: `cd file-uploader-downloader`.
3. Install the dependencies: `npm install`.
4. Start the server: `node index.js`
   _The server will be running at http://localhost:3001._

## Usage

1. Open your browser and navigate to _http://localhost:3000._
2. Choose a file from your local machine and upload it via the provided form.
3. Once uploaded, you can download the file by visiting: _http://localhost:3000/download/your_filename_ `*Replace your_filename with the name of the uploaded file.`

## Features

1. Efficient file upload and download using streams.
2. Handles large files by processing them in chunks, which reduces memory usage.
3. Customizable file storage and download paths.

## API Endpoints

_GET /:_ Serve the file upload form.
_POST /submit-form:_ Upload a file to the server.
_GET /download/:_ filename:filename: Download a file from the server by filename.

## Technologies Used

_Node.js:_ JavaScript runtime for building the backend.
_Express.js:_ Web framework for handling HTTP requests.
_Multer:_ Middleware for handling file uploads.
_File System (fs) module:_ To handle file reading and writing using streams.

## Contributing

**Contributions are welcome! If you find any bugs or want to improve this project, feel free to open an issue or submit a pull request.**
