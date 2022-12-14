export const getDate = (createdAt: string) => {
  const date = new Date(createdAt);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};

export const getTime = (createdAt: string) => {
  return `${createdAt?.slice(12, 16).padStart(5, "0")}`;
};
