
// To-Do List Application
// JavaScript with Local Storage and Date

// HTML Elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskList = document.getElementById("taskList");

const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");
const taskCountLabel = document.getElementById("taskCountLabel");

const filterButtons = document.querySelectorAll(".filter-btn");

const editDialog = document.getElementById("editDialog");
const editForm = document.getElementById("editForm");
const editInput = document.getElementById("editInput");
const editDate = document.getElementById("editDate");
const cancelEdit = document.getElementById("cancelEdit");

const toast = document.getElementById("toast");

// Variables
const STORAGE_KEY = "daylist_tasks";

let tasks = loadTasks();
let currentFilter = "all";
let editingTaskId = null;


// Get Today's Date
function getToday() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}


// Display Current Date
function displayDate() {
    const today = new Date();

    const fullDate = today.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.getElementById("currentDate").textContent = fullDate;

    document.getElementById("heroDate").textContent =
        today.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long"
        });
}

displayDate();


// Format Date
function formatDate(dateString) {
    if (!dateString) return "";

    const [year, month, day] = dateString.split("-").map(Number);

    return new Date(year, month - 1, day).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}


// Generate Unique ID
function createId() {
    return Date.now().toString() + Math.random().toString(36).slice(2);
}


// Load Tasks
function loadTasks() {
    try {
        const savedTasks = localStorage.getItem(STORAGE_KEY);

        if (!savedTasks) return [];

        const parsedTasks = JSON.parse(savedTasks);

        if (!Array.isArray(parsedTasks)) return [];

        return parsedTasks
            .filter(task => task && typeof task.text === "string")
            .map(task => ({
                id: String(task.id || createId()),
                text: task.text,
                completed: Boolean(task.completed),
                dueDate: task.dueDate || "",
                createdAt: Number(task.createdAt) || Date.now()
            }));

    } catch (error) {
        console.error("Loading Error:", error);
        return [];
    }
}


// Save Tasks
function saveTasks() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        return true;
    } catch (error) {
        console.error("Storage Error:", error);
        showToast("Could not save tasks.");
        return false;
    }
}


// Show Notification
let toastTimer;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// Update Counts
function updateCounts() {
    const total = tasks.length;

    const completed = tasks.filter(task => task.completed).length;

    const pending = total - completed;

    totalCount.textContent = total;
    completedCount.textContent = completed;
    pendingCount.textContent = pending;

    taskCountLabel.textContent =
        total + (total === 1 ? " task" : " tasks");
}


// Update Filters
function updateFilters() {
    filterButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === currentFilter
        );
    });
}


// Render Tasks
function renderTasks() {
    updateCounts();

    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(task => {
        if (currentFilter === "completed") return task.completed;

        if (currentFilter === "pending") return !task.completed;

        return true;
    });


    // Empty State
    if (filteredTasks.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty-state";

        const heading = document.createElement("h3");
        heading.textContent = currentFilter === "completed"
            ? "No completed tasks yet"
            : currentFilter === "pending"
                ? "All caught up!"
                : "No tasks yet";

        const description = document.createElement("p");
        description.textContent = "Add a task to get started.";

        empty.append(heading, description);
        taskList.appendChild(empty);

        return;
    }


    // Display Each Task
    filteredTasks.forEach(task => {
        const item = document.createElement("div");

        item.className = "task-item";

        if (task.completed) {
            item.classList.add("completed");
        }

        item.dataset.taskId = task.id;


        // Checkbox
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        checkbox.checked = task.completed;
        checkbox.dataset.action = "toggle";


        // Task Details
        const details = document.createElement("div");

        const title = document.createElement("p");

        title.className = "task-title";
        title.textContent = task.text;

        const meta = document.createElement("p");

        meta.className = "task-meta";

        if (task.dueDate) {
            meta.textContent = "Due: " + formatDate(task.dueDate);

            if (!task.completed && task.dueDate < getToday()) {
                meta.classList.add("overdue");
                meta.textContent += " - Overdue";
            } else if (task.dueDate === getToday()) {
                meta.classList.add("today");
            }
        } else {
            meta.textContent =
                "Added: " + new Date(task.createdAt).toLocaleDateString();
        }

        details.append(title, meta);


        // Edit Button
        const editButton = document.createElement("button");

        editButton.className = "action-btn edit-btn";
        editButton.textContent = "Edit";
        editButton.dataset.action = "edit";


        // Delete Button
        const deleteButton = document.createElement("button");

        deleteButton.className = "action-btn delete-btn";
        deleteButton.textContent = "Delete";
        deleteButton.dataset.action = "delete";


        // Actions
        const actions = document.createElement("div");

        actions.className = "task-actions";

        actions.append(editButton, deleteButton);


        // Add Elements
        item.append(checkbox, details, actions);

        taskList.appendChild(item);
    });
}


// ADD TASK
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = taskInput.value.trim();
    const date = taskDate.value;

    if (!text) {
        showToast("Please enter a task.");
        taskInput.focus();
        return;
    }

    const newTask = {
        id: createId(),
        text: text,
        completed: false,
        dueDate: date,
        createdAt: Date.now()
    };

    tasks.unshift(newTask);

    saveTasks();

    taskForm.reset();

    currentFilter = "all";

    updateFilters();
    renderTasks();

    showToast("Task added successfully!");

    taskInput.focus();
});


// FILTER TASKS
filterButtons.forEach(button => {
    button.addEventListener("click", function() {
        currentFilter = this.dataset.filter;

        updateFilters();
        renderTasks();
    });
});


// COMPLETE TASK
taskList.addEventListener("change", function(event) {
    if (event.target.dataset.action !== "toggle") return;

    const item = event.target.closest(".task-item");
    if (!item) return;

    const taskId = item.dataset.taskId;

    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return {
                ...task,
                completed: event.target.checked
            };
        }

        return task;
    });

    saveTasks();
    renderTasks();

    showToast("Task status updated!");
});


// EDIT AND DELETE TASKS
taskList.addEventListener("click", function(event) {
    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const item = button.closest(".task-item");
    if (!item) return;

    const taskId = item.dataset.taskId;

    // EDIT
    if (button.dataset.action === "edit") {
        const task = tasks.find(task => task.id === taskId);

        if (!task) return;

        editingTaskId = taskId;

        editInput.value = task.text;
        editDate.value = task.dueDate || "";

        editDialog.showModal();

        editInput.focus();
    }


    // DELETE
    if (button.dataset.action === "delete") {
        tasks = tasks.filter(task => task.id !== taskId);

        saveTasks();
        renderTasks();

        showToast("Task deleted successfully!");
    }
});


// SAVE EDITED TASK
editForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const updatedText = editInput.value.trim();

    if (!updatedText || !editingTaskId) {
        showToast("Please enter a valid task.");
        return;
    }

    tasks = tasks.map(task => {
        if (task.id === editingTaskId) {
            return {
                ...task,
                text: updatedText,
                dueDate: editDate.value
            };
        }

        return task;
    });

    saveTasks();

    editDialog.close();

    editingTaskId = null;

    renderTasks();

    showToast("Task updated successfully!");
});


// CANCEL EDIT
cancelEdit.addEventListener("click", function() {
    editDialog.close();
    editingTaskId = null;
});

editDialog.addEventListener("close", function() {
    editingTaskId = null;
});


// INITIAL LOAD
updateFilters();
renderTasks();

console.log("Daylist Application Loaded Successfully!");
