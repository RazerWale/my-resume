import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";

export interface FileNode {
  fileName: string;
  type: "file";
  content: React.ReactNode;
}

export interface FolderNode {
  folderName: string;
  type: "folder";
  content?: React.ReactNode;
  children: Array<FileNode | FolderNode>;
}

export type Node = FileNode | FolderNode;

export const defaultPage: FileNode = {
  fileName: "Hello its me Anton!",
  type: "file",
  content: "This page is about me and only me!",
};

export const folders: FolderNode[] = [
  {
    folderName: "src",
    type: "folder",
    children: [
      {
        fileName: "About",
        type: "file",
        content: <About />,
      },
      {
        fileName: "Education",
        type: "file",
        content: <Education />,
      },
      {
        fileName: "Projects",
        type: "file",
        content: `PantryHub
- GitHub
(HTML, CSS, JavaScript, PHP, MySQL, SQL)
Bootcamp final team project; made recipe searches quick and easy with interactive features.
Designed the user interface using Figma, utilized Trello for project task management.
Designed the database structure with dbdiagram.io.
Employed GitHub for version control and collaboration.
The primary goal of the app was to provide users with a quick and convenient way to discover
recipes based on the ingredients and appliances they have at home.
Implemented a search engine with access to over 1000 recipes.
Included features such as "like" and rating system for users to interact with recipes and
provide feedback.
On the server side, we employed an MVC (Model-View-Controller) framework for efficient and
organized application development.
Messenger
- GitHub
(HTML, CSS, JavaScript, PHP, MySQL, SQL)
A chat app that enables real-time messaging and interaction with people online.
Implemented a robust login and registration system.
Established a real-time chat feature where the app periodically sends requests to the server.
Utilized JavaScript to dynamically update the chat interface when new messages are detected
in the database.
Wordle (Clone) - GitHub
(HTML, CSS, JavaScript)
A web-based Wordle game with features like a grid for guessing words, keyboard input, real-time
feedback, win/lose notifications, and game restart.`,
      },
      {
        fileName: "Work Experience",
        type: "file",
        content: `Customs broker
LLC “VladSnabTechnika”
Prepared and submitted import/export clearance documentation to relevant authorities.
Import/export shipment specialist
LLC “ATLAS”
Organized and oversaw shipments, processed documentation and permits, conducted
quality inspections.
Managed transaction records for domestic and international product shipments.
Import/export documentation specialist
Hyundai Merchant Marine Vladivostok
Prepared documentation for incoming and outgoing cargo on ships, ensuring smooth
operations and compliance with regulations.`,
      },
    ],
  },
];

export const test = [
  {
    fileName: "About",
    type: "file",
    content: About,
  },
  {
    fileName: "Skills",
    type: "file",
    content: Skills,
  },
];

export const test1 = {
  folderName: "src",
  children: {
    fileName: "Roger",
  },
};

// const fileSystem = {
//   folderName: "src",
//   children: {
//     utils: {
//       folderName: "utils",
//       children: {
//         helper: { fileName: "helper.js" },
//       },
//     },
//   },
// };

// const findPath = (file, target, currentPath) => {
//   // **Check if current object is the target**
//   if ((file.folderName || file.fileName) === target) {
//     // If match: build full path
//     const path = [...currentPath, file.folderName || file.fileName];
//     // return it
//     return path;
//   }
//   // **If not found, check if object has children**
//   if (!file.children) return null;

//   //**If has children, loop through them**
//   for (const [key, value] of Object.entries(file.children)) {
//     // Create new path (add current folder name to currentPath)
//     const newPath = [...currentPath, file.folderName || file.fileName];
//     const recursive = findPath(value, target, newPath);
//     if (recursive) return recursive;
//   }

//   return null;
// };

// // Should return: 'src/utils/helper.js'
// console.log("fuck yo - ", findPath(fileSystem, "utils", []));

// const findPath = (object, target, currentPath) => {
//   const name = object.folderName || object.fileName;

//   if (name === target) {
//     const path = [...currentPath, name];
//     return path;
//   }

//   if (!object.children) return null;

//   const newPath = [...currentPath, name];

//   for (const value of Object.values(object.children)) {
//     const recursivePath = findPath(value, target, newPath);
//     if (recursivePath) return recursivePath;
//   }

//   return null;
// };

// const findFilePath = (object, target, currentPath) => {
//   const name = object.folderName || object.fileName;

//   if (name === target) return [...currentPath, name];

//   if (!object.children) return null;

//   const newPath = [...currentPath, name]

//   for(const value of Object.values(object.children)){
//     const recursivFunction = findFilePath(value,target,newPath)

//     if(recursivFunction) return recursivFunction
//   }

//   return null
// };

// const findPath = ((obj, target, currentPath = []) => {
//       const name = obj.folderName || obj.fileName
//       const newPath = [...currentPath, name]

//       if(name === target) return newPath

//       if(!obj.children) return null

//       for(const value of Object.values(obj.children)){

//         const recursion = findPath(value, target, newPath)

//         if(recursion) return recursion
//       }

//       return null
//     })
