# Malarky! [Chatroom]

**Created by:** Henrie Filart, Justin Yapjoco, and Jordy Ruiz

**Overview:** Our chat application is designed to allow individuals to exchange messages instantly, providing seamless and 
real-time communication between user 
<br><br>
**Main Problem Addressed:** There doesn't exist a dedicated chatroom application for UWB students to communicate between
one another. To solve this, we provide a secure and private connection where people may DM with other students they may
not know.
<br><br>
**Link to Webpage:** https://css-481-final.onrender.com

## How To Run Webpage locally:
To run the webpage, complete the following steps:
1. Download the Github repository and open it with any IDE that allows for multiple terminals to run.
2. Ensure you're in root directory `\css-481-final-main>` containing Backend & Frontend
3. Run `npm run build`
4. In Backend folder, add a `.env` file and copy-paste parameters at bottom of README
5. For the first terminal, ensure you are in directory `..\css-481-final\backend>`.
6. Run `npm run dev` to start the backend.
7. For the second terminal, ensure you are in directory `\css-481-final\frontend>`.
8. Run `npm run dev` to start the frontend.
9. Open Localhost link.

## Frontend & Backend

To create Malarky with respect to the frontend, we used the following set:
### Packages:
- BCrypt
- Node.js
- Express
- Nodemon
- Mongoose
- and more
### Libraries:
- React
- DaisyUI
- Tailwind CSS
- Lucide React

## .ENV:
MONGODB_URI=mongodb+srv://jr03:9rz7TGIDhj9tnJKH@cluster0.sj0kw.mongodb.net/chatroom_db?retryWrites=true&w=majority&appName=Cluster0
PORT=5001

JWT_SECRET=secret
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=dyclukduj
CLOUDINARY_API_KEY=792857947262656
CLOUDINARY_API_SECRET=DGnGyAhJ0S1xbGSGm087qZeefiw

# 9rz7TGIDhj9tnJKH
