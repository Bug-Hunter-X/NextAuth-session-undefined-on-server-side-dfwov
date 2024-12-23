# NextAuth Session Undefined on Server-Side

This repository demonstrates a common issue when working with NextAuth.js and server-side sessions. The problem is that even after a successful login, the session object returned by `unstable_getServerSession` is sometimes undefined on the server-side.

## Problem

The provided code uses `unstable_getServerSession` to retrieve the user's session. However, when navigating to this page after a login, the `session` variable remains undefined, leading to unexpected behavior and potential errors.

## Solution

The solution involves correctly configuring the NextAuth options and ensuring the session is handled appropriately within the page component. This may involve ensuring the correct callbacks are used and that the session is properly persisted.

## How to reproduce

1. Clone this repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Log in using a supported provider.  Note: You'll need to configure NextAuth providers.
5. Observe the server-side console log which shows `session` as undefined.