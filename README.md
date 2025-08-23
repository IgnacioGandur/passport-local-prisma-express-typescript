# Passport.js (Local Strategy) + Prisma + PostgreSQL + Express + Typescript API

A boilerplate for Express APIs with authentication using Passport.js (local strategy), Prisma ORM (PostgreSQL), TypeScript, and Express Validator. Testing setup is optional.

---

## 🏗 How to use this repo

### ✅ Prerequisites

- Node JS
- Npm
- PostgresQL (database created and running)

---

### 📋 Instructions

1. Clone this repo

```bash
git clone git@github.com:IgnacioGandur/passport-local-prisma-express-typescript.git
```

2. cd into the project folder

```bash
cd passport-local-prisma-express-typescript/
```
3. Install npm packages

```bash
npm install
```

4. Open the `.env.example` file, change the values accordingly to your project and rename the file to `.env`.

---

### ⚠️IMPORTANT!

Remember to `rm -rf .git` and `git init` so you can make this repo yours.

---

### 🧪 Testing

If you want to add HTTP tests to your project, this project has a branch called `use-testing`
which uses Vitest and Supertest. To add it to your project: 

1. Change to the `use-testing` branch with

```bash
git checkout use-testing
```

Check if you like my testing workflow and if you decide to use it:

2. Merge it to `main`:

```bash
git checkout main
git merge use-testing
```

3. Delete the `use-testing` branch after merging

```bash
git branch -d use-testing
```

**If you use this testing implementation in your project, you need to create another PostgresQL database to run your tests into it. Example: if your project uses a database called `messaging_app`, create another one called `test_messaging_app`.**

---

### 💻 Commands

- `npm run dev`: Sets `NODE_ENV` to `development` and starts the local server with tsx.
- `npm run start`: Sets `NODE_ENV` to `production` and serves the API.
- `npm run test`: Sets `NODE_ENV` to `test`, runs the `prepareDbForTests.ts` (see details below) and starts Vitest tests (you will be prompted to install the --ui extension for Vitest, accept it).

**What does `prepareDbForTests.ts` script do?**

Changes `DATABASE_URL` to `TEST_DATABASE_URL` and runs a `prisma migrate reset` which in turn runs 
a Prisma seed in case you have one so your database is consistent throughout tests.

- `npm run build`: Builds your app.
- `npm run format`: Formats your whole project with Prettier, (update the `.prettierrc` file if you have different formatting preferences).
- `npm run format:check`: Runs a Prettier format check on your whole repo using the `.prettierrc` file.
- `npm run prisma:studio:test`: Starts Prisma studio using the `TEST_DATABASE_URL` database.

---

### 🚀 Start working on your project!
