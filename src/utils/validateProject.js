export function validateProject({ title, description, dueDate }) {
const errors = [];

if (!title || title.trim().length < 3) {
    errors.push("Title must be at least 3 characters long.");

}
if(title && title.length > 50) {
  errors.push("Title must be less than 50 characters.");
}

if (description && description.trim().length < 10) {
    errors.push("Description must be at least 10 characters long.");
}

if(!dueDate) {
    errors.push("Due date is required.");
}else{
   const selectedDate = new Date(dueDate);
   const today = new Date();
   today.setHours(0,0,0,0);
    if(selectedDate < today) {
        errors.push("Due date cannot be in the past.");
    }
}

return {
    isValid: errors.length === 0,
    errors,
};
}