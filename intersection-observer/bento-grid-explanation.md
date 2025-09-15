# Bento Grid CSS Explanation

## What is a Bento Grid?

A bento grid is a visually interesting layout where grid items have different sizes and positions, similar to compartments in a bento box. This is often achieved using CSS Grid's `grid-template-areas` property.

## How `grid-template-areas` Works

The `grid-template-areas` property lets you define named areas in your grid, making it easy to visually map out complex layouts.

### Example from styles.css

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 120px);
  grid-gap: 1rem;
  grid-template-areas:
    "img-1 img-1 img-2 img-3"
    "img-4 img-5 img-2 img-3"
    "img-4 img-6 img-6 img-3";
}
```

- Each string represents a row in the grid.
- Each word (e.g., `img-1`, `img-2`) is a named area.
- Repeating a name makes that area span multiple cells.
- The layout above creates a dynamic, bento-style arrangement for six images.

### Assigning Areas to Elements

Each image is assigned to a grid area using the `grid-area` property:

```css
.grid-container img[style*="img-1"] {
  grid-area: img-1;
}
.grid-container img[style*="img-2"] {
  grid-area: img-2;
}
// ...etc.
```

This approach makes it easy to:

- Visually design complex layouts
- Rearrange items by changing the area names
- Create responsive and unique grid designs

---

**Tip:** You can experiment with the area names and grid structure to create your own bento layouts!
