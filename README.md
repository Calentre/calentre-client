<img src = "https://github.com/fiizzy/calentre/blob/main/doc/images/logo.png?raw=true"  >

# Calentre-Client 📅💰

"Welcome to the Client (invitee) side of Calentre. This repo contains the code that allows on invitee (client) to book a meeting based on the schedule of the admin (meeting owner)"

## Table of Contents 📚

- [Description](#description)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description 📝

Calentre is your go-to scheduling solution, offering a delightful way to book meetings and collect payments! 🚀 Whether you're a consultant, freelancer, or professional, we've got you covered.

<img src = "https://github.com/fiizzy/calentre/blob/main/doc/images/home_events.png?raw=true" >

---

![image](https://github.com/Calentre/calentre-client/assets/111443131/3b0a5439-6b69-43da-abeb-ae48722b2d2a)

## Features ✨

- **Scheduling:** Book appointments with ease.
- **Payment Integration:** Seamlessly paid for non free meetings.
- **Notifications:** Stay in the loop with automated email updates.
- **User-Friendly Interface:** Smooth and friendly for all users.

<img src = "https://github.com/fiizzy/calentre/blob/main/doc/images/create_event.png?raw=true" >

## Technology Stack 💻🔮

Calentre-client's magic is built using:

- **Supabase:** All backend related functions are handled by supabase.
- **Prisma:** Connecting our supabase BE and FE easily as possible.
- **NextJs + Typescript:** The front-facing client scheduler is built in react.
- **TailwindCSS:** Styling front-facing client scheduler with TailwindCSS.

## Architecture 🏛️

Calentre-client embraces the Clean Architecture principles, keeping things neat and organized. 🧹 Enjoy a clean and maintainable codebase!.

## Getting Started 🚀

Ready to dive in? Let's go:

1. Clone the repository: `git clone https://github.com/Calentre/calentre-client.git`
2. Move to the project: `cd calentre-client`
3. Make sure you're on `dev` branch: `git checkout dev` ⬅️
4. Install dependencies: `npm install`
5. Make sure you have all the environment variables (ask to Calentre's team for them)
6. Get Prisma db scheme: `npx prisma db pull`
7. Setup Prisma: `npx prisma generate`
8. Start the app: `npm run dev`

## Usage 🛠️

Using Calentre is a breeze:

1. Set the user `pmusa` in the url `http://localhost:3000/pmusa`.
2. Select a meeting.
3. Select a date and time for the meeting.
4. Click on next.
5. Under construction 🚧.

## License 📜

This project is under the [MIT License](LICENSE).
