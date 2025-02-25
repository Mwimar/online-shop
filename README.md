# Online Shop

A simple online shop project built with **Node.js** and **MongoDB**.

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### ✅ Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (Running locally or using a cloud service like MongoDB Atlas)
- [Git](https://git-scm.com/)

### 📥 Installation

1. **Clone the repository**  
   ```sh
   git clone https://github.com/your-username/online-shop.git
   cd online-shop
2. npm install - to add all dependencies
3. After starting the application using npm start, create a user by entering relevant details

  ## 🛠️ Setting Up an Admin User

To create an admin user, open the MongoDB shell and switch to the online-shop database. 
Insert a new user record with the required details, including the isAdmin field set to true. 
Verify that the user was added by querying users with isAdmin set to true.
This will allow the user to access admin functionalities.
for example:
db.users.updateOne(
                    { _id: ObjectId('67bdabb0cba02b5e48dc22ed') },
                    { $set: { isAdmin: true } }
                 )
