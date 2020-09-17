function trianglePerimeter(triangle) {
  const ax = triangle.a.x, ay = triangle.a.y,
    bx = triangle.b.x, by = triangle.b.y,
    cx = triangle.c.x, cy = triangle.c.y;

  const dist = (x1, y1, x2, y2) => {
    const xs = (x2 - x1) ** 2, ys = (y2 - y1) ** 2;

    return Math.sqrt(xs + ys);
  }

  return dist(ax, ay, bx, by) + dist(bx, by, cx, cy) + dist(cx, cy, ax, ay);
}
