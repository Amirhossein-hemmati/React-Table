export function generateUniqueId() {
    return Date.now().toString() + Math.random().toString();
   }