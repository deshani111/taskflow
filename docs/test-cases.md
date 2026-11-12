# TaskFlow — Manual Test Cases

## Project Information

- Project: TaskFlow
- Module: Task Management
- Test Type: Functional Testing
- Test Environment: Local Development
- Application URL: http://localhost:3001
- Browser: [Enter browser and version]
- Execution Date: [Enter actual date]
- Tester: [Enter your name]

## Test Execution Summary

| Metric | Result |
|---|---|
| Test Cases Executed | 5 |
| Passed | 5 |
| Failed | 0 |
| Blocked | 0 |
| Pass Rate | 100% |


## TC-001 — Add a Valid Task

**Precondition:** Application is running..

**Test Steps:**
1. Open the TaskFlow application.
2. Enter 'Study JavaScript' in the task input.
3. Click Add Task.

**Expected Result:**
- The new task appears in the task list.
- Total Tasks displays 1.
- Input Field becomes empty.

**Actual Result:** 
The new task appeared in the task list.
Total Tasks displayed 1.
Input Field became empty.

**Status:** PASS

## TC-002 — Add a Second Task

**Precondition:** One task already exists. ..

**Test Steps:**
1. Confirm 'Study JavaScript' Exists.
2. Enter 'Learn QA Testing'
3. Click Add Task.

**Expected Result:**
- Both tasks appear in the list.
- Total Tasks displays 2.
- The original task remains unchanged.

**Actual Result:** 
Both tasks appeared in the list.
Total Tasks displayed 2.
The original task remained unchanged.

**Status:** PASS

## TC-003 — Verify Total Task Count

**Precondition:** TaskFlow application is open.

**Test Steps:**
1. Add three different tasks.
2. Check the Total Tasks value.
3. Delete one task.
4. Check the count again.

**Expected Result:**
- After adding three tasks, the count is 3.
- After deleting one task, the count is 2.

**Actual Result:** 
After adding three tasks, the count was 3.
After deleting one task, the count was 2.

**Status:** PASS

# TC-004 — Sumbmit an Empty Task

**Precondition:** TaskFlow application is open.

**Test Steps:**
1. Leave the input field empty.
2. Click Add Task.
3. Check the task list and count.
4. Enter only spaces and click Add Task again.

**Expected Result:**
- No new task is created in either attempt.
- The task count remains unchanged.
- No blank task appears. 

**Actual Result:** 
No new task was created in either attempt.
The task count remained unchanged.
No blank task appeared.

**Status:** PASS

# TC-005 — Trim Leading and Trailing Spaces

**Precondition:** TaskFlow application is open.

**Test Steps:**
1. Enter '   Study React   ' with spaces before and after the title.
2. Click Add Task.
3. Check the displayed task title.

**Expected Result:**
- The task appears as 'Study React'.
- Leading and trailing spaces are removed.
- The task count increases by 1. 

**Actual Result:** 
The task appeared as 'Study React'.
Leading and trailing spaces were removed.
The task count increased by 1. 

**Status:** PASS


## TC-006 — Complete a Pending Task

**Precondition:** At least one pending task exists.

**Test Steps:**
1. Open the TaskFlow application.
2. Add a new task named "Study JavaScript".
3. Select the task's checkbox.

**Expected Result:**
- The checkbox becomes checked.
- The task title displays a strikethrough.

**Actual Result:** The task was marked completed and the title displayed a strikethrough.

**Status:** PASS

---

## TC-007 — Reopen a Completed Task

**Precondition:** At least one completed task exists.

**Test Steps:**
1. Locate a completed task.
2. Uncheck its checkbox.

**Expected Result:**
- The checkbox becomes unchecked.
- The strikethrough disappears.

**Actual Result:** The task returned to pending status.

**Status:** PASS

---

## TC-008 — Delete an Existing Task

**Precondition:** At least two tasks exist.

**Test Steps:**
1. Create two tasks.
2. Click Delete on the first task.

**Expected Result:**
- The selected task disappears.
- The remaining task is unchanged.
- Total Tasks decreases by one.

**Actual Result:** The selected task was deleted successfully.

**Status:** PASS

---

## TC-009 — Delete the Last Task

**Precondition:** Exactly one task exists.

**Test Steps:**
1. Ensure only one task remains.
2. Click Delete.

**Expected Result:**
- The task is removed.
- Total Tasks becomes 0.
- The empty-state message appears.

**Actual Result:** The task was removed and the empty-state message appeared.

**Status:** PASS

---

## TC-010 — Complete One of Several Tasks

**Precondition:** At least three pending tasks exist.

**Test Steps:**
1. Add three tasks.
2. Select the checkbox of the second task.

**Expected Result:**
- Only the second task becomes completed.
- The other tasks remain pending.

**Actual Result:** Only the selected task changed status.

**Status:** PASS

---

## Notes

- Results are based on manual functional testing.
- Tasks are currently stored in React state.
- Tasks are not expected to persist after a page refresh.
- Database persistence and automated testing are planned
  for future development.