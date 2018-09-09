# Welcome to HostelSocial

Have you ever wanted to meet up with other travelers, but no one was around? Take the stress out of finding a buddy to explore with by using HostelSocial.

Click [here](https://hostel-social.firebaseapp.com) to check it out.

This app will let you see who else is in your room, and make plans with other people staying in your hostel. See who else is going to hostel-sponsored events like tours, pub crawls, dinners, or create your own event and invite others to tag along.

Log in using your phone number or using Facebook to easily share contact information with people you met during your stay (if both people agree)

This is a progressive web app (PWA), so once you've added it to your home screen on your phone, it will work with little to no wifi.

This app is built with React / Redux and deployed on Firebase.

To run: `npm run build && firebase deploy`

### User Stories

There are two groups of users: hostel staff and hostel guests.

The staff should be able to add guests to rooms, see all of the guests staying at the hostel on any given date, create hostel-sponsored events, and manage the list of events and activities.

Hostel guests should be able to see the first name and nationality of people who are staying in their rooms, and RSVP to events, and create their own events (ex. "I'm going to Bourbon Street tonight at 10pm, who wants to join? Let's meet at the bar downstairs to pregame.")

In addition, hostel guests who have attended the same events will have the option to send a friend request to other people they met, which will allow them to share contact information (Facebook, Instagram, WhatsApp, etc.)

Further releases of this app will include safety options targeted towards solo travelers. The traveler will have the option to opt-in to the safety feature, in which they can say "I'm going out!" and set a time around which they think they'll be back. If they have not manually clicked "I'm back!" or their location is not on hostel property, the app will send them a text message saying something along the lines of "Hey! We noticed you aren't back yet. Is everything ok?" The guest will then have the option to say "Yes, party on" and select a new time if they choose, or respond with "No, I need help", which will alert the hostel staff and allow them to direct the guest to the appropriate resources (taxi, hospital, police, etc.)

### Tutorials and resources used:

[Build your first Progressive Web App with React](https://engineering.musefind.com/build-your-first-progressive-web-app-with-react-8e1449c575cd)

[Test-Driven Development with React, Jest, and Enzyme](https://testdriven.io/tdd-with-react-jest-and-enzyme-part-one)

[A Complete Firebase in React Authentication Tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)
*This also contains a good tutorial on how to modify the authentication to use redux, which will be helpful if I decide this application needs to use redux down the road*
