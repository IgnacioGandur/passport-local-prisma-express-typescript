# Passport.js (Local Strategy) + Prisma + PostgresQL + Express + Typescript API

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

4. Open the `.env.example` file, change the values accordingly to your project and rename the file to `.env`

```bash
mv .env.example .env
```

5. Run Prisma migrations and generate the Prisma client

```bash
npx prisma migrate reset
npx prisma generate
```

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

### ⚠️Connecting to your Github repo!

1. Remove this repo's `.git` folder

```bash
rm -rf .git
```

2. Init a new Git repo

```bash
git init
```

3. Create your Github repo

4. Add your remote Github repo

```bash
git add remote origin git@github.com:<your-username>:<your-remote-repo-name>.git
```

5. Create the initial commit!

```bash
git add .
git commit -m "Initial commit from boilerplate."
git push -u origin main
```
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
