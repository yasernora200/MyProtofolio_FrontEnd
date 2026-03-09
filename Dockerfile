FROM node:20-alpine

WORKDIR /app

# بنمسح أي كاش قديم وبنركز على ملفات الـ package
COPY package*.json ./

# بنسطب المكتبات من جديد جوه الـ container 
RUN npm install

COPY . .

EXPOSE 5173

# السطر ده مهم جداً لـ Vite عشان يشتغل صح جوه Docker
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]