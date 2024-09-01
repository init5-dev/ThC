export const capitalize = (text: string) => {
  return text[0].toUpperCase() + text.slice(1)
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const options = { weekday:"long", year:"numeric", month:"short", day:"numeric"} as const;

  return date.toLocaleDateString('es-ES', options);
}

