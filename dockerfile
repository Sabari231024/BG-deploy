# ---- Step 1: Base image ----
FROM node:18-alpine

# ---- Step 2: Set working directory ----
WORKDIR /app

# ---- Step 3: Copy package files ----
COPY package*.json ./

# ---- Step 4: Install dependencies ----
RUN npm install --production

# ---- Step 5: Copy source code ----
COPY . .

# ---- Step 6: Expose the port (runtime can override it)
EXPOSE 3000

# ---- Step 7: Start the server ----
CMD ["node", "server.js"]
