export const getFileExtension = (filename: string): string | undefined => {
  return filename.split('.').pop();
};
