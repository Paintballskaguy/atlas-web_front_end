# jQuery AJAX CRUD Application

## Description  
A web application demonstrating CRUD operations using jQuery AJAX with a JSON Server backend.

## Features  
- Display all posts  
- Add new posts via form  
- Delete posts with confirmation  
- Real-time updates  
- Error handling  

## Technologies  
- jQuery  
- JSON Server  
- HTML5  
- CSS3  

## Setup  
1. Install dependencies:  
   `npm install -g json-server`  
2. Start server:  
   `json-server --watch db.json`  
3. Open `index.html`  

## API Endpoints  
- `GET /posts`  
- `POST /posts`  
- `DELETE /posts/:id`  

## Requirements  
- Modern browser  
- Node.js  
- Internet connection  

## File Structure  
- `index.html`  
- `db.json`  

## Usage  
1. Posts load automatically  
2. Submit form to create posts  
3. Click delete to remove posts  

## Notes  
- Changes persist in `db.json`  
- For development purposes only  