rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /directory/{phone} {
      allow read, create, update: if request.auth != null;

      match /reports/{uid} {
        allow read, create: if request.auth != null && request.auth.uid == uid;
      }
    }
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}