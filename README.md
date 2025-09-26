# Carbon Credits Dashboard - Offset

## Reflections Questions

**Q1. How did you decide what to show on the main page vs details?**

**A1.** 
- Using the cards to divide the credits based on the 3 categories: Total, Active, and Retired, to keep it minimal yet informative to the user, followed by the table-based structure approach showcasing the credits data. 
- I designed the dashboard such that the user does not feel overwhelmed and also gets the information that they are looking for easily.

**Q2. What design choices did you make to keep it clean?**

**A2.**
- **Plenty of Whitespace:** Extensive use of negative space around all elements prevents clutter and allows key data points and cards to stand out.

- **Card-Based Organization:** Major metrics (Total, Active, Retired Credits) are shown in different framed cards, immediately separating and prioritizing as important information.

- **Minimalist Color Palette:** The design relies primarily on a white background and black text, using limited, functional colors (green for 'Active' status and blue for actions) to reduce visual noise.

- **Clear Typographical Hierarchy:** Bold and large fonts are used, while the data table uses a simple, readable `sans-serif` and `monospace` font.

- **Simplified Status & Action:** Each row has a simple blue button that tells you exactly what you can do (Download Certificate), which keeps the table neat.

**Q3. If the system had 10,000 credits, how would you keep the dashboard fast?**

**A3.** If the system had a large dataset, like `10,000 credits`, rendering all items at once would make the dashboard slow and unresponsive. To keep it fast, I would implement several performance strategies:

1. **Pagination / Data Slicing:**
Render only a subset of credits per page to reduce DOM elements and improve performance.

2. **Memoized Filtering and Searching:**
Use of the `useMemo hook` to compute filtered results only when filters change, avoiding unnecessary recalculations.

3. **Debounced Search Input:**
Delay filtering until the user stops typing to prevent running expensive operations on every keystroke.

