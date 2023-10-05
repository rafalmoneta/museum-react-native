export const replacePTags = (text: string) => {
  return text.replace(/<p>/g, "").replace(/<\/p>/g, "\n");
};
