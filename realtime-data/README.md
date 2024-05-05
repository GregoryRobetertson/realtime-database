This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## RealTimeForm Component

### State Management
The component uses React's `useState` hook to manage two state variables, `name` and `message`, which represent the input fields for the user's name and message.

### Adding Data
The `addData` function is responsible for adding data to Firestore. It uses Firebase's `addDoc` function to add a new document to the 'message' collection in Firestore, containing the name and message provided by the user.

### Form Submission
The `handleSubmit` function is called when the form is submitted. It prevents the default form submission behavior, calls the `addData` function to add the user's input to Firestore, and then resets the input fields.

## RealTimeDisplay Component

### State Management
This component also uses React's `useState` hook to manage a state variable `messages`, which holds an array of message objects fetched from Firestore.

### Fetching Data
The `useEffect` hook is used to fetch data from Firestore when the component mounts. It calls the `onSnapshot` function, which listens for real-time updates to the 'message' collection in Firestore. Whenever there is a change in the collection, the snapshot callback function is triggered, updating the state variable `messages` with the latest data.

### Rendering Messages
The component renders the messages by mapping over the `messages` array and rendering each message as a list item (`<li>`), displaying the name and message content.

In summary, the RealTimeForm component handles user input and adds it to Firestore, while the RealTimeDisplay component listens for changes in the Firestore collection and displays the real-time updates to the user.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
