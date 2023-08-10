// src/ld/index.js
import { asyncWithLDProvider } from '@launchdarkly/react-client-sdk';
import  App  from '../App'; // Update the path to your main app component

// LaunchDarkly client-side configuration
const ldClientSideID = 'YOUR_LAUNCHDARKLY_CLIENT_SIDE_ID';

// Function to fetch user data from the server
const fetchUserFlags = async () => {
  const response = await fetch('/api/user-flags'); // You need to create an API route to fetch user data
  const userFlags = await response.json();
  return userFlags;
};

// Wrap your app with LaunchDarklyProvider using asyncWithLDProvider
const WrappedApp = asyncWithLDProvider({
  clientSideID: ldClientSideID,
  user: fetchUserFlags,
  options: { /* Additional options if needed */ },
})(App);

export default WrappedApp; // Export the result of asyncWithLDProvider
