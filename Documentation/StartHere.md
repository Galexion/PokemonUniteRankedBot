# Setting up PokeRanked for private use

## Section 1: Requirements

If you haven't already, please read the licence. if you won't:
TLDR;

- Credit the repository.
- Don't make the bot paid in any way.

### Section 1.1: required packages

This bot uses 3 Main libarys, Eris & Firebase-admin.

To install these, use

> npm i eris pluris firebase-admin

### Section 1.2: config.json & firebase.json

### firebase.json

First, you'll need a firebase account, where you can make a project.

Go to https://firebase.google.com, and set up a project with Firestore enabled.

then, go to project settings > service accounts, and download the JSON file provided.

Put that in the folder, and rename it to "firebase.json".

### config.json

Set config.json like this.

> { "token":"yourtokenhere","prefix":"u."}


## And that's it!

if you set everything up correctly, users should be able to use the profile command to set up a profile and have it post in firebase.
