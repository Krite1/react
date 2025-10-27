
import { Post, Topic } from '../types';

// This data is hardcoded to simulate the output of parsing a CSV file.
export const posts: Post[] = [
  {
    id: 'mastering-react-hooks',
    title: 'Mastering React Hooks for Cleaner Code',
    author: 'Jane Doe',
    publicationDate: '2023-10-26',
    category: 'React',
    summary: 'Dive deep into React Hooks and learn how to write more readable, reusable, and maintainable functional components.',
    content: `
      <p class="mb-4">React Hooks, introduced in React 16.8, revolutionized how we write components. They allow you to use state and other React features without writing a class. In this post, we'll explore the most common Hooks and best practices for using them.</p>
      <h2 class="text-2xl font-bold my-4">The Power of useState</h2>
      <p class="mb-4">The <code>useState</code> Hook is the most fundamental Hook. It lets you add React state to function components. It's a simple yet powerful tool for managing local component state.</p>
      <img src="https://picsum.photos/800/400?random=1" alt="Code example" class="rounded-lg my-6 w-full object-cover">
      <h2 class="text-2xl font-bold my-4">Understanding useEffect</h2>
      <p class="mb-4">The Effect Hook, <code>useEffect</code>, lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM are all examples of side effects. It's the equivalent of <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> combined.</p>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 italic">"With great power comes great responsibility. Use useEffect wisely to avoid performance issues and infinite loops."</blockquote>
      <p>By mastering these Hooks, your React code will not only be more modern but also significantly cleaner and easier to debug.</p>
    `,
    imageUrl: 'https://picsum.photos/600/400?random=1',
    tags: ['React', 'Hooks', 'JavaScript', 'Frontend'],
  },
  {
    id: 'tailwind-css-deep-dive',
    title: 'A Deep Dive into Tailwind CSS',
    author: 'John Smith',
    publicationDate: '2023-10-22',
    category: 'CSS',
    summary: 'Discover the utility-first approach of Tailwind CSS and how it can speed up your development workflow without writing a single line of custom CSS.',
    content: `
      <p class="mb-4">Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any of the annoying opinionated styles you have to fight to override.</p>
      <h2 class="text-2xl font-bold my-4">Utility-First Fundamentals</h2>
      <p class="mb-4">Instead of pre-designed components, Tailwind provides low-level utility classes. This lets you build completely custom designs without leaving your HTML. For example, <code>flex</code>, <code>pt-4</code>, <code>text-center</code> and <code>rotate-90</code> can be combined to build any design, directly in your markup.</p>
      <img src="https://picsum.photos/800/400?random=2" alt="Tailwind classes" class="rounded-lg my-6 w-full object-cover">
      <h2 class="text-2xl font-bold my-4">Responsive Design Made Easy</h2>
      <p class="mb-4">Styling for different screen sizes is a breeze with Tailwind's responsive variants. Simply prefix a utility with a breakpoint name (like <code>md:text-left</code>) to apply it only at that screen size and above.</p>
      <p>This approach keeps your styles co-located with your markup, making it easier to understand and maintain your components.</p>
    `,
    imageUrl: 'https://picsum.photos/600/400?random=2',
    tags: ['TailwindCSS', 'CSS', 'Design', 'Frontend'],
  },
  {
    id: 'typescript-for-beginners',
    title: 'TypeScript for Beginners: A Practical Guide',
    author: 'Alice Johnson',
    publicationDate: '2023-10-18',
    category: 'TypeScript',
    summary: 'New to TypeScript? This guide will walk you through the basics of static typing in JavaScript and how it can help you write more robust and error-free code.',
    content: `
      <p class="mb-4">TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It's essentially JavaScript with syntax for types.</p>
      <h2 class="text-2xl font-bold my-4">Why Use Types?</h2>
      <p class="mb-4">By adding types, you can catch errors during development that you would otherwise only find at runtime. This leads to more reliable code and a better developer experience, thanks to features like autocompletion and type inference.</p>
      <img src="https://picsum.photos/800/400?random=3" alt="TypeScript code" class="rounded-lg my-6 w-full object-cover">
      <h2 class="text-2xl font-bold my-4">Basic Types and Interfaces</h2>
      <p class="mb-4">We'll cover basic types like <code>string</code>, <code>number</code>, and <code>boolean</code>, as well as how to create custom types using interfaces. Interfaces are a powerful way to define contracts within your code and for code outside of your project.</p>
      <p>Getting started with TypeScript might seem daunting, but the long-term benefits for any project, big or small, are undeniable.</p>
    `,
    imageUrl: 'https://picsum.photos/600/400?random=3',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'WebDev'],
  },
  {
    id: 'the-art-of-ui-ux',
    title: 'The Art of UI/UX: Creating Intuitive Designs',
    author: 'Emily White',
    publicationDate: '2023-10-15',
    category: 'Design',
    summary: 'Explore the principles of great UI/UX design. Learn how to create user-centric interfaces that are not only beautiful but also functional and easy to use.',
    content: `
      <p class="mb-4">User Interface (UI) and User Experience (UX) design are crucial for creating successful digital products. While UI focuses on the look and feel, UX is about the overall experience of the user.</p>
      <h2 class="text-2xl font-bold my-4">Key Principles of UX</h2>
      <p class="mb-4">A good user experience is one that is useful, usable, desirable, findable, accessible, and credible. We'll break down each of these principles with real-world examples.</p>
      <img src="https://picsum.photos/800/400?random=4" alt="UI/UX design sketch" class="rounded-lg my-6 w-full object-cover">
      <h2 class="text-2xl font-bold my-4">From Wireframes to Prototypes</h2>
      <p class="mb-4">The design process often starts with low-fidelity wireframes to map out the structure and flow. These evolve into high-fidelity mockups and interactive prototypes that simulate the final product, allowing for user testing before a single line of code is written.</p>
      <p>Investing in UI/UX is investing in your user's satisfaction and your product's success.</p>
    `,
    imageUrl: 'https://picsum.photos/600/400?random=4',
    tags: ['UI', 'UX', 'Design', 'WebDev'],
  },
  {
    id: 'getting-started-with-gemini-api',
    title: 'Getting Started with the Gemini API',
    author: 'Sam Williams',
    publicationDate: '2023-11-01',
    category: 'AI',
    summary: 'A comprehensive guide to integrating Google\'s Gemini API into your applications for powerful generative AI capabilities.',
    content: `
      <p class="mb-4">The Gemini API provides access to Google's state-of-the-art large language models. This guide will help you make your first API call and explore its core features.</p>
      <h2 class="text-2xl font-bold my-4">Setting up your Environment</h2>
      <p class="mb-4">First, you'll need to get an API key from the Google AI Studio. Make sure to keep this key secure and use environment variables to manage it in your project.</p>
      <img src="https://picsum.photos/800/400?random=5" alt="API key setup" class="rounded-lg my-6 w-full object-cover">
      <h2 class="text-2xl font-bold my-4">Making your First Request</h2>
      <p class="mb-4">Using the <code>@google/genai</code> SDK, you can easily generate content. We'll walk through a simple text generation example to demonstrate how to send a prompt and receive a response from the model.</p>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 italic">"The Gemini API opens up a world of possibilities for developers, from content creation to complex reasoning tasks."</blockquote>
      <p>By the end of this tutorial, you'll be ready to start building your own AI-powered features.</p>
    `,
    imageUrl: 'https://picsum.photos/600/400?random=5',
    tags: ['Gemini', 'AI', 'API', 'Google'],
  }
];

export const trendingTopics: Topic[] = [
  { name: 'React', postCount: 25 },
  { name: 'AI', postCount: 18 },
  { name: 'TailwindCSS', postCount: 15 },
  { name: 'TypeScript', postCount: 12 },
  { name: 'UI/UX', postCount: 9 },
];
