<img src = "https://github.com/fiizzy/calentre/blob/main/doc/images/logo.png?raw=true"  >

# Calentre 📅💰

Welcome to Calentre, the open-source alternative to Calendly! 🌟 Manage your appointments, get paid, and enjoy the scheduling experience.

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

<img src = "https://github.com/fiizzy/calentre/blob/main/doc/images/booking.png?raw=true" >

## Features ✨

- **Scheduling:** Let clients book appointments with ease.
- **Payment Integration:** Seamlessly get paid for your valuable time.
- **Customization:** Tailor the scheduling process to match your style.
- **Notifications:** Stay in the loop with automated email updates.
- **User-Friendly Interface:** Smooth and friendly for all users.

<img src = "https://github.com/fiizzy/calentre/blob/main/doc/images/create_event.png?raw=true" >

## Technology Stack 💻🔮

Calentre's magic is built using:

- **Flutter:** The admin scheduler is built with flutter. Primarily serving flutter web.
- **Supabase:** All backend related functions are handled by supabase.
- **ReactJs + NextJs + Prisma:** The front-facing client scheduler is built in react.

## Architecture 🏛️

Calentre embraces the Clean Architecture principles, keeping things neat and organized. 🧹 Enjoy a clean and maintainable codebase!
For details, see our [Architecture Guide](doc/architecture.md).

## Getting Started 🚀

Ready to dive in? Let's go:

1. Clone the repository: `git clone https://github.com/Calentre/calentre-client.git`
2. Move to the project: `cd calentre-client`
3. Install dependencies: `npm install`
4. Make sure you have all the environment variables (ask to Calentre's team for them)
5. Get Prisma db scheme: `npx prisma db pull`
6. Setup Prisma: `npx prisma generate`
7. Start the app: `npm run dev`

For details, see our [Getting Started Guide](docs/getting-started.md).

## Usage 🛠️

Using Calentre is a breeze:

1. Set the user `pmusa` in the url `http://localhost:3000/pmusa`.
2. Select a meeting.
3. Select a date and time for the meeting.
4. Click on next.
5. Under construction 🚧.

For more, check the [User Guide](doc/user-guide.md).

## Contributing 🤝

We love your input! Check out our [Contribution Guidelines](CONTRIBUTING.md).

## License 📜

This project is under the [MIT License](LICENSE).
