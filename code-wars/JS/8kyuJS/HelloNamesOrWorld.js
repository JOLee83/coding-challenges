function hello(name) {
  return name == null || name == '' ? "Hello, World!" : "Hello, " + name[0].toUpperCase() + name.toLowerCase().slice(1) + "!"
}