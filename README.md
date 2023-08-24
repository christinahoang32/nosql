# [Social Network API]

## Table of Contents

- [Installation](#installation)
- [Description](#description)
- [Usage](#usage)
- [Credits](#credits)

## Installation

To install this project: 
1. Start by forking this repository on Github. 
2. Clone this project
3. Open project in text editor
4. Install Node.js
5. Install MongoDB
6. Install [Nodemon]
7. Install [Insomnia]


## Description
 The goal of this project is to build an API for a social network that allows users to share their thoughts, react to a friend's thoughts, and create a friend list.

## Usage
1. Run command "npm run start" 
2. Open insomnia and type in "localhost:3001/api/_" in the address bar.

Users <br>
- `/api/users` to get all users or create user
- `/api/users/:userId` to get one user, update and delete user
- `/api/users/:userId/friends/:friendId` to add or delete a friend <br><br>
Thought + Reactions <br>
- `/api/thoughts` to get all thoughts or create thought
- `/api/thoughts/:thoughtId` to get one thought, update or delete. 
- `/api/thoughts/:thoughtId/reactions` to create reaction 
- `/api/thoughts/:thoughtId/reactions/:reactionId` to delete reaction 

[![Screenshot-2023-08-24-at-4-05-24-PM.png](https://i.postimg.cc/Ssfh76Fk/Screenshot-2023-08-24-at-4-05-24-PM.png)](https://postimg.cc/Kkjwmg8H)

https://drive.google.com/file/d/1BhSYwd8g5pmIK0HKKeZTSw4yBYmvjqRu/view


## Credits
TA's in class + study session + chatGPT


