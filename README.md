# Spendify

Spendify is a modern expense tracker web application built with Next.js, React, and Tailwind CSS. It provides users with a seamless experience to manage their budgets and track expenses efficiently. With Spendify, you can effortlessly monitor your spending habits, set budgets, and stay on top of your financial goals. Spendify is designed to be responsive across all devices, ensuring a consistent experience whether you're using it on desktop, tablet, or mobile.

![Spendify Mockup](/public/mockup.png)

## Features

- **Authentication**: Spendify utilizes Clerk Authentication for a secure and user-friendly sign-in/sign-up experience.
- **Dashboard**: Get an overview of your total budget, total spend, number of budgets, and visualize your spending with interactive bar charts.
- **Budget Management**: Easily add, remove, and edit budgets to tailor your financial tracking to your needs.
- **Expense Tracking**: Keep track of all your expenses in one place, with the ability to remove them as needed.
- **Responsive Design**: Spendify is designed to work seamlessly across devices, ensuring a consistent experience whether you're on desktop or mobile.

## Getting Started

To try Spendify, simply click the "Get Started" button on the landing page. You'll be directed to the authentication form powered by Clerk Authentication. After signing in or signing up, you'll be redirected to the dashboard. If you don't have any budgets set up, you'll be guided to the budget page to create your first budget.

## Project Structure

Spendify follows a structured layout to enhance user navigation:

- **Header Bar**: Features a search bar and user account image. Clicking on the user account image allows you to log out.
- **Side Nav Bar**: Includes the Spendify logo and three links: Dashboard, Budgets, and Expenses. Clicking on any link navigates you to the corresponding page.
- **Pages**:
  - **Dashboard**: Provides an overview of your financial status, including total budget, total spend, and number of budgets. It also displays a bar chart graph for total spend from each budget and your overall budget.
  - **Budgets Page**: Allows you to add, remove, and edit budgets.
  - **Expenses Page**: Lists all your expenses, giving you the option to remove them.

![Landing Page](/landing page.jpg)

## Technologies Used

- **Clerk Authentication**: For secure authentication.
- **Hyper UI Components**: Utilized for various UI elements such as buttons, dialogs, and alerts.
- **Tailwind CSS**: Used for styling the application, providing a sleek and modern design.
- **Next.js**: Employed as the framework for building the project, ensuring fast and efficient rendering.
- **React**: The foundation for building interactive user interfaces.
- **Drizzle ORM Studio**: Assisted in database management and interactions.
- **Neon**: Used as the PostgreSQL database for storing user data and financial information.
- **npmjs Emoji Packer Package**: For adding delightful emojis throughout the application, enhancing user experience.

## DEMO


## Contribution

Contributions to Spendify are welcome! If you find any bugs, have feature requests, or want to contribute to the project, feel free to open an issue or submit a pull request.


We hope you find Spendify helpful in managing your expenses and achieving your financial goals. If you have any questions or feedback, please don't hesitate to reach out. Happy budgeting! 📊💸
