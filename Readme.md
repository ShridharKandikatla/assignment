# Hypermart Checkout Assignment

This project is a of Hypermart Checkout System.

## Technologies Used

- HTML
- CSS 
- JavaScript 

## How It Works

1. The system maintains multiple checkout queues as arrays.
2. When a customer is added (by entering the item count), it:
   - Iterates through all queues to calculate their total item count.
   - Selects the queue with the minimum total (leftmost in case of a tie).
   - Appends the customer to that queue.

## Time Complexity

- **O(n)**

## Getting Started

Clone the repository and open `index.html` in your browser:

```bash
git clone https://github.com/ShridharKandikatla/assignment.git
cd assignment
open index.html
