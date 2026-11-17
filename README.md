# Taskify - Task Management Application

## Objective

Build a responsive Task Management web application called **Taskify** using React JS. Users can add tasks, mark them as completed, undo, delete, and filter tasks. All tasks are saved in the browser using LocalStorage, so they stay after a page refresh.

## Design Files

The app is a single page application, so there are no separate routes. The header navigation links scroll to the sections of the same page.

| Section | Link |
| ------- | ---- |
| Dashboard | `#dashboard` |
| Add Task | `#add-task` |
| Tasks | `#tasks` |

Responsive breakpoints used:

| Device | Width | Layout |
| ------ | ----- | ------ |
| Mobile | 320px to 767px | Single column, one task card per row |
| Tablet | 768px and above | Two task cards per row, header in one row |
| Desktop | 1100px and above | Three task cards per row |

## Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

## Functionalities Implemented

- Add a new task with title, description (optional) and priority (Low, Medium, High)
- Form validation: empty title and spaces-only title show an error message
- Form clears after a task is added successfully
- Task card shows title, description, priority badge, status and created date
- Mark a task as completed and change it back to active (Complete / Undo)
- Delete a task
- Filter tasks: All Tasks, Active Tasks, Completed Tasks
- Dashboard cards show Total, Active and Completed counts, and update automatically
- Empty state with a different message for each filter
- Tasks are saved in LocalStorage and restored after page refresh
- Unique ID for every task
- Fully responsive on mobile, tablet and desktop

## Assignment Completion Checklist

- [x] I have completed all the functionalities asked in the assignment
- [x] I have used only the resources (Frameworks, Design files, APIs, third-party packages) mentioned in the assignment
- [x] I have modified the README.md file based on my assignment instructions
- [x] I have completed the assignment ON TIME

Assignment specific checklist:

- [x] Add task works with title, description and priority
- [x] Empty title shows a validation message
- [x] Complete and Undo buttons work
- [x] Delete button works
- [x] All, Active and Completed filters show correct tasks
- [x] Dashboard counts update automatically
- [x] Empty state is shown when there are no tasks
- [x] Tasks stay after page refresh (LocalStorage)
- [x] No horizontal scrolling on mobile, tablet and desktop
- [x] No console errors or warnings
- [x] Only Flexbox is used for layouts
- [x] No CSS variables are used

## Quick Tips

Third-party packages used:

- None. The app uses only React JS and its built-in Hooks (`useState`, `useEffect`).

## Important Note

- This app has no login. No user credentials are needed.
- Tasks are stored only in the browser LocalStorage under the key `taskifyTasks`. Clearing browser data will remove the tasks.

## Resources

### Data Fetch URLs

- No API is used. Data is stored in LocalStorage.

### Image URLs

- No image URLs are used. Emoji icons and a CSS logo are used.

### Colors

| Use | Color |
| --- | ----- |
| Primary (buttons, logo, active filter) | `#6c63ff` |
| Primary hover | `#574fe0` |
| Light purple (icon background, focus) | `#eceaff` |
| Page background | `#f8f9fc` |
| Card background | `#ffffff` |
| Text dark navy | `#1a2040` |
| Text muted | `#6b7280` |
| Light text (date, completed title) | `#8b90a0` |
| Input border | `#d5d8e3` |
| Green (completed, low priority) | `#22a06b` |
| Orange (active, medium priority) | `#f2994a` |
| Blue (active status) | `#2f80ed` |
| Red (error, delete, high priority) | `#e5484d` |

### Font-families

- `'Segoe UI', Roboto, Helvetica, Arial, sans-serif`

## Folder Structure

```
src/
  components/
    Header/
    DashboardStats/
    TaskForm/
    TaskFilters/
    TaskList/
    TaskItem/
    EmptyState/
  App.js
  App.css
  index.js
```

Each component folder has its own `index.js` and `index.css`.

## Technologies Used

- React JS (functional components, Hooks)
- JavaScript (ES6+)
- HTML5
- CSS3 (Flexbox and media queries)
- LocalStorage