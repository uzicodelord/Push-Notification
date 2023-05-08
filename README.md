# Firebase Cloud Messaging with Laravel

This is a basic tutorial on how to set up Firebase Cloud Messaging in Laravel, allowing you to send push notifications to your users.

# Prerequisites

A Firebase account

A Laravel application

# Getting Started

Create a Firebase account and project.

Click the "Add app" button under the project settings page.

Choose "Web" as the platform, and give your app a name.

Register your app to generate your Firebase CDN.

Go to Project Settings > Cloud Messaging and enable it by clicking the 3 dots in the right manage of the Cloud Messaging API (Legacy).

Click the "Manage API" button in the Cloud Console and enable it. Close it and go back to the Firebase Console.

Copy the server key.

In your Laravel app, go to app\Http\Controllers\NotificationController and put the server API key in the $serverKey variable.

Go to the "General" tab in your Firebase project settings and scroll down to your apps. Get the CDN script and replace it with your own.

Go to your Laravel app's /public/firebase-messaging-sw.js file and add the CDN script there as well.

Register an account and press "Allow notification" to test it out.

# Conclusion

And that's it! You've successfully set up Firebase Cloud Messaging with Laravel. Happy coding!
