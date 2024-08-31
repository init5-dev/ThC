function formatDate(dateString: string) {
  const date = new Date(dateString);

  const options = { weekday:"long", year:"numeric", month:"short", day:"numeric"};

  return date.toLocaleDateString('es-ES', options);
}

export default formatDate
