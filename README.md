<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<img src="Wallet-system.png" width="30%" style="position: relative; top: 0; right: 0;" alt="Project Logo"/>

# WALLET-SYSTEM

<em>Empowering seamless transactions for financial freedom.</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/OlubodeMichael/Wallet-system?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/OlubodeMichael/Wallet-system?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/OlubodeMichael/Wallet-system?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Mongoose-F04D35.svg?style=flat&logo=Mongoose&logoColor=white" alt="Mongoose">
<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black" alt=".ENV">
<br>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=flat&logo=MongoDB&logoColor=white" alt="MongoDB">
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">

</div>
<br>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)

---

## Overview

Wallet-system is a powerful developer tool designed to streamline digital wallet management and payment processing for logistics applications.

**Why Wallet-system?**

This project simplifies the complexities of managing digital wallets and payment transactions. The core features include:

- 💼 **Core Server Functionality:** Establishes a robust Express server for efficient API interactions.
- 💳 **Payment Processing Integration:** Seamlessly integrates with the Paystack API for secure transactions.
- 🏦 **Wallet Management:** Provides comprehensive functionalities for drivers, including balance tracking and transaction history.
- 🛠️ **Modular Architecture:** Promotes maintainability and scalability through clear separation of concerns.
- ⚠️ **Error Handling Utilities:** Enhances application reliability with custom error management for asynchronous operations.

---

### Project Index

<details open>
	<summary><b><code>WALLET-SYSTEM/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/app.js'>app.js</a></b></td>
					<td style='padding: 8px;'>- Establishes the core server functionality for the application by integrating essential middleware and routing components<br>- It sets up an Express server that handles JSON requests and logs incoming traffic<br>- The architecture facilitates interaction with various API endpoints related to payment processing, wallet management, and driver operations, ensuring a cohesive structure for managing user requests and responses within the broader codebase.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/package-lock.json'>package-lock.json</a></b></td>
					<td style='padding: 8px;'>- Wallet System Project## SummaryThe <code>package-lock.json</code> file is a crucial component of the Wallet System project, which is designed to facilitate secure and efficient management of digital wallets<br>- This file serves as a comprehensive record of the exact versions of all dependencies used in the project, ensuring consistent installations across different environments<br>- By locking the dependency versions, it helps maintain stability and predictability in the application's behavior, which is essential for a financial application where reliability is paramount.The Wallet System leverages various libraries, such as Express for server management, Mongoose for MongoDB interactions, and Axios for making HTTP requests, among others<br>- This architecture allows for seamless integration of backend services, ensuring that users can manage their wallets effectively while adhering to best practices in security and performance<br>- Overall, the <code>package-lock.json</code> file plays a vital role in the projects dependency management, contributing to the overall robustness and maintainability of the Wallet System.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/server.js'>server.js</a></b></td>
					<td style='padding: 8px;'>- Establishes a connection to a MongoDB database using Mongoose and initializes the application server<br>- By loading environment variables from a configuration file, it ensures secure handling of sensitive data such as database credentials<br>- The server listens on a specified port, enabling the application to handle incoming requests, thereby forming a crucial part of the overall architecture that supports data management and user interactions.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the foundational configuration for the wallet-system project, which focuses on integrating the Paystack API for a logistics application<br>- It outlines essential metadata, dependencies, and scripts necessary for development and testing<br>- By establishing a structured environment, it facilitates seamless interactions with various services, ensuring efficient handling of requests and data management within the application.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- services Submodule -->
	<details>
		<summary><b>services</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ services</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/services/paystackService.js'>paystackService.js</a></b></td>
					<td style='padding: 8px;'>- PaystackService facilitates seamless payment processing and fund transfers within the application<br>- It enables transaction initialization, verification, and the creation of transfer recipients, ensuring efficient management of driver payouts<br>- By integrating with the Paystack API, it streamlines financial interactions, enhancing user experience and operational efficiency in handling payments and transfers.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/services/walletService.js'>walletService.js</a></b></td>
					<td style='padding: 8px;'>- Wallet service functionality enables drivers to manage their financial transactions seamlessly within the platform<br>- It facilitates crediting and debiting driver wallets, ensuring accurate tracking of deposits and withdrawals while maintaining platform earnings<br>- Additionally, it provides real-time wallet balance retrieval, enhancing user experience and financial transparency for drivers<br>- This service is integral to the overall architecture, supporting the financial operations of the driver ecosystem.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- routes Submodule -->
	<details>
		<summary><b>routes</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ routes</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/routes/driverRoute.js'>driverRoute.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates the management of driver-related operations within the application by defining routes for creating drivers, managing their bank accounts, and integrating wallet functionalities<br>- It serves as a central point for handling requests related to driver accounts, ensuring seamless interactions between the driver and financial services, thereby enhancing the overall user experience in the codebase architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/routes/paystackRoutes.js'>paystackRoutes.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates the integration of Paystack payment processing within the application by defining a route for handling webhook notifications<br>- This enables the system to respond to payment events in real-time, ensuring seamless transaction management and enhancing the overall user experience<br>- The architecture supports modularity by separating routing logic from controller functionality, promoting maintainability and scalability.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/routes/walletRoutes.js'>walletRoutes.js</a></b></td>
					<td style='padding: 8px;'>- Facilitates wallet-related operations within the application by defining routes for accessing wallet functionalities<br>- Specifically, it establishes an endpoint to retrieve the wallet balance, leveraging the walletController for business logic<br>- This integration enhances the overall architecture by promoting a clear separation of concerns, allowing for streamlined management of wallet-related requests in the broader context of the project.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- controllers Submodule -->
	<details>
		<summary><b>controllers</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ controllers</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/controllers/driverController.js'>driverController.js</a></b></td>
					<td style='padding: 8px;'>- DriverController manages the creation and management of driver entities within the application<br>- It facilitates the registration of new drivers, the addition of bank account information, and retrieval of existing bank accounts<br>- By integrating with external services like Paystack, it ensures seamless banking operations for drivers, enhancing their experience and operational efficiency within the overall codebase architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/controllers/walletController.js'>walletController.js</a></b></td>
					<td style='padding: 8px;'>- WalletController manages driver wallet functionalities within the application, enabling drivers to check their wallet balance and withdraw funds<br>- It ensures that only valid drivers can access their wallet information and enforces balance checks before processing withdrawals<br>- By integrating with the wallet service, it streamlines financial transactions, enhancing the overall user experience in the driver management system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/controllers/paystackController.js'>paystackController.js</a></b></td>
					<td style='padding: 8px;'>- Handles Paystack webhook events to process successful payment notifications<br>- It validates incoming events, acknowledges them promptly, and subsequently updates the drivers wallet balance based on the payment amount<br>- This functionality integrates seamlessly within the broader architecture, ensuring that payment transactions are efficiently managed and reflected in the drivers account, thereby enhancing the overall user experience in the application.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- models Submodule -->
	<details>
		<summary><b>models</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ models</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/models/PlatformEarnings.js'>PlatformEarnings.js</a></b></td>
					<td style='padding: 8px;'>- Defines a Mongoose schema for managing platform earnings associated with drivers<br>- It captures essential details such as the driver’s identity, the earnings amount, the source transaction, and the balance after the transaction<br>- This structure facilitates the tracking and management of financial records within the broader application, ensuring accurate representation of earnings and enhancing the overall financial reporting capabilities of the system.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/models/Wallet.js'>Wallet.js</a></b></td>
					<td style='padding: 8px;'>- Defines a Mongoose schema for managing wallet data within the application<br>- It establishes a relationship with the Driver model, ensuring each driver has a unique wallet<br>- The schema tracks the wallet balance and the last update timestamp, facilitating efficient financial management and transaction history for drivers in the overall codebase architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/models/Driver.js'>Driver.js</a></b></td>
					<td style='padding: 8px;'>- Defines the data model for drivers within the application, encapsulating essential attributes such as name, email, phone number, wallet balance, and associated bank account information<br>- This structure facilitates the management and validation of driver-related data, ensuring that each drivers information is stored consistently and accurately, thereby supporting the overall functionality of the codebase in handling driver operations and transactions.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/models/Transactions.js'>Transactions.js</a></b></td>
					<td style='padding: 8px;'>- Defines a Mongoose schema for managing transaction records within the application<br>- It captures essential details such as the driver involved, transaction type, direction, amount, and status, ensuring accurate tracking of financial activities<br>- This schema plays a crucial role in maintaining the integrity of transaction data, facilitating operations related to deposits, withdrawals, and commissions, while supporting features like balance updates and transaction history management.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- utils Submodule -->
	<details>
		<summary><b>utils</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ utils</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/utils/appError.js'>appError.js</a></b></td>
					<td style='padding: 8px;'>- AppError serves as a custom error handling class that enhances the projects ability to manage and categorize errors effectively<br>- By encapsulating error messages and status codes, it streamlines the process of error reporting throughout the application<br>- This utility is integral to maintaining robust error management, ensuring that operational errors are clearly distinguished from programming errors, thereby improving overall application reliability and user experience.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/OlubodeMichael/Wallet-system/blob/master/utils/catchAsync.js'>catchAsync.js</a></b></td>
					<td style='padding: 8px;'>- Enhances error handling in asynchronous route handlers by wrapping them in a function that automatically catches and forwards any errors to the next middleware<br>- This utility streamlines the process of managing exceptions, ensuring that the overall application remains robust and responsive, while maintaining clean and readable code throughout the project architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### Installation

Build Wallet-system from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/OlubodeMichael/Wallet-system
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd Wallet-system
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

Wallet-system uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

<div align="left"><a href="#top">⬆ Return</a></div>

---
