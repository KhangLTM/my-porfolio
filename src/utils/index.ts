export function getImage(fileName: string): string {
  try {
    const path = `/src/assets/img/${fileName}`;
    const modules = import.meta.glob("/src/assets/img/*", { eager: true });
    const mod = modules[path] as { default: string };
    return mod.default;
  } catch (error) {
    console.error(`Error loading image: ${fileName}`, error);
    return ""; // Return an empty string or a default image URL
  }
}
